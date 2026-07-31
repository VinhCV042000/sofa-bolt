import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_IMAGES } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Story({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="story" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvas, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Box sx={{ flex: 1, position: 'relative', width: 1 }}>
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inLeft}
              alt="Sofa Bloom workshop"
              src={SOFA14_IMAGES.story1}
              sx={{
                width: 1,
                height: { xs: 320, md: 500 },
                objectFit: 'cover',
                borderRadius: '48px',
                boxShadow: `0 30px 0 -12px ${sofa14Alpha(SOFA14_COLORS.mint, 0.5)}`,
              }}
            />
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inUp}
              alt="Fabric detail"
              src={SOFA14_IMAGES.story2}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                insetInlineEnd: -40,
                bottom: -40,
                width: 190,
                height: 220,
                objectFit: 'cover',
                borderRadius: '36px',
                border: `8px solid ${SOFA14_COLORS.canvas}`,
                boxShadow: `6px 6px 0 ${sofa14Alpha(SOFA14_COLORS.coral, 0.6)}`,
              }}
            />
          </Box>

          <Stack spacing={4} sx={{ flex: 1 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2, display: 'block', mb: 2 }}>
                {content.story.kicker}
              </Typography>
              <Typography sx={{ fontSize: { xs: 30, md: 44 }, lineHeight: 1.15, fontWeight: 800, color: SOFA14_COLORS.ink }}>
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
                    borderTop: `2px dashed ${sofa14Alpha(SOFA14_COLORS.ink, 0.15)}`,
                    ...(index === content.story.items.length - 1 && {
                      borderBottom: `2px dashed ${sofa14Alpha(SOFA14_COLORS.ink, 0.15)}`,
                    }),
                  }}
                >
                  <Typography sx={{ fontSize: 20, minWidth: 44, fontWeight: 800, color: SOFA14_COLORS.mintDeep }}>
                    0{index + 1}
                  </Typography>
                  <Box>
                    <Typography variant="h6" sx={{ color: SOFA14_COLORS.ink, mb: 0.75 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.85), lineHeight: 1.8 }}>
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
