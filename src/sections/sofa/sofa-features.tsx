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

import { SOFA_FEATURES } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaFeatures({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Vì sao chọn Casa Sofa
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Cam kết
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                chất lượng trọn đời
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA_FEATURES.map((feature) => (
            <Grid key={feature.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.customShadows.card,
                  transition: (theme) => theme.transitions.create(['transform'], { duration: 300 }),
                  '&:hover': { transform: 'translateY(-6px)' },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                    color: 'primary.main',
                  }}
                >
                  <Iconify icon={feature.icon} width={28} />
                </Box>

                <Typography variant="h6">{feature.title}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
