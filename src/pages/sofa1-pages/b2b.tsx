import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';
import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đại lý B2B — Casa Sofa' };

const BENEFITS = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu hấp dẫn', desc: 'Mức chiết khấu lên đến 40% cho đối tác đạt chỉ tiêu doanh số hàng năm.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Cung cấp tài liệu, hình ảnh, video sản phẩm và co-branding chiến dịch.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo sản phẩm', desc: 'Đào tạo kiến thức da bò, gỗ sồi và kỹ năng tư vấn cho đội ngũ bán hàng.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành dài hạn', desc: 'Bảo hành 7 năm khung gỗ, 5 năm đệm và bọc — chính sách ưu đãi riêng cho dự án.' },
  { icon: 'solar:map-bold-duotone', title: 'Vùng độc quyền', desc: 'Phân quyền khu vực bán hàng rõ ràng, bảo vệ quyền lợi đại lý.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Giao hàng nhanh', desc: 'Miễn phí giao hàng lắp đặt toàn quốc, giao trong 7-20 ngày theo hợp đồng.' },
];

const LINKS = [
  { icon: 'solar:hand-shake-bold-duotone', title: 'Đăng ký đại lý', desc: 'Trở thành đối tác phân phối Casa Sofa', href: '/sofa1/b2b/register' },
  { icon: 'solar:document-bold-duotone', title: 'Báo giá dự án', desc: 'Nhận báo giá chi tiết cho dự án của bạn', href: '/sofa1/b2b/quote' },
  { icon: 'solar:hammer-bold-duotone', title: 'Yêu cầu sản xuất OEM', desc: 'Đóng sofa theo thương hiệu của bạn', href: '/sofa1/b2b/oem' },
  { icon: 'solar:scale-bold-duotone', title: 'Chính sách đại lý', desc: 'Chiết khấu, hỗ trợ và bảo hành B2B', href: '/sofa1/b2b/policy' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        title="Đại lý B2B Casa Sofa"
        subtitle="Gia nhập mạng lưới đối tác Casa Sofa — cùng phát triển với chính sách chiết khấu, hỗ trợ marketing và bảo hành toàn diện."
        image={SOFA1_PAGE_IMAGES.b2b}
        overline="Đối tác B2B"
      />

      {/* Cooperation intro */}
      <Sofa1Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hợp tác cùng Casa Sofa</Typography>
              <Typography variant="h2">
                Cùng kiến tạo
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>
                  {' '}không gian sang trọng
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Casa Sofa tự hào đồng hành cùng các kiến trúc sư, nhà thiết kế, nhà thầu nội thất và
                đại lý phân phối trên toàn quốc. Với hơn 12 năm chế tác sofa cao cấp từ da bò Ý và
                gỗ sồi, chúng tôi mang đến chính sách hợp tác linh hoạt, minh bạch và quyền lợi tối ưu
                cho từng đối tác.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Dù bạn là showroom nội thất, nhà thầu dự án hay thương hiệu cần sản xuất OEM, Casa
                Sofa đều có gói hợp tác phù hợp với quy mô và mục tiêu kinh doanh của bạn.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                component="img"
                src={SOFA1_PAGE_IMAGES.workshop}
                alt="Hợp tác B2B Casa Sofa"
                sx={{ width: 1, borderRadius: 3, aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Sofa1Section>

      {/* Benefits */}
      <Sofa1Section bg="grey">
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
            <Grid key={b.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={b.icon} width={28} />
                </Box>
                <Typography variant="h6">{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{b.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* Cooperation links */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hướng dẫn hợp tác</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Chọn hướng đi phù hợp</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {LINKS.map((l, index) => (
            <Grid key={l.title} xs={12} sm={6} md={3}>
              <Button
                component={RouterLink}
                href={l.href}
                fullWidth
                sx={{
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: (t) => t.customShadows.card,
                  textTransform: 'none',
                  color: 'text.primary',
                  alignItems: 'flex-start',
                  '&:hover': { bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.06) },
                }}
              >
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: 2, height: 1 }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
                    <Iconify icon={l.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textAlign: 'left' }}>{l.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{l.desc}</Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section bg="grey">
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>
              Trở thành đối tác Casa Sofa
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để nhận chính sách chiết khấu và hỗ trợ tốt nhất từ đội ngũ B2B Casa Sofa.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa1/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đại lý
            </Button>
          </Box>
        </Stack>
      </Sofa1Section>
    </>
  );
}
