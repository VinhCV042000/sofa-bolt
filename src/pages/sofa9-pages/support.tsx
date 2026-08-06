import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

const SUPPORT_ITEMS = [
  { title: 'FAQ', desc: 'Câu hỏi thường gặp', icon: 'solar:question-circle-bold-duotone', path: '/sofa9/faq' },
  { title: 'Chat trực tuyến', desc: 'Chat với tư vấn viên', icon: 'solar:chat-square-bold-duotone', path: '/sofa9/contact' },
  { title: 'Gửi ticket hỗ trợ', desc: 'Gửi yêu cầu hỗ trợ', icon: 'solar:ticket-bold-duotone', path: '/sofa9/contact' },
  { title: 'Hướng dẫn mua hàng', desc: 'Cách đặt hàng online', icon: 'solar:cart-bold-duotone', path: '/sofa9/products' },
  { title: 'Hướng dẫn thanh toán', desc: 'Phương thức thanh toán', icon: 'solar:wallet-bold-duotone', path: '/sofa9/payment' },
  { title: 'Chính sách giao hàng', desc: 'Giao hàng 24h', icon: 'solar:delivery-bold-duotone', path: '/sofa9/policy/shipping' },
  { title: 'Chính sách bảo hành', desc: 'Bảo hành 10 năm', icon: 'solar:shield-check-bold-duotone', path: '/sofa9/policy/warranty' },
  { title: 'Chính sách đổi trả', desc: 'Đổi trả 30 ngày', icon: 'solar:refresh-circle-bold-duotone', path: '/sofa9/policy/returns' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Hỗ trợ — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="HỖ TRỢ" title={<>HỖ <span>TRỢ</span></>} subtitle="Trung tâm trợ giúp — mọi câu hỏi đều có câu trả lời." image={SOFA9_PAGE_IMAGES.contact} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {SUPPORT_ITEMS.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={3}>
              <Stack component={RouterLink} href={item.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={item.icon} width={24} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
