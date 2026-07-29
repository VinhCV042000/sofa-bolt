import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_COLLECTIONS } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Collections({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="collections" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 40, height: 2, bgcolor: 'warning.dark' }} />
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Bộ sưu tập
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Ba bộ sưu tập{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                độc quyền
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={4}>
          {SOFA5_COLLECTIONS.map((collection, index) => (
            <Grid key={collection.title} xs={12} md={4}>
              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.1 }}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  cursor: 'pointer',
                  height: 480,
                }}
              >
                <Box
                  component="img"
                  src={collection.image}
                  alt={collection.title}
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  }}
                />
                <Stack
                  spacing={1}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    p: 4,
                    color: 'common.white',
                  }}
                >
                  <Typography variant="overline" sx={{ color: 'warning.light', letterSpacing: 3 }}>
                    {collection.count}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>
                    {collection.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.7) }}>
                    {collection.subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), mt: 1, maxWidth: 280 }}>
                    {collection.description}
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
