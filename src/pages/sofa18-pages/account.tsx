import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_AUTH_MODES, SOFA18_ACCOUNT_SECTIONS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const { section } = useParams();
  const auth = section ? SOFA18_AUTH_MODES[section] : undefined;
  const current = SOFA18_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${auth?.title ?? current?.title ?? 'Tài khoản khách hàng'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="TÀI KHOẢN"
        title={<span>{(auth?.title ?? current?.title ?? 'Tài khoản khách hàng').toUpperCase()}</span>}
        subtitle={auth?.subtitle ?? current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA18_PAGE_IMAGES.aboutHero}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {auth && (
            <Sofa18Panel title={auth.title}>
              <Stack spacing={2.5} sx={{ maxWidth: 460 }}>
                <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                {section !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa18FieldSx} />}
                {section === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa18FieldSx} />}
                <Button size="large" variant="contained" sx={sofa18ButtonSx}>{auth.cta}</Button>
              </Stack>
            </Sofa18Panel>
          )}

          {current && (
            <Sofa18Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Sofa18.
              </Typography>
            </Sofa18Panel>
          )}

          <Stack>
            <Sofa18SectionTitle>Khu vực tài khoản</Sofa18SectionTitle>
            <Sofa18LinkGrid cols={3} items={SOFA18_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa18/account/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
