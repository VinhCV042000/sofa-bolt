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

const metadata = { title: 'Thiết kế nội thất - Sofa Terra' };

const SUB_SERVICES = [
  { path: '/sofa3/services/design/custom', title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Thiết kế sofa độc bản theo kích thước, màu sắc, chất liệu yêu cầu.' },
  { path: '/sofa3/services/design/3d', title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D chi tiết trước khi sản xuất.' },
  { path: '/sofa3/services/design/consult', title: 'Tư vấn bố trí nội thất', icon: 'solar:gallery-bold-duotone', desc: 'Tư vấn bố trí sofa và nội thất cho không gian sống.' },
];

export default function Page() {
  const { sub } = useParams();
  const activeSub = SUB_SERVICES.find((s) => s.path.endsWith(sub || ''));

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Dịch vụ" title={activeSub ? activeSub.title : 'Thiết kế nội thất'} subtitle={activeSub ? activeSub.desc : 'Thiết kế sofa theo yêu cầu với vật liệu tự nhiên 100%.'} image={SOFA3_PAGE_IMAGES.service1} />

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
