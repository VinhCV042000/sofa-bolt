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

export function Sofa20PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa20PageHeroProps & BoxProps) {
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
          backgroundImage: `linear-gradient(135deg, ${varAlpha(SOFA20_COLORS.espressoDeep, 0.92)} 0%, ${varAlpha(SOFA20_COLORS.espresso, 0.6)} 50%, ${varAlpha(SOFA20_COLORS.charcoal, 0.3)} 100%), url(${image})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, ${varAlpha(SOFA20_COLORS.copper, 0.25)} 0%, transparent 70%)`,
          filter: 'blur(45px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '8%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, ${varAlpha(SOFA20_COLORS.brass, 0.2)} 0%, transparent 70%)`,
          filter: 'blur(35px)',
          zIndex: 1,
        }}
      />
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 2, bgcolor: SOFA20_COLORS.copperLight, borderRadius: 1 }} />
                <Typography variant="overline" sx={{ color: SOFA20_COLORS.copperLight, letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
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
                lineHeight: 1.15,
                fontWeight: 'fontWeightBold',
                fontFamily: theme.typography.fontSecondaryFamily,
                '& span': {
                  ...textGradient(`135deg, ${SOFA20_COLORS.copperLight}, ${SOFA20_COLORS.brassLight}`),
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

export function Sofa20Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'default' | 'paper' | 'grey'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'paper' ? 'background.paper' : bg === 'grey' ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) : 'background.default';
  return (
    <Box component="section" sx={{ py, bgcolor }}>
      <Container>{children}</Container>
    </Box>
  );
}
