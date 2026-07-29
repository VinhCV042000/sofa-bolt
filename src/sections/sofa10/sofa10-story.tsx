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

import { SOFA10_COLORS, SOFA10_FEATURES, SOFA10_IMAGES } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Story({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA10_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={8} alignItems="center">
          <Grid xs={12} md={5}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
              }}
            >
              <Box
                component="img"
                alt="Story"
                src={SOFA10_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 440 }, objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                    Philosophy · 哲学
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    Vẻ đẹp chậm rãi{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.wood }}>
                      của thời gian
                    </Box>
                  </Typography>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 2.2, maxWidth: 460, fontWeight: 'fontWeightLight' }}>
                    Wabi-sabi không tìm sự hoàn hảo. Nó tìm vẻ đẹp trong vết nứt, vân gỗ, nếp nhăn
                    của linen. Mỗi chiếc sofa là một đối thoại giữa vật liệu, bàn tay, và thời gian —
                    càng dùng càng đẹp.
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={3}>
                {SOFA10_FEATURES.map((item, index) => (
                  <Grid key={item.title} xs={12} sm={6}>
                    <Box
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      transition={{ delay: index * 0.1 }}
                      sx={{
                        p: 3,
                        height: 1,
                        border: `1px solid ${varAlpha(SOFA10_COLORS.stoneLight, 0.3)}`,
                        borderRadius: '4px',
                      }}
                    >
                      <Stack spacing={2}>
                        <Iconify icon={item.icon} width={28} sx={{ color: SOFA10_COLORS.wood, opacity: 0.7 }} />
                        <Stack spacing={0.75}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.ink, letterSpacing: 0.3 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
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
