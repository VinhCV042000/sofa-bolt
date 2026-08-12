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

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Yêu cầu sản xuất OEM — Sofa Earth' };

const CAPABILITIES = [
  { icon: 'solar:hammer-bold-duotone', title: 'Xưởng thủ công', desc: 'Xưởng 3.000m², công suất 300+ sofa/tháng, may thủ công bởi nghệ nhân.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'Nghệ nhân lành nghề', desc: 'Đội ngũ 60+ nghệ nhân với kinh nghiệm chế tác 10-20 năm.' },
  { icon: 'solar:leaf-bold-duotone', title: 'Vật liệu thiên nhiên', desc: 'Linen tự nhiên, bông hữu cơ, wool, thuốc nhuộm thực vật, gỗ sồi FSC.' },
  { icon: 'solar:medal-ribbon-star-bold-duotone', title: 'Kiểm soát chất lượng', desc: 'QC từng công đoạn, đạt chuẩn xuất khẩu, không hóa chất độc hại.' },
];

const MATERIALS = ['Linen tự nhiên', 'Bông hữu cơ', 'Wool len', 'Velvet thực vật', 'Cotton', 'Kết hợp nhiều chất liệu'];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Yêu cầu sản xuất OEM"
        subtitle="Sofa Earth nhận sản xuất OEM theo yêu cầu với xưởng thủ công và kinh nghiệm chế tác 15+ năm từ vật liệu thiên nhiên."
        image={SOFA6_PAGE_IMAGES.factory}
        overline="OEM"
      />

      {/* OEM capabilities */}
      <Sofa6Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Năng lực sản xuất</Typography>
          <Typography variant="h2">Vì sao chọn OEM Sofa Earth</Typography>
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
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={c.icon} width={28} />
                </Box>
                <Typography variant="h6">{c.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{c.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* Form */}
      <Sofa6Section bg="grey">
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
      </Sofa6Section>
    </>
  );
}
