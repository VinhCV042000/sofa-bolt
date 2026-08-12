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

import { SOFA9_COLORS, SOFA9_IMAGES, SOFA9_FEATURES } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Story({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA9_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={5}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                border: `4px solid ${SOFA9_COLORS.pink}`,
                boxShadow: `10px 10px 0 ${SOFA9_COLORS.teal}`,
              }}
            >
              <Box
                component="img"
                alt="Story"
                src={SOFA9_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 460 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  px: 2,
                  py: 1,
                  bgcolor: SOFA9_COLORS.yellow,
                  color: SOFA9_COLORS.black,
                  fontWeight: 'fontWeightBold',
                  fontSize: 14,
                  borderRadius: 20,
                  border: `2px solid ${SOFA9_COLORS.black}`,
                }}
              >
                Est. 2019
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
                    CÂU CHUYỆN
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: 'common.white' }}>
                    Tại sao phải{' '}
                    <Box component="span" sx={{ color: SOFA9_COLORS.yellow }}>
                      nhàm chán?
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.72), lineHeight: 1.8, maxWidth: 480 }}>
                    Sofa Retro sinh ra từ tình yêu với thập niên 80. Memphis, pop art, disco — chúng
                    tôi tin rằng sofa không chỉ để ngồi, nó phải khiến bạn mỉm cười. Velvet màu neon,
                    họa tiết hình học, và nhiều niềm vui hơn.
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={2}>
                {SOFA9_FEATURES.map((item, index) => {
                  const color = [SOFA9_COLORS.pink, SOFA9_COLORS.teal, SOFA9_COLORS.yellow, SOFA9_COLORS.purple][index];
                  return (
                    <Grid key={item.title} xs={12} sm={6}>
                      <Box
                        component={m.div}
                        variants={varFade({ distance: 24 }).inUp}
                        transition={{ delay: index * 0.08 }}
                        sx={{
                          p: 3,
                          height: 1,
                          bgcolor: varAlpha('#FFFFFF', 0.05),
                          borderLeft: `4px solid ${color}`,
                          borderRadius: '12px',
                        }}
                      >
                        <Stack spacing={1.5}>
                          <Iconify icon={item.icon} width={32} sx={{ color }} />
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'common.white' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.6 }}>
                            {item.description}
                          </Typography>
                        </Stack>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
