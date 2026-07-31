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
import { sofa14Alpha, SOFA14_COLORS, SOFA14_TESTIMONIAL_ACCENTS } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Testimonials({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvas, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2 }}>
            {content.testimonials.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 30, md: 46 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.ink }}>
            {content.testimonials.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.testimonials.items.map((item, index) => {
            const accent = SOFA14_TESTIMONIAL_ACCENTS[index];
            return (
              <Grid key={item.name} xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 28 }).inUp}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  spacing={2.5}
                  sx={{
                    p: 4,
                    height: 1,
                    borderRadius: '36px',
                    bgcolor: sofa14Alpha(accent, 0.18),
                    border: `2px solid ${sofa14Alpha(accent, 0.4)}`,
                  }}
                >
                  <Iconify icon="solar:quote-up-square-bold" width={32} sx={{ color: accent === SOFA14_COLORS.mint ? SOFA14_COLORS.mintDeep : accent }} />
                  <Typography sx={{ flexGrow: 1, lineHeight: 1.9, fontStyle: 'italic', color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.95) }}>
                    “{item.quote}”
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        bgcolor: accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: SOFA14_COLORS.ink,
                        fontWeight: 800,
                      }}
                    >
                      {item.name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: SOFA14_COLORS.ink, fontWeight: 800 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>
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
