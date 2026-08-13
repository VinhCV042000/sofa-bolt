import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const service = params.service || 'warranty';
  const data = SOFA11_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA11_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="KHUYẾN MÃI" title={<span>{data.title.toUpperCase()}</span>} subtitle={data.description} image={SOFA11_PAGE_IMAGES.cta} />

      <Sofa11Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA11_PAGE_IMAGES.service3} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA11_COLORS.cream, color: SOFA11_COLORS.magenta }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>{data.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{data.description}</Typography>
              <Button component={RouterLink} href="/sofa11/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA11_COLORS.void}`, '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft, boxShadow: `0 6px 0 ${SOFA11_COLORS.void}` } }}>Liên hệ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
