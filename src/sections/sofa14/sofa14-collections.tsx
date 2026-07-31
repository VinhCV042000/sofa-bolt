import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS, SOFA14_COLLECTION_META } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Collections({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="collections" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvasDeep, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'flex-end' }} justifyContent="space-between" sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2, display: 'block', mb: 1.5 }}>
              {content.collections.kicker}
            </Typography>
            <Typography sx={{ fontSize: { xs: 30, md: 46 }, lineHeight: 1.1, fontWeight: 800, color: SOFA14_COLORS.ink }}>
              {content.collections.title}
            </Typography>
          </Box>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.85), maxWidth: 380, lineHeight: 1.8 }}>
            {content.collections.subtitle}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {content.collections.items.map((item, index) => {
            const meta = SOFA14_COLLECTION_META[index];
            return (
              <Grid key={item.title} xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  spacing={2.5}
                  sx={{
                    height: 1,
                    p: 2,
                    borderRadius: '40px',
                    bgcolor: SOFA14_COLORS.white,
                    cursor: 'pointer',
                    boxShadow: `0 10px 0 -3px ${sofa14Alpha(meta.accent, 0.7)}, 0 20px 40px -20px ${sofa14Alpha(SOFA14_COLORS.ink, 0.3)}`,
                    '&:hover img': { transform: 'scale(1.06)' },
                  }}
                >
                  <Box sx={{ overflow: 'hidden', borderRadius: '32px', bgcolor: SOFA14_COLORS.canvas }}>
                    <Box
                      component="img"
                      alt={item.title}
                      src={meta.image}
                      sx={{ width: 1, height: { xs: 280, md: 340 }, objectFit: 'cover', display: 'block', transition: 'transform .6s ease' }}
                    />
                  </Box>

                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ px: 1 }}>
                    <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: meta.accent }} />
                    <Typography variant="h5" sx={{ color: SOFA14_COLORS.ink, fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>
                      {meta.count} {content.collections.countSuffix}
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" sx={{ px: 1, color: meta.accent }}>
                    {item.tagline}
                  </Typography>

                  <Typography sx={{ px: 1, color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.85), lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1, color: SOFA14_COLORS.ink }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      {content.collections.viewLabel}
                    </Typography>
                    <Iconify icon="solar:arrow-right-linear" width={18} />
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
