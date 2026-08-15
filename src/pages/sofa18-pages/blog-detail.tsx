import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_BLOG_POSTS } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Card, Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA18_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA18_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa18 Blog</title></Helmet>
      <Sofa18PageHero overline="BLOG" title={<span>{post.title.toUpperCase()}</span>} subtitle={post.excerpt} image={post.image} />

      <Sofa18Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', borderRadius: 3 }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA18_COLORS.clay, color: 'common.white', fontWeight: 'fontWeightMedium' }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.ink }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: SOFA18_COLORS.inkSoft }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: varAlpha(SOFA18_COLORS.clay, 0.15) }} />
              <Typography variant="body1" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA18_COLORS.clay, 0.15), color: SOFA18_COLORS.clayDeep, fontWeight: 'fontWeightMedium', borderRadius: 1 }} />
              <Divider sx={{ borderColor: varAlpha(SOFA18_COLORS.clay, 0.15) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Sofa18Card key={i} accent={[SOFA18_COLORS.clay, SOFA18_COLORS.sage, SOFA18_COLORS.rust][i % 3]}>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: [SOFA18_COLORS.clay, SOFA18_COLORS.sage, SOFA18_COLORS.rust][i % 3], color: 'common.white', fontWeight: 'fontWeightMedium' }}>{i + 1}</Avatar>
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{c}</Typography>
                    </Stack>
                  </Sofa18Card>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 2, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA18_COLORS.clay, '&:hover': { bgcolor: SOFA18_COLORS.clayDeep } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.clayDeep }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA18_COLORS.clay, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
