import type { BoxProps } from '@mui/material/Box';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA2_IMAGES } from './sofa2-data';

// ----------------------------------------------------------------------

export function Sofa2Banner({ sx, ...other }: BoxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 320, md: 440 },
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ x }} className="sofa2-banner-bg">
        <Box
          sx={{
            inset: -60,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${SOFA2_IMAGES.banner})`,
          }}
        />
      </m.div>
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: (theme) =>
            `linear-gradient(to right, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.48)})`,
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 600 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4 }}>
              Công nghệ đệm Đức
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h3"
              sx={{
                color: 'common.white',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                lineHeight: 1.3,
              }}
            >
              Memory foam giữ form sau 50,000 lần ngồi — êm ái không giới hạn
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: varAlpha('#FFFFFF', 0.64), maxWidth: 480, lineHeight: 1.7 }}>
              Lớp đệm công nghệ Đức ôm theo cơ thể, giảm áp lực cột sống và giữ nguyên form dáng sau
              hàng chục nghìn lần sử dụng.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
