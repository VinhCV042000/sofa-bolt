import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may cotton pastel', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ nỉ pastel', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa14</title></Helmet>
      <Sofa14PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA14_PAGE_IMAGES.careers} />

      <Sofa14Section>
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Sofa14Card key={app.id} accent={app.status === 'Đã nhận' ? SOFA14_COLORS.mint : app.status === 'Phỏng vấn' ? SOFA14_COLORS.butter : SOFA14_COLORS.sky} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{app.position}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA14_COLORS.coralDeep }} />
                    <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{app.date}</Typography>
                  </Stack>
                </Stack>
                <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? sofa14Alpha(SOFA14_COLORS.mint, 0.2) : app.status === 'Phỏng vấn' ? sofa14Alpha(SOFA14_COLORS.butter, 0.3) : sofa14Alpha(SOFA14_COLORS.sky, 0.2), color: app.status === 'Đã nhận' ? SOFA14_COLORS.mintDeep : app.status === 'Phỏng vấn' ? '#B8860B' : SOFA14_COLORS.skyDeep, fontWeight: 800, borderRadius: 99 }} />
              </Stack>
            </Sofa14Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Link component={RouterLink} href="/sofa14/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </Link>
        </Stack>
      </Sofa14Section>
    </>
  );
}
