import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from '../sofa13/sofa13-data';

interface Sofa13PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa13PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa13PageHeroProps & BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 400, md: 480 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA13_COLORS.noir,
        ...sx,
      }}
      {...other}
    >
      {/* Sunburst ornament */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          insetInlineEnd: { xs: '-40%', md: '-8%' },
          width: { xs: 480, md: 720 },
          height: { xs: 480, md: 720 },
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          opacity: 0.4,
          background: `repeating-conic-gradient(from 0deg, ${sofa13Alpha(SOFA13_COLORS.gold, 0.14)} 0deg 4deg, transparent 4deg 16deg)`,
          maskImage: `radial-gradient(circle, black 0%, black 55%, transparent 78%)`,
        }}
      />
      {/* hairline frame */}
      <Box sx={{ position: 'absolute', inset: { xs: 16, md: 28 }, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.28)}`, pointerEvents: 'none' }} />

      {/* Hero image */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: -100, md: 40 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 260, md: 380 },
          height: { xs: 260, md: 380 },
          overflow: 'hidden',
          border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`,
          opacity: 0.35,
          zIndex: 1,
          p: '6px',
          bgcolor: SOFA13_COLORS.charcoal,
        }}
      >
        <Box component="img" src={image} alt="" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
      </Box>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={4} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, py: 0.75, width: 'fit-content', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06) }}>
                <Iconify icon="solar:crown-star-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA13_COLORS.goldPale, letterSpacing: 3, fontSize: 12 }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA13_COLORS.ivory,
                fontSize: { xs: 34, md: 56 },
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: 1,
                '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' },
              }}
            >
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 1.9 }}>{subtitle}</Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa13Section({ children, bg = 'noir', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'noir' | 'noirDeep' | 'charcoal' | 'ivory'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'noirDeep' ? SOFA13_COLORS.noirDeep : bg === 'charcoal' ? SOFA13_COLORS.charcoal : bg === 'ivory' ? SOFA13_COLORS.ivory : SOFA13_COLORS.noir;
  const color = bg === 'ivory' ? SOFA13_COLORS.noir : SOFA13_COLORS.ivory;
  return (
    <Box component="section" sx={{ py, bgcolor, color }}>
      <Container>{children}</Container>
    </Box>
  );
}
