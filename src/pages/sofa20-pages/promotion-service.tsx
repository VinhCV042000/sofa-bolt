import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { SOFA20_PAGE_IMAGES, SOFA20_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa20-pages/sofa20-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.service || '';
  const service = SOFA20_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA20_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} — Sofa20</title></Helmet>
      <Sofa20PageHero overline="KHUYẾN MÃI" title={<span>{service.title.toUpperCase()}</span>} subtitle={service.description} image={SOFA20_PAGE_IMAGES.prod1} />

      <Sofa20Section bg="black">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.3)}` }}>
              <Box component="img" src={SOFA20_PAGE_IMAGES.service1} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Sofa20Card accent={SOFA20_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.4)}`, color: SOFA20_COLORS.gold }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{service.title}</Typography>
                </Stack>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{service.description}</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>Dịch vụ {service.title.toLowerCase()} của Sofa20 được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, sử dụng vật liệu và dung dịch chính hãng. Cam kết chất lượng và bảo hành sau dịch vụ.</Typography>
                <Link component={RouterLink} href="/sofa20/showrooms/visit" sx={{ textDecoration: 'none' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, width: 'fit-content', fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>
                    <Iconify icon="solar:phone-bold-duotone" width={18} /> Đặt lịch dịch vụ
                  </Stack>
                </Link>
              </Stack>
            </Sofa20Card>
          </Grid>
        </Grid>
      </Sofa20Section>
    </>
  );
}
