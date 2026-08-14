import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_AUTH_MODES } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { Sofa17Panel, sofa17FieldSx, sofa17GoldButtonSx } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  const { mode = 'login' } = useParams();
  const cfg = SOFA17_AUTH_MODES[mode] ?? SOFA17_AUTH_MODES.login;

  return (
    <>
      <Helmet>
        <title>{`${cfg.title} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero overline="TÀI KHOẢN" title={<>{cfg.title.split(' ')[0]} <span>{cfg.title.split(' ').slice(1).join(' ')}</span></>} subtitle={cfg.subtitle} image={SOFA17_PAGE_IMAGES.contact ?? SOFA17_PAGE_IMAGES.aboutHero} />

      <Sofa17Section bg="black">
        <Stack sx={{ maxWidth: 460, mx: 'auto' }}>
          <Sofa17Panel title={cfg.title}>
            <Stack spacing={2.5}>
              {mode === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa17FieldSx} />}
              <TextField fullWidth label="Email" type="email" sx={sofa17FieldSx} />
              {mode !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa17FieldSx} />}
              {mode === 'register' && <TextField fullWidth label="Xác nhận mật khẩu" type="password" sx={sofa17FieldSx} />}
              <Button size="large" variant="contained" sx={sofa17GoldButtonSx}>{cfg.cta}</Button>

              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <Typography component={RouterLink} href="/sofa17/auth/login" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng nhập</Typography>
                <Typography component={RouterLink} href="/sofa17/auth/register" variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), textDecoration: 'none' }}>Đăng ký</Typography>
                <Typography component={RouterLink} href="/sofa17/auth/forgot" variant="body2" sx={{ color: SOFA17_COLORS.gold, textDecoration: 'none' }}>Quên mật khẩu</Typography>
              </Stack>
            </Stack>
          </Sofa17Panel>
        </Stack>
      </Sofa17Section>
    </>
  );
}
