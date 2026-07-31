import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import {
  sofa14Alpha,
  SOFA14_COLORS,
  SOFA14_COMFORT_LEVELS,
  SOFA14_FABRIC_SWATCHES,
} from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Playground({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();
  const [comfortIndex, setComfortIndex] = useState(1);
  const [fabricIndex, setFabricIndex] = useState(0);

  const comfort = SOFA14_COMFORT_LEVELS[comfortIndex];
  const comfortText = content.playground.comforts[comfortIndex];
  const fabric = SOFA14_FABRIC_SWATCHES[fabricIndex];
  const fabricText = content.playground.fabrics[fabricIndex];

  return (
    <Box component="section" id="playground" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.ink, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.butter, letterSpacing: 2 }}>
            {content.playground.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 30, md: 46 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.canvas }}>
            {content.playground.title}
          </Typography>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.75), lineHeight: 1.8 }}>
            {content.playground.subtitle}
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
          <Stack spacing={4} sx={{ flex: 1 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.7), mb: 1.5 }}>
                {content.playground.swatchLabel}
              </Typography>
              <Stack direction="row" spacing={2}>
                {SOFA14_FABRIC_SWATCHES.map((sw, index) => (
                  <Box
                    key={sw.key}
                    component={m.button}
                    onClick={() => setFabricIndex(index)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.08 }}
                    sx={{
                      width: 52,
                      height: 52,
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '50%',
                      bgcolor: sw.hex,
                      outline: fabricIndex === index ? `3px solid ${SOFA14_COLORS.canvas}` : 'none',
                      outlineOffset: 3,
                    }}
                  />
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.8), mt: 1.5, fontWeight: 700 }}>
                {fabricText.name}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.7), mb: 1.5 }}>
                {content.playground.comfortLabel}
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap">
                {SOFA14_COMFORT_LEVELS.map((level, index) => (
                  <Box
                    key={level.key}
                    component={m.button}
                    onClick={() => setComfortIndex(index)}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      px: 2.5,
                      py: 1,
                      mb: 1,
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: 99,
                      fontWeight: 800,
                      fontSize: 14,
                      color: comfortIndex === index ? SOFA14_COLORS.ink : sofa14Alpha(SOFA14_COLORS.canvas, 0.85),
                      bgcolor: comfortIndex === index ? level.accent : sofa14Alpha(SOFA14_COLORS.canvas, 0.1),
                    }}
                  >
                    {content.playground.comforts[index].title}
                  </Box>
                ))}
              </Stack>
              <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.75), lineHeight: 1.8, mt: 1 }}>
                {comfortText.text}
              </Typography>

              <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.6), display: 'block', mt: 2 }}>
                {content.playground.firmnessLabel}: {comfort.firmness}%
              </Typography>
              <Box sx={{ height: 10, borderRadius: 99, bgcolor: sofa14Alpha(SOFA14_COLORS.canvas, 0.15), overflow: 'hidden', mt: 0.5 }}>
                <Box
                  component={m.div}
                  animate={{ width: `${comfort.firmness}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  sx={{ height: 1, bgcolor: comfort.accent }}
                />
              </Box>
            </Box>
          </Stack>

          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={2} alignItems="center">
              <Box
                component={m.div}
                animate={{
                  scale: [1, 1 + (100 - comfort.firmness) / 400, 1],
                  borderRadius: [
                    '48% 52% 60% 40% / 50% 45% 55% 50%',
                    '55% 45% 45% 55% / 45% 55% 45% 55%',
                    '48% 52% 60% 40% / 50% 45% 55% 50%',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                sx={{
                  width: { xs: 220, md: 280 },
                  height: { xs: 220, md: 280 },
                  bgcolor: fabric.hex,
                  boxShadow: `inset -20px -20px 40px ${sofa14Alpha(SOFA14_COLORS.ink, 0.15)}, inset 16px 16px 30px ${sofa14Alpha(SOFA14_COLORS.white, 0.5)}, 0 30px 50px -20px ${sofa14Alpha(SOFA14_COLORS.ink, 0.5)}`,
                }}
              />
              <Typography variant="h6" sx={{ color: SOFA14_COLORS.canvas, fontWeight: 800 }}>
                {content.playground.resultTitle}
              </Typography>
              <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.canvas, 0.65), textAlign: 'center', maxWidth: 280 }}>
                {content.playground.resultHint}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
