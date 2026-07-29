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

import { SOFA4_STEPS } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4Steps({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Quy trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              4 bước đến{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                sofa của bạn
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA4_STEPS.map((step, index) => (
            <Grid key={step.number} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  height: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontSize: 64,
                    fontWeight: 'fontWeightBold',
                    color: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.12),
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </Typography>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    mb: 3,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'warning.main',
                    color: 'common.white',
                  }}
                >
                  <Iconify icon={step.icon} width={30} />
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'fontWeightBold' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
