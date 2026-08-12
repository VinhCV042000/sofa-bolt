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
import { sofa13Alpha, SOFA13_COLORS, SOFA13_TESTIMONIAL_ACCENTS } from './sofa13-data';

// ----------------------------------------------------------------------

export function Sofa13Testimonials({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.noirDeep, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3 }}
          >
            {content.testimonials.overline}
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
            {content.testimonials.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.testimonials.items.map((item, index) => {
            const accent = SOFA13_TESTIMONIAL_ACCENTS[index];
            return (
              <Grid key={item.name} xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: index * 0.08 }}
                  spacing={2.5}
                  sx={{
                    p: 4,
                    height: 1,
                    bgcolor: SOFA13_COLORS.charcoal,
                    borderTop: `3px solid ${accent}`,
                    border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.18)}`,
                    borderTopColor: accent,
                    borderTopWidth: 3,
                  }}
                >
                  <Iconify
                    icon="solar:quote-up-square-bold"
                    width={32}
                    sx={{ color: sofa13Alpha(accent, 0.85) }}
                  />
                  <Typography
                    sx={{
                      flexGrow: 1,
                      lineHeight: 1.9,
                      fontStyle: 'italic',
                      color: sofa13Alpha(SOFA13_COLORS.ivory, 0.85),
                    }}
                  >
                    “{item.quote}”
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        transform: 'rotate(45deg)',
                        bgcolor: sofa13Alpha(accent, 0.2),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ transform: 'rotate(-45deg)', color: accent, fontWeight: 700 }}>
                        {item.name.charAt(0)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: SOFA13_COLORS.ivory }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.55) }}>
                        {item.role}
                      </Typography>
                    </Box>
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
