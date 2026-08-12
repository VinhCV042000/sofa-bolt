import type { BoxProps } from '@mui/material/Box';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA1_IMAGES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Parallax({ sx, ...other }: BoxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 360, md: 520 },
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ y }} className="sofa1-parallax-bg">
        <Box
          sx={{
            inset: -60,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${SOFA1_IMAGES.parallax})`,
          }}
        />
      </m.div>
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: (theme) =>
            `linear-gradient(to right, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)})`,
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4 }}>
              Triết lý chế tác
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
              &ldquo;Một chiếc sofa tốt không chỉ để ngồi — nó là nơi gia đình quây quần, nơi câu
              chuyện được kể, nơi ký ức được lưu giữ.&rdquo;
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 'fontWeightBold' }}>
              — Nghệ nhân trưởng Nguyễn Văn Tài
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
