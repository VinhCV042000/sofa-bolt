import type { ISofa1Showroom } from 'src/types/sofa1';

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

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1ShowroomSchemaType = zod.infer<typeof NewSofa1ShowroomSchema>;

export const NewSofa1ShowroomSchema = zod.object({
  name: zod.string().min(1, { message: 'Tên showroom là bắt buộc!' }),
  address: zod.string().min(1, { message: 'Địa chỉ là bắt buộc!' }),
  city: zod.string().min(1, { message: 'Thành phố là bắt buộc!' }),
  phone: zod.string().min(1, { message: 'Số điện thoại là bắt buộc!' }),
  openHours: zod.string(),
  coverUrl: zod.string().min(1, { message: 'Hình ảnh là bắt buộc!' }),
  mapUrl: zod.string().optional(),
  publish: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentShowroom?: ISofa1Showroom;
};

export function Sofa1ShowroomNewEditForm({ currentShowroom }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      name: currentShowroom?.name || '',
      address: currentShowroom?.address || '',
      city: currentShowroom?.city || '',
      phone: currentShowroom?.phone || '',
      openHours: currentShowroom?.openHours || '',
      coverUrl: currentShowroom?.coverUrl || '',
      mapUrl: currentShowroom?.mapUrl || '',
      publish: currentShowroom?.publish === 'published',
    }),
    [currentShowroom]
  );

  const methods = useForm<NewSofa1ShowroomSchemaType>({
    resolver: zodResolver(NewSofa1ShowroomSchema),
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
      toast.success(currentShowroom ? 'Cập nhật thành công!' : 'Tạo showroom thành công!');
      router.push(paths.dashboard.sofa1.showroom.root);
      console.info('SOFA1 SHOWROOM DATA', data);
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
        title="Thông tin showroom"
        subheader="Tên, địa chỉ, thành phố, liên hệ..."
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
          <Field.Text name="name" label="Tên showroom" />
          <Field.Text name="city" label="Thành phố" />
          <Field.Text name="phone" label="Số điện thoại" />
          <Field.Text name="openHours" label="Giờ mở cửa" placeholder="8:00 - 21:00 hàng ngày" />
          <Field.Text name="mapUrl" label="Đường dẫn Google Maps" placeholder="Google Maps URL" />
        </Box>

        <Field.Text name="address" label="Địa chỉ" multiline rows={2} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Hình ảnh</Typography>
          <Field.Upload name="coverUrl" maxSize={3145728} onDelete={handleRemoveFile} />
        </Stack>
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
      <Field.Switch name="publish" label="Hiển thị công khai" sx={{ pl: 3, flexGrow: 1 }} />

      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentShowroom ? 'Tạo showroom' : 'Lưu thay đổi'}
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
