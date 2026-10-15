// SOFA2 ADMIN — Module Hỗ trợ (FAQ, trợ giúp, chat, ticket, hướng dẫn, chính sách)
// Dùng chung Sofa2AdminCmsView — form thêm/sửa/xoá, tab trạng thái, thao tác hàng loạt, CSV.
// ----------------------------------------------------------------------

import type { Sofa2AdminGroup } from './sofa2-admin-data';
import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const PUB = ['Đã xuất bản', 'Bản nháp', 'Ẩn'];
const CLIENT = '/sofa2/support';
const FAQ_TOPICS = ['Đặt hàng', 'Thanh toán', 'Giao hàng', 'Bảo hành', 'Đổi trả', 'Sản phẩm', 'Tài khoản'];
const AGENTS = ['Chưa phân công', 'Lan Anh', 'Minh Tuấn', 'Thu Hà', 'Quốc Bảo'];
const PRIORITY = ['Thấp', 'Trung bình', 'Cao', 'Khẩn cấp'];

const seo = [
  f('slug', 'Đường dẫn (slug)', 'text', 'seo', { maxLength: 120 }),
  f('metaTitle', 'Meta title', 'text', 'seo', { maxLength: 60 }),
  f('metaDescription', 'Meta description', 'textarea', 'seo', { multiline: 2, maxLength: 160 }),
];

/** Lược đồ cho các trang nội dung dạng bài (hướng dẫn / chính sách) */
const article = (entity: string, extra: Sofa2CmsField[] = []): Sofa2CmsSchema => ({
  clientPath: CLIENT,
  entity,
  titleKey: 'title',
  statusKey: 'status',
  statusOptions: PUB,
  publishLabel: 'Xuất bản',
  defaultStatus: 'Bản nháp',
  fields: [
    f('title', 'Tiêu đề', 'text', 'content', { required: true, maxLength: 150 }),
    f('summary', 'Tóm tắt', 'textarea', 'content', { multiline: 2, maxLength: 300 }),
    f('body', 'Nội dung chi tiết', 'textarea', 'content', { required: true, multiline: 8, maxLength: 10000 }),
    ...extra,
    f('version', 'Phiên bản', 'text', 'display', { maxLength: 20, placeholder: 'v1.0' }),
    f('effective', 'Ngày hiệu lực', 'date', 'display'),
    f('order', 'Thứ tự hiển thị', 'number', 'display'),
    f('showInFooter', 'Hiện link ở chân trang', 'switch', 'display'),
    ...seo,
    f('status', 'Trạng thái', 'select', 'display', { required: true, options: PUB }),
  ],
});

export const SOFA2_SUPPORT_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  faq: {
    clientPath: CLIENT,
    entity: 'câu hỏi',
    titleKey: 'question',
    statusKey: 'status',
    statusOptions: PUB,
    publishLabel: 'Xuất bản',
    defaultStatus: 'Bản nháp',
    fields: [
      f('question', 'Câu hỏi', 'text', 'content', { required: true, maxLength: 200 }),
      f('answer', 'Câu trả lời', 'textarea', 'content', { required: true, multiline: 5, maxLength: 3000 }),
      f('topic', 'Chủ đề', 'select', 'content', { required: true, options: FAQ_TOPICS }),
      f('tags', 'Thẻ (cách nhau dấu phẩy)', 'text', 'content'),
      f('order', 'Thứ tự', 'number', 'display'),
      f('featured', 'Ghim lên đầu', 'switch', 'display'),
      f('views', 'Lượt xem', 'number', 'display'),
      f('helpful', 'Lượt "hữu ích"', 'number', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: PUB }),
    ],
  },

  help: {
    clientPath: CLIENT,
    entity: 'bài trợ giúp',
    titleKey: 'title',
    statusKey: 'status',
    statusOptions: PUB,
    publishLabel: 'Xuất bản',
    defaultStatus: 'Bản nháp',
    fields: [
      f('title', 'Tiêu đề bài viết', 'text', 'content', { required: true, maxLength: 150 }),
      f('category', 'Chuyên mục', 'select', 'content', {
        required: true,
        options: ['Bắt đầu', 'Đơn hàng', 'Tài khoản', 'Bảo quản sofa', 'Lắp đặt', 'Chính sách'],
      }),
      f('summary', 'Tóm tắt', 'textarea', 'content', { multiline: 2, maxLength: 300 }),
      f('body', 'Nội dung', 'textarea', 'content', { required: true, multiline: 8, maxLength: 10000 }),
      f('cover', 'Ảnh minh hoạ (URL)', 'url', 'content'),
      f('video', 'Video hướng dẫn (URL)', 'url', 'content'),
      f('author', 'Người viết', 'text', 'display', { maxLength: 80 }),
      f('updated', 'Cập nhật', 'date', 'display'),
      f('views', 'Lượt xem', 'number', 'display'),
      ...seo,
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: PUB }),
    ],
  },

  chat: {
    clientPath: CLIENT,
    entity: 'phiên chat',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã kết thúc', 'Đang chờ', 'Đang chat', 'Bỏ lỡ'],
    publishLabel: 'Kết thúc phiên',
    defaultStatus: 'Đang chờ',
    fields: [
      f('code', 'Mã phiên', 'text', 'content', { required: true, maxLength: 30 }),
      f('customer', 'Khách hàng', 'text', 'content', { maxLength: 100, placeholder: 'Khách vãng lai' }),
      f('contact', 'Email / điện thoại', 'text', 'content', { maxLength: 120 }),
      f('channel', 'Kênh', 'select', 'content', { options: ['Website', 'Zalo', 'Messenger', 'Mobile'] }),
      f('topic', 'Chủ đề', 'select', 'content', { options: FAQ_TOPICS }),
      f('transcript', 'Nội dung trao đổi', 'textarea', 'content', { multiline: 6, maxLength: 10000 }),
      f('agent', 'Tư vấn viên', 'select', 'display', { options: AGENTS }),
      f('started', 'Bắt đầu', 'date', 'display'),
      f('waitSec', 'Thời gian chờ (giây)', 'number', 'display'),
      f('rating', 'Đánh giá (1–5)', 'number', 'display'),
      f('createTicket', 'Chuyển thành ticket', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Đang chờ', 'Đang chat', 'Đã kết thúc', 'Bỏ lỡ'],
      }),
    ],
  },

  ticket: {
    clientPath: CLIENT,
    entity: 'ticket',
    titleKey: 'code',
    statusKey: 'status',
    statusOptions: ['Đã giải quyết', 'Mới', 'Đang xử lý', 'Chờ khách', 'Đã đóng'],
    publishLabel: 'Đánh dấu đã giải quyết',
    defaultStatus: 'Mới',
    fields: [
      f('code', 'Mã ticket', 'text', 'content', { required: true, maxLength: 30 }),
      f('subject', 'Tiêu đề', 'text', 'content', { required: true, maxLength: 200 }),
      f('customer', 'Khách hàng', 'text', 'content', { required: true, maxLength: 100 }),
      f('email', 'Email', 'text', 'content', { maxLength: 255 }),
      f('order', 'Mã đơn liên quan', 'text', 'content', { maxLength: 30 }),
      f('topic', 'Loại yêu cầu', 'select', 'content', { required: true, options: FAQ_TOPICS }),
      f('message', 'Nội dung yêu cầu', 'textarea', 'content', { required: true, multiline: 5, maxLength: 5000 }),
      f('reply', 'Phản hồi / ghi chú xử lý', 'textarea', 'content', { multiline: 4, maxLength: 5000 }),
      f('priority', 'Mức ưu tiên', 'select', 'display', { required: true, options: PRIORITY }),
      f('agent', 'Người phụ trách', 'select', 'display', { options: AGENTS }),
      f('created', 'Ngày tạo', 'date', 'display'),
      f('due', 'Hạn xử lý (SLA)', 'date', 'display'),
      f('notifyCustomer', 'Gửi email khi cập nhật', 'switch', 'display'),
      f('status', 'Trạng thái', 'select', 'display', {
        required: true,
        options: ['Mới', 'Đang xử lý', 'Chờ khách', 'Đã giải quyết', 'Đã đóng'],
      }),
    ],
  },

  'guide-buy': article('hướng dẫn mua hàng', [
    f('steps', 'Các bước (mỗi dòng một bước)', 'textarea', 'content', { multiline: 5, maxLength: 3000 }),
  ]),
  'guide-pay': article('hướng dẫn thanh toán', [
    f('methods', 'Phương thức áp dụng (cách nhau dấu phẩy)', 'text', 'content', {
      placeholder: 'COD, Chuyển khoản, VNPay, Trả góp 0%',
    }),
  ]),
  shipping: article('chính sách giao hàng', [
    f('area', 'Khu vực áp dụng', 'text', 'content', { maxLength: 200 }),
    f('freeFrom', 'Miễn phí từ (đ)', 'number', 'content'),
    f('leadDays', 'Thời gian giao (ngày)', 'number', 'content'),
  ]),
  warranty: article('chính sách bảo hành', [
    f('years', 'Thời hạn bảo hành (năm)', 'number', 'content'),
    f('scope', 'Phạm vi bảo hành', 'textarea', 'content', { multiline: 3, maxLength: 2000 }),
  ]),
  returns: article('chính sách đổi trả', [
    f('days', 'Số ngày đổi trả', 'number', 'content'),
    f('conditions', 'Điều kiện đổi trả', 'textarea', 'content', { multiline: 3, maxLength: 2000 }),
  ]),
};

export function getSofa2SupportSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_SUPPORT_SCHEMAS[moduleSlug] : undefined;
}

// ----------------------------------------------------------------------
// Dữ liệu nhóm (menu, thống kê, cột bảng, dữ liệu mẫu)
// ----------------------------------------------------------------------

const ST = { key: 'status', label: 'Trạng thái', type: 'status' as const };

const articleMod = (
  slug: string,
  name: string,
  icon: string,
  rows: Record<string, string | number>[]
): Sofa2AdminGroup['modules'][number] => ({
  slug,
  name,
  icon,
  description: `Soạn thảo, phiên bản và xuất bản trang ${name.toLowerCase()} hiển thị cho khách.`,
  stats: [
    { label: 'Bài viết', value: String(rows.length) },
    { label: 'Lượt xem 30 ngày', value: '3.2K', trend: '+8%' },
    { label: 'Cập nhật gần nhất', value: String(rows[0]?.effective ?? '—') },
  ],
  columns: [
    { key: 'title', label: 'Tiêu đề' },
    { key: 'version', label: 'Phiên bản' },
    { key: 'effective', label: 'Hiệu lực' },
    ST,
  ],
  rows,
});

export const SOFA2_SUPPORT_GROUP: Sofa2AdminGroup = {
  slug: 'support',
  name: 'Hỗ trợ',
  icon: 'solar:lifebuoy-bold-duotone',
  modules: [
    {
      slug: 'faq',
      name: 'FAQ',
      icon: 'solar:question-circle-bold-duotone',
      description: 'Câu hỏi thường gặp theo chủ đề, ghim, thứ tự và đo mức hữu ích.',
      stats: [
        { label: 'Câu hỏi', value: '42' },
        { label: 'Lượt xem', value: '18.4K', trend: '+12%' },
        { label: 'Hữu ích', value: '91%' },
      ],
      columns: [
        { key: 'question', label: 'Câu hỏi' },
        { key: 'topic', label: 'Chủ đề' },
        { key: 'views', label: 'Lượt xem', type: 'number' },
        ST,
      ],
      rows: [
        { question: 'Bao lâu thì nhận được sofa?', answer: 'Hàng có sẵn giao 2–5 ngày; hàng đặt may 15–25 ngày.', topic: 'Giao hàng', order: 1, views: 4210, helpful: 380, status: 'Đã xuất bản' },
        { question: 'Có được trả góp 0% không?', answer: 'Có, qua thẻ tín dụng của các ngân hàng liên kết.', topic: 'Thanh toán', order: 2, views: 2890, helpful: 240, status: 'Đã xuất bản' },
        { question: 'Sofa được bảo hành bao lâu?', answer: 'Khung bảo hành dài hạn, đệm và vải theo chính sách.', topic: 'Bảo hành', order: 3, views: 2150, helpful: 198, status: 'Đã xuất bản' },
        { question: 'Có thể đổi màu vải sau khi đặt?', answer: 'Được trong 24 giờ trước khi sản xuất.', topic: 'Đặt hàng', order: 4, views: 640, helpful: 51, status: 'Bản nháp' },
      ],
    },
    {
      slug: 'help',
      name: 'Trung tâm trợ giúp',
      icon: 'solar:lifebuoy-bold-duotone',
      description: 'Bài hướng dẫn theo chuyên mục, video, ảnh minh hoạ và SEO.',
      stats: [
        { label: 'Bài viết', value: '28' },
        { label: 'Chuyên mục', value: '6' },
        { label: 'Lượt xem', value: '9.7K', trend: '+5%' },
      ],
      columns: [
        { key: 'title', label: 'Bài viết' },
        { key: 'category', label: 'Chuyên mục' },
        { key: 'updated', label: 'Cập nhật' },
        ST,
      ],
      rows: [
        { title: 'Cách vệ sinh sofa da đúng cách', category: 'Bảo quản sofa', author: 'Thu Hà', updated: '2026-10-02', views: 1840, status: 'Đã xuất bản' },
        { title: 'Theo dõi đơn hàng của bạn', category: 'Đơn hàng', author: 'Minh Tuấn', updated: '2026-09-21', views: 920, status: 'Đã xuất bản' },
        { title: 'Chuẩn bị mặt bằng trước khi lắp đặt', category: 'Lắp đặt', author: 'Quốc Bảo', updated: '2026-10-10', views: 0, status: 'Bản nháp' },
      ],
    },
    {
      slug: 'chat',
      name: 'Chat trực tuyến',
      icon: 'solar:chat-round-bold-duotone',
      description: 'Phiên chat với khách, phân công tư vấn viên, đánh giá và chuyển ticket.',
      stats: [
        { label: 'Phiên hôm nay', value: '37' },
        { label: 'Chờ trung bình', value: '42s' },
        { label: 'Hài lòng', value: '4.7/5' },
      ],
      columns: [
        { key: 'code', label: 'Mã phiên' },
        { key: 'customer', label: 'Khách' },
        { key: 'agent', label: 'Tư vấn viên' },
        { key: 'rating', label: 'Đánh giá', type: 'number' },
        ST,
      ],
      rows: [
        { code: 'CH-1042', customer: 'Nguyễn Hoàng', channel: 'Website', topic: 'Sản phẩm', agent: 'Lan Anh', started: '2026-10-15', waitSec: 18, rating: 5, status: 'Đã kết thúc' },
        { code: 'CH-1043', customer: 'Khách vãng lai', channel: 'Zalo', topic: 'Giao hàng', agent: 'Minh Tuấn', started: '2026-10-15', waitSec: 35, rating: 0, status: 'Đang chat' },
        { code: 'CH-1044', customer: 'Trần Mai', channel: 'Website', topic: 'Thanh toán', agent: 'Chưa phân công', started: '2026-10-15', waitSec: 70, rating: 0, status: 'Đang chờ' },
      ],
    },
    {
      slug: 'ticket',
      name: 'Gửi ticket hỗ trợ',
      icon: 'solar:ticket-bold-duotone',
      description: 'Tiếp nhận, phân công, ưu tiên, SLA và phản hồi yêu cầu hỗ trợ.',
      stats: [
        { label: 'Đang mở', value: '19' },
        { label: 'Quá hạn SLA', value: '2' },
        { label: 'Xử lý trung bình', value: '6.5h' },
      ],
      columns: [
        { key: 'code', label: 'Mã' },
        { key: 'subject', label: 'Tiêu đề' },
        { key: 'priority', label: 'Ưu tiên' },
        { key: 'agent', label: 'Phụ trách' },
        ST,
      ],
      rows: [
        { code: 'TK-2201', subject: 'Sofa giao bị trầy chân', customer: 'Lê Phương', order: 'DH-88213', topic: 'Đổi trả', priority: 'Cao', agent: 'Thu Hà', created: '2026-10-13', due: '2026-10-15', status: 'Đang xử lý' },
        { code: 'TK-2202', subject: 'Chưa nhận hoá đơn VAT', customer: 'Công ty Minh Phát', order: 'DH-88190', topic: 'Thanh toán', priority: 'Trung bình', agent: 'Quốc Bảo', created: '2026-10-14', due: '2026-10-17', status: 'Chờ khách' },
        { code: 'TK-2203', subject: 'Hỏi lịch bảo dưỡng đệm', customer: 'Phạm Long', order: '', topic: 'Bảo hành', priority: 'Thấp', agent: 'Chưa phân công', created: '2026-10-15', due: '2026-10-20', status: 'Mới' },
      ],
    },
    articleMod('guide-buy', 'Hướng dẫn mua hàng', 'solar:cart-bold-duotone', [
      { title: 'Đặt mua sofa online trong 4 bước', version: 'v2.1', effective: '2026-09-01', order: 1, status: 'Đã xuất bản' },
    ]),
    articleMod('guide-pay', 'Hướng dẫn thanh toán', 'solar:wallet-bold-duotone', [
      { title: 'Các phương thức thanh toán', version: 'v1.4', effective: '2026-08-15', order: 1, status: 'Đã xuất bản' },
      { title: 'Trả góp 0% qua thẻ tín dụng', version: 'v1.0', effective: '2026-10-20', order: 2, status: 'Bản nháp' },
    ]),
    articleMod('shipping', 'Chính sách giao hàng', 'solar:delivery-bold-duotone', [
      { title: 'Chính sách giao hàng & lắp đặt', version: 'v3.0', effective: '2026-07-01', order: 1, status: 'Đã xuất bản' },
    ]),
    articleMod('warranty', 'Chính sách bảo hành', 'solar:shield-check-bold-duotone', [
      { title: 'Chính sách bảo hành sản phẩm', version: 'v2.0', effective: '2026-06-01', order: 1, status: 'Đã xuất bản' },
    ]),
    articleMod('returns', 'Chính sách đổi trả', 'solar:refresh-circle-bold-duotone', [
      { title: 'Chính sách đổi trả', version: 'v1.2', effective: '2026-06-01', order: 1, status: 'Đã xuất bản' },
    ]),
  ],
};
