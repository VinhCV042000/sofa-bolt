import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_PRODUCTS } from './sofa12-data';

// ----------------------------------------------------------------------

const formatPrice = (value: number) => `${value.toLocaleString('vi-VN')}₫`;

export function Sofa12Products({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="products"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.cream, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3 }}
          >
            Sản phẩm nổi bật
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 32, md: 48 },
              fontWeight: 400,
              lineHeight: 1.1,
              color: SOFA12_COLORS.ink,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Những chiếc ghế được yêu nhất
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {SOFA12_PRODUCTS.map((product, index) => (
            <Grid key={product.name} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: (index % 3) * 0.08 }}
                spacing={2}
                sx={{
                  p: 2,
                  height: 1,
                  borderRadius: 3,
                  bgcolor: SOFA12_COLORS.white,
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.08)}`,
                  transition: 'transform .3s, box-shadow .3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 30px 50px -30px ${sofa12Alpha(SOFA12_COLORS.clayDeep, 0.6)}`,
                  },
                  '&:hover img': { transform: 'scale(1.05)' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '160px 160px 12px 12px',
                    bgcolor: SOFA12_COLORS.sand,
                  }}
                >
                  <Box
                    component="img"
                    alt={product.name}
                    src={product.image}
                    sx={{
                      width: 1,
                      height: 280,
                      display: 'block',
                      objectFit: 'cover',
                      transition: 'transform .6s ease',
                    }}
                  />
                  {product.badge && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 99,
                        fontSize: 12,
                        fontWeight: 700,
                        color: SOFA12_COLORS.cream,
                        bgcolor: SOFA12_COLORS.clay,
                      }}
                    >
                      {product.badge}
                    </Box>
                  )}
                </Box>

                <Stack spacing={0.75} sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ color: SOFA12_COLORS.ink }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.7) }}>
                    {product.fabric}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Iconify icon="solar:star-bold" width={16} sx={{ color: SOFA12_COLORS.ochre }} />
                    <Typography variant="caption" sx={{ color: SOFA12_COLORS.inkSoft }}>
                      {product.rating.toFixed(1)}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h6" sx={{ color: SOFA12_COLORS.clay }}>
                      {formatPrice(product.price)}
                    </Typography>
                    {product.oldPrice && (
                      <Typography
                        variant="caption"
                        sx={{
                          textDecoration: 'line-through',
                          color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.5),
                        }}
                      >
                        {formatPrice(product.oldPrice)}
                      </Typography>
                    )}
                  </Stack>

                  <Button
                    size="small"
                    sx={{
                      borderRadius: 99,
                      px: 2,
                      color: SOFA12_COLORS.cream,
                      bgcolor: SOFA12_COLORS.ink,
                      '&:hover': { bgcolor: SOFA12_COLORS.clayDeep },
                    }}
                  >
                    Đặt xem
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
