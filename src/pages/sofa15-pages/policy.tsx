import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { SOFA15_POLICIES } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Panel, Sofa15LinkGrid } from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  const { type = 'shipping' } = useParams();
  const policy = SOFA15_POLICIES[type] ?? SOFA15_POLICIES.shipping;

  return (
    <>
      <Helmet>
        <title>{`${policy.title} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero
        overline="CHÍNH SÁCH"
        title={<>{policy.title.split(' ')[0]} <span>{policy.title.split(' ').slice(1).join(' ')}</span></>}
        subtitle={policy.intro}
        image={SOFA15_PAGE_IMAGES.workshop}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5} sx={{ maxWidth: 860, mx: 'auto' }}>
          <Sofa15Panel title="Nội dung chính sách">
            <Stack spacing={2}>
              {policy.items.map((item) => (
                <Stack key={item} direction="row" spacing={2}>
                  <Box sx={{ mt: 1.2, width: 6, height: 6, flexShrink: 0, bgcolor: SOFA15_COLORS.gold }} />
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.55), lineHeight: 2 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Sofa15Panel>

          <Sofa15LinkGrid
            items={Object.entries(SOFA15_POLICIES).map(([slug, p]) => ({ title: p.title, desc: p.intro, icon: 'solar:document-text-bold-duotone', path: `/sofa15/policy/${slug}` }))}
            cols={3}
          />
        </Stack>
      </Sofa15Section>
    </>
  );
}
