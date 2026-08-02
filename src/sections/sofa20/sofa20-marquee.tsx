import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { varAlpha } from 'src/theme/styles';

import { useSofa20Content } from './sofa20-i18n';
import { SOFA20_COLORS } from './sofa20-data';

// ----------------------------------------------------------------------

export function Sofa20Marquee({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();
  const items = [...content.marquee, ...content.marquee];

  return (
    <Box component="section" sx={{ py: 2.5, overflow: 'hidden', bgcolor: SOFA20_COLORS.brass, ...sx }} {...other}>
      <Stack direction="row" spacing={5} sx={{ width: 'max-content', animation: 'sofa20-marquee 38s linear infinite', '&:hover': { animationPlayState: 'paused' } }}>
        {items.map((item, index) => (
          <Stack key={`${item}-${index}`} direction="row" alignItems="center" spacing={5}>
            <Box component="span" sx={{ color: SOFA20_COLORS.espressoDeep, fontSize: 15, fontWeight: 'fontWeightBold', fontFamily: (t) => t.typography.fontSecondaryFamily, letterSpacing: 4, whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
              {item}
            </Box>
            {/* Gear-cog separator */}
            <Box component="svg" viewBox="0 0 20 20" sx={{ width: 14, height: 14, color: SOFA20_COLORS.espressoDeep, flexShrink: 0 }}>
              <g fill="currentColor">
                <circle cx="10" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="10" cy="10" r="1.5" />
              </g>
            </Box>
          </Stack>
        ))}
      </Stack>
      <style>{`@keyframes sofa20-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </Box>
  );
}
