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

import { SOFA_IMAGES } from './sofa-data';

// ----------------------------------------------------------------------

export function SofaAbout({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
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
                alt="Casa Sofa workshop"
                src={SOFA_IMAGES.about}
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
                  8,500+ đánh giá
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Về Casa Sofa
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2">
                  Chế tác thủ công
                  <Box component="span" sx={{ opacity: 0.4 }}>
                    {' '}
                    từ đôi bàn tay nghệ nhân
                  </Box>
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Casa Sofa ra đời từ niềm tin rằng mỗi ngôi nhà xứng đáng có một chiếc sofa mang dấu
                  ấn riêng. Với hơn 12 năm kinh nghiệm, đội ngũ nghệ nhân lành nghề của chúng tôi
                  chọn lọc từng tấm da, từng thanh gỗ và may từng đường kim bằng tay — để mang đến
                  kiệt tác nội thất bền đẹp cùng thời gian.
                </Typography>
              </Box>

              <Stack spacing={2.5}>
                {[
                  {
                    icon: 'solar:hand-stars-bold-duotone',
                    title: 'Thủ Công Tinh Tế',
                    desc: 'Mỗi chiếc sofa là kết tinh từ 200+ giờ chế tác thủ công.',
                  },
                  {
                    icon: 'solar:leaf-bold-duotone',
                    title: 'Vật Liệu Bền Vững',
                    desc: 'Gỗ sồi FSC, da bò thực phẩm và vải linen tái chế thân thiện môi trường.',
                  },
                  {
                    icon: 'solar:shield-check-bold-duotone',
                    title: 'Bảo Hành 5 Năm',
                    desc: 'Cam kết chất lượng với bảo hành chính hãng và bảo trì trọn đời.',
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
