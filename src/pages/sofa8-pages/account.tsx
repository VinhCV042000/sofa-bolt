import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8PageHero, Sofa8Section } from 'src/sections/sofa8-pages/sofa8-page-hero';
import { SOFA8_PAGE_IMAGES, SOFA8_PAGE_PRODUCTS, formatSofa8Price } from 'src/sections/sofa8-pages/sofa8-pages-data';

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
        <title>Tài khoản — Sofa8</title>
      </Helmet>

      <Sofa8PageHero overline="TÀI KHOẢN" title={<>TÀI <span>KHOẢN</span></>} subtitle="Quản lý thông tin cá nhân, đơn hàng, bảo hành." image={SOFA8_PAGE_IMAGES.contact} />

      <Sofa8Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={1} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {ACCOUNT_SECTIONS.map((s) => (
                <Stack key={s.slug} component={RouterLink} href={`/sofa8/account/${s.slug === 'profile' ? '' : s.slug}`} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 2, textDecoration: 'none', bgcolor: section === s.slug ? varAlpha(SOFA8_COLORS.ocean, 0.08) : 'transparent', '&:hover': { bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.04) } }}>
                  <Iconify icon={s.icon} width={20} sx={{ color: SOFA8_COLORS.ocean }} />
                  <Typography variant="body2" sx={{ fontWeight: section === s.slug ? 'fontWeightBold' : 'fontWeightMedium', color: section === s.slug ? SOFA8_COLORS.ocean : 'text.secondary' }}>{s.label}</Typography>
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
                  <Button variant="contained" sx={{ alignSelf: 'flex-start', bgcolor: SOFA8_COLORS.coral, color: 'common.white', '&:hover': { bgcolor: SOFA8_COLORS.coralLight } }}>Cập nhật</Button>
                </>
              ) : section === 'orders' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng của tôi</Typography>
                  {[1, 2, 3].map((i) => (
                    <Stack key={i} spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Đơn hàng #SF8-{1000 + i}</Typography>
                        <Typography variant="caption" sx={{ color: SOFA8_COLORS.seafoam, fontWeight: 'fontWeightBold' }}>Đã giao</Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{formatSofa8Price(15000000 + i * 1000000)}</Typography>
                    </Stack>
                  ))}
                </>
              ) : section === 'wishlist' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>Yêu thích</Typography>
                  <Grid container spacing={2}>
                    {SOFA8_PAGE_PRODUCTS.slice(0, 4).map((p) => (
                      <Grid key={p.id} xs={6} md={3}>
                        <Stack component={RouterLink} href={`/sofa8/products/${p.slug}`} spacing={1} sx={{ textDecoration: 'none' }}>
                          <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                            <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                          </Box>
                          <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{p.name}</Typography>
                          <Typography variant="caption" sx={{ color: SOFA8_COLORS.ocean }}>{formatSofa8Price(p.price)}</Typography>
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
      </Sofa8Section>
    </>
  );
}
