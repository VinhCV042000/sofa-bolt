import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SOFA9_COLORS, SOFA9_TESTIMONIALS } from './sofa9-data';

// ----------------------------------------------------------------------

const CARD_COLORS = [SOFA9_COLORS.pink, SOFA9_COLORS.teal, SOFA9_COLORS.yellow, SOFA9_COLORS.purple];

export function Sofa9Testimonials({ sx, ...other }: BoxProps) {
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
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, maxWidth: 620 }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              ĐÁNH GIÁ
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA9_COLORS.black }}>
              Cộng đồng{' '}
              <Box component="span" sx={{ color: SOFA9_COLORS.teal }}>
                không chán
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Carousel carousel={carousel}>
            {SOFA9_TESTIMONIALS.map((item, index) => (
              <Stack
                key={item.name}
                spacing={2.5}
                sx={{
                  p: 3.5,
                  height: 1,
                  minHeight: 280,
                  bgcolor: 'common.white',
                  border: `3px solid ${SOFA9_COLORS.black}`,
                  borderRadius: '20px',
                  boxShadow: `5px 5px 0 ${CARD_COLORS[index % 4]}`,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -3,
                    right: -3,
                    width: 36,
                    height: 36,
                    bgcolor: CARD_COLORS[index % 4],
                    border: `3px solid ${SOFA9_COLORS.black}`,
                    borderRadius: '0 18px 0 18px',
                  }}
                />
                <Rating value={item.rating} readOnly size="small" sx={{ color: SOFA9_COLORS.yellow }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, lineHeight: 1.7 }}>
                  &ldquo;{item.content}&rdquo;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={item.avatar} alt={item.name} sx={{ border: `3px solid ${CARD_COLORS[index % 4]}` }} />
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2" sx={{ color: SOFA9_COLORS.black }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: SOFA9_COLORS.purple }}>
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
