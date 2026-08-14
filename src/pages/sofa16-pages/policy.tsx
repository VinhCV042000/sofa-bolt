import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_POLICIES } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { Sofa16Panel, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  const { type } = useParams();
  const current = type ? SOFA16_POLICIES[type] : undefined;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Chính sách'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="CHÍNH SÁCH"
        title={<span>{(current?.title ?? 'Chính sách Sofa16').toUpperCase()}</span>}
        subtitle="Cam kết minh bạch về giao hàng, bảo hành, đổi trả và bảo mật."
        image={SOFA16_PAGE_IMAGES.aboutHero}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa16Panel title={current.title}>
              <Stack spacing={1.5}>
                {current.body.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{line}</Typography>
                ))}
              </Stack>
            </Sofa16Panel>
          )}
          <Stack>
            <Sofa16SectionTitle>Tất cả chính sách</Sofa16SectionTitle>
            <Sofa16LinkGrid
              cols={4}
              items={Object.entries(SOFA16_POLICIES).map(([key, p]) => ({ title: p.title, desc: p.body[0], icon: 'solar:document-text-bold-duotone', path: `/sofa16/policy/${key}` }))}
            />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
