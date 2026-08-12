import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_IMAGES, SOFA13_COLORS, SOFA13_COLLECTION_ACCENTS } from './sofa13-data';

// ----------------------------------------------------------------------

const IMAGES = [SOFA13_IMAGES.cat1, SOFA13_IMAGES.cat2, SOFA13_IMAGES.cat3];

export function Sofa13Collections({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="collections"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.noir, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ md: 'flex-end' }}
          justifyContent="space-between"
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="overline"
              sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3, display: 'block', mb: 1.5 }}
            >
              {content.collections.overline}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 30, md: 46 },
                lineHeight: 1.15,
                letterSpacing: 1,
                color: SOFA13_COLORS.ivory,
                fontFamily: (t) => t.typography.fontSecondaryFamily,
              }}
            >
              {content.collections.title}
            </Typography>
          </Box>

          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.65), maxWidth: 380, lineHeight: 1.8 }}
          >
            {content.collections.description}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {content.collections.items.map((item, index) => {
            const accent = SOFA13_COLLECTION_ACCENTS[index];
            return (
              <Grid key={item.title} xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: index * 0.08 }}
                  spacing={2.5}
                  sx={{
                    height: 1,
                    cursor: 'pointer',
                    '&:hover .sofa13-frame img': { transform: 'scale(1.06)' },
                    '&:hover .sofa13-frame': { borderColor: accent },
                  }}
                >
                  <Box
                    className="sofa13-frame"
                    sx={{
                      overflow: 'hidden',
                      border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.4)}`,
                      transition: 'border-color .3s',
                      bgcolor: SOFA13_COLORS.charcoal,
                      p: '6px',
                    }}
                  >
                    <Box
                      component="img"
                      alt={item.title}
                      src={IMAGES[index]}
                      sx={{
                        width: 1,
                        height: { xs: 300, md: 380 },
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform .6s ease',
                      }}
                    />
                  </Box>

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box sx={{ width: 10, height: 10, transform: 'rotate(45deg)', bgcolor: accent }} />
                    <Typography variant="h5" sx={{ color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>
                      {item.count}
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" sx={{ color: accent, letterSpacing: 0.5 }}>
                    {item.tagline}
                  </Typography>

                  <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.68), lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={1} sx={{ color: SOFA13_COLORS.gold }}>
                    <Typography variant="subtitle2">{content.collections.viewCta}</Typography>
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
