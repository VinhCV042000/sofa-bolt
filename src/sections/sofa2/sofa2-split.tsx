import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_IMAGES } from './sofa2-data';

// ----------------------------------------------------------------------

export function Sofa2Split({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid xs={12} md={6}>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 3,
                height: { xs: 320, md: 500 },
              }}
            >
              <Box
                component="img"
                alt="LUXE craftsmanship"
                src={SOFA2_IMAGES.split1}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inRight}
              spacing={3}
              sx={{ height: 1, justifyContent: 'center' }}
            >
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Về LUXE
              </Typography>
              <Typography variant="h2" sx={{ lineHeight: 1.15 }}>
                Thiết kế độc quyền{' '}
                <Box component="span" sx={{ opacity: 0.4 }}>
                  không giới hạn
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                LUXE Sofa tin rằng sofa không chỉ là nội thất — đó là tuyên ngôn phong cách. Chúng
                tôi kết hợp công nghệ đệm Đức, gỗ sồi FSC và da bò Ý để tạo nên những kiệt tác bền
                vững, đẹp mãi với thời gian.
              </Typography>

              <Stack spacing={2} sx={{ mt: 1 }}>
                {[
                  { label: 'Mẫu thiết kế độc quyền', value: '80+' },
                  { label: 'Nghệ nhân chế tác', value: '50+' },
                  { label: 'Năm bảo hành', value: '10' },
                ].map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      borderRadius: 2,
                      bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.06),
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 'fontWeightBold' }}>
                      {item.value}
                    </Typography>
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
