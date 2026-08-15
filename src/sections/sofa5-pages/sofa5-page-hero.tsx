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

import { SOFA5_COLORS } from '../sofa5/sofa5-data';

interface Sofa5PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa5PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa5PageHeroProps & Omit<BoxProps, 'title'>) {
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
          backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA5_COLORS.charcoalDeep, 0.92)} 0%, ${varAlpha(SOFA5_COLORS.charcoal, 0.5)} 50%, ${varAlpha(SOFA5_COLORS.clay, 0.2)} 100%), url(${image})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 160,
          height: 160,
          bgcolor: SOFA5_COLORS.vàng đồng,
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
          bgcolor: SOFA5_COLORS.clay,
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
                <Box sx={{ width: 8, height: 40, bgcolor: SOFA5_COLORS.vàng đồng, borderRadius: 4 }} />
                <Typography variant="overline" sx={{ color: SOFA5_COLORS.clayLight, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
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
                  ...textGradient(`90deg, ${SOFA5_COLORS.vàng đồng} 0%, ${SOFA5_COLORS.clay} 100%`),
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

export function Sofa5Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: string; py?: { xs: number; md: number } }) {
  const palette = SOFA5_COLORS as Record<string, string>;
  const bgcolor =
    bg === 'paper'
      ? 'background.paper'
      : bg === 'grey'
        ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04)
        : bg === 'default'
          ? 'background.default'
          : (palette[bg] ?? 'background.default');

  return (
    <Box component="section" sx={{ py, bgcolor, ...(bg !== 'default' && bg !== 'paper' && bg !== 'grey' && { color: SOFA5_COLORS.ink }) }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa5Card({ children, accent = SOFA5_COLORS.clay, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps & Partial<MotionProps>) {
  return (
    <Box sx={{ p: 4, borderRadius: 3, bgcolor: SOFA5_COLORS.creamLight, border: `1px solid ${varAlpha(accent, 0.25)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
