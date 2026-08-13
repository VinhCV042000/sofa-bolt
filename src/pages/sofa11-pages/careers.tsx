import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_CAREERS } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Tuyển dụng — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa11 — yêu retro, yêu vui vẻ." image={SOFA11_PAGE_IMAGES.careers} />

      <Sofa11Section>
        <Grid container spacing={3}>
          {SOFA11_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6} md={6}>
              <Stack spacing={2} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA11_COLORS.magenta, transition: 'border-color 0.3s' } }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{job.title}</Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Chip icon={<Iconify icon="solar:map-point-bold-duotone" width={16} />} label={job.location} size="small" />
                  <Chip icon={<Iconify icon="solar:clock-circle-bold-duotone" width={16} />} label={job.type} size="small" />
                  <Chip icon={<Iconify icon="solar:wallet-bold-duotone" width={16} />} label={job.salary} size="small" />
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{job.description}</Typography>
                <Stack direction="row" spacing={2}>
                  <Button component={RouterLink} href={`/sofa11/careers/${job.id}`} size="small" variant="outlined" sx={{ borderRadius: 30, borderColor: SOFA11_COLORS.cyan, color: SOFA11_COLORS.cyan }}>Chi tiết</Button>
                  <Button component={RouterLink} href={`/sofa11/careers/apply/${job.id}`} size="small" variant="contained" sx={{ borderRadius: 30, bgcolor: SOFA11_COLORS.magenta, color: 'common.white', '&:hover': { bgcolor: SOFA11_COLORS.magentaSoft } }}>Ứng tuyển</Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa11/careers/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderRadius: 30, borderColor: SOFA11_COLORS.cyan, color: SOFA11_COLORS.cyan, fontWeight: 'fontWeightBold' }}>Theo dõi hồ sơ</Button>
        </Stack>
      </Sofa11Section>
    </>
  );
}
