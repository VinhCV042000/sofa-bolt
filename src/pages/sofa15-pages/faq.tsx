import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_FAQS, SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const EXTRA_FAQS = [
  { question: 'Tôi có thể xem sofa trực tiếp ở đâu?', answer: 'Showroom Maison Gatsby tại Hà Nội, TP.HCM và Đà Nẵng — mở cửa 9:00-21:00 hằng ngày.' },
  { question: 'Thời gian chế tác một mẫu bespoke?', answer: 'Từ 3 đến 6 tuần tuỳ độ phức tạp, bao gồm render 3D và duyệt mẫu vật liệu.' },
  { question: 'Có hỗ trợ trả góp không?', answer: 'Có — trả góp 0% lãi suất 6-12 tháng qua thẻ tín dụng của các ngân hàng liên kết.' },
];

export default function Page() {
  const theme = useTheme();
  const faqs = [...SOFA15_PAGE_FAQS, ...EXTRA_FAQS];

  return (
    <>
      <Helmet>
        <title>Câu hỏi thường gặp — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="FAQ"
        title={
          <>
            CÂU HỎI <span>THƯỜNG GẶP</span>
          </>
        }
        subtitle="Giải đáp nhanh về sản phẩm, đặt hàng, giao nhận và bảo hành."
        image={SOFA15_PAGE_IMAGES.contact}
      />

      <Sofa15Section bg="black">
        <Stack spacing={1.5} sx={{ maxWidth: 860, mx: 'auto' }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              sx={{
                bgcolor: SOFA15_COLORS.charcoal,
                border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.2)}`,
                borderRadius: 0,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<Iconify icon="solar:alt-arrow-down-bold-duotone" sx={{ color: SOFA15_COLORS.gold }} />}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Sofa15Section>
    </>
  );
}