import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';

import { SOFA20_COLORS, SOFA20_IMAGES } from 'src/sections/sofa20/sofa20-data';

type PageDefinition = {
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  cards: string[];
  action?: string;
};

const PAGES: Record<string, PageDefinition> = {
  about: {
    title: 'Câu chuyện Ironworks & Co.',
    eyebrow: 'GIỚI THIỆU',
    description: 'Từ xưởng cơ khí Manchester đến những không gian sống mang dấu ấn riêng. Chúng tôi tạo nên sofa thủ công bền vững cho những người yêu vật liệu thật.',
    icon: 'solar:info-circle-bold-duotone',
    cards: ['Giới thiệu công ty', 'Lịch sử hình thành', 'Tầm nhìn & sứ mệnh', 'Giá trị cốt lõi'],
    action: 'Khám phá nhà máy',
  },
  products: {
    title: 'Bộ sưu tập sofa thủ công',
    eyebrow: 'SẢN PHẨM',
    description: 'Khung thép hàn tay, da thuộc nguyên tấm và những cấu hình được thiết kế để sống cùng bạn qua nhiều thế hệ.',
    icon: 'solar:armchair-bold-duotone',
    cards: ['Sofa phòng khách', 'Theo phong cách', 'Theo không gian', 'Theo kích thước', 'Theo giá', 'Bộ sưu tập mới'],
    action: 'Xem tất cả sản phẩm',
  },
  collections: {
    title: 'Bộ sưu tập chọn lọc',
    eyebrow: 'BỘ SƯU TẬP',
    description: 'Những thiết kế tiêu biểu của xưởng, từ bản giới hạn mới ra lò đến các tác phẩm bestseller được yêu thích nhất.',
    icon: 'solar:layers-bold-duotone',
    cards: ['Bộ sưu tập mới', 'Bộ sưu tập nổi bật', 'Bộ sưu tập theo mùa', 'Bộ sưu tập Luxury', 'Bộ sưu tập Bestseller'],
  },
  projects: {
    title: 'Dự án & không gian',
    eyebrow: 'DỰ ÁN',
    description: 'Sofa Ironworks trong những căn hộ, biệt thự, khách sạn và không gian thương mại được tạo nên để lưu giữ trải nghiệm.',
    icon: 'solar:buildings-bold-duotone',
    cards: ['Dự án căn hộ', 'Dự án biệt thự', 'Dự án khách sạn', 'Dự án resort', 'Dự án văn phòng', 'Dự án showroom'],
    action: 'Trao đổi dự án',
  },
  showrooms: {
    title: 'Ghé thăm showroom',
    eyebrow: 'SHOWROOM',
    description: 'Chạm vào chất liệu, thử từng độ ngả và gặp đội ngũ tư vấn của Ironworks tại showroom gần bạn.',
    icon: 'solar:map-point-bold-duotone',
    cards: ['Danh sách showroom', 'Bản đồ showroom', 'Lịch mở cửa', 'Hình ảnh showroom', 'Đặt lịch tham quan', 'Đặt lịch tư vấn'],
    action: 'Đặt lịch tham quan',
  },
  services: {
    title: 'Dịch vụ theo dấu ấn riêng',
    eyebrow: 'DỊCH VỤ',
    description: 'Từ một ý tưởng phác thảo đến sản phẩm hoàn thiện: đội ngũ của chúng tôi đồng hành trong từng quyết định.',
    icon: 'solar:settings-bold-duotone',
    cards: ['Thiết kế sofa theo yêu cầu', 'Thiết kế 3D', 'Tư vấn bố trí nội thất', 'Gia công sofa', 'Sofa OEM', 'Sofa ODM', 'Đặt hàng theo dự án'],
    action: 'Nhận tư vấn',
  },
  blog: {
    title: 'Tạp chí Ironworks',
    eyebrow: 'BLOG',
    description: 'Câu chuyện xưởng, cảm hứng nội thất và những kiến thức thực tế giúp bạn chọn, dùng và chăm sóc sofa đúng cách.',
    icon: 'solar:pen-bold-duotone',
    cards: ['Tin công ty', 'Tin khuyến mãi', 'Kinh nghiệm chọn sofa', 'Xu hướng nội thất', 'Kiến thức vật liệu', 'Hướng dẫn vệ sinh sofa'],
  },
  promotions: {
    title: 'Chăm sóc trọn đời',
    eyebrow: 'DỊCH VỤ HẬU MÃI',
    description: 'Mỗi sản phẩm Ironworks được chăm sóc sau khi rời xưởng, với chính sách bảo hành minh bạch và đội ngũ hỗ trợ tận tâm.',
    icon: 'solar:shield-check-bold-duotone',
    cards: ['Bảo hành', 'Bảo trì', 'Sửa chữa', 'Vệ sinh sofa', 'Đổi trả hàng'],
    action: 'Gửi yêu cầu hỗ trợ',
  },
  careers: {
    title: 'Làm việc cùng người yêu nghề',
    eyebrow: 'TUYỂN DỤNG',
    description: 'Gia nhập đội ngũ đang biến thép, da và những ý tưởng táo bạo thành các tác phẩm có tuổi đời dài.',
    icon: 'solar:case-bold-duotone',
    cards: ['Danh sách tuyển dụng', 'Chi tiết vị trí', 'Nộp CV', 'Hồ sơ ứng viên', 'Theo dõi tuyển dụng'],
    action: 'Xem vị trí đang tuyển',
  },
  contact: {
    title: 'Bắt đầu một cuộc trò chuyện',
    eyebrow: 'LIÊN HỆ',
    description: 'Bạn đang tìm một mẫu sofa, cần tư vấn cho dự án hay muốn ghé xưởng? Hãy để lại thông tin, chúng tôi sẽ liên hệ sớm.',
    icon: 'solar:phone-bold-duotone',
    cards: ['Tư vấn sản phẩm', 'Tư vấn dự án', 'Đặt lịch showroom', 'Hỗ trợ sau bán hàng'],
    action: 'Gửi yêu cầu',
  },
  account: {
    title: 'Tài khoản khách hàng',
    eyebrow: 'TÀI KHOẢN',
    description: 'Quản lý hồ sơ, địa chỉ giao hàng, đơn hàng, sản phẩm yêu thích và phiếu bảo hành của bạn.',
    icon: 'solar:user-bold-duotone',
    cards: ['Đăng nhập', 'Đăng ký', 'Quên mật khẩu', 'Hồ sơ cá nhân', 'Địa chỉ giao hàng', 'Đơn hàng của tôi', 'Yêu thích', 'Phiếu bảo hành'],
    action: 'Đăng nhập tài khoản',
  },
  b2b: {
    title: 'Đối tác B2B',
    eyebrow: 'HỢP TÁC',
    description: 'Giải pháp sofa cho đại lý, nhà phân phối, đối tác thi công và các dự án cần năng lực OEM/ODM tin cậy.',
    icon: 'solar:hand-shake-bold-duotone',
    cards: ['Giới thiệu hợp tác', 'Đại lý phân phối', 'Nhà phân phối', 'Đăng ký đại lý', 'Báo giá dự án', 'Yêu cầu sản xuất OEM', 'Đối tác thi công', 'Chính sách đại lý'],
    action: 'Đăng ký hợp tác',
  },
  cart: {
    title: 'Giỏ hàng & thanh toán',
    eyebrow: 'MUA HÀNG',
    description: 'Kiểm tra sản phẩm đã chọn, hoàn tất thanh toán và theo dõi đơn hàng của bạn trong một nơi.',
    icon: 'solar:cart-large-2-bold-duotone',
    cards: ['Giỏ hàng', 'Thanh toán', 'Thanh toán thành công', 'Theo dõi đơn hàng', 'Tài khoản khách hàng'],
    action: 'Xem sản phẩm',
  },
  support: {
    title: 'Trung tâm hỗ trợ',
    eyebrow: 'HỖ TRỢ',
    description: 'Câu trả lời nhanh, hướng dẫn mua hàng và các chính sách cần biết trước và sau khi sở hữu sofa Ironworks.',
    icon: 'solar:question-circle-bold-duotone',
    cards: ['FAQ', 'Trung tâm trợ giúp', 'Chat trực tuyến', 'Gửi ticket hỗ trợ', 'Hướng dẫn mua hàng', 'Hướng dẫn thanh toán', 'Chính sách giao hàng', 'Chính sách bảo hành', 'Chính sách đổi trả'],
  },
  member: {
    title: 'Khu vực thành viên',
    eyebrow: 'MEMBER AREA',
    description: 'Một không gian riêng cho khách hàng và đại lý theo dõi mọi hoạt động, quyền lợi và tài liệu bán hàng.',
    icon: 'solar:users-group-rounded-bold-duotone',
    cards: ['Dashboard khách hàng', 'Hồ sơ', 'Đơn hàng', 'Phiếu bảo hành', 'Điểm tích lũy', 'Voucher', 'Khiếu nại', 'Dashboard đại lý', 'Chính sách giá', 'Báo giá', 'Đơn hàng đại lý', 'Công nợ'],
  },
};

function getPage(pathname: string): PageDefinition {
  if (pathname.includes('/checkout') || pathname.includes('/orders') || pathname.includes('/search')) return PAGES.cart;
  if (pathname.includes('/faq') || pathname.includes('/policy') || pathname.includes('/ticket')) return PAGES.support;
  const match = Object.keys(PAGES).find((key) => pathname.startsWith(`/sofa20/${key}`));
  if (match) return PAGES[match];
  if (pathname.includes('/product')) return PAGES.products;
  return PAGES.support;
}

export default function Sofa20Pages() {
  const { pathname } = useLocation();
  const page = getPage(pathname);
  const pathParts = pathname.split('/').filter(Boolean).slice(1);

  return (
    <>
      <Helmet><title>{page.title} — Ironworks & Co</title></Helmet>
      <Box sx={{ bgcolor: SOFA20_COLORS.creamLight, minHeight: '70vh', py: { xs: 7, md: 11 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 820, mb: { xs: 6, md: 9 } }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon={page.icon} width={22} sx={{ color: SOFA20_COLORS.copper }} />
              <Typography variant="overline" sx={{ color: SOFA20_COLORS.copper, letterSpacing: 4 }}>{page.eyebrow}</Typography>
            </Stack>
            <Typography variant="h1" sx={{ color: SOFA20_COLORS.ink, fontFamily: 'Barlow, sans-serif', fontWeight: 700, letterSpacing: -1, fontSize: { xs: 42, md: 68 } }}>{page.title}</Typography>
            <Typography sx={{ color: SOFA20_COLORS.inkSoft, fontSize: { xs: 17, md: 20 }, lineHeight: 1.8 }}>{page.description}</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
              <Typography variant="caption" sx={{ color: SOFA20_COLORS.inkSoft }}>Trang chủ</Typography>
              {pathParts.map((part) => <Chip key={part} label={part.replaceAll('-', ' ')} size="small" sx={{ bgcolor: 'rgba(184,115,51,.12)', color: SOFA20_COLORS.copperDeep }} />)}
            </Stack>
          </Stack>

          <Grid container spacing={2.5}>
            {page.cards.map((card, index) => (
              <Grid key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: 1, p: { xs: 3, md: 4 }, borderRadius: 1.5, bgcolor: SOFA20_COLORS.white, border: `1px solid rgba(59,36,23,.12)`, boxShadow: '0 12px 30px rgba(59,36,23,.06)' }}>
                  <Stack spacing={2.5}>
                    <Box sx={{ width: 42, height: 42, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: index % 2 ? 'rgba(201,162,39,.14)' : 'rgba(184,115,51,.14)', color: index % 2 ? SOFA20_COLORS.brassDeep : SOFA20_COLORS.copperDeep }}>
                      <Iconify icon={index % 2 ? 'solar:star-bold-duotone' : page.icon} width={21} />
                    </Box>
                    <Typography variant="h6" sx={{ color: SOFA20_COLORS.ink, fontWeight: 700 }}>{card}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA20_COLORS.inkSoft, lineHeight: 1.7 }}>Thông tin được tuyển chọn từ xưởng, giúp bạn có lựa chọn rõ ràng và phù hợp hơn.</Typography>
                    <Button component={RouterLink} href="/sofa20/contact" size="small" sx={{ alignSelf: 'flex-start', p: 0, color: SOFA20_COLORS.copperDeep, '&:hover': { bgcolor: 'transparent', color: SOFA20_COLORS.burntOrange } }}>Tìm hiểu thêm <Iconify icon="solar:arrow-right-linear" width={18} sx={{ ml: 0.5 }} /></Button>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {page.action && (
            <Box sx={{ mt: 8, p: { xs: 4, md: 6 }, borderRadius: 1.5, bgcolor: SOFA20_COLORS.charcoalDeep, color: SOFA20_COLORS.cream }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ md: 'center' }} justifyContent="space-between">
                <Box><Typography variant="h4" sx={{ color: SOFA20_COLORS.cream, mb: 1 }}>{page.action}</Typography><Typography sx={{ color: 'rgba(240,230,210,.7)' }}>Đội ngũ Ironworks sẵn sàng đồng hành cùng bạn.</Typography></Box>
                <Button component={RouterLink} href="/sofa20/contact" variant="contained" sx={{ bgcolor: SOFA20_COLORS.copper, color: SOFA20_COLORS.white, '&:hover': { bgcolor: SOFA20_COLORS.copperLight } }}>Liên hệ ngay</Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}