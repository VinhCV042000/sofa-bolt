import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { sofa14Alpha, SOFA14_COLORS } from '../sofa14/sofa14-data';

interface Sofa14PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  overline?: string;
}

export function Sofa14PageHero({ title, subtitle, image, overline, sx, ...other }: Sofa14PageHeroProps & Omit<BoxProps, 'title'>) {
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
        bgcolor: SOFA14_COLORS.canvas,
        ...sx,
      }}
      {...other}
    >
      {/* Floating blobs */}
      <Box component={m.div} animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} sx={{ position: 'absolute', top: { xs: -60, md: -80 }, right: { xs: -80, md: '4%' }, width: { xs: 220, md: 300 }, height: { xs: 220, md: 300 }, borderRadius: '48% 52% 60% 40% / 50% 45% 55% 50%', bgcolor: sofa14Alpha(SOFA14_COLORS.butter, 0.6) }} />
      <Box component={m.div} animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} sx={{ position: 'absolute', bottom: { xs: -40, md: -60 }, left: { xs: -60, md: '2%' }, width: { xs: 180, md: 240 }, height: { xs: 180, md: 240 }, borderRadius: '60% 40% 45% 55% / 45% 55% 45% 55%', bgcolor: sofa14Alpha(SOFA14_COLORS.mint, 0.5) }} />

      {/* Hero image blob */}
      <Box sx={{ position: 'absolute', right: { xs: -100, md: 40 }, top: '50%', transform: 'translateY(-50%)', width: { xs: 220, md: 320 }, height: { xs: 220, md: 320 }, overflow: 'hidden', borderRadius: '48px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 20px 0 -8px ${sofa14Alpha(SOFA14_COLORS.sky, 0.4)}`, opacity: 0.3, zIndex: 1, p: '4px' }}>
        <Box component="img" src={image} alt="" sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: '32px' }} />
      </Box>

      <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9, py: { xs: 8, md: 10 } }}>
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          {overline && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2.25, py: 1, width: 'fit-content', borderRadius: 99, bgcolor: SOFA14_COLORS.white, boxShadow: `4px 4px 0 ${sofa14Alpha(SOFA14_COLORS.ink, 0.08)}`, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}` }}>
                <Iconify icon="solar:confetti-bold-duotone" width={18} sx={{ color: SOFA14_COLORS.coralDeep }} />
                <Typography variant="overline" sx={{ color: SOFA14_COLORS.inkSoft, letterSpacing: 1.5, fontSize: 12 }}>{overline}</Typography>
              </Stack>
            </Box>
          )}
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography component="h1" sx={{ color: SOFA14_COLORS.ink, fontSize: { xs: 32, md: 52 }, lineHeight: 1.1, fontWeight: 800, letterSpacing: -1, '& span': { color: SOFA14_COLORS.mintDeep } }}>{title}</Typography>
          </Box>
          {subtitle && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.9), fontSize: { xs: 15, md: 17 }, maxWidth: 480, lineHeight: 1.9 }}>{subtitle}</Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export function Sofa14Section({ children, bg = 'canvas', py = { xs: 8, md: 12 } }: { children: React.ReactNode; bg?: 'canvas' | 'canvasDeep' | 'white' | 'mint'; py?: { xs: number; md: number } }) {
  const bgcolor = bg === 'canvasDeep' ? SOFA14_COLORS.canvasDeep : bg === 'white' ? SOFA14_COLORS.white : bg === 'mint' ? sofa14Alpha(SOFA14_COLORS.mint, 0.15) : SOFA14_COLORS.canvas;
  return (
    <Box component="section" sx={{ py, bgcolor, color: SOFA14_COLORS.ink }}>
      <Container>{children}</Container>
    </Box>
  );
}

export function Sofa14Card({ children, accent = SOFA14_COLORS.mint, sx, ...other }: { children: React.ReactNode; accent?: string } & BoxProps & Partial<MotionProps>) {
  return (
    <Box sx={{ p: 4, borderRadius: '32px', bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa14Alpha(accent, 0.3)}`, ...sx }} {...other}>
      {children}
    </Box>
  );
}
