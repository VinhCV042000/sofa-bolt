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

import { useSofa14Content } from './sofa14-i18n';
import { sofa14Alpha, SOFA14_COLORS } from './sofa14-data';

// ----------------------------------------------------------------------

export function Sofa14Faqs({ sx, ...other }: BoxProps) {
  const content = useSofa14Content();

  return (
    <Box component="section" id="faqs" sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA14_COLORS.canvasDeep, ...sx }} {...other}>
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography component={m.p} variants={varFade({ distance: 24 }).inUp} variant="overline" sx={{ color: SOFA14_COLORS.coralDeep, letterSpacing: 2 }}>
            {content.faqs.kicker}
          </Typography>
          <Typography component={m.h2} variants={varFade({ distance: 24 }).inUp} sx={{ m: 0, fontSize: { xs: 28, md: 42 }, fontWeight: 800, lineHeight: 1.15, color: SOFA14_COLORS.ink }}>
            {content.faqs.title}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {content.faqs.items.map((faq, index) => (
            <Accordion
              key={faq.question}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              transition={{ delay: index * 0.05 }}
              disableGutters
              sx={{
                borderRadius: '24px !important',
                bgcolor: SOFA14_COLORS.white,
                overflow: 'hidden',
                border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.08)}`,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: SOFA14_COLORS.coralDeep }} />}
                sx={{ px: 3, py: 1 }}
              >
                <Typography variant="subtitle1" sx={{ color: SOFA14_COLORS.ink, fontWeight: 700 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.85), lineHeight: 1.9 }}>
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
