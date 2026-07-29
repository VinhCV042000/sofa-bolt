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

import { SOFA7_COLORS, SOFA7_PRODUCTS } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Products({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              SẢN PHẨM
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase', letterSpacing: -1 }}>
              Chọn sofa,{' '}
              <Box component="span" sx={{ color: SOFA7_COLORS.electric }}>
                chọn cá tính
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA7_PRODUCTS.map((product, index) => (
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
                  borderRadius: 0,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(SOFA7_COLORS.concrete, 0.08)}`,
                  transition: (theme) => theme.transitions.create(['transform', 'border-color'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: SOFA7_COLORS.electric,
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
                      height: 260,
                      objectFit: 'cover',
                      transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.08)' },
                    }}
                  />
                  <Label
                    sx={{
                      top: 0,
                      left: 0,
                      position: 'absolute',
                      borderRadius: 0,
                      bgcolor: product.badge.includes('%') ? SOFA7_COLORS.red : SOFA7_COLORS.electric,
                      color: SOFA7_COLORS.ink,
                      fontWeight: 'fontWeightBold',
                      px: 1.5,
                    }}
                  >
                    {product.badge}
                  </Label>
                </Box>

                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled', lineHeight: 1.2, letterSpacing: 1, textTransform: 'uppercase' }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', flex: 1, textTransform: 'uppercase' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {product.material}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} sx={{ color: SOFA7_COLORS.electric }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.75}>
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 20,
                          height: 20,
                          bgcolor: color,
                          border: `2px solid ${varAlpha(SOFA7_COLORS.concrete, 0.1)}`,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" sx={{ color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    size="medium"
                    variant="contained"
                    startIcon={<Iconify icon="solar:cart-large-2-bold-duotone" />}
                    sx={{
                      borderRadius: 0,
                      bgcolor: SOFA7_COLORS.ink,
                      color: 'common.white',
                      textTransform: 'uppercase',
                      fontWeight: 'fontWeightBold',
                      '&:hover': { bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.ink },
                    }}
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
