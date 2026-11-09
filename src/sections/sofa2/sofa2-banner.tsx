import type { BoxProps } from '@mui/material/Box';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA2_IMAGES } from './sofa2-data';
import { useCmsBanners, type Sofa2CmsBanner } from './sofa2-cms-client';

type BannerContent = {
  image: string;
  overline: string;
  headline: string;
  description: string;
  ctaLink: string;
};

const FALLBACK_BANNER: BannerContent = {
  image: SOFA2_IMAGES.banner,
  overline: 'Công nghệ đệm Đức',
  headline: 'Memory foam giữ form sau 50,000 lần ngồi — êm ái không giới hạn',
  description:
    'Lớp đệm công nghệ Đức ôm theo cơ thể, giảm áp lực cột sống và giữ nguyên form dáng sau hàng chục nghìn lần sử dụng.',
  ctaLink: '',
};

function cmsBannerToContent(b: Sofa2CmsBanner): BannerContent {
  return {
    image: b.imageDesktop || b.imageMobile || SOFA2_IMAGES.banner,
    overline: b.name,
    headline: b.headline,
    description: '',
    ctaLink: b.ctaLink,
  };
}

// ----------------------------------------------------------------------

export function Sofa2Banner({ sx, ...other }: BoxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const { banners } = useCmsBanners('home');
  const content = banners.length > 0 ? cmsBannerToContent(banners[0]) : FALLBACK_BANNER;

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 320, md: 440 },
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <m.div style={{ x }} className="sofa2-banner-bg">
        <Box
          sx={{
            inset: -60,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${content.image})`,
          }}
        />
      </m.div>
      <Box
        sx={{
          inset: 0,
          position: 'absolute',
          background: (theme) =>
            `linear-gradient(to right, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.88)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.48)})`,
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Stack spacing={3} sx={{ maxWidth: 600 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: 4 }}>
              {content.overline}
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h3"
              sx={{
                color: 'common.white',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                lineHeight: 1.3,
              }}
            >
              {content.headline}
            </Typography>
          </Box>
          {content.description && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography sx={{ color: varAlpha('#FFFFFF', 0.64), maxWidth: 480, lineHeight: 1.7 }}>
                {content.description}
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
