import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';
import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';

const metadata = { title: 'Dịch vụ sản xuất - Sofa Terra' };

const SUB_SERVICES = [
  { path: '/sofa3/services/production/oem', title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công sofa theo yêu cầu với vật liệu tự nhiên.' },
  { path: '/sofa3/services/production/odm', title: 'Sofa ODM', icon: 'solar:armchair-bold-duotone', desc: 'Thiết kế và sản xuất sofa theo thương hiệu riêng.' },
  { path: '/sofa3/services/production/project', title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất sofa số lượng lớn cho dự án căn hộ, khách sạn, resort.' },
];

export default function Page() {
  const { sub } = useParams();
  const activeSub = SUB_SERVICES.find((s) => s.path.endsWith(sub || ''));

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Dịch vụ" title={activeSub ? activeSub.title : 'Dịch vụ sản xuất'} subtitle={activeSub ? activeSub.desc : 'Gia công sofa OEM, ODM và đặt hàng theo dự án.'} image={SOFA3_PAGE_IMAGES.service2} />

      <Sofa3Section>
        <Stack spacing={4} component={MotionViewport}>
          <Grid container spacing={3}>
            {SUB_SERVICES.map((service, index) => (
              <Grid key={service.path} xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} spacing={3} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}`, height: 1 }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08), color: 'success.main' }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{service.desc}</Typography>
                  <Box component={RouterLink} href={service.path} sx={{ textDecoration: 'none' }}>
                    <Typography variant="button" sx={{ color: 'success.main' }}>Tìm hiểu →</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa3Section>
    </>
  );
}
