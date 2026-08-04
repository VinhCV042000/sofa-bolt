import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Theo dõi tuyển dụng - Sofa Terra' };

const APPLICATIONS = [
  { id: 'APP001', position: 'Thợ mộc chế tác sofa eco', date: '15/01/2025', status: 'Đang xét duyệt' },
  { id: 'APP002', position: 'Nhân viên tư vấn eco-living', date: '10/01/2025', status: 'Phê duyệt' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Tuyển dụng" title="Theo dõi hồ sơ ứng tuyển" subtitle="Kiểm tra trạng thái hồ sơ ứng tuyển của bạn." image={SOFA3_PAGE_IMAGES.careers} />

      <Sofa3Section>
        <Stack spacing={3} component={MotionViewport} sx={{ maxWidth: 720, mx: 'auto' }}>
          {APPLICATIONS.map((app, index) => (
            <Stack key={app.id} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} direction="row" spacing={3} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }} alignItems="center">
              <Box sx={{ width: 48, height: 48, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.success.mainChannel, 0.08), color: 'success.main' }}>
                <Iconify icon="solar:document-text-bold-duotone" width={24} />
              </Box>
              <Stack spacing={0.5} sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{app.position}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Mã: {app.id} · Ngày nộp: {app.date}</Typography>
              </Stack>
              <Box sx={{ px: 2, py: 1, borderRadius: 1, bgcolor: app.status === 'Phê duyệt' ? 'success.main' : 'warning.main', color: 'common.white' }}>
                <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold' }}>{app.status}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Sofa3Section>
    </>
  );
}
