import type { ISofa1Product } from 'src/types/sofa1';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useMemo, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import {
  _sofa1Categories,
  _sofa1Collections,
  SOFA1_PRODUCT_STOCK_OPTIONS,
} from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1ProductSchemaType = zod.infer<typeof NewSofa1ProductSchema>;

export const NewSofa1ProductSchema = zod.object({
  name: zod.string().min(1, { message: 'Tên sản phẩm là bắt buộc!' }),
  sku: zod.string().min(1, { message: 'Mã SKU là bắt buộc!' }),
  categoryId: zod.string().min(1, { message: 'Chọn danh mục!' }),
  collectionId: zod.string(),
  price: zod.number().min(1, { message: 'Giá không được để trống!' }),
  priceSale: zod.number().nullable(),
  description: zod.string().min(1, { message: 'Mô tả là bắt buộc!' }),
  subDescription: zod.string(),
  badge: zod.string(),
  quantity: zod.number().min(0),
  available: zod.number().min(0),
  inventoryType: zod.string(),
  material: zod.string(),
  size: zod.string(),
  colors: zod.string().array(),
  colorNames: zod.string().array(),
  images: zod.string().array(),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentProduct?: ISofa1Product;
};

export function Sofa1ProductNewEditForm({ currentProduct }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      sku: currentProduct?.sku || '',
      categoryId: currentProduct?.categoryId || _sofa1Categories[0]?.id || '',
      collectionId: currentProduct?.collectionId || '',
      price: currentProduct?.price || 0,
      priceSale: currentProduct?.priceSale ?? null,
      description: currentProduct?.description || '',
      subDescription: currentProduct?.subDescription || '',
      badge: currentProduct?.badge || '',
      quantity: currentProduct?.quantity || 0,
      available: currentProduct?.available || 0,
      inventoryType: currentProduct?.inventoryType || 'in stock',
      material: currentProduct?.material || '',
      size: currentProduct?.size || '',
      colors: currentProduct?.colors || [],
      colorNames: currentProduct?.colorNames || [],
      images: currentProduct?.images || [],
      publish: currentProduct ? currentProduct.publish === 'published' : true,
    }),
    [currentProduct]
  );

  const methods = useForm<NewSofa1ProductSchemaType>({
    resolver: zodResolver(NewSofa1ProductSchema),
    defaultValues,
  });

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      toast.success(currentProduct ? 'Cập nhật thành công!' : 'Tạo sản phẩm thành công!');
      router.push(paths.dashboard.sofa1.product.root);
      console.info('SOFA1 PRODUCT DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      setValue('images', values.images?.filter((file) => file !== inputFile) || []);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', [], { shouldValidate: true });
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader title="Thông tin cơ bản" subheader="Tên, mã SKU, danh mục, mô tả..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <Field.Text name="name" label="Tên sản phẩm" />
          <Field.Text name="sku" label="Mã SKU" />

          <Field.Select native name="categoryId" label="Danh mục" InputLabelProps={{ shrink: true }}>
            {_sofa1Categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field.Select>

          <Field.Select native name="collectionId" label="Bộ sưu tập" InputLabelProps={{ shrink: true }}>
            <option value="">— Không thuộc bộ sưu tập —</option>
            {_sofa1Collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
          </Field.Select>
        </Box>

        <Field.Text name="subDescription" label="Mô tả ngắn" multiline rows={2} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Mô tả chi tiết</Typography>
          <Field.Editor name="description" sx={{ maxHeight: 480 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Hình ảnh</Typography>
          <Field.Upload
            multiple
            thumbnail
            name="images"
            maxSize={3145728}
            onRemove={handleRemoveFile}
            onRemoveAll={handleRemoveAllFiles}
            onUpload={() => console.info('ON UPLOAD')}
          />
        </Stack>
      </Stack>
    </Card>
  );

  const renderProperties = (
    <Card>
      <CardHeader title="Thuộc tính" subheader="Chất liệu, kích thước, màu sắc, kho..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <Field.Text name="material" label="Chất liệu" placeholder="Da bò Ý, khung gỗ sồi" />
          <Field.Text name="size" label="Kích thước" placeholder="220x95cm" />

          <Field.Text
            name="quantity"
            label="Tổng số lượng"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="available"
            label="Số lượng còn"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />

          <Field.Select native name="inventoryType" label="Trạng thái kho" InputLabelProps={{ shrink: true }}>
            {SOFA1_PRODUCT_STOCK_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field.Select>

          <Field.Text name="badge" label="Nhãn hiển thị" placeholder="Bestseller, Mới, -25%..." />
        </Box>

        <Field.Autocomplete
          name="colorNames"
          label="Màu sắc (tên hiển thị)"
          placeholder="+ Màu"
          multiple
          freeSolo
          disableCloseOnSelect
          options={[]}
          getOptionLabel={(option) => option as string}
        />

        <Field.Autocomplete
          name="colors"
          label="Màu sắc (mã hex)"
          placeholder="+ #Hex"
          multiple
          freeSolo
          disableCloseOnSelect
          options={[]}
          getOptionLabel={(option) => option as string}
        />
      </Stack>
    </Card>
  );

  const renderPricing = (
    <Card>
      <CardHeader title="Giá bán" subheader="Giá gốc và giá khuyến mãi" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text
          name="price"
          label="Giá gốc"
          placeholder="0"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box component="span" sx={{ color: 'text.disabled' }}>
                  đ
                </Box>
              </InputAdornment>
            ),
          }}
        />

        <Field.Text
          name="priceSale"
          label="Giá khuyến mãi (để trống nếu không giảm giá)"
          placeholder="0"
          type="number"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box component="span" sx={{ color: 'text.disabled' }}>
                  đ
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <Field.Switch
        name="publish"
        label="Hiển thị công khai"
        sx={{ pl: 3, flexGrow: 1 }}
      />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProduct ? 'Tạo sản phẩm' : 'Lưu thay đổi'}
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
        {renderDetails}

        {renderProperties}

        {renderPricing}

        {renderActions}
      </Stack>
    </Form>
  );
}
