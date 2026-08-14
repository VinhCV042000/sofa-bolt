import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { SOFA17_MEMBER_DEALER, SOFA17_MEMBER_CUSTOMER } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { Sofa17Panel, Sofa17LinkGrid, Sofa17SectionTitle } from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA17_MEMBER_CUSTOMER, ...SOFA17_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero
        overline="THÀNH VIÊN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>KHU VỰC <span>THÀNH VIÊN</span></>}
        subtitle={current?.desc ?? 'Không gian riêng cho khách hàng thân thiết và đại lý Maison Riad.'}
        image={SOFA17_PAGE_IMAGES.team}
      />

      <Sofa17Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa17Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Dữ liệu chi tiết sẽ hiển thị sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa17Panel>
          )}

          <Stack>
            <Sofa17SectionTitle>Khách hàng</Sofa17SectionTitle>
            <Sofa17LinkGrid items={SOFA17_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa17/member/${s.slug}` }))} cols={4} />
          </Stack>

          <Stack>
            <Sofa17SectionTitle>Đại lý</Sofa17SectionTitle>
            <Sofa17LinkGrid items={SOFA17_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa17/member/${s.slug}` }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa17Section>
    </>
  );
}
