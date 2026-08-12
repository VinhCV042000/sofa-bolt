import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_COLORS } from './sofa13-data';

// ----------------------------------------------------------------------

export function Sofa13Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();
  const items = [...content.marquee, ...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA13_COLORS.gold,
        borderTop: `1px solid ${SOFA13_COLORS.noir}`,
        borderBottom: `1px solid ${SOFA13_COLORS.noir}`,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          width: 'max-content',
          animation: 'sofa13-marquee 36s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={4}>
            <Box
              component="span"
              sx={{
                fontSize: { xs: 16, md: 22 },
                letterSpacing: 5,
                whiteSpace: 'nowrap',
                color: SOFA13_COLORS.noir,
                fontFamily: (t) => t.typography.fontSecondaryFamily,
              }}
            >
              {item}
            </Box>
            <Box
              sx={{
                width: 10,
                height: 10,
                flexShrink: 0,
                transform: 'rotate(45deg)',
                bgcolor: sofa13Alpha(SOFA13_COLORS.noir, index % 2 === 0 ? 0.85 : 0.5),
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa13-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </Box>
  );
}
