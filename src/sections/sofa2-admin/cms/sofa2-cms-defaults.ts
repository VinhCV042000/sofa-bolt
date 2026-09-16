import type { CmsPage, Sofa2CmsState } from './sofa2-cms-types';

// ----------------------------------------------------------------------
// Nội dung khởi tạo — khớp với nội dung đang hiển thị trên trang khách sofa2
// ----------------------------------------------------------------------

const seo = (title: string, description: string, canonical: string) => ({
  title,
  description,
  keywords: 'sofa cao cấp, sofa thiết kế, LUXE Sofa',
  image: '/logo/logo-full.svg',
  canonical,
});

const block = (id: string, title: string, type: string, text: string, enabled = true) => ({
  id,
  title,
  type,
  text,
  enabled,
});

const HOME: CmsPage = {
  key: 'home',
  name: 'Trang chủ',
  path: '/sofa2',
  status: 'Đã xuất bản',
  updated: '14/09/2026',
  author: 'Minh Anh',
  blockLabel: 'Khối nội dung',
  fieldSchema: [
    { key: 'heroEyebrow', label: 'Dòng nhấn hero' },
    { key: 'heroTitle', label: 'Tiêu đề hero' },
    { key: 'heroHighlight', label: 'Cụm chữ nổi bật' },
    { key: 'heroSubtitle', label: 'Mô tả hero', multiline: true },
    { key: 'heroPrimaryCta', label: 'Nút chính' },
    { key: 'heroSecondaryCta', label: 'Nút phụ' },
    { key: 'bannerEyebrow', label: 'Dải banner — dòng nhấn' },
    { key: 'bannerTitle', label: 'Dải banner — tiêu đề', multiline: true },
    { key: 'bannerText', label: 'Dải banner — mô tả', multiline: true },
  ],
  fields: {
    heroEyebrow: 'LUXE Sofa — Thiết Kế Độc Quyền',
    heroTitle: 'Sofa định hình',
    heroHighlight: 'phong cách sống',
    heroSubtitle:
      'Ba phong cách — Scandinavian, Industrial, Mid-Century. Mỗi mẫu sofa là một tuyên ngôn thiết kế, chế tác từ vật liệu bền vững và công nghệ đệm Đức.',
    heroPrimaryCta: 'Xem bộ sưu tập',
    heroSecondaryCta: 'Không gian thực tế',
    bannerEyebrow: 'Công nghệ đệm Đức',
    bannerTitle: 'Memory foam giữ form sau 50,000 lần ngồi — êm ái không giới hạn',
    bannerText:
      'Lớp đệm công nghệ Đức ôm theo cơ thể, giảm áp lực cột sống và giữ nguyên form dáng sau hàng chục nghìn lần sử dụng.',
  },
  blocks: [
    block('h1', 'Hero bold editorial', 'Banner', 'Khối hero đầu trang với ảnh lớn và 2 nút CTA.'),
    block('h2', 'Bộ sưu tập', 'Danh sách SP', 'Ba bộ sưu tập nổi bật.'),
    block('h3', 'Sản phẩm bán chạy', 'Danh sách SP', 'Lưới sản phẩm nổi bật.'),
    block('h4', 'Không gian thực tế', 'Thư viện ảnh', 'Ảnh không gian khách hàng.'),
    block('h5', 'Đánh giá khách hàng', 'Slider', 'Nhận xét khách hàng.'),
    block('h6', 'CTA cuối trang', 'Banner', 'Kêu gọi đặt lịch tư vấn.'),
  ],
  seo: seo('LUXE Sofa — Sofa thiết kế cao cấp', 'Sofa thiết kế độc quyền, đệm memory foam công nghệ Đức, bảo hành 10 năm.', '/sofa2'),
};

const ABOUT: CmsPage = {
  key: 'about',
  name: 'Trang giới thiệu',
  path: '/sofa2/about',
  status: 'Đã xuất bản',
  updated: '10/09/2026',
  author: 'Thu Hà',
  blockLabel: 'Khối nội dung',
  fieldSchema: [
    { key: 'title', label: 'Tiêu đề trang' },
    { key: 'intro', label: 'Đoạn mở đầu', multiline: true },
  ],
  fields: {
    title: 'Câu chuyện LUXE Sofa',
    intro: 'Từ xưởng mộc nhỏ năm 2009 đến thương hiệu sofa thiết kế được yêu thích tại Việt Nam.',
  },
  blocks: [
    block('a1', 'Tầm nhìn', 'Rich text', 'Đưa thiết kế nội thất bền vững đến mọi gia đình Việt.'),
    block('a2', 'Giá trị cốt lõi', 'Danh sách', 'Bền vững — Thủ công — Minh bạch.'),
    block('a3', 'Dòng thời gian', 'Timeline', 'Các cột mốc 2009 → 2026.'),
  ],
  seo: seo('Giới thiệu LUXE Sofa', 'Câu chuyện thương hiệu, tầm nhìn và giá trị của LUXE Sofa.', '/sofa2/about'),
};

const CONTACT: CmsPage = {
  key: 'contact',
  name: 'Trang liên hệ',
  path: '/sofa2/contact',
  status: 'Đã xuất bản',
  updated: '08/09/2026',
  author: 'Minh Anh',
  blockLabel: 'Khối nội dung',
  fieldSchema: [
    { key: 'address', label: 'Địa chỉ' },
    { key: 'phone', label: 'Điện thoại' },
    { key: 'email', label: 'Email' },
    { key: 'hours', label: 'Giờ mở cửa' },
    { key: 'note', label: 'Ghi chú', multiline: true },
  ],
  fields: {
    address: '86 Nguyễn Huệ, Quận 1, TP.HCM',
    phone: '1900 6868',
    email: 'hello@luxesofa.vn',
    hours: '08:00 – 21:00, tất cả các ngày',
    note: 'Đặt lịch trước để được tư vấn 1:1 tại showroom.',
  },
  blocks: [
    block('c1', 'Bản đồ showroom', 'Bản đồ', 'Nhúng bản đồ 3 showroom.'),
    block('c2', 'Form liên hệ', 'Biểu mẫu', 'Họ tên, điện thoại, nội dung.'),
  ],
  seo: seo('Liên hệ LUXE Sofa', 'Địa chỉ showroom, hotline và biểu mẫu liên hệ LUXE Sofa.', '/sofa2/contact'),
};

const POLICY: CmsPage = {
  key: 'policy',
  name: 'Trang chính sách',
  path: '/sofa2/policy',
  status: 'Đã xuất bản',
  updated: '02/09/2026',
  author: 'Thu Hà',
  blockLabel: 'Điều khoản chính sách',
  fieldSchema: [{ key: 'title', label: 'Tiêu đề trang' }],
  fields: { title: 'Chính sách khách hàng' },
  blocks: [
    block('p1', 'Chính sách bảo hành', 'Văn bản', 'Bảo hành khung gỗ 10 năm, đệm 3 năm.'),
    block('p2', 'Chính sách đổi trả', 'Văn bản', '30 ngày đổi trả với sản phẩm tiêu chuẩn.'),
    block('p3', 'Chính sách giao hàng', 'Văn bản', 'Miễn phí giao lắp toàn quốc.'),
    block('p4', 'Chính sách bảo mật', 'Văn bản', 'Không chia sẻ dữ liệu khách hàng cho bên thứ ba.'),
  ],
  seo: seo('Chính sách LUXE Sofa', 'Bảo hành, đổi trả, giao hàng và bảo mật thông tin.', '/sofa2/policy'),
};

const TERMS: CmsPage = {
  key: 'terms',
  name: 'Trang điều khoản',
  path: '/sofa2/policy',
  status: 'Đã xuất bản',
  updated: '02/09/2026',
  author: 'Thu Hà',
  blockLabel: 'Điều khoản',
  fieldSchema: [{ key: 'title', label: 'Tiêu đề trang' }],
  fields: { title: 'Điều khoản sử dụng' },
  blocks: [
    block('t1', 'Điều khoản chung', 'Văn bản', 'Quy định khi sử dụng website và dịch vụ.'),
    block('t2', 'Thanh toán', 'Văn bản', 'Phương thức và thời hạn thanh toán.'),
    block('t3', 'Quyền sở hữu trí tuệ', 'Văn bản', 'Hình ảnh và thiết kế thuộc về LUXE Sofa.'),
  ],
  seo: seo('Điều khoản sử dụng', 'Điều khoản sử dụng website và dịch vụ LUXE Sofa.', '/sofa2/policy'),
};

const FAQ: CmsPage = {
  key: 'faq',
  name: 'Trang FAQ',
  path: '/sofa2/support',
  status: 'Đã xuất bản',
  updated: '12/09/2026',
  author: 'Đức Anh',
  blockLabel: 'Câu hỏi',
  fieldSchema: [{ key: 'title', label: 'Tiêu đề khu FAQ' }],
  fields: { title: 'Câu hỏi thường gặp' },
  blocks: [
    block(
      'f1',
      'Sofa có thể thiết kế theo phong cách riêng không?',
      'FAQ',
      'Có. Đội ngũ thiết kế của chúng tôi sẽ làm việc 1:1 với bạn để tạo sofa độc quyền theo không gian và gu thẩm mỹ riêng. Phí thiết kế miễn phí cho đơn hàng trên 15 triệu.'
    ),
    block(
      'f2',
      'Memory foam có ưu điểm gì so với mút thường?',
      'FAQ',
      'Memory foam ôm theo cơ thể, giảm áp lực lên cột sống, giữ form sau 50,000 lần ngồi. Mút thường xẹp nhanh sau 1-2 năm sử dụng.'
    ),
    block(
      'f3',
      'Thời gian giao hàng bao lâu?',
      'FAQ',
      'Sản phẩm có sẵn: 2-5 ngày. Sofa thiết kế riêng: 10-20 ngày. Miễn phí giao hàng lắp đặt toàn quốc.'
    ),
    block(
      'f4',
      'Chính sách đổi trả thế nào?',
      'FAQ',
      '30 ngày đổi trả với sản phẩm tiêu chuẩn. Sofa thiết kế riêng chỉ đổi trả khi có lỗi sản xuất, được bảo hành sửa chữa miễn phí.'
    ),
    block(
      'f5',
      'Có trả góp không?',
      'FAQ',
      'Có. Hỗ trợ trả góp 0% qua thẻ tín dụng trong 6 tháng, hoặc trả góp qua ngân hàng trong 12-24 tháng với lãi suất ưu đãi.'
    ),
  ],
  seo: seo('Câu hỏi thường gặp', 'Giải đáp về thiết kế riêng, giao hàng, bảo hành và trả góp.', '/sofa2/support'),
};

const STATIC_1: CmsPage = {
  key: 'shipping-guide',
  name: 'Hướng dẫn đo đạc không gian',
  path: '/sofa2/support',
  status: 'Bản nháp',
  updated: '05/09/2026',
  author: 'Đức Anh',
  blockLabel: 'Khối nội dung',
  fieldSchema: [{ key: 'title', label: 'Tiêu đề trang' }],
  fields: { title: 'Hướng dẫn đo đạc không gian' },
  blocks: [block('s1', 'Bước 1 — Đo chiều dài tường', 'Văn bản', 'Chừa tối thiểu 30cm mỗi bên.')],
  seo: seo('Hướng dẫn đo đạc không gian', 'Cách đo không gian trước khi chọn sofa.', '/sofa2/support'),
  custom: true,
};

export const SOFA2_CMS_DEFAULTS: Sofa2CmsState = {
  pages: [HOME, ABOUT, CONTACT, POLICY, TERMS, FAQ, STATIC_1],
  posts: [
    {
      id: 'b1',
      title: 'Scandinavian: tối giản mà ấm áp',
      category: 'Triết lý',
      cover: '',
      excerpt: 'Vì sao phong cách Bắc Âu vẫn dẫn đầu xu hướng nội thất.',
      content: 'Gỗ sáng màu, đường nét mềm và ánh sáng tự nhiên là ba trụ cột của Scandinavian.',
      status: 'Đã xuất bản',
      updated: '13/09/2026',
      author: 'Minh Anh',
    },
    {
      id: 'b2',
      title: 'Chọn sofa cho căn hộ nhỏ',
      category: 'Tư vấn',
      cover: '',
      excerpt: 'Mẹo chọn kích thước và kiểu dáng cho không gian dưới 60m².',
      content: 'Ưu tiên sofa chân cao, tay mảnh và màu sáng để mở rộng thị giác.',
      status: 'Đã xuất bản',
      updated: '05/09/2026',
      author: 'Thu Hà',
    },
    {
      id: 'b3',
      title: 'Xu hướng nội thất 2026',
      category: 'Xu hướng',
      cover: '',
      excerpt: 'Màu đất, vật liệu tái chế và module linh hoạt lên ngôi.',
      content: 'Năm 2026 đánh dấu sự trở lại của vật liệu tự nhiên và thiết kế module.',
      status: 'Chờ duyệt',
      updated: '14/09/2026',
      author: 'Đức Anh',
    },
  ],
  menus: [
    {
      id: 'm1',
      name: 'Menu chính',
      position: 'Header',
      status: 'Đã xuất bản',
      items: [
        { id: 'mi1', label: 'Trang chủ', path: '/sofa2' },
        { id: 'mi2', label: 'Giới thiệu', path: '/sofa2/about' },
        { id: 'mi3', label: 'Sản phẩm', path: '/sofa2/products' },
        { id: 'mi4', label: 'Dự án', path: '/sofa2/projects' },
        { id: 'mi5', label: 'Liên hệ', path: '/sofa2/contact' },
      ],
    },
    {
      id: 'm2',
      name: 'Menu footer',
      position: 'Footer',
      status: 'Đã xuất bản',
      items: [
        { id: 'mi6', label: 'Chính sách', path: '/sofa2/policy' },
        { id: 'mi7', label: 'Hỗ trợ', path: '/sofa2/support' },
        { id: 'mi8', label: 'Tuyển dụng', path: '/sofa2/careers' },
      ],
    },
    {
      id: 'm3',
      name: 'Menu mobile',
      position: 'Mobile',
      status: 'Bản nháp',
      items: [
        { id: 'mi9', label: 'Trang chủ', path: '/sofa2' },
        { id: 'mi10', label: 'Giỏ hàng', path: '/sofa2/cart' },
      ],
    },
  ],
  banners: [
    {
      id: 'bn1',
      name: 'Mùa thu – 25%',
      image: '',
      title: 'Giảm 25% toàn bộ bộ sưu tập mùa thu',
      link: '/sofa2/promotions',
      position: 'Top bar',
      schedule: '01/09 – 30/09',
      status: 'Đã xuất bản',
    },
    {
      id: 'bn2',
      name: 'Miễn phí giao lắp toàn quốc',
      image: '',
      title: 'Miễn phí giao hàng và lắp đặt',
      link: '/sofa2/support',
      position: 'Trang chủ',
      schedule: 'Không giới hạn',
      status: 'Đã xuất bản',
    },
    {
      id: 'bn3',
      name: 'Trả góp 0%',
      image: '',
      title: 'Trả góp 0% trong 6 tháng',
      link: '/sofa2/promotions',
      position: 'Chi tiết SP',
      schedule: '01/08 – 31/08',
      status: 'Tạm ẩn',
    },
  ],
  slides: [
    {
      id: 'sl1',
      name: 'Hero trang chủ – Slide 1',
      image: '',
      title: 'Sofa định hình phong cách sống',
      link: '/sofa2/products',
      position: 'Trang chủ',
      schedule: '5s',
      status: 'Đã xuất bản',
    },
    {
      id: 'sl2',
      name: 'Bộ sưu tập mùa thu',
      image: '',
      title: 'Bộ sưu tập Scandinavian 2026',
      link: '/sofa2/collections',
      position: 'Bộ sưu tập',
      schedule: '5s',
      status: 'Đã xuất bản',
    },
    {
      id: 'sl3',
      name: 'Showroom 360°',
      image: '',
      title: 'Tham quan showroom 360 độ',
      link: '/sofa2/showrooms',
      position: 'Showroom',
      schedule: '5s',
      status: 'Bản nháp',
    },
  ],
};
