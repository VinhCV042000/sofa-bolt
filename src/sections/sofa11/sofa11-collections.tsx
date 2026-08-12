import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_COLLECTIONS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.void, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 720 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA11_COLORS.lime, letterSpacing: 3 }}>
              Bộ sưu tập
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h2"
              sx={{
                color: SOFA11_COLORS.cream,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: -1,
              }}
            >
              Bốn gu màu,{' '}
              <Box component="span" sx={{ color: SOFA11_COLORS.magenta }}>
                một thái độ
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), maxWidth: 560 }}>
              Mỗi dòng là một bảng màu riêng, một dáng ngồi riêng. Chọn dòng hợp năng lượng của bạn.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA11_COLLECTIONS.map((item, index) => (
            <Grid key={item.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  height: 1,
                  overflow: 'hidden',
                  borderRadius: 4,
                  cursor: 'pointer',
                  position: 'relative',
                  bgcolor: SOFA11_COLORS.grape,
                  border: `2px solid ${sofa11Alpha(item.accent, 0.5)}`,
                  transform: index % 2 ? 'rotate(1.2deg)' : 'rotate(-1.2deg)',
                  transition: 'all .3s',
                  '&:hover': {
                    transform: 'rotate(0deg) translateY(-8px)',
                    borderColor: item.accent,
                    boxShadow: `0 0 40px ${sofa11Alpha(item.accent, 0.45)}`,
                  },
                }}
              >
                <Box
                  component="img"
                  alt={item.title}
                  src={item.image}
                  sx={{ width: 1, height: 220, objectFit: 'cover' }}
                />

                <Stack spacing={1} sx={{ p: 2.5 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: item.accent, fontWeight: 800, letterSpacing: 1.5 }}
                  >
                    {item.count} · {item.tagline}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>
                    {item.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5} sx={{ pt: 1, color: item.accent }}>
                    <Typography variant="button" sx={{ fontWeight: 900 }}>
                      Khám phá
                    </Typography>
                    <Iconify icon="eva:arrow-forward-fill" width={18} />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
