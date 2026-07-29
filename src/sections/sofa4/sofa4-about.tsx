import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA4_IMAGES } from './sofa4-data';

// ----------------------------------------------------------------------

export function Sofa4About({ sx, ...other }: BoxProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }} {...other}>
      <Container component={MotionViewport}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={SOFA4_IMAGES.about}
              alt="Sofa Pop"
              sx={{
                width: 1,
                borderRadius: 4,
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -24,
                right: -24,
                bgcolor: 'warning.main',
                color: 'common.white',
                borderRadius: 3,
                px: 3,
                py: 2,
                boxShadow: (theme) => theme.customShadows.z24,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Iconify icon="solar:star-bold-duotone" width={32} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', lineHeight: 1 }}>
                    4.9/5
                  </Typography>
                  <Typography variant="caption">8,000+ đánh giá</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inRight}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 2, bgcolor: 'warning.main' }} />
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Về Sofa Pop
                </Typography>
              </Stack>
              <Typography variant="h2">
                Màu sắc là{' '}
                <Box component="span" sx={{ color: 'warning.main' }}>
                  cá tính
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 17, lineHeight: 1.7 }}>
                Sofa Pop ra đời từ niềm tin: mỗi ngôi nhà cần một điểm nhấn năng động. Chúng tôi tạo
                ra sofa với 20+ bảng màu độc quyền, vật liệu bền vững, và thiết kế modular linh hoạt
                — để bạn tự do thể hiện mình.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              {[
                { icon: 'solar:palette-bold-duotone', title: '20+ Bảng Màu Độc Quyền', text: 'Từ san hô đến oải hương — mỗi màu là một câu chuyện.' },
                { icon: 'solar:leaf-bold-duotone', title: 'Vật Liệu Bền Vững', text: 'Vải recycled PET, đệm soy-based foam, gỗ FSC.' },
                { icon: 'solar:widget-bold-duotone', title: 'Modular Linh Hoạt', text: 'Ghép nối, thay đổi, mở rộng theo ý muốn.' },
              ].map((item) => (
                <Stack key={item.title} direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.12),
                      flexShrink: 0,
                    }}
                  >
                    <Iconify icon={item.icon} width={26} sx={{ color: 'warning.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating value={4.9} readOnly size="small" precision={0.1} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Được tin chọn bởi 8,000+ gia đình
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
