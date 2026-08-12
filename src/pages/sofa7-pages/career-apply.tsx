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

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_CAREERS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Nộp hồ sơ ứng tuyển · Sofa7' };

// ----------------------------------------------------------------------

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa7PageHero
        overline="Tuyển dụng"
        title={<>Nộp hồ sơ <span>ứng tuyển</span></>}
        subtitle="Gửi CV của bạn cho Sofa7 — chúng tôi sẽ liên hệ trong vòng 7 ngày làm việc."
        image={SOFA7_PAGE_IMAGES.careers}
      />

      <Sofa7Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport} justifyContent="center">
          <Grid xs={12} md={7}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
              {sent ? (
                <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 6 }}>
                  <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA7_COLORS.electric, 0.2), color: SOFA7_COLORS.electric }}>
                    <Iconify icon="solar:check-circle-bold-duotone" width={40} />
                  </Box>
                  <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Hồ sơ đã gửi thành công!</Typography>
                  <Typography sx={{ color: 'text.secondary', maxWidth: 420 }}>Cảm ơn bạn đã ứng tuyển vào Sofa7. Chúng tôi sẽ review hồ sơ và liên hệ trong vòng 7 ngày làm việc. Mã ứng tuyển sẽ được gửi qua email của bạn.</Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
                    <Button component={RouterLink} href="/sofa7/careers/tracking" variant="contained" startIcon={<Iconify icon="solar:search-bold-duotone" />} sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }}>Theo dõi hồ sơ</Button>
                    <Button component={RouterLink} href="/sofa7/careers" variant="outlined" sx={{ borderRadius: 0 }}>Vị trí khác</Button>
                  </Stack>
                </Stack>
              ) : (
                <>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Thông tin ứng viên</Typography>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Họ và tên" required /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Email" type="email" required /></Grid>
                    <Grid xs={12} sm={6}><TextField fullWidth label="Số điện thoại" required /></Grid>
                    <Grid xs={12} sm={6}>
                      <TextField fullWidth select label="Vị trí ứng tuyển" required defaultValue="">
                        {SOFA7_PAGE_CAREERS.map((c) => (
                          <MenuItem key={c.id} value={c.title}>{c.title}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12}>
                      <Stack spacing={1}>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>CV (PDF/DOC)</Typography>
                        <Box sx={{ p: 3, borderRadius: 0, border: '1px dashed', borderColor: 'divider', textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: varAlpha(SOFA7_COLORS.electric, 0.04) } }}>
                          <Iconify icon="solar:upload-bold-duotone" width={32} sx={{ color: SOFA7_COLORS.electric }} />
                          <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>Kéo thả hoặc bấm để tải CV lên</Typography>
                          <Typography variant="caption" sx={{ color: 'text.disabled' }}>Tối đa 5MB · PDF, DOC, DOCX</Typography>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid xs={12}><TextField fullWidth label="Thư giới thiệu (Cover letter)" multiline rows={4} /></Grid>
                  </Grid>
                  <Button variant="contained" size="large" sx={{ width: 'fit-content', borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:file-send-bold-duotone" />} onClick={() => setSent(true)}>
                    Gửi hồ sơ
                  </Button>
                </>
              )}
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`, boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Thông tin liên hệ</Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>tuyendung@sofa7.vn</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>024 3855 1234</Typography>
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: varAlpha(SOFA7_COLORS.electric, 0.06) }}>
                <Typography variant="subtitle2" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase' }}>Mẹo ứng tuyển</Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>• CV rõ ràng, ngắn gọn (1-2 trang).</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Nêu kinh nghiệm với da thật, thép đen.</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Thể hiện sự yêu industrial, urban vibe.</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>
    </>
  );
}
