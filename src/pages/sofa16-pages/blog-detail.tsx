import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { varAlpha } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16PageHero, Sofa16Section, Sofa16Card } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_BLOG_POSTS } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA16_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA16_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa16 Blog</title></Helmet>
      <Sofa16PageHero overline="BLOG" title={<><span>{post.title.toUpperCase()}</span></>} subtitle={post.excerpt} image={post.image} />

      <Sofa16Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', borderRadius: 3 }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA16_COLORS.terracotta, color: 'common.white', fontWeight: 'fontWeightMedium' }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: varAlpha(SOFA16_COLORS.terracotta, 0.15) }} />
              <Typography variant="body1" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.15), color: SOFA16_COLORS.terracottaDeep, fontWeight: 'fontWeightMedium', borderRadius: 1 }} />
              <Divider sx={{ borderColor: varAlpha(SOFA16_COLORS.terracotta, 0.15) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Sofa16Card key={i} accent={[SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.azure][i % 3]}>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.azure][i % 3], color: 'common.white', fontWeight: 'fontWeightMedium' }}>{i + 1}</Avatar>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{c}</Typography>
                    </Stack>
                  </Sofa16Card>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 2, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA16_COLORS.terracotta, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
