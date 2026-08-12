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

import { Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PAGE_IMAGES, SOFA3_PROMOTION_SERVICES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Khuyến mãi - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Khuyến mãi" title="Dịch vụ hậu mãi eco" subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh sofa và đổi trả hàng." image={SOFA3_PAGE_IMAGES.cta} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA3_PROMOTION_SERVICES.map((service, index) => (
              <Grid key={service.slug} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} spacing={2} sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}`, height: 1, transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: 300 }), '&:hover': { transform: 'translateY(-8px)', boxShadow: (t) => t.customShadows.z24 } }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08), color: 'success.main' }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{service.description}</Typography>
                  <Box component={RouterLink} href={`/sofa3/promotions/${service.slug}`} sx={{ textDecoration: 'none' }}>
                    <Typography variant="button" sx={{ color: 'success.main' }}>Tìm hiểu →</Typography>
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
