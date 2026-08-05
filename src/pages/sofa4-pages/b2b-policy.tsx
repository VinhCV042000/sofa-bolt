import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA4_PAGE_IMAGES } from 'src/sections/sofa4-pages/sofa4-pages-data';
import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';

const metadata = { title: 'Chính sách đại lý - Sofa Pop' };

const POLICIES = [
  { title: 'Chiết khấu đại lý', desc: 'Chiết khấu từ 15-30% tùy cấp bậc đại lý.' },
  { title: 'Hỗ trợ marketing', desc: 'Cung cấp tài liệu marketing, hình ảnh, video sản phẩm.' },
  { title: 'Hỗ trợ trưng bày', desc: 'Hỗ trợ thiết kế và setup showroom trưng bày.' },
  { title: 'Bảo hành mở rộng', desc: 'Bảo hành 10 năm cho khung, 7 năm cho đệm bọc.' },
  { title: 'Đào tạo', desc: 'Đào tạo sản phẩm và kỹ năng bán hàng cho đội ngũ đại lý.' },
  { title: 'Độc quyền khu vực', desc: 'Bảo vệ khu vực phân phối, không trùng lặp đại lý.' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Đại lý B2B" title="Chính sách đại lý" subtitle="Quyền lợi và chính sách dành cho đại lý phân phối Sofa Pop." image={SOFA4_PAGE_IMAGES.b2b} />

      <Sofa4Section>
        <Stack spacing={3} component={MotionViewport}>
          {POLICIES.map((policy, index) => (
            <Stack key={policy.title} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} direction="row" spacing={2} alignItems="center" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${(t.vars ?? { palette: { grey: { '500Channel': 'rgba(145,158,171,0.2)' } } }).palette.grey['500Channel'] ? 'rgba(145,158,171,0.12)' : 'rgba(145,158,171,0.12)'}` }}>
              <Box sx={{ width: 40, height: 40, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'warning.lighter', color: 'warning.main' }}>
                <Iconify icon="solar:check-circle-bold-duotone" width={20} />
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">{policy.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{policy.desc}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa4Section>
    </>
  );
}
