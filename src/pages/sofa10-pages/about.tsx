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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  SOFA10_PAGE_IMAGES,
  SOFA10_PAGE_COMPANY_INFO,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

const metadata = { title: 'Về Sofa10 — Wabi-Sabi' };

const VALUES = [
  { icon: 'solar:leaf-bold-duotone', title: 'Linen Thô Tự Nhiên', desc: 'Linen dệt thô, vân không đều — vẻ đẹp của sự không hoàn hảo. Thoáng khí, bền bỉ.' },
  { icon: 'solar:tree-bold-duotone', title: 'Gỗ Tự Nhiên Không Phủ', desc: 'Gỗ sồi, óc chó, keo — giữ vân gỗ tự nhiên. Sơn dầu thực vật, không hóa chất.' },
  { icon: 'solar:cloud-bold-duotone', title: 'Bouclé Mộc Mạc', desc: 'Bouclé bề mặt gồ ghề tự nhiên — sờ vào là thấy thời gian. Dễ vệ sinh, bền bỉ.' },
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

      <Sofa10PageHero
        overline="VỀ CHÚNG TÔI"
        title={<>VỀ <span>SOFA10</span></>}
        subtitle="Japanese Wabi-Sabi — Vẻ đẹp trong sự không hoàn hảo. 9 năm đúc kết wabi-sabi nguyên bản."
        image={SOFA10_PAGE_IMAGES.aboutHero}
      />

      <Sofa10Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA10_PAGE_IMAGES.workshop} alt="Xưởng Sofa10" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: 2 }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 1.5, bgcolor: SOFA10_COLORS.wood, opacity: 0.6 }} />
                <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, fontWeight: 'fontWeightLight', textTransform: 'uppercase' }}>WABI-SABI · 侘寂</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', letterSpacing: -0.5, fontFamily: theme.typography.fontSecondaryFamily }}>
                TỪ XƯỞNG NHỎ
                <Box component="span" sx={{ ...textGradient(`120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`), fontStyle: 'italic' }}> ĐẾN THẨM MỸ NHẬT</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                Sofa10 ra đời năm {SOFA10_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý wabi-sabi — linen thô, gỗ mộc, bouclé tự nhiên — chúng tôi tôn vinh sự mộc mạc và vẻ đẹp chậm rãi của thời gian.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                {SOFA10_PAGE_COMPANY_INFO.tagline}. 9 năm wabi-sabi design, 30k+ không gian tĩnh. Vẻ đẹp trong sự không hoàn hảo.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>

      <Sofa10Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', letterSpacing: -0.5, fontFamily: theme.typography.fontSecondaryFamily }}>
            3 LÝ DO <Box component="span" sx={{ ...textGradient(`120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`), fontStyle: 'italic' }}>CHỌN SOFA10</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA10_COLORS.warmWhite, color: SOFA10_COLORS.wood }}>
                  <Iconify icon={item.icon} width={24} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>

      <Sofa10Section py={{ xs: 6, md: 10 }}>
        <Grid container spacing={3}>
          {SOFA10_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'fontWeightLight' }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>

      <Sofa10Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightLight', letterSpacing: -0.5, fontFamily: theme.typography.fontSecondaryFamily }}>
            11 GÓC NHÌN <Box component="span" sx={{ ...textGradient(`120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`), fontStyle: 'italic' }}>VỀ SOFA10</Box>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa10/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, borderRadius: 2, textDecoration: 'none', bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`, '&:hover': { borderColor: SOFA10_COLORS.wood, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA10_COLORS.warmWhite, color: SOFA10_COLORS.wood }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary' }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>

      <Sofa10Section>
        <Stack component={MotionViewport} spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white' }}>
          <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', letterSpacing: -0.5, fontFamily: theme.typography.fontSecondaryFamily }}>
            TẠO KHÔNG GIAN <Box component="span" sx={{ color: SOFA10_COLORS.woodLight, fontStyle: 'italic' }}>TĨNH TẠI</Box>
          </Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), fontWeight: 'fontWeightLight', lineHeight: 2 }}>Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa wabi-sabi nguyên bản.</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa10/showrooms" size="large" variant="contained" sx={{ borderRadius: 2, bgcolor: SOFA10_COLORS.charcoalLight, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }} startIcon={<Iconify icon="solar:map-point-bold-duotone" />}>XEM SHOWROOM</Button>
            <Button component={RouterLink} href="/sofa10/products" size="large" variant="text" sx={{ color: 'common.white', borderRadius: 2, fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: varAlpha('#FFFFFF', 0.08) } }} startIcon={<Iconify icon="solar:armchair-bold-duotone" />}>XEM SẢN PHẨM</Button>
          </Stack>
        </Stack>
      </Sofa10Section>
    </>
  );
}
