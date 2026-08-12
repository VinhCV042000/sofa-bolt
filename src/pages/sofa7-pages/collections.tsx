import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_COLLECTIONS } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Bộ sưu tập Sofa7 — Urban Loft' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        overline="BỘ SƯU TẬP"
        title={
          <>
            BỘ SƯU TẬP <span>SOFA7</span>
          </>
        }
        subtitle="5 bộ sưu tập — từ Raw Concrete đến Neon Lounge. Mỗi bộ sưu tập mang một vibe độc nhất."
        image="https://images.pexels.com/photos/925709/pexels-photo-925709.png?auto=compress&cs=tinysrgb&w=1920"
      />

      <Sofa7Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 4 }}>KHÁM PHÁ</Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            5 VIBE <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>ĐỘC NHẤT</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {SOFA7_PAGE_COLLECTIONS.map((collection) => (
            <Grid key={collection.id} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  position: 'relative',
                  height: 360,
                  borderRadius: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  '&:hover': { borderColor: SOFA7_COLORS.electric, transition: 'border-color 0.3s' },
                }}
              >
                <Box component="img" src={collection.image} alt={collection.name} sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.4s' } }} />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${SOFA7_COLORS.concrete} 0%, ${varAlpha(SOFA7_COLORS.concrete, 0.3)} 60%, transparent 100%)` }} />
                <Stack spacing={1.5} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                  <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 2, fontWeight: 'fontWeightBold' }}>
                    {collection.count}
                  </Typography>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                    {collection.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>
                    {collection.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                    <Typography variant="button" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                      Xem chi tiết
                    </Typography>
                    <Iconify icon="solar:arrow-right-bold-duotone" width={16} sx={{ color: SOFA7_COLORS.electric }} />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>
    </>
  );
}
