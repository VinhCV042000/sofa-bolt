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

import { SOFA4_FEATURES } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4Features({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Đặc điểm nổi bật
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Vì sao chọn{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                Sofa Pop
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA4_FEATURES.map((feature, index) => (
            <Grid key={feature.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  height: 1,
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    mx: 'auto',
                    mb: 3,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.12),
                  }}
                >
                  <Iconify icon={feature.icon} width={36} sx={{ color: 'warning.main' }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 'fontWeightBold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
