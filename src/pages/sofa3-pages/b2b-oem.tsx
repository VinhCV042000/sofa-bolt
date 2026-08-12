import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';
import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';

const metadata = { title: 'Sản xuất OEM - Sofa Terra' };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Đại lý B2B" title="Yêu cầu sản xuất OEM" subtitle="Sản xuất sofa theo thương hiệu riêng với vật liệu tự nhiên 100%." image={SOFA3_PAGE_IMAGES.b2b} />

      <Sofa3Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h5" sx={{ mb: 2 }}>Quy trình OEM</Typography>
            <Stack spacing={2}>
              {['Tiếp nhận yêu cầu và thiết kế mẫu', 'Báo giá và chốt hợp đồng', 'Sản xuất hàng loạt với vật liệu tự nhiên', 'Kiểm tra chất lượng và đóng gói', 'Giao hàng theo dự án'].map((step, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'success.main', color: 'common.white', fontSize: 14, fontWeight: 'bold' }}>{i + 1}</Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Sofa3Section>
    </>
  );
}
