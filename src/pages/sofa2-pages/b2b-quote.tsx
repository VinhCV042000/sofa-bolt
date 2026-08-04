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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Yêu cầu báo giá dự án — LUXE Sofa' };

const PROJECT_TYPES = ['Căn hộ', 'Biệt thự', 'Khách sạn', 'Resort', 'Văn phòng', 'Showroom'];
const BUDGET_RANGES = ['Dưới 100 triệu', '100 - 500 triệu', '500 triệu - 1 tỷ', 'Trên 1 tỷ'];

const STEPS = [
  { icon: 'solar:document-bold-duotone', title: 'Tiếp nhận yêu cầu', desc: 'Tiếp nhận thông tin dự án trong 24h.' },
  { icon: 'solar:chat-round-bold-duotone', title: 'Tư vấn & khảo sát', desc: 'Đội ngũ đến khảo sát và tư vấn miễn phí.' },
  { icon: 'solar:document-text-bold-duotone', title: 'Báo giá chi tiết', desc: 'Báo giá từng hạng mục minh bạch.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Sản xuất & giao hàng', desc: 'Thi công, lắp đặt đúng tiến độ.' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Yêu cầu báo giá dự án"
        subtitle="Gửi thông tin dự án để nhận báo giá chi tiết từ đội ngũ dự án LUXE Sofa."
        image={SOFA2_PAGE_IMAGES.project1}
        overline="Báo giá dự án"
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
              <Typography variant="h5">Thông tin dự án</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tên dự án" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Loại dự án" defaultValue="">
                    {PROJECT_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng sofa" type="number" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Ngân sách" defaultValue="">
                    {BUDGET_RANGES.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tiến độ mong muốn" placeholder="VD: 30 ngày" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Địa điểm dự án" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mô tả yêu cầu" multiline rows={4} /></Grid>
              </Grid>

              <Typography variant="h6" sx={{ mt: 1 }}>Thông tin liên hệ</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Email" type="email" /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:document-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu báo giá'}
              </Button>
            </Stack>
          </Grid>

          {/* Process sidebar */}
          <Grid xs={12} md={4}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inLeft} spacing={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, height: 1 }}>
              <Typography variant="h6">Quy trình 4 bước</Typography>
              {STEPS.map((s, i) => (
                <Stack key={s.title} spacing={1}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 40, height: 40, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                      <Iconify icon={s.icon} width={20} />
                    </Box>
                    <Typography variant="subtitle2">{i + 1}. {s.title}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary', pl: 7 }}>{s.desc}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
