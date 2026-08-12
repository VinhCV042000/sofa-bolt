import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_FAQS, SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const SUPPORT_LINKS = [
  { title: 'FAQ', desc: 'Câu hỏi thường gặp', icon: 'solar:question-circle-bold-duotone' },
  { title: 'Trung tâm trợ giúp', desc: 'Hướng dẫn và tài liệu', icon: 'solar:lifebuoy-bold-duotone' },
  { title: 'Chat trực tuyến', desc: 'Chat với tư vấn viên', icon: 'solar:chat-round-bold-duotone' },
  { title: 'Gửi ticket hỗ trợ', desc: 'Gửi yêu cầu hỗ trợ', icon: 'solar:ticket-bold-duotone' },
  { title: 'Hướng dẫn mua hàng', desc: 'Cách đặt hàng online', icon: 'solar:cart-bold-duotone' },
  { title: 'Hướng dẫn thanh toán', desc: 'Phương thức thanh toán', icon: 'solar:wallet-bold-duotone' },
  { title: 'Chính sách giao hàng', desc: 'Vận chuyển và lắp đặt', icon: 'solar:delivery-bold-duotone' },
  { title: 'Chính sách bảo hành', desc: 'Bảo hành 12 năm', icon: 'solar:shield-check-bold-duotone' },
  { title: 'Chính sách đổi trả', desc: '30 ngày đổi trả', icon: 'solar:refresh-circle-bold-duotone' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Hỗ trợ - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Hỗ trợ" title="Trung tâm hỗ trợ TERRA" subtitle="FAQ, chat trực tuyến, ticket hỗ trợ, chính sách." image={SOFA12_PAGE_IMAGES.contact} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SUPPORT_LINKS.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={1.5} sx={{ p: 3, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, cursor: 'pointer', '&:hover': { bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.04) } }}>
                  <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={item.icon} width={24} />
                  </Box>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>Câu hỏi thường gặp</Typography>
            <Stack spacing={2}>
              {SOFA12_PAGE_FAQS.map((faq, i) => (
                <Stack key={i} spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>{faq.question}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
