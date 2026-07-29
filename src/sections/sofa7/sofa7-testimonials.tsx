import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SOFA7_COLORS, SOFA7_TESTIMONIALS } from './sofa7-data';

// ----------------------------------------------------------------------

export function Sofa7Testimonials({ sx, ...other }: BoxProps) {
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
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              ĐÁNH GIÁ
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase', letterSpacing: -1 }}>
              Cộng đồng{' '}
              <Box component="span" sx={{ color: SOFA7_COLORS.concrete }}>
                urban
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Carousel carousel={carousel}>
            {SOFA7_TESTIMONIALS.map((item) => (
              <Stack
                key={item.name}
                spacing={2.5}
                sx={{
                  p: 3.5,
                  height: 1,
                  minHeight: 280,
                  bgcolor: 'background.paper',
                  border: `2px solid ${varAlpha(SOFA7_COLORS.concrete, 0.08)}`,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 32,
                    height: 32,
                    bgcolor: SOFA7_COLORS.electric,
                  }}
                />
                <Rating value={item.rating} readOnly size="small" sx={{ color: SOFA7_COLORS.electric }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, lineHeight: 1.7 }}>
                  &ldquo;{item.content}&rdquo;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={item.avatar} alt={item.name} sx={{ border: `2px solid ${SOFA7_COLORS.electric}` }} />
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', textTransform: 'uppercase' }}>
                      {item.role}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Carousel>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 4 }}>
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
