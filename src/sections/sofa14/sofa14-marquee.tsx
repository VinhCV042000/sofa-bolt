import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useSofa14Content } from './sofa14-i18n';
import { SOFA14_COLORS } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();
  const items = [...content.marquee, ...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{ py: 2.5, overflow: 'hidden', bgcolor: SOFA14_COLORS.ink, ...sx }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: 'max-content',
          animation: 'sofa14-marquee 30s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={4}>
            <Box
              component="span"
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontWeight: 800,
                letterSpacing: 2,
                whiteSpace: 'nowrap',
                color: SOFA14_COLORS.canvas,
              }}
            >
              {item}
            </Box>
            <Box
              sx={{
                width: 14,
                height: 14,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral, SOFA14_COLORS.butter][index % 4],
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa14-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </Box>
  );
}
