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

import { SOFA8_COLORS, SOFA8_FEATURES, SOFA8_IMAGES } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Story({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA8_COLORS.oceanDeep,
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
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: (theme) => theme.customShadows.z16,
              }}
            >
              <Box
                component="img"
                alt="Story"
                src={SOFA8_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 460 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  px: 2,
                  py: 1,
                  borderRadius: 20,
                  bgcolor: varAlpha(SOFA8_COLORS.cream, 0.9),
                  color: SOFA8_COLORS.oceanDeep,
                  fontWeight: 'fontWeightBold',
                  fontSize: 14,
                }}
              >
                Since 2018
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: SOFA8_COLORS.coralLight, letterSpacing: 3 }}>
                    Câu chuyện
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: 'common.white' }}>
                    Được cảm hứng từ{' '}
                    <Box component="span" sx={{ color: SOFA8_COLORS.sky }}>
                      sóng và gió
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: varAlpha('#FFFFFF', 0.72), lineHeight: 1.8, maxWidth: 480 }}>
                    Sofa Breeze ra đời từ tình yêu với biển cả. Mỗi mẫu sofa mang hơi thở của sóng,
                    màu của cát, và sự thanh bình của bầu trời. Linen thoáng, bouclé êm, gỗ sồi sáng —
                    tất cả vì một không gian sống thư giãn như kỳ nghỉ.
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={2}>
                {SOFA8_FEATURES.map((item, index) => (
                  <Grid key={item.title} xs={12} sm={6}>
                    <Box
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      transition={{ delay: index * 0.08 }}
                      sx={{
                        p: 3,
                        height: 1,
                        borderRadius: '20px',
                        bgcolor: varAlpha('#FFFFFF', 0.06),
                        border: `1px solid ${varAlpha('#FFFFFF', 0.1)}`,
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            display: 'flex',
                            borderRadius: '16px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: varAlpha(SOFA8_COLORS.sky, 0.15),
                          }}
                        >
                          <Iconify icon={item.icon} width={28} sx={{ color: SOFA8_COLORS.sky }} />
                        </Box>
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: 'common.white' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.6 }}>
                            {item.description}
                          </Typography>
                        </Stack>
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
