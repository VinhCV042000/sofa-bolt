import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { SOFA9_COLORS, SOFA9_MARQUEE } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA9_MARQUEE, ...SOFA9_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2,
        overflow: 'hidden',
        bgcolor: SOFA9_COLORS.black,
        borderTop: `4px solid ${SOFA9_COLORS.pink}`,
        borderBottom: `4px solid ${SOFA9_COLORS.teal}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{
          width: 'max-content',
          animation: 'sofa9-marquee 22s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={3}>
            <Box
              component="span"
              sx={{
                color: index % 3 === 0 ? SOFA9_COLORS.pink : index % 3 === 1 ? SOFA9_COLORS.teal : SOFA9_COLORS.yellow,
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
                width: 12,
                height: 12,
                bgcolor: index % 2 === 0 ? SOFA9_COLORS.yellow : SOFA9_COLORS.pink,
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa9-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
