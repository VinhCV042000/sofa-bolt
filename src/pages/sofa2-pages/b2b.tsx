import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { useTheme } from '@mui/material/styles';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Hợp tác B2B — LUXE Sofa' };

const BENEFITS = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Hoa hồng hấp dẫn', desc: 'Mức chiết khấu lên đến 40% cho đối tác đạt chỉ tiêu doanh số.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Cung cấp tài liệu, hình ảnh, video và co-branding chiến dịch.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo sản phẩm', desc: 'Đào tạo kiến thức sản phẩm, tư vấn và kỹ năng bán hàng cho đội ngũ.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành dài hạn', desc: 'Chính sách bảo hành ưu đãi riêng cho dự án và đối tác B2B.' },
];

const PARTNER_TYPES = [
  { icon: 'solar:pen-nib-bold-duotone', title: 'Nhà thiết kế', desc: 'Kiến trúc sư, nhà thiết kế nội thất.' },
  { icon: 'solar:hammer-hammer-bold-duotone', title: 'Nhà thầu', desc: 'Nhà thầu thi công nội thất, dự án.' },
  { icon: 'solar:shop-bold-duotone', title: 'Showroom', desc: 'Showroom nội thất, đại lý phân phối.' },
  { icon: 'solar:box-bold-duotone', title: 'Đại lý phân phối', desc: 'Đại lý bán lẻ sofa trên toàn quốc.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Hợp tác B2B"
        subtitle="Gia nhập mạng lưới đối tác LUXE Sofa — cùng phát triển với chính sách hoa hồng và hỗ trợ toàn diện."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Đối tác B2B"
      />

      {/* Benefits */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quyền lợi</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Lợi ích đối tác</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {BENEFITS.map((b, index) => (
            <Grid key={b.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
                  <Iconify icon={b.icon} width={28} />
                </Box>
                <Typography variant="h6">{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{b.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Partner types */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }} component={MotionViewport}>
          <Typography variant="h3">Dành cho ai?</Typography>
        </Stack>
        <Grid container spacing={3}>
          {PARTNER_TYPES.map((p, index) => (
            <Grid key={p.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                alignItems="center"
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={p.icon} width={32} />
                </Box>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{p.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Registration CTA + links */}
      <Sofa2Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>
              Trở thành đối tác LUXE Sofa
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để nhận chính sách chiết khấu và hỗ trợ tốt nhất.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đối tác
            </Button>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/b2b/quote" variant="outlined">Yêu cầu báo giá dự án</Button>
            <Button component={RouterLink} href="/sofa2/b2b/oem" variant="outlined">Sản xuất OEM</Button>
            <Button component={RouterLink} href="/sofa2/b2b/policy" variant="outlined">Chính sách đối tác</Button>
          </Stack>
        </Stack>
      </Sofa2Section>
    </>
  );
}
