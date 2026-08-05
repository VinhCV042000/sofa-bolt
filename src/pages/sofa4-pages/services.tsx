import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Dịch vụ - Sofa Pop' };

const SERVICES = [
  { icon: 'solar:pen-bold-duotone', title: 'Thiết kế nội thất', desc: 'Thiết kế sofa theo yêu cầu, 3D, tư vấn bố trí nội thất.', path: '/sofa4/services/design' },
  { icon: 'solar:hammer-bold-duotone', title: 'Dịch vụ sản xuất', desc: 'Gia công sofa, OEM, ODM, đặt hàng theo dự án.', path: '/sofa4/services/production' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Dịch vụ" title="Dịch vụ Pop" subtitle="Thiết kế và sản xuất sofa theo yêu cầu với vật liệu tự nhiên 100%." image={SOFA4_PAGE_IMAGES.service1} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SERVICES.map((service, index) => (
              <Grid key={service.title} xs={12} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.1 }} spacing={3} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h5">{service.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{service.desc}</Typography>
                  <Box component={RouterLink} href={service.path} sx={{ textDecoration: 'none' }}>
                    <Typography variant="button" sx={{ color: 'warning.main' }}>Tìm hiểu thêm →</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
