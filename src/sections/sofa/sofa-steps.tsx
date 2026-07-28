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

import { SOFA_STEPS } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaSteps({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Quy trình
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Từ ý tưởng
              <Box component="span" sx={{ opacity: 0.4 }}>
                {' '}
                đến phòng khách
              </Box>
            </Typography>
          </Box>

          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Bốn bước đơn giản để bạn sở hữu chiếc sofa trong mơ — chúng tôi lo mọi thứ từ khâu
              tư vấn đến khi lắp đặt hoàn tất.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {SOFA_STEPS.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{ position: 'relative', p: 3 }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                    color: 'primary.main',
                    position: 'relative',
                  }}
                >
                  <Iconify icon={step.icon} width={32} />
                  <Box
                    sx={{
                      top: -8,
                      right: -8,
                      width: 28,
                      height: 28,
                      display: 'flex',
                      borderRadius: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      fontSize: 14,
                      fontWeight: 'fontWeightBold',
                      position: 'absolute',
                    }}
                  >
                    {index + 1}
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
