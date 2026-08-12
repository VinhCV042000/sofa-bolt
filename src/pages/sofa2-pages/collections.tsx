import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_COLLECTIONS } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Bộ sưu tập - LUXE Sofa' };

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Bộ sưu tập"
        title={(
          <>
            Những bộ sưu tập
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}định hình phong cách
            </Box>
          </>
        )}
        subtitle="Khám phá các bộ sưu tập sofa được tuyển chọn theo chủ đề, phong cách và nhu cầu không gian sống của bạn."
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA2_COLLECTIONS.map((col) => (
              <Grid key={col.id} xs={12} sm={6} md={4}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 360, borderRadius: 3, overflow: 'hidden' }}>
                  <Stack
                    component={RouterLink}
                    href={`/sofa2/collections/${col.slug}`}
                    sx={{ position: 'relative', height: 1, borderRadius: 3, overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                  >
                    <Box
                      component="img"
                      src={col.image}
                      alt={col.name}
                      sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s', '&:hover': { transform: 'scale(1.05)' } }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, transparent 60%)` }} />
                    <Stack spacing={1} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, color: 'common.white' }}>
                      <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 2 }}>{col.count}</Typography>
                      <Typography variant="h5">{col.name}</Typography>
                      <Typography variant="body2" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>{col.description}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
