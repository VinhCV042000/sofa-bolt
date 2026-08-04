import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3PageHero, Sofa3Section } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PAGE_IMAGES } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Tài khoản - Sofa Terra' };

const MENU = [
  { icon: 'solar:user-bold-duotone', title: 'Hồ sơ cá nhân', desc: 'Cập nhật thông tin cá nhân' },
  { icon: 'solar:cart-bold-duotone', title: 'Đơn hàng của tôi', desc: 'Lịch sử đơn hàng' },
  { icon: 'solar:heart-bold-duotone', title: 'Yêu thích', desc: 'Sản phẩm yêu thích' },
  { icon: 'solar:wallet-bold-duotone', title: 'Lịch sử giao dịch', desc: 'Theo dõi giao dịch' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Phiếu bảo hành', desc: 'Quản lý bảo hành' },
  { icon: 'solar:map-point-bold-duotone', title: 'Địa chỉ giao hàng', desc: 'Sổ địa chỉ' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Tài khoản" title="Tài khoản khách hàng" subtitle="Quản lý thông tin và đơn hàng của bạn." image={SOFA3_PAGE_IMAGES.contact} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={4}>
            <Stack spacing={3} alignItems="center" sx={{ p: 4, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'success.main', fontSize: 32 }}>M</Avatar>
              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h6">Mai Thị Hồng</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>mai.hong@email.com</Typography>
              </Stack>
              <Button variant="outlined" color="success" size="small" startIcon={<Iconify icon="solar:settings-bold-duotone" />}>Chỉnh sửa hồ sơ</Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={8}>
            <Grid container spacing={2}>
              {MENU.map((item, index) => (
                <Grid key={item.title} xs={12} sm={6}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.06 }} direction="row" spacing={2} alignItems="center" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${(t.vars ?? t).palette.grey['500Channel'] ? 'rgba(145,158,171,0.12)' : 'rgba(145,158,171,0.12)'}` }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'success.lighter', color: 'success.main' }}>
                      <Iconify icon={item.icon} width={22} />
                    </Box>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2">{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Sofa3Section>
    </>
  );
}
