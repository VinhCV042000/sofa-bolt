import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA20_COLORS } from './sofa20-data';
import { useSofa20Content } from './sofa20-i18n';

// ----------------------------------------------------------------------

export function Sofa20Faqs({ sx, ...other }: BoxProps) {
  const content = useSofa20Content();

  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA20_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 28, height: 3, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.5), borderRadius: 0 }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copper, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}>
                {content.faqs.kicker}
              </Typography>
              <Box sx={{ width: 28, height: 3, bgcolor: varAlpha(SOFA20_COLORS.copper, 0.5), borderRadius: 0 }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA20_COLORS.ink, fontWeight: 'fontWeightBold', letterSpacing: -0.5, textTransform: 'uppercase' }}>
              {content.faqs.title.split(' ').slice(0, -3).join(' ')}{' '}
              <Box component="span" sx={{ color: SOFA20_COLORS.burntOrange }}>
                {content.faqs.title.split(' ').slice(-3).join(' ')}
              </Box>
            </Typography>
          </Box>
        </Stack>

        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ maxWidth: 680, mx: 'auto' }}>
          {content.faqs.items.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              sx={{
                bgcolor: 'common.white',
                '&:before': { display: 'none' },
                '& + &': { mt: 1 },
                borderBottom: `2px solid ${varAlpha(SOFA20_COLORS.espresso, 0.1)}`,
                borderRadius: '0 !important',
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="eva:plus-outline" sx={{ color: SOFA20_COLORS.copper }} />}
                sx={{ '& .MuiAccordionSummary-content': { my: 2 } }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold', color: SOFA20_COLORS.ink, letterSpacing: 0.3, textTransform: 'uppercase' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Typography variant="body2" sx={{ color: SOFA20_COLORS.inkSoft, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
