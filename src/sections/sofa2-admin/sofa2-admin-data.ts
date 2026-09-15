// SOFA2 ADMIN — Bold, dark, modern editorial style
// ----------------------------------------------------------------------

export const SOFA2_ADMIN_ROOT = '/sofa2/admin';

export type Sofa2AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa2AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa2AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa2AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa2AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa2AdminModule['stats'],
  columns: Sofa2AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa2AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa2AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

// ----------------------------------------------------------------------
// CMS
// ----------------------------------------------------------------------

const cmsPage = (slug: string, name: string, path: string) =>
  mod(
    slug,
    name,
    `Quản lý nội dung, bố cục và trạng thái xuất bản cho ${name.toLowerCase()} (${path}).`,
    'solar:document-text-bold-duotone',
    [
      { label: 'Khối nội dung', value: '14' },
      { label: 'Lượt xem 30 ngày', value: '24.6K', trend: '+14%' },
      { label: 'Bản nháp', value: '3' },
      { label: 'Cập nhật cuối', value: '14/09' },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    [
      { block: 'Hero bold editorial', type: 'Banner', status: 'Đã xuất bản', updated: '14/09/2026', author: 'Minh Anh' },
      { block: 'Câu thương hiệu LUXE', type: 'Rich text', status: 'Đã xuất bản', updated: '10/09/2026', author: 'Thu Hà' },
      { block: 'Bộ sưu tập Scandinavian', type: 'Danh sách SP', status: 'Bản nháp', updated: '09/09/2026', author: 'Đức Anh' },
      { block: 'Đánh giá khách hàng', type: 'Slider', status: 'Đã xuất bản', updated: '02/09/2026', author: 'Minh Anh' },
      { block: 'CTA cuối trang', type: 'Banner', status: 'Tạm ẩn', updated: '28/08/2026', author: 'Thu Hà' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa2AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa2'),
    cmsPage('about', 'Trang giới thiệu', '/sofa2/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa2/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa2/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa2/policy/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa2/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '142' },
        { label: 'Chờ duyệt', value: '8' },
        { label: 'Lượt đọc / tháng', value: '118K', trend: '+12%' },
        { label: 'Chuyên mục', value: '12' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: 'Scandinavian: tối giản mà ấm áp', category: 'Triết lý', status: 'Đã xuất bản', views: 18620, updated: '13/09/2026' },
        { title: 'Chọn sofa cho căn hộ nhỏ', category: 'Tư vấn', status: 'Đã xuất bản', views: 9840, updated: '05/09/2026' },
        { title: 'Xu hướng nội thất 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '14/09/2026' },
        { title: 'Bảo quản sofa da tự nhiên', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '12/09/2026' },
      ],
      ['Viết bài', 'Duyệt bài']
    ),
    mod(
      'menu',
      'Menu',
      'Cấu trúc menu header, footer và menu mobile.',
      'solar:hamburger-menu-bold-duotone',
      [
        { label: 'Menu', value: '4' },
        { label: 'Mục menu', value: '54' },
        { label: 'Liên kết hỏng', value: '0' },
        { label: 'Cấp sâu nhất', value: '3' },
      ],
      [
        { key: 'menu', label: 'Menu' },
        { key: 'position', label: 'Vị trí' },
        { key: 'items', label: 'Số mục', type: 'number' },
        STATUS_COL,
      ],
      [
        { menu: 'Menu chính', position: 'Header', items: 24, status: 'Đã xuất bản' },
        { menu: 'Menu sản phẩm (mega)', position: 'Header', items: 18, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 10, status: 'Đã xuất bản' },
        { menu: 'Menu mobile', position: 'Mobile', items: 14, status: 'Bản nháp' },
      ],
      ['Thêm menu']
    ),
    mod(
      'banner',
      'Banner',
      'Banner khuyến mãi theo vị trí và lịch hiển thị.',
      'solar:gallery-wide-bold-duotone',
      [
        { label: 'Banner đang chạy', value: '8' },
        { label: 'CTR trung bình', value: '3.8%', trend: '+0.7%' },
        { label: 'Hết hạn tuần này', value: '2' },
        { label: 'Vị trí', value: '6' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Vị trí' },
        { key: 'schedule', label: 'Lịch chạy' },
        STATUS_COL,
      ],
      [
        { name: 'Mùa thu – 25%', position: 'Top bar', schedule: '01/09 – 30/09', status: 'Đang chạy' },
        { name: 'Miễn phí giao lắp toàn quốc', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Scandinavian', position: 'Danh mục', schedule: '05/09 – 22/09', status: 'Đang chạy' },
        { name: 'Trả góp 0%', position: 'Chi tiết SP', schedule: '01/08 – 31/08', status: 'Hết hạn' },
      ],
      ['Tạo banner']
    ),
    mod(
      'slider',
      'Slider',
      'Slideshow trang chủ và trang danh mục.',
      'solar:slider-horizontal-bold-duotone',
      [
        { label: 'Slider', value: '3' },
        { label: 'Slide', value: '16' },
        { label: 'Thời gian chuyển', value: '5s' },
        { label: 'Lượt click', value: '5.2K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ', slides: 6, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập mùa thu', slides: 5, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Showroom 360°', slides: 4, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '88%' },
        { label: 'Thiếu meta', value: '4' },
        { label: 'Điểm SEO', value: '89/100', trend: '+5' },
        { label: 'Từ khoá top 10', value: '124' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa2', title: 'LUXE Sofa – Sofa thiết kế độc quyền', length: 52, status: 'Tốt' },
        { page: '/sofa2/about', title: 'Về LUXE | Sofa Việt Nam', length: 40, status: 'Tốt' },
        { page: '/sofa2/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa2/policy', title: 'Chính sách mua hàng LUXE', length: 46, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '20' },
        { label: 'Đã xuất bản', value: '16' },
        { label: 'Bản nháp', value: '4' },
        { label: 'Lượt xem', value: '32K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn đo kích thước phòng', slug: '/sofa2/huong-dan-do', status: 'Đã xuất bản', updated: '08/09/2026' },
        { title: 'Cam kết gỗ FSC', slug: '/sofa2/cam-ket', status: 'Đã xuất bản', updated: '01/09/2026' },
        { title: 'Tuyển đại lý 2026', slug: '/sofa2/tuyen-dai-ly', status: 'Bản nháp', updated: '14/09/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa2AdminGroup = {
  slug: 'catalog',
  name: 'Sản phẩm',
  icon: 'solar:box-bold-duotone',
  modules: [
    mod(
      'categories',
      'Danh mục',
      'Cây danh mục sản phẩm và thứ tự hiển thị.',
      'solar:folder-with-files-bold-duotone',
      [
        { label: 'Danh mục', value: '24' },
        { label: 'Danh mục cha', value: '6' },
        { label: 'Sản phẩm gán', value: '428' },
        { label: 'Ẩn', value: '3' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Scandinavian', parent: 'Phong cách', products: 64, status: 'Hiển thị' },
        { name: 'Industrial Loft', parent: 'Phong cách', products: 48, status: 'Hiển thị' },
        { name: 'Mid-Century', parent: 'Phong cách', products: 36, status: 'Hiển thị' },
        { name: 'Sofa góc', parent: 'Theo kiểu dáng', products: 28, status: 'Hiển thị' },
        { name: 'Sofa đơn', parent: 'Theo kiểu dáng', products: '8', status: 'Ẩn' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '428' },
        { label: 'Đang bán', value: '396' },
        { label: 'Hết hàng', value: '14' },
        { label: 'Mới tháng này', value: '26', trend: '+26' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'LX-OSL-01', name: 'Sofa Oslo 3 Chỗ', category: 'Scandinavian', price: money(14500000), status: 'Đang bán' },
        { sku: 'LX-BER-04', name: 'Sofa Berlin Góc', category: 'Industrial Loft', price: money(22000000), status: 'Đang bán' },
        { sku: 'LX-COP-12', name: 'Sofa Copenhagen', category: 'Scandinavian', price: money(11900000), status: 'Đang bán' },
        { sku: 'LX-TOK-03', name: 'Sofa Tokyo Đơn', category: 'Mid-Century', price: money(7500000), status: 'Hết hàng' },
        { sku: 'LX-MUN-07', name: 'Sofa Munich 2 Chỗ', category: 'Industrial Loft', price: money(16800000), status: 'Đang bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '10' },
        { label: 'Giá trị', value: '148' },
        { label: 'Dùng cho biến thể', value: '6' },
        { label: 'Bộ lọc mặt tiền', value: '5' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu sắc', values: 38, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 12, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 18, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Kiểu chân gỗ', values: 8, usage: 'Tuỳ chọn', status: 'Hoạt động' },
        { name: 'Độ cứng đệm', values: 4, usage: 'Tuỳ chọn', status: 'Tạm ẩn' },
      ],
      ['Thêm thuộc tính']
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Tổ hợp SKU theo màu, chất liệu và kích thước.',
      'solar:layers-bold-duotone',
      [
        { label: 'Biến thể', value: '1.248' },
        { label: 'Có tồn kho', value: '1.086' },
        { label: 'Cảnh báo tồn', value: '36' },
        { label: 'Ngừng bán', value: '24' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'LX-OSL-01-BGE', product: 'Sofa Oslo', option: 'Linen / Beige / 3 chỗ', stock: 12, price: money(14500000) },
        { sku: 'LX-OSL-01-BRN', product: 'Sofa Oslo', option: 'Linen / Brown / 3 chỗ', stock: 6, price: money(14800000) },
        { sku: 'LX-BER-04-GRY', product: 'Sofa Berlin', option: 'Da / Grey / Góc', stock: 24, price: money(22000000) },
        { sku: 'LX-TOK-03-WHT', product: 'Sofa Tokyo', option: 'Nỉ / White / Đơn', stock: 0, price: money(7500000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '3.248' },
        { label: 'Sắp hết', value: '36' },
        { label: 'Hết hàng', value: '14' },
        { label: 'Giá trị tồn', value: '18.4 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'LX-OSL-01-BGE', warehouse: 'Kho TP.HCM', stock: 12, reserved: 4, status: 'Đủ hàng' },
        { sku: 'LX-BER-04-GRY', warehouse: 'Kho Hà Nội', stock: 24, reserved: 6, status: 'Đủ hàng' },
        { sku: 'LX-TOK-03-WHT', warehouse: 'Kho Hà Nội', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'LX-MUN-07-BLK', warehouse: 'Kho Bình Dương', stock: 4, reserved: 2, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '5' },
        { label: 'SP đang giảm giá', value: '62' },
        { label: 'Giảm trung bình', value: '22%' },
        { label: 'Biên lợi nhuận', value: '34%', trend: '+2%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'LX-OSL-01', list: money(18900000), sale: money(14500000), dealer: money(12800000), status: 'Đang giảm' },
        { sku: 'LX-BER-04', list: money(28000000), sale: money(22000000), dealer: money(19400000), status: 'Đang giảm' },
        { sku: 'LX-MUN-07', list: money(16800000), sale: money(16800000), dealer: money(14800000), status: 'Giá gốc' },
        { sku: 'LX-COP-12', list: money(15500000), sale: money(11900000), dealer: money(10500000), status: 'Đang giảm' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa2AdminGroup = {
  slug: 'warehouse',
  name: 'Kho hàng',
  icon: 'solar:warehouse-bold-duotone',
  modules: [
    mod(
      'overview',
      'Tổng quan kho',
      'Tình trạng tồn kho toàn hệ thống theo từng kho và showroom.',
      'solar:chart-square-bold-duotone',
      [
        { label: 'Kho', value: '6' },
        { label: 'Tổng tồn', value: '3.248' },
        { label: 'Đơn chờ xuất', value: '52' },
        { label: 'Tỷ lệ lấp đầy', value: '72%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho trung tâm TP.HCM', city: 'TP.HCM', stock: 1240, fill: '78%', status: 'Hoạt động' },
        { warehouse: 'Kho Hà Nội', city: 'Hà Nội', stock: 986, fill: '80%', status: 'Hoạt động' },
        { warehouse: 'Kho Bình Dương', city: 'Bình Dương', stock: 568, fill: '54%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 454, fill: '62%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '186' },
        { label: 'Chờ duyệt', value: '9' },
        { label: 'Giá trị nhập', value: '4.2 tỷ' },
        { label: 'Giá trị xuất', value: '4.8 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2609-014', type: 'Nhập', warehouse: 'Kho TP.HCM', value: money(424000000), status: 'Hoàn tất' },
        { code: 'PX-2609-092', type: 'Xuất', warehouse: 'Kho Hà Nội', value: money(122000000), status: 'Hoàn tất' },
        { code: 'PN-2609-015', type: 'Nhập', warehouse: 'Kho Bình Dương', value: money(98000000), status: 'Chờ duyệt' },
        { code: 'PX-2609-093', type: 'Xuất', warehouse: 'Kho TP.HCM', value: money(28400000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '28' },
        { label: 'Đang vận chuyển', value: '6' },
        { label: 'Lệch kiểm kê', value: '2' },
        { label: 'Kiểm kê gần nhất', value: '31/08' },
      ],
      [
        { key: 'code', label: 'Mã lệnh' },
        { key: 'from', label: 'Từ kho' },
        { key: 'to', label: 'Đến kho' },
        { key: 'items', label: 'Số món', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'CK-0912', from: 'Kho Hà Nội', to: 'Kho Bình Dương', items: 18, status: 'Đang vận chuyển' },
        { code: 'CK-0911', from: 'Kho TP.HCM', to: 'Showroom Q1', items: 6, status: 'Hoàn tất' },
        { code: 'KK-0903', from: 'Kho Hà Nội', to: '—', items: 386, status: 'Lệch 2 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa2AdminGroup = {
  slug: 'orders',
  name: 'Đơn hàng',
  icon: 'solar:cart-large-2-bold-duotone',
  modules: [
    mod(
      'orders',
      'Đơn hàng',
      'Toàn bộ đơn hàng online, showroom và đại lý.',
      'solar:bill-list-bold-duotone',
      [
        { label: 'Đơn tháng này', value: '468', trend: '+14%' },
        { label: 'Chờ xác nhận', value: '22' },
        { label: 'Doanh thu', value: '6.2 tỷ', trend: '+11%' },
        { label: 'Giá trị TB/đơn', value: '14.2 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'LX-26091201', customer: 'Hoàng Thị Mai', channel: 'Website', total: money(14500000), status: 'Đang giao' },
        { code: 'LX-26091198', customer: 'Lê Đức Anh', channel: 'Showroom HCM', total: money(22000000), status: 'Hoàn tất' },
        { code: 'LX-26091195', customer: 'Nội thất Việt', channel: 'Đại lý', total: money(168000000), status: 'Chờ xác nhận' },
        { code: 'LX-26091190', customer: 'Trần Việt Cường', channel: 'Website', total: money(11900000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '492' },
        { label: 'Thành công', value: '96.4%' },
        { label: 'Chờ đối soát', value: '12' },
        { label: 'Trả góp', value: '68 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-88214', order: 'LX-26091201', method: 'VNPay', amount: money(14500000), status: 'Thành công' },
        { txn: 'TXN-88211', order: 'LX-26091198', method: 'Chuyển khoản', amount: money(22000000), status: 'Thành công' },
        { txn: 'TXN-88208', order: 'LX-26091195', method: 'Công nợ đại lý', amount: money(168000000), status: 'Chờ đối soát' },
        { txn: 'TXN-88201', order: 'LX-26091190', method: 'Thẻ quốc tế', amount: money(11900000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '52' },
        { label: 'Giao đúng hẹn', value: '94%' },
        { label: 'Đội lắp đặt', value: '12' },
        { label: 'Phí VC tháng', value: '168 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-39218', order: 'LX-26091201', carrier: 'Đội xe nội bộ', eta: '17/09/2026', status: 'Đang giao' },
        { code: 'VD-39215', order: 'LX-26091198', carrier: 'Đội xe nội bộ', eta: '13/09/2026', status: 'Đã giao' },
        { code: 'VD-39211', order: 'LX-26091195', carrier: 'GHTK', eta: '21/09/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '10' },
        { label: 'Đã hoàn', value: '7' },
        { label: 'Giá trị hoàn', value: '124 tr' },
        { label: 'Thời gian TB', value: '2.6 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2609-04', order: 'LX-26091190', reason: 'Khách huỷ đơn', amount: money(11900000), status: 'Đã hoàn' },
        { code: 'HT-2609-05', order: 'LX-26091152', reason: 'Sai màu vải', amount: money(6200000), status: 'Đang xử lý' },
        { code: 'HT-2609-06', order: 'LX-26091140', reason: 'Giao trễ hẹn', amount: money(1200000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '6' },
        { label: 'Tỷ lệ đổi trả', value: '1.3%' },
        { label: 'Đang thu hồi', value: '2' },
        { label: 'Tái nhập kho', value: '3' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2609-02', product: 'Sofa Copenhagen', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2609-03', product: 'Sofa Berlin góc', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2609-04', product: 'Sofa Helsinki', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa2AdminGroup = {
  slug: 'crm',
  name: 'CRM',
  icon: 'solar:users-group-rounded-bold-duotone',
  modules: [
    mod(
      'customers',
      'Khách hàng',
      'Hồ sơ khách hàng, phân hạng và giá trị vòng đời.',
      'solar:user-id-bold-duotone',
      [
        { label: 'Khách hàng', value: '12.480' },
        { label: 'Mới tháng này', value: '468', trend: '+9%' },
        { label: 'Khách VIP', value: '286' },
        { label: 'LTV trung bình', value: '28 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Hoàng Thị Mai', phone: '090 xxx 1234', tier: 'Vàng', spent: money(68400000), status: 'Hoạt động' },
        { name: 'Lê Đức Anh', phone: '098 xxx 5678', tier: 'Bạc', spent: money(22000000), status: 'Hoạt động' },
        { name: 'Nội thất Việt', phone: '024 xxx 9000', tier: 'Đại lý', spent: money(1680000000), status: 'Hoạt động' },
        { name: 'Trần Việt Cường', phone: '091 xxx 4477', tier: 'Thường', spent: money(11900000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '1.240' },
        { label: 'Đã liên hệ', value: '842' },
        { label: 'Tỷ lệ chốt', value: '17.8%', trend: '+2.1%' },
        { label: 'Lead nóng', value: '86' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Phạm Thu Hà', source: 'Facebook Ads', interest: 'Sofa Scandinavian', owner: 'Minh Anh', status: 'Lead nóng' },
        { name: 'Nguyễn Vinh', source: 'Google Ads', interest: 'Sofa góc', owner: 'Đức Anh', status: 'Đã liên hệ' },
        { name: 'Lê Khánh', source: 'Showroom HCM', interest: 'Sofa da', owner: 'Thu Hà', status: 'Đang tư vấn' },
        { name: 'Trần My', source: 'Zalo OA', interest: 'Bộ sưu tập Oslo', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '18.420' },
        { label: 'Khách mua lại', value: '38%' },
        { label: 'Chu kỳ mua lại', value: '14 tháng' },
        { label: 'Đơn/khách', value: '1.5' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Hoàng Thị Mai', order: 'LX-26091201', date: '13/09/2026', total: money(14500000), status: 'Đang giao' },
        { customer: 'Hoàng Thị Mai', order: 'LX-25110432', date: '04/11/2025', total: money(48400000), status: 'Hoàn tất' },
        { customer: 'Lê Đức Anh', order: 'LX-26091198', date: '12/09/2026', total: money(22000000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '36' },
        { label: 'Thời gian phản hồi', value: '42 phút' },
        { label: 'CSAT', value: '4.7/5', trend: '+0.1' },
        { label: 'Bảo hành đang xử lý', value: '7' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-8824', customer: 'Trần Việt Cường', topic: 'Hoàn tiền đơn huỷ', agent: 'Thu Hà', status: 'Đang xử lý' },
        { ticket: 'TK-8821', customer: 'Hoàng Thị Mai', topic: 'Đặt lịch giao lắp', agent: 'Minh Anh', status: 'Đã đóng' },
        { ticket: 'TK-8818', customer: 'Nội thất Việt', topic: 'Bảo hành khung gỗ', agent: 'Đức Anh', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa2AdminGroup = {
  slug: 'marketing',
  name: 'Marketing',
  icon: 'solar:megaphone-bold-duotone',
  modules: [
    mod(
      'email',
      'Email Marketing',
      'Chiến dịch email, kịch bản tự động và hiệu quả gửi.',
      'solar:letter-bold-duotone',
      [
        { label: 'Chiến dịch', value: '24' },
        { label: 'Tỷ lệ mở', value: '38.2%', trend: '+2.8%' },
        { label: 'Tỷ lệ click', value: '6.4%' },
        { label: 'Doanh thu quy đổi', value: '780 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Mùa thu – 25%', segment: 'Toàn bộ khách', sent: 12480, open: '40%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Oslo mới', segment: 'Quan tâm sofa vải', sent: 3280, open: '46%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 862, open: '52%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 224, open: '58%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '48.2K' },
        { label: 'Tỷ lệ nhận', value: '98.2%' },
        { label: 'Chi phí tháng', value: '28 tr' },
        { label: 'Brandname', value: 'LUXE' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách HCM + HN', sent: 18600, cost: money(12400000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 468, cost: money(320000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 286, cost: money(196000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '26.4K' },
        { label: 'Tỷ lệ click', value: '4.2%' },
        { label: 'Thông báo tháng', value: '18' },
        { label: 'Huỷ đăng ký', value: '0.8%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Giảm 25% sofa Scandinavian', trigger: 'Thủ công', reach: 24800, ctr: '4.8%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 3820, ctr: '9.2%', status: 'Đang chạy' },
        { title: 'Showroom mới Hà Nội', trigger: 'Vị trí', reach: 1280, ctr: '3.2%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '16' },
        { label: 'Lượt dùng', value: '2.180' },
        { label: 'Giá trị giảm', value: '448 tr' },
        { label: 'Tỷ lệ dùng', value: '34%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'THU25', value: 'Giảm 25%', condition: 'Đơn từ 15 triệu', used: 820, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Toàn quốc', used: 1120, status: 'Đang chạy' },
        { code: 'VIP3', value: 'Giảm 3 triệu', condition: 'Khách hạng Vàng', used: 86, status: 'Đang chạy' },
        { code: 'AUG20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 142, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '268' },
        { label: 'Đơn giới thiệu', value: '392' },
        { label: 'Hoa hồng tháng', value: '286 tr' },
        { label: 'Tỷ lệ hoa hồng', value: '5%' },
      ],
      [
        { key: 'partner', label: 'Cộng tác viên' },
        { key: 'channel', label: 'Kênh' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'commission', label: 'Hoa hồng', type: 'money' },
        STATUS_COL,
      ],
      [
        { partner: 'Nội Thất Review VN', channel: 'YouTube', orders: 82, commission: money(92000000), status: 'Đang hợp tác' },
        { partner: 'Décor Blog SG', channel: 'Blog', orders: 42, commission: money(38600000), status: 'Đang hợp tác' },
        { partner: 'Living Tips VN', channel: 'TikTok', orders: 28, commission: money(22400000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa2AdminGroup = {
  slug: 'analytics',
  name: 'Analytics',
  icon: 'solar:chart-2-bold-duotone',
  modules: [
    mod(
      'revenue',
      'Doanh thu',
      'Doanh thu theo thời gian, kênh bán và khu vực.',
      'solar:dollar-minimalistic-bold-duotone',
      [
        { label: 'Doanh thu tháng', value: '6.2 tỷ', trend: '+11%' },
        { label: 'Lợi nhuận gộp', value: '2.1 tỷ' },
        { label: 'Đơn hàng', value: '468' },
        { label: 'AOV', value: '14.2 tr', trend: '+3%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 208, revenue: money(2640000000), share: '43%', growth: '+16%' },
        { channel: 'Showroom', orders: 162, revenue: money(2120000000), share: '34%', growth: '+7%' },
        { channel: 'Đại lý B2B', orders: 62, revenue: money(1240000000), share: '20%', growth: '+12%' },
        { channel: 'Sàn TMĐT', orders: 36, revenue: money(200000000), share: '3%', growth: '-1%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '38' },
        { label: 'Top 10 đóng góp', value: '46%' },
        { label: 'SP không bán được', value: '16' },
        { label: 'Vòng quay tồn', value: '4.2' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Oslo 3 Chỗ', sold: 86, revenue: money(1247000000), stock: 12 },
        { product: 'Sofa Berlin Góc', sold: 72, revenue: money(1584000000), stock: 24 },
        { product: 'Sofa Copenhagen', sold: 48, revenue: money(571200000), stock: 18 },
        { product: 'Sofa Munich 2 Chỗ', sold: 44, revenue: money(739200000), stock: 4 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '284K', trend: '+9%' },
        { label: 'Người dùng mới', value: '68%' },
        { label: 'Thời gian TB', value: '3:12' },
        { label: 'Tỷ lệ thoát', value: '42%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 128000, bounce: '38%', conversion: '2.4%' },
        { source: 'Paid Social', sessions: 62400, bounce: '48%', conversion: '1.6%' },
        { source: 'Direct', sessions: 48800, bounce: '35%', conversion: '3.2%' },
        { source: 'Referral', sessions: 24800, bounce: '44%', conversion: '1.9%' },
        { source: 'Email', sessions: 19800, bounce: '29%', conversion: '4.8%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.4' },
        { label: 'Thêm giỏ', value: '18.6K' },
        { label: 'Bỏ giỏ', value: '68%' },
        { label: 'Xem 360°', value: '8.4K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 284000, drop: '22%', time: '0:48' },
        { step: 'Xem danh mục', users: 221000, drop: '30%', time: '1:24' },
        { step: 'Xem chi tiết SP', users: 155000, drop: '44%', time: '2:36' },
        { step: 'Thêm vào giỏ', users: 18600, drop: '66%', time: '0:22' },
        { step: 'Hoàn tất thanh toán', users: 5240, drop: '—', time: '2:58' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '1.96%', trend: '+0.3%' },
        { label: 'CR mobile', value: '1.52%' },
        { label: 'CR desktop', value: '2.78%' },
        { label: 'CR có tư vấn', value: '11.4%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 96800, orders: 1471, cr: '1.52%' },
        { segment: 'Desktop – Organic', sessions: 31200, orders: 867, cr: '2.78%' },
        { segment: 'Email remarketing', sessions: 19800, orders: 950, cr: '4.80%' },
        { segment: 'Tư vấn showroom', sessions: 4200, orders: 479, cr: '11.4%' },
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// SEO
// ----------------------------------------------------------------------

const seoPage = (slug: string, name: string, sample: string) =>
  mod(
    slug,
    name,
    `Tối ưu tiêu đề, mô tả, heading và liên kết nội bộ cho ${name.toLowerCase()}.`,
    'solar:graph-up-bold-duotone',
    [
      { label: 'URL theo dõi', value: '48' },
      { label: 'Điểm trung bình', value: '88/100' },
      { label: 'Thiếu meta', value: '4' },
      { label: 'Từ khoá top 10', value: '28' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – LUXE Sofa`, keyword: 'sofa scandinavian', position: 4, status: 'Tốt' },
      { url: `${sample}/oslo`, title: 'Sofa Oslo 3 chỗ gỗ sồi', keyword: 'sofa oslo', position: 7, status: 'Tốt' },
      { url: `${sample}/berlin`, title: '', keyword: 'soa góc industrial', position: 16, status: 'Thiếu meta' },
      { url: `${sample}/copenhagen`, title: 'Sofa Copenhagen linen tự nhiên', keyword: 'sofa linen', position: 11, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa2AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa2/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa2/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa2/collections'),
    seoPage('project', 'Trang dự án', '/sofa2/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa2/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa2/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa2/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.428' },
        { label: 'Đã index', value: '1.362' },
        { label: 'Lỗi', value: '3' },
        { label: 'Cập nhật cuối', value: '14/09' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 428, indexed: 418, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 24, indexed: 24, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 142, indexed: 136, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 48, indexed: 44, status: '3 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '12' },
        { label: 'Đường dẫn chặn', value: '7' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '02/09' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa2/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa2/cart', status: 'Hoạt động' },
        { agent: 'Googlebot', rule: 'Allow', path: '/', status: 'Hoạt động' },
      ],
      ['Sửa robots.txt']
    ),
    mod(
      'schema',
      'Schema',
      'Dữ liệu có cấu trúc JSON-LD cho sản phẩm, bài viết và doanh nghiệp.',
      'solar:code-square-bold-duotone',
      [
        { label: 'Loại schema', value: '8' },
        { label: 'URL áp dụng', value: '1.248' },
        { label: 'Cảnh báo', value: '2' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 428, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 1248, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 142, status: '2 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 12, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa2AdminGroup = {
  slug: 'access',
  name: 'Phân quyền',
  icon: 'solar:lock-keyhole-bold-duotone',
  modules: [
    mod(
      'users',
      'Người dùng',
      'Tài khoản quản trị viên và trạng thái truy cập.',
      'solar:user-bold-duotone',
      [
        { label: 'Tài khoản', value: '36' },
        { label: 'Đang hoạt động', value: '32' },
        { label: 'Bật 2FA', value: '26' },
        { label: 'Bị khoá', value: '2' },
      ],
      [
        { key: 'name', label: 'Người dùng' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Vai trò' },
        { key: 'last', label: 'Đăng nhập cuối' },
        STATUS_COL,
      ],
      [
        { name: 'Minh Anh', email: 'minhanh@luxe.vn', role: 'Quản trị hệ thống', last: '15/09/2026 09:18', status: 'Hoạt động' },
        { name: 'Đức Anh', email: 'ducanh@luxe.vn', role: 'Quản lý bán hàng', last: '14/09/2026 17:48', status: 'Hoạt động' },
        { name: 'Thu Hà', email: 'thuha@luxe.vn', role: 'CSKH', last: '15/09/2026 08:08', status: 'Hoạt động' },
        { name: 'Vinh Nguyễn', email: 'vinh@luxe.vn', role: 'Biên tập nội dung', last: '02/08/2026 10:24', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '7' },
        { label: 'Vai trò tuỳ chỉnh', value: '3' },
        { label: 'Người dùng gán', value: '36' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 3, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 8, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 6, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 12, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 4, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '32' },
        { label: 'Quyền', value: '128' },
        { label: 'Quyền nhạy cảm', value: '14' },
        { label: 'Cần phê duyệt', value: '6' },
      ],
      [
        { key: 'module', label: 'Module' },
        { key: 'action', label: 'Hành động' },
        { key: 'roles', label: 'Vai trò được cấp' },
        STATUS_COL,
      ],
      [
        { module: 'Đơn hàng', action: 'Huỷ đơn', roles: 'Quản trị, Quản lý bán hàng', status: 'Cần phê duyệt' },
        { module: 'Hoàn tiền', action: 'Duyệt hoàn tiền', roles: 'Quản trị, Kế toán', status: 'Nhạy cảm' },
        { module: 'CMS', action: 'Xuất bản trang', roles: 'Quản trị, Biên tập', status: 'Bình thường' },
        { module: 'Phân quyền', action: 'Gán vai trò', roles: 'Quản trị', status: 'Nhạy cảm' },
      ],
      ['Sửa ma trận quyền']
    ),
    mod(
      'audit-log',
      'Nhật ký hệ thống',
      'Lịch sử thao tác, đăng nhập và thay đổi cấu hình.',
      'solar:clipboard-list-bold-duotone',
      [
        { label: 'Sự kiện hôm nay', value: '1.280' },
        { label: 'Đăng nhập thất bại', value: '12' },
        { label: 'Thay đổi cấu hình', value: '8' },
        { label: 'Lưu trữ', value: '180 ngày' },
      ],
      [
        { key: 'time', label: 'Thời gian' },
        { key: 'user', label: 'Người dùng' },
        { key: 'action', label: 'Hành động' },
        { key: 'ip', label: 'IP' },
        STATUS_COL,
      ],
      [
        { time: '15/09 09:18', user: 'Minh Anh', action: 'Xuất bản trang chủ bold editorial', ip: '113.161.x.18', status: 'Thành công' },
        { time: '15/09 08:46', user: 'Thu Hà', action: 'Duyệt hoàn tiền HT-2609-04', ip: '113.161.x.26', status: 'Thành công' },
        { time: '15/09 08:02', user: 'unknown', action: 'Đăng nhập thất bại', ip: '58.61.x.218', status: 'Từ chối' },
        { time: '14/09 22:14', user: 'Đức Anh', action: 'Sửa bảng giá đại lý', ip: '113.161.x.34', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA2_ADMIN_GROUPS: Sofa2AdminGroup[] = [
  CMS_GROUP,
  PRODUCT_GROUP,
  WAREHOUSE_GROUP,
  ORDER_GROUP,
  CRM_GROUP,
  MARKETING_GROUP,
  ANALYTICS_GROUP,
  SEO_GROUP,
  ACCESS_GROUP,
];

export function findSofa2AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA2_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA2_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '6.2 tỷ', trend: '+11%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '468', trend: '+14%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '468', trend: '+9%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '1.96%', trend: '+0.3%', color: 'warning' as const },
];

export const SOFA2_ADMIN_ACTIVITIES = [
  { time: '09:18', text: 'Minh Anh xuất bản lại Trang chủ bold editorial', tag: 'CMS' },
  { time: '08:46', text: 'Duyệt hoàn tiền HT-2609-04 (11.9tr)', tag: 'Đơn hàng' },
  { time: '08:08', text: '22 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch "Mùa thu" đạt 40% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU LX-TOK-03-WHT hết hàng tại Kho Hà Nội', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA2_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA2_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.2, 3.6, 4.0, 4.2, 4.6, 4.8, 5.4, 5.8, 6.2, 5.6, 6.0, 6.8] },
  { name: 'Mục tiêu (tỷ)', data: [3.4, 3.8, 4.2, 4.4, 4.8, 5.0, 5.4, 5.8, 6.2, 6.6, 7.0, 7.4] },
];

export const SOFA2_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [208, 242, 268, 292, 318, 342, 408, 468, 432, 452, 492, 538] },
];

export const SOFA2_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [43, 34, 20, 3, 6],
};

export const SOFA2_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Oslo 3S', 'Sofa Berlin Góc', 'Sofa Copenhagen', 'Sofa Munich 2C', 'Sofa Helsinki'],
  series: [172, 144, 96, 88, 64],
};
