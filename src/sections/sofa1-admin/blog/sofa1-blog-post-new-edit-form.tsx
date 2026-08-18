import type { ISofa1BlogPost } from 'src/types/sofa1';

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

import { _sofa1BlogCategories } from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1BlogPostSchemaType = zod.infer<typeof NewSofa1BlogPostSchema>;

export const NewSofa1BlogPostSchema = zod.object({
  title: zod.string().min(1, { message: 'Tiêu đề là bắt buộc!' }),
  category: zod.string().min(1, { message: 'Chọn danh mục!' }),
  coverUrl: zod.string().min(1, { message: 'Ảnh đại diện là bắt buộc!' }),
  excerpt: zod.string(),
  content: zod.string().min(1, { message: 'Nội dung là bắt buộc!' }),
  author: zod.string().min(1, { message: 'Tác giả là bắt buộc!' }),
  readTime: zod.string(),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentPost?: ISofa1BlogPost;
};

export function Sofa1BlogPostNewEditForm({ currentPost }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      title: currentPost?.title || '',
      category: currentPost?.category || _sofa1BlogCategories[0]?.slug || '',
      coverUrl: currentPost?.coverUrl || '',
      excerpt: currentPost?.excerpt || '',
      content: currentPost?.content || '',
      author: currentPost?.author || '',
      readTime: currentPost?.readTime || '',
      publish: currentPost ? currentPost.publish === 'published' : true,
    }),
    [currentPost]
  );

  const methods = useForm<NewSofa1BlogPostSchemaType>({
    resolver: zodResolver(NewSofa1BlogPostSchema),
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
      toast.success(currentPost ? 'Cập nhật thành công!' : 'Tạo bài viết thành công!');
      router.push(paths.dashboard.sofa1.blog.root);
      console.info('SOFA1 BLOG POST DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', '');
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader
        title="Nội dung bài viết"
        subheader="Tiêu đề, danh mục, tác giả, nội dung..."
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
          <Field.Text name="title" label="Tiêu đề" />

          <Field.Select native name="category" label="Danh mục" InputLabelProps={{ shrink: true }}>
            {_sofa1BlogCategories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.label}
              </option>
            ))}
          </Field.Select>

          <Field.Text name="author" label="Tác giả" />
          <Field.Text name="readTime" label="Thời gian đọc" placeholder="5 phút đọc" />
        </Box>

        <Field.Text name="excerpt" label="Mô tả ngắn" multiline rows={2} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Nội dung chi tiết</Typography>
          <Field.Editor name="content" sx={{ maxHeight: 480 }} />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Ảnh đại diện</Typography>
          <Field.Upload name="coverUrl" maxSize={3145728} onDelete={handleRemoveFile} />
        </Stack>
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <Field.Switch name="publish" label="Hiển thị công khai" sx={{ pl: 3, flexGrow: 1 }} />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentPost ? 'Tạo bài viết' : 'Lưu thay đổi'}
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
