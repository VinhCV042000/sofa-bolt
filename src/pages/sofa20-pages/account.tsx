import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { SOFA20_ACCOUNT_SECTIONS } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { Sofa20Panel, Sofa20LinkGrid, Sofa20SectionTitle } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  const { section } = useParams();
  const current = SOFA20_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Tài khoản khách hàng'} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero
        overline="TÀI KHOẢN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TÀI KHOẢN <span>KHÁCH HÀNG</span></>}
        subtitle={current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA20_PAGE_IMAGES.aboutHero}
      />

      <Sofa20Section bg="black">
        {current ? (
          <Stack spacing={4}>
            <Sofa20Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Ironworks & Co.
              </Typography>
            </Sofa20Panel>
            <Sofa20SectionTitle>Mục khác</Sofa20SectionTitle>
            <Sofa20LinkGrid items={SOFA20_ACCOUNT_SECTIONS.filter((s) => s.slug !== section).map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa20/account/${s.slug}` }))} cols={3} />
          </Stack>
        ) : (
          <Sofa20LinkGrid items={SOFA20_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa20/account/${s.slug}` }))} cols={3} />
        )}
      </Sofa20Section>
    </>
  );
}
