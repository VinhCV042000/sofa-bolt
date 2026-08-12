import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PAGE_IMAGES,
  SOFA_GALLERY_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Gallery sofa' };

const CATEGORIES = ['Tất cả', 'Showroom', 'Sofa', 'Xưởng sản xuất'];

export default function Page() {
  const theme = useTheme();
  const [category, setCategory] = useState('Tất cả');
  const [active, setActive] = useState<number | null>(null);

  const filtered = category === 'Tất cả' ? SOFA_GALLERY_IMAGES : SOFA_GALLERY_IMAGES;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.gallery1})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Gallery</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Gallery
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Khám phá không gian showroom, bộ sưu tập sofa và xưởng chế tác qua những hình ảnh
                thực tế của Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Gallery */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: { xs: 4, md: 6 } }}>
            {CATEGORIES.map((cat) => (
              <Chip key={cat} label={cat} onClick={() => setCategory(cat)} color={category === cat ? 'primary' : 'default'} variant={category === cat ? 'filled' : 'soft'} />
            ))}
          </Stack>

          <Grid container spacing={2}>
            {filtered.map((img, index) => (
              <Grid key={img.src} xs={12} sm={6} md={4} lg={3}>
                <Box
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    aspectRatio: index % 5 === 0 ? '3/4' : '1/1',
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.title}
                    sx={{
                      width: 1,
                      height: 1,
                      objectFit: 'cover',
                      transition: (t) => t.transitions.create('transform', { duration: 400 }),
                      transform: active === index ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                      background: `linear-gradient(to top, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, transparent 60%)`,
                      opacity: active === index ? 1 : 0,
                      transition: (t) => t.transitions.create('opacity', { duration: 300 }),
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'common.white' }}>
                      <Iconify icon="solar:gallery-bold-duotone" width={18} />
                      <Typography variant="subtitle2">{img.title}</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Trải nghiệm trực tiếp tại showroom</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt hẹn để tham quan và ngồi thử các mẫu sofa yêu thích.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt hẹn tham quan
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
