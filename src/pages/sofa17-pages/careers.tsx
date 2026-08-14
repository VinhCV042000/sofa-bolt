import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { SOFA17_PAGE_IMAGES, SOFA17_PAGE_CAREERS } from 'src/sections/sofa17-pages/sofa17-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Tuyển dụng — Sofa17</title></Helmet>
      <Sofa17PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa17 — Riad Ma-rốc." image={SOFA17_PAGE_IMAGES.careers} />

      <Sofa17Section bg="black">
        <Grid container spacing={3}>
          {SOFA17_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6}>
              <Stack component={RouterLink} href={`/sofa17/careers/${job.id}`} spacing={2} sx={{ p: 4, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.3)}`, bgcolor: SOFA17_COLORS.charcoal, '&:hover': { border: `1px solid ${SOFA17_COLORS.gold}` }, transition: 'all 0.25s' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{job.title}</Typography>
                  <Chip label={job.type} size="small" sx={{ bgcolor: varAlpha(SOFA17_COLORS.gold, 0.15), color: SOFA17_COLORS.gold, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA17_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{job.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:wallet-bold-duotone" width={16} sx={{ color: SOFA17_COLORS.gold }} /><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{job.salary}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight' }}>{job.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa17Section>
    </>
  );
}
