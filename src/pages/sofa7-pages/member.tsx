import { m } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { formatSofa7Price, SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Khu vực thành viên — Sofa7' };

const NAV = [
  { section: 'dashboard', label: 'Tổng quan', icon: 'solar:widget-bold-duotone', href: '/sofa7/member/dashboard' },
  { section: 'points', label: 'Điểm tích lũy', icon: 'solar:gift-bold-duotone', href: '/sofa7/member/points' },
  { section: 'vouchers', label: 'Voucher', icon: 'solar:ticket-bold-duotone', href: '/sofa7/member/vouchers' },
  { section: 'complaints', label: 'Khiếu nại', icon: 'solar:chat-square-bold-duotone', href: '/sofa7/member/complaints' },
  { section: 'dealer', label: 'Đại lý', icon: 'solar:hand-shake-bold-duotone', href: '/sofa7/member/dealer' },
  { section: 'dealer-orders', label: 'Đơn hàng đại lý', icon: 'solar:bag-bold-duotone', href: '/sofa7/member/dealer-orders' },
  { section: 'dealer-debt', label: 'Công nợ', icon: 'solar:wallet-bold-duotone', href: '/sofa7/member/dealer-debt' },
];

const DASHBOARD_CARDS = [
  { icon: 'solar:gift-bold-duotone', label: 'Điểm tích lũy', value: '3.250', sub: 'Hạng Street' },
  { icon: 'solar:bag-bold-duotone', label: 'Đơn hàng', value: '15', sub: 'Đã hoàn tất' },
  { icon: 'solar:ticket-bold-duotone', label: 'Voucher', value: '6', sub: 'Đang hoạt động' },
  { icon: 'solar:wallet-bold-duotone', label: 'Tổng chi tiêu', value: formatSofa7Price(112000000), sub: 'Từ 2024' },
];

const POINTS_HISTORY = [
  { date: '15/02/2025', action: 'Mua Sofa Brick Leather', points: '+2.250', type: 'earn' },
  { date: '10/02/2025', action: 'Đổi voucher giảm 500k', points: '-500', type: 'spend' },
  { date: '02/02/2025', action: 'Mua Sofa Street Red', points: '+1.390', type: 'earn' },
  { date: '20/01/2025', action: 'Đánh giá sản phẩm', points: '+50', type: 'earn' },
  { date: '15/01/2025', action: 'Mua Sofa Neon Orange', points: '+1.650', type: 'earn' },
];

const VOUCHERS = [
  { code: 'STREET50', title: 'Giảm 50.000đ', desc: 'Đơn từ 5.000.000đ', expiry: '31/03/2025', status: 'active' },
  { code: 'NEON100', title: 'Giảm 100.000đ', desc: 'Đơn từ 10.000.000đ', expiry: '30/04/2025', status: 'active' },
  { code: 'FREESHIP24', title: 'Miễn phí vận chuyển', desc: '24h nội thành', expiry: '31/12/2025', status: 'active' },
  { code: 'URBAN200', title: 'Giảm 200.000đ', desc: 'Đơn từ 20.000.000đ', expiry: '15/02/2025', status: 'expired' },
];

const DEALER_STATS = [
  { icon: 'solar:hand-money-bold-duotone', label: 'Doanh số tháng', value: formatSofa7Price(185000000), sub: '+18% so với tháng trước' },
  { icon: 'solar:bag-bold-duotone', label: 'Đơn hàng', value: '32', sub: 'Đã giao tháng này' },
  { icon: 'solar:scale-bold-duotone', label: 'Chiết khấu', value: '40%', sub: 'Hạng Street Partner' },
  { icon: 'solar:wallet-bold-duotone', label: 'Công nợ', value: formatSofa7Price(25000000), sub: 'Trong hạn' },
];

const DEALER_ORDERS = [
  { id: '#SF7-D2501', customer: 'Café Street Zone 9', date: '12/02/2025', qty: 4, total: 62000000, status: 'Đã giao' },
  { id: '#SF7-D2502', customer: 'Loft District 7', date: '15/02/2025', qty: 8, total: 136000000, status: 'Đang giao' },
  { id: '#SF7-D2503', customer: 'Hotel Concrete HN', date: '18/02/2025', qty: 3, total: 42000000, status: 'Đang sản xuất' },
  { id: '#SF7-D2504', customer: 'Studio Urban HCM', date: '20/02/2025', qty: 2, total: 35000000, status: 'Chờ xác nhận' },
];

const DEALER_DEBT = [
  { id: 'CN-001', invoice: '#SF7-D2501', amount: 62000000, due: '28/02/2025', status: 'Trong hạn' },
  { id: 'CN-002', invoice: '#SF7-D2502', amount: 136000000, due: '15/03/2025', status: 'Trong hạn' },
  { id: 'CN-003', invoice: '#SF7-2409', amount: 25000000, due: '10/02/2025', status: 'Quá hạn' },
];

export default function Page() {
  const { section = 'dashboard' } = useParams();
  const [sent, setSent] = useState(false);

  const content = useMemo(() => {
    switch (section) {
      case 'points':
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Số dư điểm</Typography>
              <Stack direction="row" spacing={2} alignItems="baseline">
                <Typography variant="h2" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`), fontWeight: 'fontWeightBold' }}>3.250</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>điểm · Hạng Street</Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Tích lũy 6.750 điểm nữa để lên hạng Urban Legend — hưởng chiết khấu cao hơn và ưu đãi riêng.</Typography>
            </Stack>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Lịch sử điểm</Typography>
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
                        <TableCell align="right" sx={{ color: row.type === 'earn' ? SOFA7_COLORS.cyan : SOFA7_COLORS.red, fontWeight: 'fontWeightBold' }}>{row.points}</TableCell>
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
                  sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, opacity: v.status === 'expired' ? 0.5 : 1 }}
                >
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                      <Iconify icon="solar:ticket-bold-duotone" width={24} />
                    </Box>
                    {v.status === 'expired' ? (
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Hết hạn</Typography>
                    ) : (
                      <Typography variant="caption" sx={{ color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>Hoạt động</Typography>
                    )}
                  </Stack>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{v.title}</Typography>
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
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Gửi khiếu nại</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label="Mã đơn hàng" placeholder="VD: #SF7-20250218001" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth select label="Loại khiếu nại" defaultValue="" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}>
                      <MenuItem value="quality">Chất lượng sản phẩm</MenuItem>
                      <MenuItem value="shipping">Giao hàng</MenuItem>
                      <MenuItem value="warranty">Bảo hành</MenuItem>
                      <MenuItem value="other">Khác</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid xs={12}><TextField fullWidth label="Nội dung khiếu nại" multiline rows={4} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} /></Grid>
                </Grid>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ width: 'fit-content', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} onClick={() => setSent(true)}>
                  {sent ? 'Đã gửi khiếu nại' : 'Gửi khiếu nại'}
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={5}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={2} sx={{ p: { xs: 3, md: 4 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Khiếu nại gần đây</Typography>
                <Stack spacing={2} divider={<Divider flexItem />}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2">#SF7-20250120003</Typography>
                      <Typography variant="caption" sx={{ color: SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>Đã giải quyết</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Đệm sofa hơi xẹp sau 2 tháng — đã thay đệm mới miễn phí.</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2">#SF7-20250115002</Typography>
                      <Typography variant="caption" sx={{ color: SOFA7_COLORS.red, fontWeight: 'fontWeightBold' }}>Đang xử lý</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Màu velvet nhạt hơn ảnh — đang kiểm tra với xưởng.</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        );

      case 'dealer':
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontSize: 22 }}>S7</Box>
                  <Stack>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Đại lý Street Store</Typography>
                    <Typography variant="body2" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>Street Partner · Hà Nội</Typography>
                  </Stack>
                </Stack>
                <Button component={RouterLink} href="/sofa7/member/dealer-orders" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:bag-bold-duotone" />}>Xem đơn hàng</Button>
              </Stack>
            </Stack>
            <Grid container spacing={3} component={MotionViewport}>
              {DEALER_STATS.map((stat, index) => (
                <Grid key={stat.label} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                      <Iconify icon={stat.icon} width={24} />
                    </Box>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{stat.label}</Typography>
                    <Typography variant="h5" sx={{ color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }}>{stat.value}</Typography>
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
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Danh sách đơn hàng đại lý</Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
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
                      <TableCell align="right" sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa7Price(row.total)}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'inline-block', px: 1.5, py: 0.5, borderRadius: 0, bgcolor: row.status === 'Đã giao' ? varAlpha(SOFA7_COLORS.cyan, 0.12) : row.status === 'Quá hạn' ? varAlpha(SOFA7_COLORS.red, 0.12) : (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.12) }}>
                          <Typography variant="caption" sx={{ color: row.status === 'Đã giao' ? SOFA7_COLORS.cyan : row.status === 'Quá hạn' ? SOFA7_COLORS.red : 'text.secondary', fontWeight: 'fontWeightBold' }}>{row.status}</Typography>
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
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Bảng công nợ</Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
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
                      <TableCell align="right" sx={{ fontWeight: 'fontWeightBold' }}>{formatSofa7Price(row.amount)}</TableCell>
                      <TableCell>{row.due}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'inline-block', px: 1.5, py: 0.5, borderRadius: 0, bgcolor: row.status === 'Quá hạn' ? varAlpha(SOFA7_COLORS.red, 0.12) : varAlpha(SOFA7_COLORS.cyan, 0.12) }}>
                          <Typography variant="caption" sx={{ color: row.status === 'Quá hạn' ? SOFA7_COLORS.red : SOFA7_COLORS.cyan, fontWeight: 'fontWeightBold' }}>{row.status}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>Tổng công nợ:</Typography>
              <Typography variant="h6" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(223000000)}</Typography>
            </Stack>
          </Stack>
        );

      case 'dashboard':
      default:
        return (
          <Stack spacing={5}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontSize: 22 }}>DV</Box>
                  <Stack>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Xin chào, Đặng Việt</Typography>
                    <Typography variant="body2" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>Thành viên Street · Sofa7</Typography>
                  </Stack>
                </Stack>
                <Button variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:settings-bold-duotone" />}>Cài đặt</Button>
              </Stack>
            </Stack>
            <Grid container spacing={3} component={MotionViewport}>
              {DASHBOARD_CARDS.map((card, index) => (
                <Grid key={card.label} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete }}>
                      <Iconify icon={card.icon} width={24} />
                    </Box>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>{card.label}</Typography>
                    <Typography variant="h5" sx={{ color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }}>{card.value}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{card.sub}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        );
    }
  }, [section, sent]);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="KHU VỰC THÀNH VIÊN"
        subtitle="Quản lý tài khoản, điểm tích lũy, voucher, khiếu nại và thông tin đại lý Sofa7 của bạn."
        image={SOFA7_PAGE_IMAGES.team}
        overline="Thành viên"
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Sidebar nav */}
          <Grid xs={12} md={3}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={1} sx={{ p: 2, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, position: 'sticky', top: 100 }}>
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
                      borderRadius: 0,
                      textTransform: 'none',
                      color: active ? SOFA7_COLORS.concrete : 'text.primary',
                      bgcolor: active ? SOFA7_COLORS.electric : 'transparent',
                      '&:hover': { bgcolor: active ? SOFA7_COLORS.electric : varAlpha(SOFA7_COLORS.electric, 0.08) },
                    }}
                  >
                    <Iconify icon={item.icon} width={22} />
                    <Typography variant="body2" sx={{ fontWeight: active ? 'fontWeightBold' : 'fontWeightMedium', textTransform: 'uppercase' }}>{item.label}</Typography>
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
      </Sofa7Section>
    </>
  );
}
