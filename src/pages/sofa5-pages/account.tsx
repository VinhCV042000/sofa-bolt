import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_AUTH_MODES, SOFA5_ACCOUNT_SECTIONS } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx, Sofa5LinkGrid, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const { section } = useParams();
  const auth = section ? SOFA5_AUTH_MODES[section] : undefined;
  const current = SOFA5_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${auth?.title ?? current?.title ?? 'Tài khoản khách hàng'} — Sofa5`}</title></Helmet>

      <Sofa5PageHero
        overline="TÀI KHOẢN"
        title={<span>{(auth?.title ?? current?.title ?? 'Tài khoản khách hàng').toUpperCase()}</span>}
        subtitle={auth?.subtitle ?? current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA5_PAGE_IMAGES.aboutHero}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {auth && (
            <Sofa5Panel title={auth.title}>
              <Stack spacing={2.5} sx={{ maxWidth: 460 }}>
                <TextField fullWidth label="Email" type="email" sx={sofa5FieldSx} />
                {section !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa5FieldSx} />}
                {section === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa5FieldSx} />}
                <Button size="large" variant="contained" sx={sofa5ButtonSx}>{auth.cta}</Button>
              </Stack>
            </Sofa5Panel>
          )}

          {current && (
            <Sofa5Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Sofa5.
              </Typography>
            </Sofa5Panel>
          )}

          <Stack>
            <Sofa5SectionTitle>Khu vực tài khoản</Sofa5SectionTitle>
            <Sofa5LinkGrid cols={3} items={SOFA5_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa5/account/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
