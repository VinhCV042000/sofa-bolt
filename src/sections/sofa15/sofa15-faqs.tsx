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

import { useSofa15Content } from './sofa15-i18n';
import { SOFA15_COLORS } from './sofa15-data';

// ----------------------------------------------------------------------

export function Sofa15Faqs({ sx, ...other }: BoxProps) {
  const content = useSofa15Content();

  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: SOFA15_COLORS.charcoal,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', maxWidth: 540, mx: 'auto' }}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
              <Typography variant="overline" sx={{ color: SOFA15_COLORS.gold, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 'fontWeightLight' }}>
                {content.faqs.kicker}
              </Typography>
              <Box sx={{ width: 24, height: 1, bgcolor: varAlpha(SOFA15_COLORS.gold, 0.5) }} />
            </Stack>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', letterSpacing: -0.5 }}>
              {content.faqs.title.split(' ').slice(0, -3).join(' ')}{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: SOFA15_COLORS.gold }}>
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
                bgcolor: 'transparent',
                '&:before': { display: 'none' },
                '& + &': { mt: 0.5 },
                borderBottom: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.15)}`,
                borderRadius: 0,
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="eva:plus-outline" sx={{ color: SOFA15_COLORS.gold }} />}
                sx={{ '& .MuiAccordionSummary-content': { my: 2 } }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', letterSpacing: 0.3 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2, fontWeight: 'fontWeightLight' }}>
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
