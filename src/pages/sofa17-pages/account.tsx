import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { SOFA17_ACCOUNT_SECTIONS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { Sofa17Panel, Sofa17LinkGrid, Sofa17SectionTitle } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  const { section } = useParams();
  const current = SOFA17_ACCOUNT_SECTIONS.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Tài khoản khách hàng'} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero
        overline="TÀI KHOẢN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TÀI KHOẢN <span>KHÁCH HÀNG</span></>}
        subtitle={current?.desc ?? 'Quản lý hồ sơ, đơn hàng, bảo hành và danh sách yêu thích.'}
        image={SOFA17_PAGE_IMAGES.aboutHero}
      />

      <Sofa17Section bg="black">
        {current ? (
          <Stack spacing={4}>
            <Sofa17Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Khu vực này hiển thị dữ liệu cá nhân của bạn sau khi đăng nhập tài khoản Maison Riad.
              </Typography>
            </Sofa17Panel>
            <Sofa17SectionTitle>Mục khác</Sofa17SectionTitle>
            <Sofa17LinkGrid items={SOFA17_ACCOUNT_SECTIONS.filter((s) => s.slug !== section).map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa17/account/${s.slug}` }))} cols={3} />
          </Stack>
        ) : (
          <Sofa17LinkGrid items={SOFA17_ACCOUNT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa17/account/${s.slug}` }))} cols={3} />
        )}
      </Sofa17Section>
    </>
  );
}
