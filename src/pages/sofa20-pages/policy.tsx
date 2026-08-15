import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { SOFA20_POLICIES } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Panel, Sofa20LinkGrid } from 'src/sections/sofa20-pages/sofa20-shop-ui';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';

export default function Page() {
  const { type = 'shipping' } = useParams();
  const policy = SOFA20_POLICIES[type] ?? SOFA20_POLICIES.shipping;

  return (
    <>
      <Helmet>
        <title>{`${policy.title} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero
        overline="CHÍNH SÁCH"
        title={<>{policy.title.split(' ')[0]} <span>{policy.title.split(' ').slice(1).join(' ')}</span></>}
        subtitle={policy.intro}
        image={SOFA20_PAGE_IMAGES.workshop}
      />

      <Sofa20Section bg="black">
        <Stack spacing={5} sx={{ maxWidth: 860, mx: 'auto' }}>
          <Sofa20Panel title="Nội dung chính sách">
            <Stack spacing={2}>
              {policy.items.map((item) => (
                <Stack key={item} direction="row" spacing={2}>
                  <Box sx={{ mt: 1.2, width: 6, height: 6, flexShrink: 0, bgcolor: SOFA20_COLORS.gold }} />
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.55), lineHeight: 2 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Sofa20Panel>

          <Sofa20LinkGrid
            items={Object.entries(SOFA20_POLICIES).map(([slug, p]) => ({ title: p.title, desc: p.intro, icon: 'solar:document-text-bold-duotone', path: `/sofa20/policy/${slug}` }))}
            cols={3}
          />
        </Stack>
      </Sofa20Section>
    </>
  );
}
