import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  SOFA8_PAGE_IMAGES,
  SOFA8_PAGE_COMPANY_INFO,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về Sofa8 — Coastal Mediterranean' };

const VALUES = [
  {
    icon: 'solar:wind-bold-duotone',
    title: 'LINEN THOÁNG MÁT',
    desc: 'Linen nhập khẩu, thoáng khí mùa hè, ấm áp mùa đông. Hoàn hảo cho khí hậu biển.',
  },
  {
    icon: 'solar:cloud-bold-duotone',
    title: 'BOUCLÉ ÊM ÁI',
    desc: 'Bouclé mềm như mây, bền bỉ và dễ vệ sinh. Trải nghiệm ngồi thư giãn tuyệt đối.',
  },
  {
    icon: 'solar:tree-bold-duotone',
    title: 'GỖ SỒI TRẮNG',
    desc: 'Gỗ sồi sấy tự nhiên, tone sáng, bền 30+ năm. Khung sofa nhẹ mà chắc.',
  },
];

const SUB_PAGES = [
  { slug: 'history', label: 'Lịch sử', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'vision', label: 'Tầm nhìn', icon: 'solar:eye-bold-duotone' },
  { slug: 'values', label: 'Giá trị cốt lõi', icon: 'solar:star-bold-duotone' },
  { slug: 'factory', label: 'Nhà máy sản xuất', icon: 'solar:buildings-bold-duotone' },
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
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa8PageHero
        overline="VỀ CHÚNG TÔI"
        title={
          <>
            VỀ <span>SOFA8</span>
          </>
        }
        subtitle="Coastal Mediterranean — Sofa cho tâm hồn yêu biển. 8 năm đúc kết vibe coastal nguyên bản."
        image={SOFA8_PAGE_IMAGES.aboutHero}
      />

      {/* Company intro with workshop image */}
      <Sofa8Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box
                component="img"
                src={SOFA8_PAGE_IMAGES.workshop}
                alt="Xưởng Sofa8"
                sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 2 }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA8_COLORS.coral, borderRadius: 4 }} />
                <Typography variant="overline" sx={{ color: SOFA8_COLORS.coral, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                  COASTAL MEDITERRANEAN
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold' }}>
                TỪ XƯỞNG NHỎ
                <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA8_COLORS.coral} 0%, ${SOFA8_COLORS.seafoam} 100%`) }}>
                  {' '}ĐẾN BIỂN CẢ
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Sofa8 ra đời năm {SOFA8_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt
                đầu với vibe coastal nguyên bản — linen thoáng, bouclé êm, tone biển — chúng tôi mang
                biển vào từng không gian sống.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {SOFA8_PAGE_COMPANY_INFO.tagline}. 8 năm coastal design, 40k+ biệt thự nghỉ dưỡng tin
                chọn. Thanh lịch, thư giãn, yêu biển.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>

      {/* Value cards */}
      <Sofa8Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold' }}>
            3 LÝ DO <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA8_COLORS.coral} 0%, ${SOFA8_COLORS.seafoam} 100%`) }}>CHỌN SOFA8</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA8_COLORS.coral, transition: 'border-color 0.3s' },
                }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>

      {/* Stats */}
      <Sofa8Section py={{ xs: 6, md: 10 }}>
        <Grid container spacing={3}>
          {SOFA8_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>

      {/* Sub-page grid */}
      <Sofa8Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold' }}>
            11 GÓC NHÌN <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA8_COLORS.coral} 0%, ${SOFA8_COLORS.seafoam} 100%`) }}>VỀ SOFA8</Box>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack
                component={RouterLink}
                href={`/sofa8/about/${item.slug}`}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: 2,
                  textDecoration: 'none',
                  bgcolor: 'background.paper',
                  border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA8_COLORS.coral, bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.04), transition: 'all 0.3s' },
                }}
              >
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean }}>
                  <Iconify icon={item.icon} width={24} />
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>
                  {item.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>

      {/* CTA */}
      <Sofa8Section>
        <Stack
          component={MotionViewport}
          spacing={4}
          alignItems="center"
          sx={{
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            p: { xs: 5, md: 8 },
            borderRadius: 4,
            bgcolor: SOFA8_COLORS.ocean,
            color: 'common.white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, bgcolor: SOFA8_COLORS.coral, borderRadius: '50%', opacity: 0.8 }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>
            TRỞ THÀNH MỘT PHẦN <Box component="span" sx={{ color: SOFA8_COLORS.coral }}>VIBE SOFA8</Box>
          </Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>
            Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa coastal nguyên bản.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa8/showrooms" size="large" variant="contained" sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }} startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>
              XEM SHOWROOM
            </Button>
            <Button component={RouterLink} href="/sofa8/products" size="large" variant="outlined" sx={{ borderColor: 'common.white', color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA8_COLORS.coral, color: SOFA8_COLORS.coral, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              XEM SẢN PHẨM
            </Button>
          </Stack>
        </Stack>
      </Sofa8Section>
    </>
  );
}
