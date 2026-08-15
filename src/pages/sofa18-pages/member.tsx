import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_MEMBER_DEALER, SOFA18_MEMBER_CUSTOMER } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { Sofa18Panel, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA18_MEMBER_CUSTOMER, ...SOFA18_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="THÀNH VIÊN"
        title={<span>{(current?.title ?? 'Khu vực thành viên').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Khu vực dành riêng cho khách hàng và đại lý Sofa18.'}
        image={SOFA18_PAGE_IMAGES.team}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa18Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Nội dung được cá nhân hóa sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa18Panel>
          )}

          <Stack>
            <Sofa18SectionTitle>Khách hàng</Sofa18SectionTitle>
            <Sofa18LinkGrid cols={4} items={SOFA18_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa18/member/${s.slug}` }))} />
          </Stack>

          <Stack>
            <Sofa18SectionTitle>Đại lý</Sofa18SectionTitle>
            <Sofa18LinkGrid cols={4} items={SOFA18_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa18/member/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
