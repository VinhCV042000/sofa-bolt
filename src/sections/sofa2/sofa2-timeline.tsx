import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_MILESTONES } from './sofa2-data';

// ----------------------------------------------------------------------

export function Sofa2Timeline({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Hành trình
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              12 năm{' '}
              <Box component="span" sx={{ opacity: 0.4 }}>
                chế tác đam mê
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA2_MILESTONES.map((milestone, index) => (
            <Grid key={milestone.year} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                spacing={2}
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.customShadows.card,
                  position: 'relative',
                  height: 1,
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'fontWeightBold',
                      fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                      color: 'primary.main',
                    }}
                  >
                    {milestone.year}
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                    }}
                  >
                    <Iconify icon="solar:flag-bold-duotone" width={20} />
                  </Box>
                </Stack>
                <Typography variant="h6">{milestone.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {milestone.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
