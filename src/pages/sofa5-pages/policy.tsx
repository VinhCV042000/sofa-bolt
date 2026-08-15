import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_POLICIES } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { Sofa5Panel, Sofa5LinkGrid, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const { type } = useParams();
  const current = type ? SOFA5_POLICIES[type] : undefined;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Chính sách'} — Sofa5`}</title></Helmet>

      <Sofa5PageHero
        overline="CHÍNH SÁCH"
        title={<span>{(current?.title ?? 'Chính sách Sofa5').toUpperCase()}</span>}
        subtitle="Cam kết minh bạch về giao hàng, bảo hành, đổi trả và bảo mật."
        image={SOFA5_PAGE_IMAGES.aboutHero}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa5Panel title={current.title}>
              <Stack spacing={1.5}>
                {current.body.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>{line}</Typography>
                ))}
              </Stack>
            </Sofa5Panel>
          )}
          <Stack>
            <Sofa5SectionTitle>Tất cả chính sách</Sofa5SectionTitle>
            <Sofa5LinkGrid
              cols={4}
              items={Object.entries(SOFA5_POLICIES).map(([key, p]) => ({ title: p.title, desc: p.body[0], icon: 'solar:document-text-bold-duotone', path: `/sofa5/policy/${key}` }))}
            />
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
