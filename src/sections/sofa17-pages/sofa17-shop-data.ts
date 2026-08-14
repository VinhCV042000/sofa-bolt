import { SOFA17_PAGE_IMAGES } from './sofa17-pages-data';

// ----------------------------------------------------------------------

export const SOFA17_AUTH_MODES: Record<string, { title: string; subtitle: string; cta: string }> = {
  login: { title: 'ĐĂNG NHẬP', subtitle: 'Truy cập tài khoản Maison Riad của bạn.', cta: 'Đăng nhập' },
  register: { title: 'ĐĂNG KÝ', subtitle: 'Tạo tài khoản để theo dõi đơn hàng và bảo hành.', cta: 'Tạo tài khoản' },
  forgot: { title: 'QUÊN MẬT KHẨU', subtitle: 'Nhập email để nhận liên kết đặt lại mật khẩu.', cta: 'Gửi liên kết' },
};

export const SOFA17_ACCOUNT_SECTIONS = [
  { slug: 'profile', title: 'Hồ sơ cá nhân', desc: 'Cập nhật họ tên, email, số điện thoại.', icon: 'solar:user-id-bold-duotone' },
  { slug: 'addresses', title: 'Địa chỉ giao hàng', desc: 'Quản lý sổ địa chỉ nhận hàng.', icon: 'solar:map-point-bold-duotone' },
  { slug: 'orders', title: 'Đơn hàng của tôi', desc: 'Xem và theo dõi tất cả đơn hàng.', icon: 'solar:bag-check-bold-duotone' },
  { slug: 'wishlist', title: 'Yêu thích', desc: 'Danh sách tác phẩm bạn đã lưu.', icon: 'solar:heart-bold-duotone' },
  { slug: 'history', title: 'Lịch sử giao dịch', desc: 'Toàn bộ giao dịch thanh toán.', icon: 'solar:history-bold-duotone' },
  { slug: 'warranty', title: 'Phiếu bảo hành', desc: 'Tra cứu và kích hoạt bảo hành.', icon: 'solar:shield-check-bold-duotone' },
];

export const SOFA17_B2B_SECTIONS = [
  { slug: '', title: 'Giới thiệu hợp tác', desc: 'Chương trình hợp tác đại lý & dự án của Maison Riad.', icon: 'solar:hand-shake-bold-duotone' },
  { slug: 'distributors', title: 'Đại lý phân phối', desc: 'Mạng lưới đại lý toàn quốc.', icon: 'solar:shop-bold-duotone' },
  { slug: 'wholesalers', title: 'Nhà phân phối', desc: 'Chính sách nhà phân phối khu vực.', icon: 'solar:box-bold-duotone' },
  { slug: 'register', title: 'Đăng ký đại lý', desc: 'Gửi hồ sơ trở thành đại lý chính hãng.', icon: 'solar:document-add-bold-duotone' },
  { slug: 'quote', title: 'Báo giá dự án', desc: 'Nhận báo giá cho khối lượng lớn.', icon: 'solar:calculator-bold-duotone' },
  { slug: 'oem', title: 'Yêu cầu sản xuất OEM', desc: 'Gia công theo thiết kế của bạn.', icon: 'solar:settings-bold-duotone' },
  { slug: 'contractors', title: 'Đối tác thi công', desc: 'Hợp tác cùng nhà thầu nội thất.', icon: 'solar:buildings-2-bold-duotone' },
  { slug: 'policy', title: 'Chính sách đại lý', desc: 'Chiết khấu, công nợ, hỗ trợ marketing.', icon: 'solar:clipboard-list-bold-duotone' },
];

export const SOFA17_SUPPORT_TOPICS = [
  { slug: 'faq', title: 'FAQ', desc: 'Câu hỏi thường gặp', icon: 'solar:question-circle-bold-duotone', path: '/sofa17/faq' },
  { slug: 'help-center', title: 'Trung tâm trợ giúp', desc: 'Hướng dẫn & tài liệu', icon: 'solar:lifebuoy-bold-duotone', path: '/sofa17/support/help-center' },
  { slug: 'chat', title: 'Chat trực tuyến', desc: 'Trò chuyện với tư vấn viên', icon: 'solar:chat-round-bold-duotone', path: '/sofa17/support/chat' },
  { slug: 'ticket', title: 'Gửi ticket hỗ trợ', desc: 'Tạo yêu cầu hỗ trợ', icon: 'solar:ticket-bold-duotone', path: '/sofa17/support/ticket' },
  { slug: 'buying-guide', title: 'Hướng dẫn mua hàng', desc: 'Đặt hàng online từng bước', icon: 'solar:cart-bold-duotone', path: '/sofa17/support/buying-guide' },
  { slug: 'payment-guide', title: 'Hướng dẫn thanh toán', desc: 'Các phương thức thanh toán', icon: 'solar:wallet-bold-duotone', path: '/sofa17/support/payment-guide' },
  { slug: 'shipping', title: 'Chính sách giao hàng', desc: 'Vận chuyển & lắp đặt', icon: 'solar:delivery-bold-duotone', path: '/sofa17/policy/shipping' },
  { slug: 'warranty', title: 'Chính sách bảo hành', desc: 'Bảo hành trọn đời khung', icon: 'solar:shield-check-bold-duotone', path: '/sofa17/policy/warranty' },
  { slug: 'returns', title: 'Chính sách đổi trả', desc: '30 ngày đổi trả', icon: 'solar:refresh-circle-bold-duotone', path: '/sofa17/policy/returns' },
];

export const SOFA17_POLICIES: Record<string, { title: string; intro: string; items: string[] }> = {
  shipping: {
    title: 'CHÍNH SÁCH GIAO HÀNG',
    intro: 'Giao hàng white-glove: vận chuyển, lắp đặt và dọn dẹp tận nơi.',
    items: [
      'Miễn phí giao hàng nội thành Hà Nội & TP.HCM cho đơn từ 30 triệu.',
      'Thời gian giao hàng tiêu chuẩn 7–14 ngày, hàng đặt riêng 30–45 ngày.',
      'Đội ngũ lắp đặt kiểm tra và nghiệm thu cùng khách hàng.',
      'Thu hồi bao bì và vệ sinh khu vực sau khi lắp đặt.',
    ],
  },
  warranty: {
    title: 'CHÍNH SÁCH BẢO HÀNH',
    intro: 'Khung gỗ bảo hành trọn đời, đệm và da bảo hành 10 năm.',
    items: [
      'Bảo hành khung gỗ sồi nguyên khối trọn đời sử dụng.',
      'Bảo hành đệm mút và hệ lò xo 10 năm.',
      'Bảo hành da bò Ý và nhung Italia 5 năm.',
      'Bảo trì, hút bụi chuyên sâu miễn phí 1 lần/năm.',
    ],
  },
  returns: {
    title: 'CHÍNH SÁCH ĐỔI TRẢ',
    intro: 'Đổi trả trong 30 ngày với sản phẩm tiêu chuẩn còn nguyên trạng.',
    items: [
      'Đổi trả trong 30 ngày kể từ ngày nhận hàng.',
      'Sản phẩm còn nguyên trạng, chưa qua sử dụng, đủ phụ kiện.',
      'Sản phẩm đặt riêng theo yêu cầu không áp dụng đổi trả.',
      'Hoàn tiền trong 7 ngày làm việc sau khi nghiệm thu hàng hoàn.',
    ],
  },
};

export const SOFA17_CART_ITEMS = [
  { id: 'gatsby-01', name: 'Riad Dệt tay Chesterfield', variant: 'Nhung Emerald · 3 chỗ', price: 68000000, qty: 1, image: SOFA17_PAGE_IMAGES.product7 },
  { id: 'gatsby-02', name: 'Deco Fan Lounge', variant: 'Da bò Ý Cognac · 2 chỗ', price: 42000000, qty: 2, image: SOFA17_PAGE_IMAGES.product8 },
];

export const SOFA17_ORDER_STEPS = [
  { label: 'Đã xác nhận', desc: 'Đơn hàng đã được tiếp nhận', done: true },
  { label: 'Đang chế tác', desc: 'Nghệ nhân đang hoàn thiện', done: true },
  { label: 'Kiểm định', desc: 'Kiểm tra chất lượng cuối cùng', done: true },
  { label: 'Đang giao', desc: 'Vận chuyển white-glove', done: false },
  { label: 'Hoàn tất', desc: 'Lắp đặt & nghiệm thu', done: false },
];

export const SOFA17_MEMBER_CUSTOMER = [
  { slug: 'dashboard', title: 'Dashboard', desc: 'Tổng quan tài khoản thành viên.', icon: 'solar:widget-bold-duotone' },
  { slug: 'profile', title: 'Hồ sơ', desc: 'Thông tin thành viên.', icon: 'solar:user-bold-duotone' },
  { slug: 'orders', title: 'Đơn hàng', desc: 'Lịch sử đơn hàng thành viên.', icon: 'solar:bag-check-bold-duotone' },
  { slug: 'warranty', title: 'Phiếu bảo hành', desc: 'Danh sách phiếu bảo hành.', icon: 'solar:shield-check-bold-duotone' },
  { slug: 'points', title: 'Điểm tích lũy', desc: '12.480 điểm khả dụng.', icon: 'solar:star-bold-duotone' },
  { slug: 'vouchers', title: 'Voucher', desc: '3 voucher đang hoạt động.', icon: 'solar:ticket-sale-bold-duotone' },
  { slug: 'complaints', title: 'Khiếu nại', desc: 'Gửi và theo dõi khiếu nại.', icon: 'solar:danger-triangle-bold-duotone' },
];

export const SOFA17_MEMBER_DEALER = [
  { slug: 'dealer', title: 'Dashboard đại lý', desc: 'Doanh số, chỉ tiêu, thưởng quý.', icon: 'solar:chart-square-bold-duotone' },
  { slug: 'dealer-pricing', title: 'Chính sách giá', desc: 'Bảng giá & chiết khấu đại lý.', icon: 'solar:tag-price-bold-duotone' },
  { slug: 'dealer-quotes', title: 'Báo giá', desc: 'Tạo và quản lý báo giá.', icon: 'solar:calculator-bold-duotone' },
  { slug: 'dealer-orders', title: 'Đơn hàng đại lý', desc: 'Theo dõi đơn hàng sỉ.', icon: 'solar:box-bold-duotone' },
  { slug: 'dealer-debt', title: 'Công nợ', desc: 'Số dư và lịch thanh toán.', icon: 'solar:wallet-money-bold-duotone' },
  { slug: 'dealer-docs', title: 'Tài liệu bán hàng', desc: 'Catalogue, ảnh, hồ sơ kỹ thuật.', icon: 'solar:folder-with-files-bold-duotone' },
];
