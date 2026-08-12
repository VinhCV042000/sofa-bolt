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

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Card, Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, SOFA15_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa15-pages/sofa15-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.service || '';
  const service = SOFA15_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA15_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} — Sofa15</title></Helmet>
      <Sofa15PageHero overline="KHUYẾN MÃI" title={<span>{service.title.toUpperCase()}</span>} subtitle={service.description} image={SOFA15_PAGE_IMAGES.prod1} />

      <Sofa15Section bg="black">
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
              <Box component="img" src={SOFA15_PAGE_IMAGES.service1} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Sofa15Card accent={SOFA15_COLORS.gold} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`, color: SOFA15_COLORS.gold }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{service.title}</Typography>
                </Stack>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{service.description}</Typography>
                <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>Dịch vụ {service.title.toLowerCase()} của Sofa15 được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, sử dụng vật liệu và dung dịch chính hãng. Cam kết chất lượng và bảo hành sau dịch vụ.</Typography>
                <Link component={RouterLink} href="/sofa15/showrooms/visit" sx={{ textDecoration: 'none' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, width: 'fit-content', fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>
                    <Iconify icon="solar:phone-bold-duotone" width={18} /> Đặt lịch dịch vụ
                  </Stack>
                </Link>
              </Stack>
            </Sofa15Card>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
