import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_POLICIES } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Panel, Sofa17LinkGrid } from 'src/sections/sofa17-pages/sofa17-shop-ui';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';

export default function Page() {
  const { type = 'shipping' } = useParams();
  const policy = SOFA17_POLICIES[type] ?? SOFA17_POLICIES.shipping;

  return (
    <>
      <Helmet>
        <title>{`${policy.title} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero
        overline="CHÍNH SÁCH"
        title={<>{policy.title.split(' ')[0]} <span>{policy.title.split(' ').slice(1).join(' ')}</span></>}
        subtitle={policy.intro}
        image={SOFA17_PAGE_IMAGES.workshop}
      />

      <Sofa17Section bg="black">
        <Stack spacing={5} sx={{ maxWidth: 860, mx: 'auto' }}>
          <Sofa17Panel title="Nội dung chính sách">
            <Stack spacing={2}>
              {policy.items.map((item) => (
                <Stack key={item} direction="row" spacing={2}>
                  <Box sx={{ mt: 1.2, width: 6, height: 6, flexShrink: 0, bgcolor: SOFA17_COLORS.gold }} />
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.55), lineHeight: 2 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Sofa17Panel>

          <Sofa17LinkGrid
            items={Object.entries(SOFA17_POLICIES).map(([slug, p]) => ({ title: p.title, desc: p.intro, icon: 'solar:document-text-bold-duotone', path: `/sofa17/policy/${slug}` }))}
            cols={3}
          />
        </Stack>
      </Sofa17Section>
    </>
  );
}
