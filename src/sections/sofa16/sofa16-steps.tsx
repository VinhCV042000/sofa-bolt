import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { useSofa16Content } from './sofa16-i18n';
import { SOFA16_COLORS } from './sofa16-data';

// ----------------------------------------------------------------------

const STEP_ICONS = [
  'solar:chat-square-bold-duotone',
  'solar:hand-bold-duotone',
  'solar:tree-bold-duotone',
  'solar:delivery-bold-duotone',
];

export function Sofa16Steps({ sx, ...other }: BoxProps) {
  const content = useSofa16Content();

  return (
    <Box
      component="section"
      id="steps"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA16_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.5), borderRadius: 1 }} />
              <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                {content.steps.kicker}
              </Typography>
              <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.5), borderRadius: 1 }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA16_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.steps.title.split(' ').slice(0, -2).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA16_COLORS.terracotta }}>
                {content.steps.title.split(' ').slice(-2).join(' ')}
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {content.steps.items.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  p: 4,
                  height: 1,
                  position: 'relative',
                  bgcolor: 'common.white',
                  borderRadius: 3,
                  border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.1)}`,
                  transition: (theme) => theme.transitions.create('box-shadow', { duration: 400 }),
                  '&:hover': { boxShadow: `0 16px 40px -16px ${varAlpha(SOFA16_COLORS.terracotta, 0.25)}` },
                }}
              >
                {/* Step number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    fontSize: 56,
                    fontWeight: 'fontWeightLight',
                    color: varAlpha(SOFA16_COLORS.terracotta, 0.12),
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
                    fontStyle: 'italic',
                  }}
                >
                  0{index + 1}
                </Box>

                <Stack spacing={3} sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      display: 'flex',
                      borderRadius: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: varAlpha(SOFA16_COLORS.olive, 0.1),
                    }}
                  >
                    <Iconify icon={STEP_ICONS[index]} width={26} sx={{ color: SOFA16_COLORS.olive }} />
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, letterSpacing: 0.3 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.8, fontWeight: 'fontWeightLight' }}>
                      {step.text}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
