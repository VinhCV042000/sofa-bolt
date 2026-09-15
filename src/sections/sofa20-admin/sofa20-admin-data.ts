// SOFA20 ADMIN — Brazilian Industrial Forge theme (jungle green, coral, golden)
// ----------------------------------------------------------------------

export const SOFA20_ADMIN_ROOT = '/sofa20/admin';

export type Sofa20AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa20AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa20AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa20AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa20AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa20AdminModule['stats'],
  columns: Sofa20AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa20AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa20AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

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
      { label: 'Khối nội dung', value: '16' },
      { label: 'Lượt xem 30 ngày', value: '28.4K', trend: '+18%' },
      { label: 'Bản nháp', value: '4' },
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
      { block: 'Hero industrial forge', type: 'Banner', status: 'Đã xuất bản', updated: '14/09/2026', author: 'Elias Thornbury' },
      { block: 'Câu chuyện xưởng đúc thép', type: 'Rich text', status: 'Đã xuất bản', updated: '10/09/2026', author: 'Rafael Costa' },
      { block: 'Bộ sưu tập Atlantic', type: 'Danh sách SP', status: 'Bản nháp', updated: '09/09/2026', author: 'Juliana Silva' },
      { block: 'Đánh giá khách hàng', type: 'Slider', status: 'Đã xuất bản', updated: '02/09/2026', author: 'Elias Thornbury' },
      { block: 'CTA cuối trang', type: 'Banner', status: 'Tạm ẩn', updated: '28/08/2026', author: 'Rafael Costa' },
    ],
    ['Thêm khối', 'Xem trước', 'Xuất bản']
  );

const CMS_GROUP: Sofa20AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Trang chủ', '/sofa20'),
    cmsPage('about', 'Trang giới thiệu', '/sofa20/about'),
    cmsPage('contact', 'Trang liên hệ', '/sofa20/contact'),
    cmsPage('policy', 'Trang chính sách', '/sofa20/policy'),
    cmsPage('terms', 'Trang điều khoản', '/sofa20/policy/terms'),
    cmsPage('faq', 'Trang FAQ', '/sofa20/faq'),
    mod(
      'blog',
      'Trang blog',
      'Quản lý bài viết, chuyên mục, tác giả và lịch đăng bài.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Bài viết', value: '184' },
        { label: 'Chờ duyệt', value: '12' },
        { label: 'Lượt đọc / tháng', value: '142K', trend: '+16%' },
        { label: 'Chuyên mục', value: '14' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'category', label: 'Chuyên mục' },
        STATUS_COL,
        { key: 'views', label: 'Lượt đọc', type: 'number' },
        { key: 'updated', label: 'Ngày đăng' },
      ],
      [
        { title: 'Industrial Forge: nội thất xưởng đúc thép', category: 'Triết lý', status: 'Đã xuất bản', views: 24620, updated: '13/09/2026' },
        { title: 'Chọn sofa gỗ teak Brasil', category: 'Tư vấn', status: 'Đã xuất bản', views: 12840, updated: '05/09/2026' },
        { title: 'Xu hướng nội thất nhiệt đới 2026', category: 'Xu hướng', status: 'Chờ duyệt', views: 0, updated: '14/09/2026' },
        { title: 'Bảo quản vải linen vùng nhiệt đới', category: 'Bảo dưỡng', status: 'Bản nháp', views: 0, updated: '12/09/2026' },
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
        { label: 'Mục menu', value: '62' },
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
        { menu: 'Menu chính', position: 'Header', items: 28, status: 'Đã xuất bản' },
        { menu: 'Menu sản phẩm (mega)', position: 'Header', items: 24, status: 'Đã xuất bản' },
        { menu: 'Menu footer', position: 'Footer', items: 12, status: 'Đã xuất bản' },
        { menu: 'Menu mobile', position: 'Mobile', items: 16, status: 'Bản nháp' },
      ],
      ['Thêm menu']
    ),
    mod(
      'banner',
      'Banner',
      'Banner khuyến mãi theo vị trí và lịch hiển thị.',
      'solar:gallery-wide-bold-duotone',
      [
        { label: 'Banner đang chạy', value: '10' },
        { label: 'CTR trung bình', value: '4.2%', trend: '+0.9%' },
        { label: 'Hết hạn tuần này', value: '3' },
        { label: 'Vị trí', value: '8' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Vị trí' },
        { key: 'schedule', label: 'Lịch chạy' },
        STATUS_COL,
      ],
      [
        { name: 'Mùa nhiệt đới – 30%', position: 'Top bar', schedule: '01/09 – 30/09', status: 'Đang chạy' },
        { name: 'Miễn phí giao lắp São Paulo/Rio', position: 'Trang chủ', schedule: 'Không giới hạn', status: 'Đang chạy' },
        { name: 'Bộ sưu tập Atlantic', position: 'Danh mục', schedule: '05/09 – 22/09', status: 'Đang chạy' },
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
        { label: 'Slider', value: '4' },
        { label: 'Slide', value: '20' },
        { label: 'Thời gian chuyển', value: '5s' },
        { label: 'Lượt click', value: '6.8K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Số slide', type: 'number' },
        { key: 'page', label: 'Trang áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Hero trang chủ', slides: 8, page: 'Trang chủ', status: 'Đã xuất bản' },
        { name: 'Bộ sưu tập mùa thu', slides: 6, page: 'Bộ sưu tập', status: 'Đã xuất bản' },
        { name: 'Showroom São Paulo 360°', slides: 4, page: 'Showroom', status: 'Bản nháp' },
      ],
      ['Tạo slider']
    ),
    mod(
      'seo',
      'SEO',
      'Thẻ tiêu đề, mô tả và ảnh chia sẻ cho từng trang tĩnh.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Trang đã tối ưu', value: '91%' },
        { label: 'Thiếu meta', value: '5' },
        { label: 'Điểm SEO', value: '92/100', trend: '+6' },
        { label: 'Từ khoá top 10', value: '168' },
      ],
      [
        { key: 'page', label: 'Trang' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Độ dài', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa20', title: 'SOFA20 – Industrial Forge nội thất Brasil', length: 54, status: 'Tốt' },
        { page: '/sofa20/about', title: 'Về chúng tôi | SOFA20', length: 42, status: 'Tốt' },
        { page: '/sofa20/faq', title: '', length: 0, status: 'Thiếu meta' },
        { page: '/sofa20/policy', title: 'Chính sách mua hàng SOFA20', length: 48, status: 'Tốt' },
      ],
      ['Quét lại']
    ),
    mod(
      'static-pages',
      'Trang tĩnh',
      'Các trang nội dung tự tạo ngoài cấu trúc mặc định.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Trang tĩnh', value: '24' },
        { label: 'Đã xuất bản', value: '20' },
        { label: 'Bản nháp', value: '4' },
        { label: 'Lượt xem', value: '38K' },
      ],
      [
        { key: 'title', label: 'Tiêu đề' },
        { key: 'slug', label: 'Đường dẫn' },
        STATUS_COL,
        { key: 'updated', label: 'Cập nhật' },
      ],
      [
        { title: 'Hướng dẫn đo kích thước phòng nhiệt đới', slug: '/sofa20/huong-dan-do', status: 'Đã xuất bản', updated: '08/09/2026' },
        { title: 'Cam kết gỗ teak tự nhiên', slug: '/sofa20/cam-ket', status: 'Đã xuất bản', updated: '01/09/2026' },
        { title: 'Tuyển đại lý 2026', slug: '/sofa20/tuyen-dai-ly', status: 'Bản nháp', updated: '14/09/2026' },
      ],
      ['Tạo trang']
    ),
  ],
};

// ----------------------------------------------------------------------
// SẢN PHẨM
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa20AdminGroup = {
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
        { label: 'Danh mục', value: '28' },
        { label: 'Danh mục cha', value: '8' },
        { label: 'Sản phẩm gán', value: '512' },
        { label: 'Ẩn', value: '4' },
      ],
      [
        { key: 'name', label: 'Danh mục' },
        { key: 'parent', label: 'Danh mục cha' },
        { key: 'products', label: 'Sản phẩm', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Sofa teak thấp', parent: 'Sofa phòng khách', products: 72, status: 'Hiển thị' },
        { name: 'Sofa nhiệt đới', parent: 'Sofa phong cách Brasil', products: 48, status: 'Hiển thị' },
        { name: 'Sofa giường thấp', parent: 'Sofa đa năng', products: 38, status: 'Hiển thị' },
        { name: 'Armchair công nghiệp', parent: 'Ghế thư giãn', products: 26, status: 'Hiển thị' },
        { name: 'Sofa ngoài trời', parent: 'Sofa outdoor', products: '8', status: 'Ẩn' },
      ],
      ['Thêm danh mục']
    ),
    mod(
      'products',
      'Sản phẩm',
      'Danh sách sản phẩm, hình ảnh, mô tả và trạng thái bán.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Sản phẩm', value: '512' },
        { label: 'Đang bán', value: '478' },
        { label: 'Hết hàng', value: '18' },
        { label: 'Mới tháng này', value: '34', trend: '+34' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Tên sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá bán', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ATL-01', name: 'Sofa Atlantic teak thấp', category: 'Sofa teak thấp', price: money(28500000), status: 'Đang bán' },
        { sku: 'SF-COR-04', name: 'Sofa Coral linen nhiệt đới', category: 'Sofa vải', price: money(21800000), status: 'Đang bán' },
        { sku: 'SF-JUN-12', name: 'Sofa Jungle xanh ngọc', category: 'Sofa nhiệt đới', price: money(34200000), status: 'Hết hàng' },
        { sku: 'SF-BED-09', name: 'Sofa giường Ironworks', category: 'Sofa giường thấp', price: money(18400000), status: 'Đang bán' },
        { sku: 'SF-GOL-03', name: 'Armchair Golden nỉ', category: 'Ghế thư giãn', price: money(41200000), status: 'Ngừng bán' },
      ],
      ['Thêm sản phẩm', 'Nhập Excel']
    ),
    mod(
      'attributes',
      'Thuộc tính',
      'Bộ thuộc tính dùng để tạo biến thể: màu, chất liệu, kích thước.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Nhóm thuộc tính', value: '12' },
        { label: 'Giá trị', value: '172' },
        { label: 'Dùng cho biến thể', value: '8' },
        { label: 'Bộ lọc mặt tiền', value: '7' },
      ],
      [
        { key: 'name', label: 'Thuộc tính' },
        { key: 'values', label: 'Số giá trị', type: 'number' },
        { key: 'usage', label: 'Áp dụng' },
        STATUS_COL,
      ],
      [
        { name: 'Màu sắc', values: 42, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Chất liệu', values: 16, usage: 'Biến thể + Bộ lọc', status: 'Hoạt động' },
        { name: 'Kích thước', values: 22, usage: 'Biến thể', status: 'Hoạt động' },
        { name: 'Kiểu chân gỗ teak', values: 10, usage: 'Tuỳ chọn', status: 'Hoạt động' },
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
        { label: 'Biến thể', value: '1.628' },
        { label: 'Có tồn kho', value: '1.418' },
        { label: 'Cảnh báo tồn', value: '48' },
        { label: 'Ngừng bán', value: '32' },
      ],
      [
        { key: 'sku', label: 'SKU biến thể' },
        { key: 'product', label: 'Sản phẩm gốc' },
        { key: 'option', label: 'Tuỳ chọn' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'price', label: 'Giá', type: 'money' },
      ],
      [
        { sku: 'SF-ATL-01-COR', product: 'Sofa Atlantic', option: 'Linen / Coral / 2m2', stock: 16, price: money(28500000) },
        { sku: 'SF-ATL-01-JUN', product: 'Sofa Atlantic', option: 'Linen / Jungle / 2m2', stock: 8, price: money(28900000) },
        { sku: 'SF-COR-04-CRE', product: 'Sofa Coral', option: 'Nỉ / Cream / 2m0', stock: 32, price: money(21800000) },
        { sku: 'SF-JUN-12-GOL', product: 'Sofa Jungle', option: 'Nỉ / Golden / 2m8', stock: 0, price: money(34200000) },
      ],
      ['Tạo biến thể']
    ),
    mod(
      'inventory',
      'Kho hàng',
      'Tồn kho theo sản phẩm tại từng kho/showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Tổng tồn', value: '4.216' },
        { label: 'Sắp hết', value: '48' },
        { label: 'Hết hàng', value: '18' },
        { label: 'Giá trị tồn', value: '24.8 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'reserved', label: 'Đang giữ', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ATL-01-COR', warehouse: 'Kho São Paulo', stock: 16, reserved: 5, status: 'Đủ hàng' },
        { sku: 'SF-COR-04-CRE', warehouse: 'Kho Rio', stock: 32, reserved: 10, status: 'Đ đủ hàng' },
        { sku: 'SF-JUN-12-GOL', warehouse: 'Kho Rio', stock: 0, reserved: 0, status: 'Hết hàng' },
        { sku: 'SF-BED-09-JUN', warehouse: 'Kho Brasília', stock: 6, reserved: 4, status: 'Sắp hết' },
      ],
      ['Nhập kho', 'Kiểm kê']
    ),
    mod(
      'pricing',
      'Giá bán',
      'Bảng giá niêm yết, giá khuyến mãi và giá đại lý.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Bảng giá', value: '7' },
        { label: 'SP đang giảm giá', value: '84' },
        { label: 'Giảm trung bình', value: '22%' },
        { label: 'Biên lợi nhuận', value: '38%', trend: '+4%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'Giá niêm yết', type: 'money' },
        { key: 'sale', label: 'Giá bán', type: 'money' },
        { key: 'dealer', label: 'Giá đại lý', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'SF-ATL-01', list: money(36000000), sale: money(28500000), dealer: money(24800000), status: 'Đang giảm' },
        { sku: 'SF-COR-04', list: money(26000000), sale: money(21800000), dealer: money(19200000), status: 'Đang giảm' },
        { sku: 'SF-BED-09', list: money(18400000), sale: money(18400000), dealer: money(16200000), status: 'Giá gốc' },
        { sku: 'SF-GOL-03', list: money(41200000), sale: money(41200000), dealer: money(36800000), status: 'Giá gốc' },
      ],
      ['Tạo bảng giá']
    ),
  ],
};

// ----------------------------------------------------------------------
// KHO HÀNG
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa20AdminGroup = {
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
        { label: 'Kho', value: '8' },
        { label: 'Tổng tồn', value: '4.216' },
        { label: 'Đơn chờ xuất', value: '72' },
        { label: 'Tỷ lệ lấp đầy', value: '78%' },
      ],
      [
        { key: 'warehouse', label: 'Kho' },
        { key: 'city', label: 'Khu vực' },
        { key: 'stock', label: 'Tồn', type: 'number' },
        { key: 'fill', label: 'Lấp đầy' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Kho trung tâm São Paulo', city: 'São Paulo', stock: 1620, fill: '82%', status: 'Hoạt động' },
        { warehouse: 'Kho Rio de Janeiro', city: 'Rio', stock: 1286, fill: '85%', status: 'Hoạt động' },
        { warehouse: 'Kho Brasília', city: 'Brasília', stock: 648, fill: '62%', status: 'Hoạt động' },
        { warehouse: 'Kho ký gửi đại lý', city: 'Toàn quốc', stock: 662, fill: '68%', status: 'Hoạt động' },
      ],
      ['Thêm kho']
    ),
    mod(
      'receipts',
      'Nhập – Xuất kho',
      'Phiếu nhập từ xưởng và phiếu xuất giao khách.',
      'solar:import-bold-duotone',
      [
        { label: 'Phiếu tháng này', value: '238' },
        { label: 'Chờ duyệt', value: '14' },
        { label: 'Giá trị nhập', value: '5.6 tỷ' },
        { label: 'Giá trị xuất', value: '6.4 tỷ' },
      ],
      [
        { key: 'code', label: 'Mã phiếu' },
        { key: 'type', label: 'Loại' },
        { key: 'warehouse', label: 'Kho' },
        { key: 'value', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'PN-2609-018', type: 'Nhập', warehouse: 'Kho São Paulo', value: money(624000000), status: 'Hoàn tất' },
        { code: 'PX-2609-112', type: 'Xuất', warehouse: 'Kho Rio', value: money(168000000), status: 'Hoàn tất' },
        { code: 'PN-2609-019', type: 'Nhập', warehouse: 'Kho Brasília', value: money(128000000), status: 'Chờ duyệt' },
        { code: 'PX-2609-113', type: 'Xuất', warehouse: 'Kho São Paulo', value: money(38400000), status: 'Đang xử lý' },
      ],
      ['Tạo phiếu nhập', 'Tạo phiếu xuất']
    ),
    mod(
      'transfers',
      'Chuyển kho & Kiểm kê',
      'Điều chuyển hàng giữa các kho và biên bản kiểm kê định kỳ.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Lệnh chuyển', value: '42' },
        { label: 'Đang vận chuyển', value: '10' },
        { label: 'Lệch kiểm kê', value: '3' },
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
        { code: 'CK-0914', from: 'Kho Rio', to: 'Kho Brasília', items: 26, status: 'Đang vận chuyển' },
        { code: 'CK-0913', from: 'Kho São Paulo', to: 'Showroom Paulista', items: 10, status: 'Hoàn tất' },
        { code: 'KK-0905', from: 'Kho Rio', to: '—', items: 512, status: 'Lệch 3 món' },
      ],
      ['Tạo lệnh chuyển', 'Mở kiểm kê']
    ),
  ],
};

// ----------------------------------------------------------------------
// ĐƠN HÀNG
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa20AdminGroup = {
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
        { label: 'Đơn tháng này', value: '618', trend: '+18%' },
        { label: 'Chờ xác nhận', value: '34' },
        { label: 'Doanh thu', value: '8.4 tỷ', trend: '+15%' },
        { label: 'Giá trị TB/đơn', value: '16.8 tr' },
      ],
      [
        { key: 'code', label: 'Mã đơn' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'channel', label: 'Kênh' },
        { key: 'total', label: 'Tổng tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'SF-26091401', customer: 'Bruno Oliveira', channel: 'Website', total: money(28500000), status: 'Đang giao' },
        { code: 'SF-26091398', customer: 'Ana Santos', channel: 'Showroom São Paulo', total: money(41200000), status: 'Hoàn tất' },
        { code: 'SF-26091395', customer: 'Móveis Brasil Ltda', channel: 'Đại lý', total: money(218000000), status: 'Chờ xác nhận' },
        { code: 'SF-26091390', customer: 'Diego Ferreira', channel: 'Website', total: money(21800000), status: 'Đã huỷ' },
      ],
      ['Tạo đơn', 'Xuất Excel']
    ),
    mod(
      'payments',
      'Thanh toán',
      'Giao dịch thanh toán, đối soát cổng và trả góp.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Giao dịch tháng', value: '642' },
        { label: 'Thành công', value: '97.8%' },
        { label: 'Chờ đối soát', value: '16' },
        { label: 'Trả góp', value: '96 đơn' },
      ],
      [
        { key: 'txn', label: 'Mã giao dịch' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'method', label: 'Phương thức' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-94218', order: 'SF-26091401', method: 'Pix', amount: money(28500000), status: 'Thành công' },
        { txn: 'TXN-94215', order: 'SF-26091398', method: 'Chuyển khoản', amount: money(41200000), status: 'Thành công' },
        { txn: 'TXN-94212', order: 'SF-26091395', method: 'Công nợ đại lý', amount: money(218000000), status: 'Chờ đối soát' },
        { txn: 'TXN-94205', order: 'SF-26091390', method: 'Thẻ quốc tế', amount: money(21800000), status: 'Thất bại' },
      ],
      ['Đối soát']
    ),
    mod(
      'shipping',
      'Vận chuyển',
      'Điều phối giao lắp, đối tác vận chuyển và lịch lắp đặt.',
      'solar:delivery-bold-duotone',
      [
        { label: 'Đơn đang giao', value: '72' },
        { label: 'Giao đúng hẹn', value: '96%' },
        { label: 'Đội lắp đặt', value: '18' },
        { label: 'Phí VC tháng', value: '218 tr' },
      ],
      [
        { key: 'code', label: 'Vận đơn' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'carrier', label: 'Đơn vị' },
        { key: 'eta', label: 'Dự kiến' },
        STATUS_COL,
      ],
      [
        { code: 'VD-41218', order: 'SF-26091401', carrier: 'Đội xe nội bộ', eta: '17/09/2026', status: 'Đang giao' },
        { code: 'VD-41215', order: 'SF-26091398', carrier: 'Đội xe nội bộ', eta: '13/09/2026', status: 'Đã giao' },
        { code: 'VD-41211', order: 'SF-26091395', carrier: 'Correios Express', eta: '21/09/2026', status: 'Chờ lấy hàng' },
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
        { label: 'Giá trị hoàn', value: '168 tr' },
        { label: 'Thời gian TB', value: '2.5 ngày' },
      ],
      [
        { key: 'code', label: 'Mã yêu cầu' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'reason', label: 'Lý do' },
        { key: 'amount', label: 'Số tiền', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'HT-2609-05', order: 'SF-26091390', reason: 'Khách huỷ đơn', amount: money(21800000), status: 'Đã hoàn' },
        { code: 'HT-2609-06', order: 'SF-26091352', reason: 'Sai màu vải', amount: money(8200000), status: 'Đang xử lý' },
        { code: 'HT-2609-07', order: 'SF-26091340', reason: 'Giao trễ hẹn', amount: money(1600000), status: 'Chờ duyệt' },
      ],
      ['Duyệt hoàn tiền']
    ),
    mod(
      'returns',
      'Đổi trả',
      'Yêu cầu đổi/trả sản phẩm và tình trạng hàng hoàn.',
      'solar:restart-bold-duotone',
      [
        { label: 'Yêu cầu tháng', value: '10' },
        { label: 'Tỷ lệ đổi trả', value: '1.6%' },
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
        { code: 'DT-2609-03', product: 'Sofa Coral linen', type: 'Đổi màu', reason: 'Không hợp nội thất', status: 'Đang thu hồi' },
        { code: 'DT-2609-04', product: 'Sofa Atlantic teak', type: 'Trả hàng', reason: 'Lỗi đường may', status: 'Đã tái nhập' },
        { code: 'DT-2609-05', product: 'Sofa giường Ironworks', type: 'Đổi size', reason: 'Không vừa phòng', status: 'Chờ duyệt' },
      ],
      ['Tạo yêu cầu']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa20AdminGroup = {
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
        { label: 'Khách hàng', value: '16.820' },
        { label: 'Mới tháng này', value: '618', trend: '+14%' },
        { label: 'Khách VIP', value: '428' },
        { label: 'LTV trung bình', value: '42 tr' },
      ],
      [
        { key: 'name', label: 'Khách hàng' },
        { key: 'phone', label: 'Điện thoại' },
        { key: 'tier', label: 'Hạng' },
        { key: 'spent', label: 'Chi tiêu', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Bruno Oliveira', phone: '011 xxx 1234', tier: 'Vàng', spent: money(108400000), status: 'Hoạt động' },
        { name: 'Ana Santos', phone: '021 xxx 5678', tier: 'Bạc', spent: money(41200000), status: 'Hoạt động' },
        { name: 'Móveis Brasil Ltda', phone: '03 xxx 9000', tier: 'Đại lý', spent: money(2180000000), status: 'Hoạt động' },
        { name: 'Diego Ferreira', phone: '081 xxx 4477', tier: 'Thường', spent: money(21800000), status: 'Ngưng tương tác' },
      ],
      ['Thêm khách hàng', 'Nhập danh bạ']
    ),
    mod(
      'leads',
      'Leads',
      'Khách tiềm năng từ form, hotline, showroom và quảng cáo.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Lead tháng', value: '1.680' },
        { label: 'Đã liên hệ', value: '1.142' },
        { label: 'Tỷ lệ chốt', value: '21.4%', trend: '+3.1%' },
        { label: 'Lead nóng', value: '132' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Nguồn' },
        { key: 'interest', label: 'Quan tâm' },
        { key: 'owner', label: 'Phụ trách' },
        STATUS_COL,
      ],
      [
        { name: 'Camila Rodrigues', source: 'Instagram Ads', interest: 'Sofa teak thấp', owner: 'Elias', status: 'Lead nóng' },
        { name: 'Pedro Alves', source: 'Google Ads', interest: 'Sofa nhiệt đới', owner: 'Rafael', status: 'Đã liên hệ' },
        { name: 'Beatriz Lima', source: 'Showroom Rio', interest: 'Sofa giường', owner: 'Juliana', status: 'Đang tư vấn' },
        { name: 'Lucas Martins', source: 'WhatsApp', interest: 'Bộ sưu tập Atlantic', owner: 'Chưa gán', status: 'Mới' },
      ],
      ['Thêm lead', 'Phân bổ']
    ),
    mod(
      'purchase-history',
      'Lịch sử mua hàng',
      'Dòng thời gian giao dịch của từng khách hàng.',
      'solar:history-bold-duotone',
      [
        { label: 'Giao dịch', value: '24.820' },
        { label: 'Khách mua lại', value: '44%' },
        { label: 'Chu kỳ mua lại', value: '11 tháng' },
        { label: 'Đơn/khách', value: '1.7' },
      ],
      [
        { key: 'customer', label: 'Khách hàng' },
        { key: 'order', label: 'Đơn hàng' },
        { key: 'date', label: 'Ngày mua' },
        { key: 'total', label: 'Giá trị', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Bruno Oliveira', order: 'SF-26091401', date: '13/09/2026', total: money(28500000), status: 'Đang giao' },
        { customer: 'Bruno Oliveira', order: 'SF-25120432', date: '04/12/2025', total: money(68400000), status: 'Hoàn tất' },
        { customer: 'Ana Santos', order: 'SF-26091398', date: '12/09/2026', total: money(41200000), status: 'Hoàn tất' },
      ]
    ),
    mod(
      'care',
      'Chăm sóc khách hàng',
      'Ticket, lịch gọi lại, khảo sát hài lòng và bảo hành.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Ticket mở', value: '48' },
        { label: 'Thời gian phản hồi', value: '32 phút' },
        { label: 'CSAT', value: '4.9/5', trend: '+0.3' },
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
        { ticket: 'TK-9234', customer: 'Diego Ferreira', topic: 'Hoàn tiền đơn huỷ', agent: 'Juliana', status: 'Đang xử lý' },
        { ticket: 'TK-9231', customer: 'Bruno Oliveira', topic: 'Đặt lịch giao lắp', agent: 'Elias', status: 'Đã đóng' },
        { ticket: 'TK-9228', customer: 'Móveis Brasil Ltda', topic: 'Bảo hành khung teak', agent: 'Rafael', status: 'Chờ khách phản hồi' },
      ],
      ['Tạo ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa20AdminGroup = {
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
        { label: 'Chiến dịch', value: '32' },
        { label: 'Tỷ lệ mở', value: '44.2%', trend: '+4.1%' },
        { label: 'Tỷ lệ click', value: '8.4%' },
        { label: 'Doanh thu quy đổi', value: '1.12 tỷ' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'open', label: 'Tỷ lệ mở' },
        STATUS_COL,
      ],
      [
        { campaign: 'Mùa nhiệt đới – 30%', segment: 'Toàn bộ khách', sent: 16820, open: '46%', status: 'Đã gửi' },
        { campaign: 'Bộ sưu tập Atlantic mới', segment: 'Quan tâm sofa vải', sent: 4280, open: '52%', status: 'Đã gửi' },
        { campaign: 'Nhắc giỏ hàng bỏ quên', segment: 'Tự động', sent: 1124, open: '58%', status: 'Đang chạy' },
        { campaign: 'Chúc mừng sinh nhật', segment: 'Tự động', sent: 312, open: '64%', status: 'Đang chạy' },
      ],
      ['Tạo chiến dịch']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Tin nhắn thương hiệu, OTP và chăm sóc sau bán.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Tin đã gửi', value: '62.8K' },
        { label: 'Tỷ lệ nhận', value: '99.1%' },
        { label: 'Chi phí tháng', value: '42 tr' },
        { label: 'Brandname', value: 'SOFA20' },
      ],
      [
        { key: 'campaign', label: 'Chiến dịch' },
        { key: 'segment', label: 'Tệp gửi' },
        { key: 'sent', label: 'Đã gửi', type: 'number' },
        { key: 'cost', label: 'Chi phí', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Flash sale cuối tuần', segment: 'Khách São Paulo + Rio', sent: 22800, cost: money(16400000), status: 'Đã gửi' },
        { campaign: 'Nhắc lịch giao lắp', segment: 'Tự động', sent: 618, cost: money(420000), status: 'Đang chạy' },
        { campaign: 'Ưu đãi khách VIP', segment: 'Hạng Vàng', sent: 428, cost: money(284000), status: 'Lên lịch' },
      ],
      ['Tạo chiến dịch SMS']
    ),
    mod(
      'push',
      'Push Notification',
      'Thông báo đẩy web/app theo hành vi người dùng.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Người đăng ký', value: '34.2K' },
        { label: 'Tỷ lệ click', value: '5.2%' },
        { label: 'Thông báo tháng', value: '24' },
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
        { title: 'Giảm 30% sofa teak thấp', trigger: 'Thủ công', reach: 32400, ctr: '6.1%', status: 'Đã gửi' },
        { title: 'Sản phẩm bạn xem đã giảm giá', trigger: 'Hành vi', reach: 4820, ctr: '10.4%', status: 'Đang chạy' },
        { title: 'Showroom mới Rio', trigger: 'Vị trí', reach: 1820, ctr: '3.8%', status: 'Lên lịch' },
      ],
      ['Tạo thông báo']
    ),
    mod(
      'coupon',
      'Coupon',
      'Mã giảm giá, điều kiện áp dụng và giới hạn sử dụng.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Mã đang chạy', value: '22' },
        { label: 'Lượt dùng', value: '2.840' },
        { label: 'Giá trị giảm', value: '612 tr' },
        { label: 'Tỷ lệ dùng', value: '38%' },
      ],
      [
        { key: 'code', label: 'Mã' },
        { key: 'value', label: 'Ưu đãi' },
        { key: 'condition', label: 'Điều kiện' },
        { key: 'used', label: 'Đã dùng', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'IRONWORKS30', value: 'Giảm 30%', condition: 'Đơn từ 25 triệu', used: 1080, status: 'Đang chạy' },
        { code: 'FREESHIP', value: 'Miễn phí giao lắp', condition: 'Nội thành SP/Rio', used: 1420, status: 'Đang chạy' },
        { code: 'VIP6', value: 'Giảm 6 triệu', condition: 'Khách hạng Vàng', used: 128, status: 'Đang chạy' },
        { code: 'AUG25', value: 'Giảm 25%', condition: 'Đơn từ 12 triệu', used: 184, status: 'Hết hạn' },
      ],
      ['Tạo coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Cộng tác viên, hoa hồng và thanh toán đối soát.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Cộng tác viên', value: '368' },
        { label: 'Đơn giới thiệu', value: '524' },
        { label: 'Hoa hồng tháng', value: '418 tr' },
        { label: 'Tỷ lệ hoa hồng', value: '7%' },
      ],
      [
        { key: 'partner', label: 'Cộng tác viên' },
        { key: 'channel', label: 'Kênh' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'commission', label: 'Hoa hồng', type: 'money' },
        STATUS_COL,
      ],
      [
        { partner: 'Décor Brasil Review', channel: 'YouTube', orders: 112, commission: money(128000000), status: 'Đang hợp tác' },
        { partner: 'Ironworks Living Blog', channel: 'Blog', orders: 56, commission: money(52400000), status: 'Đang hợp tác' },
        { partner: 'Décor Tips BR', channel: 'TikTok', orders: 38, commission: money(31800000), status: 'Chờ đối soát' },
      ],
      ['Mời cộng tác viên']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa20AdminGroup = {
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
        { label: 'Doanh thu tháng', value: '8.4 tỷ', trend: '+15%' },
        { label: 'Lợi nhuận gộp', value: '3.2 tỷ' },
        { label: 'Đơn hàng', value: '618' },
        { label: 'AOV', value: '16.8 tr', trend: '+5%' },
      ],
      [
        { key: 'channel', label: 'Kênh bán' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'share', label: 'Tỷ trọng' },
        { key: 'growth', label: 'Tăng trưởng' },
      ],
      [
        { channel: 'Website', orders: 272, revenue: money(3480000000), share: '42%', growth: '+21%' },
        { channel: 'Showroom', orders: 212, revenue: money(2960000000), share: '35%', growth: '+10%' },
        { channel: 'Đại lý B2B', orders: 82, revenue: money(1680000000), share: '20%', growth: '+16%' },
        { channel: 'Sàn TMĐT', orders: 52, revenue: money(280000000), share: '3%', growth: '+4%' },
      ]
    ),
    mod(
      'best-sellers',
      'Sản phẩm bán chạy',
      'Xếp hạng sản phẩm theo doanh số và tồn kho tương ứng.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'SP bán chạy', value: '48' },
        { label: 'Top 10 đóng góp', value: '52%' },
        { label: 'SP không bán được', value: '18' },
        { label: 'Vòng quay tồn', value: '5.2' },
      ],
      [
        { key: 'product', label: 'Sản phẩm' },
        { key: 'sold', label: 'Đã bán', type: 'number' },
        { key: 'revenue', label: 'Doanh thu', type: 'money' },
        { key: 'stock', label: 'Tồn', type: 'number' },
      ],
      [
        { product: 'Sofa Atlantic teak thấp', sold: 112, revenue: money(3192000000), stock: 16 },
        { product: 'Sofa Coral linen', sold: 96, revenue: money(2092800000), stock: 32 },
        { product: 'Sofa Jungle xanh ngọc', sold: 64, revenue: money(2188800000), stock: 0 },
        { product: 'Sofa giường Ironworks', sold: 58, revenue: money(1067200000), stock: 6 },
      ]
    ),
    mod(
      'traffic',
      'Nguồn truy cập',
      'Phân bổ lưu lượng theo kênh và chất lượng phiên.',
      'solar:global-bold-duotone',
      [
        { label: 'Phiên tháng', value: '368K', trend: '+14%' },
        { label: 'Người dùng mới', value: '72%' },
        { label: 'Thời gian TB', value: '3:42' },
        { label: 'Tỷ lệ thoát', value: '38%' },
      ],
      [
        { key: 'source', label: 'Nguồn' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'bounce', label: 'Thoát' },
        { key: 'conversion', label: 'Chuyển đổi' },
      ],
      [
        { source: 'Organic Search', sessions: 168000, bounce: '34%', conversion: '2.8%' },
        { source: 'Paid Social', sessions: 82400, bounce: '44%', conversion: '2.0%' },
        { source: 'Direct', sessions: 64800, bounce: '31%', conversion: '3.6%' },
        { source: 'Referral', sessions: 32400, bounce: '40%', conversion: '2.3%' },
        { source: 'Email', sessions: 26400, bounce: '25%', conversion: '5.6%' },
      ]
    ),
    mod(
      'behavior',
      'Hành vi khách hàng',
      'Luồng xem trang, tìm kiếm nội bộ và tương tác sản phẩm.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Trang/phiên', value: '5.2' },
        { label: 'Thêm giỏ', value: '24.8K' },
        { label: 'Bỏ giỏ', value: '64%' },
        { label: 'Xem 360°', value: '12.4K' },
      ],
      [
        { key: 'step', label: 'Bước hành trình' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'drop', label: 'Rời bỏ' },
        { key: 'time', label: 'Thời gian TB' },
      ],
      [
        { step: 'Xem trang chủ', users: 368000, drop: '18%', time: '0:58' },
        { step: 'Xem danh mục', users: 301000, drop: '26%', time: '1:38' },
        { step: 'Xem chi tiết SP', users: 223000, drop: '40%', time: '3:02' },
        { step: 'Thêm vào giỏ', users: 24800, drop: '62%', time: '0:28' },
        { step: 'Hoàn tất thanh toán', users: 8200, drop: '—', time: '3:28' },
      ]
    ),
    mod(
      'conversion',
      'Tỷ lệ chuyển đổi',
      'Phễu chuyển đổi theo kênh, thiết bị và chiến dịch.',
      'solar:filter-bold-duotone',
      [
        { label: 'CR tổng', value: '2.42%', trend: '+0.5%' },
        { label: 'CR mobile', value: '1.96%' },
        { label: 'CR desktop', value: '3.28%' },
        { label: 'CR có tư vấn', value: '13.8%' },
      ],
      [
        { key: 'segment', label: 'Phân khúc' },
        { key: 'sessions', label: 'Phiên', type: 'number' },
        { key: 'orders', label: 'Đơn', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 128400, orders: 2516, cr: '1.96%' },
        { segment: 'Desktop – Organic', sessions: 42600, orders: 1397, cr: '3.28%' },
        { segment: 'Email remarketing', sessions: 26400, orders: 1478, cr: '5.60%' },
        { segment: 'Tư vấn showroom', sessions: 5600, orders: 773, cr: '13.8%' },
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
      { label: 'URL theo dõi', value: '64' },
      { label: 'Điểm trung bình', value: '91/100' },
      { label: 'Thiếu meta', value: '3' },
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
      { url: sample, title: `${name} – SOFA20`, keyword: 'sofa công nghiệp', position: 2, status: 'Tốt' },
      { url: `${sample}/atlantic`, title: 'Sofa teak thấp kiểu Brasil', keyword: 'sofa teak', position: 5, status: 'Tốt' },
      { url: `${sample}/jungle`, title: '', keyword: 'sofa nhiệt đới', position: 12, status: 'Thiếu meta' },
      { url: `${sample}/coral`, title: 'Sofa linen nhiệt đới cao cấp', keyword: 'sofa linen', position: 8, status: 'Cần cải thiện' },
    ],
    ['Quét SEO', 'Xuất báo cáo']
  );

const SEO_GROUP: Sofa20AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Trang danh mục', '/sofa20/products/category'),
    seoPage('product', 'Trang sản phẩm', '/sofa20/products'),
    seoPage('collection', 'Trang bộ sưu tập', '/sofa20/collections'),
    seoPage('project', 'Trang dự án', '/sofa20/projects'),
    seoPage('showroom', 'Trang showroom', '/sofa20/showrooms'),
    seoPage('blog', 'Trang blog', '/sofa20/blog'),
    seoPage('brand', 'Trang thương hiệu', '/sofa20/about'),
    mod(
      'sitemap',
      'Sitemap',
      'Sơ đồ site XML gửi tới công cụ tìm kiếm.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'URL trong sitemap', value: '1.848' },
        { label: 'Đã index', value: '1.762' },
        { label: 'Lỗi', value: '5' },
        { label: 'Cập nhật cuối', value: '14/09' },
      ],
      [
        { key: 'file', label: 'Tệp sitemap' },
        { key: 'urls', label: 'Số URL', type: 'number' },
        { key: 'indexed', label: 'Đã index', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 512, indexed: 498, status: 'Hợp lệ' },
        { file: 'sitemap-categories.xml', urls: 28, indexed: 28, status: 'Hợp lệ' },
        { file: 'sitemap-blog.xml', urls: 184, indexed: 176, status: 'Hợp lệ' },
        { file: 'sitemap-pages.xml', urls: 64, indexed: 58, status: '5 URL lỗi' },
      ],
      ['Tạo lại sitemap', 'Gửi Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Quy tắc thu thập dữ liệu cho từng bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Quy tắc', value: '16' },
        { label: 'Đường dẫn chặn', value: '9' },
        { label: 'Bot cho phép', value: '6' },
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
        { agent: '*', rule: 'Disallow', path: '/sofa20/admin', status: 'Hoạt động' },
        { agent: '*', rule: 'Disallow', path: '/sofa20/cart', status: 'Hoạt động' },
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
        { label: 'Loại schema', value: '10' },
        { label: 'URL áp dụng', value: '1.548' },
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
        { type: 'Product', scope: 'Trang sản phẩm', urls: 512, status: 'Hợp lệ' },
        { type: 'BreadcrumbList', scope: 'Toàn site', urls: 1548, status: 'Hợp lệ' },
        { type: 'Article', scope: 'Blog', urls: 184, status: '2 cảnh báo' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 16, status: 'Hợp lệ' },
        { type: 'FAQPage', scope: 'Trang FAQ', urls: 1, status: 'Hợp lệ' },
      ],
      ['Kiểm tra schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// PHÂN QUYỀN
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa20AdminGroup = {
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
        { label: 'Tài khoản', value: '48' },
        { label: 'Đang hoạt động', value: '44' },
        { label: 'Bật 2FA', value: '34' },
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
        { name: 'Elias Thornbury', email: 'carla@sofa20.br', role: 'Quản trị hệ thống', last: '15/09/2026 09:18', status: 'Hoạt động' },
        { name: 'Rafael Costa', email: 'rafael@sofa20.br', role: 'Quản lý bán hàng', last: '14/09/2026 17:48', status: 'Hoạt động' },
        { name: 'Juliana Silva', email: 'juliana@sofa20.br', role: 'CSKH', last: '15/09/2026 08:08', status: 'Hoạt động' },
        { name: 'Pedro Alves', email: 'pedro@sofa20.br', role: 'Biên tập nội dung', last: '02/08/2026 10:24', status: 'Bị khoá' },
      ],
      ['Mời người dùng']
    ),
    mod(
      'roles',
      'Vai trò',
      'Nhóm vai trò và phạm vi quyền tương ứng.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Vai trò', value: '9' },
        { label: 'Vai trò tuỳ chỉnh', value: '5' },
        { label: 'Người dùng gán', value: '48' },
        { label: 'Vai trò mặc định', value: 'Nhân viên' },
      ],
      [
        { key: 'role', label: 'Vai trò' },
        { key: 'users', label: 'Người dùng', type: 'number' },
        { key: 'scope', label: 'Phạm vi' },
        STATUS_COL,
      ],
      [
        { role: 'Quản trị hệ thống', users: 5, scope: 'Toàn quyền', status: 'Hệ thống' },
        { role: 'Quản lý bán hàng', users: 12, scope: 'Đơn hàng, CRM, Kho', status: 'Hệ thống' },
        { role: 'Biên tập nội dung', users: 8, scope: 'CMS, Blog, SEO', status: 'Tuỳ chỉnh' },
        { role: 'CSKH', users: 16, scope: 'CRM, Đổi trả, Hỗ trợ', status: 'Tuỳ chỉnh' },
        { role: 'Kế toán', users: 7, scope: 'Thanh toán, Hoàn tiền', status: 'Tuỳ chỉnh' },
      ],
      ['Tạo vai trò']
    ),
    mod(
      'permissions',
      'Quyền hạn',
      'Ma trận quyền chi tiết theo module và hành động.',
      'solar:key-bold-duotone',
      [
        { label: 'Module', value: '36' },
        { label: 'Quyền', value: '148' },
        { label: 'Quyền nhạy cảm', value: '18' },
        { label: 'Cần phê duyệt', value: '8' },
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
        { label: 'Sự kiện hôm nay', value: '1.680' },
        { label: 'Đăng nhập thất bại', value: '16' },
        { label: 'Thay đổi cấu hình', value: '11' },
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
        { time: '15/09 09:18', user: 'Elias Thornbury', action: 'Xuất bản trang chủ công nghiệp', ip: '189.45.x.18', status: 'Thành công' },
        { time: '15/09 08:46', user: 'Juliana Silva', action: 'Duyệt hoàn tiền HT-2609-05', ip: '189.45.x.26', status: 'Thành công' },
        { time: '15/09 08:02', user: 'unknown', action: 'Đăng nhập thất bại', ip: '58.61.x.218', status: 'Từ chối' },
        { time: '14/09 22:14', user: 'Rafael Costa', action: 'Sửa bảng giá đại lý', ip: '189.45.x.34', status: 'Thành công' },
      ],
      ['Xuất nhật ký']
    ),
  ],
};

export const SOFA20_ADMIN_GROUPS: Sofa20AdminGroup[] = [
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

export function findSofa20AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA20_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA20_ADMIN_KPIS = [
  { label: 'Doanh thu tháng', value: '8.4 tỷ', trend: '+15%', color: 'primary' as const },
  { label: 'Đơn hàng', value: '618', trend: '+18%', color: 'info' as const },
  { label: 'Khách hàng mới', value: '618', trend: '+14%', color: 'success' as const },
  { label: 'Tỷ lệ chuyển đổi', value: '2.42%', trend: '+0.5%', color: 'warning' as const },
];

export const SOFA20_ADMIN_ACTIVITIES = [
  { time: '09:18', text: 'Carla xuất bản lại Trang chủ industrial forge', tag: 'CMS' },
  { time: '08:46', text: 'Duyệt hoàn tiền HT-2609-05 (21.8tr)', tag: 'Đơn hàng' },
  { time: '08:08', text: '34 đơn hàng mới chờ xác nhận', tag: 'Đơn hàng' },
  { time: '07:30', text: 'Chiến dịch "Mùa nhiệt đới" đạt 46% tỷ lệ mở', tag: 'Marketing' },
  { time: '06:55', text: 'SKU SF-JUN-12-GOL hết hàng tại Kho Rio', tag: 'Kho hàng' },
];

// ----------------------------------------------------------------------
// Dữ liệu biểu đồ (demo)
// ----------------------------------------------------------------------

export const SOFA20_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA20_ADMIN_REVENUE_SERIES = [
  { name: 'Doanh thu (tỷ)', data: [4.2, 4.8, 5.2, 5.6, 6.0, 6.4, 7.2, 7.8, 8.4, 7.6, 8.0, 8.8] },
  { name: 'Mục tiêu (tỷ)', data: [4.4, 4.8, 5.4, 5.8, 6.2, 6.6, 7.0, 7.6, 8.0, 8.4, 8.8, 9.2] },
];

export const SOFA20_ADMIN_ORDER_SERIES = [
  { name: 'Đơn hàng', data: [268, 312, 342, 368, 392, 418, 492, 618, 568, 592, 638, 692] },
];

export const SOFA20_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Đại lý B2B', 'Sàn TMĐT', 'Mạng xã hội'],
  series: [42, 35, 20, 3, 6],
};

export const SOFA20_ADMIN_TOP_PRODUCTS = {
  labels: ['Sofa Atlantic 3S', 'Sofa Coral L', 'Armchair Golden', 'Sofa Bed Ironworks', 'Daybed Jungle'],
  series: [224, 192, 168, 128, 96],
};
