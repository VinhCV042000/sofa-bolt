import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA5_FAQS } from './sofa5-data';

// ----------------------------------------------------------------------

export function Sofa5Faqs({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.warning.mainChannel, 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Câu hỏi thường gặp
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              Bạn cần{' '}
              <Box component="span" sx={{ color: 'warning.dark' }}>
                biết thêm
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={2} sx={{ maxWidth: 720, mx: 'auto' }}>
          {SOFA5_FAQS.map((faq, index) => (
            <Accordion
              key={faq.question}
              component={m.div}
              variants={varFade({ distance: 24 }).inUp}
              transition={{ delay: index * 0.05 }}
              defaultExpanded={index === 0}
              sx={{
                borderRadius: '12px !important',
                border: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                '&:before': { display: 'none' },
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="solar:alt-arrow-down-bold-duotone" width={24} />}
                sx={{ minHeight: 64 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
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
