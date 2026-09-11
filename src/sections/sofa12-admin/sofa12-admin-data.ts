// SOFA12 ADMIN — cấu hình khu vực quản trị (dữ liệu demo)
// Theme: terracotta / clay / ink — SOFA TERRA
// ----------------------------------------------------------------------

export const SOFA12_ADMIN_ROOT = '/sofa12/admin';

export type Sofa12AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa12AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa12AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa12AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa12AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa12AdminModule['stats'],
  columns: Sofa12AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa12AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa12AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Lượt xem 30 ngày', value: '22.4K', trend: '+15%' },
      { label: 'Bản nháp', value: '3' },
      { label: 'Cập nhật cuối', value: '11/09' },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    [
      { block: 'Hero terracotta', type: 'Banner', status: 'Đã xuất bản', updated: '11/09/2026', author: 'Hà Vy' },
      { block: 'Câu chuyện đất nung', type: 'Rich text', status: 'Đã xuất bản', updated: '09/09/2026', author: 'Minh Quân' },
      { block: 'Bộ sưu tập Terra', type: 'Danh sách SP', status: 'Bản nháp', updated: '08/09/2026', author: 'Thu Hà' },
      { block: 'Đánh giá khách hàng', type: 'Slider', status: 'Đã xuất bản', updated: '01/09/2026', author: 'Hà Vy' },
      { block: 'CTA gửi swatch miễn phí', type: 'Banner', status: 'Tạm ẩn', updated: '28/08/2026', author: 'Minh Quân' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa12AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa12'),
    cmsPage('about', 'Trang giới thiệu', '/sofa12/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa12/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa12/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa12/policy/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa12/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '96' },
        { label: 'Chờ duyệt', value: '4' },
        { label: 'Lượt đọc / tháng', value: '64K', trend: '+9%' },
        { label: 'Chuyên mục', value: '7' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: 'Vòm cong và ánh sáng: thiết kế sofa Địa Trung Hải', category: 'Tư vấn', status: 'Đã xuất bản', views: 9820, updated: '10/09/2026' },
        { title: 'Bảo quản vải lanh thô đúng cách', category: 'Bảo dưỡng', status: 'Đã xuất bản', views: 6410, updated: '04/09/2026' },
        { title: 'Xu hướng nội thất đất nung 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '11/09/2026' },
        { title: 'So sánh bouclé và nhung tăm', category: 'Chất liệu', status: 'Bản nháp', views: 0, updated: '10/09/2026' },
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
        { label: 'Mục menu', value: '46' },
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
        { menu: 'Menu chính', position: 'Header', items: 20, status: 'Đã xuất bản' },
        { menu: 'Menu bộ sưu tập', position: 'Header', items: 14, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 8, status: 'Đã xuất bản' },
        { menu: 'Menu mobile', position: 'Mobile', items: 10, status: 'Bản nháp' },
      ],
      ['Thêm menu']
    ),
    mod(
      'banner',
      'Banner',
      'Banner khuyến mãi theo vị trí và lịch hiển thị.',
      'solar:gallery-wide-bold-duotone',
      [
        { label: 'Banner đang chạy', value: '6' },
        { label: 'CTR trung bình', value: '3.8%', trend: '+0.7%' },
        { label: 'Hết hạn tuần này', value: '1' },
        { label: 'Vị trí', value: '5' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Vị trí' },
        { key: 'schedule', label: 'Lịch chạy' },
        STATUS_COL,
      ],
      [
        { name: 'Sale đất nung – 25%', position: 'Top bar', schedule: '01/09 – 30/09', status: 'Đang chạy' },
        { name: 'Gửi swatch vải miễn phí', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Dune mới', position: 'Danh mục', schedule: '05/09 – 20/09', status: 'Đang chạy' },
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
        { label: 'Slide', value: '12' },
        { label: 'Thời gian chuyển', value: '5s' },
        { label: 'Lượt click', value: '3.8K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero terracotta', slides: 4, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập Olive Grove', slides: 5, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Showroom 360°', slides: 3, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '89%' },
        { label: 'Thiếu meta', value: '4' },
        { label: 'Điểm SEO', value: '94/100', trend: '+5' },
        { label: 'Từ khoá top 10', value: '118' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa12', title: 'SOFA TERRA – Sofa thủ công đất nung cao cấp', length: 56, status: 'Tốt' },
        { page: '/sofa12/about', title: 'Về chúng tôi | SOFA TERRA', length: 42, status: 'Tốt' },
        { page: '/sofa12/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa12/policy', title: 'Chính sách mua hàng SOFA TERRA', length: 48, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '15' },
        { label: 'Đã xuất bản', value: '12' },
        { label: 'Bản nháp', value: '3' },
        { label: 'Lượt xem', value: '31K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn đo kích thước phòng', slug: '/sofa12/huong-dan-do', status: 'Đã xuất bản', updated: '06/09/2026' },
        { title: 'Cam kết chất liệu tự nhiên', slug: '/sofa12/cam-ket', status: 'Đã xuất bản', updated: '01/09/2026' },
        { title: 'Tuyển đại lý 2026', slug: '/sofa12/tuyen-dai-ly', status: 'Bản nháp', updated: '11/09/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa12AdminGroup = {
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
        { label: 'Danh mục', value: '18' },
        { label: 'Danh mục cha', value: '4' },
        { label: 'Sản phẩm gán', value: '286' },
        { label: 'Ẩn', value: '1' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Terra', parent: 'Bộ sưu tập', products: 42, status: 'Hiển thị' },
        { name: 'Dune', parent: 'Bộ sưu tập', products: 36, status: 'Hiển thị' },
        { name: 'Olive Grove', parent: 'Bộ sưu tập', products: 28, status: 'Hiển thị' },
        { name: 'Armchair', parent: 'Sofa đơn', products: 19, status: 'Hiển thị' },
        { name: 'Daybed', parent: 'Sofa đa năng', products: 8, status: 'Ẩn' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '286' },
        { label: 'Đang bán', value: '268' },
        { label: 'Hết hàng', value: '10' },
        { label: 'Mới tháng này', value: '18', trend: '+18' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'TR-ARCO-3S', name: 'Arco Terra 3 chỗ', category: 'Terra', price: money(28900000), status: 'Đang bán' },
        { sku: 'DN-CURVE-2S', name: 'Dune Curve 2 chỗ', category: 'Dune', price: money(21500000), status: 'Đang bán' },
        { sku: 'OL-LOUNGE', name: 'Olive Lounge', category: 'Olive Grove', price: money(24900000), status: 'Đang bán' },
        { sku: 'AD-MOD-L', name: 'Adobe Modular L', category: 'Terra', price: money(39900000), status: 'Hết hàng' },
        { sku: 'SN-DAYBED', name: 'Sunset Daybed', category: 'Daybed', price: money(18900000), status: 'Đang bán' },
        { sku: 'CL-ARM', name: 'Clay Armchair', category: 'Armchair', price: money(12500000), status: 'Ngừng bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '8' },
        { label: 'Giá trị', value: '124' },
        { label: 'Dùng cho biến thể', value: '5' },
        { label: 'Bộ lọc mặt tiền', value: '4' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu sắc', values: 28, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 10, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 16, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Kiểu vòm lưng', values: 5, usage: 'Tuỳ chọn', status: 'Hoạt động' },
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
        { label: 'Biến thể', value: '892' },
        { label: 'Có tồn kho', value: '780' },
        { label: 'Cảnh báo tồn', value: '32' },
        { label: 'Ngừng bán', value: '18' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'TR-ARCO-3S-DN', product: 'Arco Terra 3 chỗ', option: 'Lanh thô / Đất nung / 2m4', stock: 14, price: money(28900000) },
        { sku: 'TR-ARCO-3S-CA', product: 'Arco Terra 3 chỗ', option: 'Lanh thô / Cát / 2m4', stock: 6, price: money(29200000) },
        { sku: 'DN-CURVE-2S-BO', product: 'Dune Curve 2 chỗ', option: 'Bouclé / Cát sáng / 2m2', stock: 20, price: money(21500000) },
        { sku: 'AD-MOD-L-NH', product: 'Adobe Modular L', option: 'Lanh pha / Nâu cháy / 3m0', stock: 0, price: money(39900000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '2.840' },
        { label: 'Sắp hết', value: '32' },
        { label: 'Hết hàng', value: '10' },
        { label: 'Giá trị tồn', value: '14.8 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'TR-ARCO-3S-DN', warehouse: 'Kho TP.HCM', stock: 14, reserved: 4, status: 'Đủ hàng' },
        { sku: 'DN-CURVE-2S-BO', warehouse: 'Kho Hà Nội', stock: 20, reserved: 5, status: 'Đủ hàng' },
        { sku: 'AD-MOD-L-NH', warehouse: 'Kho TP.HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'OL-LOUNGE-XA', warehouse: 'Kho Đà Nẵng', stock: 3, reserved: 1, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '4' },
        { label: 'SP đang giảm giá', value: '48' },
        { label: 'Giảm trung bình', value: '16%' },
        { label: 'Biên lợi nhuận', value: '36%', trend: '+3%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'TR-ARCO-3S', list: money(34500000), sale: money(28900000), dealer: money(25400000), status: 'Đang giảm' },
        { sku: 'AD-MOD-L', list: money(45000000), sale: money(39900000), dealer: money(35200000), status: 'Đang giảm' },
        { sku: 'SN-DAYBED', list: money(18900000), sale: money(18900000), dealer: money(16700000), status: 'Giá gốc' },
        { sku: 'CL-ARM', list: money(12500000), sale: money(12500000), dealer: money(11000000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa12AdminGroup = {
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
        { label: 'Kho', value: '5' },
        { label: 'Tổng tồn', value: '2.840' },
        { label: 'Đơn chờ xuất', value: '42' },
        { label: 'Tỷ lệ lấp đầy', value: '68%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho trung tâm TP.HCM', city: 'TP.HCM', stock: 1080, fill: '74%', status: 'Hoạt động' },
        { warehouse: 'Kho Hà Nội', city: 'Hà Nội', stock: 860, fill: '69%', status: 'Hoạt động' },
        { warehouse: 'Kho Đà Nẵng', city: 'Đà Nẵng', stock: 420, fill: '52%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 480, fill: '61%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '148' },
        { label: 'Chờ duyệt', value: '7' },
        { label: 'Giá trị nhập', value: '3.2 tỷ' },
        { label: 'Giá trị xuất', value: '3.8 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2609-012', type: 'Nhập', warehouse: 'Kho TP.HCM', value: money(382000000), status: 'Hoàn tất' },
        { code: 'PX-2609-078', type: 'Xuất', warehouse: 'Kho Hà Nội', value: money(98500000), status: 'Hoàn tất' },
        { code: 'PN-2609-013', type: 'Nhập', warehouse: 'Kho Đà Nẵng', value: money(72000000), status: 'Chờ duyệt' },
        { code: 'PX-2609-079', type: 'Xuất', warehouse: 'Kho TP.HCM', value: money(21500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '24' },
        { label: 'Đang vận chuyển', value: '5' },
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
        { code: 'CK-0912', from: 'Kho TP.HCM', to: 'Kho Đà Nẵng', items: 14, status: 'Đang vận chuyển' },
        { code: 'CK-0911', from: 'Kho Hà Nội', to: 'Showroom Cầu Giấy', items: 5, status: 'Hoàn tất' },
        { code: 'KK-0903', from: 'Kho TP.HCM', to: '—', items: 320, status: 'Lệch 2 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa12AdminGroup = {
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
        { label: 'Đơn tháng này', value: '368', trend: '+12%' },
        { label: 'Chờ xác nhận', value: '18' },
        { label: 'Doanh thu', value: '5.4 tỷ', trend: '+9%' },
        { label: 'Giá trị TB/đơn', value: '14.7 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'TR-26091001', customer: 'Nguyễn Hạ Vy', channel: 'Website', total: money(28900000), status: 'Đang giao' },
        { code: 'TR-26090998', customer: 'Trần Minh Quân', channel: 'Showroom HCM', total: money(39900000), status: 'Hoàn tất' },
        { code: 'TR-26090995', customer: 'CT TNHH An Phát', channel: 'Đại lý', total: money(142000000), status: 'Chờ xác nhận' },
        { code: 'TR-26090990', customer: 'Lê Thu Trang', channel: 'Website', total: money(21500000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '392' },
        { label: 'Thành công', value: '97.1%' },
        { label: 'Chờ đối soát', value: '14' },
        { label: 'Trả góp', value: '52 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-77213', order: 'TR-26091001', method: 'VNPay', amount: money(28900000), status: 'Thành công' },
        { txn: 'TXN-77210', order: 'TR-26090998', method: 'Chuyển khoản', amount: money(39900000), status: 'Thành công' },
        { txn: 'TXN-77208', order: 'TR-26090995', method: 'Công nợ đại lý', amount: money(142000000), status: 'Chờ đối soát' },
        { txn: 'TXN-77201', order: 'TR-26090990', method: 'Thẻ quốc tế', amount: money(21500000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '42' },
        { label: 'Giao đúng hẹn', value: '95%' },
        { label: 'Đội lắp đặt', value: '9' },
        { label: 'Phí VC tháng', value: '138 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-30112', order: 'TR-26091001', carrier: 'Đội xe nội bộ', eta: '14/09/2026', status: 'Đang giao' },
        { code: 'VD-30109', order: 'TR-26090998', carrier: 'Đội xe nội bộ', eta: '10/09/2026', status: 'Đã giao' },
        { code: 'VD-30105', order: 'TR-26090995', carrier: 'Nhất Tín Logistics', eta: '18/09/2026', status: 'Chờ lấy hàng' },
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
        { label: 'Đã hoàn', value: '8' },
        { label: 'Giá trị hoàn', value: '128 tr' },
        { label: 'Thời gian TB', value: '2.8 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2609-03', order: 'TR-26090990', reason: 'Khách huỷ đơn', amount: money(21500000), status: 'Đã hoàn' },
        { code: 'HT-2609-04', order: 'TR-26090952', reason: 'Sai màu vải', amount: money(5200000), status: 'Đang xử lý' },
        { code: 'HT-2609-05', order: 'TR-26090940', reason: 'Giao trễ hẹn', amount: money(980000), status: 'Chờ duyệt' },
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
        { label: 'Tỷ lệ đổi trả', value: '1.6%' },
        { label: 'Đang thu hồi', value: '2' },
        { label: 'Tái nhập kho', value: '4' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2609-01', product: 'Dune Curve 2 chỗ', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2609-02', product: 'Arco Terra 3 chỗ', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2609-03', product: 'Olive Lounge', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa12AdminGroup = {
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
        { label: 'Khách hàng', value: '9.640' },
        { label: 'Mới tháng này', value: '368', trend: '+8%' },
        { label: 'Khách VIP', value: '248' },
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
        { name: 'Nguyễn Hạ Vy', phone: '0912 xxx 182', tier: 'Vàng', spent: money(64500000), status: 'Hoạt động' },
        { name: 'Trần Minh Quân', phone: '0987 xxx 224', tier: 'Bạc', spent: money(39900000), status: 'Hoạt động' },
        { name: 'CT TNHH An Phát', phone: '0243 xxx 712', tier: 'Đại lý', spent: money(1420000000), status: 'Hoạt động' },
        { name: 'Lê Thu Trang', phone: '0905 xxx 883', tier: 'Thường', spent: money(21500000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '962' },
        { label: 'Đã liên hệ', value: '680' },
        { label: 'Tỷ lệ chốt', value: '17.2%', trend: '+1.8%' },
        { label: 'Lead nóng', value: '72' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Phạm Bảo Ngọc', source: 'Instagram Ads', interest: 'Arco Terra', owner: 'Hà Vy', status: 'Lead nóng' },
        { name: 'Đỗ Văn Kiên', source: 'Google Ads', interest: 'Adobe Modular', owner: 'Minh Quân', status: 'Đã liên hệ' },
        { name: 'Vũ Thanh Trúc', source: 'Showroom HCM', interest: 'Dune Curve', owner: 'Thu Hà', status: 'Đang tư vấn' },
        { name: 'Hoàng Gia Bảo', source: 'Zalo OA', interest: 'Olive Lounge', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '14.280' },
        { label: 'Khách mua lại', value: '35%' },
        { label: 'Chu kỳ mua lại', value: '16 tháng' },
        { label: 'Đơn/khách', value: '1.4' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Nguyễn Hạ Vy', order: 'TR-26091001', date: '11/09/2026', total: money(28900000), status: 'Đang giao' },
        { customer: 'Nguyễn Hạ Vy', order: 'TR-25021432', date: '14/02/2025', total: money(42000000), status: 'Hoàn tất' },
        { customer: 'Trần Minh Quân', order: 'TR-26090998', date: '10/09/2026', total: money(39900000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '28' },
        { label: 'Thời gian phản hồi', value: '38 phút' },
        { label: 'CSAT', value: '4.8/5', trend: '+0.3' },
        { label: 'Bảo hành đang xử lý', value: '8' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-8021', customer: 'Lê Thu Trang', topic: 'Hoàn tiền đơn huỷ', agent: 'Thu Hà', status: 'Đang xử lý' },
        { ticket: 'TK-8018', customer: 'Nguyễn Hạ Vy', topic: 'Đặt lịch giao lắp', agent: 'Hà Vy', status: 'Đã đóng' },
        { ticket: 'TK-8015', customer: 'CT TNHH An Phát', topic: 'Bảo hành khung gỗ', agent: 'Minh Quân', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa12AdminGroup = {
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
        { label: 'Chiến dịch', value: '18' },
        { label: 'Tỷ lệ mở', value: '40.6%', trend: '+2.8%' },
        { label: 'Tỷ lệ click', value: '7.2%' },
        { label: 'Doanh thu quy đổi', value: '640 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Sale đất nung – 25%', segment: 'Toàn bộ khách', sent: 9640, open: '43%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Dune mới', segment: 'Quan tâm bouclé', sent: 2480, open: '48%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 642, open: '54%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 168, open: '61%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '36.4K' },
        { label: 'Tỷ lệ nhận', value: '98.6%' },
        { label: 'Chi phí tháng', value: '24 tr' },
        { label: 'Brandname', value: 'SOFATERRA' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách HN + HCM', sent: 14200, cost: money(9600000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 368, cost: money(260000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 248, cost: money(174000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '19.8K' },
        { label: 'Tỷ lệ click', value: '4.6%' },
        { label: 'Thông báo tháng', value: '14' },
        { label: 'Huỷ đăng ký', value: '0.6%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Giảm 25% bộ sưu tập Terra', trigger: 'Thủ công', reach: 18600, ctr: '5.4%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 2840, ctr: '9.8%', status: 'Đang chạy' },
        { title: 'Showroom mới Đà Nẵng', trigger: 'Vị trí', reach: 980, ctr: '3.4%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '12' },
        { label: 'Lượt dùng', value: '1.684' },
        { label: 'Giá trị giảm', value: '382 tr' },
        { label: 'Tỷ lệ dùng', value: '31%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'TERRA25', value: 'Giảm 25%', condition: 'Đơn từ 18 triệu', used: 642, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Nội thành HN/HCM', used: 880, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 72, status: 'Đang chạy' },
        { code: 'AUG20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 90, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '198' },
        { label: 'Đơn giới thiệu', value: '286' },
        { label: 'Hoa hồng tháng', value: '218 tr' },
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
        { partner: 'Nội Thất Review', channel: 'YouTube', orders: 62, commission: money(68400000), status: 'Đang hợp tác' },
        { partner: 'Décor Blog VN', channel: 'Blog', orders: 38, commission: money(28200000), status: 'Đang hợp tác' },
        { partner: 'Homey TikTok', channel: 'TikTok', orders: 24, commission: money(18200000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa12AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '5.4 tỷ', trend: '+9%' },
        { label: 'Lợi nhuận gộp', value: '1.9 tỷ' },
        { label: 'Đơn hàng', value: '368' },
        { label: 'AOV', value: '14.7 tr', trend: '+2%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 162, revenue: money(2240000000), share: '41%', growth: '+14%' },
        { channel: 'Showroom', orders: 128, revenue: money(1860000000), share: '34%', growth: '+5%' },
        { channel: 'Đại lý B2B', orders: 48, revenue: money(1020000000), share: '19%', growth: '+10%' },
        { channel: 'Sàn TMĐT', orders: 30, revenue: money(180000000), share: '6%', growth: '-2%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '28' },
        { label: 'Top 10 đóng góp', value: '48%' },
        { label: 'SP không bán được', value: '18' },
        { label: 'Vòng quay tồn', value: '3.8' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Arco Terra 3 chỗ', sold: 72, revenue: money(2080800000), stock: 14 },
        { product: 'Dune Curve 2 chỗ', sold: 58, revenue: money(1247000000), stock: 20 },
        { product: 'Adobe Modular L', sold: 42, revenue: money(1675800000), stock: 0 },
        { product: 'Olive Lounge', sold: 38, revenue: money(946200000), stock: 3 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '198K', trend: '+7%' },
        { label: 'Người dùng mới', value: '64%' },
        { label: 'Thời gian TB', value: '3:28' },
        { label: 'Tỷ lệ thoát', value: '40%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 86400, bounce: '36%', conversion: '2.2%' },
        { source: 'Instagram', sessions: 42800, bounce: '44%', conversion: '1.4%' },
        { source: 'Direct', sessions: 32200, bounce: '32%', conversion: '2.8%' },
        { source: 'Referral', sessions: 18600, bounce: '42%', conversion: '1.7%' },
        { source: 'Email', sessions: 14200, bounce: '26%', conversion: '4.6%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.8' },
        { label: 'Thêm giỏ', value: '14.2K' },
        { label: 'Bỏ giỏ', value: '64%' },
        { label: 'Xem swatch', value: '7.2K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 198000, drop: '20%', time: '0:52' },
        { step: 'Xem bộ sưu tập', users: 158000, drop: '28%', time: '1:18' },
        { step: 'Xem chi tiết SP', users: 108000, drop: '44%', time: '2:24' },
        { step: 'Thêm vào giỏ', users: 14200, drop: '64%', time: '0:20' },
        { step: 'Hoàn tất thanh toán', users: 4600, drop: '—', time: '2:48' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.32%', trend: '+0.4%' },
        { label: 'CR mobile', value: '1.78%' },
        { label: 'CR desktop', value: '3.12%' },
        { label: 'CR có tư vấn', value: '12.6%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 64200, orders: 1142, cr: '1.78%' },
        { segment: 'Desktop – Organic', sessions: 22400, orders: 699, cr: '3.12%' },
        { segment: 'Email remarketing', sessions: 14200, orders: 653, cr: '4.60%' },
        { segment: 'Tư vấn showroom', sessions: 3200, orders: 403, cr: '12.6%' },
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
      { label: 'URL theo dõi', value: '42' },
      { label: 'Điểm trung bình', value: '90/100' },
      { label: 'Thiếu meta', value: '2' },
      { label: 'Từ khoá top 10', value: '22' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA TERRA`, keyword: 'sofa đất nung', position: 3, status: 'Tốt' },
      { url: `${sample}/linen`, title: 'Sofa vải lanh thô cao cấp', keyword: 'sofa vải lanh', position: 6, status: 'Tốt' },
      { url: `${sample}/boucle`, title: '', keyword: 'sofa bouclé', position: 14, status: 'Thiếu meta' },
      { url: `${sample}/goc-l`, title: 'Sofa góc L Adobe Modular', keyword: 'sofa góc l đất nung', position: 9, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa12AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa12/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa12/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa12/collections'),
    seoPage('project', 'Trang dự án', '/sofa12/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa12/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa12/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa12/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.248' },
        { label: 'Đã index', value: '1.182' },
        { label: 'Lỗi', value: '4' },
        { label: 'Cập nhật cuối', value: '11/09' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 286, indexed: 278, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 18, indexed: 18, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 96, indexed: 92, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 38, indexed: 32, status: '4 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '10' },
        { label: 'Đường dẫn chặn', value: '6' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '01/09' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa12/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa12/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '7' },
        { label: 'URL áp dụng', value: '986' },
        { label: 'Cảnh báo', value: '3' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 286, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 986, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 96, status: '3 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 8, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa12AdminGroup = {
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
        { label: 'Tài khoản', value: '28' },
        { label: 'Đang hoạt động', value: '25' },
        { label: 'Bật 2FA', value: '20' },
        { label: 'Bị khoá', value: '1' },
      ],
      [
        { key: 'name', label: 'Người dùng' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Vai trò' },
        { key: 'last', label: 'Đăng nhập cuối' },
        STATUS_COL,
      ],
      [
        { name: 'Hà Vy', email: 'havy@sofaterra.vn', role: 'Quản trị hệ thống', last: '11/09/2026 09:08', status: 'Hoạt động' },
        { name: 'Minh Quân', email: 'quan@sofaterra.vn', role: 'Quản lý bán hàng', last: '10/09/2026 17:20', status: 'Hoạt động' },
        { name: 'Thu Hà', email: 'ha@sofaterra.vn', role: 'CSKH', last: '11/09/2026 08:02', status: 'Hoạt động' },
        { name: 'Gia Bảo', email: 'bao@sofaterra.vn', role: 'Biên tập nội dung', last: '02/08/2026 10:14', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '6' },
        { label: 'Vai trò tuỳ chỉnh', value: '2' },
        { label: 'Người dùng gán', value: '28' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 2, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 6, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 4, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 10, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 3, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '28' },
        { label: 'Quyền', value: '112' },
        { label: 'Quyền nhạy cảm', value: '12' },
        { label: 'Cần phê duyệt', value: '5' },
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
        { label: 'Sự kiện hôm nay', value: '982' },
        { label: 'Đăng nhập thất bại', value: '8' },
        { label: 'Thay đổi cấu hình', value: '6' },
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
        { time: '11/09 09:08', user: 'Hà Vy', action: 'Xuất bản trang chủ', ip: '113.20.x.14', status: 'Thành công' },
        { time: '11/09 08:41', user: 'Thu Hà', action: 'Duyệt hoàn tiền HT-2609-03', ip: '113.20.x.22', status: 'Thành công' },
        { time: '11/09 07:58', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.203', status: 'Từ chối' },
        { time: '10/09 22:10', user: 'Minh Quân', action: 'Sửa bảng giá đại lý', ip: '113.20.x.31', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA12_ADMIN_GROUPS: Sofa12AdminGroup[] = [
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

export function findSofa12AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA12_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA12_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '5.4 tỷ', trend: '+9%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '368', trend: '+12%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '368', trend: '+8%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.32%', trend: '+0.4%', color: 'warning' as const },
];

export const SOFA12_ADMIN_ACTIVITIES = [
  { time: '09:08', text: 'Hà Vy xuất bản lại Trang chủ', tag: 'CMS' },
  { time: '08:41', text: 'Duyệt hoàn tiền HT-2609-03 (21.5tr)', tag: 'Đơn hàng' },
  { time: '08:02', text: '18 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch "Sale đất nung" đạt 43% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU AD-MOD-L-NH hết hàng tại Kho TP.HCM', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA12_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA12_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [2.8, 3.2, 3.6, 3.9, 4.2, 4.6, 5.0, 5.4, 5.1, 5.6, 6.0, 6.6] },
  { name: 'Mục tiêu (tỷ)', data: [3.0, 3.3, 3.7, 4.0, 4.4, 4.8, 5.2, 5.5, 5.8, 6.2, 6.5, 7.0] },
];

export const SOFA12_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [162, 188, 204, 220, 238, 252, 310, 368, 340, 360, 396, 440] },
];

export const SOFA12_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [41, 34, 19, 6, 9],
};

export const SOFA12_ADMIN_TOP_PRODUCTS = {
  labels: ['Arco Terra 3S', 'Dune Curve 2S', 'Adobe Modular L', 'Olive Lounge', 'Sunset Daybed'],
  series: [72, 58, 42, 38, 28],
};
