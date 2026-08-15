import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_POLICIES } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { Sofa18Panel, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const { type } = useParams();
  const current = type ? SOFA18_POLICIES[type] : undefined;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Chính sách'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="CHÍNH SÁCH"
        title={<span>{(current?.title ?? 'Chính sách Sofa18').toUpperCase()}</span>}
        subtitle="Cam kết minh bạch về giao hàng, bảo hành, đổi trả và bảo mật."
        image={SOFA18_PAGE_IMAGES.aboutHero}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa18Panel title={current.title}>
              <Stack spacing={1.5}>
                {current.body.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{line}</Typography>
                ))}
              </Stack>
            </Sofa18Panel>
          )}
          <Stack>
            <Sofa18SectionTitle>Tất cả chính sách</Sofa18SectionTitle>
            <Sofa18LinkGrid
              cols={4}
              items={Object.entries(SOFA18_POLICIES).map(([key, p]) => ({ title: p.title, desc: p.body[0], icon: 'solar:document-text-bold-duotone', path: `/sofa18/policy/${key}` }))}
            />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
