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

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS, SOFA20_IMAGES } from './sofa20-data';

// ----------------------------------------------------------------------

const STORY_ICONS = [
  'solar:fire-bold-duotone',
  'solar:water-bold-duotone',
  'solar:settings-bold-duotone',
];

export function Sofa20Story({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA20_COLORS.espressoDeep,
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
                borderRadius: 0,
              }}
            >
              <Box
                component="img"
                alt="Foundry"
                src={SOFA20_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 440 }, objectFit: 'cover' }}
              />
              {/* Copper riveted frame */}
              <Box sx={{ position: 'absolute', top: -10, left: -10, right: -10, bottom: -10, border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.3)}`, borderRadius: 0, zIndex: -1 }} />
              {/* Est badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  px: 2.5,
                  py: 1.25,
                  bgcolor: SOFA20_COLORS.copper,
                  color: SOFA20_COLORS.espressoDeep,
                  borderRadius: 0,
                  fontWeight: 'fontWeightBold',
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  border: `2px solid ${SOFA20_COLORS.brass}`,
                }}
              >
                Manchester · Est. 1898
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 36, height: 3, bgcolor: SOFA20_COLORS.copper, borderRadius: 0 }} />
                    <Typography variant="overline" sx={{ color: SOFA20_COLORS.copperLight, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                      {content.story.kicker}
                    </Typography>
                  </Stack>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: SOFA20_COLORS.cream, fontWeight: 'fontWeightBold', letterSpacing: -0.3, lineHeight: 1.3, textTransform: 'uppercase' }}>
                    {content.story.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ color: SOFA20_COLORS.copper }}>
                      {content.story.title.split(' ').slice(-2).join(' ')}
                    </Box>
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={3}>
                {content.story.items.map((item, index) => (
                  <Grid key={item.title} xs={12} sm={6}>
                    <Box
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      transition={{ delay: index * 0.1 }}
                      sx={{
                        p: 3.5,
                        height: 1,
                        bgcolor: varAlpha(SOFA20_COLORS.espresso, 0.4),
                        borderRadius: 0,
                        border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.15)}`,
                        transition: (theme) => theme.transitions.create('box-shadow', { duration: 400 }),
                        '&:hover': { boxShadow: `0 12px 32px -12px ${varAlpha(SOFA20_COLORS.copper, 0.25)}` },
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            display: 'flex',
                            borderRadius: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: varAlpha(SOFA20_COLORS.copper, 0.15),
                          }}
                        >
                          <Iconify icon={STORY_ICONS[index]} width={22} sx={{ color: SOFA20_COLORS.copper }} />
                        </Box>
                        <Stack spacing={0.75}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA20_COLORS.cream, letterSpacing: 0.3, textTransform: 'uppercase' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: varAlpha(SOFA20_COLORS.cream, 0.6), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
                            {item.text}
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
