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

import { SOFA10_COLORS, SOFA10_PRODUCTS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Products({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA10_COLORS.paper, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
              Products · 作品
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              Mỗi sofa,{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.wood }}>
                một sự tĩnh
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA10_PRODUCTS.map((product, index) => (
            <Grid key={product.name} xs={12} sm={6} md={4}>
              <Card
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                sx={{
                  height: 1,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '4px',
                  bgcolor: 'common.white',
                  border: `1px solid ${varAlpha(SOFA10_COLORS.stoneLight, 0.3)}`,
                  boxShadow: 'none',
                  transition: (theme) => theme.transitions.create(['box-shadow', 'border-color'], { duration: 400 }),
                  '&:hover': {
                    borderColor: SOFA10_COLORS.wood,
                    boxShadow: (theme) => theme.customShadows.z4,
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
                      transition: (theme) => theme.transitions.create('transform', { duration: 800 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.06)' },
                    }}
                  />
                  {product.badge !== 'Limited' && (
                    <Label
                      sx={{
                        top: 16,
                        left: 16,
                        position: 'absolute',
                        borderRadius: 1,
                        bgcolor: varAlpha(SOFA10_COLORS.charcoal, 0.85),
                        color: 'common.white',
                        fontWeight: 'fontWeightLight',
                        textTransform: 'none',
                        letterSpacing: 1,
                        px: 1.5,
                      }}
                    >
                      {product.badge}
                    </Label>
                  )}
                </Box>

                <Stack spacing={2} sx={{ p: 3.5, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, lineHeight: 1.2, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', flex: 1, color: SOFA10_COLORS.ink, letterSpacing: 0.3 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>
                    {product.material}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={product.rating} readOnly size="small" precision={0.1} sx={{ color: SOFA10_COLORS.wood }} />
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      ({product.reviews})
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.75}>
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          bgcolor: color,
                          border: `1px solid ${varAlpha(SOFA10_COLORS.stoneLight, 0.4)}`,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightNormal' }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through', fontWeight: 'fontWeightLight' }}>
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    size="medium"
                    variant="outlined"
                    startIcon={<Iconify icon="solar:cart-large-2-linear" />}
                    sx={{
                      borderRadius: 1,
                      borderColor: varAlpha(SOFA10_COLORS.charcoal, 0.2),
                      color: SOFA10_COLORS.charcoal,
                      fontWeight: 'fontWeightLight',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      '&:hover': { borderColor: SOFA10_COLORS.charcoal, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white' },
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
