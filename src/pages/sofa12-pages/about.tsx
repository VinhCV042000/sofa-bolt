import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_COMPANY_INFO } from 'src/sections/sofa12-pages/sofa12-pages-data';

const metadata = { title: 'Về TERRA ARCH - Câu chuyện thương hiệu' };

const VALUES = [
  { icon: 'solar:hand-stars-bold-duotone', title: 'Thủ Công 18 Công Đoạn', desc: 'Mỗi chiếc sofa TERRA qua 18 công đoạn thủ công — uốn vòm, mộng âm, bọc vải.' },
  { icon: 'solar:leaf-bold-duotone', title: 'Vật Liệu Tự Nhiên', desc: 'Vải lanh thô, gỗ tần bì FSC, len cừu, cao su thiên nhiên — không hóa chất.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo Hành 12 Năm', desc: 'Khung gỗ tần bì mộng âm bảo hành 12 năm, đệm cao su thiên nhiên 8 năm.' },
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

      <Sofa12PageHero
        overline="Về TERRA ARCH"
        title={(
          <>
            Câu chuyện thương hiệu
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.warning.light}, ${theme.vars.palette.warning.light}`) }}>
              {' '}đất nung
            </Box>
          </>
        )}
        subtitle="Hơn 7 năm chế tác sofa TERRA ARCH với vải lanh thô và gỗ tần bì — mang đến không gian sống ấm áp và thủ công cho hàng vạn gia đình Việt."
        image={SOFA12_PAGE_IMAGES.aboutHero}
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box component="img" src={SOFA12_PAGE_IMAGES.workshop} alt="Xưởng chế tác TERRA ARCH" sx={{ width: 1, borderRadius: 2, aspectRatio: '4/5', objectFit: 'cover' }} />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Hành trình của chúng tôi</Typography>
                <Typography variant="h2">
                  Từ đất nung
                  <Box component="span" sx={{ opacity: 0.4 }}> đến vòm cong</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  TERRA ARCH ra đời năm {SOFA12_PAGE_COMPANY_INFO.founded} từ một xưởng mộc nhỏ tại Hà Nội với 5 nghệ nhân.
                  Bắt đầu từ những chiếc sofa bespoke bằng vải lanh thô, chúng tôi dần khẳng định
                  chất lượng và mở rộng thành thương hiệu TERRA ARCH với showroom tại 4 thành phố.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Triết lý của TERRA ARCH rất đơn giản: mỗi chiếc sofa phải ấm áp và bền vững.
                  Chúng tôi chọn lọc lanh thô, gỗ tần bì, len cừu — để mỗi sản phẩm mang
                  năng lượng đất nung và đồng hành cùng gia đình Việt.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
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

      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA12_PAGE_COMPANY_INFO.stats.map((s) => (
              <Grid key={s.label} xs={6} md={3}>
                <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h2" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{s.value}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Khám phá thêm</Typography>
            <Typography variant="h2">
              Tìm hiểu
              <Box component="span" sx={{ opacity: 0.4 }}> sâu hơn về TERRA ARCH</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {SUB_PAGES.map((item) => (
              <Grid key={item.section} xs={6} sm={4} md={3}>
                <Button component={RouterLink} href={`/sofa12/about/${item.section}`} fullWidth sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textTransform: 'none', color: 'text.primary', '&:hover': { bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08) } }}>
                  <Box sx={{ width: 52, height: 52, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={item.icon} width={26} />
                  </Box>
                  <Typography variant="subtitle2">{item.title}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: 'warning.main', color: 'common.white' }}>
            <Typography variant="h3">Trở thành một phần không gian ấm áp</Typography>
            <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>
              Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa TERRA ARCH.
            </Typography>
            <Button component={RouterLink} href="/sofa12/showrooms" size="large" variant="contained" color="warning" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
