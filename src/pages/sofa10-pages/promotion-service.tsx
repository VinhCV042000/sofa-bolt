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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_IMAGES, SOFA10_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const service = params.service || 'warranty';
  const data = SOFA10_PAGE_PROMOTION_SERVICES.find((s) => s.slug === service) || SOFA10_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="KHUYẾN MÃI" title={<span>{data.title.toUpperCase()}</span>} subtitle={data.description} image={SOFA10_PAGE_IMAGES.cta} />

      <Sofa10Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
              <Box component="img" src={SOFA10_PAGE_IMAGES.service3} alt={data.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA10_COLORS.paper, color: SOFA10_COLORS.wood }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'fontWeightNormal' }}>{data.title}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{data.description}</Typography>
              <Button component={RouterLink} href="/sofa10/contact" size="large" variant="contained" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 30, bgcolor: SOFA10_COLORS.wood, color: 'common.white', fontWeight: 'fontWeightNormal', boxShadow: `0 4px 0 ${SOFA10_COLORS.charcoal}`, '&:hover': { bgcolor: SOFA10_COLORS.woodLight, boxShadow: `0 6px 0 ${SOFA10_COLORS.charcoal}` } }}>Liên hệ</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
