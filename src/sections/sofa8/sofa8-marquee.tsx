import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { SOFA8_COLORS, SOFA8_MARQUEE } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Marquee({ sx, ...other }: BoxProps) {
  const items = [...SOFA8_MARQUEE, ...SOFA8_MARQUEE];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA8_COLORS.ocean,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: 'max-content',
          animation: 'sofa8-marquee 32s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box
              component="span"
              sx={{
                color: 'common.white',
                fontSize: 20,
                fontWeight: 'fontWeightMedium',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 1.5,
                whiteSpace: 'nowrap',
                opacity: 0.95,
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
                bgcolor: index % 2 === 0 ? SOFA8_COLORS.coralLight : SOFA8_COLORS.sky,
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa8-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
