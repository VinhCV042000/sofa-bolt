import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PROMOTION_SERVICES, SOFA2_FAQS, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const COVERED = [
  'Tư vấn và khảo sát miễn phí tận nơi',
  'Báo giá chi tiết minh bạch trước khi thực hiện',
  'Thực hiện bởi nghệ nhân lành nghề',
  'Sử dụng vật tư chính hãng, an toàn',
  'Kiểm tra chất lượng sau khi hoàn thành',
  'Cấp phiếu bảo hành dịch vụ',
];

const STEPS = [
  { title: 'Tiếp nhận', desc: 'Liên hệ qua hotline hoặc đặt lịch online.' },
  { title: 'Khảo sát', desc: 'Chuyên gia đánh giá tình trạng tận nơi.' },
  { title: 'Thực hiện', desc: 'Nghệ nhân xử lý với máy móc chuyên dụng.' },
  { title: 'Bàn giao', desc: 'Kiểm tra chất lượng và cấp phiếu bảo hành.' },
];

const PRICING = [
  { tier: 'Cơ bản', price: 'Miễn phí', period: 'năm đầu', features: ['Bảo trì định kỳ 2 lần/năm', 'Tư vấn qua điện thoại', 'Bảo hành khung gỗ 10 năm'], popular: false },
  { tier: 'Tiêu chuẩn', price: '500.000đ', period: '/năm', features: ['Bảo trì định kỳ 4 lần/năm', 'Vệ sinh sofa 1 lần/năm', 'Ưu đãi 20% sửa chữa', 'Bảo hành 10 năm'], popular: true },
  { tier: 'Cao cấp', price: '1.200.000đ', period: '/năm', features: ['Bảo trì không giới hạn', 'Vệ sinh sofa 2 lần/năm', 'Ưu đãi 30% sửa chữa', 'Hỗ trợ 24/7', 'Bảo hành 10 năm'], popular: false },
];

const SERVICE_IMAGES: Record<string, string> = {
  warranty: SOFA2_PAGE_IMAGES.service4,
  maintenance: SOFA2_PAGE_IMAGES.service2,
  repair: SOFA2_PAGE_IMAGES.factory,
  cleaning: SOFA2_PAGE_IMAGES.service3,
  returns: SOFA2_PAGE_IMAGES.service1,
};

export default function Page() {
  const theme = useTheme();
  const { service } = useParams();
  const item = SOFA2_PROMOTION_SERVICES.find((s) => s.slug === service);
  const [expanded, setExpanded] = useState<string | false>(false);

  if (!item) {
    return (
      <>
        <Helmet><title>Không tìm thấy dịch vụ - LUXE Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy dịch vụ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Dịch vụ bạn tìm kiếm không tồn tại.</Typography>
            <Button component={RouterLink} href="/sofa2/promotions" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại danh sách
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${item.title} - LUXE Sofa`}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Dịch vụ hậu mãi"
        title={item.title}
        subtitle={item.description}
        image={SERVICE_IMAGES[item.slug] ?? SOFA2_PAGE_IMAGES.service1}
      />

      {/* Description + covered */}
      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mô tả chi tiết</Typography>
              <Typography variant="h3">{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Đội ngũ chuyên gia của LUXE Sofa cam kết mang đến chất lượng dịch vụ tốt nhất. Mọi quy
                trình đều tuân thủ tiêu chuẩn khắt khe để đảm bảo sự hài lòng tuyệt đối của khách hàng.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>
              <Typography variant="h6">Dịch vụ bao gồm</Typography>
              {COVERED.map((c) => (
                <Stack key={c} direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                  <Typography variant="body2">{c}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>

      {/* Process steps */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quy trình</Typography>
          <Typography variant="h2">Bốn bước thực hiện</Typography>
        </Stack>
        <Grid container spacing={3}>
          {STEPS.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ position: 'relative', p: 3 }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white', fontWeight: 'fontWeightBold', fontSize: 22 }}>
                  {index + 1}
                </Box>
                <Typography variant="h6">{step.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Pricing table */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bảng giá</Typography>
          <Typography variant="h2">Gói dịch vụ</Typography>
        </Stack>
        <Grid container spacing={3} alignItems="stretch">
          {PRICING.map((plan) => (
            <Grid key={plan.tier} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: (t) => t.customShadows.card,
                  outline: plan.popular ? (t) => `2px solid ${t.vars.palette.primary.main}` : 'none',
                  position: 'relative',
                }}
              >
                {plan.popular && (
                  <Box sx={{ position: 'absolute', top: 16, right: 16, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'primary.main', color: 'common.white' }}>
                    <Typography variant="caption" fontWeight="fontWeightBold">Phổ biến</Typography>
                  </Box>
                )}
                <Typography variant="h6">{plan.tier}</Typography>
                <Stack direction="row" alignItems="flex-end" spacing={0.5}>
                  <Typography variant="h3" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>{plan.price}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>{plan.period}</Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {plan.features.map((f) => (
                    <Stack key={f} direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={18} />
                      <Typography variant="body2">{f}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button component={RouterLink} href="/sofa2/contact" variant={plan.popular ? 'contained' : 'outlined'} sx={{ mt: 'auto' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Đặt lịch
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* FAQ */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Câu hỏi thường gặp</Typography>
          <Typography variant="h2">FAQ</Typography>
        </Stack>
        <Container component={MotionViewport} maxWidth="md" sx={{ px: 0 }}>
          <Stack spacing={1.5}>
            {SOFA2_FAQS.map((faq) => (
              <Accordion
                key={faq.question}
                expanded={expanded === faq.question}
                onChange={(_, isExpanded) => setExpanded(isExpanded ? faq.question : false)}
              >
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Sofa2Section>

      {/* CTA */}
      <Sofa2Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Đặt lịch dịch vụ ngay</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ để được tư vấn và đặt lịch dịch vụ {item.title.toLowerCase()} từ LUXE Sofa.</Typography>
          <Button component={RouterLink} href="/sofa2/contact" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
            Đặt lịch ngay
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
