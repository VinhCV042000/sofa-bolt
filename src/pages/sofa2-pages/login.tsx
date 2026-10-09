import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đăng nhập — LUXE Sofa' };

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Đăng nhập"
        subtitle="Chào mừng bạn trở lại LUXE Sofa — đăng nhập để quản lý tài khoản và đơn hàng."
        image={SOFA2_PAGE_IMAGES.team}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          spacing={3}
          sx={{ maxWidth: 460, mx: 'auto', p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
        >
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Box sx={{ width: 56, height: 56, mx: 'auto', display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
              <Iconify icon="solar:user-bold-duotone" width={28} />
            </Box>
            <Typography variant="h5">Đăng nhập tài khoản</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nhập email và mật khẩu để tiếp tục.</Typography>
          </Stack>

          <Stack spacing={2.5} component={MotionViewport}>
            <TextField fullWidth label="Email" type="email" placeholder="anh.nguyen@email.com" />
            <TextField
              fullWidth
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} width={20} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <FormControlLabel control={<Checkbox size="small" />} label={<Typography variant="body2">Ghi nhớ đăng nhập</Typography>} />
              <Button component={RouterLink} href="/sofa2/forgot-password" size="small" sx={{ color: 'text.secondary' }}>
                Quên mật khẩu?
              </Button>
            </Stack>
            <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:login-3-bold-duotone" />} component={RouterLink} href="/sofa2/account">
              Đăng nhập
            </Button>
          </Stack>

          <Divider>hoặc</Divider>

          <Stack spacing={1.5}>
            <Button variant="outlined" size="large" fullWidth startIcon={<Iconify icon="solar:letter-bold-duotone" />}>
              Tiếp tục với Google
            </Button>
            <Button variant="outlined" size="large" fullWidth startIcon={<Iconify icon="solar:chat-square-like-bold-duotone" />}>
              Tiếp tục với Facebook
            </Button>
          </Stack>

          <Stack direction="row" justifyContent="center" spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chưa có tài khoản?</Typography>
            <Button component={RouterLink} href="/sofa2/register" size="small">
              Đăng ký ngay
            </Button>
          </Stack>
        </Stack>
      </Sofa2Section>
    </>
  );
}
