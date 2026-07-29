import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA3_IMAGES } from './sofa3-data';

// ----------------------------------------------------------------------

export function Sofa3Story({ sx, ...other }: BoxProps) {
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
          <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 40, height: 2, bgcolor: 'success.main' }} />
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Câu chuyện Terra
                </Typography>
              </Stack>
              <Typography variant="h2">
                Từ nông trường{' '}
                <Box component="span" sx={{ color: 'success.main' }}>
                  đến phòng khách
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 17, lineHeight: 1.7 }}>
                Sofa Terra sinh ra từ niềm tin: nội thất có thể đẹp mà không tàn phá thiên nhiên.
                Chúng tôi trồng linen hữu cơ, gai dầu, cotton tại các nông trường đối tác — thu hoạch
                thủ công, dệt không hóa chất, chế tác bằng tay. Mỗi chiếc sofa là một vòng đời xanh.
              </Typography>
            </Stack>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 3,
              }}
            >
              {[
                { icon: 'solar:sprout-bold-duotone', title: 'Trồng hữu cơ', text: 'Không phân bón hóa học' },
                { icon: 'solar:hand-stars-bold-duotone', title: 'Dệt thủ công', text: 'Giữ nguyên sợi tự nhiên' },
                { icon: 'solar:armchair-bold-duotone', title: 'Chế tác bằng tay', text: 'Mỗi chiếc là độc bản' },
                { icon: 'solar:tree-bold-duotone', title: 'Trồng cây xanh', text: 'Tặng kèm mỗi đơn hàng' },
              ].map((item) => (
                <Stack key={item.title} spacing={1}>
                  <Iconify icon={item.icon} width={32} sx={{ color: 'success.main' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>

          <Box component={m.div} variants={varFade({ distance: 24 }).inRight} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={SOFA3_IMAGES.story}
              alt="Sofa Terra story"
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
                left: -24,
                bgcolor: 'success.main',
                color: 'common.white',
                borderRadius: 3,
                px: 3,
                py: 2,
                boxShadow: (theme) => theme.customShadows.z24,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Iconify icon="solar:leaf-bold-duotone" width={32} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', lineHeight: 1 }}>
                    120kg
                  </Typography>
                  <Typography variant="caption">CO₂ hấp thụ / sofa</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
