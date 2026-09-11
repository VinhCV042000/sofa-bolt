// SOFA10 ADMIN — cấu hình menu quản trị & dữ liệu mẫu cho từng màn hình
// ----------------------------------------------------------------------

export type Sofa10AdminSection = {
  slug: string;
  name: string;
  desc: string;
  kpis: { label: string; value: string; note?: string }[];
  columns: string[];
  rows: (string | number)[][];
};

export type Sofa10AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  desc: string;
  sections: Sofa10AdminSection[];
};

const s = (
  slug: string,
  name: string,
  desc: string,
  kpis: [string, string, string?][],
  columns: string[],
  rows: (string | number)[][]
): Sofa10AdminSection => ({
  slug,
  name,
  desc,
  kpis: kpis.map(([label, value, note]) => ({ label, value, note })),
  columns,
  rows,
});

const STATUS = ['Đang hoạt động', 'Bản nháp', 'Chờ duyệt', 'Tạm ẩn'];

const page = (title: string, path: string, i: number): (string | number)[] => [
  title,
  path,
  STATUS[i % STATUS.length],
  `${12 + i * 3}/09/2026`,
  'Admin',
];

export const SOFA10_ADMIN_GROUPS: Sofa10AdminGroup[] = [
  {
    slug: 'cms',
    name: 'CMS',
    icon: 'solar:documents-bold-duotone',
    desc: 'Quản trị nội dung toàn bộ website: trang, menu, banner, slider và SEO trang tĩnh.',
    sections: [
      s('home', 'Trang chủ', 'Bố cục và các khối nội dung trang chủ.',
        [['Khối nội dung', '12'], ['Đang hiển thị', '10'], ['Lượt xem/tháng', '38.420']],
        ['Khối', 'Vị trí', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        ['Hero Wabi-Sabi', 'Hero banner', 'Bộ sưu tập Sumi', 'Sản phẩm bán chạy', 'Trải nghiệm trà đạo', 'Đánh giá khách hàng', 'Blog mới nhất', 'Đăng ký nhận tin']
          .map((t, i) => [t, `Section ${i + 1}`, STATUS[i % STATUS.length], `${5 + i}/09/2026`, 'Admin'])),
      s('about', 'Trang giới thiệu', 'Nội dung câu chuyện thương hiệu wabi-sabi, xưởng sản xuất, đội ngũ.',
        [['Trang con', '6'], ['Đang hiển thị', '6'], ['Lượt xem/tháng', '7.820']],
        ['Trang', 'Đường dẫn', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        [['Câu chuyện wabi-sabi', '/sofa10/about'], ['Lịch sử xưởng', '/sofa10/about/history'],
         ['Xưởng chế tác', '/sofa10/about/workshop'], ['Triết lý thiền', '/sofa10/about/zen'],
         ['Đội ngũ', '/sofa10/about/team'], ['Chứng nhận', '/sofa10/about/certificates']]
          .map(([t, p], i) => page(t, p, i))),
      s('contact', 'Trang liên hệ', 'Thông tin liên hệ, bản đồ, biểu mẫu.',
        [['Biểu mẫu', '3'], ['Yêu cầu mới', '22'], ['Thời gian phản hồi', '2,1 giờ']],
        ['Mục', 'Đường dẫn', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        [['Form liên hệ', '/sofa10/contact'], ['Bản đồ showroom', '/sofa10/contact#map'],
         ['Hotline & email', '/sofa10/contact#info'], ['Đặt lịch thiền', '/sofa10/showrooms/consult']]
          .map(([t, p], i) => page(t, p, i))),
      s('policy', 'Trang chính sách', 'Bảo hành, đổi trả, vận chuyển, thanh toán, bảo mật.',
        [['Chính sách', '6'], ['Đã công bố', '5'], ['Chờ duyệt', '1']],
        ['Chính sách', 'Đường dẫn', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        [['Chính sách bảo hành 12 năm', '/sofa10/policy/warranty'], ['Chính sách đổi trả 60 ngày', '/sofa10/policy/return'],
         ['Chính sách vận chuyển 72h', '/sofa10/policy/shipping'], ['Chính sách thanh toán', '/sofa10/policy/payment'],
         ['Chính sách bảo mật', '/sofa10/policy/privacy'], ['Chính sách đại lý', '/sofa10/b2b/policy']]
          .map(([t, p], i) => page(t, p, i))),
      s('terms', 'Trang điều khoản', 'Điều khoản sử dụng, mua bán, thành viên.',
        [['Văn bản', '4'], ['Phiên bản mới nhất', 'v2.8'], ['Hiệu lực', '01/09/2026']],
        ['Điều khoản', 'Đường dẫn', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        [['Điều khoản sử dụng', '/sofa10/policy/terms'], ['Điều khoản mua bán', '/sofa10/policy/purchase'],
         ['Điều khoản thành viên', '/sofa10/policy/member'], ['Thoả thuận đại lý', '/sofa10/policy/dealer']]
          .map(([t, p], i) => page(t, p, i))),
      s('faq', 'Trang FAQ', 'Câu hỏi thường gặp theo nhóm chủ đề.',
        [['Câu hỏi', '34'], ['Nhóm chủ đề', '6'], ['Hữu ích', '94%']],
        ['Câu hỏi', 'Nhóm', 'Trạng thái', 'Cập nhật', 'Lượt xem'],
        [['Wabi-sabi là gì?', 'Triết lý', 1820], ['Linen thô khó chăm sóc?', 'Chăm sóc', 1240],
         ['Sofa thấp có thoải mái?', 'Sản phẩm', 1110], ['Gỗ không phủ có ố không?', 'Vật liệu', 980],
         ['Bảo hành 12 năm gồm gì?', 'Bảo hành', 1450], ['Giao hàng 72h?', 'Vận chuyển', 2050]]
          .map(([q, g, v], i) => [q, g, STATUS[i % 2], `${9 + i}/09/2026`, v])),
      s('blog', 'Trang blog', 'Bài viết, chuyên mục, tác giả và lịch xuất bản.',
        [['Bài viết', '98'], ['Chuyên mục', '7'], ['Bài chờ duyệt', '4']],
        ['Tiêu đề', 'Chuyên mục', 'Trạng thái', 'Xuất bản', 'Lượt đọc'],
        [['Wabi-sabi trong nội thất hiện đại', 'Triết lý', 3820], ['Chăm sóc linen thô đúng cách', 'Chăm sóc', 2940],
         ['Xu hướng nội thất Nhật 2026', 'Xu hướng', 4710], ['Phối màu wabi-sabi', 'Thiết kế', 2360],
         ['Sofa thấp vs sofa cao', 'Tư vấn', 5380], ['Trà đạo và không gian sống', 'Lối sống', 1740]]
          .map(([t, c, v], i) => [t, c, STATUS[i % 3], `${3 + i}/09/2026`, v])),
      s('menu', 'Menu', 'Cấu trúc menu chính, menu chân trang và menu di động.',
        [['Menu', '4'], ['Mục menu', '52'], ['Cấp sâu nhất', '3']],
        ['Menu', 'Vị trí', 'Số mục', 'Trạng thái', 'Cập nhật'],
        [['Menu chính', 'Header', 22], ['Menu chân trang', 'Footer', 16],
         ['Menu di động', 'Mobile', 20], ['Menu tài khoản', 'User', 8]]
          .map(([n, p, c], i) => [n, p, c, STATUS[i % 2], `${11 + i}/09/2026`])),
      s('banner', 'Banner', 'Banner quảng cáo theo vị trí và thời gian hiển thị.',
        [['Banner', '14'], ['Đang chạy', '8'], ['CTR trung bình', '3,1%']],
        ['Banner', 'Vị trí', 'Thời gian', 'Trạng thái', 'CTR'],
        [['Ưu đãi tháng 9', 'Top bar'], ['BST Sumi mới', 'Sidebar'], ['Giao 72h miễn phí', 'Giữa trang'],
         ['Bộ sưu tập Tsuchi', 'Trang sản phẩm'], ['Đại lý toàn quốc', 'Footer']]
          .map(([n, p], i) => [n, p, `01/09 - ${20 + i}/10`, STATUS[i % 2], `${(2.1 + i * 0.3).toFixed(1)}%`])),
      s('slider', 'Slider', 'Slider trang chủ và trang danh mục.',
        [['Slider', '5'], ['Slide', '18'], ['Tự động chuyển', '7 giây']],
        ['Slider', 'Số slide', 'Trang áp dụng', 'Trạng thái', 'Cập nhật'],
        [['Hero trang chủ', 5, 'Trang chủ'], ['Bộ sưu tập', 4, 'Collections'],
         ['Trải nghiệm trà đạo', 3, 'Projects'], ['Showroom', 3, 'Showrooms'], ['Khuyến mãi', 3, 'Promotions']]
          .map(([n, c, p], i) => [n, c, p, STATUS[i % 2], `${7 + i}/09/2026`])),
      s('seo', 'SEO', 'Thẻ tiêu đề, mô tả, OG cho các trang nội dung.',
        [['Trang đã tối ưu', '84%'], ['Thiếu meta', '16'], ['Điểm SEO', '89/100']],
        ['Trang', 'Title', 'Độ dài mô tả', 'Trạng thái', 'Điểm'],
        [['Trang chủ', 'Sofa Wabi-Sabi Nhật Bản | Sofa10', 148], ['Sản phẩm', 'Sofa linen thô wabi-sabi', 142],
         ['Bộ sưu tập', 'BST Sumi · Tsuchi · Kami · Ki', 136], ['Blog', 'Kiến thức wabi-sabi', 122],
         ['Liên hệ', 'Liên hệ showroom Sofa10', 116]]
          .map(([p, t, l], i) => [p, t, `${l} ký tự`, i === 4 ? 'Cần tối ưu' : 'Tốt', 85 + i])),
      s('static', 'Trang tĩnh', 'Các trang landing và trang nội dung độc lập.',
        [['Trang tĩnh', '9'], ['Đang hiển thị', '8'], ['Bản nháp', '1']],
        ['Trang', 'Đường dẫn', 'Trạng thái', 'Cập nhật', 'Người sửa'],
        [['Hướng dẫn mua hàng', '/sofa10/support'], ['Tra cứu đơn hàng', '/sofa10/orders/tracking'],
         ['Thanh toán', '/sofa10/payment'], ['Tuyển dụng', '/sofa10/careers'], ['Khuyến mãi', '/sofa10/promotions']]
          .map(([t, p], i) => page(t, p, i))),
    ],
  },
  {
    slug: 'products',
    name: 'Sản phẩm',
    icon: 'solar:box-bold-duotone',
    desc: 'Quản lý danh mục, sản phẩm, thuộc tính, biến thể, tồn kho và giá bán.',
    sections: [
      s('categories', 'Danh mục', 'Cây danh mục sản phẩm nhiều cấp.',
        [['Danh mục', '18'], ['Danh mục cha', '4'], ['Sản phẩm chưa gán', '2']],
        ['Danh mục', 'Danh mục cha', 'Số sản phẩm', 'Trạng thái', 'Thứ tự'],
        [['Sumi Series', '—', 8], ['Tsuchi Series', '—', 7], ['Kami Series', '—', 6],
         ['Ki Series', '—', 5], ['Sofa thấp', 'Sumi Series', 4], ['Sofa tatami', 'Kami Series', 3]]
          .map(([n, p, c], i) => [n, p, c, STATUS[i % 2], i + 1])),
      s('products', 'Sản phẩm', 'Danh sách sản phẩm, ảnh, mô tả và trạng thái bán.',
        [['Sản phẩm', '142'], ['Đang bán', '128'], ['Hết hàng', '6']],
        ['Mã', 'Tên sản phẩm', 'Danh mục', 'Giá bán', 'Trạng thái'],
        [['SF10-001', 'Sofa Sumi Zaisu', 'Sumi Series', '16.500.000đ'],
         ['SF10-002', 'Sofa Tsuchi Low', 'Tsuchi Series', '12.900.000đ'],
         ['SF10-003', 'Sofa Kami Minimal', 'Kami Series', '14.500.000đ'],
         ['SF10-004', 'Sofa Ki Woody', 'Ki Series', '18.900.000đ'],
         ['SF10-005', 'Sofa Tatami Modern', 'Sumi Series', '11.500.000đ'],
         ['SF10-006', 'Sofa Chashitsu', 'Tsuchi Series', '17.500.000đ']]
          .map(([c, n, cat, p], i) => [c, n, cat, p, i === 5 ? 'Hết hàng' : 'Đang bán'])),
      s('attributes', 'Thuộc tính', 'Chất liệu, màu sắc, kích thước, kiểu dáng.',
        [['Thuộc tính', '12'], ['Giá trị', '78'], ['Dùng cho lọc', '7']],
        ['Thuộc tính', 'Kiểu', 'Số giá trị', 'Dùng lọc', 'Trạng thái'],
        [['Chất liệu', 'Chọn 1', 6], ['Màu sắc', 'Bảng màu', 18], ['Kích thước', 'Chọn 1', 10],
         ['Số chỗ ngồi', 'Chọn 1', 5], ['Độ cao ngồi', 'Chọn 1', 4], ['Kiểu chân', 'Chọn 1', 4]]
          .map(([n, t, c], i) => [n, t, c, i < 4 ? 'Có' : 'Không', STATUS[i % 2]])),
      s('variants', 'Biến thể sản phẩm', 'Tổ hợp biến thể theo SKU.',
        [['Biến thể', '568'], ['SKU hoạt động', '512'], ['Thiếu ảnh', '8']],
        ['SKU', 'Sản phẩm', 'Biến thể', 'Tồn kho', 'Giá'],
        [['SF10-001-INK-3S', 'Sofa Sumi Zaisu', 'Mực / 3 chỗ', 9, '16.500.000đ'],
         ['SF10-001-STN-3S', 'Sofa Sumi Zaisu', 'Đá / 3 chỗ', 6, '16.500.000đ'],
         ['SF10-002-ETH-L', 'Sofa Tsuchi Low', 'Đất / Thấp', 4, '12.900.000đ'],
         ['SF10-003-PAP-2S', 'Sofa Kami Minimal', 'Giấy / 2 chỗ', 0, '14.500.000đ'],
         ['SF10-004-WOD-L', 'Sofa Ki Woody', 'Gỗ / Thấp', 7, '18.900.000đ']]),
      s('inventory', 'Kho hàng', 'Tồn kho theo sản phẩm và kho.',
        [['SKU tồn', '512'], ['Sắp hết', '18'], ['Giá trị tồn', '12,8 tỷ']],
        ['SKU', 'Sản phẩm', 'Kho', 'Tồn', 'Ngưỡng cảnh báo'],
        [['SF10-001-INK-3S', 'Sofa Sumi Zaisu', 'Kho Hà Nội', 9, 4],
         ['SF10-002-ETH-L', 'Sofa Tsuchi Low', 'Kho HCM', 4, 4],
         ['SF10-003-PAP-2S', 'Sofa Kami Minimal', 'Kho Đà Nẵng', 0, 3],
         ['SF10-004-WOD-L', 'Sofa Ki Woody', 'Kho Hà Nội', 7, 5],
         ['SF10-005-TAT-M', 'Sofa Tatami Modern', 'Kho HCM', 3, 6]]),
      s('pricing', 'Giá bán', 'Bảng giá, giá khuyến mãi và giá đại lý.',
        [['Bảng giá', '3'], ['Đang khuyến mãi', '24 SP'], ['Biên lợi nhuận TB', '36%']],
        ['Sản phẩm', 'Giá niêm yết', 'Giá khuyến mãi', 'Giá đại lý', 'Hiệu lực'],
        [['Sofa Sumi Zaisu', '16.500.000đ', '14.850.000đ', '12.800.000đ'],
         ['Sofa Tsuchi Low', '12.900.000đ', '10.062.000đ', '9.900.000đ'],
         ['Sofa Kami Minimal', '14.500.000đ', '—', '11.200.000đ'],
         ['Sofa Ki Woody', '18.900.000đ', '17.010.000đ', '14.600.000đ'],
         ['Sofa Tatami Modern', '11.500.000đ', '—', '8.900.000đ']]
          .map((r, i) => [...r, `01/09 - ${25 + i}/10/2026`])),
    ],
  },
  {
    slug: 'warehouse',
    name: 'Kho hàng',
    icon: 'solar:box-minimalistic-bold-duotone',
    desc: 'Quản lý kho, nhập xuất, kiểm kê và điều chuyển hàng hoá.',
    sections: [
      s('overview', 'Tổng quan kho', 'Tình trạng tồn kho theo từng kho.',
        [['Kho', '3'], ['SKU', '512'], ['Giá trị tồn', '12,8 tỷ'], ['Sắp hết', '18']],
        ['Kho', 'Địa điểm', 'SKU', 'Tồn', 'Sức chứa'],
        [['Kho Hà Nội', 'Cầu Giấy, Hà Nội', 198, 1120, '74%'],
         ['Kho HCM', 'Thủ Đức, TP.HCM', 212, 1380, '82%'],
         ['Kho Đà Nẵng', 'Hải Châu, Đà Nẵng', 102, 420, '48%']]),
      s('receipts', 'Nhập kho', 'Phiếu nhập từ xưởng và nhà cung cấp.',
        [['Phiếu tháng này', '32'], ['Chờ duyệt', '3'], ['Giá trị nhập', '2,4 tỷ']],
        ['Mã phiếu', 'Nguồn', 'Số lượng', 'Ngày', 'Trạng thái'],
        [['PN-2609-01', 'Xưởng Nhật Tân', 72], ['PN-2609-02', 'NCC Linen Nhật', 96],
         ['PN-2609-03', 'NCC Gỗ sồi', 48], ['PN-2609-04', 'Xưởng Nhật Tân', 36]]
          .map(([m, n, q], i) => [m, n, q, `${10 + i}/09/2026`, i === 3 ? 'Chờ duyệt' : 'Hoàn tất'])),
      s('issues', 'Xuất kho', 'Phiếu xuất giao khách và điều chuyển.',
        [['Phiếu tháng này', '118'], ['Đang giao', '18'], ['Giá trị xuất', '4,2 tỷ']],
        ['Mã phiếu', 'Đích đến', 'Số lượng', 'Ngày', 'Trạng thái'],
        [['PX-2609-11', 'Đơn #9238', 1], ['PX-2609-12', 'Đại lý Hải Phòng', 8],
         ['PX-2609-13', 'Showroom Cầu Giấy', 5], ['PX-2609-14', 'Đơn #9244', 2]]
          .map(([m, n, q], i) => [m, n, q, `${12 + i}/09/2026`, i % 2 ? 'Đang giao' : 'Hoàn tất'])),
      s('stocktake', 'Kiểm kê', 'Đợt kiểm kê định kỳ và chênh lệch.',
        [['Đợt kiểm kê', '6/năm'], ['Chênh lệch', '0,3%'], ['Gần nhất', '31/08/2026']],
        ['Đợt', 'Kho', 'SKU kiểm', 'Chênh lệch', 'Trạng thái'],
        [['KK-2608', 'Kho Hà Nội', 198, '-2'], ['KK-2608', 'Kho HCM', 212, '+1'],
         ['KK-2608', 'Kho Đà Nẵng', 102, '0'], ['KK-2609', 'Kho Hà Nội', 198, 'Đang kiểm']]
          .map((r, i) => [...r, i === 3 ? 'Đang thực hiện' : 'Hoàn tất'])),
      s('transfers', 'Điều chuyển', 'Điều chuyển hàng giữa các kho và showroom.',
        [['Lệnh tháng này', '12'], ['Đang vận chuyển', '2'], ['Thời gian TB', '1,8 ngày']],
        ['Mã lệnh', 'Từ kho', 'Đến kho', 'Số lượng', 'Trạng thái'],
        [['DC-2609-01', 'Kho HCM', 'Kho Đà Nẵng', 14], ['DC-2609-02', 'Kho Hà Nội', 'Showroom Cầu Giấy', 5],
         ['DC-2609-03', 'Kho HCM', 'Kho Hà Nội', 22]]
          .map((r, i) => [...r, i === 2 ? 'Đang vận chuyển' : 'Hoàn tất'])),
    ],
  },
  {
    slug: 'orders',
    name: 'Đơn hàng',
    icon: 'solar:cart-large-2-bold-duotone',
    desc: 'Xử lý đơn hàng, thanh toán, vận chuyển, hoàn tiền và đổi trả.',
    sections: [
      s('orders', 'Đơn hàng', 'Danh sách đơn hàng theo trạng thái xử lý.',
        [['Đơn tháng này', '328'], ['Chờ xử lý', '22'], ['Doanh thu', '4,8 tỷ'], ['Giá trị TB', '14,6 triệu']],
        ['Mã đơn', 'Khách hàng', 'Sản phẩm', 'Tổng tiền', 'Trạng thái'],
        [['#9238', 'Yuki Tanaka', 'Sofa Sumi Zaisu', '16.500.000đ', 'Đang sản xuất'],
         ['#9239', 'Linh Đỗ', 'Sofa Tsuchi Low', '12.900.000đ', 'Chờ xác nhận'],
         ['#9240', 'Hiroshi Sato', 'Sofa Kami Minimal', '14.500.000đ', 'Đang giao'],
         ['#9241', 'Ngọc Hân', 'Sofa Tatami Modern', '11.500.000đ', 'Hoàn tất'],
         ['#9242', 'Mai Phương', 'Sofa Chashitsu', '17.500.000đ', 'Hoàn tất'],
         ['#9243', 'Vũ Nam', 'Sofa Ki Woody', '18.900.000đ', 'Đã huỷ']]),
      s('payments', 'Thanh toán', 'Giao dịch thanh toán và đối soát.',
        [['Giao dịch', '312'], ['Thành công', '96,8%'], ['Chờ đối soát', '8']],
        ['Mã GD', 'Đơn hàng', 'Phương thức', 'Số tiền', 'Trạng thái'],
        [['TT-76231', '#9238', 'Chuyển khoản', '16.500.000đ', 'Thành công'],
         ['TT-76232', '#9239', 'Trả góp 0%', '12.900.000đ', 'Chờ duyệt'],
         ['TT-76233', '#9240', 'COD', '14.500.000đ', 'Chờ thu'],
         ['TT-76234', '#9241', 'Thẻ tín dụng', '11.500.000đ', 'Thành công'],
         ['TT-76235', '#9243', 'Ví điện tử', '18.900.000đ', 'Đã hoàn']]),
      s('shipping', 'Vận chuyển', 'Đơn vận, lịch giao lắp và trạng thái giao hàng.',
        [['Đơn vận', '162'], ['Đang giao', '28'], ['Giao đúng hẹn', '97,4%']],
        ['Mã vận đơn', 'Đơn hàng', 'Đơn vị', 'Lịch giao', 'Trạng thái'],
        [['VD-4521', '#9240', 'Đội giao lắp nội bộ', '18/09/2026', 'Đang giao'],
         ['VD-4522', '#9238', 'Đội giao lắp nội bộ', '26/09/2026', 'Chờ xuất kho'],
         ['VD-4523', '#9241', 'GHTK Cồng kềnh', '14/09/2026', 'Đã giao'],
         ['VD-4524', '#9242', 'Viettel Post', '13/09/2026', 'Đã giao']]),
      s('refunds', 'Hoàn tiền', 'Yêu cầu hoàn tiền và tiến độ xử lý.',
        [['Yêu cầu', '7'], ['Đã hoàn', '5'], ['Giá trị hoàn', '62,4 triệu']],
        ['Mã', 'Đơn hàng', 'Lý do', 'Số tiền', 'Trạng thái'],
        [['HT-181', '#9243', 'Khách huỷ đơn', '18.900.000đ', 'Đã hoàn'],
         ['HT-182', '#9199', 'Giao chậm', '4.200.000đ', 'Đang xử lý'],
         ['HT-183', '#9187', 'Lỗi sản xuất', '14.500.000đ', 'Đã hoàn'],
         ['HT-184', '#9221', 'Sai màu đặt', '11.500.000đ', 'Chờ duyệt']]),
      s('returns', 'Đổi trả', 'Phiếu đổi trả trong 60 ngày và bảo hành.',
        [['Phiếu đổi trả', '11'], ['Tỷ lệ đổi trả', '0,9%'], ['Xử lý TB', '2,8 ngày']],
        ['Mã', 'Đơn hàng', 'Sản phẩm', 'Hình thức', 'Trạng thái'],
        [['DT-108', '#9187', 'Sofa Kami Minimal', 'Đổi sản phẩm', 'Hoàn tất'],
         ['DT-109', '#9221', 'Sofa Tatami Modern', 'Đổi màu', 'Đang xử lý'],
         ['DT-110', '#9205', 'Sofa Tsuchi Low', 'Trả hàng', 'Chờ nhận hàng'],
         ['DT-111', '#9193', 'Sofa Sumi Zaisu', 'Bảo hành', 'Đang sửa chữa']]),
    ],
  },
  {
    slug: 'crm',
    name: 'CRM',
    icon: 'solar:users-group-rounded-bold-duotone',
    desc: 'Khách hàng, leads, lịch sử mua hàng và chăm sóc sau bán.',
    sections: [
      s('customers', 'Khách hàng', 'Hồ sơ khách hàng và phân nhóm.',
        [['Khách hàng', '3.486'], ['Khách VIP', '142'], ['Mua lại', '28%']],
        ['Khách hàng', 'Điện thoại', 'Nhóm', 'Số đơn', 'Tổng chi tiêu'],
        [['Yuki Tanaka', '0901 xxx 481', 'VIP', 5, '142.400.000đ'],
         ['Linh Đỗ', '0987 xxx 220', 'Thân thiết', 3, '68.200.000đ'],
         ['Hiroshi Sato', '0903 xxx 117', 'Mới', 1, '14.500.000đ'],
         ['Ngọc Hân', '0938 xxx 654', 'Thân thiết', 4, '82.100.000đ'],
         ['Mai Phương', '0911 xxx 903', 'Mới', 1, '17.500.000đ']]),
      s('leads', 'Leads', 'Khách tiềm năng theo nguồn và giai đoạn.',
        [['Leads tháng', '512'], ['Đang chăm sóc', '186'], ['Tỷ lệ chốt', '16,8%']],
        ['Lead', 'Nguồn', 'Nhu cầu', 'Giai đoạn', 'Phụ trách'],
        [['Hoàng Anh Tuấn', 'Facebook Ads', 'Sofa wabi-sabi phòng khách', 'Tư vấn', 'Ngọc Anh'],
         ['Mai Phương', 'Google Ads', 'Sofa thấp 3 chỗ', 'Báo giá', 'Hải Nam'],
         ['Công ty TNHH Vạn Phát', 'Giới thiệu', 'Nội thất văn phòng', 'Đàm phán', 'Thu Trang'],
         ['Nguyễn Đức Hải', 'Showroom', 'Sofa tatami', 'Mới', 'Ngọc Anh'],
         ['Trịnh Bảo Ngọc', 'Zalo OA', 'Sofa linen thô', 'Tư vấn', 'Hải Nam']]),
      s('purchase-history', 'Lịch sử mua hàng', 'Toàn bộ giao dịch theo khách hàng.',
        [['Giao dịch', '7.812'], ['Giá trị TB', '14,6 triệu'], ['Chu kỳ mua lại', '16 tháng']],
        ['Khách hàng', 'Đơn hàng', 'Ngày mua', 'Giá trị', 'Kênh'],
        [['Yuki Tanaka', '#9238', '12/09/2026', '16.500.000đ', 'Website'],
         ['Yuki Tanaka', '#08871', '03/03/2026', '22.600.000đ', 'Showroom'],
         ['Ngọc Hân', '#9241', '10/09/2026', '11.500.000đ', 'Website'],
         ['Linh Đỗ', '#9239', '11/09/2026', '12.900.000đ', 'Hotline'],
         ['Hiroshi Sato', '#9240', '11/09/2026', '14.500.000đ', 'Website']]),
      s('care', 'Chăm sóc khách hàng', 'Ticket hỗ trợ, bảo trì và khảo sát hài lòng.',
        [['Ticket mở', '22'], ['Hài lòng', '4,9/5'], ['Phản hồi TB', '1,6 giờ']],
        ['Ticket', 'Khách hàng', 'Chủ đề', 'Mức ưu tiên', 'Trạng thái'],
        [['#TK-671', 'Hiroshi Sato', 'Hẹn lịch giao lắp', 'Trung bình', 'Đang xử lý'],
         ['#TK-672', 'Ngọc Hân', 'Bảo trì đệm', 'Thấp', 'Đã lên lịch'],
         ['#TK-673', 'Yuki Tanaka', 'Tư vấn patina gỗ', 'Thấp', 'Hoàn tất'],
         ['#TK-674', 'Mai Phương', 'Khiếu nại vết xước', 'Cao', 'Đang xử lý']]),
    ],
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    icon: 'solar:megaphone-bold-duotone',
    desc: 'Chiến dịch email, SMS, push, mã giảm giá và affiliate.',
    sections: [
      s('email', 'Email Marketing', 'Chiến dịch email và tự động hoá.',
        [['Chiến dịch', '14'], ['Tỷ lệ mở', '36,8%'], ['Tỷ lệ click', '5,8%']],
        ['Chiến dịch', 'Tệp gửi', 'Đã gửi', 'Tỷ lệ mở', 'Trạng thái'],
        [['Ưu đãi tháng 9', 'Toàn bộ', 10200, '39,4%', 'Đã gửi'],
         ['Giỏ hàng bỏ quên', 'Tự động', 720, '50,2%', 'Đang chạy'],
         ['Ra mắt BST Sumi', 'Khách VIP', 1420, '46,1%', 'Đã gửi'],
         ['Chăm sóc sau mua', 'Tự động', 540, '58,3%', 'Đang chạy'],
         ['Newsletter tuần', 'Đăng ký', 8200, '27,4%', 'Lên lịch']]),
      s('sms', 'SMS Marketing', 'Tin nhắn chăm sóc và khuyến mãi.',
        [['Tin đã gửi', '21.600'], ['Tỷ lệ nhận', '98,4%'], ['Chi phí/tin', '280đ']],
        ['Chiến dịch', 'Tệp gửi', 'Đã gửi', 'Tỷ lệ click', 'Trạng thái'],
        [['Flash sale cuối tuần', 'Khách cũ', 7200, '3,8%', 'Đã gửi'],
         ['Nhắc lịch giao lắp', 'Tự động', 312, '—', 'Đang chạy'],
         ['Sinh nhật khách hàng', 'Tự động', 164, '7,2%', 'Đang chạy'],
         ['Mời tham quan showroom', 'Lead', 3100, '2,9%', 'Đã gửi']]),
      s('push', 'Push Notification', 'Thông báo đẩy web và ứng dụng.',
        [['Người đăng ký', '15.840'], ['Tỷ lệ click', '5,4%'], ['Huỷ đăng ký', '1,1%']],
        ['Thông báo', 'Đối tượng', 'Đã gửi', 'Click', 'Trạng thái'],
        [['Giảm 10% sofa linen', 'Tất cả', 15840, '5,8%', 'Đã gửi'],
         ['Hàng về kho', 'Quan tâm SP', 2100, '8,9%', 'Đã gửi'],
         ['Đơn hàng đang giao', 'Tự động', 280, '30,2%', 'Đang chạy'],
         ['Blog mới', 'Đọc blog', 4800, '2,8%', 'Lên lịch']]),
      s('coupon', 'Coupon', 'Mã giảm giá theo chiến dịch và điều kiện áp dụng.',
        [['Mã đang chạy', '10'], ['Lượt dùng', '1.084'], ['Doanh thu từ mã', '1,4 tỷ']],
        ['Mã', 'Ưu đãi', 'Điều kiện', 'Đã dùng', 'Hiệu lực'],
        [['SOFA10', 'Giảm 10%', 'Đơn từ 15 triệu', 362, '01/09 - 30/09'],
         ['FREESHIP', 'Miễn phí giao lắp', 'Nội thành', 248, '01/09 - 30/10'],
         ['NEW500', 'Giảm 500.000đ', 'Khách mới', 174, '01/08 - 31/12'],
         ['VIP15', 'Giảm 15%', 'Khách VIP', 78, '01/09 - 30/09'],
         ['B2B20', 'Giảm 20%', 'Đại lý', 222, 'Không giới hạn']]),
      s('affiliate', 'Affiliate', 'Cộng tác viên, hoa hồng và thanh toán.',
        [['Cộng tác viên', '124'], ['Đơn giới thiệu', '268'], ['Hoa hồng tháng', '142 triệu']],
        ['Cộng tác viên', 'Kênh', 'Đơn', 'Doanh thu', 'Hoa hồng'],
        [['Wabi Decor Review', 'YouTube', 58, '980 triệu', '49.000.000đ'],
         ['Zen Living VN', 'Facebook', 44, '720 triệu', '36.000.000đ'],
         ['Chị Hà Thiền', 'TikTok', 38, '520 triệu', '26.000.000đ'],
         ['Blog Sống Đẹp', 'Website', 28, '340 triệu', '17.000.000đ']]),
    ],
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    icon: 'solar:chart-square-bold-duotone',
    desc: 'Doanh thu, sản phẩm bán chạy, nguồn truy cập, hành vi và chuyển đổi.',
    sections: [
      s('revenue', 'Doanh thu', 'Doanh thu theo thời gian, kênh và khu vực.',
        [['Doanh thu tháng', '4,8 tỷ'], ['Tăng trưởng', '+16,4%'], ['Đơn hàng', '328'], ['AOV', '14,6 triệu']],
        ['Kênh', 'Doanh thu', 'Đơn hàng', 'AOV', 'Tăng trưởng'],
        [['Website', '2,3 tỷ', 162, '14,2 triệu', '+19%'],
         ['Showroom', '1,6 tỷ', 88, '18,2 triệu', '+9%'],
         ['Đại lý B2B', '780 triệu', 52, '15,0 triệu', '+22%'],
         ['Hotline', '120 triệu', 26, '4,6 triệu', '-3%']]),
      s('best-sellers', 'Sản phẩm bán chạy', 'Top sản phẩm theo doanh số và số lượng.',
        [['SKU bán chạy', '28'], ['Top 10 chiếm', '44% DT'], ['Tồn xoay vòng', '4,8 lần/năm']],
        ['Sản phẩm', 'Đã bán', 'Doanh thu', 'Tồn kho', 'Xu hướng'],
        [['Sofa Sumi Zaisu', 42, '693 triệu', 9, '↑ 21%'],
         ['Sofa Tsuchi Low', 56, '722 triệu', 4, '↑ 28%'],
         ['Sofa Kami Minimal', 38, '551 triệu', 0, '↓ 4%'],
         ['Sofa Ki Woody', 24, '454 triệu', 7, '↑ 12%'],
         ['Sofa Tatami Modern', 48, '552 triệu', 3, '↑ 18%']]),
      s('traffic', 'Nguồn truy cập', 'Lưu lượng theo kênh và chiến dịch.',
        [['Phiên/tháng', '148.200'], ['Người dùng mới', '64%'], ['Thời gian TB', '3:28']],
        ['Nguồn', 'Phiên', 'Tỷ lệ', 'Thoát', 'Chuyển đổi'],
        [['Google Organic', 62400, '42,1%', '36%', '2,6%'],
         ['Google Ads', 32800, '22,1%', '44%', '3,1%'],
         ['Facebook', 26200, '17,7%', '50%', '1,8%'],
         ['Trực tiếp', 17200, '11,6%', '32%', '3,8%'],
         ['Giới thiệu', 9600, '6,5%', '39%', '2,1%']]),
      s('behavior', 'Hành vi khách hàng', 'Trang được xem, luồng di chuyển và tương tác.',
        [['Trang/phiên', '4,8'], ['Thêm giỏ hàng', '7,6%'], ['Xem 3D/AR', '8.400 lượt']],
        ['Trang', 'Lượt xem', 'Thời gian TB', 'Thoát', 'Thêm giỏ'],
        [['Trang chủ', 48200, '1:52', '26%', '—'],
         ['Danh sách sản phẩm', 36400, '3:32', '29%', '5,6%'],
         ['Chi tiết sản phẩm', 31800, '4:22', '24%', '13,8%'],
         ['Bộ sưu tập', 14800, '2:48', '36%', '3,8%'],
         ['Blog', 12400, '5:18', '58%', '0,3%']]),
      s('conversion', 'Tỷ lệ chuyển đổi', 'Phễu chuyển đổi từ truy cập đến đơn hàng.',
        [['Chuyển đổi', '2,7%'], ['Bỏ giỏ hàng', '62,4%'], ['Chuyển đổi showroom', '28,6%']],
        ['Bước phễu', 'Người dùng', 'Tỷ lệ giữ', 'Rời bỏ', 'Ghi chú'],
        [['Truy cập', 148200, '100%', '—', 'Tổng phiên'],
         ['Xem sản phẩm', 76400, '51,6%', '48,4%', 'Cần tối ưu danh mục'],
         ['Thêm giỏ hàng', 11280, '14,8%', '85,2%', 'Ưu đãi giao lắp'],
         ['Thanh toán', 6820, '60,5%', '39,5%', 'Rút gọn biểu mẫu'],
         ['Đặt hàng', 4210, '61,7%', '38,3%', 'Hỗ trợ trả góp']]),
    ],
  },
  {
    slug: 'seo',
    name: 'SEO',
    icon: 'solar:magnifer-bold-duotone',
    desc: 'Tối ưu SEO cho từng nhóm trang, sitemap, robots và schema.',
    sections: [
      s('category', 'Trang danh mục', 'Tối ưu tiêu đề, mô tả và nội dung danh mục.',
        [['Trang', '18'], ['Đã tối ưu', '16'], ['Từ khoá top 10', '72']],
        ['Danh mục', 'Từ khoá chính', 'Thứ hạng', 'Điểm SEO', 'Trạng thái'],
        [['Sumi Series', 'sofa sumi wabi-sabi', 3, 92], ['Tsuchi Series', 'sofa tsuchi đất', 5, 87],
         ['Kami Series', 'sofa kami minimal', 7, 84], ['Ki Series', 'sofa ki gỗ tự nhiên', 9, 80],
         ['Sofa thấp', 'sofa thấp wabi-sabi', 6, 88]]
          .map((r, i) => [...r, i === 3 ? 'Cần tối ưu' : 'Tốt'])),
      s('product', 'Trang sản phẩm', 'Meta, ảnh alt và schema sản phẩm.',
        [['Sản phẩm', '142'], ['Có schema', '136'], ['Thiếu alt ảnh', '18']],
        ['Sản phẩm', 'Từ khoá', 'Thứ hạng', 'Schema', 'Trạng thái'],
        [['Sofa Sumi Zaisu', 'sofa sumi zaisu', 2, 'Product + Review'],
         ['Sofa Tsuchi Low', 'sofa tsuchi low', 4, 'Product'],
         ['Sofa Kami Minimal', 'sofa kami minimal', 8, 'Product'],
         ['Sofa Ki Woody', 'sofa ki woody', 6, 'Thiếu'],
         ['Sofa Tatami Modern', 'sofa tatami modern', 10, 'Product']]
          .map((r, i) => [...r, i === 3 ? 'Cần bổ sung' : 'Tốt'])),
      s('collection', 'Trang bộ sưu tập', 'SEO cho landing bộ sưu tập.',
        [['Bộ sưu tập', '4'], ['Đã tối ưu', '4'], ['Traffic/tháng', '14.800']],
        ['Bộ sưu tập', 'Từ khoá', 'Truy cập', 'Điểm SEO', 'Trạng thái'],
        [['Sumi', 'bộ sưu tập sofa sumi', 5200, 91], ['Tsuchi', 'sofa tsuchi', 3400, 86],
         ['Kami', 'sofa kami', 2800, 82], ['Ki', 'sofa ki gỗ', 3400, 78]]
          .map((r, i) => [...r, i === 3 ? 'Cần tối ưu' : 'Tốt'])),
      s('project', 'Trang dự án', 'SEO cho trang dự án thi công.',
        [['Dự án', '28'], ['Đã tối ưu', '24'], ['Truy cập', '7.200']],
        ['Dự án', 'Từ khoá', 'Truy cập', 'Điểm SEO', 'Trạng thái'],
        [['Tea Room Tokyo', 'nội thất trà đạo', 2100, 88],
         ['Tatami Suite Kyoto', 'nội thất tatami', 1600, 85],
         ['Zen Corner Osaka', 'góc thiền nội thất', 1300, 80],
         ['Chashitsu Hanoi', 'phòng trà nội thất', 1200, 77]]
          .map((r, i) => [...r, i > 2 ? 'Cần tối ưu' : 'Tốt'])),
      s('showroom', 'Trang showroom', 'SEO local cho từng showroom.',
        [['Showroom', '4'], ['Google Business', '4'], ['Đánh giá TB', '4,9/5']],
        ['Showroom', 'Từ khoá địa phương', 'Thứ hạng', 'Đánh giá', 'Trạng thái'],
        [['Cầu Giấy, Hà Nội', 'showroom sofa cầu giấy', 1, '4,9/5'],
         ['Thủ Đức, TP.HCM', 'sofa thủ đức wabi', 2, '4,8/5'],
         ['Hải Châu, Đà Nẵng', 'sofa đà nẵng', 3, '4,9/5'],
         ['Quận 1, TP.HCM', 'showroom sofa quận 1', 4, '4,7/5']]
          .map((r) => [...r, 'Tốt'])),
      s('blog', 'Trang blog', 'SEO nội dung, internal link và từ khoá dài.',
        [['Bài viết', '98'], ['Từ khoá top 10', '182'], ['Traffic organic', '34.600']],
        ['Bài viết', 'Từ khoá', 'Thứ hạng', 'Truy cập', 'Trạng thái'],
        [['Wabi-sabi trong nội thất hiện đại', 'wabi-sabi nội thất', 2, 7200],
         ['Chăm sóc linen thô', 'chăm sóc linen thô', 1, 5400],
         ['Xu hướng nội thất Nhật 2026', 'nội thất nhật 2026', 4, 4600],
         ['Sofa thấp vs sofa cao', 'sofa thấp hay cao', 3, 6200],
         ['Trà đạo và không gian sống', 'trà đạo không gian', 8, 2400]]
          .map((r, i) => [...r, i === 4 ? 'Cần tối ưu' : 'Tốt'])),
      s('brand', 'Trang thương hiệu', 'Trang thương hiệu và entity SEO.',
        [['Trang thương hiệu', '4'], ['Backlink', '1.084'], ['Điểm uy tín', '42/100']],
        ['Thương hiệu', 'Đường dẫn', 'Backlink', 'Điểm SEO', 'Trạng thái'],
        [['Sofa10 Wabi-Sabi', '/sofa10/about', 520, 90], ['Sumi Collection', '/sofa10/collections/sumi', 210, 84],
         ['Tsuchi Collection', '/sofa10/collections/tsuchi', 168, 80], ['Kami Collection', '/sofa10/collections/kami', 186, 78]]
          .map((r, i) => [...r, i === 3 ? 'Cần tối ưu' : 'Tốt'])),
      s('sitemap', 'Sitemap', 'Sơ đồ trang XML gửi tới công cụ tìm kiếm.',
        [['URL', '386'], ['Đã lập chỉ mục', '362'], ['Lỗi', '3']],
        ['Sitemap', 'Số URL', 'Đã index', 'Cập nhật', 'Trạng thái'],
        [['sitemap-index.xml', 386, 362], ['sitemap-products.xml', 142, 138],
         ['sitemap-collections.xml', 4, 4], ['sitemap-blog.xml', 98, 92],
         ['sitemap-pages.xml', 38, 36]]
          .map((r, i) => [...r, `${13 + i}/09/2026`, i === 3 ? 'Có cảnh báo' : 'Tốt'])),
      s('robots', 'Robots', 'Quy tắc thu thập dữ liệu cho từng bot.',
        [['Quy tắc', '10'], ['Chặn', '4 đường dẫn'], ['Cập nhật', '10/09/2026']],
        ['User-agent', 'Quy tắc', 'Đường dẫn', 'Trạng thái', 'Cập nhật'],
        [['*', 'Allow', '/'], ['*', 'Disallow', '/sofa10/admin'], ['*', 'Disallow', '/sofa10/checkout'],
         ['*', 'Disallow', '/sofa10/account'], ['Googlebot', 'Allow', '/sofa10/products']]
          .map((r, i) => [...r, 'Đang áp dụng', `${10 + (i % 3)}/09/2026`])),
      s('schema', 'Schema', 'Dữ liệu có cấu trúc theo loại trang.',
        [['Loại schema', '7'], ['Trang có schema', '90%'], ['Lỗi kiểm tra', '2']],
        ['Loại schema', 'Áp dụng cho', 'Số trang', 'Lỗi', 'Trạng thái'],
        [['Organization', 'Toàn site', 1, 0], ['Product', 'Trang sản phẩm', 136, 1],
         ['BreadcrumbList', 'Toàn site', 386, 0], ['Article', 'Blog', 98, 1],
         ['LocalBusiness', 'Showroom', 4, 0], ['FAQPage', 'FAQ', 1, 0]]
          .map((r) => [...r, Number(r[3]) > 0 ? 'Cần sửa' : 'Tốt'])),
    ],
  },
  {
    slug: 'permissions',
    name: 'Phân quyền',
    icon: 'solar:shield-user-bold-duotone',
    desc: 'Người dùng hệ thống, vai trò, quyền hạn và nhật ký hoạt động.',
    sections: [
      s('users', 'Người dùng', 'Tài khoản quản trị và nhân sự.',
        [['Người dùng', '32'], ['Đang hoạt động', '28'], ['Bật 2FA', '24']],
        ['Người dùng', 'Email', 'Vai trò', '2FA', 'Trạng thái'],
        [['Nguyễn Ngọc Anh', 'ngocanh@sofa10.vn', 'Quản trị viên', 'Bật'],
         ['Trần Hải Nam', 'hainam@sofa10.vn', 'Quản lý bán hàng', 'Bật'],
         ['Lê Thu Trang', 'thutrang@sofa10.vn', 'Biên tập nội dung', 'Tắt'],
         ['Phạm Đức Long', 'duclong@sofa10.vn', 'Quản lý kho', 'Bật'],
         ['Vũ Mai Chi', 'maichi@sofa10.vn', 'Marketing', 'Bật']]
          .map((r, i) => [...r, i === 2 ? 'Tạm khoá' : 'Đang hoạt động'])),
      s('roles', 'Vai trò', 'Nhóm vai trò và phạm vi truy cập.',
        [['Vai trò', '6'], ['Vai trò tuỳ chỉnh', '2'], ['Người dùng/vai trò TB', '5,3']],
        ['Vai trò', 'Mô tả', 'Số người dùng', 'Số quyền', 'Trạng thái'],
        [['Quản trị viên', 'Toàn quyền hệ thống', 3, 64],
         ['Quản lý bán hàng', 'Đơn hàng, CRM, báo cáo', 6, 32],
         ['Biên tập nội dung', 'CMS, blog, SEO', 5, 24],
         ['Quản lý kho', 'Kho hàng, tồn kho', 4, 18],
         ['Marketing', 'Chiến dịch, coupon', 6, 21],
         ['Cộng tác viên', 'Xem báo cáo affiliate', 8, 6]]
          .map((r) => [...r, 'Đang hoạt động'])),
      s('permissions', 'Quyền hạn', 'Ma trận quyền theo module.',
        [['Quyền', '64'], ['Module', '9'], ['Quyền nhạy cảm', '10']],
        ['Module', 'Xem', 'Tạo', 'Sửa', 'Xoá'],
        [['CMS', 'Tất cả', 'Biên tập trở lên', 'Biên tập trở lên', 'Quản trị'],
         ['Sản phẩm', 'Tất cả', 'Quản lý', 'Quản lý', 'Quản trị'],
         ['Kho hàng', 'Quản lý kho', 'Quản lý kho', 'Quản lý kho', 'Quản trị'],
         ['Đơn hàng', 'Bán hàng', 'Bán hàng', 'Bán hàng', 'Quản trị'],
         ['CRM', 'Bán hàng', 'Bán hàng', 'Bán hàng', 'Quản trị'],
         ['Marketing', 'Marketing', 'Marketing', 'Marketing', 'Quản trị'],
         ['Analytics', 'Tất cả', '—', '—', '—'],
         ['SEO', 'Biên tập', 'Biên tập', 'Biên tập', 'Quản trị'],
         ['Phân quyền', 'Quản trị', 'Quản trị', 'Quản trị', 'Quản trị']]),
      s('logs', 'Nhật ký hệ thống', 'Lịch sử thao tác và đăng nhập.',
        [['Sự kiện hôm nay', '342'], ['Cảnh báo', '2'], ['Đăng nhập thất bại', '5']],
        ['Thời gian', 'Người dùng', 'Hành động', 'Đối tượng', 'IP'],
        [['16/09 09:42', 'Nguyễn Ngọc Anh', 'Cập nhật giá', 'SF10-001', '113.161.x.x'],
         ['16/09 09:18', 'Phạm Đức Long', 'Duyệt phiếu nhập', 'PN-2609-04', '171.244.x.x'],
         ['16/09 08:56', 'Lê Thu Trang', 'Xuất bản bài viết', 'Wabi-sabi 2026', '14.161.x.x'],
         ['16/09 08:30', 'Vũ Mai Chi', 'Tạo coupon', 'SOFA10', '203.113.x.x'],
         ['16/09 08:02', 'Hệ thống', 'Đăng nhập thất bại', 'admin@sofa10.vn', '45.128.x.x']]),
    ],
  },
];

export const findSofa10AdminGroup = (slug?: string) =>
  SOFA10_ADMIN_GROUPS.find((g) => g.slug === slug);

export const findSofa10AdminSection = (groupSlug?: string, sectionSlug?: string) => {
  const group = findSofa10AdminGroup(groupSlug);
  if (!group) return undefined;
  return group.sections.find((x) => x.slug === sectionSlug);
};

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA10_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA10_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.0, 3.4, 3.8, 4.2, 4.6, 5.0, 5.6, 6.2, 4.8, 5.4, 6.0, 6.8] },
  { name: 'Mục tiêu (tỷ)', data: [3.2, 3.6, 4.0, 4.4, 4.8, 5.2, 5.8, 6.4, 5.2, 5.8, 6.4, 7.0] },
];

export const SOFA10_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [210, 238, 262, 288, 312, 338, 372, 410, 328, 360, 396, 440] },
];

export const SOFA10_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Hotline', 'Mạng xã hội'],
  series: [42, 28, 18, 8, 4],
};

export const SOFA10_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Tsuchi Low', 'Sofa Tatami Modern', 'Sofa Sumi Zaisu', 'Sofa Kami Minimal', 'Sofa Ki Woody'],
  series: [56, 48, 42, 38, 24],
};

export const SOFA10_ADMIN_FUNNEL = [
  { label: 'Truy cập website', value: 148200, icon: 'solar:global-bold-duotone', desc: 'Tổng phiên trong 30 ngày' },
  { label: 'Xem sản phẩm', value: 76400, icon: 'solar:eye-bold-duotone', desc: 'Trang chi tiết sản phẩm' },
  { label: 'Thêm vào giỏ', value: 11280, icon: 'solar:cart-large-2-bold-duotone', desc: 'Hành động thêm giỏ hàng' },
  { label: 'Thanh toán', value: 6820, icon: 'solar:card-transfer-bold-duotone', desc: 'Bắt đầu thanh toán' },
  { label: 'Đặt hàng', value: 4210, icon: 'solar:bag-check-bold-duotone', desc: 'Hoàn tất đơn hàng' },
];

export const SOFA10_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '4,8 tỷ', note: '+16,4% so với tháng trước', color: 'primary' as const },
  { label: 'Đơn hàng', value: '328', note: '22 đang chờ xử lý', color: 'info' as const },
  { label: 'Khách hàng mới', value: '328', note: '+14% tháng này', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2,7%', note: '+0,3% so với tháng trước', color: 'warning' as const },
];

export const SOFA10_ADMIN_ACTIVITIES = [
  { time: '09:42', text: 'Nguyễn Ngọc Anh cập nhật giá Sofa Sumi Zaisu', tag: 'Sản phẩm' },
  { time: '09:18', text: 'Phạm Đức Long duyệt phiếu nhập PN-2609-04', tag: 'Kho hàng' },
  { time: '08:56', text: 'Lê Thu Trang xuất bản bài viết "Wabi-sabi 2026"', tag: 'CMS' },
  { time: '08:30', text: 'Vũ Mai Chi tạo coupon SOFA10 giảm 10%', tag: 'Marketing' },
  { time: '08:02', text: 'Đăng nhập thất bại từ IP 45.128.x.x', tag: 'Phân quyền' },
];
