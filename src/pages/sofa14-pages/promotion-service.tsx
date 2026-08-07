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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section, Sofa14Card } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_PROMOTION_SERVICES, SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.service || '';
  const service = SOFA14_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA14_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} — Sofa14</title></Helmet>
      <Sofa14PageHero overline="KHUYẾN MÃI" title={<><span>{service.title.toUpperCase()}</span></>} subtitle={service.description} image={SOFA14_PAGE_IMAGES.prod1} />

      <Sofa14Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa14Alpha(SOFA14_COLORS.mint, 0.4)}` }}>
              <Box component="img" src={SOFA14_PAGE_IMAGES.service1} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Sofa14Card accent={SOFA14_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa14Alpha(SOFA14_COLORS.mint, 0.2), color: SOFA14_COLORS.mintDeep }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{service.title}</Typography>
                </Stack>
                <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{service.description}</Typography>
                <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>Dịch vụ {service.title.toLowerCase()} của Sofa14 được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, sử dụng vật liệu và dung dịch chính hãng. Cam kết chất lượng và bảo hành sau dịch vụ.</Typography>
                <RouterLink href="/sofa14/showrooms/visit" sx={{ textDecoration: 'none' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, width: 'fit-content', borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>
                    <Iconify icon="solar:phone-bold-duotone" width={18} /> Đặt lịch dịch vụ
                  </Stack>
                </RouterLink>
              </Stack>
            </Sofa14Card>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
