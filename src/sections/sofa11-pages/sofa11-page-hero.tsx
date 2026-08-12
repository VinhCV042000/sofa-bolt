import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from '../sofa11/sofa11-data';

interface Sofa11PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa11PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa11PageHeroProps & Omit<BoxProps, 'title'>) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: { xs: 420, md: 520 },
        display: 'flex',
        alignItems: 'center',
        mt: 'calc(var(--layout-header-desktop-height) * -1)',
        pt: 'var(--layout-header-desktop-height)',
        bgcolor: SOFA11_COLORS.void,
        ...sx,
      }}
      {...other}
    >
      {/* Grid floor */}
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          backgroundImage: `linear-gradient(${sofa11Alpha(SOFA11_COLORS.cyan, 0.14)} 1px, transparent 1px), linear-gradient(90deg, ${sofa11Alpha(SOFA11_COLORS.cyan, 0.14)} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 60%, #000 0%, transparent 75%)',
        }}
      />
      {/* Neon blobs */}
      <Box sx={{ position: 'absolute', top: '-12%', left: '-8%', width: 420, height: 420, borderRadius: '50%', filter: 'blur(120px)', background: sofa11Alpha(SOFA11_COLORS.magenta, 0.4) }} />
      <Box sx={{ position: 'absolute', bottom: '-18%', right: '-6%', width: 380, height: 380, borderRadius: '50%', filter: 'blur(130px)', background: sofa11Alpha(SOFA11_COLORS.cyan, 0.3) }} />

      {/* Hero image */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: -100, md: 40 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 280, md: 420 },
          height: { xs: 280, md: 420 },
          borderRadius: '48% 52% 46% 54% / 52% 46% 54% 48%',
          overflow: 'hidden',
          border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.6)}`,
          boxShadow: `0 0 60px ${sofa11Alpha(SOFA11_COLORS.magenta, 0.35)}`,
          opacity: 0.5,
          animation: 'sofa11-hero-morph 12s ease-in-out infinite',
          zIndex: 1,
        }}
      >
        <Box component="img" src={image} alt="" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
      </Box>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={4} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, py: 0.75, width: 'fit-content', borderRadius: 99, border: `2px solid ${SOFA11_COLORS.lime}`, boxShadow: `0 0 24px ${sofa11Alpha(SOFA11_COLORS.lime, 0.4)}` }}>
                <Iconify icon="solar:bolt-circle-bold" width={18} sx={{ color: SOFA11_COLORS.lime }} />
                <Typography variant="overline" sx={{ color: SOFA11_COLORS.lime, letterSpacing: 2, fontSize: 12 }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              component="h1"
              sx={{
                color: SOFA11_COLORS.cream,
                fontSize: { xs: 38, md: 64 },
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: -1.5,
                textTransform: 'uppercase',
                '& span': {
                  color: SOFA11_COLORS.magenta,
                  textShadow: `3px 3px 0 ${SOFA11_COLORS.cyan}, 6px 6px 0 ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`,
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.72), fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 1.8 }}>{subtitle}</Typography>
            </Box>
          )}
        </Stack>
      </Container>

      <style>{`
        @keyframes sofa11-hero-morph {
          0%,100% { border-radius: 48% 52% 46% 54% / 52% 46% 54% 48%; }
          50% { border-radius: 56% 44% 58% 42% / 44% 58% 42% 56%; }
        }
      `}</style>
    </Box>
  );
}

export function Sofa11Section({ children, bg = 'void', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'void' | 'voidDeep' | 'grape' | 'cream'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'voidDeep' ? SOFA11_COLORS.voidDeep : bg === 'grape' ? SOFA11_COLORS.grape : bg === 'cream' ? SOFA11_COLORS.cream : SOFA11_COLORS.void;
  const color = bg === 'cream' ? SOFA11_COLORS.void : SOFA11_COLORS.cream;
  return (
    <Box component="section" sx={{ py, bgcolor, color }}>
      <Container>{children}</Container>
    </Box>
  );
}
