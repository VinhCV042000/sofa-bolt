import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS, SOFA13_IMAGES, SOFA13_MATERIAL_SWATCHES } from './sofa13-data';
import { useSofa13Content } from './sofa13-i18n';

// ----------------------------------------------------------------------

export function Sofa13Materials({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();
  const [active, setActive] = useState(0);
  const material = content.materials.items[active];
  const swatch = SOFA13_MATERIAL_SWATCHES[active];

  return (
    <Box
      component="section"
      id="materials"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.noirDeep, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3 }}
          >
            {content.materials.overline}
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 30, md: 46 },
              lineHeight: 1.15,
              letterSpacing: 1,
              color: SOFA13_COLORS.ivory,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            {content.materials.title}
          </Typography>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.62), lineHeight: 1.8 }}
          >
            {content.materials.description}
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
          <Stack spacing={1.5} sx={{ flex: 1 }}>
            {content.materials.items.map((item, index) => (
              <Stack
                key={item.name}
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                direction="row"
                alignItems="center"
                spacing={2}
                onClick={() => setActive(index)}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  transition: 'all .3s',
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, active === index ? 0.6 : 0.16)}`,
                  bgcolor: active === index ? sofa13Alpha(SOFA13_COLORS.gold, 0.08) : 'transparent',
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    bgcolor: SOFA13_MATERIAL_SWATCHES[index],
                    transform: 'rotate(45deg)',
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ color: SOFA13_COLORS.ivory }}>
                    {item.name}
                  </Typography>
                </Box>
                <Iconify
                  icon="solar:arrow-right-linear"
                  width={20}
                  sx={{
                    color: SOFA13_COLORS.gold,
                    opacity: active === index ? 1 : 0.3,
                  }}
                />
              </Stack>
            ))}
          </Stack>

          <Box sx={{ flex: 1.2, width: 1 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.05),
                border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.24)}`,
              }}
            >
              <Box
                sx={{
                  height: 220,
                  overflow: 'hidden',
                  position: 'relative',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  alt={material.name}
                  src={SOFA13_IMAGES.cat1}
                  sx={{ width: 1, height: 1, objectFit: 'cover', display: 'block' }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    bgcolor: sofa13Alpha(swatch, 0.55),
                    mixBlendMode: 'multiply',
                    transition: 'background-color .4s',
                  }}
                />
              </Box>

              <Typography variant="h5" sx={{ color: SOFA13_COLORS.ivory, mb: 1.5, letterSpacing: 0.5 }}>
                {material.name}
              </Typography>
              <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.68), lineHeight: 1.9, mb: 3 }}>
                {material.detail}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {material.specs.map((spec) => (
                  <Stack
                    key={spec}
                    direction="row"
                    alignItems="center"
                    spacing={0.75}
                    sx={{
                      px: 1.75,
                      py: 0.75,
                      border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
                    }}
                  >
                    <Iconify icon="solar:check-circle-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                    <Typography variant="caption" sx={{ color: SOFA13_COLORS.ivory }}>
                      {spec}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
