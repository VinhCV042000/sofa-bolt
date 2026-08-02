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

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS, SOFA20_IMAGES } from './sofa20-data';

// ----------------------------------------------------------------------

const PRODUCT_IMAGES = [
  SOFA20_IMAGES.prod1,
  SOFA20_IMAGES.prod2,
  SOFA20_IMAGES.prod3,
  SOFA20_IMAGES.prod4,
  SOFA20_IMAGES.prod5,
  SOFA20_IMAGES.prod6,
];

const PRODUCT_RATINGS = [4.9, 4.8, 5.0, 4.7, 4.9, 4.8];
const PRODUCT_REVIEWS = [142, 98, 87, 76, 113, 64];

export function Sofa20Products({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA20_COLORS.cream, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 28, height: 3, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.5), borderRadius: 0 }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copper, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                {content.products.kicker}
              </Typography>
              <Box sx={{ width: 28, height: 3, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.5), borderRadius: 0 }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA20_COLORS.ink, fontWeight: 'fontWeightBold', letterSpacing: -0.5, textTransform: 'uppercase' }}>
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
                  bgcolor: 'common.white',
                  border: `2px solid ${varAlpha(SOFA20_COLORS.espresso, 0.1)}`,
                  boxShadow: 'none',
                  transition: (theme) => theme.transitions.create('box-shadow', { duration: 400 }),
                  '&:hover': { boxShadow: `0 16px 40px -16px ${varAlpha(SOFA20_COLORS.copper, 0.3)}` },
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
                        bgcolor: SOFA20_COLORS.burntOrange,
                        color: 'common.white',
                        fontWeight: 'fontWeightBold',
                        textTransform: 'uppercase',
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
                  <Typography variant="overline" sx={{ color: SOFA20_COLORS.copperDeep, lineHeight: 1.2, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                    {product.fabric}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', flex: 1, color: SOFA20_COLORS.ink, letterSpacing: 0.3, textTransform: 'uppercase' }}>
                    {product.name}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Rating value={PRODUCT_RATINGS[index]} readOnly size="small" precision={0.1} sx={{ color: SOFA20_COLORS.copper }} />
                    <Typography variant="caption" sx={{ color: SOFA20_COLORS.inkSoft }}>
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
                      borderColor: SOFA20_COLORS.espresso,
                      color: SOFA20_COLORS.espresso,
                      fontWeight: 'fontWeightBold',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      '&:hover': { borderColor: SOFA20_COLORS.espresso, bgcolor: varAlpha(SOFA20_COLORS.espresso, 0.06) },
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
