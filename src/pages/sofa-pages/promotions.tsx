import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_PROMOTIONS,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khuyến mãi sofa' };

export default function Page() {
  const theme = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText?.(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          color: 'common.white',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
          pt: 'calc(var(--layout-header-desktop-height) + 40px)',
        }}
      >
        <Box
          sx={{
            inset: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.blog1})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Khuyến mãi</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Khuyến Mãi
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Casa Sofa</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Những ưu đãi hấp dẫn nhất trong tháng — giảm giá, flash sale và gói tặng kèm. Đặt
                lịch ngay kẻo lỡ!
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Promotions grid */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA_PROMOTIONS.map((promo) => (
              <Grid key={promo.id} xs={12} sm={6} md={6}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={0}
                  sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}
                >
                  <Box sx={{ position: 'relative', width: { xs: 1, sm: 220 }, flexShrink: 0 }}>
                    <Box component="img" src={promo.image} alt={promo.title} sx={{ width: 1, height: 1, minHeight: { xs: 200, sm: 1 }, objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', top: 12, left: 12, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'error.main', color: 'common.white' }}>
                      <Typography variant="caption" fontWeight="fontWeightBold">{promo.discount}</Typography>
                    </Box>
                  </Box>
                  <Stack spacing={2} sx={{ p: 3, flex: 1 }}>
                    <Typography variant="h6">{promo.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{promo.description}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:clock-circle-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Hạn: {promo.validUntil}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 1, borderRadius: 1, border: (t) => `1px dashed ${varAlpha(t.vars.palette.primary.mainChannel, 0.32)}` }}>
                      <Typography variant="subtitle2" sx={{ color: 'primary.main', letterSpacing: 1 }}>{promo.code}</Typography>
                      <Box sx={{ flex: 1 }} />
                      <Button size="small" onClick={() => handleCopy(promo.code)} startIcon={<Iconify icon={copied === promo.code ? 'eva:checkmark-fill' : 'solar:copy-bold-duotone'} width={16} />}>
                        {copied === promo.code ? 'Đã copy' : 'Copy'}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport} maxWidth="sm">
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
            <Iconify icon="solar:letter-bold-duotone" width={48} sx={{ color: 'primary.main' }} />
            <Typography variant="h3">Đăng ký nhận khuyến mãi</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Nhận thông tin ưu đãi sớm nhất gửi ngay đến hộp thư của bạn.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: 1 }}>
              <TextField fullWidth label="Email của bạn" type="email" />
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />}>Đăng ký</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Sử dụng mã ngay hôm nay</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đặt lịch dịch vụ và áp dụng mã khuyến mãi để nhận ưu đãi.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:calendar-bold-duotone" />}>
              Đặt lịch ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
