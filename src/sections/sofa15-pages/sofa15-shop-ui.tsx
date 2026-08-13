import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from '../sofa15/sofa15-data';

// ----------------------------------------------------------------------

export type Sofa15LinkItem = {
  title: string;
  desc?: string;
  icon?: string;
  path?: string;
};

export function Sofa15LinkGrid({ items, cols = 4 }: { items: Sofa15LinkItem[]; cols?: number }) {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {items.map((item) => {
        const interactive = Boolean(item.path);
        return (
          <Grid key={item.title} xs={12} sm={6} md={12 / cols}>
            <Stack
              spacing={1.5}
              {...(interactive ? { component: RouterLink, href: item.path } : {})}
              sx={{
                p: 3.5,
                height: 1,
                textDecoration: 'none',
                bgcolor: SOFA15_COLORS.charcoal,
                border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}`,
                transition: 'all 0.25s',
                ...(interactive && { '&:hover': { borderColor: SOFA15_COLORS.gold, transform: 'translateY(-4px)' } }),
              }}
            >
              {item.icon && (
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: SOFA15_COLORS.gold,
                    border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`,
                  }}
                >
                  <Iconify icon={item.icon} width={24} />
                </Box>
              )}
              <Typography
                variant="h6"
                sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
              >
                {item.title}
              </Typography>
              {item.desc && (
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.45), fontWeight: 'fontWeightLight', lineHeight: 1.9 }}>
                  {item.desc}
                </Typography>
              )}
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}

// ----------------------------------------------------------------------

export function Sofa15Panel({ title, children }: { title?: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Stack spacing={3} sx={{ p: { xs: 3, md: 4 }, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
      {title && (
        <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>
          {title}
        </Typography>
      )}
      {children}
    </Stack>
  );
}

export function Sofa15SectionTitle({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{ mb: 4, color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
    >
      {children}
    </Typography>
  );
}

export const sofa15FieldSx = {
  '& .MuiInputBase-root': { borderRadius: 0, color: '#FFFFFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.6) },
  '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
} as const;

export const sofa15GoldButtonSx = {
  borderRadius: 0,
  color: SOFA15_COLORS.black,
  bgcolor: SOFA15_COLORS.gold,
  '&:hover': { bgcolor: SOFA15_COLORS.goldLight },
} as const;

export function sofa15Price(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}
