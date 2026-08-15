import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_MEMBER_DEALER, SOFA5_MEMBER_CUSTOMER } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { Sofa5Panel, Sofa5LinkGrid, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA5_MEMBER_CUSTOMER, ...SOFA5_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa Royale`}</title></Helmet>

      <Sofa5PageHero
        overline="THÀNH VIÊN"
        title={<span>{(current?.title ?? 'Khu vực thành viên').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Khu vực dành riêng cho khách hàng và đại lý Sofa5.'}
        image={SOFA5_PAGE_IMAGES.team}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa5Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Nội dung được cá nhân hóa sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa5Panel>
          )}

          <Stack>
            <Sofa5SectionTitle>Khách hàng</Sofa5SectionTitle>
            <Sofa5LinkGrid cols={4} items={SOFA5_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa5/member/${s.slug}` }))} />
          </Stack>

          <Stack>
            <Sofa5SectionTitle>Đại lý</Sofa5SectionTitle>
            <Sofa5LinkGrid cols={4} items={SOFA5_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa5/member/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
