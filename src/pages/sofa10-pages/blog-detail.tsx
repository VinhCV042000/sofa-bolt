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

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { SOFA10_PAGE_BLOG_POSTS } from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA10_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA10_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa10 Blog</title></Helmet>
      <Sofa10PageHero overline="BLOG" title={<><span>{post.title.toUpperCase()}</span></>} subtitle={post.excerpt} image={post.image} />
      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '16/9' }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA10_COLORS.wood }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA10_COLORS.wood, 0.08), color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight' }} />
              <Divider />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Stack key={i} direction="row" spacing={2} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                    <Avatar sx={{ bgcolor: SOFA10_COLORS.stone }}>K{i + 1}</Avatar>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{c}</Typography>
                  </Stack>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal' }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA10_COLORS.wood, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
