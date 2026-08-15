import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may cotton pastel', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ nỉ pastel', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa19</title></Helmet>
      <Sofa19PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA19_PAGE_IMAGES.careers} />

      <Sofa19Section>
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Sofa19Card key={app.id} accent={app.status === 'Đã nhận' ? SOFA19_COLORS.jungleLight : app.status === 'Phỏng vấn' ? SOFA19_COLORS.golden : SOFA19_COLORS.sand} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{app.position}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA19_COLORS.coralDeep }} />
                    <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>{app.date}</Typography>
                  </Stack>
                </Stack>
                <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? sofa19Alpha(SOFA19_COLORS.jungleLight, 0.2) : app.status === 'Phỏng vấn' ? sofa19Alpha(SOFA19_COLORS.golden, 0.3) : sofa19Alpha(SOFA19_COLORS.sand, 0.2), color: app.status === 'Đã nhận' ? SOFA19_COLORS.jungle : app.status === 'Phỏng vấn' ? '#B8860B' : SOFA19_COLORS.terracotta, fontWeight: 800, borderRadius: 99 }} />
              </Stack>
            </Sofa19Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Link component={RouterLink} href="/sofa19/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, borderRadius: 99, fontWeight: 800, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </Link>
        </Stack>
      </Sofa19Section>
    </>
  );
}
