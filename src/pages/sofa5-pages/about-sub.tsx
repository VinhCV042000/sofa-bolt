import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';

const TIMELINE = [
  { year: '1972', title: 'Khởi đầu', text: 'Tanaka-sensei tạo hình sofa đầu tiên từ óc chó không hoàn hảo tại Louis.' },
  { year: '1985', title: 'Atelier', text: 'Mở xưởng Higashiyama — 10 nghệ nhân, bào tay gỗ óc chó.' },
  { year: '1998', title: 'Da bò Ý hữu cơ', text: 'Hợp tác flax farm Hokkaido — da bò Ý không nhuộm, đan tay.' },
  { year: '2010', title: 'Quốc tế', text: 'Gallery Milan, Paris — mang hoàng gia ra thế giới.' },
  { year: '2020', title: 'Baroque mending', text: 'Ra mắt chương trình bảo trì trọn đời theo triết lý kintsugi.' },
  { year: '2025', title: '50 năm', text: '80,000+ ngôi nhà tĩnh đã trang bị. Vẫn giữ triết lý hoàng gia.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Lịch sử — Monaco-An</title>
      </Helmet>

      <Sofa5PageHero overline="LỊCH SỬ" title={<>LỊCH SỬ <span>HÌNH THÀNH</span></>} subtitle="50 năm hoàng gia — từ xưởng nhỏ Louis đến atelier quốc tế." image={SOFA5_PAGE_IMAGES.historyHero} />

      <Sofa5Section>
        <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {TIMELINE.map((item, i) => (
            <Stack key={i} direction="row" spacing={4} alignItems="flex-start">
              <Stack spacing={1} alignItems="center" sx={{ flexShrink: 0 }}>
                <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA5_COLORS.vàng đồng, 0.12), color: SOFA5_COLORS.vàng đồngDeep, fontWeight: 'fontWeightBold', fontSize: 14 }}>{item.year}</Box>
                {i < TIMELINE.length - 1 && <Box sx={{ width: 2, flex: 1, minHeight: 40, bgcolor: varAlpha(SOFA5_COLORS.clay, 0.2) }} />}
              </Stack>
              <Stack spacing={1} sx={{ pb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA5_COLORS.charcoal }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.text}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa5Section>
    </>
  );
}
