import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Theo dõi hồ sơ · Sofa7' };

// ----------------------------------------------------------------------

export default function Page() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa7PageHero
        overline="Tuyển dụng"
        title={<>Theo dõi <span>hồ sơ</span></>}
        subtitle="Tra cứu trạng thái hồ sơ ứng tuyển của bạn tại Sofa7 bằng email và mã ứng tuyển."
        image={SOFA7_PAGE_IMAGES.careers}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport} justifyContent="center">
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Tra cứu hồ sơ</Typography>
              <Grid container spacing={2}>
                <Grid xs={12}><TextField fullWidth label="Email đăng ký" type="email" required /></Grid>
                <Grid xs={12}><TextField fullWidth label="Mã ứng tuyển" required /></Grid>
              </Grid>
              <Button variant="contained" size="large" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:search-bold-duotone" />} onClick={() => setSearched(true)}>
                Tra cứu
              </Button>

              {searched && (
                <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.06), border: `1px solid ${varAlpha(SOFA7_COLORS.cyan, 0.2)}` }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:clipboard-list-bold-duotone" width={24} sx={{ color: SOFA7_COLORS.electric }} />
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Kết quả tra cứu</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Stack>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Mã ứng tuyển</Typography>
                      <Typography variant="subtitle2">SF7-2025-001</Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Vị trí</Typography>
                      <Typography variant="subtitle2">Thợ bọc sofa da</Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>Ngày nộp</Typography>
                      <Typography variant="subtitle2">15/01/2025</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>Trạng thái:</Typography>
                    <Chip label="Đang review" size="small" sx={{ borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.16), color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold' }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hồ sơ của bạn đang được đội tuyển dụng Sofa7 review. Chúng tôi sẽ liên hệ trong vòng 7 ngày làm việc.</Typography>
                </Stack>
              )}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Mã ứng tuyển ở đâu?</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Mã ứng tuyển được gửi qua email của bạn ngay sau khi nộp hồ sơ thành công. Kiểm tra hộp thư (và mục spam) để tìm mã.</Typography>
              </Stack>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.06) }}>
                <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase' }}>Cần hỗ trợ?</Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>024 3855 1234</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>tuyendung@sofa7.vn</Typography>
                </Stack>
                <Button component={RouterLink} href="/sofa7/careers/apply" variant="outlined" sx={{ borderRadius: 0 }}>Nộp hồ sơ mới</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
