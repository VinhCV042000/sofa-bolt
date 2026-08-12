import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { SOFA16_COLORS } from './sofa16-data';
import { useSofa16Content } from './sofa16-i18n';

// ----------------------------------------------------------------------

export function Sofa16Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa16Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA16_COLORS.olive,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: 'max-content',
          animation: 'sofa16-marquee 38s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box
              component="span"
              sx={{
                color: varAlpha('#FFFFFF', 0.85),
                fontSize: 15,
                fontWeight: 'fontWeightLight',
                fontFamily: (t) => t.typography.fontSecondaryFamily,
                letterSpacing: 4,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                fontStyle: 'italic',
              }}
            >
              {item}
            </Box>
            {/* Sun separator */}
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: SOFA16_COLORS.terracotta,
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa16-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
