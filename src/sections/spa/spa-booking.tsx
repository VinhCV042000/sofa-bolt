import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SPA_IMAGES } from './spa-data';

// ----------------------------------------------------------------------

export function SpaBooking({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  return (
    <Box component="section" id="booking" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Grid
          container
          spacing={0}
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            bgcolor: 'grey.900',
          }}
        >
          <Grid xs={12} md={6}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{ height: { xs: 280, md: 1 }, minHeight: { md: 420 } }}
            >
              <Box
                component="img"
                alt="Book your spa session"
                src={SPA_IMAGES.booking}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inRight}
              spacing={4}
              sx={{ p: { xs: 4, md: 6 }, height: 1, justifyContent: 'center' }}
            >
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Đặt lịch hẹn
                </Typography>

                <Typography variant="h3" sx={{ color: 'common.white' }}>
                  Sẵn sàng thư giãn?
                </Typography>

                <Typography sx={{ color: varAlpha(theme.vars.palette.grey['500Channel'], 0.64) }}>
                  Đặt lịch ngay hôm nay và nhận ưu đãi 15% cho lần trải nghiệm đầu tiên. Đội ngũ tư
                  vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ color: 'common.white' }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: 1.5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    }}
                  >
                    <Iconify
                      icon="solar:phone-bold-duotone"
                      width={24}
                      sx={{ color: 'primary.light' }}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      variant="caption"
                      sx={{ color: varAlpha(theme.vars.palette.grey['500Channel'], 0.48) }}
                    >
                      Hotline
                    </Typography>
                    <Typography variant="subtitle1">1900 8888</Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ color: 'common.white' }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: 1.5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    }}
                  >
                    <Iconify
                      icon="solar:map-point-bold-duotone"
                      width={24}
                      sx={{ color: 'primary.light' }}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      variant="caption"
                      sx={{ color: varAlpha(theme.vars.palette.grey['500Channel'], 0.48) }}
                    >
                      Địa chỉ
                    </Typography>
                    <Typography variant="subtitle1">123 Nguyễn Huệ, Quận 1, TP.HCM</Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ color: 'common.white' }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      borderRadius: 1.5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    }}
                  >
                    <Iconify
                      icon="solar:clock-circle-bold-duotone"
                      width={24}
                      sx={{ color: 'primary.light' }}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      variant="caption"
                      sx={{ color: varAlpha(theme.vars.palette.grey['500Channel'], 0.48) }}
                    >
                      Giờ mở cửa
                    </Typography>
                    <Typography variant="subtitle1">8:00 - 22:00 (Thứ 2 - Chủ nhật)</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  startIcon={<Iconify icon="solar:calendar-bold-duotone" />}
                >
                  Đặt lịch online
                </Button>

                <Button
                  component={RouterLink}
                  href={paths.contact}
                  size="large"
                  variant="outlined"
                  sx={{
                    color: 'common.white',
                    borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.32),
                    '&:hover': {
                      borderColor: 'common.white',
                      bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    },
                  }}
                >
                  Liên hệ tư vấn
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
