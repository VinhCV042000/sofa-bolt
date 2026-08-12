import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES, SOFA8_PAGE_COLLECTIONS } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Bộ sưu tập — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="BỘ SƯU TẬP"
        title={<>BỘ SƯU <span>TẬP</span></>}
        subtitle="Azure Bay, Sandy Shore, White Wave, Coral Reef — mỗi bộ sưu tập một vibe biển."
        image={SOFA8_PAGE_IMAGES.product3}
      />

      <Sofa8Section>
        <Grid container spacing={4}>
          {SOFA8_PAGE_COLLECTIONS.map((col) => (
            <Grid key={col.id} xs={12} sm={6} md={4}>
              <Stack
                component={RouterLink}
                href={`/sofa8/collections/${col.slug}`}
                spacing={2}
                sx={{
                  textDecoration: 'none',
                  '&:hover .col-img': { transform: 'scale(1.05)' },
                  '&:hover .col-title': { color: SOFA8_COLORS.coral },
                }}
              >
                <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3', position: 'relative' }}>
                  <Box className="col-img" component="img" src={col.image} alt={col.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: 'rgba(0,0,0,0.6)', color: 'common.white', px: 1.5, py: 0.5, borderRadius: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{col.count}</Typography>
                  </Box>
                </Box>
                <Typography className="col-title" variant="h5" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{col.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{col.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>
    </>
  );
}
