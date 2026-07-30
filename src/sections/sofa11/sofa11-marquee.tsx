import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { SOFA11_COLORS, SOFA11_MARQUEE } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA11_MARQUEE, ...SOFA11_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2,
        overflow: 'hidden',
        bgcolor: SOFA11_COLORS.lime,
        transform: 'rotate(-1.5deg)',
        my: { xs: 4, md: 6 },
        border: `3px solid ${SOFA11_COLORS.void}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: 'max-content',
          animation: 'sofa11-marquee 28s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={4}>
            <Box
              component="span"
              sx={{
                color: SOFA11_COLORS.void,
                fontSize: { xs: 22, md: 30 },
                fontWeight: 900,
                letterSpacing: -0.5,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </Box>
            <Box
              component="span"
              sx={{
                width: 14,
                height: 14,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: SOFA11_COLORS.magenta,
                border: `2px solid ${varAlpha(SOFA11_COLORS.void, 0.9)}`,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa11-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
