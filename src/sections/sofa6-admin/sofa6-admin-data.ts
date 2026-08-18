// SOFA6 ADMIN — cấu hình khu vực quản trị (dữ liệu demo)
// ----------------------------------------------------------------------

export const SOFA6_ADMIN_ROOT = '/sofa6/admin';

export type Sofa6AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa6AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa6AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa6AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa6AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa6AdminModule['stats'],
  columns: Sofa6AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa6AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa6AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Khối nội dung', value: '12' },
      { label: 'Lượt xem 30 ngày', value: '18.4K', trend: '+12%' },
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
      { block: 'Hero banner', type: 'Banner', status: 'Đã xuất bản', updated: '12/08/2026', author: 'Ngọc Anh' },
      { block: 'Giới thiệu ngắn', type: 'Rich text', status: 'Đã xuất bản', updated: '10/08/2026', author: 'Minh Quân' },
      { block: 'Bộ sưu tập nổi bật', type: 'Danh sách SP', status: 'Bản nháp', updated: '09/08/2026', author: 'Thu Hà' },
      { block: 'Đánh giá khách hàng', type: 'Slider', status: 'Đã xuất bản', updated: '02/08/2026', author: 'Ngọc Anh' },
      { block: 'CTA cuối trang', type: 'Banner', status: 'Tạm ẩn', updated: '28/07/2026', author: 'Minh Quân' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa6AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa6'),
    cmsPage('about', 'Trang giới thiệu', '/sofa6/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa6/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa6/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa6/policy/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa6/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '148' },
        { label: 'Chờ duyệt', value: '6' },
        { label: 'Lượt đọc / tháng', value: '92K', trend: '+8%' },
        { label: 'Chuyên mục', value: '9' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: '7 cách chọn sofa cho phòng khách nhỏ', category: 'Tư vấn', status: 'Đã xuất bản', views: 12480, updated: '11/08/2026' },
        { title: 'Bảo quản sofa da bò đúng cách', category: 'Bảo dưỡng', status: 'Đã xuất bản', views: 8321, updated: '05/08/2026' },
        { title: 'Xu hướng nội thất 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '13/08/2026' },
        { title: 'So sánh vải linen và nỉ', category: 'Chất liệu', status: 'Bản nháp', views: 0, updated: '12/08/2026' },
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
        { label: 'Mục menu', value: '52' },
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
        { label: 'Banner đang chạy', value: '7' },
        { label: 'CTR trung bình', value: '3.4%', trend: '+0.6%' },
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
        { name: 'Sale tháng 8 – 30%', position: 'Top bar', schedule: '01/08 – 31/08', status: 'Đang chạy' },
        { name: 'Miễn phí giao lắp HN/HCM', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Linen', position: 'Danh mục', schedule: '05/08 – 20/08', status: 'Đang chạy' },
        { name: 'Trả góp 0%', position: 'Chi tiết SP', schedule: '01/07 – 31/07', status: 'Hết hạn' },
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
        { label: 'Slide', value: '14' },
        { label: 'Thời gian chuyển', value: '6s' },
        { label: 'Lượt click', value: '4.2K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ', slides: 5, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập mới', slides: 6, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
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
        { label: 'Trang đã tối ưu', value: '86%' },
        { label: 'Thiếu meta', value: '5' },
        { label: 'Điểm SEO', value: '92/100', trend: '+4' },
        { label: 'Từ khoá top 10', value: '134' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa6', title: 'SOFA6 – Sofa thủ công cao cấp', length: 54, status: 'Tốt' },
        { page: '/sofa6/about', title: 'Về chúng tôi | SOFA6', length: 42, status: 'Tốt' },
        { page: '/sofa6/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa6/policy', title: 'Chính sách mua hàng SOFA6', length: 48, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '18' },
        { label: 'Đã xuất bản', value: '15' },
        { label: 'Bản nháp', value: '3' },
        { label: 'Lượt xem', value: '26K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn đo kích thước', slug: '/sofa6/huong-dan-do', status: 'Đã xuất bản', updated: '08/08/2026' },
        { title: 'Cam kết chất liệu', slug: '/sofa6/cam-ket', status: 'Đã xuất bản', updated: '01/08/2026' },
        { title: 'Tuyển đại lý 2026', slug: '/sofa6/tuyen-dai-ly', status: 'Bản nháp', updated: '13/08/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa6AdminGroup = {
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
        { label: 'Sản phẩm gán', value: '412' },
        { label: 'Ẩn', value: '2' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Sofa góc L', parent: 'Sofa phòng khách', products: 62, status: 'Hiển thị' },
        { name: 'Sofa văng', parent: 'Sofa phòng khách', products: 48, status: 'Hiển thị' },
        { name: 'Sofa giường', parent: 'Sofa đa năng', products: 31, status: 'Hiển thị' },
        { name: 'Sofa recliner', parent: 'Sofa thư giãn', products: 19, status: 'Hiển thị' },
        { name: 'Sofa outdoor', parent: 'Sofa ngoài trời', products: 8, status: 'Ẩn' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '412' },
        { label: 'Đang bán', value: '386' },
        { label: 'Hết hàng', value: '14' },
        { label: 'Mới tháng này', value: '22', trend: '+22' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ROMA-01', name: 'Sofa Roma da bò nâu', category: 'Sofa da', price: money(28500000), status: 'Đang bán' },
        { sku: 'SF-LINE-04', name: 'Sofa Linen Milano', category: 'Sofa vải', price: money(18900000), status: 'Đang bán' },
        { sku: 'SF-LCOR-12', name: 'Sofa góc L Aurora', category: 'Sofa góc L', price: money(32400000), status: 'Hết hàng' },
        { sku: 'SF-BED-07', name: 'Sofa giường Nordic', category: 'Sofa giường', price: money(15200000), status: 'Đang bán' },
        { sku: 'SF-REC-03', name: 'Sofa recliner Comfy', category: 'Sofa recliner', price: money(41800000), status: 'Ngừng bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '9' },
        { label: 'Giá trị', value: '146' },
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
        { name: 'Màu sắc', values: 32, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 12, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 18, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Kiểu chân', values: 6, usage: 'Tuỳ chọn', status: 'Hoạt động' },
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
        { label: 'Biến thể', value: '1.284' },
        { label: 'Có tồn kho', value: '1.120' },
        { label: 'Cảnh báo tồn', value: '38' },
        { label: 'Ngừng bán', value: '26' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF-ROMA-01-NAU', product: 'Sofa Roma', option: 'Da bò / Nâu / 2m4', stock: 12, price: money(28500000) },
        { sku: 'SF-ROMA-01-DEN', product: 'Sofa Roma', option: 'Da bò / Đen / 2m4', stock: 5, price: money(28900000) },
        { sku: 'SF-LINE-04-BEI', product: 'Sofa Linen Milano', option: 'Linen / Be / 2m2', stock: 24, price: money(18900000) },
        { sku: 'SF-LCOR-12-XAM', product: 'Sofa góc L Aurora', option: 'Nỉ / Xám / 3m0', stock: 0, price: money(32400000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '3.482' },
        { label: 'Sắp hết', value: '38' },
        { label: 'Hết hàng', value: '14' },
        { label: 'Giá trị tồn', value: '18.6 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ROMA-01-NAU', warehouse: 'Kho Hà Nội', stock: 12, reserved: 3, status: 'Đủ hàng' },
        { sku: 'SF-LINE-04-BEI', warehouse: 'Kho HCM', stock: 24, reserved: 6, status: 'Đủ hàng' },
        { sku: 'SF-LCOR-12-XAM', warehouse: 'Kho HCM', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF-BED-07-XANH', warehouse: 'Kho Đà Nẵng', stock: 4, reserved: 2, status: 'Sắp hết' },
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
        { label: 'SP đang giảm giá', value: '64' },
        { label: 'Giảm trung bình', value: '18%' },
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
        { sku: 'SF-ROMA-01', list: money(36000000), sale: money(28500000), dealer: money(25200000), status: 'Đang giảm' },
        { sku: 'SF-LINE-04', list: money(21500000), sale: money(18900000), dealer: money(16600000), status: 'Đang giảm' },
        { sku: 'SF-BED-07', list: money(15200000), sale: money(15200000), dealer: money(13400000), status: 'Giá gốc' },
        { sku: 'SF-REC-03', list: money(41800000), sale: money(41800000), dealer: money(37100000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG (nhóm riêng)
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa6AdminGroup = {
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
        { label: 'Tổng tồn', value: '3.482' },
        { label: 'Đơn chờ xuất', value: '58' },
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
        { warehouse: 'Kho trung tâm Hà Nội', city: 'Hà Nội', stock: 1280, fill: '78%', status: 'Hoạt động' },
        { warehouse: 'Kho Bình Dương', city: 'HCM', stock: 1104, fill: '81%', status: 'Hoạt động' },
        { warehouse: 'Kho Đà Nẵng', city: 'Đà Nẵng', stock: 512, fill: '54%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 586, fill: '63%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ nhà máy và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '186' },
        { label: 'Chờ duyệt', value: '9' },
        { label: 'Giá trị nhập', value: '4.2 tỷ' },
        { label: 'Giá trị xuất', value: '5.1 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2608-014', type: 'Nhập', warehouse: 'Kho Hà Nội', value: money(482000000), status: 'Hoàn tất' },
        { code: 'PX-2608-092', type: 'Xuất', warehouse: 'Kho HCM', value: money(128500000), status: 'Hoàn tất' },
        { code: 'PN-2608-015', type: 'Nhập', warehouse: 'Kho Đà Nẵng', value: money(96000000), status: 'Chờ duyệt' },
        { code: 'PX-2608-093', type: 'Xuất', warehouse: 'Kho Hà Nội', value: money(28500000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '32' },
        { label: 'Đang vận chuyển', value: '7' },
        { label: 'Lệch kiểm kê', value: '3' },
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
        { code: 'CK-0812', from: 'Kho HCM', to: 'Kho Đà Nẵng', items: 18, status: 'Đang vận chuyển' },
        { code: 'CK-0811', from: 'Kho Hà Nội', to: 'Showroom Cầu Giấy', items: 6, status: 'Hoàn tất' },
        { code: 'KK-0803', from: 'Kho Bình Dương', to: '—', items: 420, status: 'Lệch 3 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa6AdminGroup = {
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
        { label: 'Đơn tháng này', value: '486', trend: '+14%' },
        { label: 'Chờ xác nhận', value: '23' },
        { label: 'Doanh thu', value: '6.8 tỷ', trend: '+11%' },
        { label: 'Giá trị TB/đơn', value: '14.0 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF-26081201', customer: 'Nguyễn Thu Hà', channel: 'Website', total: money(28500000), status: 'Đang giao' },
        { code: 'SF-26081198', customer: 'Trần Minh Quân', channel: 'Showroom HN', total: money(41800000), status: 'Hoàn tất' },
        { code: 'SF-26081195', customer: 'CT TNHH An Phát', channel: 'Đại lý', total: money(186000000), status: 'Chờ xác nhận' },
        { code: 'SF-26081190', customer: 'Lê Hoàng Nam', channel: 'Website', total: money(18900000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '512' },
        { label: 'Thành công', value: '96.2%' },
        { label: 'Chờ đối soát', value: '18' },
        { label: 'Trả góp', value: '74 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-88213', order: 'SF-26081201', method: 'VNPay', amount: money(28500000), status: 'Thành công' },
        { txn: 'TXN-88210', order: 'SF-26081198', method: 'Chuyển khoản', amount: money(41800000), status: 'Thành công' },
        { txn: 'TXN-88208', order: 'SF-26081195', method: 'Công nợ đại lý', amount: money(186000000), status: 'Chờ đối soát' },
        { txn: 'TXN-88201', order: 'SF-26081190', method: 'Thẻ quốc tế', amount: money(18900000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '58' },
        { label: 'Giao đúng hẹn', value: '94%' },
        { label: 'Đội lắp đặt', value: '12' },
        { label: 'Phí VC tháng', value: '182 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-40112', order: 'SF-26081201', carrier: 'Đội xe nội bộ', eta: '16/08/2026', status: 'Đang giao' },
        { code: 'VD-40109', order: 'SF-26081198', carrier: 'Đội xe nội bộ', eta: '12/08/2026', status: 'Đã giao' },
        { code: 'VD-40105', order: 'SF-26081195', carrier: 'Nhất Tín Logistics', eta: '20/08/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '14' },
        { label: 'Đã hoàn', value: '11' },
        { label: 'Giá trị hoàn', value: '164 tr' },
        { label: 'Thời gian TB', value: '3.2 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2608-04', order: 'SF-26081190', reason: 'Khách huỷ đơn', amount: money(18900000), status: 'Đã hoàn' },
        { code: 'HT-2608-05', order: 'SF-26081152', reason: 'Sai màu vải', amount: money(6500000), status: 'Đang xử lý' },
        { code: 'HT-2608-06', order: 'SF-26081140', reason: 'Giao trễ hẹn', amount: money(1200000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '9' },
        { label: 'Tỷ lệ đổi trả', value: '1.8%' },
        { label: 'Đang thu hồi', value: '3' },
        { label: 'Tái nhập kho', value: '5' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'product', label: 'Sản phẩm' },
        { key: 'type', label: 'Loại' },
        { key: 'reason', label: 'Lý do' },
        STATUS_COL,
      ],
      [
        { code: 'DT-2608-02', product: 'Sofa Linen Milano', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2608-03', product: 'Sofa Roma', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2608-04', product: 'Sofa giường Nordic', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa6AdminGroup = {
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
        { label: 'Mới tháng này', value: '486', trend: '+9%' },
        { label: 'Khách VIP', value: '312' },
        { label: 'LTV trung bình', value: '32 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Nguyễn Thu Hà', phone: '0912 xxx 231', tier: 'Vàng', spent: money(84500000), status: 'Hoạt động' },
        { name: 'Trần Minh Quân', phone: '0987 xxx 118', tier: 'Bạc', spent: money(41800000), status: 'Hoạt động' },
        { name: 'CT TNHH An Phát', phone: '0243 xxx 900', tier: 'Đại lý', spent: money(1860000000), status: 'Hoạt động' },
        { name: 'Lê Hoàng Nam', phone: '0905 xxx 447', tier: 'Thường', spent: money(18900000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '1.284' },
        { label: 'Đã liên hệ', value: '892' },
        { label: 'Tỷ lệ chốt', value: '18.4%', trend: '+2.1%' },
        { label: 'Lead nóng', value: '96' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Phạm Bảo Ngọc', source: 'Facebook Ads', interest: 'Sofa góc L', owner: 'Ngọc Anh', status: 'Lead nóng' },
        { name: 'Đỗ Văn Kiên', source: 'Google Ads', interest: 'Sofa da bò', owner: 'Minh Quân', status: 'Đã liên hệ' },
        { name: 'Vũ Thanh Trúc', source: 'Showroom HCM', interest: 'Sofa giường', owner: 'Thu Hà', status: 'Đang tư vấn' },
        { name: 'Hoàng Gia Bảo', source: 'Zalo OA', interest: 'Bộ sưu tập Linen', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '18.240' },
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
        { customer: 'Nguyễn Thu Hà', order: 'SF-26081201', date: '12/08/2026', total: money(28500000), status: 'Đang giao' },
        { customer: 'Nguyễn Thu Hà', order: 'SF-25110432', date: '04/11/2025', total: money(56000000), status: 'Hoàn tất' },
        { customer: 'Trần Minh Quân', order: 'SF-26081198', date: '11/08/2026', total: money(41800000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '38' },
        { label: 'Thời gian phản hồi', value: '42 phút' },
        { label: 'CSAT', value: '4.7/5', trend: '+0.2' },
        { label: 'Bảo hành đang xử lý', value: '11' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-9021', customer: 'Lê Hoàng Nam', topic: 'Hoàn tiền đơn huỷ', agent: 'Thu Hà', status: 'Đang xử lý' },
        { ticket: 'TK-9018', customer: 'Nguyễn Thu Hà', topic: 'Đặt lịch giao lắp', agent: 'Ngọc Anh', status: 'Đã đóng' },
        { ticket: 'TK-9015', customer: 'CT TNHH An Phát', topic: 'Bảo hành khung gỗ', agent: 'Minh Quân', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa6AdminGroup = {
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
        { label: 'Tỷ lệ mở', value: '38.2%', trend: '+3.1%' },
        { label: 'Tỷ lệ click', value: '6.8%' },
        { label: 'Doanh thu quy đổi', value: '820 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Sale tháng 8 – 30%', segment: 'Toàn bộ khách', sent: 12480, open: '41%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Linen mới', segment: 'Quan tâm sofa vải', sent: 3240, open: '46%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 862, open: '52%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 214, open: '58%', status: 'Đang chạy' },
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
        { label: 'Tỷ lệ nhận', value: '98.4%' },
        { label: 'Chi phí tháng', value: '32 tr' },
        { label: 'Brandname', value: 'SOFA6' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách HN + HCM', sent: 18400, cost: money(12880000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 486, cost: money(340000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 312, cost: money(218000), status: 'Lên lịch' },
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
        { title: 'Giảm 30% sofa da', trigger: 'Thủ công', reach: 24800, ctr: '5.1%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 3620, ctr: '9.4%', status: 'Đang chạy' },
        { title: 'Showroom mới Đà Nẵng', trigger: 'Vị trí', reach: 1240, ctr: '3.2%', status: 'Lên lịch' },
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
        { label: 'Lượt dùng', value: '2.184' },
        { label: 'Giá trị giảm', value: '486 tr' },
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
        { code: 'SOFA30', value: 'Giảm 30%', condition: 'Đơn từ 20 triệu', used: 842, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Nội thành HN/HCM', used: 1120, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 96, status: 'Đang chạy' },
        { code: 'JULY20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 126, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '284' },
        { label: 'Đơn giới thiệu', value: '412' },
        { label: 'Hoa hồng tháng', value: '312 tr' },
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
        { partner: 'Nội Thất Review', channel: 'YouTube', orders: 86, commission: money(96400000), status: 'Đang hợp tác' },
        { partner: 'Homey Blog', channel: 'Blog', orders: 42, commission: money(38200000), status: 'Đang hợp tác' },
        { partner: 'Décor Tips', channel: 'TikTok', orders: 31, commission: money(24800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa6AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '6.8 tỷ', trend: '+11%' },
        { label: 'Lợi nhuận gộp', value: '2.3 tỷ' },
        { label: 'Đơn hàng', value: '486' },
        { label: 'AOV', value: '14.0 tr', trend: '+3%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 214, revenue: money(2840000000), share: '42%', growth: '+16%' },
        { channel: 'Showroom', orders: 168, revenue: money(2410000000), share: '35%', growth: '+6%' },
        { channel: 'Đại lý B2B', orders: 64, revenue: money(1320000000), share: '19%', growth: '+12%' },
        { channel: 'Sàn TMĐT', orders: 40, revenue: money(230000000), share: '4%', growth: '-3%' },
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
        { label: 'SP không bán được', value: '24' },
        { label: 'Vòng quay tồn', value: '4.2' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Roma da bò nâu', sold: 86, revenue: money(2451000000), stock: 12 },
        { product: 'Sofa Linen Milano', sold: 74, revenue: money(1398600000), stock: 24 },
        { product: 'Sofa góc L Aurora', sold: 52, revenue: money(1684800000), stock: 0 },
        { product: 'Sofa giường Nordic', sold: 48, revenue: money(729600000), stock: 4 },
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
        { source: 'Organic Search', sessions: 128400, bounce: '38%', conversion: '2.4%' },
        { source: 'Paid Social', sessions: 62800, bounce: '48%', conversion: '1.6%' },
        { source: 'Direct', sessions: 48200, bounce: '35%', conversion: '3.1%' },
        { source: 'Referral', sessions: 24600, bounce: '44%', conversion: '1.9%' },
        { source: 'Email', sessions: 19800, bounce: '29%', conversion: '4.8%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.6' },
        { label: 'Thêm giỏ', value: '18.2K' },
        { label: 'Bỏ giỏ', value: '68%' },
        { label: 'Xem 360°', value: '9.4K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 284000, drop: '22%', time: '0:48' },
        { step: 'Xem danh mục', users: 221000, drop: '31%', time: '1:22' },
        { step: 'Xem chi tiết SP', users: 152000, drop: '46%', time: '2:36' },
        { step: 'Thêm vào giỏ', users: 18200, drop: '68%', time: '0:22' },
        { step: 'Hoàn tất thanh toán', users: 5800, drop: '—', time: '3:04' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.04%', trend: '+0.3%' },
        { label: 'CR mobile', value: '1.62%' },
        { label: 'CR desktop', value: '2.86%' },
        { label: 'CR có tư vấn', value: '11.4%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 96400, orders: 1562, cr: '1.62%' },
        { segment: 'Desktop – Organic', sessions: 32000, orders: 915, cr: '2.86%' },
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
      { label: 'Thiếu meta', value: '3' },
      { label: 'Từ khoá top 10', value: '26' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Từ khoá chính' },
      { key: 'position', label: 'Thứ hạng', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – SOFA6`, keyword: 'sofa cao cấp', position: 4, status: 'Tốt' },
      { url: `${sample}/linen`, title: 'Sofa vải linen cao cấp', keyword: 'sofa vải linen', position: 7, status: 'Tốt' },
      { url: `${sample}/da-bo`, title: '', keyword: 'sofa da bò', position: 18, status: 'Thiếu meta' },
      { url: `${sample}/goc-l`, title: 'Sofa góc L hiện đại', keyword: 'sofa góc l', position: 11, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa6AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa6/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa6/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa6/collections'),
    seoPage('project', 'Trang dự án', '/sofa6/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa6/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa6/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa6/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.482' },
        { label: 'Đã index', value: '1.396' },
        { label: 'Lỗi', value: '6' },
        { label: 'Cập nhật cuối', value: '13/08' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 412, indexed: 402, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 24, indexed: 24, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 148, indexed: 142, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 46, indexed: 40, status: '6 URL lỗi' },
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
        { agent: '*', rule: 'Disallow', path: '/sofa6/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa6/cart', status: 'Hoạt động' },
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
        { label: 'URL áp dụng', value: '1.204' },
        { label: 'Cảnh báo', value: '4' },
        { label: 'Lỗi', value: '0' },
      ],
      [
        { key: 'type', label: 'Loại schema' },
        { key: 'scope', label: 'Áp dụng cho' },
        { key: 'urls', label: 'URL', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Trang sản phẩm', urls: 412, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 1204, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 148, status: '4 cảnh báo' },
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

const ACCESS_GROUP: Sofa6AdminGroup = {
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
        { label: 'Tài khoản', value: '38' },
        { label: 'Đang hoạt động', value: '34' },
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
        { name: 'Ngọc Anh', email: 'ngocanh@sofa6.vn', role: 'Quản trị hệ thống', last: '15/08/2026 09:12', status: 'Hoạt động' },
        { name: 'Minh Quân', email: 'quan@sofa6.vn', role: 'Quản lý bán hàng', last: '14/08/2026 17:40', status: 'Hoạt động' },
        { name: 'Thu Hà', email: 'ha@sofa6.vn', role: 'CSKH', last: '15/08/2026 08:02', status: 'Hoạt động' },
        { name: 'Gia Bảo', email: 'bao@sofa6.vn', role: 'Biên tập nội dung', last: '02/07/2026 10:20', status: 'Bị khoá' },
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
        { label: 'Người dùng gán', value: '38' },
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
        { label: 'Sự kiện hôm nay', value: '1.284' },
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
        { time: '15/08 09:12', user: 'Ngọc Anh', action: 'Xuất bản trang chủ', ip: '113.20.x.14', status: 'Thành công' },
        { time: '15/08 08:41', user: 'Thu Hà', action: 'Duyệt hoàn tiền HT-2608-04', ip: '113.20.x.22', status: 'Thành công' },
        { time: '15/08 07:58', user: 'unknown', action: 'Đăng nhập thất bại', ip: '45.61.x.203', status: 'Từ chối' },
        { time: '14/08 22:10', user: 'Minh Quân', action: 'Sửa bảng giá đại lý', ip: '113.20.x.31', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA6_ADMIN_GROUPS: Sofa6AdminGroup[] = [
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

export function findSofa6AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA6_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA6_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '6.8 tỷ', trend: '+11%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '486', trend: '+14%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '486', trend: '+9%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.04%', trend: '+0.3%', color: 'warning' as const },
];

export const SOFA6_ADMIN_ACTIVITIES = [
  { time: '09:12', text: 'Ngọc Anh xuất bản lại Trang chủ', tag: 'CMS' },
  { time: '08:41', text: 'Duyệt hoàn tiền HT-2608-04 (18.9tr)', tag: 'Đơn hàng' },
  { time: '08:02', text: '23 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch “Sale tháng 8” đạt 41% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU SF-LCOR-12-XAM hết hàng tại Kho HCM', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA6_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA6_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.2, 3.8, 4.1, 4.6, 5.0, 5.4, 6.1, 6.8, 6.2, 6.9, 7.4, 8.1] },
  { name: 'Mục tiêu (tỷ)', data: [3.5, 3.9, 4.3, 4.7, 5.2, 5.6, 6.0, 6.5, 6.8, 7.2, 7.6, 8.0] },
];

export const SOFA6_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [210, 245, 268, 289, 310, 330, 402, 486, 448, 470, 512, 560] },
];

export const SOFA6_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [38, 27, 18, 11, 6],
};

export const SOFA6_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Terra 3S', 'Sofa Sage L', 'Armchair Clay', 'Sofa Bed Sand', 'Daybed Forest'],
  series: [186, 154, 132, 98, 76],
};
