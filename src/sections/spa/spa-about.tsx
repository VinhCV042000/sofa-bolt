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

import { SPA_IMAGES } from './spa-data';

// ----------------------------------------------------------------------

export function SpaAbout({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{ position: 'relative' }}
            >
              <Box
                component="img"
                alt="Serenity Spa interior"
                src={SPA_IMAGES.about}
                sx={{
                  width: 1,
                  borderRadius: 2,
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                }}
              />
              <Stack
                spacing={0.5}
                sx={{
                  bottom: 24,
                  right: -16,
                  px: 3,
                  py: 2,
                  borderRadius: 2,
                  position: 'absolute',
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.customShadows.z24,
                }}
              >
                <Typography variant="h3" color="primary.main">
                  4.9
                </Typography>
                <Stack direction="row" spacing={0.25}>
                  {[...Array(5)].map((_, i) => (
                    <Iconify key={i} icon="eva:star-fill" width={16} sx={{ color: 'warning.main' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  2,400+ đánh giá
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Về chúng tôi
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2">
                  Không gian bình yên
                  <Box component="span" sx={{ opacity: 0.4 }}>
                    {' '}
                    giữa lòng thành phố
                  </Box>
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Serenity Spa ra đời từ niềm đam mê mang đến trải nghiệm chăm sóc sức khỏe toàn
                  diện. Với đội ngũ chuyên gia được đào tạo quốc tế và không gian thiết kế theo
                  phong cách Zen hiện đại, chúng tôi cam kết mang đến sự thư giãn tuyệt đối cho
                  mỗi khách hàng.
                </Typography>
              </Box>

              <Stack spacing={2.5}>
                {[
                  {
                    icon: 'solar:heart-bold-duotone',
                    title: 'Chăm sóc tận tâm',
                    desc: 'Mỗi khách hàng đều được tư vấn liệu trình riêng biệt.',
                  },
                  {
                    icon: 'solar:leaf-bold-duotone',
                    title: '100% Organic',
                    desc: 'Sản phẩm tự nhiên, an toàn và thân thiện môi trường.',
                  },
                  {
                    icon: 'solar:shield-check-bold-duotone',
                    title: 'Chuẩn quốc tế',
                    desc: 'Quy trình vệ sinh và an toàn đạt tiêu chuẩn spa 5 sao.',
                  },
                ].map((item) => (
                  <Stack
                    key={item.title}
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    direction="row"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    >
                      <Iconify icon={item.icon} width={24} />
                    </Box>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.desc}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
