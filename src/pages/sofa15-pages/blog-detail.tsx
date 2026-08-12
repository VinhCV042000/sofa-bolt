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

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_PAGE_BLOG_POSTS } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Card, Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA15_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA15_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa15 Blog</title></Helmet>
      <Sofa15PageHero overline="BLOG" title={<span>{post.title.toUpperCase()}</span>} subtitle={post.excerpt} image={post.image} />

      <Sofa15Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, fontWeight: 'fontWeightMedium' }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.1) }} />
              <Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: varAlpha(SOFA15_COLORS.gold, 0.15), color: SOFA15_COLORS.gold, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />
              <Divider sx={{ borderColor: varAlpha(SOFA15_COLORS.gold, 0.1) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Sofa15Card key={i} accent={[SOFA15_COLORS.gold, SOFA15_COLORS.emerald, SOFA15_COLORS.burgundy][i % 3]}>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: [SOFA15_COLORS.gold, SOFA15_COLORS.emerald, SOFA15_COLORS.burgundy][i % 3], color: SOFA15_COLORS.black, fontWeight: 'fontWeightMedium' }}>{i + 1}</Avatar>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>{c}</Typography>
                    </Stack>
                  </Sofa15Card>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 0, fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.black, bgcolor: SOFA15_COLORS.gold, border: `1px solid ${SOFA15_COLORS.gold}`, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA15_COLORS.gold }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA15_COLORS.gold, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}
