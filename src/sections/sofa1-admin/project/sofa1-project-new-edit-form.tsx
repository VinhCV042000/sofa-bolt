import type { ISofa1Project } from 'src/types/sofa1';

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

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { _sofa1Products, _sofa1ProjectTypes } from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1ProjectSchemaType = zod.infer<typeof NewSofa1ProjectSchema>;

export const NewSofa1ProjectSchema = zod.object({
  name: zod.string().min(1, { message: 'Tên dự án là bắt buộc!' }),
  type: zod.string().min(1, { message: 'Chọn loại dự án!' }),
  year: zod.string(),
  location: zod.string(),
  description: zod.string().min(1, { message: 'Mô tả là bắt buộc!' }),
  images: zod.string().array(),
  productIds: zod.string().array(),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentProject?: ISofa1Project;
};

export function Sofa1ProjectNewEditForm({ currentProject }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentProject?.name || '',
      type: currentProject?.type || _sofa1ProjectTypes[0]?.slug || '',
      year: currentProject?.year || '',
      location: currentProject?.location || '',
      description: currentProject?.description || '',
      images: currentProject?.images || [],
      productIds: currentProject?.productIds || [],
      publish: currentProject ? currentProject.publish === 'published' : true,
    }),
    [currentProject]
  );

  const methods = useForm<NewSofa1ProjectSchemaType>({
    resolver: zodResolver(NewSofa1ProjectSchema),
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
      toast.success(currentProject ? 'Cập nhật thành công!' : 'Tạo dự án thành công!');
      router.push(paths.dashboard.sofa1.project.root);
      console.info('SOFA1 PROJECT DATA', data);
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
      <CardHeader
        title="Thông tin dự án"
        subheader="Tên, loại dự án, năm, địa điểm..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <Field.Text name="name" label="Tên dự án" />

          <Field.Select native name="type" label="Loại dự án" InputLabelProps={{ shrink: true }}>
            {_sofa1ProjectTypes.map((type) => (
              <option key={type.slug} value={type.slug}>
                {type.label}
              </option>
            ))}
          </Field.Select>

          <Field.Text name="year" label="Năm thực hiện" />
          <Field.Text name="location" label="Địa điểm" />
        </Box>

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

        <Field.Autocomplete
          name="productIds"
          label="Sản phẩm sử dụng trong dự án"
          placeholder="+ Sản phẩm"
          multiple
          disableCloseOnSelect
          options={_sofa1Products.map((product) => product.id)}
          getOptionLabel={(option) =>
            _sofa1Products.find((product) => product.id === option)?.name || (option as string)
          }
        />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <Field.Switch name="publish" label="Hiển thị công khai" sx={{ pl: 3, flexGrow: 1 }} />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProject ? 'Tạo dự án' : 'Lưu thay đổi'}
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
        {renderDetails}

        {renderActions}
      </Stack>
    </Form>
  );
}
