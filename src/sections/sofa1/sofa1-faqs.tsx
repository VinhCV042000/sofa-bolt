import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_FAQS } from './sofa1-data';

// ----------------------------------------------------------------------

export function Sofa1Faqs({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={4}>
            <Stack spacing={2} sx={{ position: 'sticky', top: 100 }}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  FAQ
                </Typography>
              </Box>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2">
                  Câu hỏi{' '}
                  <Box component="span" sx={{ opacity: 0.4 }}>
                    thường gặp
                  </Box>
                </Typography>
              </Box>
              <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Không tìm thấy câu trả lời? Liên hệ hotline 1900 6789 — đội ngũ tư vấn sẵn sàng hỗ
                  trợ bạn.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={8}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
              {SOFA1_FAQS.map((faq, index) => (
                <Accordion
                  key={faq.question}
                  defaultExpanded={index === 0}
                  sx={{
                    bgcolor: 'background.paper',
                    '&:before': { display: 'none' },
                    '& + &': { mt: 1.5 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: (t) => t.customShadows.card,
                  }}
                >
                  <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'fontWeightBold' }}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
