import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_SHOWROOMS, SOFA18_PAGE_COMPANY_INFO } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Liên hệ — Sofa18</title></Helmet>

      <Sofa18PageHero overline="LIÊN HỆ" title={<>LIÊN <span>HỆ</span></>} subtitle="Đội ngũ Sofa18 sẵn sàng tư vấn không gian Địa Trung Hải cho bạn." image={SOFA18_PAGE_IMAGES.contact} />

      <Sofa18Section bg="cream">
        <Grid container spacing={4}>
          <Grid xs={12} md={7}>
            <Sofa18Panel title="Gửi yêu cầu tư vấn">
              <Stack spacing={2.5}>
                <TextField fullWidth label="Họ và tên" sx={sofa18FieldSx} />
                <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                <TextField fullWidth label="Số điện thoại" sx={sofa18FieldSx} />
                <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa18FieldSx} />
                <Button size="large" variant="contained" sx={sofa18ButtonSx}>Gửi liên hệ</Button>
              </Stack>
            </Sofa18Panel>
          </Grid>
          <Grid xs={12} md={5}>
            <Stack spacing={3}>
              <Sofa18Panel title="Thông tin liên hệ">
                <Stack spacing={2}>
                  {[
                    { icon: 'solar:phone-bold-duotone', text: SOFA18_PAGE_COMPANY_INFO.phone },
                    { icon: 'solar:letter-bold-duotone', text: SOFA18_PAGE_COMPANY_INFO.email },
                    { icon: 'solar:map-point-bold-duotone', text: SOFA18_PAGE_COMPANY_INFO.address },
                  ].map((row) => (
                    <Stack key={row.text} direction="row" spacing={1.5} alignItems="center">
                      <Iconify icon={row.icon} width={22} sx={{ color: SOFA18_COLORS.clay }} />
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{row.text}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa18Panel>
              <Sofa18Panel title="Showroom">
                <Stack spacing={2}>
                  {SOFA18_PAGE_SHOWROOMS.map((s) => (
                    <Stack key={s.id} spacing={0.5}>
                      <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.ink }}>{s.name}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{s.address} · {s.phone}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Sofa18Panel>
            </Stack>
          </Grid>
        </Grid>
      </Sofa18Section>
    </>
  );
}
