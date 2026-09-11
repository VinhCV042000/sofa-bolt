// SOFA7 ADMIN — cấu hình khu vực quản trị (dữ liệu demo)
// Theme: Concrete & Electric Yellow — "Urban Street / Industrial Loft"
// ----------------------------------------------------------------------

export const SOFA7_ADMIN_ROOT = '/sofa7/admin';

export type Sofa7AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa7AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa7AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa7AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa7AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa7AdminModule['stats'],
  columns: Sofa7AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa7AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa7AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Khối nội dung', value: '10' },
      { label: 'Lượt xem 30 ngày', value: '32.8K', trend: '+22%' },
      { label: 'Bản nháp', value: '2' },
      { label: 'Cập nhật cuối', value: '12/08' },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    [
      { block: 'Hero Urban Loft', type: 'Banner', status: 'Đã xuất bản', updated: '12/08/2026', author: 'Việt Anh' },
      { block: 'Giới thiệu sofa7', type: 'Rich text', status: 'Đã xuất bản', updated: '10/08/2026', author: 'Mai Linh' },
      { block: 'Bộ sưu tập Street Pop', type: 'Danh sách SP', status: 'Bản nháp', updated: '09/08/2026', author: 'Khoa Nguyễn' },
      { block: 'Khách hàng vibe', type: 'Slider', status: 'Đã xuất bản', updated: '02/08/2026', author: 'Việt Anh' },
      { block: 'CTA Giao 24h', type: 'Banner', status: 'Tạm ẩn', updated: '28/07/2026', author: 'Mai Linh' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa7AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa7'),
    cmsPage('about', 'Trang giới thiệu', '/sofa7/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa7/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa7/policy'),
    cmsPage('faq', 'Trang FAQ', '/sofa7/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '92' },
        { label: 'Chờ duyệt', value: '4' },
        { label: 'Lượt đọc / tháng', value: '68K', trend: '+16%' },
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
        { title: '10 loft inspiration cho studio nhỏ', category: 'Inspiration', status: 'Đã xuất bản', views: 14200, updated: '11/08/2026' },
        { title: 'Phối màu velvet cho không gian industrial', category: 'Decor', status: 'Đã xuất bản', views: 9800, updated: '05/08/2026' },
        { title: 'Xu hướng sofa urban 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '13/08/2026' },
        { title: 'Bảo quản da thật trong loft', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '12/08/2026' },
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
        { label: 'Cấp sâu nhất', value: '2' },
      ],
      [
        { key: 'menu', label: 'Menu' },
        { key: 'position', label: 'Vị trí' },
        { key: 'items', label: 'Số mục', type: 'number' },
        STATUS_COL,
      ],
      [
        { menu: 'Menu chính Urban', position: 'Header', items: 22, status: 'Đã xuất bản' },
        { menu: 'Menu bộ sưu tập', position: 'Header', items: 14, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 8, status: 'Đã xuất bản' },
        { menu: 'Menu mobile', position: 'Mobile', items: 12, status: 'Bản nháp' },
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
        { label: 'CTR trung bình', value: '4.8%', trend: '+1.2%' },
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
        { name: 'Flash 24h — Giảm 30%', position: 'Top bar', schedule: '14/08 – 16/08', status: 'Đang chạy' },
        { name: 'Giao 24h nội thành', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Neon Lounge', position: 'Danh mục', schedule: '05/08 – 25/08', status: 'Đang chạy' },
        { name: 'Trả góp 0% APR', position: 'Chi tiết SP', schedule: '01/07 – 31/07', status: 'Hết hạn' },
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
        { label: 'Lượt click', value: '8.6K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ Urban', slides: 5, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập Street Pop', slides: 4, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Gallery loft', slides: 3, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO nội dung',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '88%' },
        { label: 'Thiếu meta', value: '3' },
        { label: 'Điểm SEO', value: '90/100', trend: '+6' },
        { label: 'Từ khoá top 10', value: '86' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa7', title: 'SOFA7 — Sofa urban loft cao cấp', length: 52, status: 'Tốt' },
        { page: '/sofa7/about', title: 'Về SOFA7 | Urban Loft', length: 38, status: 'Tốt' },
        { page: '/sofa7/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa7/policy', title: 'Chính sách mua hàng SOFA7', length: 46, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '14' },
        { label: 'Đã xuất bản', value: '11' },
        { label: 'Bản nháp', value: '3' },
        { label: 'Lượt xem', value: '22K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn chọn size sofa loft', slug: '/sofa7/huong-dan-size', status: 'Đã xuất bản', updated: '08/08/2026' },
        { title: 'Cam kết khung thép 10 năm', slug: '/sofa7/cam-ket-thep', status: 'Đã xuất bản', updated: '01/08/2026' },
        { title: 'Mix màu velvet custom', slug: '/sofa7/mix-mau-velvet', status: 'Bản nháp', updated: '13/08/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa7AdminGroup = {
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
        { label: 'Danh mục', value: '12' },
        { label: 'Danh mục cha', value: '4' },
        { label: 'Sản phẩm gán', value: '186' },
        { label: 'Ẩn', value: '1' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Raw Concrete', parent: 'Bộ sưu tập', products: 42, status: 'Hiển thị' },
        { name: 'Street Pop', parent: 'Bộ sưu tập', products: 38, status: 'Hiển thị' },
        { name: 'Neon Lounge', parent: 'Bộ sưu tập', products: 28, status: 'Hiển thị' },
        { name: 'Blue Graffiti', parent: 'Bộ sưu tập', products: 32, status: 'Hiển thị' },
        { name: 'Sofa da thật', parent: 'Theo chất liệu', products: 46, status: 'Hiển thị' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '186' },
        { label: 'Đang bán', value: '172' },
        { label: 'Hết hàng', value: '6' },
        { label: 'Mới tháng này', value: '12', trend: '+12' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'collection', label: 'Bộ sưu tập' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF7-BRICK-01', name: 'Sofa Brick Leather', collection: 'Raw Concrete', price: money(22500000), status: 'Đang bán' },
        { sku: 'SF7-RED-02', name: 'Sofa Street Red', collection: 'Street Pop', price: money(13900000), status: 'Đang bán' },
        { sku: 'SF7-NEON-03', name: 'Sofa Neon Orange', collection: 'Neon Lounge', price: money(16500000), status: 'Đang bán' },
        { sku: 'SF7-BLUE-04', name: 'Sofa Blue Graffiti', collection: 'Blue Graffiti', price: money(14900000), status: 'Hết hàng' },
        { sku: 'SF7-GREEN-05', name: 'Sofa Green Velvet', collection: 'Street Pop', price: money(17500000), status: 'Đang bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '6' },
        { label: 'Giá trị', value: '98' },
        { label: 'Dùng cho biến thể', value: '4' },
        { label: 'Bộ lọc mặt tiền', value: '3' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu velvet', values: 40, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 8, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 12, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Loại khung', values: 4, usage: 'Tuỳ chọn', status: 'Hoạt động' },
        { name: 'Loại da', values: 6, usage: 'Tuỳ chọn', status: 'Tạm ẩn' },
      ],
      ['Thêm thuộc tính']
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Tổ hợp SKU theo màu, chất liệu và kích thước.',
      'solar:layers-bold-duotone',
      [
        { label: 'Biến thể', value: '648' },
        { label: 'Có tồn kho', value: '580' },
        { label: 'Cảnh báo tồn', value: '22' },
        { label: 'Ngừng bán', value: '12' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF7-BRICK-01-BLACK', product: 'Sofa Brick Leather', option: 'Da / Đen / 2m4', stock: 14, price: money(22500000) },
        { sku: 'SF7-BRICK-01-BROWN', product: 'Sofa Brick Leather', option: 'Da / Nâu / 2m4', stock: 6, price: money(22900000) },
        { sku: 'SF7-RED-02-RED', product: 'Sofa Street Red', option: 'Velvet / Đỏ / 2m2', stock: 20, price: money(13900000) },
        { sku: 'SF7-BLUE-04-BLUE', product: 'Sofa Blue Graffiti', option: 'Velour / Xanh / 2m6', stock: 0, price: money(14900000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '1.860' },
        { label: 'Sắp hết', value: '22' },
        { label: 'Hết hàng', value: '6' },
        { label: 'Giá trị tồn', value: '14.2 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF7-BRICK-01-BLACK', warehouse: 'Kho Urban HN', stock: 14, reserved: 4, status: 'Đủ hàng' },
        { sku: 'SF7-RED-02-RED', warehouse: 'Kho Urban HCM', stock: 20, reserved: 6, status: 'Đủ hàng' },
        { sku: 'SF7-BLUE-04-BLUE', warehouse: 'Kho Urban HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF7-NEON-03-ORANGE', warehouse: 'Showroom Urban HN', stock: 3, reserved: 1, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '3' },
        { label: 'SP đang giảm giá', value: '42' },
        { label: 'Giảm trung bình', value: '24%' },
        { label: 'Biên lợi nhuận', value: '36%', trend: '+2%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF7-BRICK-01', list: money(29000000), sale: money(22500000), dealer: money(19800000), status: 'Đang giảm' },
        { sku: 'SF7-RED-02', list: money(18000000), sale: money(13900000), dealer: money(12232000), status: 'Đang giảm' },
        { sku: 'SF7-NEON-03', list: money(21000000), sale: money(16500000), dealer: money(14520000), status: 'Đang giảm' },
        { sku: 'SF7-GREEN-05', list: money(17500000), sale: money(17500000), dealer: money(15400000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa7AdminGroup = {
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
        { label: 'Kho', value: '4' },
        { label: 'Tổng tồn', value: '1.860' },
        { label: 'Đơn chờ xuất', value: '36' },
        { label: 'Tỷ lệ lấp đầy', value: '65%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho Urban Hà Nội', city: 'Hà Nội', stock: 780, fill: '72%', status: 'Hoạt động' },
        { warehouse: 'Kho Urban HCM', city: 'HCM', stock: 680, fill: '68%', status: 'Hoạt động' },
        { warehouse: 'Showroom Urban HN', city: 'Hà Nội', stock: 220, fill: '48%', status: 'Hoạt động' },
        { warehouse: 'Showroom Urban HCM', city: 'HCM', stock: 180, fill: '42%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '98' },
        { label: 'Chờ duyệt', value: '4' },
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
        { code: 'PN-2608-012', type: 'Nhập', warehouse: 'Kho Urban HN', value: money(382000000), status: 'Hoàn tất' },
        { code: 'PX-2608-078', type: 'Xuất', warehouse: 'Kho Urban HCM', value: money(86500000), status: 'Hoàn tất' },
        { code: 'PN-2608-013', type: 'Nhập', warehouse: 'Showroom Urban HN', value: money(68000000), status: 'Chờ duyệt' },
        { code: 'PX-2608-079', type: 'Xuất', warehouse: 'Kho Urban HN', value: money(22500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '18' },
        { label: 'Đang vận chuyển', value: '3' },
        { label: 'Lệch kiểm kê', value: '1' },
        { label: 'Kiểm kê gần nhất', value: '31/07' },
      ],
      [
        { key: 'code', label: 'Mã lệnh' },
        { key: 'from', label: 'Từ kho' },
        { key: 'to', label: 'Đến kho' },
        { key: 'items', label: 'Số món', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'CK-0810', from: 'Kho Urban HCM', to: 'Showroom Urban HCM', items: 8, status: 'Đang vận chuyển' },
        { code: 'CK-0809', from: 'Kho Urban HN', to: 'Showroom Urban HN', items: 6, status: 'Hoàn tất' },
        { code: 'KK-0802', from: 'Kho Urban HN', to: '—', items: 220, status: 'Lệch 1 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa7AdminGroup = {
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
        { label: 'Đơn tháng này', value: '286', trend: '+18%' },
        { label: 'Chờ xác nhận', value: '14' },
        { label: 'Doanh thu', value: '4.6 tỷ', trend: '+16%' },
        { label: 'Giá trị TB/đơn', value: '16.1 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF7-26081201', customer: 'Đặng Việt', channel: 'Website', total: money(22500000), status: 'Đang giao' },
        { code: 'SF7-26081198', customer: 'Lê Mai', channel: 'Showroom HN', total: money(17500000), status: 'Hoàn tất' },
        { code: 'SF7-26081195', customer: 'Trần Khoa', channel: 'Showroom HCM', total: money(14900000), status: 'Chờ xác nhận' },
        { code: 'SF7-26081190', customer: 'Phương Anh', channel: 'Website', total: money(16500000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '298' },
        { label: 'Thành công', value: '97.2%' },
        { label: 'Chờ đối soát', value: '8' },
        { label: 'Trả góp', value: '36 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-78218', order: 'SF7-26081201', method: 'VNPay', amount: money(22500000), status: 'Thành công' },
        { txn: 'TXN-78215', order: 'SF7-26081198', method: 'Chuyển khoản', amount: money(17500000), status: 'Thành công' },
        { txn: 'TXN-78212', order: 'SF7-26081195', method: 'Thẻ quốc tế', amount: money(14900000), status: 'Chờ đối soát' },
        { txn: 'TXN-78208', order: 'SF7-26081190', method: 'Thẻ quốc tế', amount: money(16500000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao hàng 24h, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '36' },
        { label: 'Giao đúng hẹn', value: '98%' },
        { label: 'Đội lắp đặt', value: '6' },
        { label: 'Phí VC tháng', value: '86 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đội giao' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-30118', order: 'SF7-26081201', carrier: 'Đội Urban HN', eta: '16/08/2026', status: 'Đang giao' },
        { code: 'VD-30115', order: 'SF7-26081198', carrier: 'Đội Urban HN', eta: '12/08/2026', status: 'Đã giao' },
        { code: 'VD-30110', order: 'SF7-26081195', carrier: 'Đội Urban HCM', eta: '20/08/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '6' },
        { label: 'Đã hoàn', value: '4' },
        { label: 'Giá trị hoàn', value: '62 tr' },
        { label: 'Thời gian TB', value: '2.0 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2608-04', order: 'SF7-26081190', reason: 'Khách huỷ đơn', amount: money(16500000), status: 'Đã hoàn' },
        { code: 'HT-2608-05', order: 'SF7-26081142', reason: 'Sai màu velvet', amount: money(4200000), status: 'Đang xử lý' },
        { code: 'HT-2608-06', order: 'SF7-26081128', reason: 'Giao trễ hẹn', amount: money(800000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '4' },
        { label: 'Tỷ lệ đổi trả', value: '1.4%' },
        { label: 'Đang thu hồi', value: '1' },
        { label: 'Tái nhập kho', value: '2' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2608-02', product: 'Sofa Street Red', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2608-03', product: 'Sofa Brick Leather', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2608-04', product: 'Sofa Neon Orange', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa7AdminGroup = {
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
        { label: 'Khách hàng', value: '6.420' },
        { label: 'Mới tháng này', value: '286', trend: '+18%' },
        { label: 'Khách VIP', value: '124' },
        { label: 'LTV trung bình', value: '18 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Đặng Việt', phone: '0912 xxx 412', tier: 'Vàng', spent: money(44000000), status: 'Hoạt động' },
        { name: 'Lê Mai', phone: '0987 xxx 208', tier: 'Bạc', spent: money(17500000), status: 'Hoạt động' },
        { name: 'Trần Khoa', phone: '0905 xxx 772', tier: 'Vàng', spent: money(38400000), status: 'Hoạt động' },
        { name: 'Phương Anh', phone: '0243 xxx 520', tier: 'Thường', spent: money(16500000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '682' },
        { label: 'Đã liên hệ', value: '486' },
        { label: 'Tỷ lệ chốt', value: '24.8%', trend: '+4.2%' },
        { label: 'Lead nóng', value: '42' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Nguyễn Bảo', source: 'TikTok Ads', interest: 'Street Pop', owner: 'Việt Anh', status: 'Lead nóng' },
        { name: 'Trần Lam', source: 'Google Ads', interest: 'Sofa da thật', owner: 'Mai Linh', status: 'Đã liên hệ' },
        { name: 'Vũ Phong', source: 'Showroom HCM', interest: 'Neon Lounge', owner: 'Khoa Nguyễn', status: 'Đang tư vấn' },
        { name: 'Lý Khanh', source: 'Instagram', interest: 'Blue Graffiti', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '8.640' },
        { label: 'Khách mua lại', value: '36%' },
        { label: 'Chu kỳ mua lại', value: '10 tháng' },
        { label: 'Đơn/khách', value: '1.3' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Đặng Việt', order: 'SF7-26081201', date: '12/08/2026', total: money(22500000), status: 'Đang giao' },
        { customer: 'Đặng Việt', order: 'SF7-25110418', date: '04/11/2025', total: money(32000000), status: 'Hoàn tất' },
        { customer: 'Lê Mai', order: 'SF7-26081198', date: '11/08/2026', total: money(17500000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '18' },
        { label: 'Thời gian phản hồi', value: '22 phút' },
        { label: 'CSAT', value: '4.8/5', trend: '+0.2' },
        { label: 'Bảo hành đang xử lý', value: '4' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-8021', customer: 'Phương Anh', topic: 'Hoàn tiền đơn huỷ', agent: 'Mai Linh', status: 'Đang xử lý' },
        { ticket: 'TK-8018', customer: 'Đặng Việt', topic: 'Đặt lịch giao 24h', agent: 'Việt Anh', status: 'Đã đóng' },
        { ticket: 'TK-8015', customer: 'Trần Khoa', topic: 'Bảo hành khung thép', agent: 'Khoa Nguyễn', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa7AdminGroup = {
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
        { label: 'Chiến dịch', value: '14' },
        { label: 'Tỷ lệ mở', value: '36.8%', trend: '+2.8%' },
        { label: 'Tỷ lệ click', value: '7.2%' },
        { label: 'Doanh thu quy đổi', value: '486 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash 24h — Giảm 30%', segment: 'Toàn bộ khách', sent: 6420, open: '42%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Neon Lounge', segment: 'Quan tâm velvet', sent: 1680, open: '48%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 286, open: '54%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 86, open: '62%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '22.4K' },
        { label: 'Tỷ lệ nhận', value: '98.6%' },
        { label: 'Chi phí tháng', value: '16 tr' },
        { label: 'Brandname', value: 'SOFA7' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale 24h', segment: 'Khách HN + HCM', sent: 8400, cost: money(5880000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao', segment: 'Tự động', sent: 186, cost: money(130000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 124, cost: money(86000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '12.8K' },
        { label: 'Tỷ lệ click', value: '6.4%' },
        { label: 'Thông báo tháng', value: '12' },
        { label: 'Huỷ đăng ký', value: '0.5%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Flash 24h — Giảm 30%', trigger: 'Thủ công', reach: 12800, ctr: '8.2%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 1860, ctr: '12.4%', status: 'Đang chạy' },
        { title: 'Showroom Urban mới', trigger: 'Vị trí', reach: 620, ctr: '4.8%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '8' },
        { label: 'Lượt dùng', value: '986' },
        { label: 'Giá trị giảm', value: '286 tr' },
        { label: 'Tỷ lệ dùng', value: '32%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'FLASH30', value: 'Giảm 30%', condition: 'Đơn từ 15 triệu', used: 420, status: 'Đang chạy' },
        { code: 'SHIP24H', value: 'Miễn phí giao 24h', condition: 'Nội thành HN/HCM', used: 480, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 42, status: 'Đang chạy' },
        { code: 'JULY20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 44, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '86' },
        { label: 'Đơn giới thiệu', value: '142' },
        { label: 'Hoa hồng tháng', value: '86 tr' },
        { label: 'Tỷ lệ hoa hồng', value: '6%' },
      ],
      [
        { key: 'partner', label: 'Cộng tác viên' },
        { key: 'channel', label: 'Kênh' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'commission', label: 'Hoa hồng', type: 'money' },
        STATUS_COL,
      ],
      [
        { partner: 'Loft Living Review', channel: 'YouTube', orders: 32, commission: money(38400000), status: 'Đang hợp tác' },
        { partner: 'Urban Décor Blog', channel: 'Blog', orders: 18, commission: money(12400000), status: 'Đang hợp tác' },
        { partner: 'Street Style Tips', channel: 'TikTok', orders: 12, commission: money(6800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa7AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '4.6 tỷ', trend: '+16%' },
        { label: 'Lợi nhuận gộp', value: '1.7 tỷ' },
        { label: 'Đơn hàng', value: '286' },
        { label: 'AOV', value: '16.1 tr', trend: '+4%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 142, revenue: money(2280000000), share: '50%', growth: '+22%' },
        { channel: 'Showroom', orders: 98, revenue: money(1640000000), share: '36%', growth: '+10%' },
        { channel: 'Đại lý B2B', orders: 32, revenue: money(580000000), share: '12%', growth: '+6%' },
        { channel: 'Sàn TMĐT', orders: 14, revenue: money(100000000), share: '2%', growth: '-4%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '18' },
        { label: 'Top 10 đóng góp', value: '48%' },
        { label: 'SP không bán được', value: '8' },
        { label: 'Vòng quay tồn', value: '3.6' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Brick Leather', sold: 48, revenue: money(1080000000), stock: 14 },
        { product: 'Sofa Street Red', sold: 42, revenue: money(583800000), stock: 20 },
        { product: 'Sofa Neon Orange', sold: 36, revenue: money(594000000), stock: 3 },
        { product: 'Sofa Blue Graffiti', sold: 28, revenue: money(417200000), stock: 0 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '142K', trend: '+18%' },
        { label: 'Người dùng mới', value: '72%' },
        { label: 'Thời gian TB', value: '3:42' },
        { label: 'Tỷ lệ thoát', value: '44%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 48200, bounce: '40%', conversion: '2.8%' },
        { source: 'TikTok', sessions: 38400, bounce: '46%', conversion: '2.2%' },
        { source: 'Direct', sessions: 24800, bounce: '36%', conversion: '3.6%' },
        { source: 'Instagram', sessions: 18600, bounce: '48%', conversion: '1.8%' },
        { source: 'Email', sessions: 12400, bounce: '28%', conversion: '5.2%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.8' },
        { label: 'Thêm giỏ', value: '8.6K' },
        { label: 'Bỏ giỏ', value: '64%' },
        { label: 'Xem gallery', value: '6.2K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 142000, drop: '24%', time: '0:42' },
        { step: 'Xem bộ sưu tập', users: 108000, drop: '32%', time: '1:28' },
        { step: 'Xem chi tiết SP', users: 73000, drop: '48%', time: '2:18' },
        { step: 'Thêm vào giỏ', users: 8600, drop: '64%', time: '0:22' },
        { step: 'Hoàn tất thanh toán', users: 3080, drop: '—', time: '2:48' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.16%', trend: '+0.4%' },
        { label: 'CR mobile', value: '1.72%' },
        { label: 'CR desktop', value: '3.12%' },
        { label: 'CR có tư vấn', value: '12.8%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 48200, orders: 829, cr: '1.72%' },
        { segment: 'Desktop – Organic', sessions: 16800, orders: 524, cr: '3.12%' },
        { segment: 'Email remarketing', sessions: 12400, orders: 644, cr: '5.20%' },
        { segment: 'Tư vấn showroom', sessions: 2200, orders: 282, cr: '12.8%' },
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
      { label: 'URL theo dõi', value: '36' },
      { label: 'Điểm trung bình', value: '88/100' },
      { label: 'Thiếu meta', value: '2' },
      { label: 'Từ khoá top 10', value: '42' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA7`, keyword: 'sofa urban', position: 4, status: 'Tốt' },
      { url: `${sample}/da-that`, title: 'Sofa da thật industrial', keyword: 'sofa da industrial', position: 6, status: 'Tốt' },
      { url: `${sample}/velvet`, title: '', keyword: 'sofa velvet neon', position: 16, status: 'Thiếu meta' },
      { url: `${sample}/loft`, title: 'Sofa cho căn loft', keyword: 'sofa loft', position: 9, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa7AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa7/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa7/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa7/collections'),
    seoPage('project', 'Trang dự án', '/sofa7/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa7/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa7/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa7/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '986' },
        { label: 'Đã index', value: '924' },
        { label: 'Lỗi', value: '4' },
        { label: 'Cập nhật cuối', value: '13/08' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 186, indexed: 178, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 12, indexed: 12, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 92, indexed: 88, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 36, indexed: 32, status: '4 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '8' },
        { label: 'Đường dẫn chặn', value: '4' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '02/08' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa7/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa7/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '6' },
        { label: 'URL áp dụng', value: '786' },
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
        { type: 'Product', scope: 'Trang sản phẩm', urls: 186, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 786, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 92, status: '2 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 4, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa7AdminGroup = {
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
        { label: 'Tài khoản', value: '22' },
        { label: 'Đang hoạt động', value: '19' },
        { label: 'Bật 2FA', value: '14' },
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
        { name: 'Việt Anh', email: 'vietanh@sofa7.vn', role: 'Quản trị hệ thống', last: '15/08/2026 09:12', status: 'Hoạt động' },
        { name: 'Mai Linh', email: 'linh@sofa7.vn', role: 'Quản lý bán hàng', last: '14/08/2026 17:40', status: 'Hoạt động' },
        { name: 'Khoa Nguyễn', email: 'khoa@sofa7.vn', role: 'CSKH', last: '15/08/2026 08:02', status: 'Hoạt động' },
        { name: 'Bảo Trân', email: 'tran@sofa7.vn', role: 'Biên tập nội dung', last: '02/07/2026 10:20', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '5' },
        { label: 'Vai trò tuỳ chỉnh', value: '1' },
        { label: 'Người dùng gán', value: '22' },
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
        { role: 'Quản lý bán hàng', users: 4, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 3, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 8, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 2, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '24' },
        { label: 'Quyền', value: '96' },
        { label: 'Quyền nhạy cảm', value: '10' },
        { label: 'Cần phê duyệt', value: '3' },
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
        { label: 'Sự kiện hôm nay', value: '742' },
        { label: 'Đăng nhập thất bại', value: '6' },
        { label: 'Thay đổi cấu hình', value: '4' },
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
        { time: '15/08 09:12', user: 'Việt Anh', action: 'Xuất bản trang chủ', ip: '113.20.x.14', status: 'Thành công' },
        { time: '15/08 08:41', user: 'Mai Linh', action: 'Duyệt hoàn tiền HT-2608-04', ip: '113.20.x.22', status: 'Thành công' },
        { time: '15/08 07:58', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.203', status: 'Từ chối' },
        { time: '14/08 22:10', user: 'Khoa Nguyễn', action: 'Sửa bảng giá đại lý', ip: '113.20.x.31', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

// ----------------------------------------------------------------------

export const SOFA7_ADMIN_GROUPS: Sofa7AdminGroup[] = [
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

export function findSofa7AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA7_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA7_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '4.6 tỷ', trend: '+16%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '286', trend: '+18%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '286', trend: '+18%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.16%', trend: '+0.4%', color: 'warning' as const },
];

export const SOFA7_ADMIN_ACTIVITIES = [
  { time: '09:12', text: 'Việt Anh xuất bản lại Trang chủ Urban', tag: 'CMS' },
  { time: '08:41', text: 'Duyệt hoàn tiền HT-2608-04 (16.5tr)', tag: 'Đơn hàng' },
  { time: '08:02', text: '14 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch "Flash 24h" đạt 42% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU SF7-BLUE-04-BLUE hết hàng tại Kho Urban HCM', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA7_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA7_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.2, 3.8, 4.1, 4.6, 5.0, 5.4, 6.1, 6.8, 6.2, 6.9, 7.4, 8.1] },
  { name: 'Mục tiêu (tỷ)', data: [3.5, 3.9, 4.3, 4.7, 5.2, 5.6, 6.0, 6.5, 6.8, 7.2, 7.6, 8.0] },
];

export const SOFA7_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [210, 245, 268, 289, 310, 330, 402, 486, 448, 470, 512, 560] },
];

export const SOFA7_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [38, 27, 18, 11, 6],
};

export const SOFA7_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Terra 3S', 'Sofa Sage L', 'Armchair Clay', 'Sofa Bed Sand', 'Daybed Forest'],
  series: [186, 154, 132, 98, 76],
};
