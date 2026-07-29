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

import { SOFA8_COLORS, SOFA8_TESTIMONIALS } from './sofa8-data';

// ----------------------------------------------------------------------

export function Sofa8Testimonials({ sx, ...other }: BoxProps) {
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
        bgcolor: SOFA8_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA8_COLORS.ocean, letterSpacing: 3 }}>
              Đánh giá
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA8_COLORS.navy }}>
              Cộng đồng{' '}
              <Box component="span" sx={{ color: SOFA8_COLORS.ocean }}>
                yêu biển
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Carousel carousel={carousel}>
            {SOFA8_TESTIMONIALS.map((item) => (
              <Stack
                key={item.name}
                spacing={2.5}
                sx={{
                  p: 3.5,
                  height: 1,
                  minHeight: 280,
                  borderRadius: '24px',
                  bgcolor: 'common.white',
                  border: `1px solid ${SOFA8_COLORS.sand}`,
                  position: 'relative',
                }}
              >
                <Iconify
                  icon="solar:water-bold-duotone"
                  width={32}
                  sx={{ color: SOFA8_COLORS.sky, opacity: 0.3, position: 'absolute', top: 16, right: 16 }}
                />
                <Rating value={item.rating} readOnly size="small" sx={{ color: SOFA8_COLORS.coral }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, lineHeight: 1.7 }}>
                  &ldquo;{item.content}&rdquo;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={item.avatar} alt={item.name} sx={{ border: `2px solid ${SOFA8_COLORS.sky}` }} />
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2" sx={{ color: SOFA8_COLORS.navy }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: SOFA8_COLORS.ocean }}>
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
