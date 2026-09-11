// SOFA12 ADMIN — các trang tiện ích bổ sung (báo cáo, cài đặt, thông báo, hồ sơ)
// ----------------------------------------------------------------------

export type Sofa12AdminTool = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const SOFA12_ADMIN_TOOLS: Sofa12AdminTool[] = [
  {
    slug: 'reports',
    name: 'Báo cáo tổng hợp',
    icon: 'solar:chart-square-bold-duotone',
    description: 'Biểu đồ doanh thu, đơn hàng, kênh bán và sản phẩm bán chạy trong 12 tháng.',
  },
  {
    slug: 'settings',
    name: 'Cài đặt hệ thống',
    icon: 'solar:settings-bold-duotone',
    description: 'Thông tin doanh nghiệp, vận hành, thanh toán và tuỳ chọn hiển thị.',
  },
  {
    slug: 'notifications',
    name: 'Thông báo & Nhật ký',
    icon: 'solar:bell-bing-bold-duotone',
    description: 'Dòng sự kiện hệ thống, cảnh báo tồn kho, đơn hàng và bảo mật.',
  },
  {
    slug: 'profile',
    name: 'Hồ sơ quản trị',
    icon: 'solar:user-id-bold-duotone',
    description: 'Thông tin tài khoản, vai trò, phiên đăng nhập và bảo mật hai lớp.',
  },
];

export const findSofa12AdminTool = (slug?: string) =>
  SOFA12_ADMIN_TOOLS.find((tool) => tool.slug === slug);

// ----------------------------------------------------------------------

export type Sofa12FunnelStep = {
  label: string;
  value: number;
  icon: string;
  desc: string;
};

export const SOFA12_ADMIN_FUNNEL: Sofa12FunnelStep[] = [
  {
    label: 'Lượt truy cập',
    value: 128400,
    icon: 'solar:eye-bold-duotone',
    desc: 'Website, landing page và chiến dịch quảng cáo',
  },
  {
    label: 'Xem sản phẩm',
    value: 61300,
    icon: 'solar:armchair-2-bold-duotone',
    desc: 'Khách mở ít nhất một trang chi tiết sản phẩm',
  },
  {
    label: 'Thêm vào giỏ',
    value: 18240,
    icon: 'solar:cart-large-2-bold-duotone',
    desc: 'Giỏ hàng được tạo hoặc cập nhật',
  },
  {
    label: 'Bắt đầu thanh toán',
    value: 7420,
    icon: 'solar:card-bold-duotone',
    desc: 'Khách nhập thông tin giao hàng',
  },
  {
    label: 'Đơn hoàn tất',
    value: 2618,
    icon: 'solar:check-circle-bold-duotone',
    desc: 'Đơn đã xác nhận và thanh toán thành công',
  },
];

// ----------------------------------------------------------------------

export const SOFA12_SETTINGS_FIELDS = [
  { key: 'brand', label: 'Tên thương hiệu', value: 'SOFA EARTH', helper: 'Hiển thị trên toàn site' },
  { key: 'hotline', label: 'Hotline', value: '1900 6868' },
  { key: 'email', label: 'Email hỗ trợ', value: 'hotro@sofaearth.vn' },
  { key: 'address', label: 'Trụ sở', value: '128 Nguyễn Trãi, Thanh Xuân, Hà Nội' },
  { key: 'currency', label: 'Đơn vị tiền tệ', value: 'VND' },
  { key: 'tax', label: 'Thuế VAT (%)', value: '8' },
  { key: 'freeship', label: 'Miễn phí giao từ (đ)', value: '5.000.000' },
  { key: 'warranty', label: 'Bảo hành mặc định (tháng)', value: '60' },
];

export const SOFA12_SETTINGS_TOGGLES = [
  { key: 'maintenance', label: 'Chế độ bảo trì', desc: 'Tạm khoá website với khách truy cập', on: false },
  { key: 'reviews', label: 'Cho phép đánh giá sản phẩm', desc: 'Khách hàng đã mua mới được đánh giá', on: true },
  { key: 'cod', label: 'Thanh toán COD', desc: 'Áp dụng cho đơn dưới 20 triệu', on: true },
  { key: 'installment', label: 'Trả góp 0%', desc: 'Liên kết 6 ngân hàng đối tác', on: true },
  { key: 'chatbot', label: 'Chatbot tư vấn', desc: 'Trợ lý ảo trên trang sản phẩm', on: false },
  { key: 'newsletter', label: 'Bản tin email', desc: 'Gửi tự động thứ 5 hàng tuần', on: true },
];

export const SOFA12_NOTIFICATIONS = [
  { time: '09:42', type: 'Đơn hàng', level: 'info', text: '12 đơn mới chờ xác nhận từ kênh Website' },
  { time: '09:05', type: 'Kho hàng', level: 'warning', text: 'SKU SF-LCOR-12-XAM còn 2 sản phẩm tại Kho HCM' },
  { time: '08:30', type: 'Bảo mật', level: 'error', text: '3 lần đăng nhập sai vào tài khoản admin@sofaearth.vn' },
  { time: '08:02', type: 'Marketing', level: 'success', text: 'Chiến dịch “Sale tháng 8” đạt tỷ lệ mở 41%' },
  { time: '07:20', type: 'CMS', level: 'info', text: 'Trang “Bộ sưu tập Linen” được xuất bản' },
  { time: '06:58', type: 'SEO', level: 'warning', text: 'Sitemap phát hiện 6 URL trả lỗi 404' },
  { time: '06:10', type: 'CRM', level: 'success', text: '48 khách hàng mới đăng ký thành viên' },
];

export const SOFA12_PROFILE = {
  name: 'Ngọc Anh',
  role: 'Quản trị viên cấp cao',
  email: 'ngocanh@sofaearth.vn',
  phone: '0912 345 678',
  team: 'Vận hành số',
  joined: '02/2023',
  permissions: ['CMS', 'Sản phẩm', 'Đơn hàng', 'CRM', 'Marketing', 'Analytics', 'SEO', 'Phân quyền'],
  sessions: [
    { device: 'MacBook Pro • Chrome', place: 'Hà Nội, VN', time: 'Đang hoạt động' },
    { device: 'iPhone 15 • Safari', place: 'Hà Nội, VN', time: '2 giờ trước' },
    { device: 'Windows • Edge', place: 'TP.HCM, VN', time: 'Hôm qua, 18:40' },
  ],
};
