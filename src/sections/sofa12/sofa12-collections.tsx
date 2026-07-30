import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_COLLECTIONS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Collections({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="collections"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.sand, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ md: 'flex-end' }}
          justifyContent="space-between"
          sx={{ mb: { xs: 5, md: 8 } }}
        >
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="overline"
              sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3, display: 'block', mb: 1.5 }}
            >
              Bộ sưu tập
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 32, md: 48 },
                lineHeight: 1.1,
                color: SOFA12_COLORS.ink,
                fontFamily: (t) => t.typography.fontSecondaryFamily,
              }}
            >
              Ba sắc đất, ba nhịp sống
            </Typography>
          </Box>

          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.75), maxWidth: 380, lineHeight: 1.8 }}
          >
            Mỗi bộ sưu tập là một bảng chất liệu riêng, chọn theo hướng nắng và nhịp sinh hoạt của
            gia đình bạn.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {SOFA12_COLLECTIONS.map((item, index) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 28 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2.5}
                sx={{
                  height: 1,
                  cursor: 'pointer',
                  '&:hover .sofa12-arch img': { transform: 'scale(1.06)' },
                  '&:hover .sofa12-arch': { borderColor: item.accent },
                }}
              >
                <Box
                  className="sofa12-arch"
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '200px 200px 16px 16px',
                    border: `2px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.1)}`,
                    transition: 'border-color .3s',
                    bgcolor: SOFA12_COLORS.cream,
                  }}
                >
                  <Box
                    component="img"
                    alt={item.title}
                    src={item.image}
                    sx={{
                      width: 1,
                      height: { xs: 320, md: 400 },
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform .6s ease',
                    }}
                  />
                </Box>

                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: item.accent }} />
                  <Typography variant="h5" sx={{ color: SOFA12_COLORS.ink }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.6) }}
                  >
                    {item.count}
                  </Typography>
                </Stack>

                <Typography variant="subtitle2" sx={{ color: item.accent, letterSpacing: 0.5 }}>
                  {item.tagline}
                </Typography>

                <Typography sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.78), lineHeight: 1.8 }}>
                  {item.description}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: SOFA12_COLORS.ink }}>
                  <Typography variant="subtitle2">Xem bộ sưu tập</Typography>
                  <Iconify icon="solar:arrow-right-linear" width={18} />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
