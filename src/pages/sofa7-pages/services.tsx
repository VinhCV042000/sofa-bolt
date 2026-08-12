import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ Sofa7 — Urban Loft' };

const SERVICE_CATEGORIES = [
  {
    title: 'THIẾT KẾ NỘI THẤT',
    slug: 'design',
    icon: 'solar:pen-nib-bold-duotone',
    description: 'Thiết kế nội thất industrial theo yêu cầu. Bản vẽ 3D, chọn vật liệu, chọn màu velvet. Đội ngũ kiến trúc sư Sofa7 sẽ mang vibe loft vào không gian của bạn.',
    features: ['Bản vẽ 3D Sketchup', 'Chọn vật liệu & màu sắc', 'Tư vấn không gian', 'Báo giá minh bạch'],
    image: SOFA7_PAGE_IMAGES.service1,
    href: '/sofa7/services/design',
  },
  {
    title: 'DỊCH VỤ SẢN XUẤT',
    slug: 'production',
    icon: 'solar:hammer-bold-duotone',
    description: 'Sản xuất sofa theo yêu cầu. Hàn Mig khung thép, bọc da/velvet thủ công. Mỗi sofa là một kiệt tác độc nhất — không sofa nào giống sofa nào.',
    features: ['Hàn Mig khung thép', 'Bọc da/velvet thủ công', 'Custom màu & size', 'QC 12 công đoạn'],
    image: SOFA7_PAGE_IMAGES.service2,
    href: '/sofa7/services/production',
  },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="DỊCH VỤ"
        title={
          <>
            DỊCH VỤ <span>SOFA7</span>
          </>
        }
        subtitle="Thiết kế nội thất & sản xuất sofa theo yêu cầu. Vibe loft nguyên bản, cá tính độc nhất."
        image="https://images.pexels.com/photos/6312016/pexels-photo-6312016.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Service categories */}
      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ</Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            2 DỊCH VỤ <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>CHUYÊN NGHIỆP</Box>
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {SERVICE_CATEGORIES.map((service) => (
            <Grid key={service.slug} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                  overflow: 'hidden',
                  height: 1,
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Box component="img" src={service.image} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.4s' } }} />
                  <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${SOFA7_COLORS.concrete} 0%, ${varAlpha(SOFA7_COLORS.concrete, 0.2)} 60%, transparent 100%)` }} />
                  <Stack spacing={2} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                      <Iconify icon={service.icon} width={28} />
                    </Box>
                    <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'common.white' }}>
                      {service.title}
                    </Typography>
                  </Stack>
                </Box>

                <Stack spacing={3} sx={{ p: 4 }}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>

                  <Stack spacing={1.5}>
                    {service.features.map((feature) => (
                      <Stack key={feature} direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, borderRadius: 0, flexShrink: 0 }}>
                          <Iconify icon="solar:check-bold" width={14} />
                        </Box>
                        <Typography variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Stack component={RouterLink} href={service.href} direction="row" spacing={1} alignItems="center" sx={{ textDecoration: 'none', cursor: 'pointer', '&:hover': { '& .MuiTypography-root': { color: SOFA7_COLORS.cyan } } }}>
                    <Typography variant="button" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                      Xem chi tiết
                    </Typography>
                    <Iconify icon="solar:arrow-right-bold-duotone" width={18} sx={{ color: SOFA7_COLORS.electric }} />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section bg="grey">
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          spacing={4}
          alignItems="center"
          sx={{
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            p: { xs: 5, md: 8 },
            borderRadius: 0,
            bgcolor: SOFA7_COLORS.concrete,
            color: 'common.white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, bgcolor: SOFA7_COLORS.electric, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)', opacity: 0.9 }} />
          <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            BẠN CÓ <Box component="span" sx={{ color: SOFA7_COLORS.electric }}>Ý TƯỞNG?</Box>
          </Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 480 }}>
            Đội ngũ Sofa7 sẽ biến ý tưởng của bạn thành sofa độc nhất. Đặt lịch tư vấn miễn phí ngay.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <RouterLink href="/sofa7/showrooms/consult" style={{ textDecoration: 'none' }}>
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 4, py: 1.5, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, fontWeight: 'fontWeightBold', textTransform: 'uppercase', typography: 'button', cursor: 'pointer', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>
                <Iconify icon="solar:chat-square-bold-duotone" width={20} />
                ĐẶT TƯ VẤN
              </Box>
            </RouterLink>
            <RouterLink href="/sofa7/showrooms" style={{ textDecoration: 'none' }}>
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 4, py: 1.5, border: `2px solid ${SOFA7_COLORS.cyan}`, color: SOFA7_COLORS.cyan, borderRadius: 0, fontWeight: 'fontWeightBold', textTransform: 'uppercase', typography: 'button', cursor: 'pointer', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }}>
                <Iconify icon="solar:map-point-bold-duotone" width={20} />
                XEM SHOWROOM
              </Box>
            </RouterLink>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
