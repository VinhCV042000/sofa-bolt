import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_AUTH_MODES } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { Sofa20Panel, sofa20FieldSx, sofa20GoldButtonSx } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  const { mode = 'login' } = useParams();
  const cfg = SOFA20_AUTH_MODES[mode] ?? SOFA20_AUTH_MODES.login;

  return (
    <>
      <Helmet>
        <title>{`${cfg.title} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero overline="TÀI KHOẢN" title={<>{cfg.title.split(' ')[0]} <span>{cfg.title.split(' ').slice(1).join(' ')}</span></>} subtitle={cfg.subtitle} image={SOFA20_PAGE_IMAGES.contact ?? SOFA20_PAGE_IMAGES.aboutHero} />

      <Sofa20Section bg="black">
        <Stack sx={{ maxWidth: 460, mx: 'auto' }}>
          <Sofa20Panel title={cfg.title}>
            <Stack spacing={2.5}>
              {mode === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa20FieldSx} />}
              <TextField fullWidth label="Email" type="email" sx={sofa20FieldSx} />
              {mode !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa20FieldSx} />}
              {mode === 'register' && <TextField fullWidth label="Xác nhận mật khẩu" type="password" sx={sofa20FieldSx} />}
              <Button size="large" variant="contained" sx={sofa20GoldButtonSx}>{cfg.cta}</Button>

              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <Typography component={RouterLink} href="/sofa20/auth/login" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng nhập</Typography>
                <Typography component={RouterLink} href="/sofa20/auth/register" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng ký</Typography>
                <Typography component={RouterLink} href="/sofa20/auth/forgot" variant="body2" sx={{ color: SOFA20_COLORS.gold, textDecoration: 'none' }}>Quên mật khẩu</Typography>
              </Stack>
            </Stack>
          </Sofa20Panel>
        </Stack>
      </Sofa20Section>
    </>
  );
}
