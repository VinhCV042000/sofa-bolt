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

import { SOFA6_COLORS, SOFA6_CRAFT, SOFA6_IMAGES } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Craft({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="craft"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA6_COLORS.cream,
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
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: (theme) => theme.customShadows.z16,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '28px',
                  border: `3px solid ${varAlpha(SOFA6_COLORS.terracotta, 0.2)}`,
                  pointerEvents: 'none',
                },
              }}
            >
              <Box
                component="img"
                alt="Craft"
                src={SOFA6_IMAGES.craft}
                sx={{ width: 1, height: { xs: 300, md: 460 }, objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: SOFA6_COLORS.clay, letterSpacing: 3 }}>
                    Chế tác thủ công
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: SOFA6_COLORS.ink }}>
                    Từ thiên nhiên,{' '}
                    <Box component="span" sx={{ color: SOFA6_COLORS.terracotta }}>
                      qua bàn tay nghệ nhân
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 480 }}>
                    Mỗi chiếc sofa sinh ra từ sự phối hợp của đất, cây, và con người. Không máy móc,
                    không hóa chất — chỉ có đôi bàn tay và trái tim của nghệ nhân Việt.
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={2.5}>
                {SOFA6_CRAFT.map((item, index) => (
                  <Grid key={item.title} xs={12} sm={6}>
                    <Box
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      transition={{ delay: index * 0.08 }}
                      sx={{
                        p: 3,
                        height: 1,
                        borderRadius: '20px',
                        bgcolor: SOFA6_COLORS.warmWhite,
                        border: (theme) => `1px solid ${varAlpha(SOFA6_COLORS.sand, 0.6)}`,
                        transition: (theme) => theme.transitions.create('box-shadow', { duration: 300 }),
                        '&:hover': { boxShadow: (theme) => theme.customShadows.z12 },
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
                            bgcolor: varAlpha(SOFA6_COLORS.sage, 0.16),
                          }}
                        >
                          <Iconify icon={item.icon} width={28} sx={{ color: SOFA6_COLORS.forest }} />
                        </Box>
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA6_COLORS.ink }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
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
