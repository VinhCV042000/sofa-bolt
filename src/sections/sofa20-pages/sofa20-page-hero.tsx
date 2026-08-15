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

import { SOFA20_COLORS } from '../sofa20/sofa20-data';

interface Sofa20PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa20PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa20PageHeroProps & Omit<BoxProps, 'title'>) {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 380, md: 440 },
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA20_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ inset: 0, position: 'absolute', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA20_COLORS.black, 0.92)} 0%, ${varAlpha(SOFA20_COLORS.black, 0.6)} 55%, ${varAlpha(SOFA20_COLORS.emerald, 0.3)} 100%), url(${image})` }} />
      <Box
        sx={{
          zIndex: 1,
          inset: 24,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: '160px 160px 24px 24px',
          border: `1px solid ${varAlpha(SOFA20_COLORS.saffron, 0.35)}`,
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          inset: 0,
          opacity: 0.16,
          position: 'absolute',
          pointerEvents: 'none',
          backgroundSize: '64px 64px',
          backgroundImage: `radial-gradient(${SOFA20_COLORS.saffron} 1.5px, transparent 1.6px), radial-gradient(${SOFA20_COLORS.tealLight} 1.5px, transparent 1.6px)`,
          backgroundPosition: '0 0, 32px 32px',
        }}
      />
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA20_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA20_COLORS.gold, letterSpacing: 4, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography component="h1" sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, fontSize: { xs: 32, md: 52 }, lineHeight: 1.1, fontWeight: 'fontWeightLight', letterSpacing: -0.5, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>{title}</Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>{subtitle}</Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa20Section({ children, bg = 'black', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'black' | 'charcoal' | 'ivory' | 'pearl'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'charcoal' ? SOFA20_COLORS.charcoal : bg === 'ivory' ? SOFA20_COLORS.ivory : bg === 'pearl' ? SOFA20_COLORS.pearl : SOFA20_COLORS.black;
  const color = bg === 'ivory' || bg === 'pearl' ? SOFA20_COLORS.black : SOFA20_COLORS.ivory;
  return (
    <Box component="section" sx={{ py, bgcolor, color }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa20Card({ children, accent = SOFA20_COLORS.gold, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps & Partial<MotionProps>) {
  return (
    <Box sx={{ p: 4, borderRadius: 3, bgcolor: SOFA20_COLORS.charcoal, border: `1px solid ${varAlpha(accent, 0.3)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
