import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_IMAGES, SOFA12_MATERIALS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Materials({ sx, ...other }: BoxProps) {
  const [active, setActive] = useState(0);
  const material = SOFA12_MATERIALS[active];

  return (
    <Box
      component="section"
      id="materials"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.ink, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.ochre, letterSpacing: 3 }}
          >
            Bàn chất liệu
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 32, md: 48 },
              fontWeight: 400,
              lineHeight: 1.1,
              color: SOFA12_COLORS.cream,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Chạm thử từng thớ vải
          </Typography>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa12Alpha(SOFA12_COLORS.sand, 0.7), lineHeight: 1.8 }}
          >
            Chọn một mã vải để xem đặc tính. Bộ swatch thật sẽ được gửi miễn phí tới nhà bạn.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
          <Stack spacing={1.5} sx={{ flex: 1 }}>
            {SOFA12_MATERIALS.map((item, index) => (
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
                  borderRadius: 2,
                  transition: 'all .3s',
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.sand, active === index ? 0.5 : 0.14)}`,
                  bgcolor: active === index ? sofa12Alpha(SOFA12_COLORS.sand, 0.08) : 'transparent',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    bgcolor: item.swatch,
                    borderRadius: '22px 22px 6px 6px',
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ color: SOFA12_COLORS.cream }}>
                    {item.name}
                  </Typography>
                </Box>
                <Iconify
                  icon="solar:arrow-right-linear"
                  width={20}
                  sx={{
                    color: SOFA12_COLORS.ochre,
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
                borderRadius: 3,
                bgcolor: sofa12Alpha(SOFA12_COLORS.sand, 0.06),
                border: `1px solid ${sofa12Alpha(SOFA12_COLORS.sand, 0.18)}`,
              }}
            >
              <Box
                sx={{
                  height: 220,
                  borderRadius: '140px 140px 12px 12px',
                  overflow: 'hidden',
                  position: 'relative',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  alt={material.name}
                  src={SOFA12_IMAGES.cat1}
                  sx={{ width: 1, height: 1, objectFit: 'cover', display: 'block' }}
                />
                <Box
                  sx={{
                    inset: 0,
                    position: 'absolute',
                    bgcolor: sofa12Alpha(material.swatch, 0.55),
                    mixBlendMode: 'multiply',
                    transition: 'background-color .4s',
                  }}
                />
              </Box>

              <Typography variant="h5" sx={{ color: SOFA12_COLORS.cream, mb: 1.5 }}>
                {material.name}
              </Typography>
              <Typography sx={{ color: sofa12Alpha(SOFA12_COLORS.sand, 0.78), lineHeight: 1.9, mb: 3 }}>
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
                      borderRadius: 99,
                      border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ochre, 0.5)}`,
                    }}
                  >
                    <Iconify icon="solar:check-circle-bold" width={16} sx={{ color: SOFA12_COLORS.ochre }} />
                    <Typography variant="caption" sx={{ color: SOFA12_COLORS.sand }}>
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
