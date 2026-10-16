// SOFA2 ADMIN — Module Khách hàng (đồng bộ với trang Tài khoản khách hàng /sofa2/account)
// 7 trang: Dashboard, Hồ sơ, Đơn hàng, Phiếu bảo hành, Điểm tích lũy, Voucher, Khiếu nại.
// ----------------------------------------------------------------------

import type { Sofa2AdminGroup, Sofa2AdminColumn, Sofa2AdminModule } from './sofa2-admin-data';
import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

type Row = Record<string, string | number>;

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
  defaultStatus = statusOptions[0]
): Sofa2CmsSchema => ({
  clientPath: '/sofa2/account',
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  defaultStatus,
  publishLabel: statusOptions[0],
  fields: [...fields, f('status', 'Trạng thái', 'select', 'display', { required: true, options: statusOptions })],
});

const mod = (
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa2AdminModule['stats'],
  columns: Sofa2AdminColumn[],
  rows: Row[]
): Sofa2AdminModule => ({ slug, name, description, icon, stats, columns, rows });

const S: Sofa2AdminColumn = { key: 'status', label: 'Trạng thái', type: 'status' };

// ---- Danh mục dùng chung --------------------------------------------
const TIERS = ['Thành viên', 'Bạc', 'Vàng', 'Kim cương'];
const CITIES = ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Bình Dương', 'Hải Phòng', 'Cần Thơ'];
const STAFF = ['Minh Anh', 'Thu Hà', 'Hoàng Long', 'Quốc Bảo', 'Chưa gán'];
const STYLES = ['Hiện đại', 'Tối giản', 'Bắc Âu', 'Cổ điển', 'Indochine'];
const PAYMENTS = ['COD', 'Chuyển khoản', 'Thẻ tín dụng', 'Trả góp 0%', 'Ví điện tử'];
const PRODUCTS = ['Sofa góc Milano', 'Sofa da Verona', 'Sofa băng Oslo', 'Ghế thư giãn Luna', 'Sofa nỉ Kyoto', 'Bàn trà Marble'];
const NAMES = ['Nguyễn Thu Trang', 'Trần Minh Khoa', 'Lê Hoàng Yến', 'Phạm Quốc Huy', 'Võ Ngọc Hân', 'Đặng Gia Bảo', 'Bùi Thanh Tâm', 'Hồ Mỹ Linh', 'Ngô Đức Thắng', 'Đỗ Phương Anh'];
const pick = <T,>(arr: T[], i: number) => arr[i % arr.length];
const day = (i: number, m = 9) => `2026-${String(m).padStart(2, '0')}-${String((i * 3) % 27 + 1).padStart(2, '0')}`;
const code = (p: string, i: number) => `${p}${String(1001 + i)}`;
const gen = (n: number, fn: (i: number) => Row) => Array.from({ length: n }, (_, i) => ({ id: `r${i + 1}`, ...fn(i) }));

const ST = {
  dashboard: ['Hoạt động', 'Cần chăm sóc', 'Không hoạt động', 'Đã khoá'],
  profile: ['Đã xác minh', 'Chưa xác minh', 'Đã khoá'],
  order: ['Chờ xác nhận', 'Đang xử lý', 'Đang giao', 'Hoàn thành', 'Đã huỷ'],
  warranty: ['Tiếp nhận', 'Đang kiểm tra', 'Đang sửa chữa', 'Hoàn tất', 'Từ chối'],
  points: ['Hiệu lực', 'Sắp hết hạn', 'Đã hết hạn'],
  voucher: ['Đang phát hành', 'Bản nháp', 'Tạm dừng', 'Hết hạn'],
  complaint: ['Mới', 'Đang xử lý', 'Chờ khách phản hồi', 'Đã giải quyết', 'Đóng'],
};

// ----------------------------------------------------------------------
export const SOFA2_CUSTOMER_GROUP: Sofa2AdminGroup = {
  slug: 'customer',
  name: 'Khách hàng',
  icon: 'solar:users-group-rounded-bold-duotone',
  modules: [
    mod('dashboard', 'Dashboard', 'Tổng quan từng khách hàng: hạng, số đơn, chi tiêu, người chăm sóc.', 'solar:widget-2-bold-duotone',
      [{ label: 'Khách hàng', value: '2.846', trend: '+6%' }, { label: 'Hoạt động 30 ngày', value: '1.112' }, { label: 'Chi tiêu TB', value: '18,4tr' }, { label: 'Quay lại mua', value: '34%' }],
      [{ key: 'name', label: 'Khách hàng' }, { key: 'tier', label: 'Hạng' }, { key: 'orders', label: 'Đơn', type: 'number' }, { key: 'spent', label: 'Tổng chi', type: 'money' }, { key: 'staff', label: 'Chăm sóc' }, S],
      gen(10, (i) => ({ name: NAMES[i], tier: pick(TIERS, i + 1), orders: (i % 6) + 1, spent: 8_500_000 * ((i % 6) + 1), lastOrder: day(i), staff: pick(STAFF, i), note: '', status: pick(ST.dashboard, i % 5 === 4 ? 2 : i % 3 === 2 ? 1 : 0) }))),
    mod('profiles', 'Hồ sơ', 'Thông tin cá nhân, địa chỉ giao hàng và tuỳ chọn nhận tin của khách.', 'solar:user-id-bold-duotone',
      [{ label: 'Hồ sơ', value: '2.846' }, { label: 'Đã xác minh', value: '91%' }, { label: 'Nhận email', value: '64%' }, { label: 'Nhận Zalo/SMS', value: '72%' }],
      [{ key: 'name', label: 'Họ tên' }, { key: 'phone', label: 'Điện thoại' }, { key: 'email', label: 'Email' }, { key: 'city', label: 'Tỉnh/thành' }, S],
      gen(10, (i) => ({ name: NAMES[i], phone: `09${String(12345678 + i * 1111).slice(0, 8)}`, email: `khach${i + 1}@gmail.com`, birthday: `199${i % 10}-0${(i % 9) + 1}-15`, gender: i % 2 ? 'Nam' : 'Nữ', address: `${12 + i} Nguyễn Huệ`, city: pick(CITIES, i), style: pick(STYLES, i), emailOptIn: i % 3 ? 'true' : 'false', smsOptIn: 'true', status: pick(ST.profile, i % 7 === 6 ? 1 : 0) }))),
    mod('customer-orders', 'Đơn hàng', 'Đơn mua của khách, hiển thị trong mục "Đơn hàng của tôi".', 'solar:bag-4-bold-duotone',
      [{ label: 'Đơn tháng', value: '468', trend: '+14%' }, { label: 'Giá trị TB', value: '21,6tr' }, { label: 'Đang giao', value: '37' }, { label: 'Tỷ lệ huỷ', value: '2,1%' }],
      [{ key: 'code', label: 'Mã đơn' }, { key: 'customer', label: 'Khách hàng' }, { key: 'product', label: 'Sản phẩm' }, { key: 'total', label: 'Tổng tiền', type: 'money' }, { key: 'payment', label: 'Thanh toán' }, S],
      gen(10, (i) => ({ code: code('DH', i), customer: NAMES[i], product: pick(PRODUCTS, i), address: `${20 + i} Lê Lợi, ${pick(CITIES, i)}`, total: 12_900_000 + i * 2_300_000, payment: pick(PAYMENTS, i), points: 129 + i * 23, voucher: i % 3 ? '' : 'WELCOME500', orderDate: day(i), status: pick(ST.order, i) }))),
    mod('warranties', 'Phiếu bảo hành', 'Phiếu bảo hành điện tử theo serial, lịch hẹn kỹ thuật viên.', 'solar:shield-check-bold-duotone',
      [{ label: 'Phiếu hiệu lực', value: '1.932' }, { label: 'Yêu cầu mở', value: '24' }, { label: 'Xử lý TB', value: '2,4 ngày' }, { label: 'Hài lòng', value: '94%' }],
      [{ key: 'code', label: 'Mã phiếu' }, { key: 'customer', label: 'Khách hàng' }, { key: 'product', label: 'Sản phẩm' }, { key: 'serial', label: 'Serial' }, { key: 'expiry', label: 'Hết hạn' }, S],
      gen(8, (i) => ({ code: code('BH', i), customer: NAMES[i], product: pick(PRODUCTS, i), serial: `LX26${String(5000 + i * 37)}`, orderCode: code('DH', i), issue: pick(['Bong da tay vịn', 'Lún đệm ngồi', 'Kêu khung', 'Rách đường may'], i), purchaseDate: day(i, 3), expiry: day(i, 3).replace('2026', '2031'), technician: pick(STAFF, i + 1), appointment: day(i, 10), status: pick(ST.warranty, i) }))),
    mod('points', 'Điểm tích lũy', 'Số dư điểm, lịch sử cộng/đổi và hạn dùng theo hạng thành viên.', 'solar:star-rings-bold-duotone',
      [{ label: 'Điểm lưu hành', value: '1,28tr' }, { label: 'Đã đổi tháng', value: '86.400' }, { label: 'Sắp hết hạn', value: '42.100' }, { label: 'Tỷ lệ đổi', value: '27%' }],
      [{ key: 'customer', label: 'Khách hàng' }, { key: 'tier', label: 'Hạng' }, { key: 'balance', label: 'Số dư', type: 'number' }, { key: 'earned', label: 'Tích luỹ', type: 'number' }, { key: 'redeemed', label: 'Đã đổi', type: 'number' }, S],
      gen(10, (i) => ({ customer: NAMES[i], tier: pick(TIERS, i + 1), balance: 450 + i * 210, earned: 900 + i * 320, redeemed: 450 + i * 110, expiry: day(i, 12), reason: '', status: pick(ST.points, i % 4 === 3 ? 1 : 0) }))),
    mod('vouchers', 'Voucher', 'Mã giảm giá phát cho khách: chào mừng, sinh nhật, VIP, đổi điểm.', 'solar:ticket-sale-bold-duotone',
      [{ label: 'Voucher đang chạy', value: '12' }, { label: 'Đã phát', value: '5.840' }, { label: 'Đã dùng', value: '1.902' }, { label: 'Doanh thu gắn mã', value: '1,9 tỷ' }],
      [{ key: 'code', label: 'Mã' }, { key: 'campaign', label: 'Chiến dịch' }, { key: 'value', label: 'Giá trị' }, { key: 'minOrder', label: 'Đơn tối thiểu', type: 'money' }, { key: 'endDate', label: 'Hết hạn' }, S],
      [
        ['WELCOME500', 'Chào mừng', '500.000đ', 5_000_000, 0],
        ['BDAY10', 'Sinh nhật', '10%', 3_000_000, 0],
        ['VIPGOLD15', 'VIP', '15%', 15_000_000, 0],
        ['POINT1000', 'Đổi điểm', '1.000.000đ', 10_000_000, 0],
        ['FREESHIP', 'Miễn phí vận chuyển', 'Miễn phí ship', 2_000_000, 0],
        ['BACK2SOFA', 'Khách quay lại', '7%', 8_000_000, 2],
        ['TET2027', 'Tết', '12%', 12_000_000, 1],
        ['SUMMER25', 'Mùa hè', '5%', 4_000_000, 3],
      ].map(([c, camp, v, min, s], i) => ({ id: `r${i + 1}`, code: c, campaign: camp, value: v, minOrder: min, quantity: 500, pointsCost: camp === 'Đổi điểm' ? 1000 : 0, startDate: day(i, 9), endDate: day(i, 12), status: ST.voucher[Number(s)] })) as Row[]),
    mod('complaints', 'Khiếu nại', 'Tiếp nhận và xử lý khiếu nại, theo dõi hạn xử lý và bồi thường.', 'solar:chat-round-dots-bold-duotone',
      [{ label: 'Đang mở', value: '18' }, { label: 'Quá hạn', value: '2' }, { label: 'Phản hồi TB', value: '3,2 giờ' }, { label: 'Giải quyết lần đầu', value: '78%' }],
      [{ key: 'code', label: 'Mã' }, { key: 'customer', label: 'Khách hàng' }, { key: 'type', label: 'Loại' }, { key: 'priority', label: 'Ưu tiên' }, { key: 'owner', label: 'Phụ trách' }, S],
      gen(8, (i) => ({ code: code('KN', i), customer: NAMES[i], type: pick(['Giao hàng trễ', 'Sản phẩm lỗi', 'Sai màu/kích thước', 'Thái độ nhân viên', 'Thanh toán'], i), orderCode: code('DH', i), content: 'Khách phản ánh vấn đề cần xử lý.', resolution: '', priority: pick(['Cao', 'Trung bình', 'Thấp'], i), owner: pick(STAFF, i), deadline: day(i, 10), compensate: i % 3 ? 'false' : 'true', status: pick(ST.complaint, i) }))),
  ],
};

// ----------------------------------------------------------------------
const SEO_NOTE = f('note', 'Ghi chú nội bộ', 'textarea', 'seo', { multiline: true, maxLength: 500 });

export const SOFA2_CUSTOMER_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  dashboard: schema('khách hàng', 'name', ST.dashboard, [
    f('name', 'Khách hàng', 'text', 'content', { required: true, maxLength: 80 }),
    f('tier', 'Hạng thành viên', 'select', 'content', { options: TIERS, required: true }),
    f('orders', 'Số đơn', 'number', 'content'),
    f('spent', 'Tổng chi tiêu (đ)', 'number', 'content'),
    f('lastOrder', 'Đơn gần nhất', 'date', 'display'),
    f('staff', 'Nhân viên chăm sóc', 'select', 'display', { options: STAFF }),
    SEO_NOTE,
  ]),
  profiles: schema('hồ sơ', 'name', ST.profile, [
    f('name', 'Họ tên', 'text', 'content', { required: true, maxLength: 80 }),
    f('phone', 'Điện thoại', 'text', 'content', { required: true, maxLength: 15 }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('birthday', 'Ngày sinh', 'date', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nữ', 'Nam', 'Khác'] }),
    f('address', 'Địa chỉ giao hàng', 'textarea', 'content'),
    f('city', 'Tỉnh/thành', 'select', 'content', { options: CITIES }),
    f('style', 'Phong cách yêu thích', 'select', 'display', { options: STYLES }),
    f('emailOptIn', 'Nhận email khuyến mãi', 'switch', 'display'),
    f('smsOptIn', 'Nhận SMS/Zalo', 'switch', 'display'),
  ], ST.profile[1]),
  'customer-orders': schema('đơn hàng', 'code', ST.order, [
    f('code', 'Mã đơn', 'text', 'content', { required: true, placeholder: 'DH1001' }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('product', 'Sản phẩm', 'select', 'content', { options: PRODUCTS, required: true }),
    f('address', 'Địa chỉ giao', 'textarea', 'content'),
    f('total', 'Tổng tiền (đ)', 'number', 'content', { required: true }),
    f('payment', 'Thanh toán', 'select', 'display', { options: PAYMENTS }),
    f('orderDate', 'Ngày đặt', 'date', 'display'),
    f('points', 'Điểm được cộng', 'number', 'display'),
    f('voucher', 'Voucher đã dùng', 'text', 'display'),
  ]),
  warranties: schema('phiếu bảo hành', 'code', ST.warranty, [
    f('code', 'Mã phiếu', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('product', 'Sản phẩm', 'select', 'content', { options: PRODUCTS }),
    f('serial', 'Số serial', 'text', 'content', { required: true }),
    f('orderCode', 'Mã đơn mua', 'text', 'content'),
    f('issue', 'Mô tả lỗi', 'textarea', 'content', { multiline: true }),
    f('purchaseDate', 'Ngày mua', 'date', 'display'),
    f('expiry', 'Hết hạn bảo hành', 'date', 'display'),
    f('technician', 'Kỹ thuật viên', 'select', 'display', { options: STAFF }),
    f('appointment', 'Lịch hẹn', 'date', 'display'),
  ]),
  points: schema('ví điểm', 'customer', ST.points, [
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('tier', 'Hạng', 'select', 'content', { options: TIERS }),
    f('balance', 'Số dư điểm', 'number', 'content', { required: true }),
    f('earned', 'Điểm tích luỹ', 'number', 'content'),
    f('redeemed', 'Điểm đã đổi', 'number', 'content'),
    f('expiry', 'Hạn dùng điểm', 'date', 'display'),
    f('reason', 'Lý do điều chỉnh', 'textarea', 'seo', { helper: 'Bắt buộc ghi khi cộng/trừ điểm thủ công' }),
  ]),
  vouchers: schema('voucher', 'code', ST.voucher, [
    f('code', 'Mã voucher', 'text', 'content', { required: true, maxLength: 20, helper: 'Viết hoa, không dấu' }),
    f('campaign', 'Chiến dịch', 'select', 'content', { options: ['Chào mừng', 'Sinh nhật', 'VIP', 'Đổi điểm', 'Khách quay lại', 'Miễn phí vận chuyển', 'Tết', 'Mùa hè'] }),
    f('value', 'Giá trị giảm', 'text', 'content', { required: true, placeholder: '10% hoặc 500.000đ' }),
    f('minOrder', 'Đơn tối thiểu (đ)', 'number', 'content'),
    f('quantity', 'Số lượng phát hành', 'number', 'content'),
    f('pointsCost', 'Điểm cần để đổi', 'number', 'display'),
    f('startDate', 'Bắt đầu', 'date', 'display'),
    f('endDate', 'Hết hạn', 'date', 'display'),
  ], ST.voucher[1]),
  complaints: schema('khiếu nại', 'code', ST.complaint, [
    f('code', 'Mã khiếu nại', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('type', 'Loại vấn đề', 'select', 'content', { options: ['Giao hàng trễ', 'Sản phẩm lỗi', 'Sai màu/kích thước', 'Thái độ nhân viên', 'Thanh toán', 'Khác'] }),
    f('orderCode', 'Mã đơn liên quan', 'text', 'content'),
    f('content', 'Nội dung', 'textarea', 'content', { required: true, multiline: true }),
    f('resolution', 'Hướng xử lý', 'textarea', 'content', { multiline: true }),
    f('priority', 'Ưu tiên', 'select', 'display', { options: ['Cao', 'Trung bình', 'Thấp'] }),
    f('owner', 'Người phụ trách', 'select', 'display', { options: STAFF }),
    f('deadline', 'Hạn xử lý', 'date', 'display'),
    f('compensate', 'Bồi thường bằng voucher', 'switch', 'display'),
  ]),
};

export function getSofa2CustomerSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_CUSTOMER_SCHEMAS[moduleSlug] : undefined;
}
