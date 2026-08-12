import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const SERVICES = [
  { title: 'Thiết kế nội thất', desc: 'Thiết kế sofa theo yêu cầu, 3D, tư vấn bố trí nội thất.', icon: 'solar:pen-bold-duotone', link: '/sofa12/services/design' },
  { title: 'Dịch vụ sản xuất', desc: 'Gia công sofa, OEM, ODM, đặt hàng theo dự án.', icon: 'solar:tools-bold-duotone', link: '/sofa12/services/production' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Dịch vụ" title="Dịch vụ TERRA ARCH" subtitle="Thiết kế nội thất và dịch vụ sản xuất sofa thủ công." image={SOFA12_PAGE_IMAGES.service1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SERVICES.map((s) => (
              <Grid key={s.title} xs={12} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={s.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{s.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
                  <Button component={RouterLink} href={s.link} variant="outlined" color="warning" size="small">Tìm hiểu thêm</Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
