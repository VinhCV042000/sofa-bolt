import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, SOFA6_COMPANY_INFO } from 'src/sections/sofa6-pages/sofa6-pages-data';

const metadata = { title: 'Về Sofa Earth - Câu chuyện thương hiệu' };

const VALUES = [
  { icon: 'solar:leaf-bold-duotone', title: '100% Tự Nhiên', desc: 'Linen, bông hữu cơ, wool — không hóa chất, không nhựa, an toàn cho da và sức khỏe.' },
  { icon: 'solar:water-bold-duotone', title: 'Thuốc Nhuộm Thực Vật', desc: 'Nhuộm từ chàm, củ nghệ, vỏ bời lời — màu từ thiên nhiên, an toàn và độc đáo.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'May Thủ Công', desc: 'Mỗi sofa được may bởi nghệ nhân Việt với 15+ năm kinh nghiệm, đường kim tỉ mỉ.' },
];

const SUB_PAGES = [
  { section: 'history', title: 'Lịch sử', icon: 'solar:clock-circle-bold-duotone' },
  { section: 'vision', title: 'Tầm nhìn', icon: 'solar:eye-bold-duotone' },
  { section: 'values', title: 'Giá trị cốt lõi', icon: 'solar:hand-stars-bold-duotone' },
  { section: 'factory', title: 'Nhà máy', icon: 'solar:buildings-bold-duotone' },
  { section: 'process', title: 'Quy trình', icon: 'solar:list-bold-duotone' },
  { section: 'technology', title: 'Công nghệ', icon: 'solar:cpu-bold-duotone' },
  { section: 'certifications', title: 'Chứng nhận', icon: 'solar:medal-ribbon-bold-duotone' },
  { section: 'team', title: 'Đội ngũ', icon: 'solar:users-group-rounded-bold-duotone' },
  { section: 'partners', title: 'Đối tác', icon: 'solar:hand-shake-bold-duotone' },
  { section: 'gallery', title: 'Thư viện ảnh', icon: 'solar:gallery-bold-duotone' },
  { section: 'video', title: 'Video', icon: 'solar:videocamera-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        overline="Về Sofa Earth"
        title={(
          <>
            Về{' '}
            <Box component="span" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>
              Sofa Earth
            </Box>
          </>
        )}
        subtitle="Hơn 15 năm chế tác sofa thủ công với linen, bông hữu cơ, wool — mang đến không gian sống thiên nhiên cho hàng vạn gia đình Việt."
        image={SOFA6_PAGE_IMAGES.aboutHero}
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA6_PAGE_IMAGES.workshop} alt="Xưởng chế tác Sofa Earth" sx={{ width: 1, borderRadius: 2, aspectRatio: '4/5', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hành trình của chúng tôi</Typography>
              <Typography variant="h2">
                Từ xưởng nhỏ
                <Box component="span" sx={{ opacity: 0.4 }}> đến thương hiệu tự nhiên</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Sofa Earth ra đời năm {SOFA6_COMPANY_INFO.founded} từ một xưởng mộc nhỏ tại Hà Nội với 5 nghệ nhân.
                Bắt đầu từ những chiếc sofa bespoke bằng linen tự nhiên, chúng tôi dần khẳng định
                chất lượng và mở rộng thành thương hiệu nội thất tự nhiên với showroom tại 4 thành phố lớn.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Triết lý của Sofa Earth rất đơn giản: mỗi chiếc sofa phải thân thiện với môi trường và an toàn cho sức khỏe.
                Chúng tôi chọn lọc linen hữu cơ, bông organic, wool tự nhiên, thuốc nhuộm thực vật —
                để mỗi sản phẩm mang thiên nhiên vào ngôi nhà bạn.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Giá trị cốt lõi</Typography>
          <Typography variant="h2">
            Những điều
            <Box component="span" sx={{ opacity: 0.4 }}> chúng tôi theo đuổi</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      <Sofa6Section py={{ xs: 6, md: 10 }}>
        <Grid container spacing={3} component={MotionViewport}>
          {SOFA6_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }} component={MotionViewport}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Khám phá thêm</Typography>
          <Typography variant="h2">
            Tìm hiểu
            <Box component="span" sx={{ opacity: 0.4 }}> sâu hơn về Sofa Earth</Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.section} xs={6} sm={4} md={3}>
              <Button component={RouterLink} href={`/sofa6/about/${item.section}`} fullWidth sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textTransform: 'none', color: 'text.primary', '&:hover': { bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08) } }}>
                <Box sx={{ width: 52, height: 52, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={item.icon} width={26} />
                </Box>
                <Typography variant="subtitle2">{item.title}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      <Sofa6Section>
        <Stack spacing={4} alignItems="center" component={MotionViewport} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: SOFA6_COLORS.terracotta, color: 'common.white' }}>
          <Typography variant="h3">Trở thành một phần gia đình xanh</Typography>
          <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>
            Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa tự nhiên từ Sofa Earth.
          </Typography>
          <Button component={RouterLink} href="/sofa6/showrooms" size="large" variant="contained" sx={{ bgcolor: SOFA6_COLORS.sage, color: 'common.white', '&:hover': { bgcolor: SOFA6_COLORS.forest } }} startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
            Đặt lịch tư vấn
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
