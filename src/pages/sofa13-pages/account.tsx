import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_PRODUCTS, sofa13FormatPrice as formatSofa13Price } from 'src/sections/sofa13-pages/sofa13-pages-data';

const ACCOUNT_SECTIONS = [
  { slug: 'profile', label: 'Hồ sơ cá nhân', icon: 'solar:user-bold-duotone' },
  { slug: 'orders', label: 'Đơn hàng của tôi', icon: 'solar:bag-bold-duotone' },
  { slug: 'addresses', label: 'Địa chỉ giao hàng', icon: 'solar:map-point-bold-duotone' },
  { slug: 'wishlist', label: 'Yêu thích', icon: 'solar:heart-bold-duotone' },
  { slug: 'history', label: 'Lịch sử giao dịch', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'warranty', label: 'Phiếu bảo hành', icon: 'solar:shield-check-bold-duotone' },
];

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'profile';

  return (
    <>
      <Helmet>
        <title>Tài khoản — Sofa13</title>
      </Helmet>

      <Sofa13PageHero overline="TÀI KHOẢN" title={<>TÀI <span>KHOẢN</span></>} subtitle="Quản lý thông tin cá nhân, đơn hàng, bảo hành." image={SOFA13_PAGE_IMAGES.contact} />

      <Sofa13Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={1} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {ACCOUNT_SECTIONS.map((s) => (
                <Stack key={s.slug} component={RouterLink} href={`/sofa13/account/${s.slug === 'profile' ? '' : s.slug}`} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 30, textDecoration: 'none', bgcolor: section === s.slug ? varAlpha(SOFA13_COLORS.gold, 0.08) : 'transparent', '&:hover': { bgcolor: varAlpha(SOFA13_COLORS.gold, 0.04) } }}>
                  <Iconify icon={s.icon} width={20} sx={{ color: SOFA13_COLORS.gold }} />
                  <Typography variant="body2" sx={{ fontWeight: section === s.slug ? 'fontWeightBold' : 'fontWeightMedium', color: section === s.slug ? SOFA13_COLORS.gold : 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              {section === 'profile' || section === undefined ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Hồ sơ cá nhân</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" defaultValue="email@example.com" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Địa chỉ" defaultValue="123 Nguyễn Trãi, Hà Nội" /></Grid>
                  </Grid>
                  <Button variant="contained" sx={{ borderRadius: 30, alignSelf: 'flex-start', bgcolor: SOFA13_COLORS.gold, color: 'common.white', '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Cập nhật</Button>
                </>
              ) : section === 'orders' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng của tôi</Typography>
                  {[1, 2, 3].map((i) => (
                    <Stack key={i} spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng #SF9-{1000 + i}</Typography>
                        <Typography variant="caption" sx={{ color: SOFA13_COLORS.emeraldBright, fontWeight: 'fontWeightBold' }}>Đã giao</Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{formatSofa13Price(12000000 + i * 1000000)}</Typography>
                    </Stack>
                  ))}
                </>
              ) : section === 'wishlist' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Yêu thích</Typography>
                  <Grid container spacing={2}>
                    {SOFA13_PAGE_PRODUCTS.slice(0, 4).map((p) => (
                      <Grid key={p.id} xs={6} md={3}>
                        <Stack component={RouterLink} href={`/sofa13/products/${p.slug}`} spacing={1} sx={{ textDecoration: 'none' }}>
                          <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                            <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                          </Box>
                          <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{p.name}</Typography>
                          <Typography variant="caption" sx={{ color: SOFA13_COLORS.gold }}>{formatSofa13Price(p.price)}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>{ACCOUNT_SECTIONS.find((s) => s.slug === section)?.label || 'Tài khoản'}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Nội dung đang được cập nhật...</Typography>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
