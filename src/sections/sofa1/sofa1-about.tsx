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

import { SOFA1_IMAGES } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1About({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'relative' }}>
              <Box
                component="img"
                alt="Casa Sofa craftsmanship"
                src={SOFA1_IMAGES.about}
                sx={{ width: 1, borderRadius: 3, aspectRatio: '4/5', objectFit: 'cover' }}
              />
              <Stack
                spacing={1}
                sx={{
                  top: 24,
                  left: -24,
                  px: 3,
                  py: 2.5,
                  borderRadius: 2,
                  position: 'absolute',
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.customShadows.z24,
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  {[...Array(5)].map((_, i) => (
                    <Iconify key={i} icon="eva:star-fill" width={18} sx={{ color: 'warning.main' }} />
                  ))}
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>
                  4.9 / 5
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  8,500+ đánh giá
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Stack spacing={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Về Casa Sofa
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ lineHeight: 1.15 }}>
                  Nghệ nhân chế tác{' '}
                  <Box component="span" sx={{ opacity: 0.4 }}>
                    kiệt tác sofa
                  </Box>
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Casa Sofa tin rằng mỗi ngôi nhà xứng đáng một chiếc sofa mang dấu ấn riêng. Với hơn
                  12 năm, đội ngũ nghệ nhân chọn lọc từng tấm da, từng thanh gỗ, may từng đường kim
                  bằng tay — tạo nên kiệt tác bền đẹp cùng thời gian.
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[
                  { icon: 'solar:hand-stars-bold-duotone', title: 'Thủ Công', value: '200+ giờ' },
                  { icon: 'solar:leaf-bold-duotone', title: 'Vật Liệu', value: 'FSC & da Ý' },
                  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo Hành', value: '7 năm' },
                ].map((item) => (
                  <Grid key={item.title} xs={4}>
                    <Stack
                      component={m.div}
                      variants={varFade({ distance: 24 }).inUp}
                      spacing={1.5}
                      sx={{ p: 2.5, borderRadius: 2, bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.06) }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          display: 'flex',
                          borderRadius: 1.5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.main',
                          color: 'common.white',
                        }}
                      >
                        <Iconify icon={item.icon} width={22} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
