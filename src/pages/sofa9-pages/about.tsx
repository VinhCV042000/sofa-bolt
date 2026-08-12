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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  SOFA9_PAGE_IMAGES,
  SOFA9_PAGE_COMPANY_INFO,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về Sofa9 — Retro Memphis' };

const VALUES = [
  { icon: 'solar:palette-bold-duotone', title: 'VELVET MÀU BÙNG NỔ', desc: 'Velvet Ý 40+ màu neon. Hồng, teal, vàng, tím — chọn màu, chọn tâm trạng.' },
  { icon: 'solar:gallery-bold-duotone', title: 'HỌA TIẾT ĐỘC ĐÁC', desc: 'Họa tiết hình học, hoa retro, zebra, polka dot. Mỗi sofa là một tác phẩm.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'BỀN BỈ 10+ NĂM', desc: 'Velvet chống bẩn, khung gỗ FSC, đệm high-density. Vui vẻ mà vẫn bền bỉ.' },
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

      <Sofa9PageHero
        overline="VỀ CHÚNG TÔI"
        title={<>VỀ <span>SOFA9</span></>}
        subtitle="Retro Memphis — Sofa vui vẻ, không bao giờ chán. 7 năm đúc kết vibe retro nguyên bản."
        image={SOFA9_PAGE_IMAGES.aboutHero}
      />

      <Sofa9Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA9_PAGE_IMAGES.workshop} alt="Xưởng Sofa9" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 3 }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%' }} />
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.teal, borderRadius: '50%' }} />
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.yellow, borderRadius: '50%' }} />
                <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 4, fontWeight: 'fontWeightBold', ml: 1 }}>RETRO MEMPHIS</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                TỪ XƯỞNG NHỎ
                <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`) }}> ĐẾN VIBE QUỐC GIA</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Sofa9 ra đời năm {SOFA9_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với vibe retro Memphis — velvet neon, họa tiết hình học — chúng tôi mang vui vẻ vào từng không gian sống.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {SOFA9_PAGE_COMPANY_INFO.tagline}. 7 năm retro design, 60k+ người chơi vibe tin chọn. Không bao giờ chán.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>

      <Sofa9Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            3 LÝ DO <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`) }}>CHỌN SOFA9</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>

      <Sofa9Section py={{ xs: 6, md: 10 }}>
        <Grid container spacing={3}>
          {SOFA9_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>

      <Sofa9Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            11 GÓC NHÌN <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`) }}>VỀ SOFA9</Box>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa9/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, bgcolor: varAlpha(SOFA9_COLORS.cream, 0.5), transition: 'all 0.3s' } }}>
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={item.icon} width={24} />
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'text.primary' }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>

      <Sofa9Section>
        <Stack component={MotionViewport} spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 4, bgcolor: SOFA9_COLORS.black, color: 'common.white', position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%', opacity: 0.9 }} />
          <Box sx={{ position: 'absolute', bottom: 20, left: 20, width: 60, height: 60, bgcolor: SOFA9_COLORS.teal, transform: 'rotate(45deg)', opacity: 0.85 }} />
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            TRỞ THÀNH MỘT PHẦN <Box component="span" sx={{ color: SOFA9_COLORS.yellow }}>VIBE SOFA9</Box>
          </Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa retro nguyên bản.</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa9/showrooms" size="large" variant="contained" sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }} startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>XEM SHOWROOM</Button>
            <Button component={RouterLink} href="/sofa9/products" size="large" variant="contained" sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.teal, color: SOFA9_COLORS.black, fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.tealLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>XEM SẢN PHẨM</Button>
          </Stack>
        </Stack>
      </Sofa9Section>
    </>
  );
}
