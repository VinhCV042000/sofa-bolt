import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_SHOWROOMS, SOFA16_PAGE_COMPANY_INFO } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Liên hệ — Sofa16</title></Helmet>

      <Sofa16PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Đội ngũ Sofa16 sẵn sàng tư vấn không gian Địa Trung Hải cho bạn." image={SOFA16_PAGE_IMAGES.contact} />

      <Sofa16Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Sofa16Panel title="Gửi yêu cầu tư vấn">
              <Stack spacing={2.5}>
                <TextField fullWidth label="Họ và tên" sx={sofa16FieldSx} />
                <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                <TextField fullWidth label="Số điện thoại" sx={sofa16FieldSx} />
                <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa16FieldSx} />
                <Button size="large" variant="contained" sx={sofa16ButtonSx}>Gửi liên hệ</Button>
              </Stack>
            </Sofa16Panel>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={3}>
              <Sofa16Panel title="Thông tin liên hệ">
                <Stack spacing={2}>
                  {[
                    { icon: 'solar:phone-bold-duotone', text: SOFA16_PAGE_COMPANY_INFO.phone },
                    { icon: 'solar:letter-bold-duotone', text: SOFA16_PAGE_COMPANY_INFO.email },
                    { icon: 'solar:map-point-bold-duotone', text: SOFA16_PAGE_COMPANY_INFO.address },
                  ].map((row) => (
                    <Stack key={row.text} direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon={row.icon} width={22} sx={{ color: SOFA16_COLORS.terracotta }} />
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{row.text}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa16Panel>
              <Sofa16Panel title="Showroom">
                <Stack spacing={2}>
                  {SOFA16_PAGE_SHOWROOMS.map((s) => (
                    <Stack key={s.id} spacing={0.5}>
                      <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.ink }}>{s.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{s.address} · {s.phone}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa16Panel>
            </Stack>
          </Grid>
        </Grid>
      </Sofa16Section>
    </>
  );
}
