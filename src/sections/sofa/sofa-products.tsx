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

import { SOFA_PRODUCTS } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaProducts({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Sản phẩm nổi bật
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Sofa được
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                yêu thích nhất
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Những mẫu sofa bán chạy nhất tháng này — kết hợp giữa thiết kế đẹp mắt, chất liệu cao
              cấp và giá thành hợp lý.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA_PRODUCTS.map((product) => (
            <Grid key={product.name} xs={12} sm={6} md={4}>
              <Card
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  height: 1,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: (theme) =>
                    theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
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
                      height: 240,
                      objectFit: 'cover',
                      transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.08)' },
                    }}
                  />
                  <Label
                    color="primary"
                    sx={{
                      top: 16,
                      left: 16,
                      position: 'absolute',
                      textTransform: 'uppercase',
                    }}
                  >
                    {product.tag}
                  </Label>

                  <Box
                    sx={{
                      top: 16,
                      right: 16,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => theme.customShadows.z8,
                      cursor: 'pointer',
                      transition: (theme) => theme.transitions.create(['color', 'backgroundcolor']),
                      '&:hover': { color: 'error.main' },
                    }}
                  >
                    <Iconify icon="solar:heart-bold-duotone" width={20} />
                  </Box>
                </Box>

                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {product.category}
                  </Typography>

                  <Typography variant="h6" sx={{ flex: 1 }}>
                    {product.name}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      ({product.rating})
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          bgcolor: color,
                          border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 'fontWeightBold' }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.disabled', textDecoration: 'line-through' }}
                    >
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>

                  <Button
                    fullWidth
                    size="medium"
                    variant="contained"
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

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ mt: 5, textAlign: 'center' }}>
          <Button
            component="a"
            href="#collections"
            size="large"
            variant="outlined"
            color="primary"
            endIcon={<Iconify icon="eva:arrow-forward-fill" />}
          >
            Xem tất cả 80+ mẫu sofa
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
