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

import { SOFA9_FAQS, SOFA9_COLORS } from './sofa9-data';

// ----------------------------------------------------------------------

export function Sofa9Faqs({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA9_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: SOFA9_COLORS.pink, letterSpacing: 3, fontWeight: 'fontWeightBold' }}>
              FAQ
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA9_COLORS.black }}>
              Câu hỏi{' '}
              <Box component="span" sx={{ color: SOFA9_COLORS.teal }}>
                thường gặp
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ maxWidth: 720, mx: 'auto' }}>
          {SOFA9_FAQS.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              sx={{
                bgcolor: 'common.white',
                '&:before': { display: 'none' },
                '& + &': { mt: 2 },
                borderRadius: '16px',
                overflow: 'hidden',
                border: `3px solid ${SOFA9_COLORS.black}`,
                boxShadow: `4px 4px 0 ${index % 2 === 0 ? SOFA9_COLORS.pink : SOFA9_COLORS.teal}`,
              }}
            >
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.black }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
