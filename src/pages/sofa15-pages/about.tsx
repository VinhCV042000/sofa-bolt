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

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section, Sofa15Card } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_COMPANY_INFO } from 'src/sections/sofa15-pages/sofa15-pages-data';

const VALUES = [
  { icon: 'solar:crown-bold-duotone', title: 'Thủ công 10+ năm', desc: '10+ năm đúc kết thủ công Art Deco.', accent: SOFA15_COLORS.gold },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành 10 năm', desc: 'Khung & đệm bảo hành 10 năm.', accent: SOFA15_COLORS.emerald },
  { icon: 'solar:hand-stars-bold-duotone', title: '99% hài lòng', desc: 'Hơn 3,200 khách hàng tin tưởng.', accent: SOFA15_COLORS.gold },
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
      <Helmet><title>Về Sofa15 — Art Deco Gatsby</title></Helmet>
      <Sofa15PageHero overline="VỀ CHÚNG TÔI" title={<>VỀ <span>SOFA15</span></>} subtitle="ART DECO GATSBY — 10+ năm thủ công da thật và velvet, sang trọng 1920s." image={SOFA15_PAGE_IMAGES.aboutHero} />

      <Sofa15Section bg="black">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA15_PAGE_IMAGES.workshop} alt="Xưởng Sofa15" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, fontWeight: 'fontWeightMedium' }}>ART DECO · SINCE 2015</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
                TỪ XƯỞNG NHỎ <span>ĐẾN GATSBY</span>
              </Typography>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                Sofa15 ra đời năm {SOFA15_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý Art Deco Gatsby — vàng, đen, ngọc lục bảo.
              </Typography>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                {SOFA15_PAGE_COMPANY_INFO.tagline}. 10+ năm thủ công, 3,200+ tác phẩm đã giao.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>

      <Sofa15Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
            3 LÝ DO <span>CHỌN SOFA15</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Sofa15Card accent={item.accent} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(item.accent, 0.4)}`, color: item.accent }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>{item.desc}</Typography>
                </Stack>
              </Sofa15Card>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SOFA15_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`) }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightMedium' }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>

      <Sofa15Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
            11 GÓC NHÌN <span>VỀ SOFA15</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa15/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`, bgcolor: SOFA15_COLORS.black, '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`, color: SOFA15_COLORS.gold }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>

      <Sofa15Section bg="black">
        <Sofa15Card accent={SOFA15_COLORS.gold} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', p: { xs: 5, md: 8 } }}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
              GATSBY <span>GOLD</span>
            </Typography>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.5) }}>Ghé showroom hoặc đặt lịch tư vấn để trải nghiệm sofa Art Deco Gatsby.</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <Button component={RouterLink} href="/sofa15/showrooms" size="large" startIcon={<Iconify icon="solar:map-point-bold-duotone" />} sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 0, color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>XEM SHOWROOM</Button>
              <Button component={RouterLink} href="/sofa15/products" size="large" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', borderRadius: 0, color: SOFA15_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}`, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.08) } }}>XEM SẢN PHẨM</Button>
            </Stack>
          </Stack>
        </Sofa15Card>
      </Sofa15Section>
    </>
  );
}
