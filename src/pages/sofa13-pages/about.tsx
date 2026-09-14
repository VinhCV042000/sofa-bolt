import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_COMPANY_INFO } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { useSofa13PagesContent } from 'src/sections/sofa13-pages/sofa13-pages-i18n';

export default function Page() {
  const t = useSofa13PagesContent();
  const a = t.about;

  return (
    <>
      <Helmet><title>{`${a.heroOverline} — Sofa13`}</title></Helmet>
      <Sofa13PageHero overline={a.heroOverline} title={<>{a.heroTitle} <span>SOFA13</span></>} subtitle={a.heroSubtitle} image={SOFA13_PAGE_IMAGES.aboutHero} />

      <Sofa13Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA13_PAGE_IMAGES.workshop} alt="Sofa13 workshop" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.4)}` }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, py: 0.75, width: 'fit-content', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06) }}>
                <Iconify icon="solar:crown-star-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA13_COLORS.goldPale, letterSpacing: 3, fontSize: 12 }}>{a.badgeSince}</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
                {a.storyTitle} <span>{a.storyTitleAccent}</span>
              </Typography>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>
                {a.storyP1}
              </Typography>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>
                {a.storyP2}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>

      <Sofa13Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 4 }}>{a.valuesOverline}</Typography>
          <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            {a.valuesTitle} <span>{a.valuesTitleAccent}</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {a.values.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.04) }}>
              <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${SOFA13_COLORS.gold}`, color: SOFA13_COLORS.gold }}>
                <Iconify icon={item.icon} width={28} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.8 }}>{item.desc}</Typography>
            </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section>
        <Grid container spacing={3}>
          {SOFA13_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), letterSpacing: 1, fontWeight: 700 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 4 }}>{a.exploreOverline}</Typography>
          <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            {a.exploreTitle} <span>{a.exploreTitleAccent}</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {a.subPages.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa13/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.15)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.noirDeep, 0.4), '&:hover': { borderColor: SOFA13_COLORS.gold, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06) }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, color: SOFA13_COLORS.gold }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', p: { xs: 5, md: 8 }, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
          <Typography variant="h3" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            {a.ctaTitle} <span>{a.ctaTitleAccent}</span>
          </Typography>
          <Typography sx={{ color: SOFA13_COLORS.ivorySoft }}>{a.ctaText}</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa13/showrooms" size="large" sx={{ px: 4, py: 1.75, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, borderRadius: 0, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>{a.ctaSalon}</Button>
            <Button component={RouterLink} href="/sofa13/products" size="large" sx={{ px: 4, py: 1.75, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, borderRadius: 0, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>{a.ctaProducts}</Button>
          </Stack>
        </Stack>
      </Sofa13Section>
    </>
  );
}
