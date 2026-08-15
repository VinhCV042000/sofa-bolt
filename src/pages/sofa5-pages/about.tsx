import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_IMAGES, SOFA5_PAGE_COMPANY_INFO } from 'src/sections/sofa5-pages/sofa5-pages-data';

const ABOUT_ITEMS = [
  { heading: 'Giới thiệu công ty', body: 'Monaco-An — xưởng sofa hoàng gia Louis từ 1972. Tôn vinh sự không hoàn hảo, thủ công bào tay, da bò Ý hữu cơ.' },
  { heading: 'Lịch sử hình thành', body: 'Thành lập 1972 bởi Tanaka-sensei tại Louis. Từ xưởng nhỏ đến atelier quốc tế, vẫn giữ triết lý hoàng gia.' },
  { heading: 'Tầm nhìn & sứ mệnh', body: 'Mang sự tĩnh lặng của Louis về mỗi ngôi nhà. Sofa nuôi dưỡng thiền, tôn vinh tự nhiên.' },
  { heading: 'Giá trị cốt lõi', body: 'Royale, thủ công, bền vững, sửa chữa trọn đời. Mỗi tác phẩm là câu chuyện độc nhất.' },
  { heading: 'Nhà máy sản xuất', body: 'Xưởng Louis 2000m², bào tay gỗ óc chó, đan da bò Ý không nhuộm. 30 nghệ nhân.' },
  { heading: 'Quy trình sản xuất', body: 'Tư vấn → bào tay → đan tự nhiên → giao hàng trọn đời. 12-16 tuần cho định chế.' },
  { heading: 'Công nghệ sản xuất', body: 'Bào tay truyền thống + CNC precision. Da bò Ý đan tay, không máy. Baroque repair.' },
  { heading: 'Chứng nhận chất lượng', body: 'FSC® gỗ óc chó, GOTS® da bò Ý, ISO 9001. Chứng nhận nguồn rừng Yoshino.' },
  { heading: 'Đội ngũ nhân sự', body: '30 nghệ nhân: mộc, đan, thiết kế. Tanaka-sensei dẫn dắt từ 1972.' },
  { heading: 'Đối tác', body: 'Rừng Yoshino, flax farm Hokkaido, boutique Louis–Milan–Paris.' },
  { heading: 'Hình ảnh công ty', body: 'Xưởng, atelier, gallery. Không gian hoàng gia-sambi tại Louis.' },
  { heading: 'Video giới thiệu', body: 'Phim tài liệu 1972–2025: 50 năm hoàng gia. Sắp ra mắt.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Giới thiệu — Monaco-An</title>
      </Helmet>

      <Sofa5PageHero overline="GIỚI THIỆU" title={<>GIỚI <span>THIỆU</span></>} subtitle="Monaco-An — xưởng sofa hoàng gia Louis từ 1972. Tôn vinh sự không hoàn hảo, thủ công bào tay." image={SOFA5_PAGE_IMAGES.aboutHero} />

      <Sofa5Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA5_PAGE_IMAGES.workshop} alt="Xưởng Louis" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold', color: SOFA5_COLORS.charcoal }}>{SOFA5_PAGE_COMPANY_INFO.name}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{SOFA5_PAGE_COMPANY_INFO.tagline}</Typography>
              <Grid container spacing={2}>
                {SOFA5_PAGE_COMPANY_INFO.stats.map((stat) => (
                  <Grid key={stat.label} xs={6} sm={3}>
                    <Stack spacing={1} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', color: SOFA5_COLORS.vàng đồngDeep }}>{stat.value}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Sofa5Section>

      <Sofa5Section bg="paper">
        <Grid container spacing={3}>
          {ABOUT_ITEMS.map((item, i) => (
            <Grid key={i} xs={12} sm={6} md={4}>
              <Stack spacing={2} sx={{ p: 3, height: 1, borderRadius: 3, bgcolor: 'background.default', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA5_COLORS.charcoal }}>{item.heading}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa5Section>
    </>
  );
}
