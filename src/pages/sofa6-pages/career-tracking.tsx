import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Theo dõi hồ sơ · Sofa Earth' };

const hexToRgb = (hex: string) => `rgb(${hex.slice(1).match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(',')})`;

// ----------------------------------------------------------------------

export default function Page() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa6PageHero
        overline="Tuyển dụng"
        title={<>Theo dõi <span>hồ sơ</span></>}
        subtitle="Kiểm tra trạng thái đơn ứng tuyển của bạn tại Sofa Earth."
        image={SOFA6_PAGE_IMAGES.careers}
      />

      <Sofa6Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport} justifyContent="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
              <Typography variant="h5">Tra cứu hồ sơ ứng tuyển</Typography>
              <Stack spacing={2}>
                <TextField fullWidth label="Email" type="email" required />
                <TextField fullWidth label="Mã ứng tuyển" required placeholder="VD: SE-2025-001" />
              </Stack>
              <Button variant="contained" size="large" sx={{ width: 'fit-content', bgcolor: SOFA6_COLORS.terracotta, '&:hover': { bgcolor: SOFA6_COLORS.clay } }} startIcon={<Iconify icon="solar:search-bold-duotone" />} onClick={() => setSearched(true)}>
                Tra cứu
              </Button>
            </Stack>
          </Grid>

          {searched && (
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h5">Kết quả tra cứu</Typography>
                <Stack spacing={2} sx={{ p: 2.5, borderRadius: 1.5, bgcolor: varAlpha(hexToRgb(SOFA6_COLORS.terracottaLight), 0.06) }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:user-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.terracotta }} />
                    <Typography variant="subtitle2">Mã ứng tuyển: SE-2025-001</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:bag-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.sage }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Vị trí: Nghệ nhân may sofa linen</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:calendar-bold-duotone" width={20} sx={{ color: 'text.disabled' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Ngày nộp: 15/01/2025</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Iconify icon="solar:clock-circle-bold-duotone" width={20} sx={{ color: 'warning.main' }} />
                    <Typography variant="body2" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>Trạng thái: Đang xem xét</Typography>
                  </Stack>
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                  * Đây là thông tin mẫu. Hồ sơ thực tế của bạn sẽ hiển thị tại đây sau khi tra cứu.
                </Typography>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }} component={MotionViewport}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chưa nộp hồ sơ?</Typography>
          <Button component={RouterLink} href="/sofa6/careers/apply" variant="outlined" startIcon={<Iconify icon="solar:file-send-bold-duotone" />}>Nộp hồ sơ ngay</Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
