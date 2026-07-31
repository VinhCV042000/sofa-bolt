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

import { sofa13Alpha, SOFA13_COLORS, sofa13FormatPrice, SOFA13_PRODUCTS_META } from './sofa13-data';
import { useSofa13Content } from './sofa13-i18n';

// ----------------------------------------------------------------------

export function Sofa13Products({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="products"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.charcoal, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3 }}
          >
            {content.products.overline}
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 30, md: 46 },
              lineHeight: 1.15,
              letterSpacing: 1,
              color: SOFA13_COLORS.ivory,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            {content.products.title}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {content.products.items.map((product, index) => {
            const meta = SOFA13_PRODUCTS_META[index];
            const badge = meta.badgeKey ? content.products.badges[meta.badgeKey] : null;
            return (
              <Grid key={product.name} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: (index % 3) * 0.08 }}
                  spacing={2}
                  sx={{
                    p: 2,
                    height: 1,
                    bgcolor: SOFA13_COLORS.noir,
                    border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.22)}`,
                    transition: 'transform .3s, border-color .3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: SOFA13_COLORS.gold,
                    },
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: SOFA13_COLORS.charcoalSoft }}>
                    <Box
                      component="img"
                      alt={product.name}
                      src={meta.image}
                      sx={{
                        width: 1,
                        height: 260,
                        display: 'block',
                        objectFit: 'cover',
                        transition: 'transform .6s ease',
                      }}
                    />
                    {badge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          insetInlineStart: 16,
                          px: 1.5,
                          py: 0.5,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: 1,
                          color: SOFA13_COLORS.noir,
                          bgcolor: SOFA13_COLORS.gold,
                        }}
                      >
                        {badge}
                      </Box>
                    )}
                  </Box>

                  <Stack spacing={0.75} sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: SOFA13_COLORS.ivory }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6) }}>
                      {content.products.fabricLabel}: {product.fabric}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Iconify icon="solar:star-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>
                        {meta.rating.toFixed(1)}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="baseline" spacing={1}>
                      <Typography variant="h6" sx={{ color: SOFA13_COLORS.gold }}>
                        {sofa13FormatPrice(meta.price)}
                      </Typography>
                      {meta.oldPrice && (
                        <Typography
                          variant="caption"
                          sx={{
                            textDecoration: 'line-through',
                            color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4),
                          }}
                        >
                          {sofa13FormatPrice(meta.oldPrice)}
                        </Typography>
                      )}
                    </Stack>

                    <Button
                      size="small"
                      sx={{
                        borderRadius: 0,
                        px: 2,
                        color: SOFA13_COLORS.noir,
                        bgcolor: SOFA13_COLORS.gold,
                        '&:hover': { bgcolor: SOFA13_COLORS.goldPale },
                      }}
                    >
                      {content.products.ctaLabel}
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
