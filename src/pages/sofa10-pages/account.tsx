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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import { formatSofa10Price, SOFA10_PAGE_IMAGES, SOFA10_PAGE_PRODUCTS } from 'src/sections/sofa10-pages/sofa10-pages-data';

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
        <title>Tài khoản — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="TÀI KHOẢN" title={<>TÀI <span>KHOẢN</span></>} subtitle="Quản lý thông tin cá nhân, đơn hàng, bảo hành." image={SOFA10_PAGE_IMAGES.contact} />

      <Sofa10Section>
        <Grid container spacing={4}>
          <Grid xs={12} md={3}>
            <Stack spacing={1} component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ position: 'sticky', top: 80 }}>
              {ACCOUNT_SECTIONS.map((s) => (
                <Stack key={s.slug} component={RouterLink} href={`/sofa10/account/${s.slug === 'profile' ? '' : s.slug}`} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: 30, textDecoration: 'none', bgcolor: section === s.slug ? varAlpha(SOFA10_COLORS.wood, 0.08) : 'transparent', '&:hover': { bgcolor: varAlpha(SOFA10_COLORS.wood, 0.04) } }}>
                  <Iconify icon={s.icon} width={20} sx={{ color: SOFA10_COLORS.wood }} />
                  <Typography variant="body2" sx={{ fontWeight: section === s.slug ? 'fontWeightNormal' : 'fontWeightMedium', color: section === s.slug ? SOFA10_COLORS.wood : 'text.secondary' }}>{s.label}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={9}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              {section === 'profile' || section === undefined ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Hồ sơ cá nhân</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" defaultValue="Nguyễn Văn A" /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" defaultValue="0901 234 567" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Email" defaultValue="email@example.com" /></Grid>
                    <Grid xs={12}><TextField fullWidth label="Địa chỉ" defaultValue="123 Nguyễn Trãi, Hà Nội" /></Grid>
                  </Grid>
                  <Button variant="contained" sx={{ borderRadius: 30, alignSelf: 'flex-start', bgcolor: SOFA10_COLORS.wood, color: 'common.white', '&:hover': { bgcolor: SOFA10_COLORS.woodLight } }}>Cập nhật</Button>
                </>
              ) : section === 'orders' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Đơn hàng của tôi</Typography>
                  {[1, 2, 3].map((i) => (
                    <Stack key={i} spacing={2} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>Đơn hàng #SF9-{1000 + i}</Typography>
                        <Typography variant="caption" sx={{ color: SOFA10_COLORS.moss, fontWeight: 'fontWeightNormal' }}>Đã giao</Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{formatSofa10Price(12000000 + i * 1000000)}</Typography>
                    </Stack>
                  ))}
                </>
              ) : section === 'wishlist' ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>Yêu thích</Typography>
                  <Grid container spacing={2}>
                    {SOFA10_PAGE_PRODUCTS.slice(0, 4).map((p) => (
                      <Grid key={p.id} xs={6} md={3}>
                        <Stack component={RouterLink} href={`/sofa10/products/${p.slug}`} spacing={1} sx={{ textDecoration: 'none' }}>
                          <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                            <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                          </Box>
                          <Typography variant="caption" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary' }}>{p.name}</Typography>
                          <Typography variant="caption" sx={{ color: SOFA10_COLORS.wood }}>{formatSofa10Price(p.price)}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal' }}>{ACCOUNT_SECTIONS.find((s) => s.slug === section)?.label || 'Tài khoản'}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Nội dung đang được cập nhật...</Typography>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Sofa10Section>
    </>
  );
}
