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

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Sản xuất OEM — LUXE Sofa' };

const MATERIALS = ['Da bò thật', 'Da PU cao cấp', 'Vải linen', 'Vải velvet', 'Vải cotton', 'Vải technical'];

const STEPS = [
  { icon: 'solar:chat-round-bold-duotone', title: 'Tiếp nhận yêu cầu', desc: 'Nắm bắt thông số và yêu cầu thiết kế.' },
  { icon: 'solar:pen-nib-bold-duotone', title: 'Thiết kế sample', desc: 'Làm mẫu thử theo bản vẽ kỹ thuật.' },
  { icon: 'solar:check-circle-bold-duotone', title: 'Duyệt mẫu', desc: 'Khách hàng kiểm tra và duyệt mẫu.' },
  { icon: 'solar:hammer-bold-duotone', title: 'Sản xuất hàng loạt', desc: 'Đóng hàng loạt theo tiêu chuẩn đã duyệt.' },
  { icon: 'solar:box-bold-duotone', title: 'Kiểm tra chất lượng', desc: 'QC từng sản phẩm trước khi giao.' },
  { icon: 'solar:delivery-bold-duotone', title: 'Đóng gói & giao hàng', desc: 'Đóng gói bảo vệ và giao đúng tiến độ.' },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Sản xuất OEM"
        subtitle="LUXE Sofa nhận sản xuất OEM theo yêu cầu với xưởng quy mô lớn và kinh nghiệm chế tác 12+ năm."
        image={SOFA2_PAGE_IMAGES.factory}
        overline="OEM"
      />

      {/* OEM process */}
      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quy trình</Typography>
          <Typography variant="h2">6 bước sản xuất OEM</Typography>
        </Stack>
        <Grid container spacing={3}>
          {STEPS.map((s, index) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 3, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
                  <Iconify icon={s.icon} width={24} />
                </Box>
                <Typography variant="subtitle1">{index + 1}. {s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      {/* Form */}
      <Sofa2Section bg="grey">
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              spacing={3}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
            >
              <Typography variant="h5">Thông số sản phẩm OEM</Typography>
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Thông số sản phẩm (kích thước, form dáng)" multiline rows={2} /></Grid>
                <Grid xs={12} sm={6}>
                  <TextField fullWidth select label="Chất liệu" defaultValue="">
                    {MATERIALS.map((material) => <MenuItem key={material} value={material}>{material}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Số lượng" type="number" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Giá mục tiêu (VNĐ/sp)" type="number" /></Grid>
                <Grid xs={12} sm={6}><TextField fullWidth label="Tiến độ giao hàng" placeholder="VD: 45 ngày" /></Grid>
                <Grid xs={12}>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Tệp thiết kế (bản vẽ 3D, ảnh mẫu)</Typography>
                    <Box sx={{ p: 4, borderRadius: 2, border: (t) => `1px dashed ${varAlpha(t.vars.palette.grey['500Channel'], 0.32)}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
                      <Iconify icon="solar:upload-bold-duotone" width={32} sx={{ color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ color: 'text.disabled' }}>Kéo thả tệp hoặc nhấn để tải lên</Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Button variant="contained" size="large" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />} sx={{ width: 'fit-content' }} onClick={() => setSent(true)}>
                {sent ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu OEM'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Sofa2Section>
    </>
  );
}
