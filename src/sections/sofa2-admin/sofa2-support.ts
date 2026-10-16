// SOFA2 ADMIN — Module Hỗ trợ khách hàng
// 10 trang: FAQ, Trung tâm trợ giúp, Chat trực tuyến, Ticket hỗ trợ, Hướng dẫn mua hàng,
// Hướng dẫn thanh toán, Chính sách giao hàng, Chính sách bảo hành, Chính sách đổi trả, Kênh liên hệ.
// Trang khách /sofa2/support đọc trực tiếp dữ liệu (FAQ, bài hướng dẫn/chính sách, kênh liên hệ)
// và ghi ticket mới vào trang "Ticket hỗ trợ".
// ----------------------------------------------------------------------

import { SOFA2_FAQS } from 'src/sections/sofa2/sofa2-pages-data';

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';
import type { Sofa2AdminGroup, Sofa2AdminColumn, Sofa2AdminModule } from './sofa2-admin-data';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const schema = (
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[],
  clientPath = '/sofa2/support'
): Sofa2CmsSchema => ({
  clientPath,
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  defaultStatus: statusOptions[1] ?? statusOptions[0],
  publishLabel: statusOptions[0],
  fields: [
    ...fields,
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: statusOptions }),
  ],
});

const mod = (
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa2AdminModule['stats'],
  columns: Sofa2AdminColumn[],
  rows: Record<string, string | number>[]
): Sofa2AdminModule => ({ slug, name, description, icon, stats, columns, rows });

const S: Sofa2AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

export const SOFA2_SUPPORT_CATEGORIES = [
  'Đặt hàng & thanh toán',
  'Giao hàng & lắp đặt',
  'Bảo hành & sửa chữa',
  'Đổi trả & hoàn tiền',
  'Chất liệu & bảo quản',
  'Tài khoản',
];

const PUBLISHED = ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'];
const TICKET_STATUSES = ['Đã giải quyết', 'Mới', 'Đang xử lý', 'Chờ khách phản hồi', 'Đã đóng'];
const PRIORITIES = ['Thấp', 'Trung bình', 'Cao', 'Khẩn cấp'];
const AGENTS = ['Hà My (CSKH)', 'Quốc Đạt (Kỹ thuật)', 'Thanh Tâm (Kho vận)', 'Chưa phân công'];

/** Trang bài viết hướng dẫn / chính sách — cùng cấu trúc, trang khách hiển thị dạng accordion */
const ARTICLE_SLUGS = [
  'guide-buying',
  'guide-payment',
  'policy-shipping',
  'policy-warranty',
  'policy-return',
] as const;

const articleCols: Sofa2AdminColumn[] = [
  { key: 'title', label: 'Tiêu đề mục' },
  { key: 'order', label: 'Thứ tự', type: 'number' },
  { key: 'updated', label: 'Cập nhật' },
  S,
];

const article = (title: string, order: number, body: string, updated = '10/10/2026') => ({
  title,
  order,
  body,
  updated,
  status: 'Đã xuất bản',
});

// ----------------------------------------------------------------------

export const SOFA2_SUPPORT_GROUP: Sofa2AdminGroup = {
  slug: 'support',
  name: 'Hỗ trợ khách hàng',
  icon: 'solar:help-bold-duotone',
  modules: [
    mod('faq', 'FAQ', 'Câu hỏi thường gặp hiển thị trên trang Hỗ trợ — sắp xếp, phân loại, ẩn/hiện.', 'solar:question-circle-bold-duotone',
      [{ label: 'Câu hỏi', value: String(SOFA2_FAQS.length + 2) }, { label: 'Lượt xem', value: '12,4k' }, { label: 'Hữu ích', value: '91%' }, { label: 'Giảm ticket', value: '-18%' }],
      [{ key: 'question', label: 'Câu hỏi' }, { key: 'category', label: 'Danh mục' }, { key: 'order', label: 'Thứ tự', type: 'number' }, S],
      [
        ...SOFA2_FAQS.map((q, i) => ({ question: q.question, answer: q.answer, category: SOFA2_SUPPORT_CATEGORIES[i % 6], order: i + 1, status: 'Đã xuất bản' })),
        { question: 'Tôi có thể trả góp không?', answer: 'Có, trả góp 0% qua thẻ tín dụng 6–12 tháng cho đơn từ 10 triệu.', category: 'Đặt hàng & thanh toán', order: 20, status: 'Bản nháp' },
      ]),
    mod('help-center', 'Trung tâm trợ giúp', 'Bài viết kiến thức theo danh mục — tìm kiếm, gắn thẻ, theo dõi hiệu quả.', 'solar:book-bookmark-bold-duotone',
      [{ label: 'Bài viết', value: '24' }, { label: 'Danh mục', value: '6' }, { label: 'Lượt đọc', value: '8,2k' }, { label: 'Đánh giá TB', value: '4,6/5' }],
      [{ key: 'title', label: 'Bài viết' }, { key: 'category', label: 'Danh mục' }, { key: 'views', label: 'Lượt đọc', type: 'number' }, { key: 'updated', label: 'Cập nhật' }, S],
      [
        { title: 'Cách vệ sinh sofa vải đúng cách', category: 'Chất liệu & bảo quản', summary: 'Hút bụi hằng tuần, dùng khăn ẩm với dung dịch trung tính.', body: 'Hút bụi bề mặt và khe ghế mỗi tuần bằng đầu hút mềm. Khi có vết bẩn, thấm nhẹ bằng khăn trắng hơi ẩm, không chà xát mạnh. Thử dung dịch vệ sinh ở vùng khuất trước khi sử dụng trên toàn bộ bề mặt. Để sofa khô tự nhiên, tránh dùng nhiệt trực tiếp.', tags: 'vệ sinh, vải', views: 2140, updated: '08/10/2026', status: 'Đã xuất bản' },
        { title: 'Bảo dưỡng sofa da thật', category: 'Chất liệu & bảo quản', summary: 'Dưỡng da 3–6 tháng/lần, tránh nắng trực tiếp.', body: 'Lau bụi thường xuyên bằng khăn mềm khô. Dùng dung dịch chuyên dụng cho da thật và dưỡng định kỳ 3–6 tháng một lần. Không đặt sofa dưới nắng gắt hoặc gần nguồn nhiệt; xử lý chất lỏng bằng cách thấm nhẹ ngay khi vừa đổ.', tags: 'da, bảo dưỡng', views: 1780, updated: '01/10/2026', status: 'Đã xuất bản' },
        { title: 'Đổi mật khẩu tài khoản', category: 'Tài khoản', summary: 'Vào Tài khoản → Hồ sơ → Đổi mật khẩu.', body: 'Đăng nhập, mở mục Hồ sơ cá nhân và chọn Đổi mật khẩu. Nhập mật khẩu hiện tại, mật khẩu mới đủ mạnh và xác nhận để hoàn tất. Nếu không truy cập được tài khoản, hãy dùng chức năng Quên mật khẩu hoặc gửi ticket cho bộ phận hỗ trợ.', tags: 'tài khoản', views: 320, updated: '20/09/2026', status: 'Bản nháp' },
      ]),
    mod('live-chat', 'Chat trực tuyến', 'Phiên chat với khách, kịch bản trả lời nhanh và phân công tư vấn viên.', 'solar:chat-round-dots-bold-duotone',
      [{ label: 'Phiên hôm nay', value: '46' }, { label: 'Phản hồi TB', value: '42 giây' }, { label: 'Hài lòng', value: '94%' }, { label: 'Chờ', value: '3' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'topic', label: 'Chủ đề' }, { key: 'agent', label: 'Tư vấn viên' }, { key: 'started', label: 'Bắt đầu' }, S],
      [
        { customer: 'Nguyễn Minh Anh', contact: '0901234567', topic: 'Tư vấn kích thước sofa góc', agent: AGENTS[0], started: '15/10/2026 09:12', transcript: 'Khách hỏi sofa góc cho phòng 4x5m…', status: 'Đang chat' },
        { customer: 'Khách vãng lai', contact: '', topic: 'Phí giao hàng Đà Nẵng', agent: AGENTS[3], started: '15/10/2026 09:40', transcript: '', status: 'Chờ' },
        { customer: 'Lê Thu Hà', contact: 'ha@example.com', topic: 'Đổi màu vải', agent: AGENTS[0], started: '14/10/2026 16:05', transcript: 'Đã hướng dẫn đổi màu trước khi sản xuất.', status: 'Đã kết thúc' },
      ]),
    mod('tickets', 'Ticket hỗ trợ', 'Yêu cầu khách gửi từ trang Hỗ trợ — phân công, ưu tiên, SLA, phản hồi.', 'solar:ticket-bold-duotone',
      [{ label: 'Mở', value: '12' }, { label: 'Quá SLA', value: '2', trend: '-1' }, { label: 'Xử lý TB', value: '6,5 giờ' }, { label: 'Đã giải quyết', value: '87%' }],
      [{ key: 'code', label: 'Mã' }, { key: 'subject', label: 'Chủ đề' }, { key: 'category', label: 'Danh mục' }, { key: 'priority', label: 'Ưu tiên' }, { key: 'agent', label: 'Phụ trách' }, S],
      [
        { code: 'TK-1024', customer: 'Trần Quốc Bảo', contact: '0912000111', subject: 'Sofa bị lệch chân sau lắp đặt', category: 'Bảo hành & sửa chữa', priority: 'Cao', agent: AGENTS[1], created: '13/10/2026', message: 'Chân trái phía sau bị cập kênh.', reply: 'Kỹ thuật sẽ qua kiểm tra 16/10.', status: 'Đang xử lý' },
        { code: 'TK-1023', customer: 'Phạm Gia Huy', contact: 'huy@example.com', subject: 'Hỏi lịch giao hàng', category: 'Giao hàng & lắp đặt', priority: 'Trung bình', agent: AGENTS[2], created: '12/10/2026', message: 'Đơn SF-2291 khi nào giao?', reply: 'Giao 17/10, khung 9–11h.', status: 'Đã giải quyết' },
        { code: 'TK-1022', customer: 'Võ Ngọc Lan', contact: '0938777666', subject: 'Muốn đổi sang màu xám', category: 'Đổi trả & hoàn tiền', priority: 'Thấp', agent: AGENTS[3], created: '12/10/2026', message: '', reply: '', status: 'Mới' },
      ]),
    mod('guide-buying', 'Hướng dẫn mua hàng', 'Các bước đặt hàng hiển thị trên trang Hỗ trợ.', 'solar:cart-check-bold-duotone',
      [{ label: 'Bước', value: '4' }, { label: 'Lượt xem', value: '3,1k' }], articleCols,
      [
        article('Bước 1: Chọn sản phẩm', 1, 'Duyệt danh mục, chọn kích thước, màu và chất liệu, rồi bấm "Thêm vào giỏ".'),
        article('Bước 2: Kiểm tra giỏ hàng', 2, 'Kiểm tra số lượng, áp mã giảm giá và bấm "Thanh toán".'),
        article('Bước 3: Nhập thông tin giao hàng', 3, 'Điền người nhận, địa chỉ và chọn thời gian giao mong muốn.'),
        article('Bước 4: Thanh toán & xác nhận', 4, 'Chọn phương thức thanh toán; bạn sẽ nhận email xác nhận kèm mã đơn.'),
      ]),
    mod('guide-payment', 'Hướng dẫn thanh toán', 'Hướng dẫn từng phương thức thanh toán.', 'solar:card-transfer-bold-duotone',
      [{ label: 'Phương thức', value: '4' }], articleCols,
      [
        article('Thanh toán khi nhận hàng (COD)', 1, 'Thanh toán tiền mặt cho nhân viên giao hàng, áp dụng đơn dưới 50 triệu.'),
        article('Chuyển khoản ngân hàng', 2, 'Chuyển khoản theo thông tin trong email, ghi rõ mã đơn ở nội dung.'),
        article('Thẻ & ví điện tử', 3, 'Hỗ trợ Visa/Master, MoMo, VNPay — thanh toán an toàn qua cổng mã hoá.'),
        article('Trả góp 0%', 4, 'Trả góp 6–12 tháng qua thẻ tín dụng cho đơn từ 10 triệu.'),
      ]),
    mod('policy-shipping', 'Chính sách giao hàng', 'Thời gian, phí và phạm vi giao hàng, lắp đặt.', 'solar:delivery-bold-duotone',
      [{ label: 'Mục', value: '3' }], articleCols,
      [
        article('Thời gian giao hàng', 1, 'Hàng có sẵn 2–5 ngày; sofa thiết kế riêng 10–20 ngày.'),
        article('Phí giao hàng', 2, 'Miễn phí nội thành Hà Nội, TP.HCM, Đà Nẵng; tỉnh khác tính theo khoảng cách.'),
        article('Lắp đặt tại nhà', 3, 'Kỹ thuật viên lắp đặt miễn phí và thu dọn bao bì sau khi giao.'),
      ]),
    mod('policy-warranty', 'Chính sách bảo hành', 'Thời hạn, phạm vi và quy trình bảo hành.', 'solar:shield-check-bold-duotone',
      [{ label: 'Mục', value: '3' }], articleCols,
      [
        article('Thời hạn bảo hành', 1, 'Khung gỗ 10 năm, đệm mút 5 năm, vải/da 2 năm.'),
        article('Trường hợp không bảo hành', 2, 'Hư hỏng do sử dụng sai cách, thú cưng, hoá chất hoặc thiên tai.'),
        article('Quy trình yêu cầu bảo hành', 3, 'Gửi ticket kèm ảnh và số phiếu bảo hành; kỹ thuật phản hồi trong 24h.'),
      ]),
    mod('policy-return', 'Chính sách đổi trả', 'Điều kiện, thời hạn và hoàn tiền.', 'solar:refresh-circle-bold-duotone',
      [{ label: 'Mục', value: '3' }], articleCols,
      [
        article('Thời hạn đổi trả', 1, 'Đổi trả trong 7 ngày với hàng có sẵn còn nguyên trạng.'),
        article('Sản phẩm thiết kế riêng', 2, 'Không áp dụng đổi trả, trừ khi lỗi do nhà sản xuất.'),
        article('Hoàn tiền', 3, 'Hoàn tiền trong 5–7 ngày làm việc theo phương thức thanh toán ban đầu.'),
      ]),
    mod('channels', 'Kênh liên hệ', 'Hotline, email, chat… hiển thị ở đầu trang Hỗ trợ.', 'solar:phone-calling-bold-duotone',
      [{ label: 'Kênh bật', value: '3' }],
      [{ key: 'title', label: 'Kênh' }, { key: 'value', label: 'Thông tin' }, { key: 'order', label: 'Thứ tự', type: 'number' }, S],
      [
        { title: 'Hotline', value: '1900 6868', href: 'tel:19006868', sub: 'Gọi ngay 8:00 - 20:00', icon: 'solar:phone-bold-duotone', order: 1, status: 'Đang bật' },
        { title: 'Email', value: 'support@sofa2.vn', href: 'mailto:support@sofa2.vn', sub: 'Phản hồi trong 24h', icon: 'solar:letter-bold-duotone', order: 2, status: 'Đang bật' },
        { title: 'Chat trực tuyến', value: 'Chat với tư vấn viên', href: '#chat', sub: 'Hỗ trợ trực tiếp trên web', icon: 'solar:chat-round-dots-bold-duotone', order: 3, status: 'Đang bật' },
        { title: 'Zalo OA', value: 'Sofa2 Official', sub: 'Nhắn tin 24/7', icon: 'solar:chat-round-bold-duotone', order: 4, status: 'Tạm tắt' },
      ]),
  ],
};

// ----------------------------------------------------------------------

const articleSchema = (entity: string, clientPath = '/sofa2/support#guides') =>
  schema(entity, 'title', PUBLISHED, [
    f('title', 'Tiêu đề mục', 'text', 'content', { required: true, maxLength: 120 }),
    f('body', 'Nội dung', 'textarea', 'content', { required: true, multiline: 5 }),
    f('order', 'Thứ tự hiển thị', 'number', 'display'),
    f('updated', 'Ngày cập nhật', 'text', 'display'),
  ], clientPath);

export const SOFA2_SUPPORT_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  faq: schema('câu hỏi', 'question', PUBLISHED, [
    f('question', 'Câu hỏi', 'text', 'content', { required: true, maxLength: 160 }),
    f('answer', 'Câu trả lời', 'textarea', 'content', { required: true, multiline: 4 }),
    f('category', 'Danh mục', 'select', 'display', { options: SOFA2_SUPPORT_CATEGORIES }),
    f('order', 'Thứ tự hiển thị', 'number', 'display'),
  ], '/sofa2/support#faq'),
  'help-center': schema('bài viết', 'title', PUBLISHED, [
    f('title', 'Tiêu đề', 'text', 'content', { required: true }),
    f('summary', 'Mô tả ngắn', 'textarea', 'content', { required: true, multiline: 3 }),
    f('body', 'Nội dung hướng dẫn', 'textarea', 'content', { required: true, multiline: 7 }),
    f('category', 'Danh mục', 'select', 'display', { options: SOFA2_SUPPORT_CATEGORIES }),
    f('tags', 'Thẻ', 'text', 'seo'),
    f('views', 'Lượt đọc', 'number', 'display'),
    f('updated', 'Cập nhật', 'text', 'display'),
  ], '/sofa2/support#help-center'),
  'live-chat': schema('phiên chat', 'customer', ['Đang chat', 'Chờ', 'Đã kết thúc', 'Bỏ lỡ'], [
    f('customer', 'Khách', 'text', 'content', { required: true }),
    f('contact', 'Liên hệ', 'text', 'content'),
    f('topic', 'Chủ đề', 'text', 'content'),
    f('transcript', 'Nội dung trao đổi', 'textarea', 'content', { multiline: 4 }),
    f('reply', 'Phản hồi của tư vấn viên', 'textarea', 'content', { multiline: 3 }),
    f('agent', 'Tư vấn viên', 'select', 'display', { options: AGENTS }),
    f('started', 'Bắt đầu', 'text', 'display'),
  ], '/sofa2/support#chat'),
  tickets: schema('ticket', 'subject', TICKET_STATUSES, [
    f('code', 'Mã ticket', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('contact', 'Điện thoại / Email', 'text', 'content'),
    f('subject', 'Chủ đề', 'text', 'content', { required: true }),
    f('message', 'Mô tả của khách', 'textarea', 'content', { multiline: 3 }),
    f('reply', 'Phản hồi', 'textarea', 'content', { multiline: 3 }),
    f('category', 'Danh mục', 'select', 'display', { options: SOFA2_SUPPORT_CATEGORIES }),
    f('priority', 'Ưu tiên', 'select', 'display', { options: PRIORITIES }),
    f('agent', 'Phụ trách', 'select', 'display', { options: AGENTS }),
    f('created', 'Ngày tạo', 'text', 'display'),
  ], '/sofa2/support#ticket'),
  ...Object.fromEntries(ARTICLE_SLUGS.map((s) => [s, articleSchema('mục')])),
  channels: schema('kênh', 'title', ['Đang bật', 'Tạm tắt'], [
    f('title', 'Tên kênh', 'text', 'content', { required: true }),
    f('value', 'Thông tin hiển thị', 'text', 'content', { required: true }),
    f('href', 'Liên kết (tel:, mailto:, URL hoặc #chat)', 'text', 'display'),
    f('sub', 'Mô tả ngắn', 'text', 'content'),
    f('icon', 'Biểu tượng (Iconify)', 'text', 'display'),
    f('order', 'Thứ tự', 'number', 'display'),
  ], '/sofa2/support#contact-options'),
};

export function getSofa2SupportSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_SUPPORT_SCHEMAS[moduleSlug] : undefined;
}

/** Các nhóm bài hiển thị trên trang khách */
export const SOFA2_SUPPORT_ARTICLE_TABS: { slug: (typeof ARTICLE_SLUGS)[number]; label: string }[] = [
  { slug: 'guide-buying', label: 'Hướng dẫn mua hàng' },
  { slug: 'guide-payment', label: 'Hướng dẫn thanh toán' },
  { slug: 'policy-shipping', label: 'Chính sách giao hàng' },
  { slug: 'policy-warranty', label: 'Chính sách bảo hành' },
  { slug: 'policy-return', label: 'Chính sách đổi trả' },
];

/** Sắp xếp + lọc bản ghi đã xuất bản để hiển thị cho khách */
export const sofa2Visible = (rows: Record<string, string | number>[], on = 'Đã xuất bản') =>
  rows.filter((r) => r.status === on).sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0));
