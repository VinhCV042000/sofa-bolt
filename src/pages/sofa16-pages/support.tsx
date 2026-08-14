import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { SOFA16_SUPPORT_SECTIONS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

const GUIDES: Record<string, string[]> = {
  'buying-guide': [
    'Bước 1: Chọn sản phẩm và thêm vào giỏ hàng.',
    'Bước 2: Kiểm tra giỏ hàng và tiến hành thanh toán.',
    'Bước 3: Nhập thông tin giao hàng và chọn phương thức thanh toán.',
    'Bước 4: Nhận email xác nhận và theo dõi đơn hàng.',
  ],
  'payment-guide': [
    'Chuyển khoản ngân hàng: nhận thông tin tài khoản sau khi đặt hàng.',
    'Thẻ tín dụng/ghi nợ: thanh toán bảo mật qua cổng thanh toán.',
    'Trả góp 0%: áp dụng cho đơn từ 15 triệu với thẻ tín dụng liên kết.',
    'COD: thanh toán khi nhận hàng, áp dụng nội thành.',
  ],
};

export default function Page() {
  const { section } = useParams();
  const current = SOFA16_SUPPORT_SECTIONS.find((s) => s.slug === section);
  const guide = section ? GUIDES[section] : undefined;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Trung tâm trợ giúp'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="HỖ TRỢ"
        title={<span>{(current?.title ?? 'Trung tâm trợ giúp').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Mọi hướng dẫn, chính sách và kênh liên hệ hỗ trợ của Sofa16.'}
        image={SOFA16_PAGE_IMAGES.service1}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {guide && (
            <Sofa16Panel title={current?.title}>
              <Stack spacing={1.5}>
                {guide.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{line}</Typography>
                ))}
              </Stack>
            </Sofa16Panel>
          )}

          {section === 'ticket' && (
            <Sofa16Panel title="Gửi ticket hỗ trợ">
              <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                <TextField fullWidth label="Họ và tên" sx={sofa16FieldSx} />
                <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                <TextField fullWidth label="Mã đơn hàng (nếu có)" sx={sofa16FieldSx} />
                <TextField fullWidth multiline rows={4} label="Mô tả vấn đề" sx={sofa16FieldSx} />
                <Button size="large" variant="contained" sx={sofa16ButtonSx}>Gửi ticket</Button>
              </Stack>
            </Sofa16Panel>
          )}

          {section === 'chat' && (
            <Sofa16Panel title="Chat trực tuyến">
              <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>
                Tư vấn viên Sofa16 trực tuyến 8:00 - 21:00 hằng ngày. Nhấn nút bên dưới để bắt đầu trò chuyện.
              </Typography>
              <Button size="large" variant="contained" sx={{ ...sofa16ButtonSx, alignSelf: 'flex-start' }}>Bắt đầu chat</Button>
            </Sofa16Panel>
          )}

          <Stack>
            <Sofa16SectionTitle>Kênh hỗ trợ</Sofa16SectionTitle>
            <Sofa16LinkGrid cols={3} items={SOFA16_SUPPORT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.path }))} />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
