import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SOFA20_COLORS } from './sofa20-data';
import { useSofa20Content } from './sofa20-i18n';

// ----------------------------------------------------------------------

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
];

export function Sofa20Testimonials({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '32px' },
    },
  });

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA20_COLORS.creamLight,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 36, height: 3, bgcolor: SOFA20_COLORS.copper, borderRadius: 0 }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copper, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                {content.testimonials.kicker}
              </Typography>
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA20_COLORS.ink, fontWeight: 'fontWeightBold', letterSpacing: -0.5, textTransform: 'uppercase' }}>
              {content.testimonials.title.split(' ').slice(0, -3).join(' ')}{' '}
              <Box component="span" sx={{ color: SOFA20_COLORS.copper }}>
                {content.testimonials.title.split(' ').slice(-3).join(' ')}
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Carousel carousel={carousel}>
            {content.testimonials.items.map((item, index) => (
              <Stack
                key={item.name}
                spacing={2.5}
                sx={{
                  p: 4,
                  height: 1,
                  minHeight: 300,
                  bgcolor: 'common.white',
                  borderRadius: 0,
                  border: `2px solid ${varAlpha(SOFA20_COLORS.espresso, 0.1)}`,
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 20,
                    fontSize: 64,
                    color: varAlpha(SOFA20_COLORS.copper, 0.15),
                    fontFamily: (t) => t.typography.fontSecondaryFamily,
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </Typography>
                <Rating value={5} readOnly size="small" sx={{ color: SOFA20_COLORS.copper }} />
                <Typography variant="body2" sx={{ color: SOFA20_COLORS.inkSoft, flex: 1, lineHeight: 2, fontWeight: 'fontWeightLight', fontStyle: 'italic' }}>
                  {item.quote}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={AVATARS[index]} alt={item.name} sx={{ borderRadius: 0, border: `2px solid ${varAlpha(SOFA20_COLORS.copper, 0.3)}` }} />
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2" sx={{ color: SOFA20_COLORS.ink, fontWeight: 'fontWeightBold', letterSpacing: 0.3, textTransform: 'uppercase' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: SOFA20_COLORS.copperDeep, fontWeight: 'fontWeightLight', textTransform: 'uppercase' }}>
                      {item.role}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Carousel>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 5 }}>
            <CarouselDotButtons
              variant="rounded"
              scrollSnaps={carousel.dots.scrollSnaps}
              selectedIndex={carousel.dots.selectedIndex}
              onClickDot={carousel.dots.onClickDot}
            />
            <CarouselArrowBasicButtons {...carousel.arrows} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
