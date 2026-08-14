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

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Card, Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';

const APPLICATIONS = [
  { id: '1', position: 'Thợ may da cao cấp', status: 'Đang xem', date: '15/01/2025' },
  { id: '2', position: 'Stylist nội thất Riad Ma-rốc', status: 'Phỏng vấn', date: '10/01/2025' },
  { id: '3', position: 'Thợ bọc vải dệt tay', status: 'Đã nhận', date: '05/01/2025' },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Theo dõi tuyển dụng — Sofa17</title></Helmet>
      <Sofa17PageHero overline="THEO DÕI" title={<>THEO DÕI <span>TUYỂN DỤNG</span></>} subtitle="Theo dõi trạng thái hồ sơ ứng tuyển của bạn." image={SOFA17_PAGE_IMAGES.careers} />

      <Sofa17Section bg="black">
        <Stack spacing={3}>
          {APPLICATIONS.map((app) => (
            <Sofa17Card key={app.id} accent={app.status === 'Đã nhận' ? SOFA17_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA17_COLORS.emerald : SOFA17_COLORS.burgundy} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{app.position}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={16} sx={{ color: SOFA17_COLORS.gold }} />
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{app.date}</Typography>
                  </Stack>
                </Stack>
                <Chip label={app.status} sx={{ bgcolor: app.status === 'Đã nhận' ? varAlpha(SOFA17_COLORS.gold, 0.15) : app.status === 'Phỏng vấn' ? varAlpha(SOFA17_COLORS.emerald, 0.15) : varAlpha(SOFA17_COLORS.burgundy, 0.15), color: app.status === 'Đã nhận' ? SOFA17_COLORS.gold : app.status === 'Phỏng vấn' ? SOFA17_COLORS.emerald : '#A04050', fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
              </Stack>
            </Sofa17Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
          <Link component={RouterLink} href="/sofa17/careers" sx={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.black, bgcolor: SOFA17_COLORS.gold, border: `1px solid ${SOFA17_COLORS.gold}`, '&:hover': { bgcolor: SOFA17_COLORS.goldLight } }}>
              <Iconify icon="solar:case-bold-duotone" width={18} /> Xem việc làm
            </Stack>
          </Link>
        </Stack>
      </Sofa17Section>
    </>
  );
}
