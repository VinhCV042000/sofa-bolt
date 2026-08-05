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

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  SOFA7_PAGE_IMAGES,
  SOFA7_PAGE_COMPANY_INFO,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về Sofa7 — Urban Loft · Industrial Street' };

const VALUES = [
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'DA THẬT PREMIUM',
    desc: 'Da bò nguyên tấm, thuộc thủ công. Càng dùng càng đẹp — patina độc đáo.',
  },
  {
    icon: 'solar:bolt-bold-duotone',
    title: 'KHUNG THÉP ĐEN',
    desc: 'Khung thép hàn Mig, phủ sơn tĩnh điện. Chịu lực 500kg, không cong vênh.',
  },
  {
    icon: 'solar:palette-bold-duotone',
    title: 'VELVET BÙNG NỔ',
    desc: 'Velvet Ý nhập khẩu, 40+ màu neon. Chống bẩn, chống tĩnh điện.',
  },
];

const SUB_PAGES = [
  { slug: 'history', label: 'Lịch sử', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'vision', label: 'Tầm nhìn', icon: 'solar:eye-bold-duotone' },
  { slug: 'values', label: 'Giá trị cốt lõi', icon: 'solar:star-bold-duotone' },
  { slug: 'factory', label: 'Xưởng sản xuất', icon: 'solar:buildings-bold-duotone' },
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

      <Sofa7PageHero
        overline="VỀ CHÚNG TÔI"
        title={
          <>
            VỀ <span>SOFA7</span>
          </>
        }
        subtitle="Urban Loft · Industrial Street — Sofa cho tâm hồn phá cách. 10 năm đúc kết vibe loft nguyên bản."
        image={SOFA7_PAGE_IMAGES.aboutHero}
      />

      {/* Company intro with workshop image */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box
                component="img"
                src={SOFA7_PAGE_IMAGES.workshop}
                alt="Xưởng Sofa7"
                sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 0 }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
                <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                  URBAN LOFT · INDUSTRIAL STREET
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                TỪ XƯỞNG NHỎ
                <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                  {' '}ĐẾN VIBE QUỐC GIA
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Sofa7 ra đời năm {SOFA7_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt
                đầu với vibe loft nguyên bản — khung thép đen, da thật, velvet neon — chúng tôi mang
                street style vào từng không gian sống.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {SOFA7_PAGE_COMPANY_INFO.tagline}. 10 năm urban design, 50k+ urban dwellers tin
                chọn. Không quy tắc, không giới hạn — chỉ có cá tính.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Value cards */}
      <Sofa7Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            3 LÝ DO <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>CHỌN SOFA7</Box>
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
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* Stats */}
      <Sofa7Section py={{ xs: 6, md: 10 }}>
        <Grid container spacing={3}>
          {SOFA7_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* Sub-page grid */}
      <Sofa7Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            11 GÓC NHÌN <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>VỀ SOFA7</Box>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack
                component={RouterLink}
                href={`/sofa7/about/${item.slug}`}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: 0,
                  textDecoration: 'none',
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, bgcolor: varAlpha(SOFA7_COLORS.concrete, 0.04), transition: 'all 0.3s' },
                }}
              >
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                  <Iconify icon={item.icon} width={24} />
                </Box>
                <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'text.primary' }}>
                  {item.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section>
        <Stack
          component={MotionViewport}
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
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            TRỞ THÀNH MỘT PHẦN <Box component="span" sx={{ color: SOFA7_COLORS.electric }}>VIBE SOFA7</Box>
          </Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>
            Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa industrial nguyên bản.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa7/showrooms" size="large" variant="contained" sx={{ bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>
              XEM SHOWROOM
            </Button>
            <Button component={RouterLink} href="/sofa7/products" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              XEM SẢN PHẨM
            </Button>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
