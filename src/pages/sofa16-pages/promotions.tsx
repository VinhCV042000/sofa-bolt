import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { Sofa16Panel, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa16-pages/sofa16-pages-data';

export default function Page() {
  const { slug } = useParams();
  const current = SOFA16_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khuyến mãi & Dịch vụ'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="KHUYẾN MÃI"
        title={current ? <span>{current.title.toUpperCase()}</span> : <>KHUYẾN MÃI & <span>DỊCH VỤ</span></>}
        subtitle={current?.description ?? 'Bảo hành, bảo trì, sửa chữa, vệ sinh và đổi trả cho khách hàng Sofa16.'}
        image={SOFA16_PAGE_IMAGES.service1}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa16Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{current.description}</Typography>
            </Sofa16Panel>
          )}
          <Stack>
            <Sofa16SectionTitle>Dịch vụ hậu mãi</Sofa16SectionTitle>
            <Sofa16LinkGrid
              cols={3}
              items={SOFA16_PAGE_PROMOTION_SERVICES.map((s) => ({ title: s.title, desc: s.description, icon: s.icon, path: `/sofa16/promotions/${s.slug}` }))}
            />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
