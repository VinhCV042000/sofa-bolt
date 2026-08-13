import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES, sofa15FormatPrice } from 'src/sections/sofa15-pages/sofa15-pages-data';

const CUSTOMER_MENU = [
  { slug: 'dashboard', label: 'Dashboard', icon: 'solar:widget-bold-duotone' },
  { slug: 'profile', label: 'Hồ sơ', icon: 'solar:user-bold-duotone' },
  { slug: 'orders', label: 'Đơn hàng', icon: 'solar:bag-bold-duotone' },
  { slug: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
  { slug: 'points', label: 'Điểm tích lũy', icon: 'solar:star-bold-duotone' },
  { slug: 'vouchers', label: 'Voucher', icon: 'solar:ticket-bold-duotone' },
  { slug: 'complaints', label: 'Khiếu nại', icon: 'solar:chat-square-bold-duotone' },
];

const DEALER_MENU = [
  { slug: 'dealer', label: 'Dashboard đại lý', icon: 'solar:widget-5-bold-duotone' },
  { slug: 'dealer-pricing', label: 'Chính sách giá', icon: 'solar:tag-price-bold-duotone' },
  { slug: 'dealer-quotes', label: 'Báo giá', icon: 'solar:document-bold-duotone' },
  { slug: 'dealer-orders', label: 'Đơn hàng đại lý', icon: 'solar:box-bold-duotone' },
  { slug: 'dealer-debt', label: 'Công nợ', icon: 'solar:wallet-money-bold-duotone' },
  { slug: 'dealer-materials', label: 'Tài liệu bán hàng', icon: 'solar:folder-bold-duotone' },
];

const STATS: Record<string, { label: string; value: string }[]> = {
  customer: [
    { label: 'Đơn hàng', value: '08' },
    { label: 'Điểm tích lũy', value: '2.450' },
    { label: 'Voucher khả dụng', value: '03' },
    { label: 'Bảo hành hiệu lực', value: '05' },
  ],
  dealer: [
    { label: 'Đơn hàng tháng', value: '24' },
    { label: 'Doanh số tháng', value: sofa15FormatPrice(860000000) },
    { label: 'Chiết khấu', value: '32%' },
    { label: 'Công nợ', value: sofa15FormatPrice(120000000) },
  ],
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'dashboard';
  const isDealer = section.startsWith('dealer');
  const stats = isDealer ? STATS.dealer : STATS.customer;
  const label =
    [...CUSTOMER_MENU, ...DEALER_MENU].find((m) => m.slug === section)?.label || 'Dashboard';

  const menuBlock = (title: string, items: typeof CUSTOMER_MENU) => (
    <Stack spacing={1}>
      <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 3 }}>
        {title}
      </Typography>
      {items.map((item) => {
        const active = item.slug === section;
        return (
          <Stack
            key={item.slug}
            component={RouterLink}
            href={`/sofa15/member/${item.slug}`}
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              p: 1.5,
              textDecoration: 'none',
              border: `1px solid ${varAlpha(SOFA15_COLORS.gold, active ? 0.6 : 0.15)}`,
              bgcolor: active ? varAlpha(SOFA15_COLORS.gold, 0.1) : 'transparent',
              '&:hover': { borderColor: SOFA15_COLORS.gold },
            }}
          >
            <Iconify icon={item.icon} width={20} sx={{ color: SOFA15_COLORS.gold }} />
            <Typography variant="body2" sx={{ color: active ? SOFA15_COLORS.gold : varAlpha('#FFFFFF', 0.6) }}>
              {item.label}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );

  return (
    <>
      <Helmet>
        <title>Khu vực thành viên — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="THÀNH VIÊN"
        title={
          <>
            KHU VỰC <span>THÀNH VIÊN</span>
          </>
        }
        subtitle="Không gian riêng cho khách hàng thân thiết và hệ thống đại lý Maison Gatsby."
        image={SOFA15_PAGE_IMAGES.b2b}
      />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={3} sx={{ position: 'sticky', top: 96 }}>
              {menuBlock('Khách hàng', CUSTOMER_MENU)}
              {menuBlock('Đại lý', DEALER_MENU)}
            </Stack>
          </Grid>

          <Grid xs={12} md={9}>
            <Stack spacing={4}>
              <Typography
                variant="h4"
                sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
              >
                {label}
              </Typography>

              <Grid container spacing={3}>
                {stats.map((stat) => (
                  <Grid key={stat.label} xs={6} md={3}>
                    <Stack
                      spacing={1}
                      sx={{ p: 3, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}
                    >
                      <Typography variant="h5" sx={{ color: SOFA15_COLORS.gold, fontFamily: theme.typography.fontSecondaryFamily }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>
                        {stat.label}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack spacing={2}>
                {[1, 2, 3, 4].map((i) => (
                  <Stack
                    key={i}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ p: 3, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.15)}` }}
                  >
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                        {isDealer ? `Đơn đại lý #DL-${300 + i}` : `Hoạt động gần đây #${i}`}
                      </Typography>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>
                        {isDealer ? '12 sản phẩm · Đã xác nhận' : `Cập nhật ngày 1${i}/05/2025`}
                      </Typography>
                    </Stack>
                    <Box sx={{ color: SOFA15_COLORS.gold }}>
                      <Iconify icon="solar:alt-arrow-right-bold-duotone" width={22} />
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa15Section>
    </>
  );
}