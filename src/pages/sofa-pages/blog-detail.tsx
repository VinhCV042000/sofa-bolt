import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_BLOG_POSTS,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const BODY = [
  'Nội thất không chỉ là vật dụng trong ngôi nhà mà còn là ngôn ngữ thể hiện cá tính và gu thẩm mỹ của gia chủ. Với hơn một thập kỷ chế tác sofa, Casa Sofa luôn tâm niệm rằng mỗi không gian đều có câu chuyện riêng và chiếc sofa phải góp phần kể câu chuyện ấy một cách trọn vẹn nhất.',
  'Khi lựa chọn sofa, nhiều khách hàng thường chỉ chú ý đến vẻ bề ngoài mà bỏ qua những yếu tố kỹ thuật quan trọng như kết cấu khung, mật độ đệm hay nguồn gốc chất liệu. Một chiếc sofa đẹp mắt nhưng đệm xẹp sau vài tháng sẽ làm mất đi sự thoải mái vốn có. Vì vậy, chúng tôi khuyến cáo nên tìm hiểu kỹ thành phần trước khi quyết định.',
  'Tại Casa Sofa, mọi sản phẩm đều trải qua hơn 200 giờ chế tác thủ công. Nghệ nhân của chúng tôi chọn lọc từng tấm da bò, từng thanh gỗ sồi và may từng đường kim bằng tay. Điều này không chỉ đảm bảo độ bền mà còn mang lại dấu ấn độc bản mà máy móc khó có thể sao chép.',
  'Bảo dưỡng đóng vai trò then chốt để duy trì vẻ đẹp và tuổi thọ của sofa. Với sofa da, nên lau sạch định kỳ bằng dung dịch chuyên dụng và tránh ánh nắng trực tiếp. Với sofa vải, giặt hút bụi sâu mỗi 6 tháng giúp kháng khuẩn và giữ màu sáng lâu dài.',
  'Cuối cùng, đừng ngần ngại nhờ chuyên gia tư vấn. Một chiếc sofa phù hợp không chỉ nâng tầm không gian sống mà còn đồng hành cùng gia đình bạn qua nhiều năm tháng. Hãy để Casa Sofa giúp bạn tìm ra kiệt tác cho ngôi nhà của mình.',
];

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const post = SOFA_BLOG_POSTS.find((item) => item.id === id);

  if (!post) {
    return (
      <>
        <Helmet><title>Không tìm thấy bài viết - Casa Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy bài viết</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href={paths.sofaBlog} variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại blog
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  const related = SOFA_BLOG_POSTS.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title} - Casa Sofa`}</title>
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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${post.image})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>{post.category}</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 44 }, lineHeight: 1.2 }}>
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}>
                  {post.title}
                </Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72) }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
                  <Typography variant="caption">{post.author}</Typography>
                </Stack>
                <Typography variant="caption">· {post.date} · {post.readTime} đọc</Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Body */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            {BODY.map((para, i) => (
              <Typography key={i} variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {para}
              </Typography>
            ))}
          </Stack>

          {/* Author box */}
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mt: 6, p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
            <Divider />
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
              <Stack>
                <Typography variant="subtitle1">{post.author}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chuyên gia nội thất tại Casa Sofa</Typography>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
        </Container>
      </Box>

      {/* Related */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bài viết liên quan</Typography>
            <Typography variant="h2">Tiếp tục đọc</Typography>
          </Stack>
          <Grid container spacing={3}>
            {related.map((item) => (
              <Grid key={item.id} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={item.image} alt={item.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 3 }}>
                    <Typography variant="overline" sx={{ color: 'primary.main' }}>{item.category}</Typography>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.excerpt}</Typography>
                    <Button component={RouterLink} href={`/blog/${item.id}`} size="small" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Bạn thích bài viết này?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt lịch tư vấn để chuyên gia Casa Sofa hỗ trợ bạn trực tiếp.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch tư vấn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
