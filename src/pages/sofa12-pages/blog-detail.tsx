import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_BLOG_POSTS } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { slug } = useParams();
  const post = SOFA12_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA12_PAGE_BLOG_POSTS[0];

  return (
    <>
      <Helmet><title>{post.title} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline={post.categoryLabel} title={post.title} subtitle={`${post.author} · ${post.date} · ${post.readTime}`} image={post.image} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, borderRadius: 2, aspectRatio: '16/9', objectFit: 'cover' }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{post.content}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              TERRA ARCH — Sofa đất nung, vòm cong thủ công. Mỗi chiếc sofa là tác phẩm nghệ thuật
              với 18 công đoạn chế tác, từ uốn vòm đến bọc vải lanh thô.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
