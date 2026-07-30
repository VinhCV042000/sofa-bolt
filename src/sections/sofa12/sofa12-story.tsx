import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { sofa12Alpha, SOFA12_COLORS, SOFA12_IMAGES, SOFA12_STORY } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Story({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="story"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.cream, ...sx }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Box sx={{ flex: 1, position: 'relative', width: 1 }}>
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inLeft}
              alt="Xưởng mộc thủ công"
              src={SOFA12_IMAGES.story1}
              sx={{
                width: 1,
                height: { xs: 320, md: 520 },
                objectFit: 'cover',
                borderRadius: '240px 240px 20px 20px',
              }}
            />
            <Box
              component={m.img}
              variants={varFade({ distance: 32 }).inUp}
              alt="Chi tiết vải lanh"
              src={SOFA12_IMAGES.story2}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                right: -40,
                bottom: -40,
                width: 200,
                height: 240,
                objectFit: 'cover',
                borderRadius: '100px 100px 16px 16px',
                border: `8px solid ${SOFA12_COLORS.cream}`,
              }}
            />
          </Box>

          <Stack spacing={4} sx={{ flex: 1 }}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Typography
                variant="overline"
                sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3, display: 'block', mb: 2 }}
              >
                Câu chuyện xưởng
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 46 },
                  lineHeight: 1.15,
                  color: SOFA12_COLORS.ink,
                  fontFamily: (t) => t.typography.fontSecondaryFamily,
                }}
              >
                Ba điều chúng tôi không đánh đổi
              </Typography>
            </Box>

            <Stack spacing={0}>
              {SOFA12_STORY.map((item, index) => (
                <Stack
                  key={item.title}
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  direction="row"
                  spacing={3}
                  sx={{
                    py: 3,
                    borderTop: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.14)}`,
                    ...(index === SOFA12_STORY.length - 1 && {
                      borderBottom: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.14)}`,
                    }),
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      minWidth: 44,
                      color: SOFA12_COLORS.clay,
                      fontFamily: (t) => t.typography.fontSecondaryFamily,
                    }}
                  >
                    0{index + 1}
                  </Typography>
                  <Box>
                    <Typography variant="h6" sx={{ color: SOFA12_COLORS.ink, mb: 0.75 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.8), lineHeight: 1.8 }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
