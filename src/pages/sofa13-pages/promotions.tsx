import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Khuyến mãi — Sofa13</title></Helmet>
      <Sofa13PageHero overline="KHUYẾN MÃI" title={<>KHUYẾN <span>MÃI</span></>} subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh, đổi trả — dịch vụ trọn đời." image={SOFA13_PAGE_IMAGES.prod1} />

      <Sofa13Section>
        <Grid container spacing={3}>
          {SOFA13_PAGE_PROMOTION_SERVICES.map((s) => (
            <Grid key={s.slug} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa13/promotions/${s.slug}`} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.04), '&:hover': { borderColor: SOFA13_COLORS.gold, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.08) }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${SOFA13_COLORS.gold}`, color: SOFA13_COLORS.gold }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700, lineHeight: 1.8 }}>{s.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
