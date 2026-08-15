import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_PROMOTION_SERVICES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Panel, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const { slug } = useParams();
  const current = SOFA18_PAGE_PROMOTION_SERVICES.find((s) => s.slug === slug);

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Khuyến mãi & Dịch vụ'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="KHUYẾN MÃI"
        title={current ? <span>{current.title.toUpperCase()}</span> : <>KHUYẾN MÃI & <span>DỊCH VỤ</span></>}
        subtitle={current?.description ?? 'Bảo hành, bảo trì, sửa chữa, vệ sinh và đổi trả cho khách hàng Sofa18.'}
        image={SOFA18_PAGE_IMAGES.service1}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa18Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{current.description}</Typography>
            </Sofa18Panel>
          )}
          <Stack>
            <Sofa18SectionTitle>Dịch vụ hậu mãi</Sofa18SectionTitle>
            <Sofa18LinkGrid
              cols={3}
              items={SOFA18_PAGE_PROMOTION_SERVICES.map((s) => ({ title: s.title, desc: s.description, icon: s.icon, path: `/sofa18/promotions/${s.slug}` }))}
            />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
