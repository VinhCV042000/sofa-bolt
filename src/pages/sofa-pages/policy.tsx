import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport, MotionContainer } from 'src/components/animate';

import {
  SOFA_POLICIES,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chính sách Casa Sofa' };

export default function Page() {
  const theme = useTheme();

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.blog6})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Chính sách</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Chính Sách
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> &amp; Điều Khoản</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Các chính sách và điều khoản rõ ràng, minh bạch — bảo vệ quyền lợi của khách hàng
                khi sử dụng sản phẩm và dịch vụ Casa Sofa.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Policy grid */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {SOFA_POLICIES.map((policy) => (
              <Grid key={policy.title} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, transition: (t) => t.transitions.create(['transform'], { duration: 300 }), '&:hover': { transform: 'translateY(-6px)' } }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={policy.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{policy.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>{policy.content}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Last updated + download */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="space-between" alignItems="center" sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Stack spacing={1}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Cập nhật lần cuối</Typography>
              <Typography variant="h6">01 tháng 02 năm 2025</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chính sách được cập nhật định kỳ để phù hợp với quy định và bảo vệ khách hàng tốt nhất.</Typography>
            </Stack>
            <Button variant="contained" size="large" startIcon={<Iconify icon="solar:download-bold-duotone" />} sx={{ flexShrink: 0 }}>
              Tải PDF
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Câu hỏi về chính sách?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Liên hệ đội ngũ chăm sóc khách hàng để được giải đáp chi tiết.</Typography>
            <Button component={RouterLink} href={paths.contact} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
              Liên hệ ngay
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
