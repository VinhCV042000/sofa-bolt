import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_PRODUCTS } from './sofa16-pages-data';

// ----------------------------------------------------------------------

export const SOFA16_AUTH_MODES: Record<string, { title: string; subtitle: string; cta: string }> = {
  login: { title: 'ĐĂNG NHẬP', subtitle: 'Truy cập tài khoản Sofa16 Riviera của bạn.', cta: 'Đăng nhập' },
  register: { title: 'ĐĂNG KÝ', subtitle: 'Tạo tài khoản để theo dõi đơn hàng và bảo hành.', cta: 'Tạo tài khoản' },
  forgot: { title: 'QUÊN MẬT KHẨU', subtitle: 'Nhập email để nhận liên kết đặt lại mật khẩu.', cta: 'Gửi liên kết' },
};

export const SOFA16_ACCOUNT_SECTIONS = [
  { slug: 'profile', title: 'Hồ sơ cá nhân', desc: 'Cập nhật họ tên, email, số điện thoại.', icon: 'solar:user-id-bold-duotone' },
  { slug: 'addresses', title: 'Địa chỉ giao hàng', desc: 'Quản lý sổ địa chỉ nhận hàng.', icon: 'solar:map-point-bold-duotone' },
  { slug: 'orders', title: 'Đơn hàng của tôi', desc: 'Xem và theo dõi tất cả đơn hàng.', icon: 'solar:bag-check-bold-duotone' },
  { slug: 'wishlist', title: 'Yêu thích', desc: 'Danh sách sản phẩm bạn đã lưu.', icon: 'solar:heart-bold-duotone' },
  { slug: 'history', title: 'Lịch sử giao dịch', desc: 'Toàn bộ giao dịch thanh toán.', icon: 'solar:history-bold-duotone' },
  { slug: 'warranty', title: 'Phiếu bảo hành', desc: 'Tra cứu và kích hoạt bảo hành.', icon: 'solar:shield-check-bold-duotone' },
];

export const SOFA16_B2B_SECTIONS = [
  { slug: '', title: 'Giới thiệu hợp tác', desc: 'Chương trình hợp tác đại lý & dự án của Sofa16.', icon: 'solar:hand-shake-bold-duotone' },
  { slug: 'distributor', title: 'Đại lý phân phối', desc: 'Quyền lợi và điều kiện trở thành đại lý.', icon: 'solar:shop-bold-duotone' },
  { slug: 'wholesale', title: 'Nhà phân phối', desc: 'Chính sách sỉ cho nhà phân phối khu vực.', icon: 'solar:box-bold-duotone' },
  { slug: 'register', title: 'Đăng ký đại lý', desc: 'Gửi hồ sơ đăng ký làm đại lý.', icon: 'solar:document-add-bold-duotone' },
  { slug: 'quote', title: 'Báo giá dự án', desc: 'Yêu cầu báo giá cho dự án số lượng lớn.', icon: 'solar:calculator-bold-duotone' },
  { slug: 'oem', title: 'Yêu cầu sản xuất OEM', desc: 'Đặt sản xuất theo thiết kế riêng.', icon: 'solar:settings-bold-duotone' },
  { slug: 'contractor', title: 'Đối tác thi công', desc: 'Hợp tác cùng đơn vị thi công nội thất.', icon: 'solar:hammer-bold-duotone' },
  { slug: 'policy', title: 'Chính sách đại lý', desc: 'Chiết khấu, công nợ và hỗ trợ trưng bày.', icon: 'solar:clipboard-list-bold-duotone' },
];

export const SOFA16_SUPPORT_SECTIONS = [
  { slug: 'faq', title: 'FAQ', desc: 'Câu hỏi thường gặp về sản phẩm & dịch vụ.', icon: 'solar:question-circle-bold-duotone', path: '/sofa16/faq' },
  { slug: 'center', title: 'Trung tâm trợ giúp', desc: 'Tổng hợp hướng dẫn và tài liệu hỗ trợ.', icon: 'solar:book-bold-duotone', path: '/sofa16/support' },
  { slug: 'chat', title: 'Chat trực tuyến', desc: 'Trò chuyện cùng tư vấn viên Riviera.', icon: 'solar:chat-round-dots-bold-duotone', path: '/sofa16/support/chat' },
  { slug: 'ticket', title: 'Gửi ticket hỗ trợ', desc: 'Tạo yêu cầu hỗ trợ và theo dõi tiến độ.', icon: 'solar:ticket-bold-duotone', path: '/sofa16/support/ticket' },
  { slug: 'buying-guide', title: 'Hướng dẫn mua hàng', desc: 'Các bước đặt hàng trực tuyến.', icon: 'solar:cart-check-bold-duotone', path: '/sofa16/support/buying-guide' },
  { slug: 'payment-guide', title: 'Hướng dẫn thanh toán', desc: 'Các phương thức thanh toán được hỗ trợ.', icon: 'solar:card-bold-duotone', path: '/sofa16/support/payment-guide' },
];

export const SOFA16_POLICIES: Record<string, { title: string; body: string[] }> = {
  shipping: {
    title: 'Chính sách giao hàng',
    body: [
      'Miễn phí giao lắp nội thành Hà Nội, TP.HCM, Đà Nẵng với đơn từ 15 triệu.',
      'Khu vực ngoại thành và tỉnh: 2-5 ngày làm việc, phí tính theo khoảng cách.',
      'Sản phẩm đặt riêng (custom linen) cần 15-25 ngày sản xuất trước khi giao.',
    ],
  },
  warranty: {
    title: 'Chính sách bảo hành',
    body: [
      'Bảo hành 10 năm khung gỗ sồi và hệ đệm.',
      'Bảo hành 2 năm cho lớp bọc linen và cơ chế recliner.',
      'Không áp dụng cho hư hỏng do tác động ngoại lực, hóa chất hoặc tự ý sửa chữa.',
    ],
  },
  returns: {
    title: 'Chính sách đổi trả',
    body: [
      'Đổi trả trong 30 ngày với sản phẩm nguyên trạng, còn đủ bao bì.',
      'Sản phẩm đặt riêng theo yêu cầu không áp dụng đổi trả.',
      'Chi phí vận chuyển đổi trả do khách hàng chi trả, trừ trường hợp lỗi từ nhà sản xuất.',
    ],
  },
  privacy: {
    title: 'Chính sách bảo mật',
    body: [
      'Thông tin cá nhân chỉ dùng cho mục đích xử lý đơn hàng và chăm sóc khách hàng.',
      'Sofa16 không chia sẻ dữ liệu khách hàng cho bên thứ ba khi chưa được đồng ý.',
    ],
  },
};

export const SOFA16_MEMBER_CUSTOMER = [
  { slug: 'dashboard', title: 'Dashboard', desc: 'Tổng quan tài khoản và hoạt động gần đây.', icon: 'solar:widget-bold-duotone' },
  { slug: 'profile', title: 'Hồ sơ', desc: 'Thông tin cá nhân của bạn.', icon: 'solar:user-id-bold-duotone' },
  { slug: 'orders', title: 'Đơn hàng', desc: 'Danh sách đơn hàng đã đặt.', icon: 'solar:bag-check-bold-duotone' },
  { slug: 'warranty', title: 'Phiếu bảo hành', desc: 'Tra cứu phiếu bảo hành đang hiệu lực.', icon: 'solar:shield-check-bold-duotone' },
  { slug: 'points', title: 'Điểm tích lũy', desc: 'Điểm thưởng Riviera Club.', icon: 'solar:star-bold-duotone' },
  { slug: 'vouchers', title: 'Voucher', desc: 'Mã giảm giá dành riêng cho bạn.', icon: 'solar:ticket-sale-bold-duotone' },
  { slug: 'complaints', title: 'Khiếu nại', desc: 'Gửi và theo dõi khiếu nại.', icon: 'solar:danger-triangle-bold-duotone' },
];

export const SOFA16_MEMBER_DEALER = [
  { slug: 'dealer', title: 'Dashboard đại lý', desc: 'Tổng quan doanh số và chỉ tiêu.', icon: 'solar:chart-square-bold-duotone' },
  { slug: 'dealer-pricing', title: 'Chính sách giá', desc: 'Bảng giá và chiết khấu theo cấp đại lý.', icon: 'solar:tag-price-bold-duotone' },
  { slug: 'dealer-quotes', title: 'Báo giá', desc: 'Tạo và quản lý báo giá cho khách.', icon: 'solar:calculator-bold-duotone' },
  { slug: 'dealer-orders', title: 'Đơn hàng đại lý', desc: 'Đơn đặt hàng sỉ và tiến độ giao.', icon: 'solar:box-bold-duotone' },
  { slug: 'dealer-debt', title: 'Công nợ', desc: 'Theo dõi công nợ và hạn thanh toán.', icon: 'solar:wallet-bold-duotone' },
  { slug: 'dealer-docs', title: 'Tài liệu bán hàng', desc: 'Catalogue, ảnh sản phẩm, bảng thông số.', icon: 'solar:folder-bold-duotone' },
];

export const SOFA16_CART_ITEMS = SOFA16_PAGE_PRODUCTS.slice(0, 3).map((p, i) => ({
  id: p.id,
  name: p.name,
  image: p.image,
  price: p.price,
  material: p.material,
  qty: i === 0 ? 1 : 1,
}));

export const SOFA16_ORDER_STEPS = [
  { label: 'Đã tiếp nhận', desc: 'Đơn hàng được xác nhận bởi Sofa16.' },
  { label: 'Đang sản xuất', desc: 'Nghệ nhân cắt may linen và dựng khung.' },
  { label: 'Kiểm định chất lượng', desc: 'Kiểm tra đường may, khung và đệm.' },
  { label: 'Đang vận chuyển', desc: 'Sản phẩm trên đường tới địa chỉ của bạn.' },
  { label: 'Đã giao', desc: 'Giao và lắp đặt hoàn tất.' },
];

export const SOFA16_SHOP_IMAGES = SOFA16_PAGE_IMAGES;
