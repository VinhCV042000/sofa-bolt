import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS, SOFA13_IMAGES } from './sofa13-data';
import { useSofa13Content } from './sofa13-i18n';

// ----------------------------------------------------------------------

export function Sofa13Story({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="story"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.charcoal, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Box sx={{ flex: 1, position: 'relative', width: 1 }}>
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inLeft}
              alt="Atelier art deco"
              src={SOFA13_IMAGES.story1}
              sx={{
                width: 1,
                height: { xs: 320, md: 520 },
                objectFit: 'cover',
                border: `2px solid ${SOFA13_COLORS.gold}`,
                p: '8px',
                boxSizing: 'border-box',
              }}
            />
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inUp}
              alt="Détail dorure"
              src={SOFA13_IMAGES.story2}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                insetInlineEnd: -40,
                bottom: -40,
                width: 200,
                height: 240,
                objectFit: 'cover',
                border: `4px solid ${SOFA13_COLORS.noir}`,
                outline: `1px solid ${SOFA13_COLORS.gold}`,
              }}
            />
          </Box>

          <Stack spacing={4} sx={{ flex: 1 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                variant="overline"
                sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3, display: 'block', mb: 2 }}
              >
                {content.story.overline}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 30, md: 44 },
                  lineHeight: 1.2,
                  letterSpacing: 1,
                  color: SOFA13_COLORS.ivory,
                  fontFamily: (t) => t.typography.fontSecondaryFamily,
                }}
              >
                {content.story.title}
              </Typography>
            </Box>

            <Stack spacing={0}>
              {content.story.items.map((item, index) => (
                <Stack
                  key={item.title}
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  direction="row"
                  spacing={3}
                  sx={{
                    py: 3,
                    borderTop: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.24)}`,
                    ...(index === content.story.items.length - 1 && {
                      borderBottom: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.24)}`,
                    }),
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      minWidth: 44,
                      color: SOFA13_COLORS.gold,
                      fontFamily: (t) => t.typography.fontSecondaryFamily,
                    }}
                  >
                    0{index + 1}
                  </Typography>
                  <Box>
                    <Typography variant="h6" sx={{ color: SOFA13_COLORS.ivory, mb: 0.75 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.68), lineHeight: 1.8 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
