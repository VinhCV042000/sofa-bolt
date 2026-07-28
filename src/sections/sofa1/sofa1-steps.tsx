import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_STEPS } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Steps({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Quy trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Từ ý tưởng{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                đến phòng khách
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA1_STEPS.map((step, index) => (
            <Grid key={step.number} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                spacing={2}
                sx={{ position: 'relative' }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: 'flex',
                    borderRadius: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    boxShadow: (theme) => theme.customShadows.card,
                    position: 'relative',
                  }}
                >
                  <Iconify icon={step.icon} width={36} sx={{ color: 'primary.main' }} />
                  <Box
                    sx={{
                      top: -10,
                      right: -10,
                      width: 32,
                      height: 32,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      fontSize: 13,
                      fontWeight: 'fontWeightBold',
                      position: 'absolute',
                    }}
                  >
                    {step.number}
                  </Box>
                </Box>
                <Typography variant="h6">{step.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
