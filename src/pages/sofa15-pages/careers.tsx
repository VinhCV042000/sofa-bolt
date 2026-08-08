import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_CAREERS, SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Tuyển dụng — Sofa15</title></Helmet>
      <Sofa15PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa15 — Art Deco Gatsby." image={SOFA15_PAGE_IMAGES.careers} />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SOFA15_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6}>
              <Stack component={RouterLink} href={`/sofa15/careers/${job.id}`} spacing={2} sx={{ p: 4, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`, bgcolor: SOFA15_COLORS.charcoal, '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}` }, transition: 'all 0.25s' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{job.title}</Typography>
                  <Chip label={job.type} size="small" sx={{ bgcolor: varAlpha(SOFA15_COLORS.gold, 0.15), color: SOFA15_COLORS.gold, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{job.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{job.salary}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight' }}>{job.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
