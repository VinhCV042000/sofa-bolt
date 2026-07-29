import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_TESTIMONIALS } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Testimonials({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'warning.dark' }}>
              Đánh giá
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Khách hàng{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                thượng lưu
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA5_TESTIMONIALS.map((testimonial, index) => (
            <Grid key={testimonial.name} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  height: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Iconify
                  icon="solar:medal-ribbon-star-bold-duotone"
                  width={32}
                  sx={{ color: 'warning.dark', mb: 2 }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flex: 1, mb: 3 }}>
                  {testimonial.content}
                </Typography>
                <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    component="img"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
