// SOFA2 ADMIN — Module Hỗ trợ khách hàng
// 9 trang: FAQ, Trung tâm trợ giúp, Chat trực tuyến, Ticket hỗ trợ, Hướng dẫn mua hàng,
// Hướng dẫn thanh toán, Chính sách giao hàng, Chính sách bảo hành, Chính sách đổi trả.
// Dùng chung Sofa2AdminCmsView (thêm/sửa/xoá/cập nhật, lọc trạng thái, thao tác hàng loạt).
// Trang khách tương ứng: /sofa2/support và /sofa2/warranty.
// ----------------------------------------------------------------------

import type { Sofa2AdminGroup, Sofa2AdminColumn, Sofa2AdminModule } from './sofa2-admin-data';
import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const status = (options: string[]) =>
  f('status', 'Trạng thái', 'select', 'display', { required: true, options });

const PUBLISH = ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'];

const schema = (
  clientPath: string,
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[],
  defaultStatus?: string
): Sofa2CmsSchema => ({
  clientPath,
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  defaultStatus: defaultStatus ?? statusOptions[1] ?? statusOptions[0],
  publishLabel: statusOptions[0],
  fields: [...fields, status(statusOptions)],
});

const mod = (
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa2AdminModule['stats'],
  columns: Sofa2AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa2AdminModule => ({ slug, name, description, icon, stats, columns, rows, actions });

const S: Sofa2AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };
const AGENTS = ['Minh Anh', 'Thu Hà', 'Đức Anh', 'Hoàng Long', 'Quốc Bảo', 'Chưa gán'];
const FAQ_TOPICS = ['Sản phẩm', 'Đặt hàng', 'Thanh toán', 'Giao hàng', 'Bảo hành', 'Đổi trả', 'Tài khoản'];
const CHANNELS = ['Website', 'Zalo', 'Messenger', 'Hotline', 'Email'];
const PRIORITY = ['Thấp', 'Trung bình', 'Cao', 'Khẩn cấp'];

// Các khối nội dung SEO dùng chung cho trang hướng dẫn / chính sách
const seoFields = [
  f('slug', 'Đường dẫn', 'text', 'seo', { helper: 'Tự sinh từ tiêu đề nếu để trống.' }),
  f('metaTitle', 'Tiêu đề SEO', 'text', 'seo', { maxLength: 60 }),
  f('metaDescription', 'Mô tả SEO', 'textarea', 'seo', { maxLength: 160, multiline: 3 }),
];

const articleFields = (sectionOptions: string[]) => [
  f('title', 'Tiêu đề mục', 'text', 'content', { required: true, maxLength: 120 }),
  f('section', 'Nhóm nội dung', 'select', 'content', { required: true, options: sectionOptions }),
  f('summary', 'Tóm tắt', 'textarea', 'content', { multiline: 2, maxLength: 240 }),
  f('content', 'Nội dung chi tiết', 'textarea', 'content', { required: true, multiline: 8 }),
  f('icon', 'Biểu tượng', 'text', 'display', { placeholder: 'solar:delivery-bold-duotone' }),
  f('position', 'Thứ tự hiển thị', 'number', 'display'),
  f('effectiveDate', 'Ngày hiệu lực', 'date', 'display'),
  f('version', 'Phiên bản', 'text', 'display', { placeholder: 'v1.0' }),
  f('updated', 'Cập nhật', 'date', 'display'),
  f('author', 'Người sửa', 'select', 'display', { options: AGENTS }),
  ...seoFields,
];

const articleColumns: Sofa2AdminColumn[] = [
  { key: 'title', label: 'Mục' },
  { key: 'section', label: 'Nhóm' },
  { key: 'position', label: 'Thứ tự', type: 'number' },
  { key: 'updated', label: 'Cập nhật' },
  S,
];

const article = (
  title: string,
  section: string,
  content: string,
  position: number,
  status = 'Đã xuất bản'
) => ({
  title,
  section,
  summary: content.slice(0, 120),
  content,
  position,
  version: 'v2.1',
  effectiveDate: '01/09/2026',
  updated: `${10 + position}/09/2026`,
  author: AGENTS[position % 4],
  status,
});

// ----------------------------------------------------------------------

export const SOFA2_SUPPORT_GROUP: Sofa2AdminGroup = {
  slug: 'support',
  name: 'Hỗ trợ',
  icon: 'solar:lifebuoy-bold-duotone',
  modules: [
    mod('faq', 'FAQ', 'Câu hỏi thường gặp hiển thị ở trang Hỗ trợ — nhóm chủ đề, thứ tự, đánh dấu nổi bật.', 'solar:question-circle-bold-duotone',
      [{ label: 'Câu hỏi', value: '48' }, { label: 'Lượt xem 30 ngày', value: '12.4K', trend: '+18%' }, { label: 'Hữu ích', value: '91%' }, { label: 'Bản nháp', value: '4' }],
      [{ key: 'question', label: 'Câu hỏi' }, { key: 'topic', label: 'Chủ đề' }, { key: 'views', label: 'Lượt xem', type: 'number' }, { key: 'position', label: 'Thứ tự', type: 'number' }, S],
      [
        { question: 'Sofa có được bảo hành bao lâu?', topic: 'Bảo hành', answer: 'Khung gỗ bảo hành 10 năm, đệm mút 3 năm, vải/da 1 năm.', views: 3420, helpful: 94, position: 1, featured: 'Có', status: 'Đã xuất bản' },
        { question: 'Bao lâu thì nhận được hàng?', topic: 'Giao hàng', answer: 'Hàng có sẵn giao 2–5 ngày; hàng đặt may 15–25 ngày.', views: 2980, helpful: 90, position: 2, featured: 'Có', status: 'Đã xuất bản' },
        { question: 'Có hỗ trợ trả góp 0% không?', topic: 'Thanh toán', answer: 'Có, trả góp 0% 6–12 tháng qua thẻ tín dụng cho đơn từ 10 triệu.', views: 1860, helpful: 88, position: 3, featured: 'Không', status: 'Đã xuất bản' },
        { question: 'Tôi có thể đổi màu vải sau khi đặt?', topic: 'Đặt hàng', answer: 'Được đổi miễn phí trong 24h trước khi đơn vào sản xuất.', views: 940, helpful: 85, position: 4, featured: 'Không', status: 'Đã xuất bản' },
        { question: 'Đổi trả trong bao nhiêu ngày?', topic: 'Đổi trả', answer: '30 ngày với sản phẩm còn nguyên vẹn, có hoá đơn.', views: 1420, helpful: 92, position: 5, featured: 'Có', status: 'Đã xuất bản' },
        { question: 'Làm sao để vệ sinh sofa da?', topic: 'Sản phẩm', answer: 'Lau khăn ẩm, dùng dung dịch dưỡng da chuyên dụng 3 tháng/lần.', views: 620, helpful: 80, position: 6, featured: 'Không', status: 'Bản nháp' },
      ], ['Thêm câu hỏi']),

    mod('help-center', 'Trung tâm trợ giúp', 'Bài viết hướng dẫn theo danh mục — tài liệu sử dụng, bảo quản, lắp đặt.', 'solar:lifebuoy-bold-duotone',
      [{ label: 'Bài viết', value: '64' }, { label: 'Danh mục', value: '8' }, { label: 'Tìm kiếm/ngày', value: '420' }, { label: 'Không có kết quả', value: '3%' }],
      [{ key: 'title', label: 'Bài viết' }, { key: 'category', label: 'Danh mục' }, { key: 'views', label: 'Lượt xem', type: 'number' }, { key: 'updated', label: 'Cập nhật' }, S],
      [
        { title: 'Hướng dẫn bảo quản sofa vải', category: 'Bảo quản', excerpt: 'Hút bụi định kỳ, tránh ánh nắng trực tiếp.', content: '1. Hút bụi mỗi tuần...\n2. Xử lý vết bẩn ngay...', views: 2140, updated: '08/10/2026', author: 'Thu Hà', tags: 'vải, vệ sinh', status: 'Đã xuất bản' },
        { title: 'Cách lắp chân sofa module', category: 'Lắp đặt', excerpt: 'Lắp chân và ghép module trong 10 phút.', content: 'Chuẩn bị tua vít...', views: 1280, updated: '02/10/2026', author: 'Đức Anh', tags: 'lắp đặt', status: 'Đã xuất bản' },
        { title: 'Chọn kích thước sofa theo phòng', category: 'Tư vấn', excerpt: 'Sofa nên chiếm 2/3 chiều dài tường.', content: '...', views: 3460, updated: '28/09/2026', author: 'Minh Anh', tags: 'kích thước', status: 'Đã xuất bản' },
        { title: 'Quản lý tài khoản & điểm thưởng', category: 'Tài khoản', excerpt: 'Đăng ký, đổi mật khẩu, đổi điểm.', content: '...', views: 540, updated: '20/09/2026', author: 'Hoàng Long', tags: 'tài khoản', status: 'Bản nháp' },
      ], ['Viết bài']),

    mod('live-chat', 'Chat trực tuyến', 'Hội thoại từ widget chat, Zalo, Messenger — phân công tư vấn viên, theo dõi thời gian phản hồi.', 'solar:chat-round-dots-bold-duotone',
      [{ label: 'Hội thoại hôm nay', value: '86', trend: '+12%' }, { label: 'Phản hồi TB', value: '42 giây' }, { label: 'Đang chờ', value: '5' }, { label: 'Hài lòng', value: '4.8/5' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'channel', label: 'Kênh' }, { key: 'lastMessage', label: 'Tin nhắn cuối' }, { key: 'agent', label: 'Tư vấn viên' }, { key: 'startedAt', label: 'Bắt đầu' }, S],
      [
        { customer: 'Nguyễn Minh Anh', phone: '0901234567', channel: 'Website', lastMessage: 'Sofa Oslo còn màu xám không ạ?', agent: 'Thu Hà', startedAt: '15/10/2026 09:12', waitSeconds: 18, rating: 5, status: 'Đang chat' },
        { customer: 'Khách vãng lai #2281', phone: '', channel: 'Messenger', lastMessage: 'Showroom Q.7 mở cửa mấy giờ?', agent: 'Chưa gán', startedAt: '15/10/2026 09:30', waitSeconds: 95, rating: 0, status: 'Chờ phản hồi' },
        { customer: 'Trần Quốc Bảo', phone: '0987654321', channel: 'Zalo', lastMessage: 'Cảm ơn shop, mình đặt luôn.', agent: 'Minh Anh', startedAt: '14/10/2026 16:05', waitSeconds: 24, rating: 5, status: 'Đã kết thúc' },
        { customer: 'Lê Thu Hà', phone: '0912345678', channel: 'Hotline', lastMessage: 'Cần kỹ thuật kiểm tra chân sofa.', agent: 'Đức Anh', startedAt: '14/10/2026 10:40', waitSeconds: 40, rating: 4, status: 'Chuyển ticket' },
      ], ['Phân công']),

    mod('tickets', 'Ticket hỗ trợ', 'Yêu cầu hỗ trợ gửi từ form trang khách — phân loại, ưu tiên, SLA, người xử lý.', 'solar:ticket-bold-duotone',
      [{ label: 'Ticket mở', value: '23' }, { label: 'Quá hạn SLA', value: '2', trend: '-1' }, { label: 'Xử lý TB', value: '6,5 giờ' }, { label: 'Đóng tuần này', value: '41' }],
      [{ key: 'code', label: 'Mã' }, { key: 'subject', label: 'Tiêu đề' }, { key: 'customer', label: 'Khách' }, { key: 'priority', label: 'Ưu tiên' }, { key: 'assignee', label: 'Phụ trách' }, { key: 'due', label: 'Hạn SLA' }, S],
      [
        { code: 'TK-2610-018', subject: 'Đệm ghế bị lún sau 3 tháng', customer: 'Lê Thu Hà', email: 'thuha@gmail.com', phone: '0912345678', category: 'Bảo hành', orderCode: 'LX26070112', priority: 'Cao', assignee: 'Đức Anh', due: '16/10/2026', content: 'Đệm bên trái lún rõ rệt.', resolution: '', status: 'Đang xử lý' },
        { code: 'TK-2610-017', subject: 'Chưa nhận email xác nhận đơn', customer: 'Phạm Gia Huy', email: 'giahuy@gmail.com', phone: '0931234567', category: 'Đặt hàng', orderCode: 'LX26101002', priority: 'Trung bình', assignee: 'Thu Hà', due: '15/10/2026', content: 'Đặt hàng hôm qua nhưng chưa có email.', resolution: 'Đã gửi lại email.', status: 'Đã giải quyết' },
        { code: 'TK-2610-016', subject: 'Yêu cầu đổi sang màu be', customer: 'Võ Ngọc Lan', email: 'ngoclan@gmail.com', phone: '0908111222', category: 'Đổi trả', orderCode: 'LX26092810', priority: 'Thấp', assignee: 'Chưa gán', due: '18/10/2026', content: 'Muốn đổi màu vải.', resolution: '', status: 'Mới' },
        { code: 'TK-2610-015', subject: 'Giao hàng trễ 3 ngày', customer: 'Trần Quốc Bảo', email: 'quocbao@gmail.com', phone: '0987654321', category: 'Giao hàng', orderCode: 'LX26100695', priority: 'Khẩn cấp', assignee: 'Hoàng Long', due: '14/10/2026', content: 'Đơn hẹn 11/10 chưa giao.', resolution: '', status: 'Chờ khách' },
      ], ['Tạo ticket']),

    mod('buying-guide', 'Hướng dẫn mua hàng', 'Các bước đặt hàng online hiển thị ở trang Hỗ trợ.', 'solar:cart-check-bold-duotone',
      [{ label: 'Bước', value: '5' }, { label: 'Lượt xem', value: '4.2K' }, { label: 'Thoát trang', value: '22%' }, { label: 'Cập nhật', value: '14/09' }],
      articleColumns,
      [
        article('Bước 1 — Chọn sản phẩm', 'Các bước đặt hàng', 'Tìm theo danh mục hoặc bộ lọc, xem chi tiết kích thước, chất liệu.', 1),
        article('Bước 2 — Chọn biến thể & thêm vào giỏ', 'Các bước đặt hàng', 'Chọn màu vải, kích thước rồi bấm "Thêm vào giỏ".', 2),
        article('Bước 3 — Điền thông tin giao hàng', 'Các bước đặt hàng', 'Nhập họ tên, số điện thoại, địa chỉ nhận hàng.', 3),
        article('Bước 4 — Chọn thanh toán & xác nhận', 'Các bước đặt hàng', 'Chọn phương thức thanh toán, áp mã giảm giá và đặt hàng.', 4),
        article('Đặt hàng qua hotline / showroom', 'Kênh khác', 'Gọi 1900 6868 hoặc ghé showroom để được tư vấn trực tiếp.', 5, 'Bản nháp'),
      ], ['Thêm bước']),

    mod('payment-guide', 'Hướng dẫn thanh toán', 'Phương thức thanh toán, thông tin chuyển khoản, trả góp.', 'solar:wallet-money-bold-duotone',
      [{ label: 'Phương thức', value: '6' }, { label: 'Lượt xem', value: '2.8K' }, { label: 'Hỏi về trả góp', value: '34%' }, { label: 'Cập nhật', value: '12/09' }],
      articleColumns,
      [
        article('Thanh toán khi nhận hàng (COD)', 'Phương thức', 'Áp dụng đơn dưới 50 triệu trong khu vực nội thành.', 1),
        article('Chuyển khoản ngân hàng', 'Phương thức', 'Vietcombank 0071 000 123 456 — CTY LUXE SOFA. Nội dung: mã đơn hàng.', 2),
        article('Thẻ / VNPay / Ví MoMo', 'Phương thức', 'Thanh toán an toàn qua cổng VNPay, hỗ trợ thẻ nội địa và quốc tế.', 3),
        article('Trả góp 0% qua thẻ tín dụng', 'Trả góp', 'Kỳ hạn 6–12 tháng cho đơn từ 10 triệu với 25 ngân hàng liên kết.', 4),
        article('Xuất hoá đơn VAT', 'Hoá đơn', 'Cung cấp thông tin công ty khi đặt hàng, hoá đơn gửi qua email trong 7 ngày.', 5),
      ], ['Thêm mục']),

    mod('shipping-policy', 'Chính sách giao hàng', 'Phạm vi, phí, thời gian giao hàng và lắp đặt.', 'solar:delivery-bold-duotone',
      [{ label: 'Mục', value: '5' }, { label: 'Tỉnh thành phục vụ', value: '63' }, { label: 'Đúng hẹn', value: '94%' }, { label: 'Phiên bản', value: 'v2.1' }],
      articleColumns,
      [
        article('Phạm vi giao hàng', 'Phạm vi & phí', 'Giao toàn quốc; nội thành Hà Nội, TP.HCM, Đà Nẵng giao bằng đội xe LUXE.', 1),
        article('Phí giao hàng', 'Phạm vi & phí', 'Miễn phí nội thành cho đơn từ 20 triệu; ngoại thành tính theo km.', 2),
        article('Thời gian giao hàng', 'Thời gian', 'Hàng có sẵn 2–5 ngày, hàng đặt may 15–25 ngày làm việc.', 3),
        article('Lắp đặt miễn phí', 'Lắp đặt', 'Kỹ thuật viên lắp đặt và hướng dẫn sử dụng tại nhà.', 4),
        article('Kiểm tra khi nhận hàng', 'Nhận hàng', 'Khách kiểm tra sản phẩm trước khi ký biên bản giao nhận.', 5),
      ], ['Thêm mục']),

    mod('warranty-policy', 'Chính sách bảo hành', 'Thời hạn, điều kiện, quy trình bảo hành — đồng bộ trang Bảo hành.', 'solar:shield-check-bold-duotone',
      [{ label: 'Mục', value: '5' }, { label: 'Khung gỗ', value: '10 năm' }, { label: 'Yêu cầu tháng', value: '38' }, { label: 'Phiên bản', value: 'v2.1' }],
      articleColumns,
      [
        article('Thời hạn bảo hành', 'Thời hạn', 'Khung gỗ 10 năm, đệm mút 3 năm, vải/da và phụ kiện 1 năm.', 1),
        article('Điều kiện bảo hành', 'Điều kiện', 'Sản phẩm còn tem, có phiếu bảo hành hoặc mã đơn hàng hợp lệ.', 2),
        article('Trường hợp không bảo hành', 'Điều kiện', 'Hư hỏng do thiên tai, sử dụng sai cách, tự ý sửa chữa.', 3),
        article('Quy trình bảo hành', 'Quy trình', 'Gửi yêu cầu → kỹ thuật kiểm tra trong 48h → sửa chữa/thay thế.', 4),
        article('Bảo dưỡng định kỳ', 'Dịch vụ thêm', 'Miễn phí vệ sinh, bảo dưỡng 1 lần/năm trong 3 năm đầu.', 5, 'Bản nháp'),
      ], ['Thêm mục']),

    mod('return-policy', 'Chính sách đổi trả', 'Thời hạn, điều kiện, chi phí và quy trình đổi trả, hoàn tiền.', 'solar:refresh-circle-bold-duotone',
      [{ label: 'Mục', value: '5' }, { label: 'Thời hạn', value: '30 ngày' }, { label: 'Tỉ lệ đổi trả', value: '1,8%' }, { label: 'Phiên bản', value: 'v2.1' }],
      articleColumns,
      [
        article('Thời hạn đổi trả', 'Thời hạn', 'Đổi trả trong 30 ngày kể từ ngày nhận hàng.', 1),
        article('Điều kiện đổi trả', 'Điều kiện', 'Sản phẩm còn nguyên vẹn, chưa qua sử dụng, đủ phụ kiện và hoá đơn.', 2),
        article('Sản phẩm đặt may riêng', 'Điều kiện', 'Hàng may theo kích thước/vải riêng không áp dụng đổi trả, trừ lỗi sản xuất.', 3),
        article('Chi phí đổi trả', 'Chi phí', 'Miễn phí nếu lỗi từ LUXE; khách chịu phí vận chuyển khi đổi ý.', 4),
        article('Hoàn tiền', 'Hoàn tiền', 'Hoàn tiền trong 7 ngày làm việc qua phương thức thanh toán ban đầu.', 5),
      ], ['Thêm mục']),
  ],
};

// ----------------------------------------------------------------------

const policySchema = (clientPath: string, entity: string, sections: string[]) =>
  schema(clientPath, entity, 'title', PUBLISH, articleFields(sections));

export const SOFA2_SUPPORT_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  faq: schema('/sofa2/support', 'câu hỏi', 'question', PUBLISH, [
    f('question', 'Câu hỏi', 'text', 'content', { required: true, maxLength: 160 }),
    f('topic', 'Chủ đề', 'select', 'content', { required: true, options: FAQ_TOPICS }),
    f('answer', 'Câu trả lời', 'textarea', 'content', { required: true, multiline: 6 }),
    f('relatedLink', 'Liên kết tham khảo', 'url', 'content', { placeholder: '/sofa2/warranty' }),
    f('position', 'Thứ tự', 'number', 'display'),
    f('featured', 'Hiện ở mục nổi bật', 'select', 'display', { options: ['Có', 'Không'] }),
    f('views', 'Lượt xem', 'number', 'display'),
    f('helpful', 'Tỉ lệ hữu ích (%)', 'number', 'display'),
    ...seoFields,
  ]),

  'help-center': schema('/sofa2/support', 'bài viết trợ giúp', 'title', PUBLISH, [
    f('title', 'Tiêu đề bài viết', 'text', 'content', { required: true, maxLength: 120 }),
    f('category', 'Danh mục', 'select', 'content', {
      required: true,
      options: ['Tư vấn', 'Bảo quản', 'Lắp đặt', 'Tài khoản', 'Đặt hàng', 'Thanh toán', 'Bảo hành', 'Khác'],
    }),
    f('excerpt', 'Tóm tắt', 'textarea', 'content', { multiline: 2, maxLength: 200 }),
    f('content', 'Nội dung', 'textarea', 'content', { required: true, multiline: 10 }),
    f('cover', 'Ảnh minh hoạ', 'url', 'content'),
    f('video', 'Video hướng dẫn', 'url', 'content'),
    f('tags', 'Từ khoá tìm kiếm', 'text', 'display', { helper: 'Ngăn cách bằng dấu phẩy.' }),
    f('views', 'Lượt xem', 'number', 'display'),
    f('updated', 'Cập nhật', 'date', 'display'),
    f('author', 'Tác giả', 'select', 'display', { options: AGENTS }),
    ...seoFields,
  ]),

  'live-chat': {
    ...schema('/sofa2/support', 'hội thoại', 'customer', ['Đang chat', 'Chờ phản hồi', 'Chuyển ticket', 'Đã kết thúc'], [
      f('customer', 'Khách hàng', 'text', 'content', { required: true }),
      f('phone', 'Điện thoại', 'text', 'content'),
      f('channel', 'Kênh', 'select', 'content', { required: true, options: CHANNELS }),
      f('lastMessage', 'Tin nhắn cuối', 'textarea', 'content', { multiline: 3 }),
      f('cannedReply', 'Mẫu trả lời nhanh', 'select', 'content', {
        options: ['Chào mừng', 'Báo giá', 'Giờ mở cửa showroom', 'Thời gian giao hàng', 'Chuyển kỹ thuật'],
      }),
      f('agent', 'Tư vấn viên', 'select', 'display', { options: AGENTS }),
      f('startedAt', 'Bắt đầu lúc', 'text', 'display'),
      f('waitSeconds', 'Thời gian chờ (giây)', 'number', 'display'),
      f('rating', 'Đánh giá (1–5)', 'number', 'display'),
    ], 'Chờ phản hồi'),
    hideClientLink: false,
  },

  tickets: schema('/sofa2/support', 'ticket', 'subject', ['Mới', 'Đang xử lý', 'Chờ khách', 'Đã giải quyết', 'Đã đóng'], [
    f('code', 'Mã ticket', 'text', 'content', { required: true, placeholder: 'TK-2610-019' }),
    f('subject', 'Tiêu đề', 'text', 'content', { required: true, maxLength: 140 }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content'),
    f('phone', 'Điện thoại', 'text', 'content'),
    f('category', 'Loại yêu cầu', 'select', 'content', { required: true, options: FAQ_TOPICS }),
    f('orderCode', 'Mã đơn liên quan', 'text', 'content'),
    f('content', 'Nội dung yêu cầu', 'textarea', 'content', { required: true, multiline: 5 }),
    f('resolution', 'Hướng xử lý / phản hồi', 'textarea', 'content', { multiline: 4 }),
    f('priority', 'Mức ưu tiên', 'select', 'display', { required: true, options: PRIORITY }),
    f('assignee', 'Người phụ trách', 'select', 'display', { options: AGENTS }),
    f('due', 'Hạn SLA', 'date', 'display'),
  ], 'Mới'),

  'buying-guide': policySchema('/sofa2/support', 'bước hướng dẫn', ['Các bước đặt hàng', 'Kênh khác', 'Lưu ý']),
  'payment-guide': policySchema('/sofa2/support', 'mục thanh toán', ['Phương thức', 'Trả góp', 'Hoá đơn', 'Lưu ý']),
  'shipping-policy': policySchema('/sofa2/support', 'mục chính sách', ['Phạm vi & phí', 'Thời gian', 'Lắp đặt', 'Nhận hàng']),
  'warranty-policy': policySchema('/sofa2/warranty', 'mục chính sách', ['Thời hạn', 'Điều kiện', 'Quy trình', 'Dịch vụ thêm']),
  'return-policy': policySchema('/sofa2/support', 'mục chính sách', ['Thời hạn', 'Điều kiện', 'Chi phí', 'Hoàn tiền']),
};

export function getSofa2SupportSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_SUPPORT_SCHEMAS[moduleSlug] : undefined;
}
