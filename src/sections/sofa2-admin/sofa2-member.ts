// SOFA2 ADMIN — Module Khách hàng (khu thành viên)
// 8 trang: Dashboard thành viên, Hồ sơ, Đơn hàng, Phiếu bảo hành, Điểm tích luỹ, Voucher,
// Khiếu nại, Hạng thành viên. Trang khách /sofa2/account đọc đơn hàng từ "Đơn hàng".
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

const schema = (
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[],
  clientPath = '/sofa2/account'
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

export const SOFA2_MEMBER_TIERS = ['Đồng', 'Bạc', 'Vàng', 'Kim cương'];
const CUSTOMERS = ['Nguyễn Minh Anh', 'Trần Quốc Bảo', 'Lê Thu Hà', 'Phạm Gia Huy', 'Võ Ngọc Lan'];

const ACCOUNT_STATUSES = ['Hoạt động', 'Chưa xác thực', 'Tạm khoá'];
const ORDER_STATUSES = ['Hoàn tất', 'Chờ xác nhận', 'Đang sản xuất', 'Đang giao', 'Đã giao', 'Đã huỷ'];
const WARRANTY_STATUSES = ['Còn hiệu lực', 'Chờ kích hoạt', 'Đang sửa chữa', 'Hết hạn'];
const POINT_STATUSES = ['Đã ghi nhận', 'Chờ duyệt', 'Đã huỷ'];
const VOUCHER_STATUSES = ['Đang hoạt động', 'Lên lịch', 'Tạm dừng', 'Hết hạn'];
const COMPLAINT_STATUSES = ['Đã giải quyết', 'Mới', 'Đang xử lý', 'Chờ khách phản hồi', 'Từ chối'];

// ----------------------------------------------------------------------

export const SOFA2_MEMBER_GROUP: Sofa2AdminGroup = {
  slug: 'member',
  name: 'Khách hàng',
  icon: 'solar:user-id-bold-duotone',
  modules: [
    mod('dashboard', 'Dashboard thành viên', 'Ghi chú nhanh & nhắc việc chăm sóc khách hàng hiển thị ở tổng quan khu thành viên.', 'solar:widget-5-bold-duotone',
      [{ label: 'Thành viên', value: '2.418', trend: '+6%' }, { label: 'Hoạt động 30 ngày', value: '1.102' }, { label: 'Giá trị TB/khách', value: '18,6 tr' }, { label: 'Khiếu nại mở', value: '4' }],
      [{ key: 'title', label: 'Việc cần làm' }, { key: 'customer', label: 'Khách hàng' }, { key: 'due', label: 'Hạn' }, { key: 'owner', label: 'Phụ trách' }, S],
      [
        { title: 'Gọi chúc mừng sinh nhật + tặng voucher', customer: CUSTOMERS[0], due: '18/10/2026', owner: 'Hà My', note: '', status: 'Đang làm' },
        { title: 'Nhắc kích hoạt phiếu bảo hành', customer: CUSTOMERS[3], due: '20/10/2026', owner: 'Quốc Đạt', note: 'Đơn SF-2291', status: 'Mới' },
        { title: 'Khảo sát hài lòng sau giao hàng', customer: CUSTOMERS[2], due: '12/10/2026', owner: 'Hà My', note: '5/5 sao', status: 'Xong' },
      ]),
    mod('profiles', 'Hồ sơ khách hàng', 'Thông tin cá nhân, liên hệ, hạng và trạng thái tài khoản.', 'solar:user-circle-bold-duotone',
      [{ label: 'Hồ sơ', value: '2.418' }, { label: 'Mới tháng này', value: '134', trend: '+12%' }, { label: 'Đã xác thực', value: '92%' }, { label: 'Kim cương', value: '38' }],
      [{ key: 'name', label: 'Họ tên' }, { key: 'phone', label: 'Điện thoại' }, { key: 'email', label: 'Email' }, { key: 'tier', label: 'Hạng' }, { key: 'spent', label: 'Chi tiêu (đ)', type: 'number' }, S],
      CUSTOMERS.map((name, i) => ({
        code: `KH-${1001 + i}`,
        name,
        phone: `09${i}1 234 56${i}`,
        email: `khach${i + 1}@example.com`,
        birthday: `${10 + i}/0${i + 3}/199${i}`,
        gender: i % 2 ? 'Nam' : 'Nữ',
        address: ['Q.1, TP.HCM', 'Cầu Giấy, Hà Nội', 'Hải Châu, Đà Nẵng', 'Q.7, TP.HCM', 'Tây Hồ, Hà Nội'][i],
        tier: SOFA2_MEMBER_TIERS[(4 - i) % 4],
        spent: [86500000, 42300000, 18900000, 11900000, 6400000][i],
        joined: `0${i + 1}/0${i + 2}/2025`,
        status: i === 4 ? 'Chưa xác thực' : 'Hoạt động',
      }))),
    mod('orders', 'Đơn hàng của khách', 'Lịch sử đơn của từng khách — hiển thị ở tab "Đơn hàng" trên trang Tài khoản.', 'solar:bag-4-bold-duotone',
      [{ label: 'Đơn', value: '5.736' }, { label: 'Đang xử lý', value: '61' }, { label: 'Doanh thu', value: '96,2 tỷ' }, { label: 'Tỉ lệ huỷ', value: '1,8%' }],
      [{ key: 'id', label: 'Mã đơn' }, { key: 'customer', label: 'Khách' }, { key: 'item', label: 'Sản phẩm' }, { key: 'date', label: 'Ngày' }, { key: 'total', label: 'Tổng (đ)', type: 'number' }, S],
      [
        { id: '#LX001', customer: CUSTOMERS[0], item: 'Sofa Oslo 3 Chỗ', date: '10/02/2025', total: 14500000, payment: 'Chuyển khoản', status: 'Đã giao' },
        { id: '#LX002', customer: CUSTOMERS[0], item: 'Sofa Copenhagen', date: '05/01/2025', total: 11900000, payment: 'COD', status: 'Hoàn tất' },
        { id: '#LX003', customer: CUSTOMERS[1], item: 'Sofa góc Milano', date: '12/10/2026', total: 28900000, payment: 'Trả góp 0%', status: 'Đang sản xuất' },
        { id: '#LX004', customer: CUSTOMERS[3], item: 'Sofa băng Nordic', date: '14/10/2026', total: 11900000, payment: 'Thẻ', status: 'Đang giao' },
      ]),
    mod('warranty', 'Phiếu bảo hành', 'Phiếu bảo hành điện tử theo sản phẩm — kích hoạt, gia hạn, lịch sử sửa chữa.', 'solar:shield-check-bold-duotone',
      [{ label: 'Phiếu', value: '4.920' }, { label: 'Còn hiệu lực', value: '4.310' }, { label: 'Đang sửa', value: '7' }, { label: 'Sắp hết hạn', value: '52' }],
      [{ key: 'code', label: 'Số phiếu' }, { key: 'customer', label: 'Khách' }, { key: 'product', label: 'Sản phẩm' }, { key: 'expires', label: 'Hết hạn' }, S],
      [
        { code: 'BH-2025-0001', customer: CUSTOMERS[0], orderId: '#LX001', product: 'Sofa Oslo 3 Chỗ', serial: 'OS3-77821', start: '12/02/2025', expires: '12/02/2035', history: '', status: 'Còn hiệu lực' },
        { code: 'BH-2026-0412', customer: CUSTOMERS[1], orderId: '#LX003', product: 'Sofa góc Milano', serial: 'MI-55102', start: '', expires: '', history: '', status: 'Chờ kích hoạt' },
        { code: 'BH-2024-0890', customer: CUSTOMERS[2], orderId: '#LX0890', product: 'Sofa da Verona', serial: 'VE-11203', start: '03/03/2024', expires: '03/03/2026', history: 'Thay đệm ngồi 08/2025', status: 'Đang sửa chữa' },
      ]),
    mod('points', 'Điểm tích luỹ', 'Cộng/trừ điểm thưởng theo đơn hàng, sinh nhật, đánh giá; đổi điểm lấy voucher.', 'solar:star-ring-bold-duotone',
      [{ label: 'Điểm đang lưu hành', value: '1,26 tr' }, { label: 'Cộng tháng này', value: '84.200' }, { label: 'Đã đổi', value: '31.500' }, { label: 'Quy đổi', value: '1đ/1.000đ' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'reason', label: 'Lý do' }, { key: 'points', label: 'Điểm', type: 'number' }, { key: 'date', label: 'Ngày' }, S],
      [
        { customer: CUSTOMERS[0], reason: 'Mua đơn #LX001', points: 14500, date: '10/02/2025', note: '', status: 'Đã ghi nhận' },
        { customer: CUSTOMERS[0], reason: 'Đổi voucher 500k', points: -5000, date: '01/09/2026', note: '', status: 'Đã ghi nhận' },
        { customer: CUSTOMERS[2], reason: 'Viết đánh giá có ảnh', points: 200, date: '13/10/2026', note: '', status: 'Chờ duyệt' },
        { customer: CUSTOMERS[3], reason: 'Quà sinh nhật', points: 1000, date: '14/10/2026', note: '', status: 'Đã ghi nhận' },
      ]),
    mod('vouchers', 'Voucher', 'Mã giảm giá dành cho thành viên — điều kiện, hạn dùng, giới hạn lượt.', 'solar:ticket-sale-bold-duotone',
      [{ label: 'Đang chạy', value: '6' }, { label: 'Đã dùng', value: '1.284' }, { label: 'Giảm đã cấp', value: '412 tr' }, { label: 'Tỉ lệ dùng', value: '38%' }],
      [{ key: 'code', label: 'Mã' }, { key: 'title', label: 'Ưu đãi' }, { key: 'tier', label: 'Hạng áp dụng' }, { key: 'used', label: 'Đã dùng', type: 'number' }, { key: 'expires', label: 'Hết hạn' }, S],
      [
        { code: 'WELCOME10', title: 'Giảm 10% đơn đầu', type: 'Phần trăm', value: 10, minOrder: 5000000, tier: 'Tất cả', limit: 1000, used: 412, expires: '31/12/2026', status: 'Đang hoạt động' },
        { code: 'VIP500K', title: 'Giảm 500.000đ', type: 'Số tiền', value: 500000, minOrder: 15000000, tier: 'Vàng', limit: 300, used: 128, expires: '30/11/2026', status: 'Đang hoạt động' },
        { code: 'BDAY2026', title: 'Quà sinh nhật 1 triệu', type: 'Số tiền', value: 1000000, minOrder: 20000000, tier: 'Kim cương', limit: 100, used: 14, expires: '31/12/2026', status: 'Đang hoạt động' },
        { code: 'TET2027', title: 'Lì xì Tết 12%', type: 'Phần trăm', value: 12, minOrder: 10000000, tier: 'Tất cả', limit: 2000, used: 0, expires: '15/02/2027', status: 'Lên lịch' },
      ]),
    mod('complaints', 'Khiếu nại', 'Khiếu nại về sản phẩm, giao hàng, dịch vụ — phân loại, mức độ, hướng xử lý, bồi thường.', 'solar:danger-triangle-bold-duotone',
      [{ label: 'Mở', value: '4', trend: '-2' }, { label: 'Xử lý TB', value: '2,1 ngày' }, { label: 'Hài lòng sau xử lý', value: '89%' }, { label: 'Bồi thường', value: '6,2 tr' }],
      [{ key: 'code', label: 'Mã' }, { key: 'customer', label: 'Khách' }, { key: 'subject', label: 'Nội dung' }, { key: 'severity', label: 'Mức độ' }, { key: 'created', label: 'Ngày' }, S],
      [
        { code: 'KN-310', customer: CUSTOMERS[1], orderId: '#LX003', type: 'Giao hàng', subject: 'Giao trễ 3 ngày so với hẹn', severity: 'Trung bình', created: '13/10/2026', detail: 'Khách phải nghỉ làm để chờ.', resolution: 'Xin lỗi + tặng voucher 300k', compensation: 300000, status: 'Đang xử lý' },
        { code: 'KN-309', customer: CUSTOMERS[2], orderId: '#LX0890', type: 'Sản phẩm', subject: 'Đệm ngồi bị lún', severity: 'Cao', created: '08/10/2026', detail: '', resolution: 'Thay đệm miễn phí theo bảo hành', compensation: 0, status: 'Đã giải quyết' },
        { code: 'KN-308', customer: CUSTOMERS[4], orderId: '', type: 'Dịch vụ', subject: 'Tư vấn viên không gọi lại', severity: 'Thấp', created: '15/10/2026', detail: '', resolution: '', compensation: 0, status: 'Mới' },
      ]),
    mod('tiers', 'Hạng thành viên', 'Ngưỡng chi tiêu, tỉ lệ tích điểm và quyền lợi theo hạng.', 'solar:crown-bold-duotone',
      [{ label: 'Hạng', value: '4' }, { label: 'Lên hạng tháng này', value: '27' }],
      [{ key: 'name', label: 'Hạng' }, { key: 'threshold', label: 'Chi tiêu từ (đ)', type: 'number' }, { key: 'rate', label: 'Tích điểm (%)', type: 'number' }, { key: 'members', label: 'Thành viên', type: 'number' }, S],
      [
        { name: 'Đồng', threshold: 0, rate: 1, members: 1620, benefits: 'Tích điểm 1%, ưu đãi sinh nhật 5%', status: 'Đang áp dụng' },
        { name: 'Bạc', threshold: 20000000, rate: 1.5, members: 560, benefits: 'Miễn phí vệ sinh sofa 1 lần/năm', status: 'Đang áp dụng' },
        { name: 'Vàng', threshold: 50000000, rate: 2, members: 200, benefits: 'Voucher VIP, giao lắp ưu tiên', status: 'Đang áp dụng' },
        { name: 'Kim cương', threshold: 100000000, rate: 3, members: 38, benefits: 'Tư vấn thiết kế riêng, bảo hành mở rộng +2 năm', status: 'Đang áp dụng' },
      ]),
  ],
};

// ----------------------------------------------------------------------

const customerField = (key = 'customer') =>
  f(key, 'Khách hàng', 'select', 'content', { required: true, options: CUSTOMERS });

export const SOFA2_MEMBER_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  dashboard: schema('việc chăm sóc', 'title', ['Xong', 'Mới', 'Đang làm', 'Huỷ'], [
    f('title', 'Việc cần làm', 'text', 'content', { required: true }),
    customerField(),
    f('note', 'Ghi chú', 'textarea', 'content', { multiline: 3 }),
    f('due', 'Hạn', 'text', 'display'),
    f('owner', 'Phụ trách', 'text', 'display'),
  ]),
  profiles: schema('khách hàng', 'name', ACCOUNT_STATUSES, [
    f('code', 'Mã khách', 'text', 'content', { required: true }),
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content'),
    f('birthday', 'Ngày sinh', 'text', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nữ', 'Nam', 'Khác'] }),
    f('address', 'Địa chỉ mặc định', 'textarea', 'content', { multiline: 2 }),
    f('tier', 'Hạng thành viên', 'select', 'display', { options: SOFA2_MEMBER_TIERS }),
    f('spent', 'Tổng chi tiêu (đ)', 'number', 'display'),
    f('joined', 'Ngày tham gia', 'text', 'display'),
  ]),
  orders: schema('đơn hàng', 'id', ORDER_STATUSES, [
    f('id', 'Mã đơn', 'text', 'content', { required: true }),
    customerField(),
    f('item', 'Sản phẩm', 'text', 'content', { required: true }),
    f('date', 'Ngày đặt', 'text', 'display'),
    f('total', 'Tổng tiền (đ)', 'number', 'display', { required: true }),
    f('payment', 'Thanh toán', 'select', 'display', { options: ['COD', 'Chuyển khoản', 'Thẻ', 'Trả góp 0%'] }),
  ]),
  warranty: schema('phiếu bảo hành', 'code', WARRANTY_STATUSES, [
    f('code', 'Số phiếu', 'text', 'content', { required: true }),
    customerField(),
    f('orderId', 'Mã đơn', 'text', 'content'),
    f('product', 'Sản phẩm', 'text', 'content', { required: true }),
    f('serial', 'Số serial', 'text', 'content'),
    f('history', 'Lịch sử sửa chữa', 'textarea', 'content', { multiline: 3 }),
    f('start', 'Ngày kích hoạt', 'text', 'display'),
    f('expires', 'Ngày hết hạn', 'text', 'display'),
  ], '/sofa2/warranty'),
  points: schema('giao dịch điểm', 'reason', POINT_STATUSES, [
    customerField(),
    f('reason', 'Lý do', 'text', 'content', { required: true }),
    f('points', 'Số điểm (+ cộng / − trừ)', 'number', 'content', { required: true }),
    f('note', 'Ghi chú', 'textarea', 'content', { multiline: 2 }),
    f('date', 'Ngày', 'text', 'display'),
  ]),
  vouchers: schema('voucher', 'code', VOUCHER_STATUSES, [
    f('code', 'Mã voucher', 'text', 'content', { required: true, maxLength: 20 }),
    f('title', 'Tên ưu đãi', 'text', 'content', { required: true }),
    f('type', 'Loại giảm', 'select', 'display', { options: ['Phần trăm', 'Số tiền'] }),
    f('value', 'Giá trị giảm', 'number', 'display', { required: true }),
    f('minOrder', 'Đơn tối thiểu (đ)', 'number', 'display'),
    f('tier', 'Hạng áp dụng', 'select', 'display', { options: ['Tất cả', ...SOFA2_MEMBER_TIERS] }),
    f('limit', 'Giới hạn lượt', 'number', 'display'),
    f('used', 'Đã dùng', 'number', 'display'),
    f('expires', 'Hết hạn', 'text', 'display'),
  ], '/sofa2/promotions'),
  complaints: schema('khiếu nại', 'subject', COMPLAINT_STATUSES, [
    f('code', 'Mã khiếu nại', 'text', 'content', { required: true }),
    customerField(),
    f('orderId', 'Mã đơn liên quan', 'text', 'content'),
    f('subject', 'Nội dung', 'text', 'content', { required: true }),
    f('detail', 'Mô tả chi tiết', 'textarea', 'content', { multiline: 3 }),
    f('resolution', 'Hướng xử lý', 'textarea', 'content', { multiline: 3 }),
    f('type', 'Loại', 'select', 'display', { options: ['Sản phẩm', 'Giao hàng', 'Lắp đặt', 'Dịch vụ', 'Thanh toán'] }),
    f('severity', 'Mức độ', 'select', 'display', { options: ['Thấp', 'Trung bình', 'Cao', 'Nghiêm trọng'] }),
    f('compensation', 'Bồi thường (đ)', 'number', 'display'),
    f('created', 'Ngày tạo', 'text', 'display'),
  ], '/sofa2/support'),
  tiers: schema('hạng', 'name', ['Đang áp dụng', 'Tạm dừng'], [
    f('name', 'Tên hạng', 'text', 'content', { required: true }),
    f('benefits', 'Quyền lợi', 'textarea', 'content', { multiline: 3 }),
    f('threshold', 'Chi tiêu từ (đ)', 'number', 'display', { required: true }),
    f('rate', 'Tỉ lệ tích điểm (%)', 'number', 'display'),
    f('members', 'Số thành viên', 'number', 'display'),
  ]),
};

export function getSofa2MemberSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_MEMBER_SCHEMAS[moduleSlug] : undefined;
}
