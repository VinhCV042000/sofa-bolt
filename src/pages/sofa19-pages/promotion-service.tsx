import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.service || '';
  const service = SOFA19_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug) || SOFA19_PAGE_PROMOTION_SERVICES[0];

  return (
    <>
      <Helmet><title>{service.title} — Sofa19</title></Helmet>
      <Sofa19PageHero overline="KHUYẾN MÃI" title={<span>{service.title.toUpperCase()}</span>} subtitle={service.description} image={SOFA19_PAGE_IMAGES.prod1} />

      <Sofa19Section>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa19Alpha(SOFA19_COLORS.jungleLight, 0.4)}` }}>
              <Box component="img" src={SOFA19_PAGE_IMAGES.service1} alt={service.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Sofa19Card accent={SOFA19_COLORS.coral} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa19Alpha(SOFA19_COLORS.jungleLight, 0.2), color: SOFA19_COLORS.jungle }}>
                    <Iconify icon={service.icon} width={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{service.title}</Typography>
                </Stack>
                <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{service.description}</Typography>
                <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>Dịch vụ {service.title.toLowerCase()} của Sofa19 được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, sử dụng vật liệu và dung dịch chính hãng. Cam kết chất lượng và bảo hành sau dịch vụ.</Typography>
                <Link component={RouterLink} href="/sofa19/showrooms/visit" sx={{ textDecoration: 'none' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, width: 'fit-content', borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>
                    <Iconify icon="solar:phone-bold-duotone" width={18} /> Đặt lịch dịch vụ
                  </Stack>
                </Link>
              </Stack>
            </Sofa19Card>
          </Grid>
        </Grid>
      </Sofa19Section>
    </>
  );
}
