import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Quên mật khẩu — LUXE Sofa' };

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Quên mật khẩu"
        subtitle="Nhập email đăng ký để nhận liên kết đặt lại mật khẩu."
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
          {!sent ? (
            <>
              <Stack spacing={1} sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 56, height: 56, mx: 'auto', display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'warning.main', color: 'common.white' }}>
                  <Iconify icon="solar:lock-keyhole-bold-duotone" width={28} />
                </Box>
                <Typography variant="h5">Đặt lại mật khẩu</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chúng tôi sẽ gửi email hướng dẫn đặt lại mật khẩu cho bạn.</Typography>
              </Stack>

              <Stack spacing={2.5}>
                <TextField fullWidth label="Email đăng ký" type="email" placeholder="anh.nguyen@email.com" />
                <Button variant="contained" size="large" fullWidth startIcon={<Iconify icon="solar:letter-bold-duotone" />} onClick={() => setSent(true)}>
                  Gửi liên kết đặt lại
                </Button>
              </Stack>
            </>
          ) : (
            <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 3 }}>
              <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: 'success.main', color: 'common.white' }}>
                <Iconify icon="solar:check-circle-bold-duotone" width={36} />
              </Box>
              <Typography variant="h5">Email đã được gửi!</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Vui lòng kiểm tra hộp thư và làm theo hướng dẫn để đặt lại mật khẩu.</Typography>
              <Button component={RouterLink} href="/sofa2/login" variant="outlined" size="large" startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
                Quay lại đăng nhập
              </Button>
            </Stack>
          )}

          <Stack direction="row" justifyContent="center" spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Nhớ mật khẩu?</Typography>
            <Button component={RouterLink} href="/sofa2/login" size="small">Đăng nhập</Button>
          </Stack>
        </Stack>
      </Sofa2Section>
    </>
  );
}
