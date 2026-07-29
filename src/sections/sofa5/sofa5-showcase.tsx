import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_SHOWCASE } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Showcase({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="showcase"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'warning.dark' }} />
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Không gian thượng lưu
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Sofa Royale trong{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                dinh thự
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={4}>
          {SOFA5_SHOWCASE.map((item, index) => (
            <Box
              key={item.title}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              transition={{ delay: index * 0.1 }}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                height: { xs: 300, md: 420 },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 1,
                  height: 1,
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: index % 2 === 0
                    ? 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, transparent 60%)'
                    : 'linear-gradient(270deg, rgba(0,0,0,0.8) 0%, transparent 60%)',
                }}
              />
              <Stack
                spacing={1}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: index % 2 === 0 ? 0 : 'auto',
                  right: index % 2 === 0 ? 'auto' : 0,
                  p: { xs: 3, md: 6 },
                  maxWidth: 400,
                  color: 'common.white',
                }}
              >
                <Typography variant="overline" sx={{ color: 'warning.light', letterSpacing: 3 }}>
                  Showcase
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: varAlpha('#FFFFFF', 0.7), lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
