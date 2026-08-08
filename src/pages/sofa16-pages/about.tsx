import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha, textGradient } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16PageHero, Sofa16Section, Sofa16Card } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_COMPANY_INFO } from 'src/sections/sofa16-pages/sofa16-pages-data';

const VALUES = [
  { icon: 'solar:sun-bold-duotone', title: 'Thủ công 10+ năm', desc: '10+ năm đúc kết thủ công Mediterranean.', accent: SOFA16_COLORS.terracotta },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành 10 năm', desc: 'Khung & đệm bảo hành 10 năm.', accent: SOFA16_COLORS.olive },
  { icon: 'solar:leaf-bold-duotone', title: '98% hài lòng', desc: 'Hơn 2,800 khách hàng tin tưởng.', accent: SOFA16_COLORS.azure },
];

const SUB_PAGES = [
  { slug: 'history', label: 'Lịch sử', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'vision', label: 'Tầm nhìn', icon: 'solar:eye-bold-duotone' },
  { slug: 'values', label: 'Giá trị cốt lõi', icon: 'solar:star-bold-duotone' },
  { slug: 'factory', label: 'Nhà máy', icon: 'solar:buildings-bold-duotone' },
  { slug: 'process', label: 'Quy trình', icon: 'solar:widget-bold-duotone' },
  { slug: 'technology', label: 'Công nghệ', icon: 'solar:cpu-bold-duotone' },
  { slug: 'certifications', label: 'Chứng nhận', icon: 'solar:medal-ribbon-star-bold-duotone' },
  { slug: 'team', label: 'Đội ngũ', icon: 'solar:users-group-rounded-bold-duotone' },
  { slug: 'partners', label: 'Đối tác', icon: 'solar:hand-shake-bold-duotone' },
  { slug: 'gallery', label: 'Thư viện ảnh', icon: 'solar:gallery-bold-duotone' },
  { slug: 'video', label: 'Video', icon: 'solar:videocamera-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Về Sofa16 — Mediterranean Riviera</title></Helmet>
      <Sofa16PageHero overline="VỀ CHÚNG TÔI" title={<>VỀ <span>SOFA16</span></>} subtitle="MEDITERRANEAN RIVIERA — 10+ năm thủ công linen, cảm hứng Địa Trung Hải." image={SOFA16_PAGE_IMAGES.aboutHero} />

      <Sofa16Section bg="cream">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA16_PAGE_IMAGES.workshop} alt="Xưởng Sofa16" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 3 }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 36, height: 2, bgcolor: SOFA16_COLORS.terracotta, borderRadius: 1 }} />
                <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3, fontWeight: 'fontWeightMedium' }}>RIVIERA · SINCE 2016</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>
                TỪ XƯỞNG NHỎ <span>ĐẾN RIVIERA</span>
              </Typography>
              <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                Sofa16 ra đời năm {SOFA16_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý Mediterranean Riviera — terracotta, cream, olive.
              </Typography>
              <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                {SOFA16_PAGE_COMPANY_INFO.tagline}. 10+ năm thủ công, 2,800+ tác phẩm đã giao.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa16Section>

      <Sofa16Section bg="stone">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>
            3 LÝ DO <span>CHỌN SOFA16</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Sofa16Card accent={item.accent} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(item.accent, 0.4)}`, borderRadius: 2, color: item.accent }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>{item.desc}</Typography>
                </Stack>
              </Sofa16Card>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>

      <Sofa16Section bg="cream">
        <Grid container spacing={3}>
          {SOFA16_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightMedium' }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>

      <Sofa16Section bg="stone">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>
            11 GÓC NHÌN <span>VỀ SOFA16</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa16/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, borderRadius: 3, bgcolor: SOFA16_COLORS.creamLight, '&:hover': { border: `1px solid ${SOFA16_COLORS.terracotta}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.3)}`, borderRadius: 2, color: SOFA16_COLORS.terracotta }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>

      <Sofa16Section bg="cream">
        <Sofa16Card accent={SOFA16_COLORS.terracotta} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', p: { xs: 5, md: 8 } }}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>
              MEDITERRANEAN <span>RIVIERA</span>
            </Typography>
            <Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Ghé showroom hoặc đặt lịch tư vấn để trải nghiệm sofa Mediterranean Riviera.</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <Button component={RouterLink} href="/sofa16/showrooms" size="large" startIcon={<Iconify icon="solar:map-point-bold-duotone" />} sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 2, color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA16_COLORS.terracotta, 0.6)}`, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>XEM SHOWROOM</Button>
              <Button component={RouterLink} href="/sofa16/products" size="large" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 2, color: SOFA16_COLORS.terracottaDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.4)}`, '&:hover': { border: `1px solid ${SOFA16_COLORS.terracotta}`, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.06) } }}>XEM SẢN PHẨM</Button>
            </Stack>
          </Stack>
        </Sofa16Card>
      </Sofa16Section>
    </>
  );
}
