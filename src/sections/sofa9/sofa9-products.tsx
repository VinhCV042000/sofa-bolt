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

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA9_COLORS, SOFA9_PRODUCTS } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Products({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA9_COLORS.cream, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              SẢN PHẨM
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA9_COLORS.black }}>
              Chọn sofa,{' '}
              <Box component="span" sx={{ color: SOFA9_COLORS.teal }}>
                chọn tâm trạng
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA9_PRODUCTS.map((product, index) => (
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
                  borderRadius: '20px',
                  bgcolor: 'common.white',
                  border: `3px solid ${SOFA9_COLORS.black}`,
                  boxShadow: `6px 6px 0 ${SOFA9_COLORS.black}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 200 }),
                  '&:hover': { transform: 'translate(-3px, -3px)', boxShadow: `9px 9px 0 ${SOFA9_COLORS.black}` },
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
                      top: 12,
                      left: 12,
                      position: 'absolute',
                      borderRadius: 20,
                      bgcolor: index % 2 === 0 ? SOFA9_COLORS.pink : SOFA9_COLORS.teal,
                      color: 'common.white',
                      fontWeight: 'fontWeightBold',
                      border: `2px solid ${SOFA9_COLORS.black}`,
                    }}
                  >
                    {product.badge}
                  </Label>
                </Box>

                <Stack spacing={1.5} sx={{ p: 3, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: SOFA9_COLORS.purple, lineHeight: 1.2, letterSpacing: 1 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', flex: 1, color: SOFA9_COLORS.black }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {product.material}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} sx={{ color: SOFA9_COLORS.yellow }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.75}>
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 22,
                          height: 22,
                          bgcolor: color,
                          borderRadius: '50%',
                          border: `2px solid ${SOFA9_COLORS.black}`,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }}>
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
                      borderRadius: 20,
                      bgcolor: SOFA9_COLORS.black,
                      color: 'common.white',
                      fontWeight: 'fontWeightBold',
                      '&:hover': { bgcolor: SOFA9_COLORS.pink },
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
