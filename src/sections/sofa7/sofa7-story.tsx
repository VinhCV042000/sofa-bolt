import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS, SOFA7_IMAGES, SOFA7_FEATURES } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Story({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA7_COLORS.concreteLight,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
              }}
            >
              <Box
                component="img"
                alt="Story"
                src={SOFA7_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 460 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  px: 2,
                  py: 1,
                  bgcolor: SOFA7_COLORS.electric,
                  color: SOFA7_COLORS.ink,
                  fontWeight: 'fontWeightBold',
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                Est. 2015
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
                    CÂU CHUYỆN
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: 'common.white', textTransform: 'uppercase', letterSpacing: -0.5 }}>
                    Sinh ra từ{' '}
                    <Box component="span" sx={{ color: SOFA7_COLORS.electric }}>
                      đường phố
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.8, maxWidth: 480 }}>
                    Sofa Loft bắt đầu từ một xưởng nhỏ ở quận 4. Chúng tôi tin sofa không chỉ để ngồi —
                    nó là tuyên ngôn. Da thật, thép đen, velvet neon. Không quy tắc, không khuôn mẫu.
                    Chỉ有你 và vibe của bạn.
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={2}>
                {SOFA7_FEATURES.map((item, index) => (
                  <Grid key={item.title} xs={12} sm={6}>
                    <Box
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      transition={{ delay: index * 0.08 }}
                      sx={{
                        p: 3,
                        height: 1,
                        bgcolor: SOFA7_COLORS.ink,
                        borderLeft: `3px solid ${index % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan}`,
                      }}
                    >
                      <Stack spacing={1.5}>
                        <Iconify icon={item.icon} width={32} sx={{ color: index % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'common.white', textTransform: 'uppercase' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
