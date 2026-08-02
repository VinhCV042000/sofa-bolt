import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { useSofa18Content } from './sofa18-i18n';
import { SOFA18_COLORS } from './sofa18-data';

// ----------------------------------------------------------------------

export function Sofa18Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa18Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box component="section" sx={{ py: 2.5, overflow: 'hidden', bgcolor: SOFA18_COLORS.charcoal, ...sx }} {...other}>
      <Stack direction="row" spacing={5} sx={{ width: 'max-content', animation: 'sofa18-marquee 38s linear infinite', '&:hover': { animationPlayState: 'paused' } }}>
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box component="span" sx={{ color: varAlpha(SOFA18_COLORS.cream, 0.8), fontSize: 15, fontWeight: 'fontWeightLight', fontFamily: (t) => t.typography.fontSecondaryFamily, letterSpacing: 4, whiteSpace: 'nowrap', textTransform: 'uppercase', fontStyle: 'italic' }}>
              {item}
            </Box>
            <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: SOFA18_COLORS.rust, flexShrink: 0 }} />
          </Stack>
        ))}
      </Stack>
      <style>{`@keyframes sofa18-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </Box>
  );
}
