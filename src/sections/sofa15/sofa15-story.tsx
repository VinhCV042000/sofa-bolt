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

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES } from './sofa15-data';

// ----------------------------------------------------------------------

const STORY_ICONS = [
  'solar:music-note-bold-duotone',
  'solar:widget-bold-duotone',
  'solar:crown-bold-duotone',
];

export function Sofa15Story({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA15_COLORS.black,
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
              }}
            >
              {/* Gold border frame */}
              <Box sx={{ position: 'absolute', top: -12, left: -12, right: -12, bottom: -12, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`, zIndex: 0 }} />
              <Box
                component="img"
                alt="Heritage"
                src={SOFA15_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 440 }, objectFit: 'cover', position: 'relative', zIndex: 1 }}
              />
              {/* Est. badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 2,
                  px: 2,
                  py: 1,
                  bgcolor: SOFA15_COLORS.gold,
                  color: SOFA15_COLORS.black,
                  fontWeight: 'fontWeightMedium',
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                Est. 1925
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
                    <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                      {content.story.kicker}
                    </Typography>
                  </Stack>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    {content.story.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA15_COLORS.gold }}>
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
                        p: 3,
                        height: 1,
                        border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.15)}`,
                      }}
                    >
                      <Stack spacing={2}>
                        <Iconify icon={STORY_ICONS[index]} width={28} sx={{ color: SOFA15_COLORS.gold, opacity: 0.7 }} />
                        <Stack spacing={0.75}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', letterSpacing: 0.3 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
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
