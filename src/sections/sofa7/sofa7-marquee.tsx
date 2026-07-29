import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { SOFA7_COLORS, SOFA7_MARQUEE } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA7_MARQUEE, ...SOFA7_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2,
        overflow: 'hidden',
        bgcolor: SOFA7_COLORS.ink,
        borderBottom: `4px solid ${SOFA7_COLORS.electric}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: 'max-content',
          animation: 'sofa7-marquee 25s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={4}>
            <Box
              component="span"
              sx={{
                color: 'common.white',
                fontSize: 22,
                fontWeight: 'fontWeightBold',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 2,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {item}
            </Box>
            <Box
              component="span"
              sx={{
                width: 10,
                height: 10,
                bgcolor: index % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan,
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa7-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
