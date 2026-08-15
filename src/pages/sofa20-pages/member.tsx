import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import { SOFA20_MEMBER_DEALER, SOFA20_MEMBER_CUSTOMER } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { Sofa20Panel, Sofa20LinkGrid, Sofa20SectionTitle } from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA20_MEMBER_CUSTOMER, ...SOFA20_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero
        overline="THÀNH VIÊN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>KHU VỰC <span>THÀNH VIÊN</span></>}
        subtitle={current?.desc ?? 'Không gian riêng cho khách hàng thân thiết và đại lý Ironworks & Co.'}
        image={SOFA20_PAGE_IMAGES.team}
      />

      <Sofa20Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa20Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Dữ liệu chi tiết sẽ hiển thị sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa20Panel>
          )}

          <Stack>
            <Sofa20SectionTitle>Khách hàng</Sofa20SectionTitle>
            <Sofa20LinkGrid items={SOFA20_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa20/member/${s.slug}` }))} cols={4} />
          </Stack>

          <Stack>
            <Sofa20SectionTitle>Đại lý</Sofa20SectionTitle>
            <Sofa20LinkGrid items={SOFA20_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa20/member/${s.slug}` }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa20Section>
    </>
  );
}
