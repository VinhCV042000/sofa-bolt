import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_PROMOTION_SERVICES, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const service = params.service || 'warranty';
  const data = SOFA9_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA9_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="KHUYẾN MÃI" title={<><span>{data.title.toUpperCase()}</span></>} subtitle={data.description} image={SOFA9_PAGE_IMAGES.cta} />

      <Sofa9Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA9_PAGE_IMAGES.service3} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>{data.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{data.description}</Typography>
              <Button component={RouterLink} href="/sofa9/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Liên hệ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa9Section>
    </>
  );
}
