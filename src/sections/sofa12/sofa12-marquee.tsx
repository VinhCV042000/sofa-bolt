import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_MARQUEE } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA12_MARQUEE, ...SOFA12_MARQUEE, ...SOFA12_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA12_COLORS.clay,
        borderTop: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.15)}`,
        borderBottom: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.15)}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: 'max-content',
          animation: 'sofa12-marquee 36s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={4}>
            <Box
              component="span"
              sx={{
                fontSize: { xs: 18, md: 24 },
                letterSpacing: 4,
                whiteSpace: 'nowrap',
                color: SOFA12_COLORS.cream,
                fontFamily: (t) => t.typography.fontSecondaryFamily,
              }}
            >
              {item}
            </Box>
            <Box
              sx={{
                width: 10,
                height: 10,
                flexShrink: 0,
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                bgcolor: index % 2 === 0 ? SOFA12_COLORS.sand : SOFA12_COLORS.ochre,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa12-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </Box>
  );
}
