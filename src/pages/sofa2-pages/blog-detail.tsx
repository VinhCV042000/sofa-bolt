import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_BLOG_POSTS } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const BODY = [
  'Nội thất không chỉ là vật dụng trong ngôi nhà mà còn là ngôn ngữ thể hiện cá tính và gu thẩm mỹ của gia chủ. Với hơn một thập kỷ chế tác sofa, LUXE Sofa luôn tâm niệm rằng mỗi không gian đều có câu chuyện riêng và chiếc sofa phải góp phần kể câu chuyện ấy một cách trọn vẹn nhất.',
  'Khi lựa chọn sofa, nhiều khách hàng thường chỉ chú ý đến vẻ bề ngoài mà bỏ qua những yếu tố kỹ thuật quan trọng như kết cấu khung, mật độ đệm hay nguồn gốc chất liệu. Một chiếc sofa đẹp mắt nhưng đệm xẹp sau vài tháng sẽ làm mất đi sự thoải mái vốn có. Vì vậy, chúng tôi khuyến cáo nên tìm hiểu kỹ thành phần trước khi quyết định.',
  'Tại LUXE Sofa, mọi sản phẩm đều trải qua hơn 200 giờ chế tác thủ công. Nghệ nhân của chúng tôi chọn lọc từng tấm da bò, từng thanh gỗ sồi và may từng đường kim bằng tay. Điều này không chỉ đảm bảo độ bền mà còn mang lại dấu ấn độc bản mà máy móc khó có thể sao chép.',
  'Bảo dưỡng đóng vai trò then chốt để duy trì vẻ đẹp và tuổi thọ của sofa. Với sofa da, nên lau sạch định kỳ bằng dung dịch chuyên dụng và tránh ánh nắng trực tiếp. Với sofa vải, giặt hút bụi sâu mỗi 6 tháng giúp kháng khuẩn và giữ màu sáng lâu dài.',
  'Cuối cùng, đừng ngần ngại nhờ chuyên gia tư vấn. Một chiếc sofa phù hợp không chỉ nâng tầm không gian sống mà còn đồng hành cùng gia đình bạn qua nhiều năm tháng. Hãy để LUXE Sofa giúp bạn tìm ra kiệt tác cho ngôi nhà của mình.',
];

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const post = SOFA2_BLOG_POSTS.find((item) => item.id === id);

  if (!post) {
    return (
      <>
        <Helmet><title>Không tìm thấy bài viết - LUXE Sofa</title></Helmet>
        <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Iconify icon="solar:question-circle-bold-duotone" width={80} sx={{ color: 'text.disabled' }} />
            <Typography variant="h3">Không tìm thấy bài viết</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị gỡ.</Typography>
            <Button component={RouterLink} href="/sofa2/blog" variant="contained" startIcon={<Iconify icon="eva:arrow-back-fill" />}>
              Quay lại blog
            </Button>
          </Stack>
        </Container>
      </>
    );
  }

  const related = SOFA2_BLOG_POSTS.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title} - LUXE Sofa`}</title>
      </Helmet>

      <Sofa2PageHero
        overline={post.categoryLabel}
        title={post.title}
        image={post.image}
      />

      {/* Meta bar */}
      <Sofa2Section py={{ xs: 4, md: 5 }}>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
            <Typography variant="subtitle2">{post.author}</Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>· {post.date} · {post.readTime} đọc</Typography>
        </Stack>
      </Sofa2Section>

      {/* Body */}
      <Sofa2Section py={{ xs: 4, md: 8 }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            {BODY.map((para, i) => (
              <Typography key={i} variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {para}
              </Typography>
            ))}
          </Stack>

          {/* Author info box */}
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mt: 6, p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
            <Divider />
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>{post.author.charAt(0)}</Avatar>
              <Stack>
                <Typography variant="subtitle1">{post.author}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chuyên gia nội thất tại LUXE Sofa</Typography>
              </Stack>
            </Stack>
            <Divider />
          </Stack>

          {/* Comments placeholder */}
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ mt: 6 }}>
            <Typography variant="h5">Bình luận</Typography>
            <Stack spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04), textAlign: 'center' }}>
              <Iconify icon="solar:chat-square-bold-duotone" width={40} sx={{ color: 'text.disabled', mx: 'auto' }} />
              <Typography sx={{ color: 'text.secondary' }}>Hệ thống bình luận đang được cập nhật. Vui lòng quay lại sau.</Typography>
            </Stack>
          </Stack>

          {/* Social share */}
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
            <Typography variant="subtitle2">Chia sẻ:</Typography>
            {[
              { icon: 'eva:facebook-fill', label: 'Facebook', color: '#1877F2' },
              { icon: 'logos:youtube-icon', label: 'YouTube', color: '#FF0000' },
              { icon: 'skill-icons:instagram', label: 'Instagram', color: '#E4405F' },
            ].map((s) => (
              <Button key={s.label} variant="outlined" size="small" startIcon={<Iconify icon={s.icon} />} sx={{ color: s.color, borderColor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.24) }}>
                {s.label}
              </Button>
            ))}
          </Stack>
        </Container>
      </Sofa2Section>

      {/* Related */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Bài viết liên quan</Typography>
          <Typography variant="h2">Tiếp tục đọc</Typography>
        </Stack>
        <Grid container spacing={3}>
          {related.map((item) => (
            <Grid key={item.id} xs={12} sm={6} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={0} sx={{ height: 1, borderRadius: 2, bgcolor: 'background.paper', overflow: 'hidden', boxShadow: (t) => t.customShadows.card }}>
                <Box component="img" src={item.image} alt={item.title} sx={{ width: 1, aspectRatio: '16/10', objectFit: 'cover' }} />
                <Stack spacing={1} sx={{ p: 3 }}>
                  <Typography variant="overline" sx={{ color: 'primary.main' }}>{item.categoryLabel}</Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.excerpt}</Typography>
                  <Button component={RouterLink} href={`/sofa2/blog/${item.id}`} size="small" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>Đọc tiếp</Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>
    </>
  );
}
