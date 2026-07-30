import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_TESTIMONIALS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Testimonials({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.cream, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3 }}
          >
            Khách hàng nói gì
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
            Ba năm, vẫn còn ấm
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {SOFA12_TESTIMONIALS.map((item, index) => (
            <Grid key={item.name} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2.5}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: 3,
                  bgcolor: SOFA12_COLORS.white,
                  borderTop: `4px solid ${item.accent}`,
                  border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.08)}`,
                  borderTopColor: item.accent,
                }}
              >
                <Iconify
                  icon="solar:quote-up-square-bold"
                  width={32}
                  sx={{ color: sofa12Alpha(item.accent, 0.8) }}
                />
                <Typography
                  sx={{
                    flexGrow: 1,
                    lineHeight: 1.9,
                    fontStyle: 'italic',
                    color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.9),
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '20px 20px 6px 6px',
                      bgcolor: sofa12Alpha(item.accent, 0.2),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.accent,
                      fontWeight: 700,
                    }}
                  >
                    {item.name.charAt(0)}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: SOFA12_COLORS.ink }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.6) }}>
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
