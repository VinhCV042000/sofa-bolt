import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_IMAGES, SOFA10_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Khuyến mãi — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="KHUYẾN MÃI" title={<>KHUYẾN <span>MÃI</span></>} subtitle="Bảo hành, bảo trì, sửa chữa, vệ sinh, đổi trả — dịch vụ trọn đời." image={SOFA10_PAGE_IMAGES.cta} />

      <Sofa10Section>
        <Grid container spacing={3}>
          {SOFA10_PAGE_PROMOTION_SERVICES.map((s) => (
            <Grid key={s.slug} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={`/sofa10/promotions/${s.slug}`} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA10_COLORS.wood, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA10_COLORS.paper, color: SOFA10_COLORS.wood }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>
    </>
  );
}
