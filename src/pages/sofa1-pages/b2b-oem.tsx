import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';
import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Yêu cầu sản xuất OEM — Casa Sofa' };

const CAPABILITIES = [
  { icon: 'solar:hammer-bold-duotone', title: 'Xưởng quy mô lớn', desc: 'Xưởng 5.000m², công suất 500+ sofa/tháng.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'Nghệ nhân lành nghề', desc: 'Đội ngũ 80+ nghệ nhân với kinh nghiệm chế tác 10-20 năm.' },
  { icon: 'solar:wood-bold-duotone', title: 'Vật liệu chính hãng', desc: 'Da bò Ý, gỗ sồi nguyên khối, vải linen nhập khẩu.' },
  { icon: 'solar:medal-ribbon-star-bold-duotone', title: 'Kiểm soát chất lượng', desc: 'QC từng công đoạn, đạt chuẩn xuất khẩu.' },
];

const MATERIALS = ['Da bò thật', 'Da PU cao cấp', 'Vải linen', 'Vải velvet', 'Vải cotton', 'Vải technical'];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        title="Yêu cầu sản xuất OEM"
        subtitle="Casa Sofa nhận sản xuất OEM theo yêu cầu với xưởng quy mô lớn và kinh nghiệm chế tác 12+ năm."
        image={SOFA1_PAGE_IMAGES.factory}
        overline="OEM"
      />

      {/* OEM capabilities */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Năng lực sản xuất</Typography>
          <Typography variant="h2">Vì sao chọn OEM Casa Sofa</Typography>
        </Stack>
        <Grid container spacing={3}>
          {CAPABILITIES.map((c, index) => (
            <Grid key={c.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={c.icon} width={28} />
                </Box>
                <Typography variant="h6">{c.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{c.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* Form */}
      <Sofa1Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Typography variant="h5">Thông số sản phẩm OEM</Typography>
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Tên công ty" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Sản phẩm yêu cầu" placeholder="VD: Sofa góc 3 chỗ, ghế đơn..." /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng" type="number" /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Chất liệu" defaultValue="">
                    {MATERIALS.map((material) => <MenuItem key={material} value={material}>{material}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tiến độ giao hàng" placeholder="VD: 45 ngày" /></Grid>
                <Grid xs={12}><TextField fullWidth label="Yêu cầu đặc biệt" multiline rows={4} placeholder="Kích thước, form dáng, màu sắc, bản vẽ kỹ thuật..." /></Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu OEM'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa1Section>
    </>
  );
}
