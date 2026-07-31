import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS } from './sofa15-data';

// ----------------------------------------------------------------------

export function Sofa15Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA15_COLORS.charcoal,
        borderTop: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
        borderBottom: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: 'max-content',
          animation: 'sofa15-marquee 35s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box
              component="span"
              sx={{
                color: varAlpha(SOFA15_COLORS.gold, 0.7),
                fontSize: 16,
                fontWeight: 'fontWeightLight',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 4,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {item}
            </Box>
            {/* Art Deco diamond separator */}
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                bgcolor: varAlpha(SOFA15_COLORS.gold, 0.4),
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa15-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
