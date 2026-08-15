import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may da cao cấp', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất Riad công nghiệp', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ bọc vải dệt tay', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa20</title></Helmet>
      <Sofa20PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA20_PAGE_IMAGES.careers} />

      <Sofa20Section bg="black">
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Sofa20Card key={app.id} accent={app.status === 'Đã nhận' ? SOFA20_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA20_COLORS.emerald : SOFA20_COLORS.burgundy} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{app.position}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA20_COLORS.gold }} />
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{app.date}</Typography>
                  </Stack>
                </Stack>
                <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? varAlpha(SOFA20_COLORS.gold, 0.15) : app.status === 'Phỏng vấn' ? varAlpha(SOFA20_COLORS.emerald, 0.15) : varAlpha(SOFA20_COLORS.burgundy, 0.15), color: app.status === 'Đã nhận' ? SOFA20_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA20_COLORS.emerald : '#A04050', fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
              </Stack>
            </Sofa20Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Link component={RouterLink} href="/sofa20/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </Link>
        </Stack>
      </Sofa20Section>
    </>
  );
}
