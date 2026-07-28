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

import { SOFA1_PRODUCTS } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Products({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack direction="row" alignItems="end" justifyContent="space-between" sx={{ mb: { xs: 5, md: 8 } }}>
          <Stack spacing={2}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Sản phẩm nổi bật
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h2">
                Sofa được{' '}
                <Box component="span" sx={{ opacity: 0.4 }}>
                  yêu thích nhất
                </Box>
              </Typography>
            </Box>
          </Stack>
          <Button
            component="a"
            href="#categories"
            variant="text"
            endIcon={<Iconify icon="eva:arrow-forward-fill" />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Xem tất cả
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {SOFA1_PRODUCTS.map((product, index) => (
            <Grid key={product.name} xs={12} sm={6} md={3}>
              <Card
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  height: 1,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
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
                      height: 220,
                      objectFit: 'cover',
                      transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.1)' },
                    }}
                  />
                  <Label
                    color={product.badge.includes('-') ? 'error' : 'primary'}
                    sx={{ top: 12, left: 12, position: 'absolute' }}
                  >
                    {product.badge}
                  </Label>
                  <Box
                    sx={{
                      top: 12,
                      right: 12,
                      width: 36,
                      height: 36,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => theme.customShadows.z8,
                      cursor: 'pointer',
                      position: 'absolute',
                      '&:hover': { color: 'error.main' },
                    }}
                  >
                    <Iconify icon="solar:heart-bold-duotone" width={18} />
                  </Box>
                </Box>

                <Stack spacing={1.5} sx={{ p: 2.5, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', lineHeight: 1.2 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', flex: 1 }}>
                    {product.name}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.75}>
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          bgcolor: color,
                          border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'fontWeightBold' }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    size="medium"
                    variant="soft"
                    color="primary"
                    startIcon={<Iconify icon="solar:cart-large-2-bold-duotone" />}
                  >
                    Thêm vào giỏ
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
