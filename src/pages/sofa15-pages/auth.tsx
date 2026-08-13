import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_AUTH_MODES } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Panel, sofa15FieldSx, sofa15GoldButtonSx } from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  const { mode = 'login' } = useParams();
  const cfg = SOFA15_AUTH_MODES[mode] ?? SOFA15_AUTH_MODES.login;

  return (
    <>
      <Helmet>
        <title>{`${cfg.title} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero overline="TÀI KHOẢN" title={<>{cfg.title.split(' ')[0]} <span>{cfg.title.split(' ').slice(1).join(' ')}</span></>} subtitle={cfg.subtitle} image={SOFA15_PAGE_IMAGES.contact ?? SOFA15_PAGE_IMAGES.aboutHero} />

      <Sofa15Section bg="black">
        <Stack sx={{ maxWidth: 460, mx: 'auto' }}>
          <Sofa15Panel title={cfg.title}>
            <Stack spacing={2.5}>
              {mode === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa15FieldSx} />}
              <TextField fullWidth label="Email" type="email" sx={sofa15FieldSx} />
              {mode !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa15FieldSx} />}
              {mode === 'register' && <TextField fullWidth label="Xác nhận mật khẩu" type="password" sx={sofa15FieldSx} />}
              <Button size="large" variant="contained" sx={sofa15GoldButtonSx}>{cfg.cta}</Button>

              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <Typography component={RouterLink} href="/sofa15/auth/login" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng nhập</Typography>
                <Typography component={RouterLink} href="/sofa15/auth/register" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng ký</Typography>
                <Typography component={RouterLink} href="/sofa15/auth/forgot" variant="body2" sx={{ color: SOFA15_COLORS.gold, textDecoration: 'none' }}>Quên mật khẩu</Typography>
              </Stack>
            </Stack>
          </Sofa15Panel>
        </Stack>
      </Sofa15Section>
    </>
  );
}
