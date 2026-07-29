import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_CRAFT } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Craft({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'warning.dark' }}>
              Nghệ thuật chế tác
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Chế tác{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                thủ công 100%
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', fontSize: 17 }}>
              Mỗi chiếc Sofa Royale là kết tinh của hàng trăm giờ chế tác thủ công bởi nghệ nhân 20+ năm kinh nghiệm.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA5_CRAFT.map((item, index) => (
            <Grid key={item.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{
                  height: 1,
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  transition: (theme) => theme.transitions.create(['transform', 'box-shadow'], { duration: 300 }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.12),
                  }}
                >
                  <Iconify icon={item.icon} width={32} sx={{ color: 'warning.dark' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
