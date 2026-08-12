import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';
import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';

const metadata = { title: 'Đặt lịch - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Showroom" title="Đặt lịch tham quan & tư vấn" subtitle="Đặt lịch tham quan showroom hoặc tư vấn miễn phí tại nhà." image={SOFA3_PAGE_IMAGES.contact} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Đặt lịch tham quan showroom</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Đặt lịch tham quan showroom để trải nghiệm trực tiếp sofa eco-living. Đội ngũ tư vấn sẽ đón tiếp và hướng dẫn bạn.</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Chọn ngày & giờ</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:users-group-rounded-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Số người tham quan</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Showroom muốn tham quan</Typography></Stack>
              </Stack>
              <Button variant="contained" color="success" size="large" startIcon={<Iconify icon="solar:calendar-add-bold-duotone" />}>Đặt lịch tham quan</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h5">Đặt lịch tư vấn tại nhà</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Đặt lịch tư vấn miễn phí tại nhà. Chuyên gia sẽ đến đo đạc, tư vấn và phác thảo 3D sơ bộ.</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:home-2-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Địa chỉ nhà</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:calendar-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Ngày giờ mong muốn</Typography></Stack>
                <Stack direction="row" spacing={2} alignItems="center"><Iconify icon="solar:document-add-bold-duotone" width={24} sx={{ color: 'success.main' }} /><Typography>Mô tả nhu cầu</Typography></Stack>
              </Stack>
              <Button variant="outlined" color="success" size="large" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>Đặt lịch tư vấn</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
