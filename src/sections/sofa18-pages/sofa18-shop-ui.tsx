import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA18_COLORS } from '../sofa18/sofa18-data';

// ----------------------------------------------------------------------

export type Sofa18LinkItem = {
  title: string;
  desc?: string;
  icon?: string;
  path?: string;
};

export function Sofa18LinkGrid({ items, cols = 4 }: { items: Sofa18LinkItem[]; cols?: number }) {
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
                borderRadius: 3,
                textDecoration: 'none',
                bgcolor: SOFA18_COLORS.creamLight,
                border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.2)}`,
                transition: 'all 0.25s',
                ...(interactive && {
                  '&:hover': { borderColor: SOFA18_COLORS.clay, transform: 'translateY(-4px)' },
                }),
              }}
            >
              {item.icon && (
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: SOFA18_COLORS.clayDeep,
                    bgcolor: varAlpha(SOFA18_COLORS.clay, 0.12),
                  }}
                >
                  <Iconify icon={item.icon} width={24} />
                </Box>
              )}
              <Typography
                variant="h6"
                sx={{
                  color: SOFA18_COLORS.ink,
                  fontWeight: 'fontWeightLight',
                  fontFamily: theme.typography.fontSecondaryFamily,
                }}
              >
                {item.title}
              </Typography>
              {item.desc && (
                <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight', lineHeight: 1.9 }}>
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

export function Sofa18Panel({ title, children }: { title?: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Stack
      spacing={3}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        bgcolor: SOFA18_COLORS.creamLight,
        border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.2)}`,
      }}
    >
      {title && (
        <Typography
          variant="h5"
          sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Stack>
  );
}

export function Sofa18SectionTitle({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{ mb: 4, color: SOFA18_COLORS.ink, fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
    >
      {children}
    </Typography>
  );
}

export const sofa18FieldSx = {
  '& .MuiInputBase-root': { borderRadius: 2, bgcolor: SOFA18_COLORS.white, color: SOFA18_COLORS.ink },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA18_COLORS.clay, 0.3) },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA18_COLORS.clay, 0.6) },
  '& .MuiInputLabel-root': { color: SOFA18_COLORS.inkSoft },
} as const;

export const sofa18ButtonSx = {
  borderRadius: 2,
  color: SOFA18_COLORS.white,
  bgcolor: SOFA18_COLORS.clay,
  '&:hover': { bgcolor: SOFA18_COLORS.clayDeep },
} as const;
