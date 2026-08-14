import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_MEMBER_DEALER, SOFA16_MEMBER_CUSTOMER } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { Sofa16Panel, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  const { section } = useParams();
  const all = [...SOFA16_MEMBER_CUSTOMER, ...SOFA16_MEMBER_DEALER];
  const current = all.find((s) => s.slug === section);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khu vực thành viên'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="THÀNH VIÊN"
        title={<span>{(current?.title ?? 'Khu vực thành viên').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Khu vực dành riêng cho khách hàng và đại lý Sofa16.'}
        image={SOFA16_PAGE_IMAGES.team}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa16Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>
                {current.desc} Nội dung được cá nhân hóa sau khi bạn đăng nhập tài khoản thành viên.
              </Typography>
            </Sofa16Panel>
          )}

          <Stack>
            <Sofa16SectionTitle>Khách hàng</Sofa16SectionTitle>
            <Sofa16LinkGrid cols={4} items={SOFA16_MEMBER_CUSTOMER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa16/member/${s.slug}` }))} />
          </Stack>

          <Stack>
            <Sofa16SectionTitle>Đại lý</Sofa16SectionTitle>
            <Sofa16LinkGrid cols={4} items={SOFA16_MEMBER_DEALER.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: `/sofa16/member/${s.slug}` }))} />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
