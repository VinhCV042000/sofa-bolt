import type { ISofa1Category } from 'src/types/sofa1';

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

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1CategorySchemaType = zod.infer<typeof NewSofa1CategorySchema>;

export const NewSofa1CategorySchema = zod.object({
  name: zod.string().min(1, { message: 'Tên danh mục là bắt buộc!' }),
  subtitle: zod.string(),
  image: zod.string().min(1, { message: 'Hình ảnh là bắt buộc!' }),
  description: zod.string(),
  itemCount: zod.number().min(0),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentCategory?: ISofa1Category;
};

export function Sofa1CategoryNewEditForm({ currentCategory }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentCategory?.name || '',
      subtitle: currentCategory?.subtitle || '',
      image: currentCategory?.image || '',
      description: currentCategory?.description || '',
      itemCount: currentCategory?.itemCount || 0,
      publish: currentCategory ? currentCategory.publish === 'published' : true,
    }),
    [currentCategory]
  );

  const methods = useForm<NewSofa1CategorySchemaType>({
    resolver: zodResolver(NewSofa1CategorySchema),
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
      toast.success(currentCategory ? 'Cập nhật thành công!' : 'Tạo danh mục thành công!');
      router.push(paths.dashboard.sofa1.category.root);
      console.info('SOFA1 CATEGORY DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(() => {
    setValue('image', '');
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader title="Thông tin danh mục" subheader="Tên, mô tả, hình ảnh..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text name="name" label="Tên danh mục" />
        <Field.Text name="subtitle" label="Phụ đề" />
        <Field.Text name="description" label="Mô tả" multiline rows={3} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Hình ảnh</Typography>
          <Field.Upload name="image" maxSize={3145728} onDelete={handleRemoveFile} />
        </Stack>

        <Field.Text
          name="itemCount"
          label="Số lượng sản phẩm"
          placeholder="0"
          type="number"
          InputLabelProps={{ shrink: true }}
        />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <Field.Switch name="publish" label="Hiển thị công khai" sx={{ pl: 3, flexGrow: 1 }} />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentCategory ? 'Tạo danh mục' : 'Lưu thay đổi'}
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
