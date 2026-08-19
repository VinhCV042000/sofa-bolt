import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';

import { SOFA19_COLORS, SOFA19_IMAGES } from 'src/sections/sofa19/sofa19-data';

type PageConfig = {
  title: string;
  eyebrow: string;
  description: string;
  parent: string;
  image: string;
  links: { label: string; path: string }[];
  cards: { title: string; body: string; icon: string }[];
};

const pageGroups: Record<string, PageConfig> = {
  about: {
    title: 'Một mái nhà cho những cuộc trò chuyện',
    eyebrow: 'CÂU CHUYỆN SOFA19',
    description: 'Sofa19 chọn vật liệu có tuổi thọ, đường cong có chủ đích và cách làm thủ công để tạo nên những phòng khách thật sự được sống trong đó.',
    parent: 'Giới thiệu',
    image: SOFA19_IMAGES.story,
    links: [
      { label: 'Giới thiệu công ty', path: '/sofa19/about' }, { label: 'Lịch sử hình thành', path: '/sofa19/about/history' },
      { label: 'Tầm nhìn & Sứ mệnh', path: '/sofa19/about/vision' }, { label: 'Giá trị cốt lõi', path: '/sofa19/about/values' },
      { label: 'Nhà máy sản xuất', path: '/sofa19/about/factory' }, { label: 'Quy trình sản xuất', path: '/sofa19/about/process' },
      { label: 'Chứng nhận chất lượng', path: '/sofa19/about/certifications' }, { label: 'Đội ngũ nhân sự', path: '/sofa19/about/team' },
    ],
    cards: [
      { title: 'Làm chậm để làm đúng', body: 'Mỗi khung sofa được kiểm tra bằng tay trước khi bọc lớp vải cuối cùng.', icon: 'solar:hand-stars-bold-duotone' },
      { title: 'Vật liệu có nguồn gốc', body: 'Vải, da, gỗ và đệm được tuyển chọn theo độ bền, cảm giác chạm và khả năng sửa chữa.', icon: 'solar:leaf-bold-duotone' },
      { title: 'Tin cậy từ bên trong', body: 'Minh bạch quy trình, rõ ràng bảo hành, đồng hành cả sau ngày giao hàng.', icon: 'solar:shield-check-bold-duotone' },
    ],
  },
  products: {
    title: 'Những dáng ngồi làm căn phòng dịu lại',
    eyebrow: 'BỘ SƯU TẬP SOFA',
    description: 'Từ sofa góc cho căn hộ thành thị đến những khối module cho dự án lớn — chọn dáng, chọn chất liệu, rồi để chúng tôi hoàn thiện phần còn lại.',
    parent: 'Sản phẩm',
    image: SOFA19_IMAGES.cat2,
    links: [
      { label: 'Tất cả sản phẩm', path: '/sofa19/products' }, { label: 'Bộ sưu tập', path: '/sofa19/collections' },
      { label: 'Sofa góc chữ L', path: '/sofa19/products/category/sofa-goc-chu-l' }, { label: 'Sofa văng', path: '/sofa19/products/category/sofa-vang' },
      { label: 'Sofa đơn', path: '/sofa19/products/category/sofa-don' }, { label: 'Sofa da', path: '/sofa19/products/category/sofa-da' },
      { label: 'Sofa vải', path: '/sofa19/products/category/sofa-vai' }, { label: 'Sofa theo yêu cầu', path: '/sofa19/services/design/custom' },
    ],
    cards: [
      { title: 'Sofa module', body: 'Thêm, bớt, xoay chiều — một bộ sofa thay đổi theo nhịp sống của bạn.', icon: 'solar:armchair-2-bold-duotone' },
      { title: 'Bảng vải & da', body: 'Hơn 40 sắc độ được tuyển để hợp ánh sáng nhiệt đới và khí hậu Việt Nam.', icon: 'solar:palette-round-bold-duotone' },
      { title: 'Đặt theo kích thước', body: 'Tư vấn tỷ lệ, dựng phối cảnh và chốt bản vẽ trước khi sản xuất.', icon: 'solar:ruler-angular-bold-duotone' },
    ],
  },
  projects: {
    title: 'Nội thất bắt đầu từ cách người ta sống',
    eyebrow: 'DỰ ÁN ĐÃ THỰC HIỆN',
    description: 'Sofa19 hợp tác cùng kiến trúc sư, chủ đầu tư và đội thi công để đưa sự thoải mái vào từng mét vuông.',
    parent: 'Dự án',
    image: SOFA19_IMAGES.gallery3,
    links: [{ label: 'Tất cả dự án', path: '/sofa19/projects' }, { label: 'Dự án căn hộ', path: '/sofa19/projects/apartment' }, { label: 'Khách sạn & resort', path: '/sofa19/projects/hospitality' }, { label: 'Không gian thương mại', path: '/sofa19/projects/commercial' }],
    cards: [
      { title: 'Từ bản vẽ đến phòng khách', body: 'Phối hợp thông số, màu sắc và lịch giao hàng theo đúng tiến độ công trình.', icon: 'solar:buildings-2-bold-duotone' },
      { title: 'Bền bỉ cho cường độ cao', body: 'Cấu trúc và lớp bọc được chọn theo tần suất sử dụng thực tế của dự án.', icon: 'solar:graph-up-bold-duotone' },
      { title: 'Một đầu mối tin cậy', body: 'Đội ngũ dự án theo sát từ brief đầu tiên đến nghiệm thu.', icon: 'solar:users-group-rounded-bold-duotone' },
    ],
  },
  showrooms: {
    title: 'Chạm thử trước khi mang về',
    eyebrow: 'SHOWROOM SOFA19',
    description: 'Không gian trưng bày mở, nhiều ánh sáng và đủ thời gian để bạn ngồi xuống. Hãy mang theo mặt bằng hoặc một câu hỏi.',
    parent: 'Showroom',
    image: SOFA19_IMAGES.gallery1,
    links: [{ label: 'Danh sách showroom', path: '/sofa19/showrooms' }, { label: 'Đặt lịch tham quan', path: '/sofa19/showrooms/visit' }, { label: 'Đặt lịch tư vấn', path: '/sofa19/showrooms/consult' }],
    cards: [
      { title: 'Hà Nội · Tây Hồ', body: '11:00 – 20:00 · 18 Xuân Diệu', icon: 'solar:map-point-bold-duotone' },
      { title: 'TP. Hồ Chí Minh · Thảo Điền', body: '10:00 – 21:00 · 42 Xuân Thủy', icon: 'solar:map-point-bold-duotone' },
      { title: 'Tư vấn không vội', body: 'Đặt lịch để có một giờ riêng cùng chuyên viên không gian.', icon: 'solar:calendar-mark-bold-duotone' },
    ],
  },
  services: {
    title: 'Bạn đưa ý tưởng, chúng tôi dựng nên cảm giác',
    eyebrow: 'DỊCH VỤ THEO NHU CẦU',
    description: 'Một quy trình gọn cho những yêu cầu không thể chọn từ catalogue: đo đạc, thiết kế, sản xuất và lắp đặt cùng một đội ngũ.',
    parent: 'Dịch vụ',
    image: SOFA19_IMAGES.cta,
    links: [{ label: 'Thiết kế nội thất', path: '/sofa19/services/design' }, { label: 'Thiết kế sofa theo yêu cầu', path: '/sofa19/services/design/custom' }, { label: 'Thiết kế 3D', path: '/sofa19/services/design/3d' }, { label: 'Gia công sofa', path: '/sofa19/services/production/crafting' }, { label: 'Sofa OEM', path: '/sofa19/services/production/oem' }, { label: 'Đặt hàng theo dự án', path: '/sofa19/services/production/project' }],
    cards: [
      { title: '01 · Lắng nghe', body: 'Hiểu thói quen ngồi, ánh sáng, kích thước và ngân sách của không gian.', icon: 'solar:chat-round-dots-bold-duotone' },
      { title: '02 · Tạo mẫu', body: 'Bản vẽ, phối màu và mẫu vật liệu giúp bạn nhìn thấy quyết định trước khi đặt hàng.', icon: 'solar:layers-bold-duotone' },
      { title: '03 · Bàn giao', body: 'Sản xuất có kiểm soát, giao lắp cẩn thận, hướng dẫn chăm sóc rõ ràng.', icon: 'solar:checklist-minimalistic-bold-duotone' },
    ],
  },
};

const fallback: PageConfig = {
  title: 'Một chỗ ngồi cho điều quan trọng',
  eyebrow: 'SOFA19 · SHOWROOM TROPICAL THỦ CÔNG',
  description: 'Khám phá sofa, dịch vụ và những câu chuyện phía sau một căn phòng có cá tính.',
  parent: 'Sofa19',
  image: SOFA19_IMAGES.hero,
  links: [{ label: 'Về Sofa19', path: '/sofa19/about' }, { label: 'Xem sản phẩm', path: '/sofa19/products' }, { label: 'Ghé showroom', path: '/sofa19/showrooms' }, { label: 'Liên hệ tư vấn', path: '/sofa19/contact' }],
  cards: [
    { title: 'Tư vấn chọn sofa', body: 'Nhận gợi ý theo mặt bằng, thói quen sử dụng và gu thẩm mỹ của bạn.', icon: 'solar:armchair-bold-duotone' },
    { title: 'Đặt lịch xem mẫu', body: 'Ngồi thử, sờ chất liệu và xem màu dưới ánh sáng thật.', icon: 'solar:calendar-bold-duotone' },
    { title: 'Hỗ trợ sau mua', body: 'Bảo hành, vệ sinh và sửa chữa để sofa đẹp lâu hơn.', icon: 'solar:heart-bold-duotone' },
  ],
};

const additionalGroups: Record<string, PageConfig> = {
  blog: {
    ...fallback, eyebrow: 'TẠP CHÍ SOFA19', parent: 'Blog', image: SOFA19_IMAGES.gallery5,
    title: 'Những điều làm nên một phòng khách dễ chịu',
    description: 'Góc nhìn về chất liệu, tỷ lệ, ánh sáng và cách chọn một bộ sofa sống cùng gia đình qua nhiều mùa.',
    links: [{ label: 'Bài viết mới nhất', path: '/sofa19/blog' }, { label: 'Chọn sofa', path: '/sofa19/blog/choosing-sofa' }, { label: 'Chăm sóc vật liệu', path: '/sofa19/blog/care' }, { label: 'Cảm hứng không gian', path: '/sofa19/blog/inspiration' }],
    cards: [
      { title: 'Chọn sofa theo thói quen sống', body: 'Một checklist ngắn trước khi bạn đo phòng và chọn kiểu dáng.', icon: 'solar:book-2-bold-duotone' },
      { title: 'Vải, da và ánh sáng', body: 'Cách đọc màu vật liệu dưới ánh sáng tự nhiên và đèn buổi tối.', icon: 'solar:sun-2-bold-duotone' },
      { title: 'Sống lâu cùng sofa', body: 'Lịch vệ sinh và những thao tác nhỏ giúp bề mặt luôn đẹp.', icon: 'solar:refresh-circle-bold-duotone' },
    ],
  },
  promotions: {
    ...fallback, eyebrow: 'CHĂM SÓC TRỌN ĐỜI', parent: 'Khuyến mãi', image: SOFA19_IMAGES.prod5,
    title: 'Mua một bộ sofa, nhận thêm sự yên tâm',
    description: 'Từ bảo hành khung đến vệ sinh định kỳ — chính sách của Sofa19 được viết để dùng, không phải để cất trong ngăn kéo.',
    links: [{ label: 'Bảo hành', path: '/sofa19/promotions/warranty' }, { label: 'Bảo trì', path: '/sofa19/promotions/maintenance' }, { label: 'Vệ sinh sofa', path: '/sofa19/promotions/cleaning' }, { label: 'Đổi trả hàng', path: '/sofa19/promotions/returns' }],
    cards: [
      { title: 'Khung & kết cấu', body: 'Bảo hành dài hạn cho phần nền tảng làm nên độ vững của sofa.', icon: 'solar:shield-check-bold-duotone' },
      { title: 'Chăm sóc tại nhà', body: 'Hướng dẫn theo từng loại vải, da và tình huống sử dụng.', icon: 'solar:home-smile-bold-duotone' },
      { title: 'Đổi trả minh bạch', body: 'Các mốc thời gian và điều kiện được trình bày rõ ràng trước khi mua.', icon: 'solar:document-text-bold-duotone' },
    ],
  },
  careers: {
    ...fallback, eyebrow: 'LÀM VIỆC CÙNG SOFA19', parent: 'Tuyển dụng', image: SOFA19_IMAGES.gallery6,
    title: 'Làm ra những thứ người khác muốn ở lại',
    description: 'Chúng tôi tìm người tò mò, tử tế và chăm chút — từ xưởng mộc, phòng thiết kế đến showroom.',
    links: [{ label: 'Vị trí đang mở', path: '/sofa19/careers' }, { label: 'Văn hóa Sofa19', path: '/sofa19/careers/culture' }, { label: 'Quy trình ứng tuyển', path: '/sofa19/careers/process' }],
    cards: [
      { title: 'Tay nghề được tôn trọng', body: 'Mỗi vai trò đều có không gian để làm sâu và làm tốt hơn mỗi ngày.', icon: 'solar:medal-star-bold-duotone' },
      { title: 'Học từ vật liệu', body: 'Làm việc cùng người thật, sản phẩm thật và khách hàng thật.', icon: 'solar:lightbulb-bolt-bold-duotone' },
      { title: 'Gửi hồ sơ mở', body: 'Chưa thấy vị trí phù hợp? Hãy kể chúng tôi nghe bạn có thể đóng góp gì.', icon: 'solar:letter-bold-duotone' },
    ],
  },
  contact: {
    ...fallback, eyebrow: 'KẾT NỐI VỚI SOFA19', parent: 'Liên hệ', image: SOFA19_IMAGES.cta,
    title: 'Hãy nói chúng tôi nghe về căn phòng của bạn',
    description: 'Một câu hỏi về kích thước, một bản vẽ còn dang dở hay nhu cầu cho cả dự án — đội ngũ Sofa19 luôn sẵn sàng lắng nghe.',
    links: [{ label: 'Gửi yêu cầu tư vấn', path: '/sofa19/contact' }, { label: 'Tìm showroom', path: '/sofa19/showrooms' }, { label: 'Báo giá dự án', path: '/sofa19/b2b/quote' }],
    cards: [
      { title: 'Tư vấn mua sofa', body: '1900 1989 · hello@sofa19.vn · Phản hồi trong ngày làm việc.', icon: 'solar:phone-bold-duotone' },
      { title: 'Địa chỉ showroom', body: 'Hà Nội và TP. Hồ Chí Minh · Ghé trực tiếp hoặc đặt lịch trước.', icon: 'solar:map-point-bold-duotone' },
      { title: 'Dành cho dự án', body: 'Gửi brief và tiến độ, chúng tôi sẽ kết nối đúng chuyên viên.', icon: 'solar:buildings-bold-duotone' },
    ],
  },
  account: {
    ...fallback, eyebrow: 'GÓC RIÊNG CỦA BẠN', parent: 'Tài khoản', image: SOFA19_IMAGES.prod4,
    title: 'Mọi lần mua sắm, được nhớ đúng cách',
    description: 'Theo dõi đơn hàng, lưu những dáng sofa yêu thích và quản lý lịch bảo hành trong một nơi gọn gàng.',
    links: [{ label: 'Đăng nhập', path: '/sofa19/account/login' }, { label: 'Đăng ký', path: '/sofa19/account/register' }, { label: 'Đơn hàng của tôi', path: '/sofa19/account/orders' }, { label: 'Yêu thích', path: '/sofa19/account/wishlist' }, { label: 'Phiếu bảo hành', path: '/sofa19/account/warranty' }],
  },
  b2b: {
    ...fallback, eyebrow: 'ĐỒNG HÀNH CÙNG ĐỐI TÁC', parent: 'Đại lý B2B', image: SOFA19_IMAGES.cat4,
    title: 'Một bộ sưu tập tốt hơn cho mọi dự án',
    description: 'Sofa19 cung cấp năng lực thiết kế, sản xuất và hậu mãi cho đại lý, kiến trúc sư, chủ đầu tư và đối tác thi công.',
    links: [{ label: 'Giới thiệu hợp tác', path: '/sofa19/b2b' }, { label: 'Đăng ký đại lý', path: '/sofa19/b2b/register' }, { label: 'Báo giá dự án', path: '/sofa19/b2b/quote' }, { label: 'Yêu cầu OEM', path: '/sofa19/b2b/oem' }, { label: 'Chính sách đại lý', path: '/sofa19/b2b/policy' }],
  },
  support: {
    ...fallback, eyebrow: 'TRỢ GIÚP SOFA19', parent: 'Hỗ trợ', image: SOFA19_IMAGES.story,
    title: 'Cần một câu trả lời, không cần đi vòng',
    description: 'Tìm nhanh hướng dẫn mua hàng, thanh toán, giao nhận, bảo hành hoặc gửi yêu cầu cho đội ngũ chăm sóc.',
    links: [{ label: 'Trung tâm trợ giúp', path: '/sofa19/support' }, { label: 'Câu hỏi thường gặp', path: '/sofa19/faq' }, { label: 'Hướng dẫn mua hàng', path: '/sofa19/support/buying-guide' }, { label: 'Gửi ticket', path: '/sofa19/support/ticket' }, { label: 'Chính sách giao hàng', path: '/sofa19/policy/shipping' }],
  },
  member: {
    ...fallback, eyebrow: 'KHU VỰC THÀNH VIÊN', parent: 'Khu vực thành viên', image: SOFA19_IMAGES.prod2,
    title: 'Không gian quản lý dành riêng cho bạn',
    description: 'Từ điểm tích lũy đến báo giá đại lý — mọi thông tin quan trọng được sắp xếp để bạn tìm thấy ngay.',
    links: [{ label: 'Dashboard khách hàng', path: '/sofa19/member/dashboard' }, { label: 'Đơn hàng', path: '/sofa19/member/orders' }, { label: 'Điểm tích lũy', path: '/sofa19/member/points' }, { label: 'Dashboard đại lý', path: '/sofa19/member/dealer' }, { label: 'Tài liệu bán hàng', path: '/sofa19/member/dealer-docs' }],
  },
};

Object.assign(pageGroups, additionalGroups);

function prettify(segment: string) {
  return segment.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function Sofa19Pages() {
  const { pathname } = useLocation();
  const config = useMemo(() => {
    const key = Object.keys(pageGroups).find((group) => pathname.includes(`/sofa19/${group}`));
    return key ? pageGroups[key] : fallback;
  }, [pathname]);
  const segments = pathname.split('/').filter(Boolean).slice(1);
  const currentLabel = segments.length > 1 ? prettify(segments[segments.length - 1]) : config.parent;

  return (
    <>
      <Helmet><title>{currentLabel} · Sofa19</title></Helmet>
      <Box sx={{ bgcolor: SOFA19_COLORS.cream, color: SOFA19_COLORS.ink, minHeight: '100vh', pb: { xs: 8, md: 14 } }}>
        <Box component="header" sx={{ position: 'relative', minHeight: { xs: 500, md: 610 }, display: 'flex', alignItems: 'flex-end', overflow: 'hidden', bgcolor: SOFA19_COLORS.jungleDeep }}>
          <Box component="img" src={config.image} alt="" sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', opacity: 0.68 }} />
          <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${SOFA19_COLORS.jungleDeep} 4%, rgba(15,51,41,.78) 42%, rgba(15,51,41,.12) 100%)` }} />
          <Container sx={{ position: 'relative', zIndex: 1, pb: { xs: 7, md: 11 } }}>
            <Stack spacing={3} maxWidth={760}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: SOFA19_COLORS.goldenLight }}>
                <Iconify icon="solar:leaf-bold-duotone" width={20} />
                <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 800 }}>{config.eyebrow}</Typography>
              </Stack>
              <Typography variant="h1" data-testid="text-page-title" sx={{ color: SOFA19_COLORS.creamLight, fontSize: { xs: 44, md: 76 }, lineHeight: 0.98, letterSpacing: -2.5, fontWeight: 800 }}>{config.title}</Typography>
              <Typography sx={{ color: 'rgba(255,248,240,.8)', maxWidth: 600, fontSize: { xs: 16, md: 19 }, lineHeight: 1.65 }}>{config.description}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: SOFA19_COLORS.creamDeep, pt: 1, flexWrap: 'wrap' }}>
                <Link to="/sofa19" style={{ color: 'inherit', textDecoration: 'none' }}>Sofa19</Link><Iconify icon="solar:arrow-right-linear" width={15} />
                <Link to={pathname} style={{ color: SOFA19_COLORS.goldenLight, textDecoration: 'none' }}>{currentLabel}</Link>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ mt: { xs: -5, md: -6 }, position: 'relative', zIndex: 2 }}>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, bgcolor: SOFA19_COLORS.creamLight, border: `1px solid ${SOFA19_COLORS.creamDeep}`, boxShadow: '0 18px 50px rgba(27,77,62,.12)' }}>
            <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
              {config.links.map((item) => <Chip key={item.path} component={Link} to={item.path} clickable data-testid={`link-subpage-${item.label}`} label={item.label} icon={<Iconify icon="solar:arrow-right-linear" width={18} />} sx={{ px: 0.5, py: 2.2, borderRadius: 1.5, bgcolor: SOFA19_COLORS.cream, color: SOFA19_COLORS.jungle, fontWeight: 700, '&:hover': { bgcolor: SOFA19_COLORS.goldenLight } }} />)}
            </Stack>
          </Paper>
        </Container>

        <Container sx={{ pt: { xs: 8, md: 12 } }}>
          <Grid container spacing={{ xs: 3, md: 5 }}>
            {config.cards.map((card, index) => (
              <Grid key={card.title} xs={12} md={4}>
                <Card data-testid={`card-content-${index}`} elevation={0} sx={{ height: '100%', borderRadius: 3, bgcolor: index === 1 ? SOFA19_COLORS.jungle : SOFA19_COLORS.creamLight, color: index === 1 ? SOFA19_COLORS.cream : SOFA19_COLORS.ink, border: `1px solid ${index === 1 ? SOFA19_COLORS.jungle : SOFA19_COLORS.creamDeep}` }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                    <Iconify icon={card.icon} width={42} sx={{ color: index === 1 ? SOFA19_COLORS.goldenLight : SOFA19_COLORS.coral, mb: 4 }} />
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>{card.title}</Typography>
                    <Typography sx={{ color: index === 1 ? 'rgba(255,248,240,.72)' : SOFA19_COLORS.inkSoft, lineHeight: 1.7 }}>{card.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: { xs: 8, md: 12 }, p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: SOFA19_COLORS.coral, color: SOFA19_COLORS.creamLight, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', width: 240, height: 240, borderRadius: '50%', right: -70, top: -100, bgcolor: SOFA19_COLORS.coralLight, opacity: 0.45 }} />
            <Stack spacing={2.5} maxWidth={650} sx={{ position: 'relative' }}>
              <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 800, color: SOFA19_COLORS.goldenLight }}>CÙNG BẮT ĐẦU</Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: -1, fontSize: { xs: 32, md: 48 } }}>Căn phòng của bạn đang cần một dáng ngồi mới?</Typography>
              <Typography sx={{ color: 'rgba(255,248,240,.82)', lineHeight: 1.7 }}>Gửi cho chúng tôi mặt bằng, vài tấm ảnh hoặc chỉ một mong muốn. Chuyên viên Sofa19 sẽ phản hồi trong ngày làm việc.</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
                <Button component={Link} to="/sofa19/contact" data-testid="button-contact-consultation" variant="contained" endIcon={<Iconify icon="solar:arrow-right-linear" width={18} />} sx={{ bgcolor: SOFA19_COLORS.jungleDeep, color: SOFA19_COLORS.cream, px: 3, py: 1.4, fontWeight: 800, '&:hover': { bgcolor: SOFA19_COLORS.jungle } }}>Đặt lịch tư vấn</Button>
                <Button component={Link} to="/sofa19/showrooms" data-testid="button-find-showroom" startIcon={<Iconify icon="solar:map-point-bold-duotone" width={18} />} sx={{ color: SOFA19_COLORS.creamLight, borderColor: 'rgba(255,248,240,.5)', px: 3, py: 1.4, fontWeight: 800 }} variant="outlined">Tìm showroom</Button>
              </Stack>
            </Stack>
          </Box>
          <Divider sx={{ my: { xs: 5, md: 8 }, borderColor: SOFA19_COLORS.creamDeep }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ sm: 'center' }}>
            <Typography variant="body2" sx={{ color: SOFA19_COLORS.inkSoft }}>Sofa19 · Làm nên những chỗ ngồi có câu chuyện.</Typography>
            <Stack direction="row" spacing={1.5} alignItems="center"><Iconify icon="solar:check-circle-bold-duotone" width={18} sx={{ color: SOFA19_COLORS.jungleLight }} /><Typography variant="caption" sx={{ color: SOFA19_COLORS.inkSoft }}>Tư vấn thật · Vật liệu thật · Bảo hành rõ ràng</Typography></Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}