// SOFA8 ADMIN — cấu hình khu vực quản trị (dữ liệu demo)
// Theme: Ocean Blue & Sand — "Coastal Mediterranean"
// ----------------------------------------------------------------------

export const SOFA8_ADMIN_ROOT = '/sofa8/admin';

export type Sofa8AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa8AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa8AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa8AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa8AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa8AdminModule['stats'],
  columns: Sofa8AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa8AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa8AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Khối nội dung', value: '8' },
      { label: 'Lượt xem 30 ngày', value: '24.6K', trend: '+18%' },
      { label: 'Bản nháp', value: '1' },
      { label: 'Cập nhật cuối', value: '11/08' },
    ],
    [
      { key: 'block', label: 'Khối nội dung' },
      { key: 'type', label: 'Loại' },
      STATUS_COL,
      { key: 'updated', label: 'Cập nhật' },
      { key: 'author', label: 'Người sửa' },
    ],
    [
      { block: 'Hero Coastal Mediterranean', type: 'Banner', status: 'Đã xuất bản', updated: '11/08/2026', author: 'Hải Yến' },
      { block: 'Về sofa8', type: 'Rich text', status: 'Đã xuất bản', updated: '08/08/2026', author: 'Bảo Ngọc' },
      { block: 'Bộ sưu tập Azure Bay', type: 'Danh sách SP', status: 'Bản nháp', updated: '07/08/2026', author: 'Đức Anh' },
      { block: 'Khách hàng coastal', type: 'Slider', status: 'Đã xuất bản', updated: '01/08/2026', author: 'Hải Yến' },
      { block: 'CTA Giao 48h', type: 'Banner', status: 'Tạm ẩn', updated: '26/07/2026', author: 'Bảo Ngọc' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa8AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa8'),
    cmsPage('about', 'Trang giới thiệu', '/sofa8/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa8/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa8/policy'),
    cmsPage('faq', 'Trang FAQ', '/sofa8/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '68' },
        { label: 'Chờ duyệt', value: '3' },
        { label: 'Lượt đọc / tháng', value: '42K', trend: '+14%' },
        { label: 'Chuyên mục', value: '6' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: '10 không gian coastal cho biệt thự biển', category: 'Inspiration', status: 'Đã xuất bản', views: 9600, updated: '10/08/2026' },
        { title: 'Phối linen cho mùa hè nhiệt đới', category: 'Decor', status: 'Đã xuất bản', views: 7200, updated: '04/08/2026' },
        { title: 'Xu hướng sofa coastal 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '12/08/2026' },
        { title: 'Bảo quản bouclé trong môi trường biển', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '11/08/2026' },
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
        { label: 'Mục menu', value: '38' },
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
        { menu: 'Menu chính Coastal', position: 'Header', items: 18, status: 'Đã xuất bản' },
        { menu: 'Menu bộ sưu tập', position: 'Header', items: 12, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 6, status: 'Đã xuất bản' },
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
        { label: 'Banner đang chạy', value: '5' },
        { label: 'CTR trung bình', value: '4.2%', trend: '+0.8%' },
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
        { name: 'Mùa biển — Giảm 25%', position: 'Top bar', schedule: '14/08 – 20/08', status: 'Đang chạy' },
        { name: 'Giao 48h nội thành', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Azure Bay', position: 'Danh mục', schedule: '03/08 – 23/08', status: 'Đang chạy' },
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
        { label: 'Slide', value: '10' },
        { label: 'Thời gian chuyển', value: '5s' },
        { label: 'Lượt click', value: '6.2K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ Coastal', slides: 4, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập Azure Bay', slides: 3, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Gallery coastal', slides: 3, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO nội dung',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '86%' },
        { label: 'Thiếu meta', value: '4' },
        { label: 'Điểm SEO', value: '88/100', trend: '+4' },
        { label: 'Từ khoá top 10', value: '62' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa8', title: 'SOFA8 — Sofa coastal Mediterranean', length: 48, status: 'Tốt' },
        { page: '/sofa8/about', title: 'Về SOFA8 | Coastal Living', length: 36, status: 'Tốt' },
        { page: '/sofa8/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa8/policy', title: 'Chính sách mua hàng SOFA8', length: 44, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '12' },
        { label: 'Đã xuất bản', value: '9' },
        { label: 'Bản nháp', value: '3' },
        { label: 'Lượt xem', value: '16K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn chọn size sofa coastal', slug: '/sofa8/huong-dan-size', status: 'Đã xuất bản', updated: '07/08/2026' },
        { title: 'Cam kết bảo hành 7 năm', slug: '/sofa8/cam-ket-bao-hanh', status: 'Đã xuất bản', updated: '01/08/2026' },
        { title: 'Đóng sofa theo kích thước riêng', slug: '/sofa8/custom-size', status: 'Bản nháp', updated: '12/08/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa8AdminGroup = {
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
        { label: 'Danh mục', value: '10' },
        { label: 'Danh mục cha', value: '4' },
        { label: 'Sản phẩm gán', value: '142' },
        { label: 'Ẩn', value: '0' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Azure Bay', parent: 'Bộ sưu tập', products: 36, status: 'Hiển thị' },
        { name: 'Sandy Shore', parent: 'Bộ sưu tập', products: 32, status: 'Hiển thị' },
        { name: 'White Wave', parent: 'Bộ sưu tập', products: 24, status: 'Hiển thị' },
        { name: 'Coral Reef', parent: 'Bộ sưu tập', products: 22, status: 'Hiển thị' },
        { name: 'Sofa linen', parent: 'Theo chất liệu', products: 48, status: 'Hiển thị' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '142' },
        { label: 'Đang bán', value: '132' },
        { label: 'Hết hàng', value: '4' },
        { label: 'Mới tháng này', value: '8', trend: '+8' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'collection', label: 'Bộ sưu tập' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF8-AZ-01', name: 'Sofa Azure Lounge', collection: 'Azure Bay', price: money(18500000), status: 'Đang bán' },
        { sku: 'SF8-SD-02', name: 'Sofa Sandy Daybed', collection: 'Sandy Shore', price: money(14200000), status: 'Đang bán' },
        { sku: 'SF8-WW-03', name: 'Sofa White Wave', collection: 'White Wave', price: money(16900000), status: 'Đang bán' },
        { sku: 'SF8-CR-04', name: 'Sofa Coral Breeze', collection: 'Coral Reef', price: money(15500000), status: 'Đang bán' },
        { sku: 'SF8-SV-05', name: 'Sofa Seaview Nest', collection: 'Azure Bay', price: money(19900000), status: 'Hết hàng' },
        { sku: 'SF8-CD-06', name: 'Sofa Coastal Dream', collection: 'Sandy Shore', price: money(17500000), status: 'Đang bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '5' },
        { label: 'Giá trị', value: '72' },
        { label: 'Dùng cho biến thể', value: '3' },
        { label: 'Bộ lọc mặt tiền', value: '3' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu linen', values: 28, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 6, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 10, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Loại gỗ', values: 4, usage: 'Tuỳ chọn', status: 'Hoạt động' },
        { name: 'Loại nệm', values: 5, usage: 'Tuỳ chọn', status: 'Tạm ẩn' },
      ],
      ['Thêm thuộc tính']
    ),
    mod(
      'variants',
      'Biến thể sản phẩm',
      'Tổ hợp SKU theo màu, chất liệu và kích thước.',
      'solar:layers-bold-duotone',
      [
        { label: 'Biến thể', value: '486' },
        { label: 'Có tồn kho', value: '440' },
        { label: 'Cảnh báo tồn', value: '18' },
        { label: 'Ngừng bán', value: '8' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF8-AZ-01-OCEAN', product: 'Sofa Azure Lounge', option: 'Linen / Ocean / 2m4', stock: 12, price: money(18500000) },
        { sku: 'SF8-AZ-01-SKY', product: 'Sofa Azure Lounge', option: 'Linen / Sky / 2m4', stock: 5, price: money(18900000) },
        { sku: 'SF8-SD-02-SAND', product: 'Sofa Sandy Daybed', option: 'Cotton / Sand / 2m2', stock: 18, price: money(14200000) },
        { sku: 'SF8-SV-05-DEEP', product: 'Sofa Seaview Nest', option: 'Linen / Deep Ocean / 2m6', stock: 0, price: money(19900000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '1.420' },
        { label: 'Sắp hết', value: '18' },
        { label: 'Hết hàng', value: '4' },
        { label: 'Giá trị tồn', value: '11.6 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF8-AZ-01-OCEAN', warehouse: 'Kho Coastal HN', stock: 12, reserved: 3, status: 'Đủ hàng' },
        { sku: 'SF8-SD-02-SAND', warehouse: 'Kho Coastal HCM', stock: 18, reserved: 4, status: 'Đủ hàng' },
        { sku: 'SF8-SV-05-DEEP', warehouse: 'Kho Coastal HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF8-WW-03-WHITE', warehouse: 'Showroom Coastal ĐN', stock: 2, reserved: 1, status: 'Sắp hết' },
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
        { label: 'SP đang giảm giá', value: '32' },
        { label: 'Giảm trung bình', value: '22%' },
        { label: 'Biên lợi nhuận', value: '34%', trend: '+1.5%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF8-AZ-01', list: money(23500000), sale: money(18500000), dealer: money(16280000), status: 'Đang giảm' },
        { sku: 'SF8-SD-02', list: money(18000000), sale: money(14200000), dealer: money(12496000), status: 'Đang giảm' },
        { sku: 'SF8-WW-03', list: money(21500000), sale: money(16900000), dealer: money(14872000), status: 'Đang giảm' },
        { sku: 'SF8-CD-06', list: money(17500000), sale: money(17500000), dealer: money(15400000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa8AdminGroup = {
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
        { label: 'Kho', value: '3' },
        { label: 'Tổng tồn', value: '1.420' },
        { label: 'Đơn chờ xuất', value: '28' },
        { label: 'Tỷ lệ lấp đầy', value: '58%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho Coastal Hà Nội', city: 'Hà Nội', stock: 620, fill: '64%', status: 'Hoạt động' },
        { warehouse: 'Kho Coastal HCM', city: 'HCM', stock: 540, fill: '58%', status: 'Hoạt động' },
        { warehouse: 'Showroom Coastal ĐN', city: 'Đà Nẵng', stock: 260, fill: '42%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '76' },
        { label: 'Chờ duyệt', value: '3' },
        { label: 'Giá trị nhập', value: '2.6 tỷ' },
        { label: 'Giá trị xuất', value: '3.1 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2608-008', type: 'Nhập', warehouse: 'Kho Coastal HN', value: money(286000000), status: 'Hoàn tất' },
        { code: 'PX-2608-062', type: 'Xuất', warehouse: 'Kho Coastal HCM', value: money(68000000), status: 'Hoàn tất' },
        { code: 'PN-2608-009', type: 'Nhập', warehouse: 'Showroom Coastal ĐN', value: money(42000000), status: 'Chờ duyệt' },
        { code: 'PX-2608-063', type: 'Xuất', warehouse: 'Kho Coastal HN', value: money(18500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '14' },
        { label: 'Đang vận chuyển', value: '2' },
        { label: 'Lệch kiểm kê', value: '0' },
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
        { code: 'CK-0810', from: 'Kho Coastal HCM', to: 'Showroom Coastal ĐN', items: 6, status: 'Đang vận chuyển' },
        { code: 'CK-0809', from: 'Kho Coastal HN', to: 'Showroom Coastal ĐN', items: 4, status: 'Hoàn tất' },
        { code: 'KK-0801', from: 'Kho Coastal HN', to: '—', items: 180, status: 'Đúng số' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa8AdminGroup = {
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
        { label: 'Đơn tháng này', value: '218', trend: '+14%' },
        { label: 'Chờ xác nhận', value: '10' },
        { label: 'Doanh thu', value: '3.8 tỷ', trend: '+12%' },
        { label: 'Giá trị TB/đơn', value: '17.4 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF8-26081201', customer: 'Nguyễn Bảo', channel: 'Website', total: money(18500000), status: 'Đang giao' },
        { code: 'SF8-26081186', customer: 'Trang Đinh', channel: 'Showroom ĐN', total: money(16900000), status: 'Hoàn tất' },
        { code: 'SF8-26081180', customer: 'Lê Hoàng', channel: 'Showroom HN', total: money(15500000), status: 'Chờ xác nhận' },
        { code: 'SF8-26081172', customer: 'Mai Phương', channel: 'Website', total: money(14200000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '226' },
        { label: 'Thành công', value: '96.8%' },
        { label: 'Chờ đối soát', value: '6' },
        { label: 'Trả góp', value: '28 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-68118', order: 'SF8-26081201', method: 'VNPay', amount: money(18500000), status: 'Thành công' },
        { txn: 'TXN-68115', order: 'SF8-26081186', method: 'Chuyển khoản', amount: money(16900000), status: 'Thành công' },
        { txn: 'TXN-68112', order: 'SF8-26081180', method: 'Thẻ quốc tế', amount: money(15500000), status: 'Chờ đối soát' },
        { txn: 'TXN-68108', order: 'SF8-26081172', method: 'Thẻ quốc tế', amount: money(14200000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao hàng 48h, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '28' },
        { label: 'Giao đúng hẹn', value: '97%' },
        { label: 'Đội lắp đặt', value: '4' },
        { label: 'Phí VC tháng', value: '62 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đội giao' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-28118', order: 'SF8-26081201', carrier: 'Đội Coastal HN', eta: '16/08/2026', status: 'Đang giao' },
        { code: 'VD-28115', order: 'SF8-26081186', carrier: 'Đội Coastal ĐN', eta: '12/08/2026', status: 'Đã giao' },
        { code: 'VD-28110', order: 'SF8-26081180', carrier: 'Đội Coastal HN', eta: '20/08/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '4' },
        { label: 'Đã hoàn', value: '3' },
        { label: 'Giá trị hoàn', value: '42 tr' },
        { label: 'Thời gian TB', value: '1.8 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2608-03', order: 'SF8-26081172', reason: 'Khách huỷ đơn', amount: money(14200000), status: 'Đã hoàn' },
        { code: 'HT-2608-04', order: 'SF8-26081142', reason: 'Sai màu linen', amount: money(3200000), status: 'Đang xử lý' },
        { code: 'HT-2608-05', order: 'SF8-26081128', reason: 'Giao trễ hẹn', amount: money(600000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '3' },
        { label: 'Tỷ lệ đổi trả', value: '1.4%' },
        { label: 'Đang thu hồi', value: '1' },
        { label: 'Tái nhập kho', value: '1' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2608-01', product: 'Sofa Sandy Daybed', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2608-02', product: 'Sofa White Wave', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2608-03', product: 'Sofa Coral Breeze', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa8AdminGroup = {
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
        { label: 'Khách hàng', value: '4.820' },
        { label: 'Mới tháng này', value: '218', trend: '+14%' },
        { label: 'Khách VIP', value: '86' },
        { label: 'LTV trung bình', value: '15.2 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Nguyễn Bảo', phone: '0912 xxx 108', tier: 'Vàng', spent: money(36800000), status: 'Hoạt động' },
        { name: 'Trang Đinh', phone: '0987 xxx 314', tier: 'Bạc', spent: money(16900000), status: 'Hoạt động' },
        { name: 'Lê Hoàng', phone: '0905 xxx 628', tier: 'Vàng', spent: money(32400000), status: 'Hoạt động' },
        { name: 'Mai Phương', phone: '0243 xxx 840', tier: 'Thường', spent: money(14200000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '524' },
        { label: 'Đã liên hệ', value: '386' },
        { label: 'Tỷ lệ chốt', value: '22.4%', trend: '+3.2%' },
        { label: 'Lead nóng', value: '32' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Phạm Uyên', source: 'Facebook Ads', interest: 'Azure Bay', owner: 'Hải Yến', status: 'Lead nóng' },
        { name: 'Trần Quân', source: 'Google Ads', interest: 'Sofa linen', owner: 'Bảo Ngọc', status: 'Đã liên hệ' },
        { name: 'Lý Hằng', source: 'Showroom ĐN', interest: 'Coral Reef', owner: 'Đức Anh', status: 'Đang tư vấn' },
        { name: 'Vũ Khanh', source: 'Instagram', interest: 'White Wave', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '6.420' },
        { label: 'Khách mua lại', value: '32%' },
        { label: 'Chu kỳ mua lại', value: '11 tháng' },
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
        { customer: 'Nguyễn Bảo', order: 'SF8-26081201', date: '12/08/2026', total: money(18500000), status: 'Đang giao' },
        { customer: 'Nguyễn Bảo', order: 'SF8-25110418', date: '04/11/2025', total: money(26800000), status: 'Hoàn tất' },
        { customer: 'Trang Đinh', order: 'SF8-26081186', date: '11/08/2026', total: money(16900000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '12' },
        { label: 'Thời gian phản hồi', value: '18 phút' },
        { label: 'CSAT', value: '4.9/5', trend: '+0.1' },
        { label: 'Bảo hành đang xử lý', value: '2' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-7018', customer: 'Mai Phương', topic: 'Hoàn tiền đơn huỷ', agent: 'Bảo Ngọc', status: 'Đang xử lý' },
        { ticket: 'TK-7015', customer: 'Nguyễn Bảo', topic: 'Đặt lịch giao 48h', agent: 'Hải Yến', status: 'Đã đóng' },
        { ticket: 'TK-7012', customer: 'Lê Hoàng', topic: 'Bảo hành khung gỗ', agent: 'Đức Anh', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa8AdminGroup = {
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
        { label: 'Chiến dịch', value: '12' },
        { label: 'Tỷ lệ mở', value: '34.2%', trend: '+2.2%' },
        { label: 'Tỷ lệ click', value: '6.8%' },
        { label: 'Doanh thu quy đổi', value: '386 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Mùa biển — Giảm 25%', segment: 'Toàn bộ khách', sent: 4820, open: '40%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Azure Bay', segment: 'Quan tâm coastal', sent: 1280, open: '46%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 218, open: '52%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 62, open: '58%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '16.8K' },
        { label: 'Tỷ lệ nhận', value: '98.4%' },
        { label: 'Chi phí tháng', value: '12 tr' },
        { label: 'Brandname', value: 'SOFA8' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Mùa biển sale', segment: 'Khách HN + HCM + ĐN', sent: 6200, cost: money(4340000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao', segment: 'Tự động', sent: 142, cost: money(99000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 86, cost: money(60000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '9.2K' },
        { label: 'Tỷ lệ click', value: '5.8%' },
        { label: 'Thông báo tháng', value: '10' },
        { label: 'Huỷ đăng ký', value: '0.4%' },
      ],
      [
        { key: 'title', label: 'Thông báo' },
        { key: 'trigger', label: 'Kích hoạt' },
        { key: 'reach', label: 'Tiếp cận', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: 'Mùa biển — Giảm 25%', trigger: 'Thủ công', reach: 9200, ctr: '7.4%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 1420, ctr: '11.2%', status: 'Đang chạy' },
        { title: 'Showroom Coastal ĐN mới', trigger: 'Vị trí', reach: 480, ctr: '4.2%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '6' },
        { label: 'Lượt dùng', value: '742' },
        { label: 'Giá trị giảm', value: '218 tr' },
        { label: 'Tỷ lệ dùng', value: '28%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'SEA25', value: 'Giảm 25%', condition: 'Đơn từ 12 triệu', used: 320, status: 'Đang chạy' },
        { code: 'SHIP48', value: 'Miễn phí giao 48h', condition: 'Nội thành HN/HCM/ĐN', used: 380, status: 'Đang chạy' },
        { code: 'VIP3', value: 'Giảm 3 triệu', condition: 'Khách hạng Vàng', used: 32, status: 'Đang chạy' },
        { code: 'JULY18', value: 'Giảm 18%', condition: 'Đơn từ 8 triệu', used: 36, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '62' },
        { label: 'Đơn giới thiệu', value: '98' },
        { label: 'Hoa hồng tháng', value: '62 tr' },
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
        { partner: 'Coastal Living Review', channel: 'YouTube', orders: 22, commission: money(28400000), status: 'Đang hợp tác' },
        { partner: 'Ocean Décor Blog', channel: 'Blog', orders: 14, commission: money(9600000), status: 'Đang hợp tác' },
        { partner: 'Sea Style Tips', channel: 'TikTok', orders: 8, commission: money(4800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa8AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '3.8 tỷ', trend: '+12%' },
        { label: 'Lợi nhuận gộp', value: '1.3 tỷ' },
        { label: 'Đơn hàng', value: '218' },
        { label: 'AOV', value: '17.4 tr', trend: '+3%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 108, revenue: money(1980000000), share: '52%', growth: '+18%' },
        { channel: 'Showroom', orders: 76, revenue: money(1320000000), share: '35%', growth: '+8%' },
        { channel: 'Đại lý B2B', orders: 24, revenue: money(400000000), share: '11%', growth: '+4%' },
        { channel: 'Sàn TMĐT', orders: 10, revenue: money(100000000), share: '2%', growth: '-2%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '14' },
        { label: 'Top 10 đóng góp', value: '52%' },
        { label: 'SP không bán được', value: '6' },
        { label: 'Vòng quay tồn', value: '3.2' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Azure Lounge', sold: 38, revenue: money(703000000), stock: 12 },
        { product: 'Sofa White Wave', sold: 32, revenue: money(540800000), stock: 8 },
        { product: 'Sofa Coral Breeze', sold: 28, revenue: money(434000000), stock: 6 },
        { product: 'Sofa Seaview Nest', sold: 22, revenue: money(437800000), stock: 0 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '108K', trend: '+14%' },
        { label: 'Người dùng mới', value: '68%' },
        { label: 'Thời gian TB', value: '3:28' },
        { label: 'Tỷ lệ thoát', value: '42%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 36200, bounce: '38%', conversion: '2.4%' },
        { source: 'Facebook', sessions: 28400, bounce: '44%', conversion: '1.8%' },
        { source: 'Direct', sessions: 18800, bounce: '34%', conversion: '3.2%' },
        { source: 'Instagram', sessions: 14600, bounce: '46%', conversion: '1.6%' },
        { source: 'Email', sessions: 9800, bounce: '26%', conversion: '4.8%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.6' },
        { label: 'Thêm giỏ', value: '6.2K' },
        { label: 'Bỏ giỏ', value: '62%' },
        { label: 'Xem gallery', value: '4.8K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 108000, drop: '22%', time: '0:38' },
        { step: 'Xem bộ sưu tập', users: 82000, drop: '30%', time: '1:22' },
        { step: 'Xem chi tiết SP', users: 56000, drop: '46%', time: '2:08' },
        { step: 'Thêm vào giỏ', users: 6200, drop: '62%', time: '0:18' },
        { step: 'Hoàn tất thanh toán', users: 2356, drop: '—', time: '2:32' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.18%', trend: '+0.3%' },
        { label: 'CR mobile', value: '1.68%' },
        { label: 'CR desktop', value: '3.04%' },
        { label: 'CR có tư vấn', value: '11.6%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 36200, orders: 608, cr: '1.68%' },
        { segment: 'Desktop – Organic', sessions: 12800, orders: 389, cr: '3.04%' },
        { segment: 'Email remarketing', sessions: 9800, orders: 470, cr: '4.80%' },
        { segment: 'Tư vấn showroom', sessions: 1800, orders: 209, cr: '11.6%' },
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
      { label: 'URL theo dõi', value: '28' },
      { label: 'Điểm trung bình', value: '86/100' },
      { label: 'Thiếu meta', value: '2' },
      { label: 'Từ khoá top 10', value: '32' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA8`, keyword: 'sofa coastal', position: 5, status: 'Tốt' },
      { url: `${sample}/linen`, title: 'Sofa linen biển', keyword: 'sofa linen', position: 7, status: 'Tốt' },
      { url: `${sample}/boucle`, title: '', keyword: 'sofa bouclé', position: 18, status: 'Thiếu meta' },
      { url: `${sample}/mediterranean`, title: 'Sofa Mediterranean', keyword: 'sofa mediterranean', position: 10, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa8AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa8/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa8/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa8/collections'),
    seoPage('project', 'Trang dự án', '/sofa8/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa8/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa8/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa8/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '742' },
        { label: 'Đã index', value: '698' },
        { label: 'Lỗi', value: '2' },
        { label: 'Cập nhật cuối', value: '12/08' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 142, indexed: 136, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 10, indexed: 10, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 68, indexed: 64, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 28, indexed: 24, status: '2 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '6' },
        { label: 'Đường dẫn chặn', value: '3' },
        { label: 'Bot cho phép', value: '4' },
        { label: 'Cập nhật cuối', value: '01/08' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Quy tắc' },
        { key: 'path', label: 'Đường dẫn' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa8/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa8/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '5' },
        { label: 'URL áp dụng', value: '586' },
        { label: 'Cảnh báo', value: '1' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 142, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 586, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 68, status: '1 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 3, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa8AdminGroup = {
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
        { label: 'Tài khoản', value: '18' },
        { label: 'Đang hoạt động', value: '16' },
        { label: 'Bật 2FA', value: '12' },
        { label: 'Bị khoá', value: '0' },
      ],
      [
        { key: 'name', label: 'Người dùng' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Vai trò' },
        { key: 'last', label: 'Đăng nhập cuối' },
        STATUS_COL,
      ],
      [
        { name: 'Hải Yến', email: 'haiyen@sofa8.vn', role: 'Quản trị hệ thống', last: '15/08/2026 08:42', status: 'Hoạt động' },
        { name: 'Bảo Ngọc', email: 'ngoc@sofa8.vn', role: 'Quản lý bán hàng', last: '14/08/2026 16:20', status: 'Hoạt động' },
        { name: 'Đức Anh', email: 'ducanh@sofa8.vn', role: 'CSKH', last: '15/08/2026 07:50', status: 'Hoạt động' },
        { name: 'Thục Vy', email: 'vy@sofa8.vn', role: 'Biên tập nội dung', last: '10/08/2026 09:30', status: 'Hoạt động' },
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
        { label: 'Người dùng gán', value: '18' },
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
        { role: 'Quản lý bán hàng', users: 3, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 2, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 6, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
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
        { label: 'Module', value: '22' },
        { label: 'Quyền', value: '88' },
        { label: 'Quyền nhạy cảm', value: '8' },
        { label: 'Cần phê duyệt', value: '2' },
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
        { label: 'Sự kiện hôm nay', value: '586' },
        { label: 'Đăng nhập thất bại', value: '4' },
        { label: 'Thay đổi cấu hình', value: '2' },
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
        { time: '15/08 08:42', user: 'Hải Yến', action: 'Xuất bản trang chủ Coastal', ip: '113.20.x.18', status: 'Thành công' },
        { time: '15/08 08:20', user: 'Bảo Ngọc', action: 'Duyệt hoàn tiền HT-2608-03', ip: '113.20.x.24', status: 'Thành công' },
        { time: '15/08 07:38', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.188', status: 'Từ chối' },
        { time: '14/08 20:14', user: 'Đức Anh', action: 'Sửa bảng giá đại lý', ip: '113.20.x.32', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

// ----------------------------------------------------------------------

export const SOFA8_ADMIN_GROUPS: Sofa8AdminGroup[] = [
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

export function findSofa8AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA8_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA8_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '3.8 tỷ', trend: '+12%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '218', trend: '+14%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '218', trend: '+14%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.18%', trend: '+0.3%', color: 'warning' as const },
];

export const SOFA8_ADMIN_ACTIVITIES = [
  { time: '08:42', text: 'Hải Yến xuất bản lại Trang chủ Coastal', tag: 'CMS' },
  { time: '08:20', text: 'Duyệt hoàn tiền HT-2608-03 (14.2tr)', tag: 'Đơn hàng' },
  { time: '07:50', text: '10 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:18', text: 'Chiến dịch "Mùa biển" đạt 40% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:42', text: 'SKU SF8-SV-05-DEEP hết hàng tại Kho Coastal HCM', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA8_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA8_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.2, 5.8, 5.4, 6.0, 6.5, 7.1] },
  { name: 'Mục tiêu (tỷ)', data: [2.8, 3.2, 3.6, 4.0, 4.4, 4.8, 5.3, 5.7, 6.0, 6.3, 6.7, 7.0] },
];

export const SOFA8_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [168, 190, 205, 218, 240, 262, 318, 372, 350, 384, 420, 462] },
];

export const SOFA8_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [35, 29, 17, 12, 7],
};

export const SOFA8_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Coastal 3S', 'Sofa Marina L', 'Armchair Sand', 'Sofa Bed Wave', 'Daybed Lagoon'],
  series: [172, 148, 121, 94, 70],
};
