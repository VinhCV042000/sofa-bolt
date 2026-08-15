import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA18_COLORS } from '../sofa18/sofa18-data';

interface Sofa18PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa18PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa18PageHeroProps & Omit<BoxProps, 'title'>) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        color: 'common.white',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA18_COLORS.charcoalDeep, 0.92)} 0%, ${varAlpha(SOFA18_COLORS.charcoal, 0.5)} 50%, ${varAlpha(SOFA18_COLORS.clay, 0.2)} 100%), url(${image})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 160,
          height: 160,
          bgcolor: SOFA18_COLORS.sage,
          borderRadius: '50%',
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '25%',
          width: 50,
          height: 50,
          bgcolor: SOFA18_COLORS.clay,
          borderRadius: '50%',
          opacity: 0.7,
          zIndex: 1,
        }}
      />
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA18_COLORS.sage, borderRadius: 4 }} />
                <Typography variant="overline" sx={{ color: SOFA18_COLORS.clayLight, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
                  {overline}
                </Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, md: 56 },
                lineHeight: 1.1,
                fontWeight: 'fontWeightBold',
                textTransform: 'uppercase',
                letterSpacing: -1,
                '& span': {
                  ...textGradient(`90deg, ${SOFA18_COLORS.sage} 0%, ${SOFA18_COLORS.clay} 100%`),
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560, lineHeight: 1.7 }}>
                {subtitle}
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa18Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: string; py?: { xs: number; md: number } }) {
  const palette = SOFA18_COLORS as Record<string, string>;
  const bgcolor =
    bg === 'paper'
      ? 'background.paper'
      : bg === 'grey'
        ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04)
        : bg === 'default'
          ? 'background.default'
          : (palette[bg] ?? 'background.default');

  return (
    <Box component="section" sx={{ py, bgcolor, ...(bg !== 'default' && bg !== 'paper' && bg !== 'grey' && { color: SOFA18_COLORS.ink }) }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa18Card({ children, accent = SOFA18_COLORS.clay, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps & Partial<MotionProps>) {
  return (
    <Box sx={{ p: 4, borderRadius: 3, bgcolor: SOFA18_COLORS.creamLight, border: `1px solid ${varAlpha(accent, 0.25)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
