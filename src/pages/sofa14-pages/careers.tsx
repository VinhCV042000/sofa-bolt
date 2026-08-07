import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_CAREERS, SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Tuyển dụng — Sofa14</title></Helmet>
      <Sofa14PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa14 — pastel pop." image={SOFA14_PAGE_IMAGES.careers} />

      <Sofa14Section>
        <Grid container spacing={3}>
          {SOFA14_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6} md={6}>
              <Stack component={RouterLink} href={`/sofa14/careers/${job.id}`} spacing={2} sx={{ p: 4, textDecoration: 'none', borderRadius: '32px', bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa14Alpha(SOFA14_COLORS.mint, 0.3)}`, '&:hover': { boxShadow: `8px 8px 0 ${sofa14Alpha(SOFA14_COLORS.coral, 0.5)}` }, transition: 'all 0.25s' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{job.title}</Typography>
                  <Chip label={job.type} size="small" sx={{ bgcolor: sofa14Alpha(SOFA14_COLORS.coral, 0.2), color: SOFA14_COLORS.coralDeep, fontWeight: 800, borderRadius: 99 }} />
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{job.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:money-bold-duotone" width={16} sx={{ color: SOFA14_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{job.salary}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{job.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
