import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const SUPPORT_ITEMS = [
  { slug: 'faq', title: 'FAQ', desc: 'Câu hỏi thường gặp về sản phẩm và dịch vụ.', icon: 'solar:question-circle-bold-duotone', href: '/sofa15/faq' },
  { slug: '', title: 'Trung tâm trợ giúp', desc: 'Tất cả hướng dẫn và chính sách tại một nơi.', icon: 'solar:help-bold-duotone', href: '/sofa15/support' },
  { slug: 'chat', title: 'Chat trực tuyến', desc: 'Trò chuyện với chuyên viên tư vấn 9:00-21:00.', icon: 'solar:chat-round-dots-bold-duotone', href: '/sofa15/support/chat' },
  { slug: 'ticket', title: 'Gửi ticket hỗ trợ', desc: 'Tạo yêu cầu hỗ trợ, phản hồi trong 24 giờ.', icon: 'solar:ticket-bold-duotone', href: '/sofa15/support/ticket' },
  { slug: 'buying-guide', title: 'Hướng dẫn mua hàng', desc: 'Các bước đặt hàng trực tuyến và tại showroom.', icon: 'solar:cart-check-bold-duotone', href: '/sofa15/support/buying-guide' },
  { slug: 'payment-guide', title: 'Hướng dẫn thanh toán', desc: 'Chuyển khoản, thẻ, trả góp 0% và COD.', icon: 'solar:card-bold-duotone', href: '/sofa15/support/payment-guide' },
  { slug: 'shipping', title: 'Chính sách giao hàng', desc: 'Giao lắp miễn phí nội thành, toàn quốc 2-5 ngày.', icon: 'solar:delivery-bold-duotone', href: '/sofa15/policy/shipping' },
  { slug: 'warranty', title: 'Chính sách bảo hành', desc: 'Bảo hành khung và đệm lên tới 10 năm.', icon: 'solar:shield-check-bold-duotone', href: '/sofa15/policy/warranty' },
  { slug: 'returns', title: 'Chính sách đổi trả', desc: 'Đổi trả trong 30 ngày với sản phẩm nguyên trạng.', icon: 'solar:refresh-circle-bold-duotone', href: '/sofa15/policy/returns' },
];

const GUIDES: Record<string, string[]> = {
  'buying-guide': [
    'Bước 1: Chọn tác phẩm trong danh mục hoặc bộ sưu tập.',
    'Bước 2: Chọn chất liệu, màu sắc và cấu hình mong muốn.',
    'Bước 3: Thêm vào giỏ hàng và kiểm tra lại đơn.',
    'Bước 4: Nhập thông tin giao hàng và chọn phương thức thanh toán.',
    'Bước 5: Nhận xác nhận đơn hàng và theo dõi tiến trình chế tác.',
  ],
  'payment-guide': [
    'Chuyển khoản ngân hàng: nội dung ghi mã đơn hàng.',
    'Thẻ tín dụng / ghi nợ quốc tế: Visa, Mastercard, JCB.',
    'Trả góp 0% lãi suất 6-12 tháng qua ngân hàng liên kết.',
    'Thanh toán khi nhận hàng (COD) áp dụng đơn dưới 30 triệu.',
    'Đặt cọc 30% với đơn hàng bespoke, thanh toán phần còn lại khi giao.',
  ],
};

const goldField = {
  '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
  '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || '';
  const current = SUPPORT_ITEMS.find((i) => i.slug === section);
  const guide = GUIDES[section];

  return (
    <>
      <Helmet>
        <title>{current?.title || 'Trung tâm trợ giúp'} — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="HỖ TRỢ"
        title={
          <>
            TRUNG TÂM <span>TRỢ GIÚP</span>
          </>
        }
        subtitle={current?.desc || 'Chúng tôi luôn sẵn sàng đồng hành cùng bạn — trước, trong và sau khi mua hàng.'}
        image={SOFA15_PAGE_IMAGES.contact}
      />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SUPPORT_ITEMS.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={4}>
              <Stack
                component={RouterLink}
                href={item.href}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  textDecoration: 'none',
                  bgcolor: SOFA15_COLORS.charcoal,
                  border: `1px solid ${varAlpha(SOFA15_COLORS.gold, item.slug === section && section ? 0.8 : 0.25)}`,
                  '&:hover': { borderColor: SOFA15_COLORS.gold },
                  transition: 'border-color 0.25s',
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: SOFA15_COLORS.gold,
                    border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`,
                  }}
                >
                  <Iconify icon={item.icon} width={26} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), lineHeight: 1.8 }}>
                  {item.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {guide && (
          <Stack spacing={2} sx={{ mt: 6, p: 4, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
            <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>
              {current?.title}
            </Typography>
            {guide.map((line) => (
              <Stack key={line} direction="row" spacing={1.5} alignItems="flex-start">
                <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA15_COLORS.gold, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.9 }}>
                  {line}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}

        {section === 'ticket' && (
          <Stack spacing={2.5} sx={{ mt: 6, p: 4, maxWidth: 640, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
            <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>
              Gửi ticket hỗ trợ
            </Typography>
            <TextField fullWidth label="Họ và tên" sx={goldField} />
            <TextField fullWidth label="Email hoặc số điện thoại" sx={goldField} />
            <TextField fullWidth label="Mã đơn hàng (nếu có)" sx={goldField} />
            <TextField fullWidth multiline rows={4} label="Mô tả vấn đề" sx={goldField} />
            <Button
              size="large"
              variant="contained"
              sx={{ alignSelf: 'flex-start', borderRadius: 0, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}
            >
              Gửi ticket
            </Button>
          </Stack>
        )}

        {section === 'chat' && (
          <Stack spacing={2} alignItems="center" sx={{ mt: 6, p: 6, textAlign: 'center', bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}` }}>
            <Iconify icon="solar:chat-round-dots-bold-duotone" width={56} sx={{ color: SOFA15_COLORS.gold }} />
            <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 'fontWeightLight', fontFamily: theme.typography.fontSecondaryFamily }}>
              Chat trực tuyến
            </Typography>
            <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), maxWidth: 460, lineHeight: 1.9 }}>
              Chuyên viên tư vấn của Maison Gatsby trực tuyến từ 9:00 đến 21:00 mỗi ngày. Hoặc gọi hotline 1900 1925 để được hỗ trợ ngay.
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{ borderRadius: 0, bgcolor: SOFA15_COLORS.gold, color: SOFA15_COLORS.black, '&:hover': { bgcolor: SOFA15_COLORS.goldLight } }}
            >
              Bắt đầu trò chuyện
            </Button>
          </Stack>
        )}
      </Sofa15Section>
    </>
  );
}