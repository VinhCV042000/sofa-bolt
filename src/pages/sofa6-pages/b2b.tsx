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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đại lý B2B — Sofa Earth' };

const BENEFITS = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu hấp dẫn', desc: 'Chiết khấu lên đến 35% cho đối tác đạt chỉ tiêu doanh số hàng năm.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Cung cấp tài liệu, hình ảnh, video sản phẩm và co-branding chiến dịch xanh.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo sản phẩm', desc: 'Đào tạo kiến thức linen, bông hữu cơ, wool và kỹ năng tư vấn cho đội ngũ.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành dài hạn', desc: 'Bảo hành 5 năm khung gỗ và đệm. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi.' },
  { icon: 'solar:map-bold-duotone', title: 'Vùng độc quyền', desc: 'Phân quyền khu vực bán hàng rõ ràng, bảo vệ quyền lợi đại lý.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Giao hàng nhanh', desc: 'Miễn phí giao hàng lắp đặt toàn quốc, giao trong 5-15 ngày theo hợp đồng.' },
];

const LINKS = [
  { icon: 'solar:hand-shake-bold-duotone', title: 'Đăng ký đại lý', desc: 'Trở thành đối tác phân phối Sofa Earth', href: '/sofa6/b2b/register' },
  { icon: 'solar:document-bold-duotone', title: 'Báo giá dự án', desc: 'Nhận báo giá chi tiết cho dự án của bạn', href: '/sofa6/b2b/quote' },
  { icon: 'solar:hammer-bold-duotone', title: 'Yêu cầu sản xuất OEM', desc: 'Đóng sofa theo thương hiệu của bạn', href: '/sofa6/b2b/oem' },
  { icon: 'solar:scale-bold-duotone', title: 'Chính sách đại lý', desc: 'Chiết khấu, hỗ trợ và bảo hành B2B', href: '/sofa6/b2b/policy' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Đại lý B2B Sofa Earth"
        subtitle="Gia nhập mạng lưới đối tác Sofa Earth — cùng phát triển với chính sách chiết khấu, hỗ trợ marketing và bảo hành toàn diện cho sản phẩm thủ công từ vật liệu thiên nhiên."
        image={SOFA6_PAGE_IMAGES.b2b}
        overline="Đối tác B2B"
      />

      {/* Cooperation intro */}
      <Sofa6Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hợp tác cùng Sofa Earth</Typography>
              <Typography variant="h2">
                Cùng kiến tạo
                <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>
                  {' '}không gian xanh
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sofa Earth tự hào đồng hành cùng các kiến trúc sư, nhà thiết kế, nhà thầu nội thất và
                đại lý phân phối trên toàn quốc. Với hơn 15 năm chế tác sofa thủ công từ linen tự nhiên,
                bông hữu cơ và wool, chúng tôi mang đến chính sách hợp tác linh hoạt, minh bạch và quyền
                lợi tối ưu cho từng đối tác.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Dù bạn là showroom nội thất xanh, nhà thầu dự án hay thương hiệu cần sản xuất OEM, Sofa
                Earth đều có gói hợp tác phù hợp với quy mô và mục tiêu kinh doanh bền vững của bạn.
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Box
                component="img"
                src={SOFA6_PAGE_IMAGES.workshop}
                alt="Hợp tác B2B Sofa Earth"
                sx={{ width: 1, borderRadius: 3, aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Sofa6Section>

      {/* Benefits */}
      <Sofa6Section bg="grey">
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
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={b.icon} width={28} />
                </Box>
                <Typography variant="h6">{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{b.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* Cooperation links */}
      <Sofa6Section>
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
                  '&:hover': { bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.06) },
                }}
              >
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: 2, height: 1 }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' }}>
                    <Iconify icon={l.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textAlign: 'left' }}>{l.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>{l.desc}</Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* CTA */}
      <Sofa6Section bg="grey">
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>
              Trở thành đối tác Sofa Earth
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để nhận chính sách chiết khấu và hỗ trợ tốt nhất từ đội ngũ B2B Sofa Earth.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa6/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đại lý
            </Button>
          </Box>
        </Stack>
      </Sofa6Section>
    </>
  );
}
