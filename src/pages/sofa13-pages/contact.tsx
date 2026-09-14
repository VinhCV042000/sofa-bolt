import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_COMPANY_INFO } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { useSofa13PagesContent } from 'src/sections/sofa13-pages/sofa13-pages-i18n';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const t = useSofa13PagesContent();
  const c = t.contact;

  return (
    <>
      <Helmet><title>{`${c.heroOverline} — Sofa13`}</title></Helmet>
      <Sofa13PageHero overline={c.heroOverline} title={<>{c.heroTitle} <span>{c.heroTitleAccent}</span></>} subtitle={c.heroSubtitle} image={SOFA13_PAGE_IMAGES.contact} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={5}>
            <Stack spacing={4} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{c.infoTitle}</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:map-point-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.gold }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{SOFA13_PAGE_COMPANY_INFO.address}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:phone-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.gold }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{SOFA13_PAGE_COMPANY_INFO.phone}</Typography></Stack>
                <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:letter-bold-duotone" width={20} sx={{ color: SOFA13_COLORS.gold }} /><Typography variant="body1" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7) }}>{SOFA13_PAGE_COMPANY_INFO.email}</Typography></Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            {submitted ? (
              <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 8 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Iconify icon="solar:check-circle-bold-duotone" width={80} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{c.formSuccess}</Typography>
              </Stack>
            ) : (
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h4" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{c.formMessage}</Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}><TextField fullWidth label={c.formName} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12} sm={6}><TextField fullWidth label={c.formPhone} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth label={c.formEmail} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                  <Grid xs={12}><TextField fullWidth multiline rows={4} label={c.formMessage} sx={{ '& .MuiOutlinedInput-root': { color: SOFA13_COLORS.ivory }, '& .MuiInputLabel-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) } }} /></Grid>
                </Grid>
                <Button onClick={() => setSubmitted(true)} size="large" variant="contained" startIcon={<Iconify icon="solar:letter-bold-duotone" />} sx={{ alignSelf: 'flex-start', borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>{c.formSubmit}</Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Sofa13Section>
    </>
  );
}
