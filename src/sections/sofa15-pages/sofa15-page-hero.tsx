import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';
import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA15_COLORS } from '../sofa15/sofa15-data';

interface Sofa15PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa15PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa15PageHeroProps & BoxProps) {
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
        bgcolor: SOFA15_COLORS.black,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ inset: 0, position: 'absolute', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA15_COLORS.black, 0.92)} 0%, ${varAlpha(SOFA15_COLORS.black, 0.6)} 55%, ${varAlpha(SOFA15_COLORS.emerald, 0.3)} 100%), url(${image})` }} />
      <Box sx={{ position: 'absolute', top: 24, left: 24, right: 24, bottom: 24, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`, borderRadius: 2, zIndex: 1, pointerEvents: 'none' }} />
      {[
        { top: 16, left: 16, borderTop: `2px solid ${SOFA15_COLORS.gold}`, borderLeft: `2px solid ${SOFA15_COLORS.gold}` },
        { top: 16, right: 16, borderTop: `2px solid ${SOFA15_COLORS.gold}`, borderRight: `2px solid ${SOFA15_COLORS.gold}` },
        { bottom: 16, left: 16, borderBottom: `2px solid ${SOFA15_COLORS.gold}`, borderLeft: `2px solid ${SOFA15_COLORS.gold}` },
        { bottom: 16, right: 16, borderBottom: `2px solid ${SOFA15_COLORS.gold}`, borderRight: `2px solid ${SOFA15_COLORS.gold}` },
      ].map((style, i) => (
        <Box key={i} sx={{ position: 'absolute', width: 24, height: 24, zIndex: 2, ...style }} />
      ))}
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 32, height: 1.5, bgcolor: SOFA15_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography component="h1" sx={{ color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, fontSize: { xs: 32, md: 52 }, lineHeight: 1.1, fontWeight: 'fontWeightLight', letterSpacing: -0.5, '& span': { ...textGradient(`90deg, ${SOFA15_COLORS.goldLight} 0%, ${SOFA15_COLORS.gold} 50%, ${SOFA15_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>{title}</Typography>
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

export function Sofa15Section({ children, bg = 'black', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'black' | 'charcoal' | 'ivory' | 'pearl'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'charcoal' ? SOFA15_COLORS.charcoal : bg === 'ivory' ? SOFA15_COLORS.ivory : bg === 'pearl' ? SOFA15_COLORS.pearl : SOFA15_COLORS.black;
  const color = bg === 'ivory' || bg === 'pearl' ? SOFA15_COLORS.black : SOFA15_COLORS.ivory;
  return (
    <Box component="section" sx={{ py, bgcolor, color }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa15Card({ children, accent = SOFA15_COLORS.gold, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps) {
  return (
    <Box sx={{ p: 4, borderRadius: 0, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(accent, 0.3)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
