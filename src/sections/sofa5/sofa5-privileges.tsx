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

import { SOFA5_PRIVILEGES } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Privileges({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'warning.dark' }}>
              Đặc quyền VIP
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Dịch vụ{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                white-glove
              </Box>
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', fontSize: 17 }}>
              Trải nghiệm mua sắm thượng lưu — từ tư vấn tận nhà đến bảo dưỡng định kỳ.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA5_PRIVILEGES.map((privilege, index) => (
            <Grid key={privilege.title} xs={12} sm={6} md={3}>
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
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'warning.dark',
                    color: 'common.white',
                  }}
                >
                  <Iconify icon={privilege.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
                  {privilege.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {privilege.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
