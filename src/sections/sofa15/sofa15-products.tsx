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

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS, SOFA15_IMAGES } from './sofa15-data';

// ----------------------------------------------------------------------

const PRODUCT_IMAGES = [
  SOFA15_IMAGES.prod1,
  SOFA15_IMAGES.prod2,
  SOFA15_IMAGES.prod3,
  SOFA15_IMAGES.prod4,
  SOFA15_IMAGES.prod5,
  SOFA15_IMAGES.prod6,
];

const PRODUCT_RATINGS = [4.9, 5.0, 4.8, 4.9, 5.0, 4.7];
const PRODUCT_REVIEWS = [124, 89, 76, 65, 91, 58];

export function Sofa15Products({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA15_COLORS.charcoal, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
              <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                {content.products.kicker}
              </Typography>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.products.title}
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {content.products.items.map((product, index) => (
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
                  borderRadius: 0,
                  bgcolor: SOFA15_COLORS.charcoalLight,
                  border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.15)}`,
                  boxShadow: 'none',
                  transition: (theme) => theme.transitions.create('border-color', { duration: 400 }),
                  '&:hover': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.4) },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    alt={product.name}
                    src={PRODUCT_IMAGES[index]}
                    sx={{
                      width: 1,
                      height: 280,
                      objectFit: 'cover',
                      transition: (theme) => theme.transitions.create('transform', { duration: 800 }),
                      '.MuiCard-root:hover &': { transform: 'scale(1.06)' },
                    }}
                  />
                  {product.badge && (
                    <Label
                      sx={{
                        top: 16,
                        left: 16,
                        position: 'absolute',
                        borderRadius: 0,
                        bgcolor: SOFA15_COLORS.gold,
                        color: SOFA15_COLORS.black,
                        fontWeight: 'fontWeightMedium',
                        textTransform: 'none',
                        letterSpacing: 1,
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      {product.badge}
                    </Label>
                  )}
                </Box>

                <Stack spacing={2} sx={{ p: 3.5, flex: 1 }}>
                  <Typography variant="overline" sx={{ color: varAlpha(SOFA15_COLORS.gold, 0.6), lineHeight: 1.2, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                    {product.fabric}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightLight', flex: 1, color: 'common.white', letterSpacing: 0.3 }}>
                    {product.name}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={PRODUCT_RATINGS[index]} readOnly size="small" precision={0.1} sx={{ color: SOFA15_COLORS.gold }} />
                    <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>
                      ({PRODUCT_REVIEWS[index]})
                    </Typography>
                  </Stack>
                  <Button
                    fullWidth
                    size="medium"
                    variant="outlined"
                    startIcon={<Iconify icon="solar:letter-bold-duotone" />}
                    sx={{
                      borderRadius: 0,
                      borderColor: varAlpha(SOFA15_COLORS.gold, 0.3),
                      color: SOFA15_COLORS.gold,
                      fontWeight: 'fontWeightLight',
                      textTransform: 'none',
                      letterSpacing: 0.5,
                      '&:hover': { borderColor: SOFA15_COLORS.gold, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.08) },
                    }}
                  >
                    {content.products.addLabel}
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
