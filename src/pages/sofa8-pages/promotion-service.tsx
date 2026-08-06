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

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_PROMOTION_SERVICES, SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const service = params.service || 'warranty';
  const data = SOFA8_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA8_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="KHUYẾN MÃI" title={<><span>{data.title.toUpperCase()}</span></>} subtitle={data.description} image={SOFA8_PAGE_IMAGES.cta} />

      <Sofa8Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA8_PAGE_IMAGES.service3} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>{data.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{data.description}</Typography>
              <Button component={RouterLink} href="/sofa8/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', bgcolor: SOFA8_COLORS.coral, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>
                Liên hệ
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa8Section>
    </>
  );
}
