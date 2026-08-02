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

const metadata = { title: 'Đào tạo nghề sofa' };

const COURSES = [
  { title: 'Khóa Cơ Bản - Nghệ nhân Sofa', level: 'Sơ cấp', duration: '3 tháng', desc: 'Nhập môn nghề sofa: nguyên lý kết cấu, xử lý gỗ cơ bản, may bọc thủ công.', curriculum: ['Giới nghề & an toàn lao động', 'Nguyên liệu gỗ, da, vải', 'Kỹ thuật cắt ghép gỗ', 'May bọc cơ bản', 'Thực hành sản phẩm đơn giản'] },
  { title: 'Khóa Nâng Cao - Thiết Kế & Bọc Da', level: 'Trung cấp', duration: '6 tháng', desc: 'Chuyên sâu thiết kế sofa theo yêu cầu, kỹ thuật bọc da bò cao cấp.', curriculum: ['Bản vẽ kỹ thuật & 3D', 'Phối màu và phong cách', 'Kỹ thuật bọc da bò', 'Xử lý đệm đa lớp', 'Dự án thực tế cho khách'] },
  { title: 'Khóa Chuyên Gia - Quản Lý Xưởng', level: 'Cao cấp', duration: '9 tháng', desc: 'Đào tạo quản lý xưởng sản xuất, kiểm soát chất lượng và vận hành.', curriculum: ['Quản lý sản xuất & định mức', 'Kiểm soát chất lượng ISO', 'Quản lý nhân sự xưởng', 'Tối ưu chi phí & năng suất', 'Khởi nghiệp xưởng sofa'] },
];

const INSTRUCTOR = { name: 'Trần Hoàng Long', role: 'Nghệ nhân trưởng - 18 năm kinh nghiệm', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', bio: 'Tốt nghiệp chuyên ngành nội thất Ý, từng làm việc tại xưởng sofa Milan trước khi về Việt Nam đào tạo thế hệ nghệ nhân trẻ cho Casa Sofa.' };

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.workshop})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Đào tạo</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Đào Tạo
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Nghề Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Truyền nghề và ươm mầm thế hệ nghệ nhân sofa trẻ — chương trình đào tạo bài bản từ
                cơ bản đến chuyên gia, cấp chứng nhận hành nghề.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Courses */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Khóa học</Typography>
            <Typography variant="h2">
              Chương trình
              <Box component="span" sx={{ opacity: 0.4 }}> đào tạo</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {COURSES.map((course) => (
              <Grid key={course.title} xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2.5} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Stack direction="row" spacing={1}>
                    <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Typography variant="caption" fontWeight="fontWeightBold">{course.level}</Typography>
                    </Box>
                    <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                      <Typography variant="caption" fontWeight="fontWeightBold">{course.duration}</Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{course.desc}</Typography>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2">Nội dung khóa học:</Typography>
                    {course.curriculum.map((item) => (
                      <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                        <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={18} />
                        <Typography variant="body2">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button component={RouterLink} href={paths.sofaBooking} variant="outlined" fullWidth endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đăng ký khóa học</Button>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Instructor */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={4}>
              <Stack alignItems="center" spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Avatar src={INSTRUCTOR.avatar} alt={INSTRUCTOR.name} sx={{ width: 160, height: 160 }} />
                <Typography variant="h6">{INSTRUCTOR.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{INSTRUCTOR.role}</Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={8}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>Giảng viên trưởng</Typography>
                <Typography variant="h3">Người truyền nghề tận tâm</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{INSTRUCTOR.bio}</Typography>
                <Grid container spacing={2}>
                  {[{ v: '18+', l: 'Năm kinh nghiệm' }, { v: '500+', l: 'Học viên đào tạo' }, { v: '98%', l: 'Có việc làm' }].map((s) => (
                    <Grid key={s.l} xs={4}>
                      <Stack spacing={0.5}>
                        <Typography variant="h4" sx={{ color: 'primary.main' }}>{s.v}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{s.l}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Certification + CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', p: { xs: 5, md: 8 }, borderRadius: 3, bgcolor: 'primary.main', color: 'common.white' }}>
            <Iconify icon="solar:medal-ribbon-star-bold-duotone" width={56} />
            <Typography variant="h3">Chứng nhận hành nghề</Typography>
            <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8) }}>
              Hoàn thành khóa học, học viên nhận chứng nhận do Casa Sofa cấp, được công nhận trong
              ngành nội thất và cơ hội làm việc tại xưởng của chúng tôi.
            </Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="warning" startIcon={<Iconify icon="solar:pen-bold-duotone" />}>
              Đăng ký ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
