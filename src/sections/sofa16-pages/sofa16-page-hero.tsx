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

import { SOFA16_COLORS } from '../sofa16/sofa16-data';

interface Sofa16PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa16PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa16PageHeroProps & Omit<BoxProps, 'title'>) {
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
        bgcolor: SOFA16_COLORS.creamLight,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ inset: 0, position: 'absolute', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(115deg, ${varAlpha(SOFA16_COLORS.creamLight, 0.96)} 0%, ${varAlpha(SOFA16_COLORS.creamLight, 0.7)} 50%, ${varAlpha(SOFA16_COLORS.terracotta, 0.25)} 100%), url(${image})` }} />
      <Box sx={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.15)}`, borderRadius: 3, zIndex: 1, pointerEvents: 'none' }} />
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 36, height: 2, bgcolor: SOFA16_COLORS.terracotta, borderRadius: 1 }} />
                <Typography variant="overline" sx={{ color: SOFA16_COLORS.terracottaDeep, letterSpacing: 3, fontWeight: 'fontWeightMedium', textTransform: 'uppercase' }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography component="h1" sx={{ color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, fontSize: { xs: 32, md: 52 }, lineHeight: 1.1, fontWeight: 'fontWeightLight', letterSpacing: -0.5, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>{title}</Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: SOFA16_COLORS.inkSoft, fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 2, fontWeight: 'fontWeightLight' }}>{subtitle}</Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa16Section({ children, bg = 'cream', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'cream' | 'creamLight' | 'stone' | 'white'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'creamLight' ? SOFA16_COLORS.creamLight : bg === 'stone' ? SOFA16_COLORS.stone : bg === 'white' ? SOFA16_COLORS.white : SOFA16_COLORS.cream;
  return (
    <Box component="section" sx={{ py, bgcolor, color: SOFA16_COLORS.ink }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa16Card({ children, accent = SOFA16_COLORS.terracotta, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps & Partial<MotionProps>) {
  return (
    <Box sx={{ p: 4, borderRadius: 3, bgcolor: SOFA16_COLORS.creamLight, border: `1px solid ${varAlpha(accent, 0.25)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
