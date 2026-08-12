import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_CAREERS } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Tuyển dụng — Sofa13</title></Helmet>
      <Sofa13PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa13 — art deco noir & gold." image={SOFA13_PAGE_IMAGES.careers} />

      <Sofa13Section>
        <Grid container spacing={3}>
          {SOFA13_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6} md={6}>
              <Stack component={RouterLink} href={`/sofa13/careers/${job.id}`} spacing={2} sx={{ p: 4, textDecoration: 'none', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.04), '&:hover': { borderColor: SOFA13_COLORS.gold, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.08) }, transition: 'all 0.25s' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{job.title}</Typography>
                  <Chip label={job.type} size="small" sx={{ bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.15), color: SOFA13_COLORS.gold, fontWeight: 700, borderRadius: 0 }} />
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{job.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:money-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} /><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{job.salary}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700 }}>{job.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
