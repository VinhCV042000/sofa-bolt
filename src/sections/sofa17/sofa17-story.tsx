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

import { useSofa17Content } from './sofa17-i18n';
import { SOFA17_COLORS, SOFA17_IMAGES } from './sofa17-data';

// ----------------------------------------------------------------------

const STORY_ICONS = [
  'solar:map-point-bold-duotone',
  'solar:water-bold-duotone',
  'solar:star-bold-duotone',
];

export function Sofa17Story({ sx, ...other }: BoxProps) {
  const content = useSofa17Content();

  return (
    <Box
      component="section"
      id="story"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA17_COLORS.tealDeep,
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
                borderRadius: 3,
              }}
            >
              <Box
                component="img"
                alt="Heritage"
                src={SOFA17_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 440 }, objectFit: 'cover' }}
              />
              {/* Saffron ornate frame */}
              <Box sx={{ position: 'absolute', top: -10, left: -10, right: -10, bottom: -10, border: `2px solid ${varAlpha(SOFA17_COLORS.saffron, 0.3)}`, borderRadius: 3, zIndex: -1 }} />
              {/* Est badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  px: 2.5,
                  py: 1.25,
                  bgcolor: SOFA17_COLORS.saffron,
                  color: SOFA17_COLORS.tealDeep,
                  borderRadius: 2,
                  fontWeight: 'fontWeightBold',
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                Marrakech · Est. 1958
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 36, height: 2, bgcolor: SOFA17_COLORS.saffron, borderRadius: 1 }} />
                    <Typography variant="overline" sx={{ color: SOFA17_COLORS.saffronLight, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                      {content.story.kicker}
                    </Typography>
                  </Stack>
                </Box>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Typography variant="h3" sx={{ color: SOFA17_COLORS.cream, fontWeight: 'fontWeightLight', letterSpacing: -0.3, lineHeight: 1.3 }}>
                    {content.story.title.split(' ').slice(0, -2).join(' ')}{' '}
                    <Box component="span" sx={{ fontStyle: 'italic', color: SOFA17_COLORS.saffron }}>
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
                        bgcolor: varAlpha(SOFA17_COLORS.teal, 0.3),
                        borderRadius: 3,
                        border: `1px solid ${varAlpha(SOFA17_COLORS.saffron, 0.15)}`,
                        transition: (theme) => theme.transitions.create('box-shadow', { duration: 400 }),
                        '&:hover': { boxShadow: `0 12px 32px -12px ${varAlpha(SOFA17_COLORS.saffron, 0.25)}` },
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            display: 'flex',
                            borderRadius: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: varAlpha(SOFA17_COLORS.saffron, 0.15),
                          }}
                        >
                          <Iconify icon={STORY_ICONS[index]} width={22} sx={{ color: SOFA17_COLORS.saffron }} />
                        </Box>
                        <Stack spacing={0.75}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.cream, letterSpacing: 0.3 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: varAlpha(SOFA17_COLORS.cream, 0.6), lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
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
