import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_CAREERS, SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Tuyển dụng — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="TUYỂN DỤNG" title={<>TUYỂN <span>DỤNG</span></>} subtitle="Gia nhập đội ngũ Sofa8 — yêu biển, yêu coastal design." image={SOFA8_PAGE_IMAGES.careers} />

      <Sofa8Section>
        <Grid container spacing={3}>
          {SOFA8_PAGE_CAREERS.map((job) => (
            <Grid key={job.id} xs={12} sm={6} md={6}>
              <Stack spacing={2} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA8_COLORS.coral, transition: 'border-color 0.3s' } }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{job.title}</Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Chip icon={<Iconify icon="solar:map-point-bold-duotone" width={16} />} label={job.location} size="small" />
                  <Chip icon={<Iconify icon="solar:clock-circle-bold-duotone" width={16} />} label={job.type} size="small" />
                  <Chip icon={<Iconify icon="solar:wallet-bold-duotone" width={16} />} label={job.salary} size="small" />
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{job.description}</Typography>
                <Stack direction="row" spacing={2}>
                  <Button component={RouterLink} href={`/sofa8/careers/${job.id}`} size="small" variant="outlined" sx={{ borderColor: SOFA8_COLORS.ocean, color: SOFA8_COLORS.ocean }}>Chi tiết</Button>
                  <Button component={RouterLink} href={`/sofa8/careers/apply/${job.id}`} size="small" variant="contained" sx={{ bgcolor: SOFA8_COLORS.coral, color: 'common.white', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>Ứng tuyển</Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Button component={RouterLink} href="/sofa8/careers/tracking" size="large" variant="outlined" startIcon={<Iconify icon="solar:track-bold-duotone" />} sx={{ borderColor: SOFA8_COLORS.ocean, color: SOFA8_COLORS.ocean, fontWeight: 'fontWeightBold' }}>
            Theo dõi hồ sơ
          </Button>
        </Stack>
      </Sofa8Section>
    </>
  );
}
