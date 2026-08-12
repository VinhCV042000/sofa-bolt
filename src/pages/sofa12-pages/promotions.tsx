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

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Khuyến mãi - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Khuyến mãi" title="Dịch vụ hậu mãi TERRA" subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh sofa, đổi trả hàng." image={SOFA12_PAGE_IMAGES.cta} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={4}>
            {SOFA12_PAGE_PROMOTION_SERVICES.map((s) => (
              <Grid key={s.slug} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={s.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{s.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.description}</Typography>
                  <Box component={RouterLink} href={`/sofa12/promotions/${s.slug}`} sx={{ color: 'warning.main', fontSize: 14, textDecoration: 'none', fontWeight: 'fontWeightMedium' }}>Tìm hiểu thêm →</Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
