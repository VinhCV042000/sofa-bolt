import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_CAREERS } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Tuyển dụng — Sofa19</title></Helmet>
      <Sofa19PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa19 — pastel pop." image={SOFA19_PAGE_IMAGES.careers} />

      <Sofa19Section>
        <Grid container spacing={3}>
          {SOFA19_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6} md={6}>
              <Stack component={RouterLink} href={`/sofa19/careers/${job.id}`} spacing={2} sx={{ p: 4, textDecoration: 'none', borderRadius: '32px', bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa19Alpha(SOFA19_COLORS.jungleLight, 0.3)}`, '&:hover': { boxShadow: `8px 8px 0 ${sofa19Alpha(SOFA19_COLORS.coral, 0.5)}` }, transition: 'all 0.25s' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{job.title}</Typography>
                  <Chip label={job.type} size="small" sx={{ bgcolor: sofa19Alpha(SOFA19_COLORS.coral, 0.2), color: SOFA19_COLORS.coralDeep, fontWeight: 800, borderRadius: 99 }} />
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>{job.location}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} alignItems="center"><Iconify icon="solar:money-bold-duotone" width={16} sx={{ color: SOFA19_COLORS.coralDeep }} /><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>{job.salary}</Typography></Stack>
                </Stack>
                <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{job.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>
    </>
  );
}
