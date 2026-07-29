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

import { SOFA10_COLORS, SOFA10_TESTIMONIALS } from './sofa10-data';

// ----------------------------------------------------------------------

export function Sofa10Testimonials({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 4 },
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
        bgcolor: SOFA10_COLORS.warmWhite,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, maxWidth: 580 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA10_COLORS.stone, letterSpacing: 6, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
              Voices · 声
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              Cộng đồng{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA10_COLORS.wood }}>
                yêu tĩnh tại
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Carousel carousel={carousel}>
            {SOFA10_TESTIMONIALS.map((item) => (
              <Stack
                key={item.name}
                spacing={2.5}
                sx={{
                  p: 4,
                  height: 1,
                  minHeight: 280,
                  bgcolor: 'common.white',
                  border: `1px solid ${varAlpha(SOFA10_COLORS.stoneLight, 0.3)}`,
                  borderRadius: '4px',
                  position: 'relative',
                }}
              >
                <Rating value={item.rating} readOnly size="small" sx={{ color: SOFA10_COLORS.wood, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, lineHeight: 2, fontWeight: 'fontWeightLight', fontStyle: 'italic' }}>
                  &ldquo;{item.content}&rdquo;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={item.avatar} alt={item.name} sx={{ border: `1px solid ${varAlpha(SOFA10_COLORS.wood, 0.3)}` }} />
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2" sx={{ color: SOFA10_COLORS.ink, fontWeight: 'fontWeightNormal', letterSpacing: 0.3 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: SOFA10_COLORS.stone, fontWeight: 'fontWeightLight' }}>
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
