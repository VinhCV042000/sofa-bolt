import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import { SOFA9_PAGE_PROMOTION_SERVICES, SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Khuyến mãi — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="KHUYẾN MÃI" title={<>KHUYẾN <span>MÃI</span></>} subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh, đổi trả — dịch vụ trọn đời." image={SOFA9_PAGE_IMAGES.cta} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {SOFA9_PAGE_PROMOTION_SERVICES.map((s) => (
            <Grid key={s.slug} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa9/promotions/${s.slug}`} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
