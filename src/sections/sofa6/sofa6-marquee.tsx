import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { SOFA6_COLORS, SOFA6_MARQUEE } from './sofa6-data';

// ----------------------------------------------------------------------

export function Sofa6Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA6_MARQUEE, ...SOFA6_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA6_COLORS.forest,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={6}
        sx={{
          width: 'max-content',
          animation: 'sofa6-marquee 30s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={6}>
            <Box
              component="span"
              sx={{
                color: SOFA6_COLORS.cream,
                fontSize: 20,
                fontWeight: 'fontWeightMedium',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 1,
                whiteSpace: 'nowrap',
                opacity: 0.9,
              }}
            >
              {item}
            </Box>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: varAlpha(SOFA6_COLORS.terracottaLight, 0.8),
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa6-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
