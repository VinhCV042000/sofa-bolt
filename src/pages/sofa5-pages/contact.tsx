import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_IMAGES, SOFA5_PAGE_SHOWROOMS, SOFA5_PAGE_COMPANY_INFO } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Liên hệ — Sofa Royale</title></Helmet>

      <Sofa5PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Đội ngũ Sofa5 sẵn sàng tư vấn không gian Địa Trung Hải cho bạn." image={SOFA5_PAGE_IMAGES.contact} />

      <Sofa5Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Sofa5Panel title="Gửi yêu cầu tư vấn">
              <Stack spacing={2.5}>
                <TextField fullWidth label="Họ và tên" sx={sofa5FieldSx} />
                <TextField fullWidth label="Email" type="email" sx={sofa5FieldSx} />
                <TextField fullWidth label="Số điện thoại" sx={sofa5FieldSx} />
                <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa5FieldSx} />
                <Button size="large" variant="contained" sx={sofa5ButtonSx}>Gửi liên hệ</Button>
              </Stack>
            </Sofa5Panel>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={3}>
              <Sofa5Panel title="Thông tin liên hệ">
                <Stack spacing={2}>
                  {[
                    { icon: 'solar:phone-bold-duotone', text: SOFA5_PAGE_COMPANY_INFO.phone },
                    { icon: 'solar:letter-bold-duotone', text: SOFA5_PAGE_COMPANY_INFO.email },
                    { icon: 'solar:map-point-bold-duotone', text: SOFA5_PAGE_COMPANY_INFO.address },
                  ].map((row) => (
                    <Stack key={row.text} direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon={row.icon} width={22} sx={{ color: SOFA5_COLORS.clay }} />
                      <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{row.text}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa5Panel>
              <Sofa5Panel title="Showroom">
                <Stack spacing={2}>
                  {SOFA5_PAGE_SHOWROOMS.map((s) => (
                    <Stack key={s.id} spacing={0.5}>
                      <Typography variant="subtitle2" sx={{ color: SOFA5_COLORS.ink }}>{s.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{s.address} · {s.phone}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa5Panel>
            </Stack>
          </Grid>
        </Grid>
      </Sofa5Section>
    </>
  );
}
