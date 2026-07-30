import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS, SOFA11_IMAGES, SOFA11_PLAYGROUND } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Playground({ sx, ...other }: BoxProps) {
  const [active, setActive] = useState(SOFA11_PLAYGROUND[0]);

  return (
    <Box
      component="section"
      id="playground"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.void, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                position: 'relative',
                borderRadius: 5,
                overflow: 'hidden',
                border: `3px solid ${active.hex}`,
                boxShadow: `0 0 70px ${sofa11Alpha(active.hex, 0.45)}`,
                transition: 'all .4s',
              }}
            >
              <Box
                component="img"
                alt="Phối màu sofa"
                src={SOFA11_IMAGES.story}
                sx={{ width: 1, height: { xs: 300, md: 460 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  inset: 0,
                  position: 'absolute',
                  mixBlendMode: 'color',
                  bgcolor: active.hex,
                  opacity: 0.7,
                  transition: 'background-color .4s',
                }}
              />
              <Stack
                sx={{
                  left: 20,
                  bottom: 20,
                  px: 2,
                  py: 1,
                  position: 'absolute',
                  borderRadius: 99,
                  bgcolor: sofa11Alpha(SOFA11_COLORS.voidDeep, 0.75),
                }}
              >
                <Typography variant="subtitle2" sx={{ color: SOFA11_COLORS.cream, fontWeight: 900 }}>
                  {active.name}
                </Typography>
                <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>
                  {active.mood}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: SOFA11_COLORS.magenta, letterSpacing: 3 }}>
                  Color playground
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography
                  variant="h2"
                  sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
                >
                  Quẹt thử một{' '}
                  <Box component="span" sx={{ color: active.hex, transition: 'color .4s' }}>
                    gam màu
                  </Box>
                </Typography>
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.62), lineHeight: 1.9 }}>
                  Chạm vào từng ô màu để xem không gian đổi tông ngay lập tức. Đây chỉ là 6 trong hơn
                  200 mã vải chúng tôi đang có sẵn tại xưởng.
                </Typography>
              </Box>

              <Box
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: 'repeat(3, 1fr)' }}
              >
                {SOFA11_PLAYGROUND.map((color) => (
                  <Box
                    key={color.hex}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActive(color)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') setActive(color);
                    }}
                    sx={{
                      p: 1.5,
                      borderRadius: 3,
                      cursor: 'pointer',
                      textAlign: 'center',
                      bgcolor: sofa11Alpha(SOFA11_COLORS.cream, 0.04),
                      border: `2px solid ${active.hex === color.hex ? color.hex : sofa11Alpha(SOFA11_COLORS.cream, 0.12)}`,
                      transition: 'all .25s',
                      '&:hover': { transform: 'translateY(-4px)', borderColor: color.hex },
                    }}
                  >
                    <Box
                      sx={{
                        width: 1,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: color.hex,
                        mb: 1,
                        boxShadow: `0 0 20px ${sofa11Alpha(color.hex, 0.5)}`,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: SOFA11_COLORS.cream, fontWeight: 700, display: 'block' }}
                    >
                      {color.name}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: SOFA11_COLORS.lime }}>
                  <Iconify icon="solar:magic-stick-3-bold" width={20} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Gửi mã vải mẫu miễn phí tận nhà trong 3 ngày
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
