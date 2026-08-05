import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa6PageHero, Sofa6Section } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PAGE_IMAGES, formatSofa6Price } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khu vực thành viên — Sofa Earth' };

const NAV = [
  { section: 'dashboard', label: 'Tổng quan', icon: 'solar:widget-bold-duotone', href: '/sofa6/member/dashboard' },
  { section: 'points', label: 'Điểm tích lũy', icon: 'solar:gift-bold-duotone', href: '/sofa6/member/points' },
  { section: 'vouchers', label: 'Voucher', icon: 'solar:ticket-bold-duotone', href: '/sofa6/member/vouchers' },
  { section: 'complaints', label: 'Khiếu nại', icon: 'solar:chat-square-bold-duotone', href: '/sofa6/member/complaints' },
  { section: 'dealer', label: 'Đại lý', icon: 'solar:hand-shake-bold-duotone', href: '/sofa6/member/dealer' },
  { section: 'dealer-orders', label: 'Đơn hàng đại lý', icon: 'solar:bag-bold-duotone', href: '/sofa6/member/dealer-orders' },
  { section: 'dealer-debt', label: 'Công nợ', icon: 'solar:wallet-bold-duotone', href: '/sofa6/member/dealer-debt' },
];

const DASHBOARD_CARDS = [
  { icon: 'solar:gift-bold-duotone', label: 'Điểm tích lũy', value: '2.450', sub: 'Hạng Earth' },
  { icon: 'solar:bag-bold-duotone', label: 'Đơn hàng', value: '12', sub: 'Đã hoàn tất' },
  { icon: 'solar:ticket-bold-duotone', label: 'Voucher', value: '4', sub: 'Đang hoạt động' },
  { icon: 'solar:wallet-bold-duotone', label: 'Tổng chi tiêu', value: formatSofa6Price(86000000), sub: 'Từ 2024' },
];

const POINTS_HISTORY = [
  { date: '15/02/2025', action: 'Mua Sofa Terra Lounge', points: '+1.890', type: 'earn' },
  { date: '10/02/2025', action: 'Đổi voucher giảm 500k', points: '-500', type: 'spend' },
  { date: '02/02/2025', action: 'Mua Sofa Sage Comfort', points: '+1.550', type: 'earn' },
  { date: '20/01/2025', action: 'Đánh giá sản phẩm', points: '+50', type: 'earn' },
  { date: '15/01/2025', action: 'Mua Sofa Sand Minimal', points: '+1.390', type: 'earn' },
];

const VOUCHERS = [
  { code: 'EARTH50', title: 'Giảm 50.000đ', desc: 'Đơn từ 5.000.000đ', expiry: '31/03/2025', status: 'active' },
  { code: 'SAGE100', title: 'Giảm 100.000đ', desc: 'Đơn từ 10.000.000đ', expiry: '30/04/2025', status: 'active' },
  { code: 'FREESHIP', title: 'Miễn phí vận chuyển', desc: 'Toàn quốc', expiry: '31/12/2025', status: 'active' },
  { code: 'EARTH200', title: 'Giảm 200.000đ', desc: 'Đơn từ 20.000.000đ', expiry: '15/02/2025', status: 'expired' },
];

const DEALER_STATS = [
  { icon: 'solar:hand-money-bold-duotone', label: 'Doanh số tháng', value: formatSofa6Price(120000000), sub: '+12% so với tháng trước' },
  { icon: 'solar:bag-bold-duotone', label: 'Đơn hàng', value: '28', sub: 'Đã giao tháng này' },
  { icon: 'solar:scale-bold-duotone', label: 'Chiết khấu', value: '25%', sub: 'Hạng Earth Partner' },
  { icon: 'solar:wallet-bold-duotone', label: 'Công nợ', value: formatSofa6Price(18000000), sub: 'Trong hạn' },
];

const DEALER_ORDERS = [
  { id: '#SE-D2401', customer: 'Café Xanh Đà Lạt', date: '12/02/2025', qty: 4, total: 62000000, status: 'Đã giao' },
  { id: '#SE-D2402', customer: 'Resort Bamboo Bay', date: '15/02/2025', qty: 8, total: 136000000, status: 'Đang giao' },
  { id: '#SE-D2403', customer: 'Showroom Earth Store', date: '18/02/2025', qty: 3, total: 42000000, status: 'Đang sản xuất' },
  { id: '#SE-D2404', customer: 'Villa Garden HCM', date: '20/02/2025', qty: 2, total: 35000000, status: 'Chờ xác nhận' },
];

const DEALER_DEBT = [
  { id: 'CN-001', invoice: '#SE-D2401', amount: 62000000, due: '28/02/2025', status: 'Trong hạn' },
  { id: 'CN-002', invoice: '#SE-D2402', amount: 136000000, due: '15/03/2025', status: 'Trong hạn' },
  { id: 'CN-003', invoice: '#SE-2409', amount: 18000000, due: '10/02/2025', status: 'Quá hạn' },
];

export default function Page() {
  const { section = 'dashboard' } = useParams();
  const [sent, setSent] = useState(false);

  const content = useMemo(() => {
    switch (section) {
      case 'points':
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Số dư điểm</Typography>
              <Stack direction="row" spacing={2} alignItems="baseline">
                <Typography variant="h2" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>2.450</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>điểm · Hạng Earth</Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Tích lũy 5.550 điểm nữa để lên hạng Forest — hưởng chiết khấu cao hơn và ưu đãi riêng.</Typography>
            </Stack>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h6">Lịch sử điểm</Typography>
              <TableContainer component={Paper} variant="outlined" sx={{ border: 'none' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ '& th': { fontWeight: 'fontWeightBold', color: 'text.secondary' } }}>
                      <TableCell>Ngày</TableCell>
                      <TableCell>Hành động</TableCell>
                      <TableCell align="right">Điểm</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {POINTS_HISTORY.map((row) => (
                      <TableRow key={row.date + row.action} hover>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.action}</TableCell>
                        <TableCell align="right" sx={{ color: row.type === 'earn' ? SOFA6_COLORS.sage : SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{row.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        );

      case 'vouchers':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {VOUCHERS.map((v, index) => (
              <Grid key={v.code} xs={12} sm={6} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  transition={{ delay: index * 0.06 }}
                  spacing={2}
                  sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, opacity: v.status === 'expired' ? 0.5 : 1 }}
                >
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon="solar:ticket-bold-duotone" width={24} />
                    </Box>
                    {v.status === 'expired' ? (
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Hết hạn</Typography>
                    ) : (
                      <Typography variant="caption" sx={{ color: SOFA6_COLORS.sage, fontWeight: 'fontWeightBold' }}>Hoạt động</Typography>
                    )}
                  </Stack>
                  <Typography variant="h6">{v.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{v.desc}</Typography>
                  <Divider />
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{v.code}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>HSD: {v.expiry}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );

      case 'complaints':
        return (
          <Grid container spacing={{ xs: 4, md: 5 }}>
            <Grid xs={12} md={7}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h5">Gửi khiếu nại</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #SE20250218001" /></Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Loại khiếu nại" defaultValue="">
                      <MenuItem value="quality">Chất lượng sản phẩm</MenuItem>
                      <MenuItem value="shipping">Giao hàng</MenuItem>
                      <MenuItem value="warranty">Bảo hành</MenuItem>
                      <MenuItem value="other">Khác</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid xs={12}><TextField fullWidth label="Nội dung khiếu nại" multiline rows={4} /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                  {sent ? 'Đã gửi khiếu nại' : 'Gửi khiếu nại'}
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={5}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h6">Khiếu nại gần đây</Typography>
                <Stack spacing={2} divider={<Divider flexItem />}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2">#SE20250120003</Typography>
                      <Typography variant="caption" sx={{ color: SOFA6_COLORS.sage, fontWeight: 'fontWeightBold' }}>Đã giải quyết</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Đệm sofa hơi xẹp sau 2 tháng — đã thay đệm mới miễn phí.</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2">#SE20250115002</Typography>
                      <Typography variant="caption" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>Đang xử lý</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Màu linen nhạt hơn ảnh — đang kiểm tra với xưởng.</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        );

      case 'dealer':
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold', fontSize: 22 }}>SE</Box>
                  <Stack>
                    <Typography variant="h5">Đại lý Earth Store</Typography>
                    <Typography variant="body2" sx={{ color: SOFA6_COLORS.terracotta }}>Earth Partner · Hà Nội</Typography>
                  </Stack>
                </Stack>
                <Button component={RouterLink} href="/sofa6/member/dealer-orders" variant="outlined" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>Xem đơn hàng</Button>
              </Stack>
            </Stack>
            <Grid container spacing={3} component={MotionViewport}>
              {DEALER_STATS.map((stat, index) => (
                <Grid key={stat.label} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon={stat.icon} width={24} />
                    </Box>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{stat.label}</Typography>
                    <Typography variant="h5" sx={{ color: SOFA6_COLORS.terracotta }}>{stat.value}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{stat.sub}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        );

      case 'dealer-orders':
        return (
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h5">Danh sách đơn hàng đại lý</Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: (t) => t.customShadows.card, border: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ '& th': { fontWeight: 'fontWeightBold', color: 'text.secondary', bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) } }}>
                    <TableCell>Mã đơn</TableCell>
                    <TableCell>Khách hàng</TableCell>
                    <TableCell>Ngày</TableCell>
                    <TableCell align="center">SL</TableCell>
                    <TableCell align="right">Tổng tiền</TableCell>
                    <TableCell align="center">Trạng thái</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DEALER_ORDERS.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell sx={{ fontWeight: 'fontWeightBold' }}>{row.id}</TableCell>
                      <TableCell>{row.customer}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell align="center">{row.qty}</TableCell>
                      <TableCell align="right">{formatSofa6Price(row.total)}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'inline-block', px: 1.5, py: 0.5, borderRadius: 1, bgcolor: row.status === 'Đã giao' ? varAlpha(SOFA6_COLORS.sage, 0.12) : row.status === 'Quá hạn' ? varAlpha(SOFA6_COLORS.terracotta, 0.12) : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12) }}>
                          <Typography variant="caption" sx={{ color: row.status === 'Đã giao' ? SOFA6_COLORS.sage : row.status === 'Quá hạn' ? SOFA6_COLORS.terracotta : 'text.secondary', fontWeight: 'fontWeightBold' }}>{row.status}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        );

      case 'dealer-debt':
        return (
          <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h5">Bảng công nợ</Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: (t) => t.customShadows.card, border: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ '& th': { fontWeight: 'fontWeightBold', color: 'text.secondary', bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) } }}>
                    <TableCell>Mã công nợ</TableCell>
                    <TableCell>Hóa đơn</TableCell>
                    <TableCell align="right">Số tiền</TableCell>
                    <TableCell>Ngày đến hạn</TableCell>
                    <TableCell align="center">Trạng thái</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DEALER_DEBT.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell sx={{ fontWeight: 'fontWeightBold' }}>{row.id}</TableCell>
                      <TableCell>{row.invoice}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa6Price(row.amount)}</TableCell>
                      <TableCell>{row.due}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'inline-block', px: 1.5, py: 0.5, borderRadius: 1, bgcolor: row.status === 'Quá hạn' ? varAlpha(SOFA6_COLORS.terracotta, 0.12) : varAlpha(SOFA6_COLORS.sage, 0.12) }}>
                          <Typography variant="caption" sx={{ color: row.status === 'Quá hạn' ? SOFA6_COLORS.terracotta : SOFA6_COLORS.sage, fontWeight: 'fontWeightBold' }}>{row.status}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Typography variant="subtitle1">Tổng công nợ:</Typography>
              <Typography variant="h6" sx={{ color: SOFA6_COLORS.terracotta }}>{formatSofa6Price(216000000)}</Typography>
            </Stack>
          </Stack>
        );

      case 'dashboard':
      default:
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold', fontSize: 22 }}>NA</Box>
                  <Stack>
                    <Typography variant="h5">Xin chào, Nguyễn Minh Anh</Typography>
                    <Typography variant="body2" sx={{ color: SOFA6_COLORS.terracotta }}>Thành viên Earth · Sofa Earth</Typography>
                  </Stack>
                </Stack>
                <Button variant="outlined" startIcon={<Iconify icon="solar:settings-bold-duotone" />}>Cài đặt</Button>
              </Stack>
            </Stack>
            <Grid container spacing={3} component={MotionViewport}>
              {DASHBOARD_CARDS.map((card, index) => (
                <Grid key={card.label} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon={card.icon} width={24} />
                    </Box>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{card.label}</Typography>
                    <Typography variant="h5" sx={{ color: SOFA6_COLORS.terracotta }}>{card.value}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{card.sub}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        );
    }
  }, [section]);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Khu vực thành viên"
        subtitle="Quản lý tài khoản, điểm tích lũy, voucher, khiếu nại và thông tin đại lý Sofa Earth của bạn."
        image={SOFA6_PAGE_IMAGES.team}
        overline="Thành viên"
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Sidebar nav */}
          <Grid xs={12} md={3}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={1} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, position: 'sticky', top: 100 }}>
              {NAV.map((item) => {
                const active = item.section === section;
                return (
                  <Button
                    key={item.section}
                    component={RouterLink}
                    href={item.href}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      gap: 2,
                      px: 2,
                      py: 1.5,
                      borderRadius: 1.5,
                      textTransform: 'none',
                      color: active ? 'common.white' : 'text.primary',
                      bgcolor: active ? SOFA6_COLORS.terracotta : 'transparent',
                      '&:hover': { bgcolor: active ? SOFA6_COLORS.terracotta : varAlpha(SOFA6_COLORS.terracotta, 0.06) },
                    }}
                  >
                    <Iconify icon={item.icon} width={22} />
                    <Typography variant="body2" sx={{ fontWeight: active ? 'fontWeightBold' : 'fontWeightMedium' }}>{item.label}</Typography>
                  </Button>
                );
              })}
            </Stack>
          </Grid>

          {/* Content */}
          <Grid xs={12} md={9}>
            {content}
          </Grid>
        </Grid>
      </Sofa6Section>
    </>
  );
}
