import type { ISofa1Collection } from 'src/types/sofa1';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useMemo, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { _sofa1Products } from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1CollectionSchemaType = zod.infer<typeof NewSofa1CollectionSchema>;

export const NewSofa1CollectionSchema = zod.object({
  name: zod.string().min(1, { message: 'Tên bộ sưu tập là bắt buộc!' }),
  image: zod.string().min(1, { message: 'Hình ảnh là bắt buộc!' }),
  description: zod.string(),
  displayCount: zod.string(),
  productIds: zod.string().array(),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentCollection?: ISofa1Collection;
};

export function Sofa1CollectionNewEditForm({ currentCollection }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentCollection?.name || '',
      image: currentCollection?.image || '',
      description: currentCollection?.description || '',
      displayCount: currentCollection?.displayCount || '',
      productIds: currentCollection?.productIds || [],
      publish: currentCollection ? currentCollection.publish === 'published' : true,
    }),
    [currentCollection]
  );

  const methods = useForm<NewSofa1CollectionSchemaType>({
    resolver: zodResolver(NewSofa1CollectionSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      toast.success(currentCollection ? 'Cập nhật thành công!' : 'Tạo bộ sưu tập thành công!');
      router.push(paths.dashboard.sofa1.collection.root);
      console.info('SOFA1 COLLECTION DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(() => {
    setValue('image', '');
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader
        title="Thông tin bộ sưu tập"
        subheader="Tên, mô tả, sản phẩm thuộc bộ sưu tập..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text name="name" label="Tên bộ sưu tập" />

        <Field.Text name="displayCount" label="Số lượng hiển thị" placeholder="12 sản phẩm" />

        <Field.Text name="description" label="Mô tả" multiline rows={3} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Hình ảnh</Typography>
          <Field.Upload name="image" maxSize={3145728} onDelete={handleRemoveFile} />
        </Stack>

        <Field.Autocomplete
          name="productIds"
          label="Sản phẩm trong bộ sưu tập"
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
        {!currentCollection ? 'Tạo bộ sưu tập' : 'Lưu thay đổi'}
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
