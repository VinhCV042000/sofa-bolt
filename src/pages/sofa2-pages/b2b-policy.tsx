import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chính sách đối tác B2B — LUXE Sofa' };

const TIERS = [
  { tier: 'Bronze', discount: '10%', minOrder: '50 triệu', color: '#CD7F32' },
  { tier: 'Silver', discount: '15%', minOrder: '150 triệu', color: '#C0C0C0' },
  { tier: 'Gold', discount: '25%', minOrder: '400 triệu', color: '#FFD700' },
  { tier: 'Platinum', discount: '35%', minOrder: '1 tỷ', color: '#E5E4E2' },
  { tier: 'Diamond', discount: '40%', minOrder: '2 tỷ', color: '#B9F2FF' },
];

const SECTIONS = [
  { icon: 'solar:card-bold-duotone', title: 'Điều khoản thanh toán', items: ['Đặt cọc 30% khi ký hợp đồng.', 'Thanh toán 60% khi giao hàng.', 'Thanh toán 10% sau 15 ngày nghiệm thu.', 'Hỗ trợ trả chậm 30-60 ngày cho đối tác Gold trở lên.'] },
  { icon: 'solar:delivery-bold-duotone', title: 'Điều khoản giao hàng', items: ['Miễn phí giao hàng lắp đặt toàn quốc.', 'Giao hàng trong 7-20 ngày theo hợp đồng.', 'Hỗ trợ lưu kho miễn phí 30 ngày.'] },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành', items: ['Bảo hành 10 năm cho khung và đệm.', 'Bảo hành 5 năm cho chất liệu bọc.', 'Bảo trì định kỳ miễn phí năm đầu cho dự án.'] },
  { icon: 'solar:headset-bold-duotone', title: 'Hỗ trợ', items: ['Quản lý dự án 1:1 chuyên trách.', 'Hỗ trợ thiết kế 3D miễn phí.', 'Đào tạo sản phẩm cho đội ngũ bán hàng.'] },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Chính sách đối tác"
        subtitle="Chính sách chiết khấu, thanh toán, giao hàng và bảo hành dành riêng cho đối tác B2B."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Chính sách B2B"
      />

      {/* Discount tiers table */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h3">Bậc chiết khấu đối tác</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Mức chiết khấu tăng dần theo doanh số tích lũy hàng năm.</Typography>
        </Stack>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: (t) => t.customShadows.card, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08) }}>
                <TableRow>
                  <TableCell>Hạng đối tác</TableCell>
                  <TableCell align="right">Chiết khấu</TableCell>
                  <TableCell align="right">Doanh số tối thiểu/năm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TIERS.map((row) => (
                  <TableRow key={row.tier} sx={{ '&:last-of-type td': { borderBottom: 0 } }}>
                    <TableCell>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: row.color }} />
                        <Typography variant="subtitle2">{row.tier}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right"><Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{row.discount}</Typography></TableCell>
                    <TableCell align="right">{row.minOrder}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Sofa2Section>

      {/* Policy sections */}
      <Sofa2Section bg="grey">
        <Grid container spacing={3}>
          {SECTIONS.map((s, index) => (
            <Grid key={s.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={s.icon} width={24} />
                </Box>
                <Typography variant="h6">{s.title}</Typography>
                <Stack spacing={1} divider={<Divider flexItem />}>
                  {s.items.map((item) => (
                    <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                      <Iconify icon="eva:checkmark-fill" width={16} sx={{ color: 'success.main', mt: 0.3 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* CTA */}
      <Sofa2Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h3">Sẵn sàng trở thành đối tác?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để tận hưởng chính sách chiết khấu tốt nhất.</Typography>
          <Button component={RouterLink} href="/sofa2/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
            Đăng ký đối tác
          </Button>
        </Stack>
      </Sofa2Section>
    </>
  );
}
