import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may velvet', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ da Ý', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa13</title></Helmet>
      <Sofa13PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA13_PAGE_IMAGES.careers} />

      <Sofa13Section>
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Stack key={app.id} component={m.div} variants={varFade({ distance: 24 }).inUp} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{app.position}</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA13_COLORS.goldPale }} />
                  <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{app.date}</Typography>
                </Stack>
              </Stack>
              <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? sofa13Alpha(SOFA13_COLORS.emeraldBright, 0.15) : app.status === 'Phỏng vấn' ? sofa13Alpha(SOFA13_COLORS.gold, 0.15) : sofa13Alpha(SOFA13_COLORS.ivory, 0.1), color: app.status === 'Đã nhận' ? SOFA13_COLORS.emeraldBright : app.status === 'Phỏng vấn' ? SOFA13_COLORS.gold : SOFA13_COLORS.ivory, fontWeight: 700, borderRadius: 0 }} />
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Link component={RouterLink} href="/sofa13/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </Link>
        </Stack>
      </Sofa13Section>
    </>
  );
}
