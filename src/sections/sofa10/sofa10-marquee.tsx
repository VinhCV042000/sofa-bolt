import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { SOFA10_COLORS, SOFA10_MARQUEE } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA10_MARQUEE, ...SOFA10_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA10_COLORS.charcoal,
        borderTop: `1px solid ${varAlpha('#FFFFFF', 0.08)}`,
        borderBottom: `1px solid ${varAlpha('#FFFFFF', 0.08)}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={6}
        sx={{
          width: 'max-content',
          animation: 'sofa10-marquee 40s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={6}>
            <Box
              component="span"
              sx={{
                color: varAlpha('#FFFFFF', 0.5),
                fontSize: 18,
                fontWeight: 'fontWeightLight',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 3,
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </Box>
            <Box
              component="span"
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: varAlpha(SOFA10_COLORS.woodLight, 0.6),
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa10-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
