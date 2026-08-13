import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';

const CUSTOMER_ITEMS = [
  { slug: 'dashboard', label: 'Dashboard', icon: 'solar:widget-bold-duotone' },
  { slug: 'profile', label: 'Hồ sơ', icon: 'solar:user-bold-duotone' },
  { slug: 'orders', label: 'Đơn hàng', icon: 'solar:bag-bold-duotone' },
  { slug: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
  { slug: 'points', label: 'Điểm tích lũy', icon: 'solar:star-bold-duotone' },
  { slug: 'vouchers', label: 'Voucher', icon: 'solar:ticket-bold-duotone' },
  { slug: 'complaints', label: 'Khiếu nại', icon: 'solar:chat-square-bold-duotone' },
];

const DEALER_ITEMS = [
  { slug: 'dealer', label: 'Dashboard đại lý', icon: 'solar:widget-bold-duotone' },
  { slug: 'dealer-pricing', label: 'Chính sách giá', icon: 'solar:tag-price-bold-duotone' },
  { slug: 'dealer-quote', label: 'Báo giá', icon: 'solar:document-bold-duotone' },
  { slug: 'dealer-orders', label: 'Đơn hàng đại lý', icon: 'solar:bag-bold-duotone' },
  { slug: 'dealer-debt', label: 'Công nợ', icon: 'solar:wallet-bold-duotone' },
  { slug: 'dealer-docs', label: 'Tài liệu bán hàng', icon: 'solar:file-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'dashboard';

  return (
    <>
      <Helmet>
        <title>Khu vực thành viên — Sofa11</title>
      </Helmet>

      <Sofa11PageHero overline="THÀNH VIÊN" title={<>KHU VỰC <span>THÀNH VIÊN</span></>} subtitle="Dashboard khách hàng và đại lý Sofa11." image={SOFA11_PAGE_IMAGES.contact} />

      <Sofa11Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={1} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>KHÁCH HÀNG</Typography>
              {CUSTOMER_ITEMS.map((s) => (
                <Stack key={s.slug} component={RouterLink} href={`/sofa11/member/${s.slug === 'dashboard' ? '' : s.slug}`} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 30, textDecoration: 'none', bgcolor: section === s.slug ? varAlpha(SOFA11_COLORS.magenta, 0.08) : 'transparent', '&:hover': { bgcolor: varAlpha(SOFA11_COLORS.magenta, 0.04) } }}>
                  <Iconify icon={s.icon} width={20} sx={{ color: SOFA11_COLORS.magenta }} />
                  <Typography variant="body2" sx={{ fontWeight: section === s.slug ? 'fontWeightBold' : 'fontWeightMedium', color: section === s.slug ? SOFA11_COLORS.magenta : 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              ))}
              <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2, mt: 2 }}>ĐẠI LÝ</Typography>
              {DEALER_ITEMS.map((s) => (
                <Stack key={s.slug} component={RouterLink} href={`/sofa11/member/${s.slug}`} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 30, textDecoration: 'none', bgcolor: section === s.slug ? varAlpha(SOFA11_COLORS.magenta, 0.08) : 'transparent', '&:hover': { bgcolor: varAlpha(SOFA11_COLORS.magenta, 0.04) } }}>
                  <Iconify icon={s.icon} width={20} sx={{ color: SOFA11_COLORS.magenta }} />
                  <Typography variant="body2" sx={{ fontWeight: section === s.slug ? 'fontWeightBold' : 'fontWeightMedium', color: section === s.slug ? SOFA11_COLORS.magenta : 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              {section === 'dashboard' || section === undefined ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Dashboard</Typography>
                  <Grid container spacing={3}>
                    {[
                      { label: 'Đơn hàng', value: '12', icon: 'solar:bag-bold-duotone' },
                      { label: 'Điểm tích lũy', value: '1,250', icon: 'solar:star-bold-duotone' },
                      { label: 'Voucher', value: '5', icon: 'solar:ticket-bold-duotone' },
                      { label: 'Phiếu bảo hành', value: '3', icon: 'solar:shield-check-bold-duotone' },
                    ].map((stat) => (
                      <Grid key={stat.label} xs={6} md={3}>
                        <Stack spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                          <Iconify icon={stat.icon} width={32} sx={{ color: SOFA11_COLORS.magenta }} />
                          <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', color: SOFA11_COLORS.magenta }}>{stat.value}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>{[...CUSTOMER_ITEMS, ...DEALER_ITEMS].find((s) => s.slug === section)?.label || 'Thành viên'}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Nội dung đang được cập nhật...</Typography>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>
    </>
  );
}
