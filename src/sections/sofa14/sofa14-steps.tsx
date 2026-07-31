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
import { sofa14Alpha, SOFA14_COLORS, SOFA14_STEP_ICONS } from './sofa14-data';

// ----------------------------------------------------------------------

const CARD_COLORS = [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral, SOFA14_COLORS.butter];

export function Sofa14Steps({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="process" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvas, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={1.5} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2 }}>
            {content.steps.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 30, md: 46 }, fontWeight: 800, lineHeight: 1.1, color: SOFA14_COLORS.ink }}>
            {content.steps.title}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {content.steps.items.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: '32px',
                  bgcolor: sofa14Alpha(CARD_COLORS[index], 0.25),
                  border: `2px solid ${sofa14Alpha(CARD_COLORS[index], 0.5)}`,
                }}
              >
                <Box
                  sx={{
                    mx: 'auto',
                    width: 64,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    bgcolor: CARD_COLORS[index],
                  }}
                >
                  <Iconify icon={SOFA14_STEP_ICONS[index]} width={32} sx={{ color: SOFA14_COLORS.ink }} />
                </Box>
                <Typography variant="h6" sx={{ color: SOFA14_COLORS.ink, textAlign: 'center', fontWeight: 800 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ textAlign: 'center', lineHeight: 1.8, color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.85) }}>
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
