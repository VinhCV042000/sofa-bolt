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

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_PRODUCT_META } from './sofa14-data';

// ----------------------------------------------------------------------

const formatPrice = (value: number) => `$${(value / 23000).toFixed(0)}`;

export function Sofa14Products({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="products" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvas, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2 }}>
            {content.products.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 30, md: 46 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.ink }}>
            {content.products.title}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {content.products.items.map((product, index) => {
            const meta = SOFA14_PRODUCT_META[index];
            return (
              <Grid key={product.name} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: (index % 3) * 0.08 }}
                  whileHover={{ y: -8 }}
                  spacing={2}
                  sx={{
                    p: 2,
                    height: 1,
                    borderRadius: '36px',
                    bgcolor: SOFA14_COLORS.white,
                    boxShadow: `0 8px 0 -2px ${sofa14Alpha(meta.accent, 0.6)}, 0 20px 36px -24px ${sofa14Alpha(SOFA14_COLORS.ink, 0.35)}`,
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', bgcolor: sofa14Alpha(meta.accent, 0.15) }}>
                    <Box
                      component="img"
                      alt={product.name}
                      src={meta.image}
                      sx={{ width: 1, height: 260, display: 'block', objectFit: 'cover', transition: 'transform .6s ease' }}
                    />
                    {product.badge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          insetInlineStart: 14,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 99,
                          fontSize: 12,
                          fontWeight: 800,
                          color: SOFA14_COLORS.ink,
                          bgcolor: SOFA14_COLORS.butter,
                        }}
                      >
                        {product.badge}
                      </Box>
                    )}
                  </Box>

                  <Stack spacing={0.75} sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: SOFA14_COLORS.ink, fontWeight: 800 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.75) }}>
                      {product.fabric}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Iconify icon="solar:star-bold" width={16} sx={{ color: SOFA14_COLORS.butterDeep }} />
                      <Typography variant="caption" sx={{ color: SOFA14_COLORS.inkSoft }}>
                        {meta.rating.toFixed(1)} {content.footerBits.ratingSuffix}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="baseline" spacing={1}>
                      <Typography variant="h6" sx={{ color: SOFA14_COLORS.coralDeep, fontWeight: 800 }}>
                        {formatPrice(meta.price)}
                      </Typography>
                      {meta.oldPrice && (
                        <Typography variant="caption" sx={{ textDecoration: 'line-through', color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5) }}>
                          {formatPrice(meta.oldPrice)}
                        </Typography>
                      )}
                    </Stack>

                    <Button
                      size="small"
                      sx={{
                        borderRadius: 99,
                        px: 2,
                        fontWeight: 800,
                        color: SOFA14_COLORS.ink,
                        bgcolor: SOFA14_COLORS.mint,
                        '&:hover': { bgcolor: SOFA14_COLORS.mintDeep },
                      }}
                    >
                      {content.products.addLabel}
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
