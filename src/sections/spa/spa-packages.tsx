import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SPA_PACKAGES } from './spa-data';

// ----------------------------------------------------------------------

export function SpaPackages({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="packages"
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
              Gói ưu đãi
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Chọn gói
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                phù hợp với bạn
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Các gói combo được thiết kế để tiết kiệm chi phí mà vẫn mang đến trải nghiệm spa trọn
              vẹn nhất.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3} alignItems="stretch">
          {SPA_PACKAGES.map((pkg) => (
            <Grid key={pkg.name} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={3}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  ...(pkg.popular && {
                    border: (theme) => `2px solid ${theme.vars.palette.primary.main}`,
                    boxShadow: (theme) => theme.customShadows.z24,
                  }),
                }}
              >
                {pkg.popular && (
                  <Label color="primary" sx={{ position: 'absolute', top: 16, right: 16 }}>
                    Phổ biến
                  </Label>
                )}

                <Stack spacing={1}>
                  <Typography variant="h5">{pkg.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {pkg.caption}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="baseline" spacing={0.5}>
                  <Typography variant="h3" color="primary.main">
                    {fCurrency(pkg.price)}
                  </Typography>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack spacing={1.5} sx={{ flex: 1 }}>
                  {pkg.features.map((feature) => (
                    <Stack key={feature} direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon="eva:checkmark-circle-2-fill" width={20} sx={{ color: 'primary.main' }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  component="a"
                  href="#booking"
                  fullWidth
                  size="large"
                  variant={pkg.popular ? 'contained' : 'outlined'}
                  color="primary"
                >
                  Chọn gói này
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
