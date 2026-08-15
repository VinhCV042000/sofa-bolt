import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_IMAGES, SOFA5_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Panel, Sofa5LinkGrid, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const { slug } = useParams();
  const current = SOFA5_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khuyến mãi & Dịch vụ'} — Sofa Royale`}</title></Helmet>

      <Sofa5PageHero
        overline="KHUYẾN MÃI"
        title={current ? <span>{current.title.toUpperCase()}</span> : <>KHUYẾN MÃI & <span>DỊCH VỤ</span></>}
        subtitle={current?.description ?? 'Bảo hành, bảo trì, sửa chữa, vệ sinh và đổi trả cho khách hàng Sofa5.'}
        image={SOFA5_PAGE_IMAGES.service1}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa5Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>{current.description}</Typography>
            </Sofa5Panel>
          )}
          <Stack>
            <Sofa5SectionTitle>Dịch vụ hậu mãi</Sofa5SectionTitle>
            <Sofa5LinkGrid
              cols={3}
              items={SOFA5_PAGE_PROMOTION_SERVICES.map((s) => ({ title: s.title, desc: s.description, icon: s.icon, path: `/sofa5/promotions/${s.slug}` }))}
            />
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
