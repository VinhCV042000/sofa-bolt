import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import {
  SOFA2_PAGE_IMAGES,
  SOFA2_COMPANY_INFO,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về LUXE Sofa - Câu chuyện thương hiệu' };

const VALUES = [
  { icon: 'solar:pallete2-bold-duotone', title: 'Thiết kế độc quyền', desc: 'Mỗi mẫu sofa là thiết kế riêng, không trùng lặp trên thị trường.' },
  { icon: 'solar:leaf-bold-duotone', title: 'Gỗ FSC bền vững', desc: 'Khung gỗ sồi chứng nhận FSC, thân thiện môi trường và độ bền vượt thời gian.' },
  { icon: 'solar:bed-bold-duotone', title: 'Đệm Memory Foam', desc: 'Công nghệ đệm Đức ôm cơ thể, giữ form sau 50,000 lần ngồi.' },
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

      {/* Hero */}
      <Sofa2PageHero
        overline="Về LUXE Sofa"
        title={(
          <>
            Câu chuyện thương hiệu
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}từ đôi bàn tay nghệ nhân
            </Box>
          </>
        )}
        subtitle="Hơn 12 năm chế tác sofa cao cấp với tình yêu nghề và sự tỉ mỉ — mang đến không gian sống sang trọng cho hàng vạn gia đình Việt."
        image={SOFA2_PAGE_IMAGES.aboutHero}
      />

      {/* Intro */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box
                  component="img"
                  src={SOFA2_PAGE_IMAGES.workshop}
                  alt="Xưởng chế tác LUXE Sofa"
                  sx={{ width: 1, borderRadius: 2, aspectRatio: '4/5', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hành trình của chúng tôi</Typography>
                <Typography variant="h2">
                  Từ xưởng nhỏ
                  <Box component="span" sx={{ opacity: 0.4 }}> đến thương hiệu quốc gia</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  LUXE Sofa ra đời năm 2012 từ một xưởng mộc nhỏ tại Bình Dương với 5 nghệ nhân. Bắt
                  đầu từ những chiếc sofa bespoke cho khách hàng cá nhân, chúng tôi dần khẳng định
                  chất lượng và mở rộng thành thương hiệu nội thất cao cấp với showroom tại 4 thành
                  phố lớn.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Triết lý của LUXE Sofa rất đơn giản: mỗi chiếc sofa phải là một kiệt tác. Chúng tôi
                  chọn lọc từng tấm da bò, từng thanh gỗ sồi, may từng đường kim bằng tay để mỗi sản
                  phẩm mang dấu ấn riêng và đồng hành cùng gia đình bạn qua năm tháng.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
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
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA2_COMPANY_INFO.stats.map((s) => (
              <Grid key={s.label} xs={6} md={3}>
                <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sub pages */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Khám phá thêm</Typography>
            <Typography variant="h2">
              Tìm hiểu
              <Box component="span" sx={{ opacity: 0.4 }}> sâu hơn về LUXE Sofa</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {SUB_PAGES.map((item) => (
              <Grid key={item.section} xs={6} sm={4} md={3}>
                <Button
                  component={RouterLink}
                  href={`/sofa2/about/${item.section}`}
                  fullWidth
                  sx={{
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: (t) => t.customShadows.card,
                    textTransform: 'none',
                    color: 'text.primary',
                    '&:hover': { bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) },
                  }}
                >
                  <Box sx={{ width: 52, height: 52, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={26} />
                  </Box>
                  <Typography variant="subtitle2">{item.title}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: 'primary.main', color: 'common.white' }}>
            <Typography variant="h3">Trở thành một phần câu chuyện</Typography>
            <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>
              Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm chất lượng LUXE Sofa.
            </Typography>
            <Button component={RouterLink} href="/sofa2/showrooms" size="large" variant="contained" color="warning" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
