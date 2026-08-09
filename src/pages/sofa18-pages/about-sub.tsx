import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { varFade } from 'src/components/animate';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18PageHero, Sofa18Section } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';

const TIMELINE = [
  { year: '1972', title: 'Khởi đầu', text: 'Tanaka-sensei tạo hình sofa đầu tiên từ tuyết tùng không hoàn hảo tại Kyoto.' },
  { year: '1985', title: 'Atelier', text: 'Mở xưởng Higashiyama — 10 nghệ nhân, bào tay hinoki.' },
  { year: '1998', title: 'Linen hữu cơ', text: 'Hợp tác flax farm Hokkaido — linen không nhuộm, đan tay.' },
  { year: '2010', title: 'Quốc tế', text: 'Gallery Tokyo, Paris — mang wabi-sabi ra thế giới.' },
  { year: '2020', title: 'Kintsugi mending', text: 'Ra mắt chương trình bảo trì trọn đời theo triết lý kintsugi.' },
  { year: '2025', title: '50 năm', text: '80,000+ ngôi nhà tĩnh đã trang bị. Vẫn giữ triết lý wabi-sabi.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Lịch sử — Muji-An</title>
      </Helmet>

      <Sofa18PageHero overline="LỊCH SỬ" title={<>LỊCH SỬ <span>HÌNH THÀNH</span></>} subtitle="50 năm wabi-sabi — từ xưởng nhỏ Kyoto đến atelier quốc tế." image={SOFA18_PAGE_IMAGES.historyHero} />

      <Sofa18Section>
        <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {TIMELINE.map((item, i) => (
            <Stack key={i} direction="row" spacing={4} alignItems="flex-start">
              <Stack spacing={1} alignItems="center" sx={{ flexShrink: 0 }}>
                <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA18_COLORS.sage, 0.12), color: SOFA18_COLORS.sageDeep, fontWeight: 'fontWeightBold', fontSize: 14 }}>{item.year}</Box>
                {i < TIMELINE.length - 1 && <Box sx={{ width: 2, flex: 1, minHeight: 40, bgcolor: varAlpha(SOFA18_COLORS.clay, 0.2) }} />}
              </Stack>
              <Stack spacing={1} sx={{ pb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.charcoal }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.text}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa18Section>
    </>
  );
}
