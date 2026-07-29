import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA3_MATERIALS } from './sofa3-data';

// ----------------------------------------------------------------------

export function Sofa3Materials({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="materials" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'success.main' }} />
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Vật liệu tự nhiên
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Từ đất,{' '}
              <Box component="span" sx={{ color: 'success.main' }}>
                từ cây, từ cừu
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA3_MATERIALS.map((material, index) => (
            <Grid key={material.title} xs={12} md={4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 3,
                  position: 'relative',
                  height: 460,
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src={material.image}
                  alt={material.title}
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    transition: (theme) => theme.transitions.create('transform', { duration: 500 }),
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                  }}
                />
                <Stack
                  spacing={2}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    p: 4,
                    color: 'common.white',
                  }}
                >
                  <Iconify icon={material.icon} width={40} sx={{ color: 'success.light' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
                    {material.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 280 }}>
                    {material.description}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
