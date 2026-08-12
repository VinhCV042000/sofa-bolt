import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA9_COLORS } from '../sofa9/sofa9-data';

interface Sofa9PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa9PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa9PageHeroProps & Omit<BoxProps, 'title'>) {
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
          backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA9_COLORS.black, 0.92)} 0%, ${varAlpha(SOFA9_COLORS.black, 0.5)} 50%, ${varAlpha(SOFA9_COLORS.purple, 0.2)} 100%), url(${image})`,
        }}
      />
      {/* Memphis shapes */}
      <Box sx={{ position: 'absolute', top: '15%', right: '8%', width: 120, height: 120, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%', opacity: 0.9, zIndex: 1 }} />
      <Box sx={{ position: 'absolute', bottom: '20%', right: '25%', width: 60, height: 60, bgcolor: SOFA9_COLORS.teal, transform: 'rotate(45deg)', opacity: 0.85, zIndex: 1 }} />
      <Box sx={{ position: 'absolute', top: '20%', left: '5%', width: 80, height: 40, bgcolor: SOFA9_COLORS.yellow, borderRadius: 20, opacity: 0.9, zIndex: 1 }} />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.pink, borderRadius: '50%' }} />
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.teal, borderRadius: '50%' }} />
                <Box sx={{ width: 12, height: 12, bgcolor: SOFA9_COLORS.yellow, borderRadius: '50%' }} />
                <Typography variant="overline" sx={{ color: SOFA9_COLORS.yellow, letterSpacing: 4, fontWeight: 'fontWeightBold', ml: 1 }}>
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
                fontFamily: theme.typography.fontSecondaryFamily,
                '& span': {
                  ...textGradient(`90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`),
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

export function Sofa9Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'default' | 'paper' | 'grey'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'paper' ? 'background.paper' : bg === 'grey' ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) : 'background.default';
  return (
    <Box component="section" sx={{ py, bgcolor }}>
      <Container>{children}</Container>
    </Box>
  );
}
