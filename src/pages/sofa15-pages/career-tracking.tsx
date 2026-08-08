import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section, Sofa15Card } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may da cao cấp', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất Art Deco', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ bọc velvet', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa15</title></Helmet>
      <Sofa15PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA15_PAGE_IMAGES.careers} />

      <Sofa15Section bg="black">
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Sofa15Card key={app.id} accent={app.status === 'Đã nhận' ? SOFA15_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA15_COLORS.emerald : SOFA15_COLORS.burgundy} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{app.position}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA15_COLORS.gold }} />
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{app.date}</Typography>
                  </Stack>
                </Stack>
                <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? varAlpha(SOFA15_COLORS.gold, 0.15) : app.status === 'Phỏng vấn' ? varAlpha(SOFA15_COLORS.emerald, 0.15) : varAlpha(SOFA15_COLORS.burgundy, 0.15), color: app.status === 'Đã nhận' ? SOFA15_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA15_COLORS.emerald : '#A04050', fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
              </Stack>
            </Sofa15Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <RouterLink href="/sofa15/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </RouterLink>
        </Stack>
      </Sofa15Section>
    </>
  );
}
