import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Panel, Sofa15LinkGrid, Sofa15SectionTitle } from 'src/sections/sofa15-pages/sofa15-shop-ui';
import { SOFA15_MEMBER_DEALER, SOFA15_MEMBER_CUSTOMER } from 'src/sections/sofa15-pages/sofa15-shop-data';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA15_MEMBER_CUSTOMER, ...SOFA15_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero
        overline="THÀNH VIÊN"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>KHU VỰC <span>THÀNH VIÊN</span></>}
        subtitle={current?.desc ?? 'Không gian riêng cho khách hàng thân thiết và đại lý Maison Gatsby.'}
        image={SOFA15_PAGE_IMAGES.team}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa15Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>
                {current.desc} Dữ liệu chi tiết sẽ hiển thị sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa15Panel>
          )}

          <Stack>
            <Sofa15SectionTitle>Khách hàng</Sofa15SectionTitle>
            <Sofa15LinkGrid items={SOFA15_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa15/member/${s.slug}` }))} cols={4} />
          </Stack>

          <Stack>
            <Sofa15SectionTitle>Đại lý</Sofa15SectionTitle>
            <Sofa15LinkGrid items={SOFA15_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa15/member/${s.slug}` }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}
