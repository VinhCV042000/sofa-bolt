import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_ACCOUNT_SECTIONS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Panel, Sofa15LinkGrid, Sofa15SectionTitle } from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  const { section } = useParams();
  const current = SOFA15_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Tài khoản khách hàng'} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero
        overline="TÀI KHOẢN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TÀI KHOẢN <span>KHÁCH HÀNG</span></>}
        subtitle={current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA15_PAGE_IMAGES.aboutHero}
      />

      <Sofa15Section bg="black">
        {current ? (
          <Stack spacing={4}>
            <Sofa15Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Maison Gatsby.
              </Typography>
            </Sofa15Panel>
            <Sofa15SectionTitle>Mục khác</Sofa15SectionTitle>
            <Sofa15LinkGrid items={SOFA15_ACCOUNT_SECTIONS.filter((s) => s.slug !== section).map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa15/account/${s.slug}` }))} cols={3} />
          </Stack>
        ) : (
          <Sofa15LinkGrid items={SOFA15_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa15/account/${s.slug}` }))} cols={3} />
        )}
      </Sofa15Section>
    </>
  );
}
