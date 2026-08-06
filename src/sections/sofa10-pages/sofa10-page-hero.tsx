import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';
import { varFade, MotionContainer } from 'src/components/animate';

import { SOFA10_COLORS } from '../sofa10/sofa10-data';

interface Sofa10PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa10PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa10PageHeroProps & BoxProps) {
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
          backgroundImage: `linear-gradient(110deg, ${varAlpha(SOFA10_COLORS.charcoal, 0.85)} 0%, ${varAlpha(SOFA10_COLORS.charcoal, 0.4)} 50%, ${varAlpha(SOFA10_COLORS.wood, 0.15)} 100%), url(${image})`,
        }}
      />
      {/* Organic ink stroke accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 180,
          height: 180,
          borderRadius: '48% 52% 55% 45% / 60% 40% 50% 50%',
          background: `radial-gradient(circle at 45% 40%, ${varAlpha(SOFA10_COLORS.wood, 0.2)} 0%, transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: 1,
        }}
      />

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={4} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 1.5, bgcolor: SOFA10_COLORS.woodLight, opacity: 0.6 }} />
                <Typography variant="overline" sx={{ color: varAlpha('#FFFFFF', 0.7), letterSpacing: 6, fontWeight: 'fontWeightLight', textTransform: 'uppercase' }}>
                  {overline}
                </Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 34, md: 52 },
                lineHeight: 1.15,
                fontWeight: 'fontWeightLight',
                letterSpacing: -0.5,
                fontFamily: theme.typography.fontSecondaryFamily,
                '& span': {
                  ...textGradient(`120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`),
                  fontStyle: 'italic',
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.6), maxWidth: 500, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
                {subtitle}
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa10Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'default' | 'paper' | 'grey'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'paper' ? 'background.paper' : bg === 'grey' ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) : 'background.default';
  return (
    <Box component="section" sx={{ py, bgcolor }}>
      <Container>{children}</Container>
    </Box>
  );
}
