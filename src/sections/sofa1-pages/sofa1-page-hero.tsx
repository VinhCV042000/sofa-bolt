import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha, textGradient } from 'src/theme/styles';
import { varFade, MotionContainer } from 'src/components/animate';

interface Sofa1PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa1PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa1PageHeroProps & BoxProps) {
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
          backgroundImage: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.85)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.5)}), url(${image})`,
        }}
      />
      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 2, bgcolor: 'primary.main' }} />
                <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4, fontWeight: 'fontWeightBold' }}>
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
                fontFamily: theme.typography.fontSecondaryFamily,
                '& span': {
                  ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`),
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

export function Sofa1Section({ children, bg = 'default', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'default' | 'paper' | 'grey'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'paper' ? 'background.paper' : bg === 'grey' ? (t: any) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) : 'background.default';
  return (
    <Box component="section" sx={{ py, bgcolor }}>
      <Container>{children}</Container>
    </Box>
  );
}
