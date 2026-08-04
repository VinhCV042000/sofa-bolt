import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Đăng ký đối tác B2B — LUXE Sofa' };

const BUSINESS_TYPES = ['Nhà thiết kế', 'Nhà thầu', 'Showroom', 'Đại lý phân phối'];

const BENEFITS = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu đến 40%', desc: 'Mức hoa hồng hấp dẫn theo doanh số.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Tài liệu, hình ảnh, co-branding.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo sản phẩm', desc: 'Đào tạo đội ngũ bán hàng.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành ưu đãi', desc: 'Chính sách bảo hành riêng cho B2B.' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Đăng ký đối tác"
        subtitle="Hoàn tất biểu mẫu để trở thành đối tác phân phối LUXE Sofa và nhận chính sách ưu đãi."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Đăng ký B2B"
      />

      <Sofa2Section>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Form */}
          <Grid xs={12} md={8}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Typography variant="h5">Thông tin doanh nghiệp</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tên công ty" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Người liên hệ" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Loại hình kinh doanh" defaultValue="">
                    {BUSINESS_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Mã số thuế" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Địa chỉ" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Lời nhắn" multiline rows={3} /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi đăng ký' : 'Gửi đăng ký'}
              </Button>
            </Stack>
          </Grid>

          {/* Benefits sidebar */}
          <Grid xs={12} md={4}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.06), height: 1 }}>
              <Typography variant="h6">Quyền lợi đối tác</Typography>
              {BENEFITS.map((b) => (
                <Stack key={b.title} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white', flexShrink: 0 }}>
                    <Iconify icon={b.icon} width={20} />
                  </Box>
                  <Stack>
                    <Typography variant="subtitle2">{b.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{b.desc}</Typography>
                  </Stack>
                </Stack>
              ))}
              <Button component={RouterLink} href="/sofa2/b2b/policy" variant="outlined" fullWidth>Xem chính sách đối tác</Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
