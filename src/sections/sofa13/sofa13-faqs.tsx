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

import { useSofa13Content } from './sofa13-i18n';
import { sofa13Alpha, SOFA13_COLORS } from './sofa13-data';

// ----------------------------------------------------------------------

export function Sofa13Faqs({ sx, ...other }: BoxProps) {
  const content = useSofa13Content();

  return (
    <Box
      component="section"
      id="faqs"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: SOFA13_COLORS.noir, ...sx }}
      {...other}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            component={m.p}
            variants={varFade({ distance: 24 }).inUp}
            variant="overline"
            sx={{ color: SOFA13_COLORS.gold, letterSpacing: 3 }}
          >
            {content.faqs.overline}
          </Typography>
          <Typography
            component={m.h2}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              m: 0,
              fontSize: { xs: 28, md: 42 },
              lineHeight: 1.2,
              letterSpacing: 1,
              color: SOFA13_COLORS.ivory,
              fontFamily: (t) => t.typography.fontSecondaryFamily,
            }}
          >
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
                bgcolor: SOFA13_COLORS.charcoal,
                border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.22)}`,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: SOFA13_COLORS.gold }} />
                }
                sx={{ px: 3, py: 1 }}
              >
                <Typography variant="subtitle1" sx={{ color: SOFA13_COLORS.ivory }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.7), lineHeight: 1.9 }}>
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
