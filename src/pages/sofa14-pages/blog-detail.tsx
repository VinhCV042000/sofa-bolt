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
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_BLOG_POSTS } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Card, Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const post = SOFA14_PAGE_BLOG_POSTS.find((p) => p.slug === slug) || SOFA14_PAGE_BLOG_POSTS[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  return (
    <>
      <Helmet><title>{post.title} — Sofa14 Blog</title></Helmet>
      <Sofa14PageHero overline="BLOG" title={<span>{post.title.toUpperCase()}</span>} subtitle={post.excerpt} image={post.image} />

      <Sofa14Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={8}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '16/9', borderRadius: '32px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa14Alpha(SOFA14_COLORS.coral, 0.4)}` }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: SOFA14_COLORS.coral, color: SOFA14_COLORS.ink, fontWeight: 800 }}>{post.author.charAt(0)}</Avatar>
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{post.author}</Typography>
                  <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 700 }}>{post.date} · {post.readTime} đọc</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ borderColor: sofa14Alpha(SOFA14_COLORS.ink, 0.08) }} />
              <Typography variant="body1" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9 }}>{post.content}</Typography>
              <Chip label={post.categoryLabel} size="small" sx={{ alignSelf: 'flex-start', bgcolor: sofa14Alpha(SOFA14_COLORS.coral, 0.2), color: SOFA14_COLORS.coralDeep, fontWeight: 800, borderRadius: 99 }} />
              <Divider sx={{ borderColor: sofa14Alpha(SOFA14_COLORS.ink, 0.08) }} />
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Bình luận ({comments.length})</Typography>
                {comments.map((c, i) => (
                  <Sofa14Card key={i} accent={[SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral][i % 3]}>
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral][i % 3], color: SOFA14_COLORS.ink, fontWeight: 800 }}>{i + 1}</Avatar>
                      <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>{c}</Typography>
                    </Stack>
                  </Sofa14Card>
                ))}
                <Stack spacing={2}>
                  <TextField fullWidth multiline rows={3} label="Viết bình luận" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={() => { if (comment.trim()) { setComments([...comments, comment]); setComment(''); } }} variant="contained" sx={{ alignSelf: 'flex-start', borderRadius: 99, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Gửi bình luận</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>Chia sẻ</Typography>
              <Stack direction="row" spacing={2}>
                <Iconify icon="solar:facebook-bold-duotone" width={32} sx={{ color: '#1877F2', cursor: 'pointer' }} />
                <Iconify icon="solar:gallery-bold-duotone" width={32} sx={{ color: '#E4405F', cursor: 'pointer' }} />
                <Iconify icon="solar:letter-bold-duotone" width={32} sx={{ color: SOFA14_COLORS.coralDeep, cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa14Section>
    </>
  );
}
