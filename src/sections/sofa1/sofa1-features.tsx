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

import { SOFA1_FEATURES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Features({ sx, ...other }: BoxProps) {
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
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Vì sao chọn Casa
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Chất lượng{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                trong từng chi tiết
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA1_FEATURES.map((feature, index) => (
            <Grid key={feature.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2.5}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.customShadows.card,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: (theme) => theme.transitions.create(['transform'], { duration: 300 }),
                  '&:hover': { transform: 'translateY(-8px)' },
                }}
              >
                <Box
                  sx={{
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    position: 'absolute',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.06),
                  }}
                />
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    borderRadius: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    position: 'relative',
                  }}
                >
                  <Iconify icon={feature.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ position: 'relative' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', position: 'relative' }}>
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
