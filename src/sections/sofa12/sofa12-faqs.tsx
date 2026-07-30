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

import { sofa12Alpha, SOFA12_COLORS, SOFA12_FAQS } from './sofa12-data';

// ----------------------------------------------------------------------

export function Sofa12Faqs({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="faqs"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA12_COLORS.sand, ...sx }}
      {...other}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA12_COLORS.clay, letterSpacing: 3 }}
          >
            Hỏi & đáp
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 30, md: 44 },
              fontWeight: 400,
              lineHeight: 1.15,
              color: SOFA12_COLORS.ink,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
            Những điều khách hay hỏi
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {SOFA12_FAQS.map((faq, index) => (
            <Accordion
              key={faq.question}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              transition={{ delay: index * 0.05 }}
              disableGutters
              sx={{
                borderRadius: 2,
                bgcolor: SOFA12_COLORS.cream,
                border: `1px solid ${sofa12Alpha(SOFA12_COLORS.ink, 0.1)}`,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: SOFA12_COLORS.clay }} />
                }
                sx={{ px: 3, py: 1 }}
              >
                <Typography variant="subtitle1" sx={{ color: SOFA12_COLORS.ink }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography sx={{ color: sofa12Alpha(SOFA12_COLORS.inkSoft, 0.82), lineHeight: 1.9 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
