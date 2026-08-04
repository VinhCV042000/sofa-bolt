import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_BLOG_POSTS } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chi tiết bài viết - Sofa Terra' };

export default function Page() {
  const { slug } = useParams();
  const post = SOFA3_BLOG_POSTS.find((p) => p.slug === slug) || SOFA3_BLOG_POSTS[0];
  const related = SOFA3_BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline={post.categoryLabel} title={post.title} subtitle={post.excerpt} image={post.image} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 8 }} component={MotionViewport}>
          <Grid xs={12} md={8}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'success.main' }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2">{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>

              <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, borderRadius: 3, aspectRatio: '16/9', objectFit: 'cover' }} />

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{post.content}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Sofa Terra cam kết sử dụng 100% vật liệu tự nhiên, từ linen hữu cơ đến gỗ tre bền vững.
                Mỗi chiếc sofa không chỉ đẹp mà còn thân thiện với môi trường, carbon âm, tái chế 100%.
              </Typography>

              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Chia sẻ</Typography>
                <Stack direction="row" spacing={2}>
                  {['solar:facebook-bold-duotone', 'solar:share-bold-duotone', 'solar:letter-bold-duotone'].map((icon) => (
                    <Box key={icon} component="button" sx={{ width: 44, height: 44, borderRadius: '50%', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => t.palette.mode === 'dark' ? 'background.paper' : 'grey.100', color: 'success.main', '&:hover': { bgcolor: (t) => t.palette.mode === 'dark' ? 'success.dark' : 'success.lighter' } }}>
                      <Iconify icon={icon} width={22} />
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Bình luận</Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: 'success.main' }}>M</Avatar>
                    <Stack spacing={0.5} sx={{ flex: 1 }}>
                      <Typography variant="subtitle2">Mai Thị Hồng</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bài viết rất hữu ích! Mình đang cân nhắc mua sofa linen.</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="h6">Bài viết liên quan</Typography>
              {related.map((p, i) => (
                <Box key={p.id} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }}>
                  <Stack direction="row" spacing={2} sx={{ textDecoration: 'none' }}>
                    <Box component="img" src={p.image} alt={p.title} sx={{ width: 80, height: 80, borderRadius: 2, objectFit: 'cover', flexShrink: 0 }} />
                    <Stack spacing={0.5}>
                      <Typography variant="overline" sx={{ color: 'success.main' }}>{p.categoryLabel}</Typography>
                      <Typography variant="subtitle2">{p.title}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>{p.date}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
