import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_AUTH_MODES, SOFA16_ACCOUNT_SECTIONS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  const { section } = useParams();
  const auth = section ? SOFA16_AUTH_MODES[section] : undefined;
  const current = SOFA16_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${auth?.title ?? current?.title ?? 'Tài khoản khách hàng'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="TÀI KHOẢN"
        title={<span>{(auth?.title ?? current?.title ?? 'Tài khoản khách hàng').toUpperCase()}</span>}
        subtitle={auth?.subtitle ?? current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA16_PAGE_IMAGES.aboutHero}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {auth && (
            <Sofa16Panel title={auth.title}>
              <Stack spacing={2.5} sx={{ maxWidth: 460 }}>
                <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                {section !== 'forgot' && <TextField fullWidth label="Mật khẩu" type="password" sx={sofa16FieldSx} />}
                {section === 'register' && <TextField fullWidth label="Họ và tên" sx={sofa16FieldSx} />}
                <Button size="large" variant="contained" sx={sofa16ButtonSx}>{auth.cta}</Button>
              </Stack>
            </Sofa16Panel>
          )}

          {current && (
            <Sofa16Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Sofa16.
              </Typography>
            </Sofa16Panel>
          )}

          <Stack>
            <Sofa16SectionTitle>Khu vực tài khoản</Sofa16SectionTitle>
            <Sofa16LinkGrid cols={3} items={SOFA16_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa16/account/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
