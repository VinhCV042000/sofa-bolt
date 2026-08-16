// SOFA1 ADMIN — cấu hình toàn bộ khu quản trị /sofa1/admin
// Mỗi module gồm: KPI, cột bảng và dữ liệu mẫu.
// ----------------------------------------------------------------------

export type AdminColumnType = 'text' | 'sub' | 'badge' | 'money' | 'number' | 'date';

export type AdminColumn = {
  key: string;
  label: string;
  type: AdminColumnType;
};

export type AdminModule = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  kpis: { label: string; value: string; delta?: string }[];
  columns: AdminColumn[];
  rows: (string | number)[][];
};

export type AdminGroup = {
  slug: string;
  title: string;
  icon: string;
  modules: AdminModule[];
};

// helper: 'Tiêu đề|badge' -> column
const col = (spec: string, index: number): AdminColumn => {
  const [label, type = 'text'] = spec.split('|');
  return { key: `c${index}`, label, type: type as AdminColumnType };
};

const mod = (
  slug: string,
  title: string,
  desc: string,
  icon: string,
  kpis: [string, string, string?][],
  columnSpecs: string[],
  rows: (string | number)[][]
): AdminModule => ({
  slug,
  title,
  desc,
  icon,
  kpis: kpis.map(([label, value, delta]) => ({ label, value, delta })),
  columns: columnSpecs.map(col),
  rows,
});

// ----------------------------------------------------------------------
// CMS
// ----------------------------------------------------------------------

const CMS_PAGE_COLS = ['Tiêu đề|text', 'Đường dẫn|sub', 'Trạng thái|badge', 'Người sửa|text', 'Cập nhật|date'];

const cmsPage = (slug: string, title: string, desc: string, icon: string, rows: (string | number)[][]) =>
  mod(
    slug,
    title,
    desc,
    icon,
    [
      ['Khối nội dung', `${rows.length}`, '+2'],
      ['Đang xuất bản', `${rows.filter((r) => r[2] === 'Xuất bản').length}`],
      ['Bản nháp', `${rows.filter((r) => r[2] === 'Nháp').length}`],
      ['Lượt xem 30 ngày', '12.480', '+8%'],
    ],
    CMS_PAGE_COLS,
    rows
  );

const CMS: AdminGroup = {
  slug: 'cms',
  title: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', 'Quản lý các khối nội dung trang chủ Casa Sofa.', 'solar:home-2-bold-duotone', [
      ['Hero banner chính', '/sofa1', 'Xuất bản', 'Ngọc Anh', '12/08/2026'],
      ['Danh mục nổi bật', '/sofa1#categories', 'Xuất bản', 'Minh Quân', '10/08/2026'],
      ['Sản phẩm bán chạy', '/sofa1#products', 'Xuất bản', 'Ngọc Anh', '09/08/2026'],
      ['Khối câu chuyện thương hiệu', '/sofa1#about', 'Nháp', 'Thu Hà', '05/08/2026'],
      ['Cảm nhận khách hàng', '/sofa1#testimonials', 'Xuất bản', 'Minh Quân', '01/08/2026'],
    ]),
    cmsPage('about', 'Trang giới thiệu', 'Nội dung giới thiệu công ty và các trang con.', 'solar:info-circle-bold-duotone', [
      ['Giới thiệu công ty', '/sofa1/about', 'Xuất bản', 'Thu Hà', '11/08/2026'],
      ['Lịch sử hình thành', '/sofa1/about/history', 'Xuất bản', 'Thu Hà', '11/08/2026'],
      ['Tầm nhìn & sứ mệnh', '/sofa1/about/vision', 'Xuất bản', 'Ngọc Anh', '08/08/2026'],
      ['Nhà máy sản xuất', '/sofa1/about/factory', 'Nháp', 'Minh Quân', '02/08/2026'],
      ['Đội ngũ nhân sự', '/sofa1/about/team', 'Xuất bản', 'Thu Hà', '28/07/2026'],
    ]),
    cmsPage('contact', 'Trang liên hệ', 'Thông tin liên hệ, bản đồ và biểu mẫu.', 'solar:phone-bold-duotone', [
      ['Thông tin liên hệ', '/sofa1/contact', 'Xuất bản', 'Ngọc Anh', '12/08/2026'],
      ['Biểu mẫu tư vấn', '/sofa1/contact#form', 'Xuất bản', 'Minh Quân', '07/08/2026'],
      ['Bản đồ showroom', '/sofa1/contact#map', 'Xuất bản', 'Thu Hà', '30/07/2026'],
    ]),
    cmsPage('policy', 'Trang chính sách', 'Chính sách bảo hành, đổi trả, vận chuyển, bảo mật.', 'solar:shield-check-bold-duotone', [
      ['Chính sách bảo hành', '/sofa1/policy/warranty', 'Xuất bản', 'Thu Hà', '06/08/2026'],
      ['Chính sách đổi trả', '/sofa1/policy/return', 'Xuất bản', 'Thu Hà', '06/08/2026'],
      ['Chính sách vận chuyển', '/sofa1/policy/shipping', 'Xuất bản', 'Ngọc Anh', '04/08/2026'],
      ['Chính sách bảo mật', '/sofa1/policy/privacy', 'Nháp', 'Minh Quân', '29/07/2026'],
    ]),
    cmsPage('terms', 'Trang điều khoản', 'Điều khoản sử dụng và điều kiện giao dịch.', 'solar:document-text-bold-duotone', [
      ['Điều khoản sử dụng', '/sofa1/policy/terms', 'Xuất bản', 'Thu Hà', '05/08/2026'],
      ['Điều kiện thanh toán', '/sofa1/policy/payment-terms', 'Xuất bản', 'Ngọc Anh', '03/08/2026'],
      ['Điều khoản B2B', '/sofa1/b2b/policy', 'Xuất bản', 'Minh Quân', '01/08/2026'],
    ]),
    cmsPage('faq', 'Trang FAQ', 'Bộ câu hỏi thường gặp theo chủ đề.', 'solar:question-circle-bold-duotone', [
      ['FAQ mua hàng', '/sofa1/faq#mua-hang', 'Xuất bản', 'Ngọc Anh', '10/08/2026'],
      ['FAQ bảo hành', '/sofa1/faq#bao-hanh', 'Xuất bản', 'Thu Hà', '09/08/2026'],
      ['FAQ vận chuyển', '/sofa1/faq#van-chuyen', 'Xuất bản', 'Thu Hà', '09/08/2026'],
      ['FAQ đặt đóng riêng', '/sofa1/faq#dat-dong', 'Nháp', 'Minh Quân', '27/07/2026'],
    ]),
    cmsPage('blog', 'Trang blog', 'Bài viết, chuyên mục và lịch xuất bản.', 'solar:notebook-bold-duotone', [
      ['Cách chọn sofa cho phòng khách nhỏ', '/sofa1/blog/1', 'Xuất bản', 'Thu Hà', '12/08/2026'],
      ['Phân biệt da bò thật và da PU', '/sofa1/blog/2', 'Xuất bản', 'Ngọc Anh', '08/08/2026'],
      ['Bảo dưỡng sofa vải linen', '/sofa1/blog/3', 'Nháp', 'Minh Quân', '06/08/2026'],
      ['Xu hướng nội thất 2026', '/sofa1/blog/4', 'Chờ duyệt', 'Thu Hà', '02/08/2026'],
    ]),
    mod(
      'menu',
      'Menu',
      'Cấu trúc menu header, footer và menu di động.',
      'solar:hamburger-menu-bold-duotone',
      [['Menu đang dùng', '4'], ['Mục menu', '48'], ['Cấp sâu nhất', '3'], ['Liên kết hỏng', '0']],
      ['Tên menu|text', 'Vị trí|sub', 'Số mục|number', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['Menu chính', 'header', 9, 'Hoạt động', '12/08/2026'],
        ['Menu sản phẩm (mega)', 'header', 24, 'Hoạt động', '10/08/2026'],
        ['Menu footer', 'footer', 12, 'Hoạt động', '04/08/2026'],
        ['Menu di động', 'mobile', 9, 'Tạm dừng', '29/07/2026'],
      ]
    ),
    mod(
      'banner',
      'Banner',
      'Banner quảng cáo theo vị trí và thời gian hiển thị.',
      'solar:gallery-wide-bold-duotone',
      [['Banner hoạt động', '7'], ['Sắp hết hạn', '2'], ['CTR trung bình', '3,4%', '+0,6%'], ['Lượt hiển thị', '186.320']],
      ['Tên banner|text', 'Vị trí|sub', 'Trạng thái|badge', 'Lượt click|number', 'Hết hạn|date'],
      [
        ['Ưu đãi tháng 8', 'home-top', 'Hoạt động', 4820, '31/08/2026'],
        ['Bộ sưu tập da bò Ý', 'category-sidebar', 'Hoạt động', 1960, '15/09/2026'],
        ['Miễn phí vận chuyển HN', 'checkout', 'Hoạt động', 980, '30/09/2026'],
        ['Khai trương showroom Đà Nẵng', 'popup', 'Tạm dừng', 2410, '20/07/2026'],
      ]
    ),
    mod(
      'slider',
      'Slider',
      'Slide hero trang chủ và trang danh mục.',
      'solar:slider-horizontal-bold-duotone',
      [['Slider', '3'], ['Tổng slide', '11'], ['Thời gian chuyển', '6s'], ['Tỉ lệ tương tác', '5,1%']],
      ['Tên slider|text', 'Trang áp dụng|sub', 'Số slide|number', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['Hero trang chủ', '/sofa1', 5, 'Hoạt động', '12/08/2026'],
        ['Slider bộ sưu tập', '/sofa1/collections', 4, 'Hoạt động', '06/08/2026'],
        ['Slider showroom', '/sofa1/showrooms', 2, 'Nháp', '28/07/2026'],
      ]
    ),
    mod(
      'seo',
      'SEO',
      'Thẻ meta mặc định và cấu hình chia sẻ mạng xã hội.',
      'solar:magnifer-bold-duotone',
      [['Trang đã tối ưu', '128'], ['Thiếu meta', '6'], ['Điểm SEO', '92/100', '+4'], ['Từ khóa top 10', '43']],
      ['Trang|text', 'Meta title|sub', 'Độ dài|number', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['Trang chủ', 'Casa Sofa - Sofa da bò thủ công cao cấp', 46, 'Tốt', '12/08/2026'],
        ['Danh mục sofa da', 'Sofa da bò thật nhập khẩu Ý | Casa Sofa', 42, 'Tốt', '09/08/2026'],
        ['Trang liên hệ', 'Liên hệ Casa Sofa', 21, 'Cần bổ sung', '01/08/2026'],
        ['Blog', 'Kiến thức nội thất & sofa | Casa Sofa', 39, 'Tốt', '30/07/2026'],
      ]
    ),
    cmsPage('static', 'Trang tĩnh', 'Các trang nội dung độc lập.', 'solar:file-bold-duotone', [
      ['Hướng dẫn mua hàng', '/sofa1/support', 'Xuất bản', 'Ngọc Anh', '11/08/2026'],
      ['Tra cứu bảo hành', '/sofa1/support#warranty', 'Xuất bản', 'Thu Hà', '07/08/2026'],
      ['Tuyển dụng', '/sofa1/careers', 'Xuất bản', 'Minh Quân', '03/08/2026'],
      ['Đối tác thiết kế', '/sofa1/b2b', 'Nháp', 'Ngọc Anh', '26/07/2026'],
    ]),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCTS: AdminGroup = {
  slug: 'products',
  title: 'Sản phẩm',
  icon: 'solar:box-bold-duotone',
  modules: [
    mod(
      'categories',
      'Danh mục',
      'Cây danh mục sản phẩm và số lượng SKU.',
      'solar:widget-4-bold-duotone',
      [['Danh mục', '12'], ['Danh mục cha', '4'], ['SKU liên kết', '186'], ['Ẩn', '1']],
      ['Danh mục|text', 'Slug|sub', 'Danh mục cha|text', 'Số SKU|number', 'Trạng thái|badge'],
      [
        ['Sofa da bò', 'sofa-da', '—', 48, 'Hiển thị'],
        ['Sofa vải linen', 'sofa-vai', '—', 52, 'Hiển thị'],
        ['Sofa góc L', 'sofa-goc-l', 'Sofa da bò', 34, 'Hiển thị'],
        ['Sofa đơn thư giãn', 'sofa-don', '—', 28, 'Hiển thị'],
        ['Phụ kiện & gối tựa', 'phu-kien', '—', 24, 'Ẩn'],
      ]
    ),
    mod(
      'items',
      'Sản phẩm',
      'Danh sách sản phẩm, giá bán và tình trạng đăng bán.',
      'solar:sofa-bold-duotone',
      [['Tổng sản phẩm', '186'], ['Đang bán', '171'], ['Hết hàng', '9'], ['Chờ duyệt', '6']],
      ['Sản phẩm|text', 'SKU|sub', 'Danh mục|text', 'Giá bán|money', 'Trạng thái|badge'],
      [
        ['Sofa Roma Da Bò Nâu', 'CS-ROM-001', 'Sofa da bò', 28500000, 'Đang bán'],
        ['Sofa Milano Linen Be', 'CS-MIL-014', 'Sofa vải linen', 12500000, 'Đang bán'],
        ['Sofa Góc Torino', 'CS-TOR-032', 'Sofa góc L', 34900000, 'Đang bán'],
        ['Ghế Đơn Firenze', 'CS-FIR-008', 'Sofa đơn thư giãn', 8900000, 'Hết hàng'],
        ['Sofa Napoli Da Bò Đen', 'CS-NAP-021', 'Sofa da bò', 31200000, 'Chờ duyệt'],
      ]
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể.',
      'solar:tuning-2-bold-duotone',
      [['Thuộc tính', '9'], ['Giá trị', '64'], ['Dùng cho lọc', '6'], ['Bắt buộc', '3']],
      ['Thuộc tính|text', 'Mã|sub', 'Số giá trị|number', 'Dùng lọc|badge', 'Cập nhật|date'],
      [
        ['Chất liệu', 'material', 8, 'Có', '10/08/2026'],
        ['Màu sắc', 'color', 14, 'Có', '10/08/2026'],
        ['Kích thước', 'size', 11, 'Có', '05/08/2026'],
        ['Kiểu chân', 'leg-type', 6, 'Không', '01/08/2026'],
        ['Độ cứng đệm', 'firmness', 4, 'Có', '25/07/2026'],
      ]
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Biến thể theo màu, kích thước và chất liệu.',
      'solar:layers-bold-duotone',
      [['Biến thể', '742'], ['Đang bán', '698'], ['Ngừng bán', '31'], ['Chờ ảnh', '13']],
      ['Biến thể|text', 'SKU|sub', 'Tùy chọn|text', 'Giá|money', 'Tồn|number'],
      [
        ['Sofa Roma - Nâu 220cm', 'CS-ROM-001-N220', 'Nâu / 220cm', 28500000, 12],
        ['Sofa Roma - Đen 220cm', 'CS-ROM-001-D220', 'Đen / 220cm', 28500000, 5],
        ['Sofa Milano - Be 180cm', 'CS-MIL-014-B180', 'Be / 180cm', 12500000, 24],
        ['Sofa Milano - Xám 200cm', 'CS-MIL-014-X200', 'Xám / 200cm', 13800000, 3],
        ['Ghế Firenze - Nâu', 'CS-FIR-008-N', 'Nâu / 1 chỗ', 8900000, 0],
      ]
    ),
    mod(
      'stock',
      'Kho hàng',
      'Tồn kho theo sản phẩm và điểm lưu trữ.',
      'solar:box-minimalistic-bold-duotone',
      [['SKU tồn kho', '742'], ['Sắp hết', '18'], ['Hết hàng', '9'], ['Giá trị tồn', '18,4 tỷ']],
      ['SKU|text', 'Kho|sub', 'Tồn thực|number', 'Đang giữ|number', 'Trạng thái|badge'],
      [
        ['CS-ROM-001-N220', 'Kho Hà Nội', 12, 3, 'Đủ hàng'],
        ['CS-MIL-014-B180', 'Kho Hà Nội', 24, 6, 'Đủ hàng'],
        ['CS-MIL-014-X200', 'Kho HCM', 3, 2, 'Sắp hết'],
        ['CS-TOR-032-N', 'Kho Đà Nẵng', 7, 1, 'Đủ hàng'],
        ['CS-FIR-008-N', 'Kho HCM', 0, 0, 'Hết hàng'],
      ]
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [['Bảng giá', '4'], ['SKU giảm giá', '86'], ['Mức giảm TB', '18%'], ['Biên lợi nhuận', '32%']],
      ['SKU|text', 'Bảng giá|sub', 'Giá niêm yết|money', 'Giá bán|money', 'Hiệu lực|date'],
      [
        ['CS-ROM-001', 'Bán lẻ', 36000000, 28500000, '31/08/2026'],
        ['CS-MIL-014', 'Bán lẻ', 16800000, 12500000, '31/08/2026'],
        ['CS-TOR-032', 'Bán lẻ', 39900000, 34900000, '15/09/2026'],
        ['CS-ROM-001', 'Đại lý B2B', 36000000, 24500000, '31/12/2026'],
        ['CS-MIL-014', 'Dự án', 16800000, 11200000, '31/12/2026'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE: AdminGroup = {
  slug: 'warehouse',
  title: 'Kho hàng',
  icon: 'solar:warehouse-bold-duotone',
  modules: [
    mod(
      'overview',
      'Kho hàng',
      'Nhập xuất tồn, điều chuyển và kiểm kê giữa các kho.',
      'solar:warehouse-bold-duotone',
      [['Điểm kho', '4'], ['Phiếu nhập tháng', '38'], ['Phiếu xuất tháng', '126'], ['Chênh lệch kiểm kê', '0,4%']],
      ['Mã phiếu|text', 'Loại|badge', 'Kho|sub', 'Số lượng|number', 'Ngày|date'],
      [
        ['PN-2608-014', 'Nhập', 'Kho Hà Nội', 48, '12/08/2026'],
        ['PX-2608-092', 'Xuất', 'Kho Hà Nội', 12, '12/08/2026'],
        ['PC-2608-006', 'Điều chuyển', 'HN → ĐN', 9, '11/08/2026'],
        ['PK-2608-002', 'Kiểm kê', 'Kho HCM', 320, '09/08/2026'],
        ['PN-2608-013', 'Nhập', 'Kho HCM', 64, '07/08/2026'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDERS: AdminGroup = {
  slug: 'orders',
  title: 'Đơn hàng',
  icon: 'solar:cart-large-2-bold-duotone',
  modules: [
    mod(
      'list',
      'Đơn hàng',
      'Toàn bộ đơn hàng và trạng thái xử lý.',
      'solar:bill-list-bold-duotone',
      [['Đơn tháng này', '312', '+14%'], ['Chờ xử lý', '27'], ['Giá trị TB', '18,6 tr'], ['Tỉ lệ hủy', '2,1%']],
      ['Mã đơn|text', 'Khách hàng|sub', 'Giá trị|money', 'Trạng thái|badge', 'Ngày đặt|date'],
      [
        ['CS-26081201', 'Nguyễn Thu Trang', 28500000, 'Đang giao', '12/08/2026'],
        ['CS-26081198', 'Trần Minh Đức', 41300000, 'Chờ xử lý', '12/08/2026'],
        ['CS-26081187', 'Lê Hoàng Nam', 12500000, 'Hoàn tất', '11/08/2026'],
        ['CS-26081172', 'Công ty CP Nội Thất An Phú', 186000000, 'Đang sản xuất', '09/08/2026'],
        ['CS-26081160', 'Phạm Thùy Linh', 8900000, 'Đã hủy', '08/08/2026'],
      ]
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán theo cổng và trạng thái đối soát.',
      'solar:card-bold-duotone',
      [['Đã thu tháng', '5,82 tỷ', '+11%'], ['Chờ đối soát', '184 tr'], ['Thất bại', '9'], ['Hoàn tất', '298']],
      ['Mã giao dịch|text', 'Đơn hàng|sub', 'Cổng|text', 'Số tiền|money', 'Trạng thái|badge'],
      [
        ['TT-908212', 'CS-26081201', 'VNPay', 28500000, 'Thành công'],
        ['TT-908205', 'CS-26081198', 'Chuyển khoản', 20000000, 'Chờ đối soát'],
        ['TT-908191', 'CS-26081187', 'Momo', 12500000, 'Thành công'],
        ['TT-908180', 'CS-26081172', 'Chuyển khoản', 93000000, 'Thành công'],
        ['TT-908166', 'CS-26081160', 'Thẻ quốc tế', 8900000, 'Thất bại'],
      ]
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Vận đơn, đối tác giao hàng và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [['Vận đơn đang chạy', '64'], ['Giao đúng hẹn', '96,2%'], ['Chờ lắp đặt', '18'], ['Sự cố', '3']],
      ['Vận đơn|text', 'Đơn hàng|sub', 'Đối tác|text', 'Khu vực|text', 'Trạng thái|badge'],
      [
        ['VD-77120', 'CS-26081201', 'Đội xe Casa', 'Hà Nội', 'Đang giao'],
        ['VD-77118', 'CS-26081187', 'Viettel Post', 'Hải Phòng', 'Đã giao'],
        ['VD-77111', 'CS-26081172', 'Đội xe Casa', 'TP.HCM', 'Chờ lắp đặt'],
        ['VD-77104', 'CS-26081155', 'GHN', 'Đà Nẵng', 'Sự cố'],
      ]
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến độ xử lý.',
      'solar:banknote-2-bold-duotone',
      [['Yêu cầu tháng', '14'], ['Đã hoàn', '11'], ['Số tiền hoàn', '96,4 tr'], ['Thời gian TB', '2,4 ngày']],
      ['Mã yêu cầu|text', 'Đơn hàng|sub', 'Lý do|text', 'Số tiền|money', 'Trạng thái|badge'],
      [
        ['HT-3012', 'CS-26081160', 'Khách hủy đơn', 8900000, 'Đã hoàn'],
        ['HT-3011', 'CS-26081142', 'Giao chậm', 3000000, 'Đang xử lý'],
        ['HT-3009', 'CS-26081120', 'Sai màu', 12500000, 'Đã hoàn'],
        ['HT-3006', 'CS-26081098', 'Lỗi khung gỗ', 28500000, 'Chờ duyệt'],
      ]
    ),
    mod(
      'returns',
      'Đổi trả',
      'Phiếu đổi trả, kiểm tra hàng và kết quả xử lý.',
      'solar:refresh-square-bold-duotone',
      [['Phiếu đổi trả', '22'], ['Đổi sản phẩm', '13'], ['Trả hàng', '9'], ['Tỉ lệ đổi trả', '1,8%']],
      ['Mã phiếu|text', 'Đơn hàng|sub', 'Sản phẩm|text', 'Hình thức|badge', 'Ngày|date'],
      [
        ['DT-1204', 'CS-26081120', 'Sofa Milano Linen Be', 'Đổi', '11/08/2026'],
        ['DT-1203', 'CS-26081098', 'Sofa Roma Da Bò Nâu', 'Trả', '09/08/2026'],
        ['DT-1201', 'CS-26081077', 'Ghế Đơn Firenze', 'Đổi', '06/08/2026'],
        ['DT-1198', 'CS-26081040', 'Sofa Góc Torino', 'Trả', '02/08/2026'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM: AdminGroup = {
  slug: 'crm',
  title: 'CRM',
  icon: 'solar:users-group-two-rounded-bold-duotone',
  modules: [
    mod(
      'customers',
      'Khách hàng',
      'Hồ sơ khách hàng, phân hạng và giá trị vòng đời.',
      'solar:user-id-bold-duotone',
      [['Khách hàng', '8.420', '+256'], ['Khách VIP', '318'], ['Mua lại', '24%'], ['LTV trung bình', '31,2 tr']],
      ['Khách hàng|text', 'Điện thoại|sub', 'Hạng|badge', 'Tổng chi tiêu|money', 'Đơn gần nhất|date'],
      [
        ['Nguyễn Thu Trang', '0912 xxx 481', 'VIP', 96400000, '12/08/2026'],
        ['Trần Minh Đức', '0987 xxx 220', 'Thân thiết', 41300000, '12/08/2026'],
        ['Lê Hoàng Nam', '0903 xxx 776', 'Mới', 12500000, '11/08/2026'],
        ['Công ty CP Nội Thất An Phú', '0243 xxx 118', 'Doanh nghiệp', 682000000, '09/08/2026'],
        ['Phạm Thùy Linh', '0977 xxx 302', 'Thân thiết', 38900000, '08/08/2026'],
      ]
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline và showroom.',
      'solar:magnet-bold-duotone',
      [['Leads tháng', '486', '+18%'], ['Đang chăm sóc', '132'], ['Chuyển đổi', '21,4%'], ['Nguồn tốt nhất', 'Google Ads']],
      ['Tên|text', 'Nguồn|sub', 'Nhu cầu|text', 'Nhân viên|text', 'Trạng thái|badge'],
      [
        ['Vũ Đình Khoa', 'Google Ads', 'Sofa góc phòng khách', 'Ngọc Anh', 'Mới'],
        ['Đỗ Mai Chi', 'Facebook', 'Sofa da 3 chỗ', 'Minh Quân', 'Đang tư vấn'],
        ['Hoàng Văn Sơn', 'Showroom HN', 'Đóng theo yêu cầu', 'Thu Hà', 'Đã báo giá'],
        ['Cty TNHH Hòa Bình', 'Giới thiệu', 'Dự án khách sạn 40 phòng', 'Minh Quân', 'Đàm phán'],
        ['Nguyễn Bảo Ngọc', 'Zalo OA', 'Ghế đơn thư giãn', 'Ngọc Anh', 'Nguội'],
      ]
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [['Giao dịch', '12.640'], ['Khách mua lại', '2.014'], ['Chu kỳ mua lại', '14 tháng'], ['Giá trị TB', '18,6 tr']],
      ['Khách hàng|text', 'Đơn hàng|sub', 'Sản phẩm|text', 'Giá trị|money', 'Ngày|date'],
      [
        ['Nguyễn Thu Trang', 'CS-26081201', 'Sofa Roma Da Bò Nâu', 28500000, '12/08/2026'],
        ['Nguyễn Thu Trang', 'CS-25110455', 'Ghế Đơn Firenze', 8900000, '04/11/2025'],
        ['Trần Minh Đức', 'CS-26081198', 'Sofa Góc Torino', 41300000, '12/08/2026'],
        ['Phạm Thùy Linh', 'CS-26071033', 'Sofa Milano Linen Be', 12500000, '19/07/2026'],
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket hỗ trợ, bảo hành và mức độ hài lòng.',
      'solar:chat-round-call-bold-duotone',
      [['Ticket mở', '38'], ['Đã xử lý tháng', '214'], ['Phản hồi TB', '46 phút'], ['CSAT', '4,8/5']],
      ['Ticket|text', 'Khách hàng|sub', 'Chủ đề|text', 'Ưu tiên|badge', 'Cập nhật|date'],
      [
        ['TK-8821', 'Lê Hoàng Nam', 'Hỏi lịch giao hàng', 'Thường', '12/08/2026'],
        ['TK-8818', 'Phạm Thùy Linh', 'Bảo hành khung sofa', 'Cao', '11/08/2026'],
        ['TK-8815', 'Trần Minh Đức', 'Đổi màu vải', 'Thường', '10/08/2026'],
        ['TK-8809', 'Cty An Phú', 'Yêu cầu xuất hóa đơn', 'Khẩn', '09/08/2026'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING: AdminGroup = {
  slug: 'marketing',
  title: 'Marketing',
  icon: 'solar:megaphone-bold-duotone',
  modules: [
    mod(
      'email',
      'Email Marketing',
      'Chiến dịch email, tỉ lệ mở và doanh thu quy đổi.',
      'solar:letter-bold-duotone',
      [['Chiến dịch tháng', '9'], ['Tỉ lệ mở', '38,4%', '+2,1%'], ['Tỉ lệ click', '6,2%'], ['Doanh thu quy đổi', '412 tr']],
      ['Chiến dịch|text', 'Tệp khách|sub', 'Đã gửi|number', 'Tỉ lệ mở|text', 'Trạng thái|badge'],
      [
        ['Ưu đãi tháng 8', 'Toàn bộ khách hàng', 8420, '41,2%', 'Hoàn tất'],
        ['Giới thiệu BST da bò Ý', 'Khách VIP', 318, '62,5%', 'Hoàn tất'],
        ['Nhắc giỏ hàng bỏ quên', 'Tự động', 1264, '33,8%', 'Đang chạy'],
        ['Bảo dưỡng sofa mùa mưa', 'Khách 12 tháng', 2140, '—', 'Lên lịch'],
      ]
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu và tin chăm sóc sau bán.',
      'solar:chat-square-call-bold-duotone',
      [['Tin đã gửi', '18.400'], ['Tỉ lệ nhận', '98,6%'], ['Click link', '4,1%'], ['Chi phí', '12,4 tr']],
      ['Chiến dịch|text', 'Brandname|sub', 'Đã gửi|number', 'Chi phí|money', 'Trạng thái|badge'],
      [
        ['Sale 8/8', 'CASASOFA', 8200, 5740000, 'Hoàn tất'],
        ['Nhắc lịch lắp đặt', 'CASASOFA', 640, 448000, 'Đang chạy'],
        ['Sinh nhật khách hàng', 'CASASOFA', 312, 218000, 'Đang chạy'],
        ['Khảo sát hài lòng', 'CASASOFA', 1180, 826000, 'Lên lịch'],
      ]
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web và ứng dụng.',
      'solar:bell-bing-bold-duotone',
      [['Người đăng ký', '24.180'], ['Tỉ lệ mở', '9,4%'], ['Đã gửi tháng', '11'], ['Hủy đăng ký', '0,8%']],
      ['Thông báo|text', 'Đối tượng|sub', 'Đã gửi|number', 'Tỉ lệ mở|text', 'Trạng thái|badge'],
      [
        ['Flash sale 3 giờ vàng', 'Toàn bộ', 24180, '12,1%', 'Hoàn tất'],
        ['Hàng mới về BST Torino', 'Đã xem sofa góc', 6420, '15,6%', 'Hoàn tất'],
        ['Giảm 10% cho khách quay lại', 'Không mua 90 ngày', 3180, '—', 'Lên lịch'],
      ]
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và hiệu quả.',
      'solar:ticket-sale-bold-duotone',
      [['Mã đang chạy', '12'], ['Lượt dùng', '1.482'], ['Giá trị giảm', '286 tr'], ['Doanh thu kèm', '3,2 tỷ']],
      ['Mã|text', 'Điều kiện|sub', 'Giảm|text', 'Đã dùng|number', 'Hết hạn|date'],
      [
        ['CASA8', 'Đơn từ 10 triệu', '8%', 486, '31/08/2026'],
        ['FREESHIPHN', 'Nội thành Hà Nội', 'Miễn ship', 312, '30/09/2026'],
        ['VIP15', 'Khách hạng VIP', '15%', 96, '31/12/2026'],
        ['NEW500', 'Khách mới', '500.000đ', 588, '31/08/2026'],
      ]
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và đơn giới thiệu.',
      'solar:share-circle-bold-duotone',
      [['Cộng tác viên', '186'], ['Đơn giới thiệu', '214'], ['Hoa hồng tháng', '184 tr'], ['Tỉ lệ duyệt', '92%']],
      ['Cộng tác viên|text', 'Mã giới thiệu|sub', 'Đơn|number', 'Hoa hồng|money', 'Trạng thái|badge'],
      [
        ['Nội Thất Review', 'NTR2026', 42, 62400000, 'Hoạt động'],
        ['KTS Trần Hải', 'KTSHAI', 28, 48900000, 'Hoạt động'],
        ['Blog Nhà Đẹp', 'NHADEP', 19, 21600000, 'Hoạt động'],
        ['Nguyễn Văn Tuấn', 'TUAN88', 6, 5400000, 'Chờ duyệt'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS: AdminGroup = {
  slug: 'analytics',
  title: 'Analytics',
  icon: 'solar:chart-square-bold-duotone',
  modules: [
    mod(
      'revenue',
      'Doanh thu',
      'Doanh thu theo kênh, khu vực và thời gian.',
      'solar:dollar-minimalistic-bold-duotone',
      [['Doanh thu tháng', '5,82 tỷ', '+11%'], ['Cùng kỳ', '5,24 tỷ'], ['Lợi nhuận gộp', '1,86 tỷ'], ['Đơn TB', '18,6 tr']],
      ['Kênh|text', 'Khu vực|sub', 'Doanh thu|money', 'Số đơn|number', 'Tăng trưởng|text'],
      [
        ['Website', 'Toàn quốc', 2480000000, 138, '+14%'],
        ['Showroom Hà Nội', 'Miền Bắc', 1620000000, 84, '+7%'],
        ['Showroom TP.HCM', 'Miền Nam', 1180000000, 62, '+9%'],
        ['Dự án B2B', 'Toàn quốc', 540000000, 12, '+22%'],
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và doanh thu.',
      'solar:medal-star-bold-duotone',
      [['SKU bán chạy', '20'], ['Top 1', 'Sofa Roma'], ['Doanh số top 10', '62%'], ['Sản phẩm mới lọt top', '3']],
      ['Sản phẩm|text', 'Danh mục|sub', 'Đã bán|number', 'Doanh thu|money', 'Xu hướng|badge'],
      [
        ['Sofa Roma Da Bò Nâu', 'Sofa da bò', 42, 1197000000, 'Tăng'],
        ['Sofa Milano Linen Be', 'Sofa vải linen', 68, 850000000, 'Tăng'],
        ['Sofa Góc Torino', 'Sofa góc L', 24, 837600000, 'Ổn định'],
        ['Ghế Đơn Firenze', 'Sofa đơn', 51, 453900000, 'Giảm'],
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [['Phiên tháng', '186.400', '+9%'], ['Người dùng mới', '72%'], ['Thời gian TB', '3:12'], ['Thoát', '41,6%']],
      ['Nguồn|text', 'Loại|sub', 'Phiên|number', 'Tỉ lệ thoát|text', 'Chuyển đổi|text'],
      [
        ['Google Organic', 'Tự nhiên', 82400, '38,2%', '2,4%'],
        ['Google Ads', 'Trả phí', 41200, '44,1%', '3,1%'],
        ['Facebook', 'Mạng xã hội', 28600, '52,4%', '1,2%'],
        ['Trực tiếp', 'Direct', 24100, '33,8%', '3,8%'],
        ['Zalo OA', 'Mạng xã hội', 10100, '46,2%', '2,0%'],
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Hành trình xem trang và tương tác chính.',
      'solar:routing-2-bold-duotone',
      [['Trang/phiên', '4,2'], ['Thêm giỏ hàng', '8.240'], ['Bỏ giỏ hàng', '68%'], ['Xem 3D/AR', '3.180']],
      ['Sự kiện|text', 'Trang|sub', 'Số lần|number', 'Tỉ lệ|text', 'Xu hướng|badge'],
      [
        ['Xem chi tiết sản phẩm', '/sofa1/products/:slug', 96400, '51,7%', 'Tăng'],
        ['Thêm vào giỏ', '/sofa1/products/:slug', 8240, '8,5%', 'Tăng'],
        ['Bắt đầu thanh toán', '/sofa1/checkout', 2640, '32,0%', 'Ổn định'],
        ['Đặt lịch showroom', '/sofa1/showrooms/visit', 1180, '0,6%', 'Tăng'],
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi từ truy cập tới đơn hoàn tất.',
      'solar:filter-bold-duotone',
      [['Chuyển đổi chung', '2,4%', '+0,3%'], ['Web → giỏ', '8,5%'], ['Giỏ → thanh toán', '32%'], ['Thanh toán → đơn', '78%']],
      ['Bước phễu|text', 'Kênh|sub', 'Người dùng|number', 'Tỉ lệ chuyển|text', 'Rời bỏ|text'],
      [
        ['Truy cập', 'Tất cả', 186400, '100%', '—'],
        ['Xem sản phẩm', 'Tất cả', 96400, '51,7%', '48,3%'],
        ['Thêm giỏ hàng', 'Tất cả', 8240, '8,5%', '91,5%'],
        ['Thanh toán', 'Tất cả', 2640, '32,0%', '68,0%'],
        ['Đặt hàng thành công', 'Tất cả', 2059, '78,0%', '22,0%'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// SEO
// ----------------------------------------------------------------------

const seoMod = (slug: string, title: string, desc: string, icon: string, rows: (string | number)[][]) =>
  mod(
    slug,
    title,
    desc,
    icon,
    [
      ['Trang theo dõi', `${rows.length * 8}`],
      ['Từ khóa top 10', '43', '+6'],
      ['Điểm tối ưu TB', '91/100'],
      ['Lỗi cần xử lý', '4'],
    ],
    ['Trang|text', 'Từ khóa chính|sub', 'Vị trí|number', 'Lượt hiển thị|number', 'Trạng thái|badge'],
    rows
  );

const SEO: AdminGroup = {
  slug: 'seo',
  title: 'SEO',
  icon: 'solar:magnifer-zoom-in-bold-duotone',
  modules: [
    seoMod('category', 'Trang danh mục', 'Tối ưu SEO cho các trang danh mục sản phẩm.', 'solar:widget-4-bold-duotone', [
      ['Sofa da bò', 'sofa da bò thật', 4, 28400, 'Tốt'],
      ['Sofa vải linen', 'sofa vải linen', 7, 18200, 'Tốt'],
      ['Sofa góc L', 'sofa góc l đẹp', 11, 12400, 'Cần cải thiện'],
      ['Sofa đơn', 'ghế sofa đơn', 9, 8600, 'Tốt'],
    ]),
    seoMod('product', 'Trang sản phẩm', 'Tối ưu tiêu đề, mô tả và ảnh sản phẩm.', 'solar:sofa-bold-duotone', [
      ['Sofa Roma Da Bò Nâu', 'sofa roma da bò', 2, 14200, 'Tốt'],
      ['Sofa Milano Linen Be', 'sofa milano linen', 5, 9800, 'Tốt'],
      ['Sofa Góc Torino', 'sofa góc torino', 14, 6400, 'Cần cải thiện'],
      ['Ghế Đơn Firenze', 'ghế đơn firenze', 8, 4100, 'Tốt'],
    ]),
    seoMod('collection', 'Trang bộ sưu tập', 'SEO cho landing page bộ sưu tập.', 'solar:widget-5-bold-duotone', [
      ['BST Da Bò Ý', 'bộ sưu tập sofa da ý', 6, 7200, 'Tốt'],
      ['BST Linen Bắc Âu', 'sofa linen bắc âu', 12, 4800, 'Cần cải thiện'],
      ['BST Tối Giản', 'sofa tối giản', 9, 5600, 'Tốt'],
    ]),
    seoMod('project', 'Trang dự án', 'SEO cho các trang dự án đã thực hiện.', 'solar:buildings-3-bold-duotone', [
      ['Dự án Vinhomes Ocean Park', 'nội thất vinhomes', 15, 3400, 'Cần cải thiện'],
      ['Khách sạn Sapa Retreat', 'nội thất khách sạn', 18, 2600, 'Cần cải thiện'],
      ['Penthouse Sunshine City', 'nội thất penthouse', 10, 3100, 'Tốt'],
    ]),
    seoMod('showroom', 'Trang showroom', 'SEO địa phương cho từng showroom.', 'solar:shop-bold-duotone', [
      ['Showroom Hà Nội', 'showroom sofa hà nội', 3, 11600, 'Tốt'],
      ['Showroom TP.HCM', 'showroom sofa tphcm', 5, 10200, 'Tốt'],
      ['Showroom Đà Nẵng', 'showroom sofa đà nẵng', 7, 4800, 'Tốt'],
    ]),
    seoMod('blog', 'Trang blog', 'SEO nội dung và liên kết nội bộ.', 'solar:notebook-bold-duotone', [
      ['Chọn sofa phòng khách nhỏ', 'sofa cho phòng khách nhỏ', 4, 16800, 'Tốt'],
      ['Phân biệt da bò và da PU', 'da bò thật và da pu', 2, 21400, 'Tốt'],
      ['Bảo dưỡng sofa vải', 'cách vệ sinh sofa vải', 8, 12600, 'Cần cải thiện'],
    ]),
    seoMod('brand', 'Trang thương hiệu', 'Nhận diện thương hiệu trên kết quả tìm kiếm.', 'solar:crown-bold-duotone', [
      ['Casa Sofa', 'casa sofa', 1, 32400, 'Tốt'],
      ['Về chúng tôi', 'casa sofa là ai', 1, 6200, 'Tốt'],
      ['Đánh giá Casa Sofa', 'casa sofa review', 3, 4400, 'Tốt'],
    ]),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ trang XML gửi tới công cụ tìm kiếm.',
      'solar:siderbar-bold-duotone',
      [['URL trong sitemap', '482'], ['Đã lập chỉ mục', '461'], ['Loại trừ', '21'], ['Gửi gần nhất', '12/08/2026']],
      ['Tệp sitemap|text', 'Đường dẫn|sub', 'Số URL|number', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['sitemap-index', '/sitemap.xml', 6, 'Đã gửi', '12/08/2026'],
        ['sitemap-products', '/sitemap-products.xml', 186, 'Đã gửi', '12/08/2026'],
        ['sitemap-blog', '/sitemap-blog.xml', 94, 'Đã gửi', '11/08/2026'],
        ['sitemap-pages', '/sitemap-pages.xml', 48, 'Đã gửi', '08/08/2026'],
      ]
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho robot tìm kiếm.',
      'solar:shield-network-bold-duotone',
      [['Quy tắc', '9'], ['Bot chặn', '2'], ['Đường dẫn chặn', '5'], ['Kiểm tra gần nhất', '12/08/2026']],
      ['User-agent|text', 'Quy tắc|sub', 'Đường dẫn|text', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['*', 'Allow', '/', 'Hoạt động', '12/08/2026'],
        ['*', 'Disallow', '/sofa1/admin', 'Hoạt động', '12/08/2026'],
        ['*', 'Disallow', '/sofa1/checkout', 'Hoạt động', '12/08/2026'],
        ['AhrefsBot', 'Disallow', '/', 'Hoạt động', '06/08/2026'],
      ]
    ),
    mod(
      'schema',
      'Schema',
      'Dữ liệu có cấu trúc JSON-LD theo loại trang.',
      'solar:code-square-bold-duotone',
      [['Loại schema', '7'], ['Trang áp dụng', '412'], ['Lỗi', '2'], ['Cảnh báo', '5']],
      ['Loại schema|text', 'Áp dụng cho|sub', 'Số trang|number', 'Trạng thái|badge', 'Cập nhật|date'],
      [
        ['Product', 'Trang sản phẩm', 186, 'Hợp lệ', '12/08/2026'],
        ['BreadcrumbList', 'Toàn site', 412, 'Hợp lệ', '12/08/2026'],
        ['LocalBusiness', 'Trang showroom', 4, 'Hợp lệ', '09/08/2026'],
        ['Article', 'Trang blog', 94, 'Cảnh báo', '07/08/2026'],
        ['FAQPage', 'Trang FAQ', 1, 'Lỗi', '02/08/2026'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS: AdminGroup = {
  slug: 'access',
  title: 'Phân quyền',
  icon: 'solar:lock-keyhole-bold-duotone',
  modules: [
    mod(
      'users',
      'Người dùng',
      'Tài khoản quản trị và trạng thái đăng nhập.',
      'solar:user-bold-duotone',
      [['Tài khoản', '24'], ['Đang hoạt động', '21'], ['Bật 2FA', '18'], ['Khóa', '3']],
      ['Người dùng|text', 'Email|sub', 'Vai trò|text', 'Trạng thái|badge', 'Đăng nhập|date'],
      [
        ['Nguyễn Ngọc Anh', 'ngocanh@casasofa.vn', 'Quản trị viên', 'Hoạt động', '12/08/2026'],
        ['Trần Minh Quân', 'quan@casasofa.vn', 'Biên tập nội dung', 'Hoạt động', '12/08/2026'],
        ['Lê Thu Hà', 'thuha@casasofa.vn', 'Marketing', 'Hoạt động', '11/08/2026'],
        ['Phạm Quốc Việt', 'viet@casasofa.vn', 'Kho vận', 'Hoạt động', '10/08/2026'],
        ['Đỗ Hải Yến', 'yen@casasofa.vn', 'CSKH', 'Khóa', '22/07/2026'],
      ]
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi truy cập.',
      'solar:users-group-rounded-bold-duotone',
      [['Vai trò', '6'], ['Vai trò tùy chỉnh', '3'], ['Người dùng gán', '24'], ['Vai trò mặc định', 'Nhân viên']],
      ['Vai trò|text', 'Mã|sub', 'Số quyền|number', 'Người dùng|number', 'Trạng thái|badge'],
      [
        ['Quản trị viên', 'admin', 48, 3, 'Hoạt động'],
        ['Quản lý bán hàng', 'sales-manager', 26, 5, 'Hoạt động'],
        ['Biên tập nội dung', 'editor', 18, 4, 'Hoạt động'],
        ['Marketing', 'marketing', 20, 4, 'Hoạt động'],
        ['Kho vận', 'warehouse', 12, 6, 'Hoạt động'],
      ]
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Chi tiết quyền theo module chức năng.',
      'solar:key-bold-duotone',
      [['Quyền', '48'], ['Nhóm quyền', '9'], ['Quyền nhạy cảm', '7'], ['Cập nhật gần nhất', '11/08/2026']],
      ['Quyền|text', 'Mã|sub', 'Nhóm|text', 'Mức độ|badge', 'Vai trò gán|number'],
      [
        ['Xem đơn hàng', 'order.read', 'Đơn hàng', 'Cơ bản', 5],
        ['Hoàn tiền đơn hàng', 'order.refund', 'Đơn hàng', 'Nhạy cảm', 2],
        ['Sửa giá bán', 'price.update', 'Sản phẩm', 'Nhạy cảm', 2],
        ['Xuất báo cáo doanh thu', 'report.export', 'Analytics', 'Nhạy cảm', 3],
        ['Đăng bài blog', 'blog.publish', 'CMS', 'Cơ bản', 3],
      ]
    ),
    mod(
      'audit-log',
      'Nhật ký hệ thống',
      'Lịch sử thao tác và cảnh báo bảo mật.',
      'solar:clipboard-list-bold-duotone',
      [['Sự kiện 24h', '486'], ['Thao tác nhạy cảm', '14'], ['Đăng nhập lỗi', '9'], ['Cảnh báo', '2']],
      ['Thời điểm|text', 'Người dùng|sub', 'Hành động|text', 'Đối tượng|text', 'Kết quả|badge'],
      [
        ['12/08/2026 09:41', 'ngocanh@casasofa.vn', 'Cập nhật giá bán', 'CS-ROM-001', 'Thành công'],
        ['12/08/2026 09:12', 'quan@casasofa.vn', 'Xuất bản bài viết', 'blog/4', 'Thành công'],
        ['12/08/2026 08:55', 'viet@casasofa.vn', 'Tạo phiếu nhập', 'PN-2608-014', 'Thành công'],
        ['11/08/2026 22:04', 'unknown', 'Đăng nhập', 'admin', 'Thất bại'],
        ['11/08/2026 17:30', 'ngocanh@casasofa.vn', 'Hoàn tiền', 'HT-3012', 'Thành công'],
      ]
    ),
  ],
};

// ----------------------------------------------------------------------

export const SOFA1_ADMIN_GROUPS: AdminGroup[] = [
  CMS,
  PRODUCTS,
  WAREHOUSE,
  ORDERS,
  CRM,
  MARKETING,
  ANALYTICS,
  SEO,
  ACCESS,
];

export const SOFA1_ADMIN_ROOT = '/sofa1/admin';

export const findSofa1AdminModule = (groupSlug?: string, moduleSlug?: string) => {
  const group = SOFA1_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const module = group.modules.find((m) => m.slug === moduleSlug);
  if (!module) return null;
  return { group, module };
};

export const SOFA1_ADMIN_OVERVIEW_KPIS = [
  { label: 'Doanh thu tháng', value: '5,82 tỷ', delta: '+11%', icon: 'solar:dollar-minimalistic-bold-duotone' },
  { label: 'Đơn hàng', value: '312', delta: '+14%', icon: 'solar:cart-large-2-bold-duotone' },
  { label: 'Khách hàng mới', value: '256', delta: '+8%', icon: 'solar:user-plus-bold-duotone' },
  { label: 'Tỷ lệ chuyển đổi', value: '2,4%', delta: '+0,3%', icon: 'solar:chart-2-bold-duotone' },
];

export const SOFA1_ADMIN_RECENT = [
  { title: 'Đơn CS-26081201 chuyển sang Đang giao', time: '12 phút trước', icon: 'solar:delivery-bold-duotone' },
  { title: 'Ngọc Anh cập nhật giá SKU CS-ROM-001', time: '1 giờ trước', icon: 'solar:tag-price-bold-duotone' },
  { title: 'Chiến dịch "Ưu đãi tháng 8" đã gửi 8.420 email', time: '3 giờ trước', icon: 'solar:letter-bold-duotone' },
  { title: 'Phiếu nhập PN-2608-014 nhập 48 sản phẩm', time: '5 giờ trước', icon: 'solar:box-bold-duotone' },
  { title: 'Ticket TK-8809 được nâng mức ưu tiên Khẩn', time: 'Hôm qua', icon: 'solar:chat-round-call-bold-duotone' },
];
