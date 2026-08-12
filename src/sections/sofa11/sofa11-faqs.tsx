import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { sofa11Alpha, SOFA11_FAQS, SOFA11_COLORS } from './sofa11-data';

// ----------------------------------------------------------------------

export function Sofa11Faqs({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="faqs"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: SOFA11_COLORS.voidDeep, ...sx }}
      {...other}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA11_COLORS.lime, letterSpacing: 3 }}>
              Hỏi & đáp
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h2"
              sx={{ color: SOFA11_COLORS.cream, fontWeight: 900, textTransform: 'uppercase' }}
            >
              Thắc mắc{' '}
              <Box component="span" sx={{ color: SOFA11_COLORS.tangerine }}>
                thường gặp
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={1.5}>
          {SOFA11_FAQS.map((faq) => (
            <Box key={faq.question} component={m.div} variants={varFade({ distance: 24 }).inUp}>
              <Accordion
                disableGutters
                sx={{
                  borderRadius: 3,
                  bgcolor: sofa11Alpha(SOFA11_COLORS.cream, 0.04),
                  border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.1)}`,
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { borderColor: SOFA11_COLORS.magenta },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Iconify icon="eva:plus-fill" width={20} sx={{ color: SOFA11_COLORS.lime }} />
                  }
                  sx={{ px: 2.5, py: 1 }}
                >
                  <Typography sx={{ color: SOFA11_COLORS.cream, fontWeight: 800 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pb: 2.5 }}>
                  <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.65), lineHeight: 1.9 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
