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
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Đăng ký — LUXE Sofa' };

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Đăng ký"
        subtitle="Tạo tài khoản LUXE Sofa để tận hưởng ưu đãi thành viên và theo dõi đơn hàng."
        image={SOFA2_PAGE_IMAGES.team}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          spacing={3}
          sx={{ maxWidth: 480, mx: 'auto', p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
        >
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Box sx={{ width: 56, height: 56, mx: 'auto', display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
              <Iconify icon="solar:user-plus-bold-duotone" width={28} />
            </Box>
            <Typography variant="h5">Tạo tài khoản mới</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Điền thông tin để đăng ký thành viên LUXE Sofa.</Typography>
          </Stack>

          <Stack spacing={2.5}>
            <TextField fullWidth label="Họ và tên" placeholder="Nguyễn Minh Anh" />
            <TextField fullWidth label="Số điện thoại" placeholder="09xx xxx xxx" />
            <TextField fullWidth label="Email" type="email" placeholder="anh.nguyen@email.com" />
            <TextField
              fullWidth
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              placeholder="Tối thiểu 8 ký tự"
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
            <TextField
              fullWidth
              label="Xác nhận mật khẩu"
              type={showPassword ? 'text' : 'password'}
              placeholder="Nhập lại mật khẩu"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography variant="body2">
                  Tôi đồng ý với{' '}
                  <Box component={RouterLink} href="/sofa2/policy/terms" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Điều khoản sử dụng
                  </Box>{' '}
                  và{' '}
                  <Box component={RouterLink} href="/sofa2/policy" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Chính sách bảo mật
                  </Box>
                </Typography>
              }
            />
            <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:user-plus-bold-duotone" />} component={RouterLink} href="/sofa2/account">
              Đăng ký tài khoản
            </Button>
          </Stack>

          <Divider>hoặc</Divider>

          <Stack direction="row" justifyContent="center" spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Đã có tài khoản?</Typography>
            <Button component={RouterLink} href="/sofa2/login" size="small">
              Đăng nhập
            </Button>
          </Stack>
        </Stack>
      </Sofa2Section>
    </>
  );
}
