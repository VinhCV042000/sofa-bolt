import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';

const POLICY_ITEMS = [
  { heading: 'Chiết khấu', body: 'Chiết khấu 15-30% tùy số lượng và cấp đại lý.' },
  { heading: 'Hỗ trợ marketing', body: 'Cung cấp tài liệu marketing, hình ảnh, catalog.' },
  { heading: 'Đào tạo', body: 'Đào tạo sản phẩm, sales retro cho đại lý.' },
  { heading: 'Bảo hành', body: 'Bảo hành 10 năm, bảo trì trọn đời cho đại lý.' },
  { heading: 'Giao hàng', body: 'Giao hàng miễn phí cho đơn hàng từ 10+ sản phẩm.' },
  { heading: 'Thanh toán', body: 'Thanh toán linh hoạt, công nợ 30-60 ngày.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Chính sách đại lý — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="B2B" title={<>CHÍNH SÁCH <span>ĐẠI LÝ</span></>} subtitle="Quyền lợi và chính sách dành cho đại lý Sofa9." image={SOFA9_PAGE_IMAGES.b2b} />

      <Sofa9Section>
        <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {POLICY_ITEMS.map((item, i) => (
            <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
              <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA9_COLORS.pink, flexShrink: 0 }} />
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{item.heading}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa9Section>
    </>
  );
}
