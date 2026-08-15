import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { SOFA18_SUPPORT_SECTIONS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

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
  const current = SOFA18_SUPPORT_SECTIONS.find((s) => s.slug === section);
  const guide = section ? GUIDES[section] : undefined;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Trung tâm trợ giúp'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="HỖ TRỢ"
        title={<span>{(current?.title ?? 'Trung tâm trợ giúp').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Mọi hướng dẫn, chính sách và kênh liên hệ hỗ trợ của Sofa18.'}
        image={SOFA18_PAGE_IMAGES.service1}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {guide && (
            <Sofa18Panel title={current?.title}>
              <Stack spacing={1.5}>
                {guide.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{line}</Typography>
                ))}
              </Stack>
            </Sofa18Panel>
          )}

          {section === 'ticket' && (
            <Sofa18Panel title="Gửi ticket hỗ trợ">
              <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                <TextField fullWidth label="Họ và tên" sx={sofa18FieldSx} />
                <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                <TextField fullWidth label="Mã đơn hàng (nếu có)" sx={sofa18FieldSx} />
                <TextField fullWidth multiline rows={4} label="Mô tả vấn đề" sx={sofa18FieldSx} />
                <Button size="large" variant="contained" sx={sofa18ButtonSx}>Gửi ticket</Button>
              </Stack>
            </Sofa18Panel>
          )}

          {section === 'chat' && (
            <Sofa18Panel title="Chat trực tuyến">
              <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>
                Tư vấn viên Sofa18 trực tuyến 8:00 - 21:00 hằng ngày. Nhấn nút bên dưới để bắt đầu trò chuyện.
              </Typography>
              <Button size="large" variant="contained" sx={{ ...sofa18ButtonSx, alignSelf: 'flex-start' }}>Bắt đầu chat</Button>
            </Sofa18Panel>
          )}

          <Stack>
            <Sofa18SectionTitle>Kênh hỗ trợ</Sofa18SectionTitle>
            <Sofa18LinkGrid cols={3} items={SOFA18_SUPPORT_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.path }))} />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
