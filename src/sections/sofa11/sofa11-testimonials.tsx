import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA11_COLORS, SOFA11_TESTIMONIALS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Testimonials({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.grape, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 620, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA11_COLORS.magenta, letterSpacing: 3 }}>
              Khách nói gì
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h2"
              sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
            >
              Không ai hối hận{' '}
              <Box component="span" sx={{ color: SOFA11_COLORS.cyan }}>
                vì chọn màu
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA11_TESTIMONIALS.map((item, index) => (
            <Grid key={item.name} xs={12} sm={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: 4,
                  bgcolor: SOFA11_COLORS.void,
                  border: `2px solid ${varAlpha(item.accent, 0.4)}`,
                  transform: index % 2 ? 'rotate(0.8deg)' : 'rotate(-0.8deg)',
                  transition: 'all .3s',
                  '&:hover': {
                    transform: 'rotate(0)',
                    boxShadow: `0 0 40px ${varAlpha(item.accent, 0.3)}`,
                  },
                }}
              >
                <Stack direction="row" spacing={0.25}>
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Iconify
                      key={starIndex}
                      icon="solar:star-bold"
                      width={18}
                      sx={{ color: item.accent }}
                    />
                  ))}
                </Stack>

                <Typography sx={{ color: varAlpha(SOFA11_COLORS.cream, 0.8), lineHeight: 1.9 }}>
                  “{item.content}”
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ pt: 1 }}>
                  <Avatar src={item.avatar} alt={item.name} sx={{ width: 44, height: 44 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA11_COLORS.cream, fontWeight: 900 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: varAlpha(SOFA11_COLORS.cream, 0.5) }}>
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
