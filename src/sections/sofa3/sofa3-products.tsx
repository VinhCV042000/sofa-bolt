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

import { SOFA3_PRODUCTS } from './sofa3-data';

// ----------------------------------------------------------------------

export function Sofa3Products({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.success.mainChannel, 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'success.main' }}>
              Tuyển chọn tự nhiên
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Sofa từ{' '}
              <Box component="span" sx={{ color: 'success.main' }}>
                vật liệu thật
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', fontSize: 17 }}>
              6 mẫu sofa với 6 loại vật liệu tự nhiên khác nhau. Mỗi chiếc là một lời tri ân thiên nhiên.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA3_PRODUCTS.map((product, index) => (
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
                    color={product.badge.includes('-') ? 'error' : product.badge === 'Eco' ? 'success' : 'primary'}
                    sx={{ top: 12, left: 12, position: 'absolute' }}
                  >
                    {product.badge}
                  </Label>
                </Box>

                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', lineHeight: 1.2 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', flex: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>
                    {product.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Iconify icon="solar:leaf-bold-duotone" width={16} sx={{ color: 'success.main' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {product.material}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" color="success.main" sx={{ fontWeight: 'fontWeightBold' }}>
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
                    color="success"
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
