import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về Casa Sofa - Câu chuyện thương hiệu' };

const TEAM = [
  { name: 'Nguyễn Minh Anh', role: 'Giám đốc sáng tạo', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Trần Hoàng Long', role: 'Trưởng xưởng chế tác', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Lê Thu Hà', role: 'Trưởng phòng thiết kế', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { name: 'Phạm Quốc Bảo', role: 'Quản lý chất lượng', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
];

const VALUES = [
  { icon: 'solar:hand-stars-bold-duotone', title: 'Thủ Công Tinh Tế', desc: 'Mỗi chiếc sofa là kết tinh từ hơn 200 giờ chế tác thủ công.' },
  { icon: 'solar:leaf-bold-duotone', title: 'Vật Liệu Bền Vững', desc: 'Gỗ sồi FSC, da bò thực phẩm và vải linen tái chế thân thiện môi trường.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo Hành 5 Năm', desc: 'Cam kết chất lượng với bảo hành chính hãng và bảo trì trọn đời.' },
];

const STATS = [
  { value: '12+', label: 'Năm chế tác' },
  { value: '80+', label: 'Mẫu sofa' },
  { value: '25k+', label: 'Gia đình tin chọn' },
  { value: '4.9', label: 'Điểm đánh giá' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.aboutHero})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>
                Về Casa Sofa
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Câu chuyện thương hiệu
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
                  {' '}từ đôi bàn tay nghệ nhân
                </Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Hơn 12 năm chế tác sofa cao cấp với tình yêu nghề và sự tỉ mỉ — mang đến không gian
                sống sang trọng cho hàng vạn gia đình Việt.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Story */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box
                  component="img"
                  src={SOFA_PAGE_IMAGES.workshop}
                  alt="Xưởng chế tác Casa Sofa"
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
                  Casa Sofa ra đời năm 2012 từ một xưởng mộc nhỏ tại Hà Nội với 5 nghệ nhân. Bắt đầu
                  từ những chiếc sofa bespoke cho khách hàng cá nhân, chúng tôi dần khẳng định chất
                  lượng và mở rộng thành thương hiệu nội thất cao cấp với 4 chi nhánh trên cả nước.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Triết lý của Casa Sofa rất đơn giản: mỗi chiếc sofa phải là một kiệt tác. Chúng tôi
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
            {STATS.map((s) => (
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

      {/* Team */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Đội ngũ</Typography>
            <Typography variant="h2">
              Những con người
              <Box component="span" sx={{ opacity: 0.4 }}> tạo nên Casa Sofa</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3} justifyContent="center">
            {TEAM.map((member) => (
              <Grid key={member.name} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} alignItems="center" sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Avatar src={member.avatar} alt={member.name} sx={{ width: 96, height: 96 }} />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{member.role}</Typography>
                </Stack>
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
              Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm chất lượng Casa Sofa.
            </Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="warning" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
