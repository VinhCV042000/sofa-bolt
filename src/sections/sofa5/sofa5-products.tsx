import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_PRODUCTS } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Products({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.900',
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'warning.dark' }} />
              <Typography variant="overline" sx={{ color: 'warning.dark' }}>
                Sản phẩm
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white' }}>
              Tuyển chọn{' '}
              <Box component="span" sx={{ color: 'warning.main' }}>
                thượng lưu
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA5_PRODUCTS.map((product, index) => (
            <Grid key={product.name} xs={12} sm={6} md={4}>
              <Card
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                sx={{
                  height: 1,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  bgcolor: 'grey.800',
                  color: 'common.white',
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    alt={product.name}
                    src={product.image}
                    sx={{
                      width: 1,
                      height: 280,
                      objectFit: 'cover',
                      transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.1)' },
                    }}
                  />
                  <Label
                    color={product.badge.includes('-') ? 'error' : 'warning'}
                    sx={{ top: 12, left: 12, position: 'absolute' }}
                  >
                    {product.badge}
                  </Label>
                </Box>

                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'warning.light', lineHeight: 1.2 }}>
                    {product.collection}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', flex: 1, color: 'common.white' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), flex: 1 }}>
                    {product.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} />
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.5) }}>
                    {product.material}
                  </Typography>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.3), textDecoration: 'line-through' }}>
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    size="medium"
                    variant="outlined"
                    sx={{
                      color: 'warning.main',
                      borderColor: 'warning.dark',
                      '&:hover': {
                        borderColor: 'warning.main',
                        bgcolor: varAlpha('#FFD93D', 0.08),
                      },
                    }}
                    startIcon={<Iconify icon="solar:cart-large-2-bold-duotone" />}
                  >
                    Đặt mua
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
