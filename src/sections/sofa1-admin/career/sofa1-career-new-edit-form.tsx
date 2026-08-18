import type { ISofa1Career } from 'src/types/sofa1';

import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
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

import { SOFA1_CAREER_STATUS_OPTIONS } from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1CareerSchemaType = zod.infer<typeof NewSofa1CareerSchema>;

export const NewSofa1CareerSchema = zod.object({
  title: zod.string().min(1, { message: 'Tên vị trí là bắt buộc!' }),
  department: zod.string().min(1, { message: 'Phòng ban là bắt buộc!' }),
  location: zod.string().min(1, { message: 'Địa điểm là bắt buộc!' }),
  type: zod.string().min(1, { message: 'Hình thức làm việc là bắt buộc!' }),
  salary: zod.string(),
  description: zod.string().min(1, { message: 'Mô tả công việc là bắt buộc!' }),
  requirements: zod.string().array(),
  status: zod.string(),
});

// ----------------------------------------------------------------------

type Props = {
  currentCareer?: ISofa1Career;
};

export function Sofa1CareerNewEditForm({ currentCareer }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      title: currentCareer?.title || '',
      department: currentCareer?.department || '',
      location: currentCareer?.location || '',
      type: currentCareer?.type || '',
      salary: currentCareer?.salary || '',
      description: currentCareer?.description || '',
      requirements: currentCareer?.requirements || [],
      status: currentCareer?.status || SOFA1_CAREER_STATUS_OPTIONS[0]?.value || 'open',
    }),
    [currentCareer]
  );

  const methods = useForm<NewSofa1CareerSchemaType>({
    resolver: zodResolver(NewSofa1CareerSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      toast.success(currentCareer ? 'Cập nhật thành công!' : 'Tạo tin tuyển dụng thành công!');
      router.push(paths.dashboard.sofa1.career.root);
      console.info('SOFA1 CAREER DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Card>
      <CardHeader
        title="Thông tin tuyển dụng"
        subheader="Tên vị trí, phòng ban, địa điểm, mô tả..."
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
          <Field.Text name="title" label="Tên vị trí" />
          <Field.Text name="department" label="Phòng ban" />

          <Field.Text name="location" label="Địa điểm" />
          <Field.Text name="type" label="Hình thức làm việc" placeholder="Toàn thời gian, Bán thời gian..." />

          <Field.Text name="salary" label="Mức lương" placeholder="15-25 triệu" />

          <Field.Select native name="status" label="Trạng thái" InputLabelProps={{ shrink: true }}>
            {SOFA1_CAREER_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field.Select>
        </Box>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Mô tả công việc</Typography>
          <Field.Editor name="description" sx={{ maxHeight: 480 }} />
        </Stack>

        <Field.Autocomplete
          name="requirements"
          label="Yêu cầu công việc"
          placeholder="+ Yêu cầu"
          multiple
          freeSolo
          disableCloseOnSelect
          options={[]}
          getOptionLabel={(option) => option as string}
        />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" justifyContent="flex-end">
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentCareer ? 'Tạo tin tuyển dụng' : 'Lưu thay đổi'}
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
