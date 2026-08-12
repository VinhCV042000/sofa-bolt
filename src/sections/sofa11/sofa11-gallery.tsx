import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_GALLERY } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Gallery({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="gallery"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.void, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 640 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA11_COLORS.cyan, letterSpacing: 3 }}>
              Không gian thật
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h2"
              sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
            >
              Khách hàng đã{' '}
              <Box component="span" sx={{ color: SOFA11_COLORS.lime }}>
                bật màu
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          {SOFA11_GALLERY.map((item, index) => (
            <Grid key={item.caption} xs={12} sm={6} md={index % 3 === 0 ? 6 : 3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  height: { xs: 240, md: 300 },
                  border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.1)}`,
                  '&:hover img': { transform: 'scale(1.1)' },
                  '&:hover': { borderColor: SOFA11_COLORS.magenta },
                  transition: 'border-color .3s',
                }}
              >
                <Box
                  component="img"
                  alt={item.caption}
                  src={item.image}
                  sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform .7s' }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `linear-gradient(to top, ${sofa11Alpha(SOFA11_COLORS.voidDeep, 0.9)} 0%, transparent 60%)`,
                  }}
                />
                <Stack spacing={0.5} sx={{ p: 2, left: 0, bottom: 0, position: 'absolute' }}>
                  <Typography
                    variant="caption"
                    sx={{ color: SOFA11_COLORS.lime, fontWeight: 900, letterSpacing: 1.5 }}
                  >
                    {item.tag}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: SOFA11_COLORS.cream, fontWeight: 800 }}>
                    {item.caption}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
