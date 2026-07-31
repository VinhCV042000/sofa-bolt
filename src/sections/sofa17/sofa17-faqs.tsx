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

import { useSofa17Content } from './sofa17-i18n';
import { SOFA17_COLORS } from './sofa17-data';

// ----------------------------------------------------------------------

export function Sofa17Faqs({ sx, ...other }: BoxProps) {
  const content = useSofa17Content();

  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA17_COLORS.cream,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA17_COLORS.teal, 0.5), borderRadius: 1 }} />
              <Typography variant="overline" sx={{ color: SOFA17_COLORS.teal, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 'fontWeightMedium' }}>
                {content.faqs.kicker}
              </Typography>
              <Box sx={{ width: 28, height: 2, bgcolor: varAlpha(SOFA17_COLORS.teal, 0.5), borderRadius: 1 }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: SOFA17_COLORS.ink, fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.faqs.title.split(' ').slice(0, -3).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA17_COLORS.ruby }}>
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
                borderBottom: `1px solid ${varAlpha(SOFA17_COLORS.teal, 0.1)}`,
                borderRadius: '0 !important',
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="eva:plus-outline" sx={{ color: SOFA17_COLORS.saffron }} />}
                sx={{ '& .MuiAccordionSummary-content': { my: 2 } }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: SOFA17_COLORS.ink, letterSpacing: 0.3 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Typography variant="body2" sx={{ color: SOFA17_COLORS.inkSoft, lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
