// SOFA18 ADMIN — cấu hình khu vực quản trị (dữ liệu demo) — Wabi-Sabi theme
// ----------------------------------------------------------------------

export const SOFA18_ADMIN_ROOT = '/sofa18/admin';

export type Sofa18AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa18AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa18AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa18AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa18AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa18AdminModule['stats'],
  columns: Sofa18AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa18AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa18AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Lượt xem 30 ngày', value: '22.6K', trend: '+15%' },
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
      { block: 'Hero wabi-sabi', type: 'Banner', status: 'Đã xuất bản', updated: '14/09/2026', author: 'Akira Tanaka' },
      { block: 'Triết lý wabi-sabi', type: 'Rich text', status: 'Đã xuất bản', updated: '10/09/2026', author: 'Yuki Sato' },
      { block: 'Bộ sưu tập tatami', type: 'Danh sách SP', status: 'Bản nháp', updated: '09/09/2026', author: 'Mei Lin' },
      { block: 'Đánh giá khách hàng', type: 'Slider', status: 'Đã xuất bản', updated: '02/09/2026', author: 'Akira Tanaka' },
      { block: 'CTA cuối trang', type: 'Banner', status: 'Tạm ẩn', updated: '28/08/2026', author: 'Yuki Sato' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa18AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa18'),
    cmsPage('about', 'Trang giới thiệu', '/sofa18/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa18/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa18/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa18/policy/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa18/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '162' },
        { label: 'Chờ duyệt', value: '8' },
        { label: 'Lượt đọc / tháng', value: '108K', trend: '+12%' },
        { label: 'Chuyên mục', value: '11' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: 'Wabi-sabi: vẻ đẹp trong sự không hoàn hảo', category: 'Triết lý', status: 'Đã xuất bản', views: 18620, updated: '13/09/2026' },
        { title: 'Chọn sofa gỗ thấp kiểu Nhật', category: 'Tư vấn', status: 'Đã xuất bản', views: 9840, updated: '05/09/2026' },
        { title: 'Xu hướng nội thất Nhật 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '14/09/2026' },
        { title: 'Bảo quản nỉ linen đúng cách', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '12/09/2026' },
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
        { label: 'Mục menu', value: '56' },
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
        { menu: 'Menu chính', position: 'Header', items: 26, status: 'Đã xuất bản' },
        { menu: 'Menu sản phẩm (mega)', position: 'Header', items: 20, status: 'Đã xuất bản' },
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
        { label: 'Vị trí', value: '7' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Vị trí' },
        { key: 'schedule', label: 'Lịch chạy' },
        STATUS_COL,
      ],
      [
        { name: 'Thu wabi-sabi – 25%', position: 'Top bar', schedule: '01/09 – 30/09', status: 'Đang chạy' },
        { name: 'Miễn phí giao lắp Tokyo/Osaka', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Tatami', position: 'Danh mục', schedule: '05/09 – 22/09', status: 'Đang chạy' },
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
        { label: 'Thời gian chuyển', value: '6s' },
        { label: 'Lượt click', value: '5.1K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ', slides: 6, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập mùa thu', slides: 7, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Showroom Kyoto 360°', slides: 3, page: 'Showroom', status: 'Bản nháp' },
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
        { label: 'Điểm SEO', value: '94/100', trend: '+5' },
        { label: 'Từ khoá top 10', value: '148' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa18', title: 'SOFA18 – Wabi-Sabi nội thất Nhật', length: 52, status: 'Tốt' },
        { page: '/sofa18/about', title: 'Về chúng tôi | SOFA18', length: 42, status: 'Tốt' },
        { page: '/sofa18/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa18/policy', title: 'Chính sách mua hàng SOFA18', length: 48, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '21' },
        { label: 'Đã xuất bản', value: '18' },
        { label: 'Bản nháp', value: '3' },
        { label: 'Lượt xem', value: '32K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn đo kích thước phòng Nhật', slug: '/sofa18/huong-dan-do', status: 'Đã xuất bản', updated: '08/09/2026' },
        { title: 'Cam kết chất liệu tự nhiên', slug: '/sofa18/cam-ket', status: 'Đã xuất bản', updated: '01/09/2026' },
        { title: 'Tuyển đại lý 2026', slug: '/sofa18/tuyen-dai-ly', status: 'Bản nháp', updated: '14/09/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa18AdminGroup = {
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
        { label: 'Danh mục', value: '26' },
        { label: 'Danh mục cha', value: '7' },
        { label: 'Sản phẩm gán', value: '468' },
        { label: 'Ẩn', value: '3' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Sofa gỗ thấp', parent: 'Sofa phòng khách', products: 68, status: 'Hiển thị' },
        { name: 'Sofa tatami', parent: 'Sofa phong cách Nhật', products: 42, status: 'Hiển thị' },
        { name: 'Sofa giường thấp', parent: 'Sofa đa năng', products: 34, status: 'Hiển thị' },
        { name: 'Armchair wabi-sabi', parent: 'Ghế thư giãn', products: 22, status: 'Hiển thị' },
        { name: 'Sofa ngoài trời', parent: 'Sofa outdoor', products: 6, status: 'Ẩn' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '468' },
        { label: 'Đang bán', value: '432' },
        { label: 'Hết hàng', value: '16' },
        { label: 'Mới tháng này', value: '28', trend: '+28' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-CLAY-01', name: 'Sofa Clay gỗ sồi thấp', category: 'Sofa gỗ thấp', price: money(24800000), status: 'Đang bán' },
        { sku: 'SF-SAGE-04', name: 'Sofa Sage linen tự nhiên', category: 'Sofa vải', price: money(19600000), status: 'Đang bán' },
        { sku: 'SF-TATA-12', name: 'Sofa Tatami Kyoto', category: 'Sofa tatami', price: money(32800000), status: 'Hết hàng' },
        { sku: 'SF-BED-07', name: 'Sofa giường Wabi', category: 'Sofa giường thấp', price: money(16800000), status: 'Đang bán' },
        { sku: 'SF-CHAR-03', name: 'Armchair Charcoal nỉ', category: 'Ghế thư giãn', price: money(38500000), status: 'Ngừng bán' },
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
        { label: 'Giá trị', value: '158' },
        { label: 'Dùng cho biến thể', value: '7' },
        { label: 'Bộ lọc mặt tiền', value: '6' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu sắc', values: 36, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 14, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 20, usage: 'Biến thể', status: 'Hoạt động' },
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
        { label: 'Biến thể', value: '1.428' },
        { label: 'Có tồn kho', value: '1.246' },
        { label: 'Cảnh báo tồn', value: '42' },
        { label: 'Ngừng bán', value: '28' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF-CLAY-01-CLAY', product: 'Sofa Clay', option: 'Linen / Clay / 2m2', stock: 14, price: money(24800000) },
        { sku: 'SF-CLAY-01-SAGE', product: 'Sofa Clay', option: 'Linen / Sage / 2m2', stock: 6, price: money(25200000) },
        { sku: 'SF-SAGE-04-CREA', product: 'Sofa Sage', option: 'Nỉ / Cream / 2m0', stock: 28, price: money(19600000) },
        { sku: 'SF-TATA-12-CHAR', product: 'Sofa Tatami Kyoto', option: 'Nỉ / Charcoal / 2m8', stock: 0, price: money(32800000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '3.864' },
        { label: 'Sắp hết', value: '42' },
        { label: 'Hết hàng', value: '16' },
        { label: 'Giá trị tồn', value: '21.2 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-CLAY-01-CLAY', warehouse: 'Kho Tokyo', stock: 14, reserved: 4, status: 'Đủ hàng' },
        { sku: 'SF-SAGE-04-CREA', warehouse: 'Kho Osaka', stock: 28, reserved: 8, status: 'Đủ hàng' },
        { sku: 'SF-TATA-12-CHAR', warehouse: 'Kho Osaka', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF-BED-07-SAGE', warehouse: 'Kho Kyoto', stock: 5, reserved: 3, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '6' },
        { label: 'SP đang giảm giá', value: '72' },
        { label: 'Giảm trung bình', value: '20%' },
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
        { sku: 'SF-CLAY-01', list: money(32000000), sale: money(24800000), dealer: money(21800000), status: 'Đang giảm' },
        { sku: 'SF-SAGE-04', list: money(23000000), sale: money(19600000), dealer: money(17200000), status: 'Đang giảm' },
        { sku: 'SF-BED-07', list: money(16800000), sale: money(16800000), dealer: money(14800000), status: 'Giá gốc' },
        { sku: 'SF-CHAR-03', list: money(38500000), sale: money(38500000), dealer: money(34200000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG (nhóm riêng)
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa18AdminGroup = {
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
        { label: 'Kho', value: '7' },
        { label: 'Tổng tồn', value: '3.864' },
        { label: 'Đơn chờ xuất', value: '64' },
        { label: 'Tỷ lệ lấp đầy', value: '75%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho trung tâm Tokyo', city: 'Tokyo', stock: 1420, fill: '80%', status: 'Hoạt động' },
        { warehouse: 'Kho Osaka', city: 'Osaka', stock: 1186, fill: '83%', status: 'Hoạt động' },
        { warehouse: 'Kho Kyoto', city: 'Kyoto', stock: 568, fill: '58%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 690, fill: '66%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '208' },
        { label: 'Chờ duyệt', value: '11' },
        { label: 'Giá trị nhập', value: '4.8 tỷ' },
        { label: 'Giá trị xuất', value: '5.6 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2609-016', type: 'Nhập', warehouse: 'Kho Tokyo', value: money(524000000), status: 'Hoàn tất' },
        { code: 'PX-2609-104', type: 'Xuất', warehouse: 'Kho Osaka', value: money(142000000), status: 'Hoàn tất' },
        { code: 'PN-2609-017', type: 'Nhập', warehouse: 'Kho Kyoto', value: money(108000000), status: 'Chờ duyệt' },
        { code: 'PX-2609-105', type: 'Xuất', warehouse: 'Kho Tokyo', value: money(32800000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '36' },
        { label: 'Đang vận chuyển', value: '8' },
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
        { code: 'CK-0912', from: 'Kho Osaka', to: 'Kho Kyoto', items: 22, status: 'Đang vận chuyển' },
        { code: 'CK-0911', from: 'Kho Tokyo', to: 'Showroom Shibuya', items: 8, status: 'Hoàn tất' },
        { code: 'KK-0903', from: 'Kho Osaka', to: '—', items: 468, status: 'Lệch 2 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa18AdminGroup = {
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
        { label: 'Đơn tháng này', value: '542', trend: '+16%' },
        { label: 'Chờ xác nhận', value: '28' },
        { label: 'Doanh thu', value: '7.6 tỷ', trend: '+13%' },
        { label: 'Giá trị TB/đơn', value: '15.2 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF-26091201', customer: 'Haruki Sato', channel: 'Website', total: money(24800000), status: 'Đang giao' },
        { code: 'SF-26091198', customer: 'Mika Yamamoto', channel: 'Showroom Tokyo', total: money(38500000), status: 'Hoàn tất' },
        { code: 'SF-26091195', customer: 'Công ty TNHH Mộc', channel: 'Đại lý', total: money(196000000), status: 'Chờ xác nhận' },
        { code: 'SF-26091190', customer: 'Ren Tanaka', channel: 'Website', total: money(19600000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '568' },
        { label: 'Thành công', value: '97.1%' },
        { label: 'Chờ đối soát', value: '14' },
        { label: 'Trả góp', value: '82 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-89214', order: 'SF-26091201', method: 'PayPay', amount: money(24800000), status: 'Thành công' },
        { txn: 'TXN-89211', order: 'SF-26091198', method: 'Chuyển khoản', amount: money(38500000), status: 'Thành công' },
        { txn: 'TXN-89208', order: 'SF-26091195', method: 'Công nợ đại lý', amount: money(196000000), status: 'Chờ đối soát' },
        { txn: 'TXN-89201', order: 'SF-26091190', method: 'Thẻ quốc tế', amount: money(19600000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '64' },
        { label: 'Giao đúng hẹn', value: '95%' },
        { label: 'Đội lắp đặt', value: '14' },
        { label: 'Phí VC tháng', value: '196 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-40218', order: 'SF-26091201', carrier: 'Đội xe nội bộ', eta: '17/09/2026', status: 'Đang giao' },
        { code: 'VD-40215', order: 'SF-26091198', carrier: 'Đội xe nội bộ', eta: '13/09/2026', status: 'Đã giao' },
        { code: 'VD-40211', order: 'SF-26091195', carrier: 'Sagawa Express', eta: '21/09/2026', status: 'Chờ lấy hàng' },
      ],
      ['Tạo vận đơn']
    ),
    mod(
      'refunds',
      'Hoàn tiền',
      'Yêu cầu hoàn tiền và tiến trình xử lý.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '12' },
        { label: 'Đã hoàn', value: '9' },
        { label: 'Giá trị hoàn', value: '148 tr' },
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
        { code: 'HT-2609-04', order: 'SF-26091190', reason: 'Khách huỷ đơn', amount: money(19600000), status: 'Đã hoàn' },
        { code: 'HT-2609-05', order: 'SF-26091152', reason: 'Sai màu vải', amount: money(7200000), status: 'Đang xử lý' },
        { code: 'HT-2609-06', order: 'SF-26091140', reason: 'Giao trễ hẹn', amount: money(1400000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '8' },
        { label: 'Tỷ lệ đổi trả', value: '1.5%' },
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
        { code: 'DT-2609-02', product: 'Sofa Sage linen', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2609-03', product: 'Sofa Clay gỗ sồi', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2609-04', product: 'Sofa giường Wabi', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa18AdminGroup = {
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
        { label: 'Khách hàng', value: '14.260' },
        { label: 'Mới tháng này', value: '542', trend: '+11%' },
        { label: 'Khách VIP', value: '368' },
        { label: 'LTV trung bình', value: '36 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Haruki Sato', phone: '090 xxx 1234', tier: 'Vàng', spent: money(92400000), status: 'Hoạt động' },
        { name: 'Mika Yamamoto', phone: '080 xxx 5678', tier: 'Bạc', spent: money(38500000), status: 'Hoạt động' },
        { name: 'Công ty TNHH Mộc', phone: '03 xxx 9000', tier: 'Đại lý', spent: money(1960000000), status: 'Hoạt động' },
        { name: 'Ren Tanaka', phone: '070 xxx 4477', tier: 'Thường', spent: money(19600000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '1.420' },
        { label: 'Đã liên hệ', value: '986' },
        { label: 'Tỷ lệ chốt', value: '19.2%', trend: '+2.4%' },
        { label: 'Lead nóng', value: '108' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Sora Nakamura', source: 'Instagram Ads', interest: 'Sofa gỗ thấp', owner: 'Akira', status: 'Lead nóng' },
        { name: 'Kenta Mori', source: 'Google Ads', interest: 'Sofa tatami', owner: 'Yuki', status: 'Đã liên hệ' },
        { name: 'Aoi Hayashi', source: 'Showroom Osaka', interest: 'Sofa giường', owner: 'Mei Lin', status: 'Đang tư vấn' },
        { name: 'Hina Ito', source: 'Line OA', interest: 'Bộ sưu tập Clay', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '20.640' },
        { label: 'Khách mua lại', value: '41%' },
        { label: 'Chu kỳ mua lại', value: '13 tháng' },
        { label: 'Đơn/khách', value: '1.6' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Haruki Sato', order: 'SF-26091201', date: '13/09/2026', total: money(24800000), status: 'Đang giao' },
        { customer: 'Haruki Sato', order: 'SF-25110432', date: '04/11/2025', total: money(62000000), status: 'Hoàn tất' },
        { customer: 'Mika Yamamoto', order: 'SF-26091198', date: '12/09/2026', total: money(38500000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '42' },
        { label: 'Thời gian phản hồi', value: '38 phút' },
        { label: 'CSAT', value: '4.8/5', trend: '+0.2' },
        { label: 'Bảo hành đang xử lý', value: '9' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'agent', label: 'Nhân viên' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-9124', customer: 'Ren Tanaka', topic: 'Hoàn tiền đơn huỷ', agent: 'Mei Lin', status: 'Đang xử lý' },
        { ticket: 'TK-9121', customer: 'Haruki Sato', topic: 'Đặt lịch giao lắp', agent: 'Akira', status: 'Đã đóng' },
        { ticket: 'TK-9118', customer: 'Công ty TNHH Mộc', topic: 'Bảo hành khung gỗ', agent: 'Yuki', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa18AdminGroup = {
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
        { label: 'Chiến dịch', value: '28' },
        { label: 'Tỷ lệ mở', value: '40.6%', trend: '+3.4%' },
        { label: 'Tỷ lệ click', value: '7.2%' },
        { label: 'Doanh thu quy đổi', value: '920 tr' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Thu wabi-sabi – 25%', segment: 'Toàn bộ khách', sent: 14260, open: '43%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Clay mới', segment: 'Quan tâm sofa vải', sent: 3680, open: '48%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 962, open: '54%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 248, open: '60%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '52.4K' },
        { label: 'Tỷ lệ nhận', value: '98.6%' },
        { label: 'Chi phí tháng', value: '34 tr' },
        { label: 'Brandname', value: 'SOFA18' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách Tokyo + Osaka', sent: 19600, cost: money(13400000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 542, cost: money(380000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 368, cost: money(248000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '28.6K' },
        { label: 'Tỷ lệ click', value: '4.6%' },
        { label: 'Thông báo tháng', value: '20' },
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
        { title: 'Giảm 25% sofa gỗ thấp', trigger: 'Thủ công', reach: 26800, ctr: '5.4%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 4120, ctr: '9.8%', status: 'Đang chạy' },
        { title: 'Showroom mới Kyoto', trigger: 'Vị trí', reach: 1480, ctr: '3.4%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '18' },
        { label: 'Lượt dùng', value: '2.420' },
        { label: 'Giá trị giảm', value: '524 tr' },
        { label: 'Tỷ lệ dùng', value: '36%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'WABI25', value: 'Giảm 25%', condition: 'Đơn từ 20 triệu', used: 920, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Nội thành Tokyo/Osaka', used: 1240, status: 'Đang chạy' },
        { code: 'VIP5', value: 'Giảm 5 triệu', condition: 'Khách hạng Vàng', used: 108, status: 'Đang chạy' },
        { code: 'AUG20', value: 'Giảm 20%', condition: 'Đơn từ 10 triệu', used: 152, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '312' },
        { label: 'Đơn giới thiệu', value: '458' },
        { label: 'Hoa hồng tháng', value: '342 tr' },
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
        { partner: 'Nội Thất Nhật Review', channel: 'YouTube', orders: 96, commission: money(108000000), status: 'Đang hợp tác' },
        { partner: 'Wabi Living Blog', channel: 'Blog', orders: 48, commission: money(42600000), status: 'Đang hợp tác' },
        { partner: 'Décor Tips JP', channel: 'TikTok', orders: 34, commission: money(27200000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa18AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '7.6 tỷ', trend: '+13%' },
        { label: 'Lợi nhuận gộp', value: '2.6 tỷ' },
        { label: 'Đơn hàng', value: '542' },
        { label: 'AOV', value: '15.2 tr', trend: '+4%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 238, revenue: money(3120000000), share: '41%', growth: '+18%' },
        { channel: 'Showroom', orders: 186, revenue: money(2680000000), share: '35%', growth: '+8%' },
        { channel: 'Đại lý B2B', orders: 72, revenue: money(1480000000), share: '19%', growth: '+14%' },
        { channel: 'Sàn TMĐT', orders: 46, revenue: money(320000000), share: '5%', growth: '-2%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '42' },
        { label: 'Top 10 đóng góp', value: '48%' },
        { label: 'SP không bán được', value: '22' },
        { label: 'Vòng quay tồn', value: '4.6' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Clay gỗ sồi thấp', sold: 96, revenue: money(2380800000), stock: 14 },
        { product: 'Sofa Sage linen', sold: 82, revenue: money(1607200000), stock: 28 },
        { product: 'Sofa Tatami Kyoto', sold: 58, revenue: money(1902400000), stock: 0 },
        { product: 'Sofa giường Wabi', sold: 52, revenue: money(873600000), stock: 5 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '312K', trend: '+11%' },
        { label: 'Người dùng mới', value: '70%' },
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
        { source: 'Organic Search', sessions: 142000, bounce: '36%', conversion: '2.6%' },
        { source: 'Paid Social', sessions: 68600, bounce: '46%', conversion: '1.8%' },
        { source: 'Direct', sessions: 52800, bounce: '33%', conversion: '3.4%' },
        { source: 'Referral', sessions: 26800, bounce: '42%', conversion: '2.1%' },
        { source: 'Email', sessions: 21800, bounce: '27%', conversion: '5.2%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '4.8' },
        { label: 'Thêm giỏ', value: '20.4K' },
        { label: 'Bỏ giỏ', value: '66%' },
        { label: 'Xem 360°', value: '10.2K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 312000, drop: '20%', time: '0:52' },
        { step: 'Xem danh mục', users: 249000, drop: '28%', time: '1:30' },
        { step: 'Xem chi tiết SP', users: 179000, drop: '42%', time: '2:48' },
        { step: 'Thêm vào giỏ', users: 20400, drop: '64%', time: '0:24' },
        { step: 'Hoàn tất thanh toán', users: 6400, drop: '—', time: '3:12' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.18%', trend: '+0.4%' },
        { label: 'CR mobile', value: '1.74%' },
        { label: 'CR desktop', value: '3.02%' },
        { label: 'CR có tư vấn', value: '12.2%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 108400, orders: 1886, cr: '1.74%' },
        { segment: 'Desktop – Organic', sessions: 35600, orders: 1075, cr: '3.02%' },
        { segment: 'Email remarketing', sessions: 21800, orders: 1134, cr: '5.20%' },
        { segment: 'Tư vấn showroom', sessions: 4800, orders: 586, cr: '12.2%' },
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
      { label: 'URL theo dõi', value: '52' },
      { label: 'Điểm trung bình', value: '90/100' },
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
      { url: sample, title: `${name} – SOFA18`, keyword: 'sofa wabi-sabi', position: 3, status: 'Tốt' },
      { url: `${sample}/clay`, title: 'Sofa gỗ sồi thấp kiểu Nhật', keyword: 'sofa gỗ thấp', position: 6, status: 'Tốt' },
      { url: `${sample}/tatami`, title: '', keyword: 'sofa tatami', position: 14, status: 'Thiếu meta' },
      { url: `${sample}/linen`, title: 'Sofa linen tự nhiên cao cấp', keyword: 'sofa linen', position: 9, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa18AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa18/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa18/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa18/collections'),
    seoPage('project', 'Trang dự án', '/sofa18/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa18/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa18/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa18/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.624' },
        { label: 'Đã index', value: '1.548' },
        { label: 'Lỗi', value: '4' },
        { label: 'Cập nhật cuối', value: '14/09' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 468, indexed: 456, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 26, indexed: 26, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 162, indexed: 156, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 52, indexed: 46, status: '4 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '14' },
        { label: 'Đường dẫn chặn', value: '8' },
        { label: 'Bot cho phép', value: '5' },
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
        { agent: '*', rule: 'Disallow', path: '/sofa18/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa18/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '9' },
        { label: 'URL áp dụng', value: '1.348' },
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
        { type: 'Product', scope: 'Trang sản phẩm', urls: 468, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 1348, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 162, status: '3 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 14, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa18AdminGroup = {
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
        { label: 'Tài khoản', value: '42' },
        { label: 'Đang hoạt động', value: '38' },
        { label: 'Bật 2FA', value: '30' },
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
        { name: 'Akira Tanaka', email: 'akira@sofa18.jp', role: 'Quản trị hệ thống', last: '15/09/2026 09:18', status: 'Hoạt động' },
        { name: 'Yuki Sato', email: 'yuki@sofa18.jp', role: 'Quản lý bán hàng', last: '14/09/2026 17:48', status: 'Hoạt động' },
        { name: 'Mei Lin', email: 'mei@sofa18.jp', role: 'CSKH', last: '15/09/2026 08:08', status: 'Hoạt động' },
        { name: 'Kenta Mori', email: 'kenta@sofa18.jp', role: 'Biên tập nội dung', last: '02/08/2026 10:24', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '8' },
        { label: 'Vai trò tuỳ chỉnh', value: '4' },
        { label: 'Người dùng gán', value: '42' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 4, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 10, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 7, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 14, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 5, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '34' },
        { label: 'Quyền', value: '136' },
        { label: 'Quyền nhạy cảm', value: '16' },
        { label: 'Cần phê duyệt', value: '7' },
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
        { label: 'Sự kiện hôm nay', value: '1.420' },
        { label: 'Đăng nhập thất bại', value: '14' },
        { label: 'Thay đổi cấu hình', value: '9' },
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
        { time: '15/09 09:18', user: 'Akira Tanaka', action: 'Xuất bản trang chủ', ip: '202.45.x.18', status: 'Thành công' },
        { time: '15/09 08:46', user: 'Mei Lin', action: 'Duyệt hoàn tiền HT-2609-04', ip: '202.45.x.26', status: 'Thành công' },
        { time: '15/09 08:02', user: 'unknown', action: 'Đăng nhập thất bại', ip: '58.61.x.218', status: 'Từ chối' },
        { time: '14/09 22:14', user: 'Yuki Sato', action: 'Sửa bảng giá đại lý', ip: '202.45.x.34', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA18_ADMIN_GROUPS: Sofa18AdminGroup[] = [
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

export function findSofa18AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA18_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA18_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '7.6 tỷ', trend: '+13%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '542', trend: '+16%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '542', trend: '+11%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.18%', trend: '+0.4%', color: 'warning' as const },
];

export const SOFA18_ADMIN_ACTIVITIES = [
  { time: '09:18', text: 'Akira xuất bản lại Trang chủ wabi-sabi', tag: 'CMS' },
  { time: '08:46', text: 'Duyệt hoàn tiền HT-2609-04 (19.6tr)', tag: 'Đơn hàng' },
  { time: '08:08', text: '28 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch "Thu wabi-sabi" đạt 43% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU SF-TATA-12-CHAR hết hàng tại Kho Osaka', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA18_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA18_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [3.6, 4.1, 4.4, 4.8, 5.2, 5.6, 6.4, 7.1, 7.6, 6.8, 7.2, 8.0] },
  { name: 'Mục tiêu (tỷ)', data: [3.8, 4.2, 4.6, 5.0, 5.4, 5.8, 6.2, 6.8, 7.2, 7.6, 8.0, 8.4] },
];

export const SOFA18_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [232, 268, 292, 314, 336, 358, 432, 542, 496, 518, 562, 612] },
];

export const SOFA18_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [41, 28, 19, 6, 6],
};

export const SOFA18_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Clay 3S', 'Sofa Sage L', 'Armchair Charcoal', 'Sofa Bed Wabi', 'Daybed Tatami'],
  series: [196, 168, 142, 108, 84],
};
