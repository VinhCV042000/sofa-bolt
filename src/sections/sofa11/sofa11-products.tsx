import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';


import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_PRODUCTS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Products({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="products"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.voidDeep, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'flex-end' }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          <Stack spacing={1.5}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: SOFA11_COLORS.cyan, letterSpacing: 3 }}>
                Sản phẩm nổi bật
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                variant="h2"
                sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
              >
                Ngồi thử{' '}
                <Box component="span" sx={{ color: SOFA11_COLORS.lime }}>
                  tương lai
                </Box>
              </Typography>
            </Box>
          </Stack>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button
              component="a"
              href="#gallery"
              sx={{
                px: 3,
                py: 1.25,
                borderRadius: 99,
                fontWeight: 800,
                color: SOFA11_COLORS.cream,
                border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.3)}`,
                '&:hover': { borderColor: SOFA11_COLORS.lime, color: SOFA11_COLORS.lime },
              }}
            >
              Xem tất cả
            </Button>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA11_PRODUCTS.map((product) => (
            <Grid key={product.name} xs={12} sm={6} md={4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{
                  height: 1,
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: SOFA11_COLORS.grape,
                  border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.12)}`,
                  transition: 'all .3s',
                  '&:hover': {
                    borderColor: product.accent,
                    boxShadow: `0 18px 50px ${sofa11Alpha(product.accent, 0.35)}`,
                    transform: 'translateY(-6px)',
                  },
                  '&:hover img': { transform: 'scale(1.08)' },
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
                      transition: 'transform .6s',
                    }}
                  />
                  <Box
                    sx={{
                      top: 14,
                      left: 14,
                      px: 1.5,
                      py: 0.5,
                      position: 'absolute',
                      borderRadius: 99,
                      fontSize: 12,
                      fontWeight: 900,
                      letterSpacing: 1,
                      color: SOFA11_COLORS.void,
                      bgcolor: product.accent,
                    }}
                  >
                    {product.badge}
                  </Box>
                </Box>

                <Stack spacing={1.25} sx={{ p: 2.5 }}>
                  <Typography variant="caption" sx={{ color: product.accent, fontWeight: 800, letterSpacing: 1 }}>
                    {product.category}
                  </Typography>

                  <Typography variant="h6" sx={{ color: SOFA11_COLORS.cream, fontWeight: 900 }}>
                    {product.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.55) }}>
                    {product.material}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Iconify icon="solar:star-bold" width={16} sx={{ color: SOFA11_COLORS.tangerine }} />
                    <Typography variant="caption" sx={{ color: SOFA11_COLORS.cream, fontWeight: 700 }}>
                      {product.rating}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.45) }}>
                      ({product.reviews} đánh giá)
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
                          border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.3)}`,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" alignItems="baseline" spacing={1} sx={{ pt: 0.5 }}>
                    <Typography variant="h6" sx={{ color: product.accent, fontWeight: 900 }}>
                      {fCurrency(product.price)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: sofa11Alpha(SOFA11_COLORS.cream, 0.4),
                        textDecoration: 'line-through',
                      }}
                    >
                      {fCurrency(product.oldPrice)}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
