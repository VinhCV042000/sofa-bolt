import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { SOFA19_COLORS } from './sofa19-data';
import { useSofa19Content } from './sofa19-i18n';

// ----------------------------------------------------------------------

export function Sofa19Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa19Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box
      component="section"
      sx={{
        py: 2.5,
        overflow: 'hidden',
        bgcolor: SOFA19_COLORS.golden,
        ...sx,
      }}
      {...other}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: 'max-content',
          animation: 'sofa19-marquee 38s linear infinite',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box
              component="span"
              sx={{
                color: SOFA19_COLORS.jungleDeep,
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
            {/* Coral circle separator */}
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: SOFA19_COLORS.coral,
                flexShrink: 0,
              }}
            />
          </Stack>
        ))}
      </Stack>

      <style>{`
        @keyframes sofa19-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}
