import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from './sofa13-data';
import { useSofa13Content } from './sofa13-i18n';

// ----------------------------------------------------------------------

export function Sofa13Steps({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="process"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.noir, ...sx }}
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
            {content.steps.overline}
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
            {content.steps.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.steps.items.map((step, index) => (
            <Grid key={step.no} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  bgcolor: index % 2 === 0 ? SOFA13_COLORS.charcoal : SOFA13_COLORS.charcoalSoft,
                  border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.22)}`,
                  transition: 'transform .3s, border-color .3s',
                  '&:hover': { transform: 'translateY(-8px)', borderColor: SOFA13_COLORS.gold },
                }}
              >
                <Box
                  sx={{
                    mx: 'auto',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(45deg)',
                    color: SOFA13_COLORS.noir,
                    bgcolor: SOFA13_COLORS.gold,
                  }}
                >
                  <Typography sx={{ transform: 'rotate(-45deg)', fontSize: 18, fontFamily: (t) => t.typography.fontSecondaryFamily }}>
                    {step.no}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: SOFA13_COLORS.ivory, textAlign: 'center' }}>
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    lineHeight: 1.8,
                    color: sofa13Alpha(SOFA13_COLORS.ivory, 0.65),
                  }}
                >
                  {step.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
