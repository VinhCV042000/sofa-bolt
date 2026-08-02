import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
  SOFA_OFFERS,
  SOFA_PAGE_FAQS,
  SOFA_PAGE_IMAGES,
} from 'src/sections/sofa/pages/sofa-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Gói ưu đãi thành viên' };

const COMPARISON = [
  { feature: 'Giảm giá dịch vụ', bronze: '10%', gold: '20%', platinum: '30%' },
  { feature: 'Giặt sofa miễn phí/năm', bronze: '2 lần', gold: '4 lần', platinum: 'Không giới hạn' },
  { feature: 'Bảo trì định kỳ/năm', bronze: '4 lần', gold: '6 lần', platinum: '12 lần' },
  { feature: 'Thay đệm miễn phí', bronze: '—', gold: '1 lần/năm', platinum: '2 lần/năm' },
  { feature: 'Tư vấn nội thất', bronze: '—', gold: 'Miễn phí', platinum: 'Miễn phí' },
  { feature: 'Hỗ trợ 24/7', bronze: '—', gold: '—', platinum: 'Có' },
];

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
            backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.78)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.56)}), url(${SOFA_PAGE_IMAGES.blog3})`,
          }}
        />
        <Container component={MotionContainer} sx={{ position: 'relative', zIndex: 9 }}>
          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 3 }}>Ưu đãi thành viên</Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, lineHeight: 1.15 }}>
                Gói Ưu Đãi
                <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> Thành Viên</Box>
              </Typography>
            </Box>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.72), maxWidth: 560 }}>
                Tích lũy ưu đãi trọn năm với các gói thành viên — bảo dưỡng sofa định kỳ, giảm giá
                dịch vụ và nhiều đặc quyền độc quyền.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Pricing cards */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3} alignItems="stretch">
            {SOFA_OFFERS.map((offer) => {
              const popular = (offer as any).popular;
              return (
                <Grid key={offer.id} xs={12} md={4}>
                  <Stack
                    component={m.div}
                    variants={varFade({ distance: 24 }).inUp}
                    spacing={3}
                    sx={{
                      p: 4,
                      height: 1,
                      borderRadius: 3,
                      position: 'relative',
                      bgcolor: popular ? 'primary.main' : 'background.paper',
                      color: popular ? 'common.white' : 'text.primary',
                      boxShadow: (t) => t.customShadows.card,
                      transform: popular ? 'scale(1.03)' : 'none',
                    }}
                  >
                    {popular && (
                      <Box sx={{ position: 'absolute', top: 16, right: 16, px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'warning.main', color: 'common.white' }}>
                        <Typography variant="caption" fontWeight="fontWeightBold">Phổ biến</Typography>
                      </Box>
                    )}
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: popular ? varAlpha(theme.vars.palette.common.whiteChannel, 0.16) : (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: popular ? 'common.white' : 'primary.main' }}>
                      <Iconify icon={offer.icon} width={28} />
                    </Box>
                    <Typography variant="h6">{offer.title}</Typography>
                    <Stack direction="row" spacing={1} alignItems="baseline">
                      <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>{offer.price}</Typography>
                    </Stack>
                    <Typography variant="caption" sx={{ textDecoration: 'line-through', opacity: 0.6 }}>{offer.original}</Typography>
                    <Stack spacing={1.5}>
                      {offer.features.map((f) => (
                        <Stack key={f} direction="row" spacing={1} alignItems="flex-start">
                          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ mt: 0.25, color: popular ? 'warning.light' : 'primary.main' }} width={18} />
                          <Typography variant="body2">{f}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Button component={RouterLink} href={paths.sofaBooking} variant={popular ? 'contained' : 'outlined'} color={popular ? 'warning' : 'primary'} fullWidth>
                      Đăng ký ngay
                    </Button>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Comparison table */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>So sánh</Typography>
            <Typography variant="h2">Bảng so sánh chi tiết</Typography>
          </Stack>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ overflow: 'hidden', borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                  <TableCell>Tính năng</TableCell>
                  <TableCell align="center">Bạc</TableCell>
                  <TableCell align="center" sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.06) }}>Vàng</TableCell>
                  <TableCell align="center">Bạch Kim</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {COMPARISON.map((row) => (
                  <TableRow key={row.feature} hover>
                    <TableCell sx={{ fontWeight: 'fontWeightMedium' }}>{row.feature}</TableCell>
                    <TableCell align="center">{row.bronze}</TableCell>
                    <TableCell align="center" sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.04) }}>{row.gold}</TableCell>
                    <TableCell align="center">{row.platinum}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Container>
      </Box>

      {/* FAQ mini */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport} maxWidth="md">
          <Stack spacing={2} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>FAQ</Typography>
            <Typography variant="h2">Câu hỏi thường gặp</Typography>
          </Stack>
          {SOFA_PAGE_FAQS.slice(0, 3).map((faq, index) => (
            <Accordion key={faq.question} defaultExpanded={index === 0} sx={{ '&:before': { display: 'none' }, '& + &': { mt: 1.5 }, borderRadius: 1, overflow: 'hidden' }}>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
            <Typography variant="h3">Sẵn sàng trở thành thành viên?</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để tận hưởng ưu đãi trọn năm.</Typography>
            <Button component={RouterLink} href={paths.sofaBooking} size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:medal-ribbon-star-bold-duotone" />}>
              Đăng ký thành viên
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
