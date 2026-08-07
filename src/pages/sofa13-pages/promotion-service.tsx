import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_PROMOTION_SERVICES, SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.service || '';
  const service = SOFA13_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA13_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="KHUYẾN MÃI" title={<><span>{service.title.toUpperCase()}</span></>} subtitle={service.description} image={SOFA13_PAGE_IMAGES.prod1} />

      <Sofa13Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
              <Box component="img" src={SOFA13_PAGE_IMAGES.service1} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${SOFA13_COLORS.gold}`, color: SOFA13_COLORS.gold }}>
                  <Iconify icon={service.icon} width={28} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{service.title}</Typography>
              </Stack>
              <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>{service.description}</Typography>
              <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9 }}>Dịch vụ {service.title.toLowerCase()} của Sofa13 được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, sử dụng vật liệu và dung dịch chính hãng. Cam kết chất lượng và bảo hành sau dịch vụ.</Typography>
              <RouterLink href="/sofa13/showrooms/visit" sx={{ textDecoration: 'none' }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, width: 'fit-content', fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>
                  <Iconify icon="solar:phone-bold-duotone" width={18} /> Đặt lịch dịch vụ
                </Stack>
              </RouterLink>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
