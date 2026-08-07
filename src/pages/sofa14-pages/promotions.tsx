import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_PROMOTION_SERVICES, SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  return (
    <>
      <Helmet><title>Khuyến mãi — Sofa14</title></Helmet>
      <Sofa14PageHero overline="KHUYẾN MÃI" title={<>KHUYẾN <span>MÃI</span></>} subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh, đổi trả — dịch vụ trọn đời." image={SOFA14_PAGE_IMAGES.prod1} />

      <Sofa14Section>
        <Grid container spacing={3}>
          {SOFA14_PAGE_PROMOTION_SERVICES.map((s) => (
            <Grid key={s.slug} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa14/promotions/${s.slug}`} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', borderRadius: '32px', bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa14Alpha(SOFA14_COLORS.coral, 0.3)}`, '&:hover': { boxShadow: `8px 8px 0 ${sofa14Alpha(SOFA14_COLORS.coral, 0.5)}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa14Alpha(SOFA14_COLORS.mint, 0.2), color: SOFA14_COLORS.mintDeep }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), fontWeight: 700, lineHeight: 1.8 }}>{s.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
