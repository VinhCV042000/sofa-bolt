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
import { varFade } from 'src/components/animate';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { SOFA20_PAGE_IMAGES, SOFA20_PAGE_COMPANY_INFO } from 'src/sections/sofa20-pages/sofa20-pages-data';

const VALUES = [
  { icon: 'solar:crown-bold-duotone', title: 'Thủ công 10+ năm', desc: '10+ năm đúc kết thủ công Riad công nghiệp.', accent: SOFA20_COLORS.gold },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành 10 năm', desc: 'Khung & đệm bảo hành 10 năm.', accent: SOFA20_COLORS.emerald },
  { icon: 'solar:hand-stars-bold-duotone', title: '99% hài lòng', desc: 'Hơn 3,200 khách hàng tin tưởng.', accent: SOFA20_COLORS.gold },
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
      <Helmet><title>Về Sofa20 — Riad công nghiệp</title></Helmet>
      <Sofa20PageHero overline="VỀ CHÚNG TÔI" title={<>VỀ <span>SOFA20</span></>} subtitle="INDUSTRIAL STEAMPUNK FOUNDRY — 10+ năm thủ công dệt tay và gỗ tuyết tùng, tinh thần xưởng đúc Manchester." image={SOFA20_PAGE_IMAGES.aboutHero} />

      <Sofa20Section bg="black">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA20_PAGE_IMAGES.workshop} alt="Xưởng Sofa20" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.3)}` }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA20_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA20_COLORS.gold, letterSpacing: 4, fontWeight: 'fontWeightMedium' }}>RIAD MARRAKECH · SINCE 2015</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
                TỪ XƯỞNG NHỎ <span>ĐẾN RIAD</span>
              </Typography>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                Sofa20 ra đời năm {SOFA20_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý Riad công nghiệp — nghệ tây, xanh teal, đỏ ruby.
              </Typography>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                {SOFA20_PAGE_COMPANY_INFO.tagline}. 10+ năm thủ công, 3,200+ tác phẩm đã giao.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa20Section>

      <Sofa20Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: varAlpha(SOFA20_COLORS.gold, 0.6), letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
            3 LÝ DO <span>CHỌN SOFA20</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Sofa20Card accent={item.accent} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(item.accent, 0.4)}`, color: item.accent }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>{item.desc}</Typography>
                </Stack>
              </Sofa20Card>
            </Grid>
          ))}
        </Grid>
      </Sofa20Section>

      <Sofa20Section bg="black">
        <Grid container spacing={3}>
          {SOFA20_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`) }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightMedium' }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa20Section>

      <Sofa20Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: varAlpha(SOFA20_COLORS.gold, 0.6), letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
            11 GÓC NHÌN <span>VỀ SOFA20</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa20/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}`, bgcolor: SOFA20_COLORS.black, '&:hover': { border: `1px solid ${SOFA20_COLORS.gold}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.3)}`, color: SOFA20_COLORS.gold }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa20Section>

      <Sofa20Section bg="black">
        <Sofa20Card accent={SOFA20_COLORS.gold} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', p: { xs: 5, md: 8 } }}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
              RIAD <span>GOLD</span>
            </Typography>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Ghé showroom hoặc đặt lịch tư vấn để trải nghiệm sofa Riad công nghiệp.</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <Button component={RouterLink} href="/sofa20/showrooms" size="large" startIcon={<Iconify icon="solar:map-point-bold-duotone" />} sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 0, color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>XEM SHOWROOM</Button>
              <Button component={RouterLink} href="/sofa20/products" size="large" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 0, color: SOFA20_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA20_COLORS.gold}`, bgcolor: varAlpha(SOFA20_COLORS.gold, 0.08) } }}>XEM SẢN PHẨM</Button>
            </Stack>
          </Stack>
        </Sofa20Card>
      </Sofa20Section>
    </>
  );
}
