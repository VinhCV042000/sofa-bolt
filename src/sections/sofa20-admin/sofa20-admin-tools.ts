// SOFA20 ADMIN — các trang tiện ích bổ sung (báo cáo, cài đặt, thông báo, hồ sơ)
// ----------------------------------------------------------------------

export type Sofa20AdminTool = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const SOFA20_ADMIN_TOOLS: Sofa20AdminTool[] = [
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

export const findSofa20AdminTool = (slug?: string) =>
  SOFA20_ADMIN_TOOLS.find((tool) => tool.slug === slug);

// ----------------------------------------------------------------------

export type Sofa20FunnelStep = {
  label: string;
  value: number;
  icon: string;
  desc: string;
};

export const SOFA20_ADMIN_FUNNEL: Sofa20FunnelStep[] = [
  {
    label: 'Lượt truy cập',
    value: 168000,
    icon: 'solar:eye-bold-duotone',
    desc: 'Website, landing page và chiến dịch quảng cáo',
  },
  {
    label: 'Xem sản phẩm',
    value: 82400,
    icon: 'solar:armchair-2-bold-duotone',
    desc: 'Khách mở ít nhất một trang chi tiết sản phẩm',
  },
  {
    label: 'Thêm vào giỏ',
    value: 24800,
    icon: 'solar:cart-large-2-bold-duotone',
    desc: 'Giỏ hàng được tạo hoặc cập nhật',
  },
  {
    label: 'Bắt đầu thanh toán',
    value: 9640,
    icon: 'solar:card-bold-duotone',
    desc: 'Khách nhập thông tin giao hàng',
  },
  {
    label: 'Đơn hoàn tất',
    value: 3482,
    icon: 'solar:check-circle-bold-duotone',
    desc: 'Đơn đã xác nhận và thanh toán thành công',
  },
];

// ----------------------------------------------------------------------

export const SOFA20_SETTINGS_FIELDS = [
  { key: 'brand', label: 'Tên thương hiệu', value: 'SOFA20 TROPICAL', helper: 'Hiển thị trên toàn site' },
  { key: 'hotline', label: 'Hotline', value: '0800 1919' },
  { key: 'email', label: 'Email hỗ trợ', value: 'atendimento@sofa20.br' },
  { key: 'address', label: 'Trụ sở', value: 'Av. Paulista 1000, São Paulo, SP' },
  { key: 'currency', label: 'Đơn vị tiền tệ', value: 'BRL' },
  { key: 'tax', label: 'Thuế VAT (%)', value: '10' },
  { key: 'freeship', label: 'Miễn phí giao từ (đ)', value: '6.000.000' },
  { key: 'warranty', label: 'Bảo hành mặc định (tháng)', value: '72' },
];

export const SOFA20_SETTINGS_TOGGLES = [
  { key: 'maintenance', label: 'Chế độ bảo trì', desc: 'Tạm khoá website với khách truy cập', on: false },
  { key: 'reviews', label: 'Cho phép đánh giá sản phẩm', desc: 'Khách hàng đã mua mới được đánh giá', on: true },
  { key: 'cod', label: 'Thanh toán COD', desc: 'Áp dụng cho đơn dưới 25 triệu', on: true },
  { key: 'installment', label: 'Trả góp 0%', desc: 'Liên kết 8 ngân hàng đối tác', on: true },
  { key: 'chatbot', label: 'Chatbot tư vấn', desc: 'Trợ lý ảo trên trang sản phẩm', on: true },
  { key: 'newsletter', label: 'Bản tin email', desc: 'Gửi tự động thứ 4 hàng tuần', on: true },
];

export const SOFA20_NOTIFICATIONS = [
  { time: '09:48', type: 'Đơn hàng', level: 'info', text: '18 đơn mới chờ xác nhận từ kênh Website' },
  { time: '09:05', type: 'Kho hàng', level: 'warning', text: 'SKU SF-JUN-12-GOL còn 2 sản phẩm tại Kho Rio' },
  { time: '08:30', type: 'Bảo mật', level: 'error', text: '6 lần đăng nhập sai vào tài khoản admin@sofa20.br' },
  { time: '08:02', type: 'Marketing', level: 'success', text: 'Chiến dịch "Mùa nhiệt đới" đạt tỷ lệ mở 46%' },
  { time: '07:20', type: 'CMS', level: 'info', text: 'Trang "Bộ sưu tập Atlantic" được xuất bản' },
  { time: '06:58', type: 'SEO', level: 'warning', text: 'Sitemap phát hiện 5 URL trả lỗi 404' },
  { time: '06:10', type: 'CRM', level: 'success', text: '68 khách hàng mới đăng ký thành viên' },
];

export const SOFA20_PROFILE = {
  name: 'Carla Mendes',
  role: 'Quản trị viên cấp cao',
  email: 'carla@sofa20.br',
  phone: '011 9876 5432',
  team: 'Vận hành số',
  joined: '01/2023',
  permissions: ['CMS', 'Sản phẩm', 'Đơn hàng', 'CRM', 'Marketing', 'Analytics', 'SEO', 'Phân quyền'],
  sessions: [
    { device: 'MacBook Pro • Chrome', place: 'São Paulo, BR', time: 'Đang hoạt động' },
    { device: 'iPhone 15 • Safari', place: 'São Paulo, BR', time: '2 giờ trước' },
    { device: 'Windows • Edge', place: 'Rio, BR', time: 'Hôm qua, 18:50' },
  ],
};
