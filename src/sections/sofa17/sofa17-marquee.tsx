import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { useSofa17Content } from './sofa17-i18n';
import { SOFA17_COLORS } from './sofa17-data';

// ----------------------------------------------------------------------

export function Sofa17Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa17Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA17_COLORS.saffron,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: 'max-content',
          animation: 'sofa17-marquee 38s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box
              component="span"
              sx={{
                color: SOFA17_COLORS.tealDeep,
                fontSize: 15,
                fontWeight: 'fontWeightMedium',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 4,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                fontStyle: 'italic',
              }}
            >
              {item}
            </Box>
            {/* 8-point star separator */}
            <Box
              component="svg"
              viewBox="0 0 20 20"
              sx={{ width: 12, height: 12, color: SOFA17_COLORS.tealDeep, flexShrink: 0 }}
            >
              <g fill="currentColor">
                <rect x="5" y="5" width="10" height="10" transform="rotate(0 10 10)" />
                <rect x="5" y="5" width="10" height="10" transform="rotate(45 10 10)" />
              </g>
            </Box>
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa17-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
