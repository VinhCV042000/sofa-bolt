import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đại lý B2B — Sofa7' };

const BENEFITS = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu bùng nổ', desc: 'Chiết khấu lên đến 40% cho đối tác đạt chỉ tiêu doanh số urban.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Cung cấp tài liệu, hình ảnh, video sản phẩm và co-branding chiến dịch street.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo sản phẩm', desc: 'Đào tạo kiến thức da thật, velvet neon, khung thép và kỹ năng tư vấn industrial.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành 10 năm', desc: 'Bảo hành 10 năm khung thép hàn Mig, 5 năm da/velvet. Bảo trì trọn đời.' },
  { icon: 'solar:map-bold-duotone', title: 'Vùng độc quyền', desc: 'Phân quyền khu vực bán hàng rõ ràng, bảo vệ quyền lợi đại lý street.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Giao hàng 24h', desc: 'Miễn phí giao hàng lắp đặt nội thành 24h, toàn quốc 2-5 ngày.' },
];

const LINKS = [
  { icon: 'solar:hand-shake-bold-duotone', title: 'Đăng ký đại lý', desc: 'Trở thành đối tác phân phối Sofa7', href: '/sofa7/b2b/register' },
  { icon: 'solar:document-bold-duotone', title: 'Báo giá dự án', desc: 'Nhận báo giá chi tiết cho dự án của bạn', href: '/sofa7/b2b/quote' },
  { icon: 'solar:hammer-bold-duotone', title: 'Yêu cầu sản xuất OEM', desc: 'Đóng sofa theo thương hiệu của bạn', href: '/sofa7/b2b/oem' },
  { icon: 'solar:scale-bold-duotone', title: 'Chính sách đại lý', desc: 'Chiết khấu, hỗ trợ và bảo hành B2B', href: '/sofa7/b2b/policy' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="ĐẠI LÝ B2B SOFA7"
        subtitle="Gia nhập mạng lưới đối tác Sofa7 — cùng phá vỡ quy tắc với chính sách chiết khấu bùng nổ, hỗ trợ marketing và bảo hành toàn diện cho sản phẩm industrial loft."
        image={SOFA7_PAGE_IMAGES.b2b}
        overline="Đối tác B2B"
      />

      {/* Cooperation intro */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>HỢP TÁC CÙNG SOFA7</Typography>
              <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
                Cùng kiến tạo
                <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                  {' '}không gian urban
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sofa7 tự hào đồng hành cùng các kiến trúc sư, nhà thiết kế, nhà thầu nội thất và
                đại lý phân phối trên toàn quốc. Với hơn 10 năm chế tác sofa industrial loft từ da thật,
                velvet neon và khung thép đen, chúng tôi mang đến chính sách hợp tác linh hoạt, minh bạch
                và quyền lợi tối ưu cho từng đối tác.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Dù bạn là showroom nội thất street, nhà thầu dự án hay thương hiệu cần sản xuất OEM, Sofa7
                đều có gói hợp tác phù hợp với quy mô và mục tiêu kinh doanh phá cách của bạn.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                component="img"
                src={SOFA7_PAGE_IMAGES.workshop}
                alt="Hợp tác B2B Sofa7"
                sx={{ width: 1, borderRadius: 0, aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Benefits */}
      <Sofa7Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>QUYỀN LỢI</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>Lợi ích đối tác</Typography>
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
                sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                  <Iconify icon={b.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{b.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* Cooperation links */}
      <Sofa7Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>HƯỚNG DẪN HỢP TÁC</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>Chọn hướng đi phù hợp</Typography>
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
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  boxShadow: (t) => t.customShadows.card,
                  border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
                  textTransform: 'none',
                  color: 'text.primary',
                  alignItems: 'flex-start',
                  '&:hover': { bgcolor: varAlpha(SOFA7_COLORS.electric, 0.06), borderColor: SOFA7_COLORS.electric },
                }}
              >
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: 2, height: 1 }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                    <Iconify icon={l.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textAlign: 'left', textTransform: 'uppercase' }}>{l.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{l.desc}</Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section bg="grey">
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`), textTransform: 'uppercase' }}>
              Trở thành đối tác Sofa7
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để nhận chính sách chiết khấu và hỗ trợ tốt nhất từ đội ngũ B2B Sofa7.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa7/b2b/register" size="large" variant="contained" sx={{ bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đại lý
            </Button>
          </Box>
        </Stack>
      </Sofa7Section>
    </>
  );
}
