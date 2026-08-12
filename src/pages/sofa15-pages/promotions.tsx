import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Khuyến mãi — Sofa15</title></Helmet>
      <Sofa15PageHero overline="KHUYẾN MÃI" title={<>KHUYẾN <span>MÃI</span></>} subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh, đổi trả — dịch vụ trọn đời." image={SOFA15_PAGE_IMAGES.prod1} />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SOFA15_PAGE_PROMOTION_SERVICES.map((s) => (
            <Grid key={s.slug} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa15/promotions/${s.slug}`} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`, bgcolor: SOFA15_COLORS.charcoal, '&:hover': { border: `1px solid ${SOFA15_COLORS.gold}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`, color: SOFA15_COLORS.gold }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight', lineHeight: 1.8 }}>{s.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
