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

import { SOFA2_VALUES } from './sofa2-data';

// ----------------------------------------------------------------------

export function Sofa2Values({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={4}>
            <Stack spacing={2} sx={{ position: 'sticky', top: 100 }}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Giá trị cốt lõi
                </Typography>
              </Box>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ lineHeight: 1.15 }}>
                  Khác biệt{' '}
                  <Box component="span" sx={{ opacity: 0.4 }}>
                    trong từng chi tiết
                  </Box>
                </Typography>
              </Box>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Bốn cam kết khiến LUXE trở thành lựa chọn hàng đầu của hơn 25,000 gia đình Việt.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={8}>
            <Grid container spacing={3}>
              {SOFA2_VALUES.map((value, index) => (
                <Grid key={value.title} xs={12} sm={6}>
                  <Stack
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    transition={{ delay: index * 0.08 }}
                    spacing={2.5}
                    sx={{
                      p: 4,
                      height: 1,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => theme.customShadows.card,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: (theme) => theme.transitions.create(['transform'], { duration: 300 }),
                      '&:hover': { transform: 'translateY(-6px)' },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        display: 'flex',
                        borderRadius: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        color: 'common.white',
                      }}
                    >
                      <Iconify icon={value.icon} width={28} />
                    </Box>
                    <Typography variant="h6">{value.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {value.description}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
