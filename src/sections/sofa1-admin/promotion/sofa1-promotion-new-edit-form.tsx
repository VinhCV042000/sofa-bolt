import type { ISofa1Promotion } from 'src/types/sofa1';

import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { SOFA1_PROMOTION_STATUS_OPTIONS } from 'src/_mock/_sofa1';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type NewSofa1PromotionSchemaType = zod.infer<typeof NewSofa1PromotionSchema>;

export const NewSofa1PromotionSchema = zod.object({
  title: zod.string().min(1, { message: 'Tên khuyến mãi là bắt buộc!' }),
  service: zod.string().min(1, { message: 'Dịch vụ là bắt buộc!' }),
  icon: zod.string().min(1, { message: 'Icon là bắt buộc!' }),
  description: zod.string().min(1, { message: 'Mô tả là bắt buộc!' }),
  discountPercent: zod.number().min(0).max(100),
  validFrom: zod.union([zod.string(), zod.number(), zod.null()]),
  validUntil: zod.union([zod.string(), zod.number(), zod.null()]),
  status: zod.string(),
});

// ----------------------------------------------------------------------

type Props = {
  currentPromotion?: ISofa1Promotion;
};

export function Sofa1PromotionNewEditForm({ currentPromotion }: Props) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      title: currentPromotion?.title || '',
      service: currentPromotion?.service || '',
      icon: currentPromotion?.icon || '',
      description: currentPromotion?.description || '',
      discountPercent: currentPromotion?.discountPercent || 0,
      validFrom: currentPromotion?.validFrom ?? null,
      validUntil: currentPromotion?.validUntil ?? null,
      status: currentPromotion?.status || SOFA1_PROMOTION_STATUS_OPTIONS[0]?.value || 'active',
    }),
    [currentPromotion]
  );

  const methods = useForm<NewSofa1PromotionSchemaType>({
    resolver: zodResolver(NewSofa1PromotionSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      toast.success(currentPromotion ? 'Cập nhật thành công!' : 'Tạo khuyến mãi thành công!');
      router.push(paths.dashboard.sofa1.promotion.root);
      console.info('SOFA1 PROMOTION DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <Card>
      <CardHeader
        title="Thông tin khuyến mãi"
        subheader="Tên, dịch vụ, mô tả, mức giảm giá..."
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
          <Field.Text name="title" label="Tên khuyến mãi" />
          <Field.Text
            name="service"
            label="Dịch vụ"
            placeholder="Giao hàng, Lắp đặt, Bảo trì..."
          />

          <Field.Text
            name="icon"
            label="Icon"
            placeholder="solar:gift-bold — mã icon Iconify"
          />

          <Field.Text
            name="discountPercent"
            label="Mức giảm giá"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    %
                  </Box>
                </InputAdornment>
              ),
            }}
          />

          <Field.Select native name="status" label="Trạng thái" InputLabelProps={{ shrink: true }}>
            {SOFA1_PROMOTION_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field.Select>

          <Field.DatePicker name="validFrom" label="Bắt đầu từ" />
          <Field.DatePicker name="validUntil" label="Đến hết ngày" />
        </Box>

        <Field.Text name="description" label="Mô tả" multiline rows={3} />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack spacing={3} direction="row" alignItems="center" justifyContent="flex-end">
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentPromotion ? 'Tạo khuyến mãi' : 'Lưu thay đổi'}
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
