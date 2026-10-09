// SOFA2 ADMIN — Module Giỏ hàng & Tài khoản khách hàng
// 11 trang: Giỏ hàng, Thanh toán, Thanh toán thành công, Theo dõi đơn hàng,
// Tài khoản khách hàng, Hồ sơ cá nhân, Địa chỉ giao hàng, Đơn hàng của tôi,
// Yêu thích, Lịch sử giao dịch, Phiếu bảo hành.
// Dùng chung Sofa2AdminCmsView (thêm/sửa/xoá/cập nhật, lọc trạng thái, thao tác hàng loạt).
// Dữ liệu "Theo dõi đơn hàng" được trang khách /sofa2/orders/tracking đọc trực tiếp.
// ----------------------------------------------------------------------

import { SOFA2_PRODUCTS } from 'src/sections/sofa2/sofa2-data';

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

const schema = (
  clientPath: string,
  entity: string,
  titleKey: string,
  statusOptions: string[],
  fields: Sofa2CmsField[]
): Sofa2CmsSchema => ({
  clientPath,
  entity,
  titleKey,
  statusKey: 'status',
  statusOptions,
  defaultStatus: statusOptions[1] ?? statusOptions[0],
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
const PRODUCTS = SOFA2_PRODUCTS.map((p) => p.name);
const PAYMENTS = ['COD', 'Chuyển khoản', 'Thẻ Visa/Master', 'Ví MoMo', 'VNPay', 'Trả góp 0%'];
const CUSTOMERS = ['Nguyễn Minh Anh', 'Trần Quốc Bảo', 'Lê Thu Hà', 'Phạm Gia Huy', 'Võ Ngọc Lan'];

// Các bước giao hàng — trùng với timeline trang khách
export const SOFA2_TRACKING_STEPS = ['Đặt hàng', 'Xác nhận', 'Sản xuất', 'Giao hàng', 'Hoàn tất'];

// ----------------------------------------------------------------------

export const SOFA2_SHOP_GROUP: Sofa2AdminGroup = {
  slug: 'shop',
  name: 'Giỏ hàng & Khách hàng',
  icon: 'solar:cart-large-4-bold-duotone',
  modules: [
    mod('cart', 'Giỏ hàng', 'Giỏ hàng đang mở và bị bỏ quên — nhắc khách, áp mã, chuyển thành đơn.', 'solar:cart-large-2-bold-duotone',
      [{ label: 'Giỏ đang mở', value: '128' }, { label: 'Bỏ quên >24h', value: '37', trend: '-8%' }, { label: 'Giá trị TB', value: '18,6 tr' }, { label: 'Khôi phục', value: '21%' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'product', label: 'Sản phẩm' }, { key: 'qty', label: 'SL', type: 'number' }, { key: 'total', label: 'Giá trị', type: 'money' }, { key: 'updated', label: 'Cập nhật' }, S],
      [
        { customer: 'Nguyễn Minh Anh', phone: '0901234567', product: PRODUCTS[0] ?? 'Sofa Oslo', qty: 1, total: 14500000, coupon: '', updated: '08/10/2026', status: 'Đang mở' },
        { customer: 'Lê Thu Hà', phone: '0912345678', product: PRODUCTS[1] ?? 'Sofa Berlin', qty: 2, total: 44000000, coupon: 'LUXE10', updated: '05/10/2026', status: 'Bỏ quên' },
        { customer: 'Khách vãng lai', phone: '', product: PRODUCTS[2] ?? 'Sofa Milan', qty: 1, total: 19800000, coupon: '', updated: '02/10/2026', status: 'Đã chuyển đơn' },
      ], ['Gửi nhắc nhở']),
    mod('checkout', 'Thanh toán', 'Cấu hình trang thanh toán: phương thức, phí giao hàng, mã giảm giá, điều kiện.', 'solar:card-bold-duotone',
      [{ label: 'Phương thức bật', value: '5' }, { label: 'Tỉ lệ hoàn tất', value: '68%' }, { label: 'Phí ship TB', value: '300k' }, { label: 'Lỗi cổng TT', value: '0,4%' }],
      [{ key: 'method', label: 'Phương thức / cấu hình' }, { key: 'type', label: 'Loại' }, { key: 'fee', label: 'Phí', type: 'money' }, { key: 'position', label: 'Thứ tự', type: 'number' }, S],
      [
        { method: 'Thanh toán khi nhận hàng (COD)', type: 'Phương thức', fee: 0, position: 1, note: 'Áp dụng đơn < 50 triệu', status: 'Đang bật' },
        { method: 'Chuyển khoản ngân hàng', type: 'Phương thức', fee: 0, position: 2, note: 'Vietcombank 0071 000 123 456', status: 'Đang bật' },
        { method: 'VNPay / Thẻ', type: 'Phương thức', fee: 0, position: 3, note: '', status: 'Đang bật' },
        { method: 'Trả góp 0% 12 tháng', type: 'Phương thức', fee: 0, position: 4, note: 'Đơn từ 10 triệu', status: 'Tạm tắt' },
        { method: 'Giao hàng nội thành', type: 'Phí giao hàng', fee: 300000, position: 5, note: 'Miễn phí đơn > 20 triệu', status: 'Đang bật' },
      ], ['Thêm cấu hình']),
    mod('checkout-success', 'Thanh toán thành công', 'Nội dung trang cảm ơn: thông điệp, gợi ý mua thêm, CTA và email xác nhận.', 'solar:check-circle-bold-duotone',
      [{ label: 'Khối nội dung', value: '4' }, { label: 'CTR gợi ý', value: '6,2%' }, { label: 'Email gửi', value: '1.284' }, { label: 'Mở email', value: '58%' }],
      [{ key: 'block', label: 'Khối' }, { key: 'type', label: 'Loại' }, { key: 'heading', label: 'Tiêu đề' }, { key: 'position', label: 'Thứ tự', type: 'number' }, S],
      [
        { block: 'Lời cảm ơn', type: 'Thông điệp', heading: 'Cảm ơn bạn đã đặt hàng!', content: 'Chúng tôi sẽ liên hệ xác nhận trong 30 phút.', position: 1, status: 'Đã xuất bản' },
        { block: 'Gợi ý mua thêm', type: 'Sản phẩm gợi ý', heading: 'Có thể bạn cũng thích', content: '', position: 2, status: 'Đã xuất bản' },
        { block: 'Email xác nhận', type: 'Email', heading: 'Xác nhận đơn hàng LUXE Sofa', content: 'Xin chào {{name}}, đơn {{code}} đã được ghi nhận.', position: 3, status: 'Đã xuất bản' },
      ]),
    mod('tracking', 'Theo dõi đơn hàng', 'Trạng thái từng đơn hiển thị ở trang tra cứu — cập nhật bước giao, ngày dự kiến, đơn vị vận chuyển.', 'solar:delivery-bold-duotone',
      [{ label: 'Đang giao', value: '42' }, { label: 'Đúng hẹn', value: '94%' }, { label: 'Tra cứu/ngày', value: '310' }, { label: 'Trễ hẹn', value: '3' }],
      [{ key: 'code', label: 'Mã đơn' }, { key: 'customer', label: 'Khách' }, { key: 'step', label: 'Bước' }, { key: 'eta', label: 'Dự kiến' }, { key: 'total', label: 'Tổng', type: 'money' }, S],
      [
        { code: 'LX20250218001', customer: 'Nguyễn Minh Anh', phone: '0901234567', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội', items: 'Sofa Oslo 3 Chỗ x1; Sofa Berlin Góc x2', total: 58800000, step: 'Sản xuất', carrier: 'LUXE Logistics', eta: '20/02/2025', status: 'Đang xử lý' },
        { code: 'LX26100695', customer: 'Trần Quốc Bảo', phone: '0987654321', address: '45 Lê Lợi, Q.1, TP.HCM', items: 'Sofa Milan x1', total: 19800000, step: 'Giao hàng', carrier: 'GHN', eta: '12/10/2026', status: 'Đang giao' },
        { code: 'LX26100650', customer: 'Lê Thu Hà', phone: '0912345678', address: '8 Bạch Đằng, Đà Nẵng', items: 'Sofa Copenhagen x1', total: 24500000, step: 'Hoàn tất', carrier: 'LUXE Logistics', eta: '05/10/2026', status: 'Đã giao' },
      ], ['Cập nhật trạng thái']),
    mod('accounts', 'Tài khoản khách hàng', 'Danh sách tài khoản đăng ký trên website: hạng thành viên, điểm, khoá/mở tài khoản.', 'solar:users-group-rounded-bold-duotone',
      [{ label: 'Tài khoản', value: '3.482', trend: '+124' }, { label: 'Hoạt động 30 ngày', value: '1.206' }, { label: 'Thành viên VIP', value: '186' }, { label: 'Bị khoá', value: '4' }],
      [{ key: 'name', label: 'Khách hàng' }, { key: 'email', label: 'Email' }, { key: 'tier', label: 'Hạng' }, { key: 'points', label: 'Điểm', type: 'number' }, { key: 'joined', label: 'Tham gia' }, S],
      CUSTOMERS.map((name, i) => ({ name, email: `khach${i + 1}@gmail.com`, phone: `09${i}1234567`, tier: ['Bạc', 'Vàng', 'Kim cương', 'Thường', 'Vàng'][i], points: [1250, 4800, 12400, 120, 3600][i], joined: `0${i + 1}/03/2026`, status: i === 3 ? 'Chưa xác minh' : 'Hoạt động' })),
      ['Thêm tài khoản']),
    mod('profiles', 'Hồ sơ cá nhân', 'Thông tin hồ sơ khách (họ tên, ngày sinh, giới tính, sở thích) — hiển thị ở tab Hồ sơ.', 'solar:user-id-bold-duotone',
      [{ label: 'Hồ sơ đầy đủ', value: '72%' }, { label: 'Có ngày sinh', value: '2.104' }, { label: 'Nhận tin', value: '64%' }, { label: 'Cập nhật tuần', value: '58' }],
      [{ key: 'name', label: 'Họ tên' }, { key: 'phone', label: 'Điện thoại' }, { key: 'birthday', label: 'Ngày sinh' }, { key: 'style', label: 'Phong cách yêu thích' }, S],
      CUSTOMERS.slice(0, 4).map((name, i) => ({ name, phone: `09${i}1234567`, email: `khach${i + 1}@gmail.com`, birthday: `1${i}/0${i + 2}/199${i}`, gender: i % 2 ? 'Nam' : 'Nữ', style: ['Bắc Âu', 'Hiện đại', 'Tân cổ điển', 'Tối giản'][i], newsletter: i !== 2 ? 'Có' : 'Không', status: i === 3 ? 'Thiếu thông tin' : 'Đầy đủ' }))),
    mod('addresses', 'Địa chỉ giao hàng', 'Sổ địa chỉ của khách — đặt mặc định, kiểm tra vùng giao, xoá địa chỉ sai.', 'solar:map-point-bold-duotone',
      [{ label: 'Địa chỉ', value: '5.120' }, { label: 'Nội thành', value: '61%' }, { label: 'Ngoài vùng', value: '84' }, { label: 'Sai định dạng', value: '12' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'receiver', label: 'Người nhận' }, { key: 'address', label: 'Địa chỉ' }, { key: 'type', label: 'Loại' }, S],
      [
        { customer: 'Nguyễn Minh Anh', receiver: 'Nguyễn Minh Anh', phone: '0901234567', address: '123 Nguyễn Trãi, Thanh Xuân, Hà Nội', city: 'Hà Nội', type: 'Nhà riêng', isDefault: 'Có', status: 'Mặc định' },
        { customer: 'Nguyễn Minh Anh', receiver: 'Lê Văn Nam', phone: '0909888777', address: 'Tầng 12, 72 Lê Thánh Tôn, Q.1', city: 'TP.HCM', type: 'Văn phòng', isDefault: 'Không', status: 'Đã xác minh' },
        { customer: 'Phạm Gia Huy', receiver: 'Phạm Gia Huy', phone: '0931234567', address: 'Xã Tân Lập, huyện xa', city: 'Lâm Đồng', type: 'Nhà riêng', isDefault: 'Có', status: 'Ngoài vùng giao' },
      ]),
    mod('my-orders', 'Đơn hàng của tôi', 'Đơn hiển thị trong tài khoản khách — cho phép huỷ, đổi trả, mua lại.', 'solar:bag-4-bold-duotone',
      [{ label: 'Đơn tháng', value: '412', trend: '+9%' }, { label: 'Yêu cầu huỷ', value: '7' }, { label: 'Đổi trả', value: '3' }, { label: 'Mua lại', value: '18%' }],
      [{ key: 'code', label: 'Mã đơn' }, { key: 'customer', label: 'Khách' }, { key: 'items', label: 'Sản phẩm' }, { key: 'total', label: 'Tổng', type: 'money' }, { key: 'created', label: 'Ngày đặt' }, S],
      [
        { code: 'LX20250218001', customer: 'Nguyễn Minh Anh', items: 'Sofa Oslo 3 Chỗ, Sofa Berlin Góc', total: 58800000, payment: 'Chuyển khoản', created: '18/02/2025', status: 'Đang xử lý' },
        { code: 'LX26100695', customer: 'Trần Quốc Bảo', items: 'Sofa Milan', total: 19800000, payment: 'COD', created: '06/10/2026', status: 'Đang giao' },
        { code: 'LX26100650', customer: 'Lê Thu Hà', items: 'Sofa Copenhagen', total: 24500000, payment: 'VNPay', created: '01/10/2026', status: 'Hoàn tất' },
        { code: 'LX26100512', customer: 'Võ Ngọc Lan', items: 'Ghế thư giãn', total: 8900000, payment: 'Ví MoMo', created: '20/09/2026', status: 'Yêu cầu huỷ' },
      ]),
    mod('wishlist', 'Yêu thích', 'Sản phẩm khách lưu yêu thích — biết món được quan tâm, gửi thông báo giảm giá.', 'solar:heart-bold-duotone',
      [{ label: 'Lượt lưu', value: '2.846' }, { label: 'Khách lưu', value: '934' }, { label: 'Chuyển đơn', value: '14%' }, { label: 'Top', value: PRODUCTS[0] ?? 'Oslo' }],
      [{ key: 'customer', label: 'Khách' }, { key: 'product', label: 'Sản phẩm' }, { key: 'added', label: 'Ngày lưu' }, { key: 'notify', label: 'Báo giảm giá' }, S],
      CUSTOMERS.slice(0, 4).map((customer, i) => ({ customer, product: PRODUCTS[i] ?? `Sản phẩm ${i + 1}`, added: `0${i + 2}/10/2026`, notify: i % 2 ? 'Không' : 'Có', status: i === 2 ? 'Đã mua' : 'Đang lưu' })),
      ['Gửi ưu đãi']),
    mod('transactions', 'Lịch sử giao dịch', 'Thanh toán, hoàn tiền và điểm thưởng của khách — đối soát cổng thanh toán.', 'solar:wallet-money-bold-duotone',
      [{ label: 'Giao dịch tháng', value: '1.032' }, { label: 'Doanh thu', value: '6,2 tỷ' }, { label: 'Hoàn tiền', value: '42 tr' }, { label: 'Lỗi', value: '5' }],
      [{ key: 'txn', label: 'Mã GD' }, { key: 'customer', label: 'Khách' }, { key: 'type', label: 'Loại' }, { key: 'method', label: 'Phương thức' }, { key: 'amount', label: 'Số tiền', type: 'money' }, { key: 'date', label: 'Ngày' }, S],
      [
        { txn: 'GD-90812', customer: 'Nguyễn Minh Anh', order: 'LX20250218001', type: 'Thanh toán', method: 'Chuyển khoản', amount: 58800000, date: '18/02/2025', status: 'Thành công' },
        { txn: 'GD-90877', customer: 'Lê Thu Hà', order: 'LX26100650', type: 'Thanh toán', method: 'VNPay', amount: 24500000, date: '01/10/2026', status: 'Thành công' },
        { txn: 'GD-90901', customer: 'Võ Ngọc Lan', order: 'LX26100512', type: 'Hoàn tiền', method: 'Ví MoMo', amount: 8900000, date: '22/09/2026', status: 'Đang xử lý' },
        { txn: 'GD-90915', customer: 'Trần Quốc Bảo', order: 'LX26100695', type: 'Thanh toán', method: 'Thẻ Visa/Master', amount: 19800000, date: '06/10/2026', status: 'Thất bại' },
      ]),
    mod('warranties', 'Phiếu bảo hành', 'Phiếu bảo hành điện tử theo sản phẩm/serial — kích hoạt, gia hạn, yêu cầu sửa chữa.', 'solar:shield-check-bold-duotone',
      [{ label: 'Phiếu hiệu lực', value: '2.410' }, { label: 'Sắp hết hạn', value: '86' }, { label: 'Yêu cầu sửa', value: '12' }, { label: 'Hài lòng', value: '4,8/5' }],
      [{ key: 'serial', label: 'Số phiếu' }, { key: 'customer', label: 'Khách' }, { key: 'product', label: 'Sản phẩm' }, { key: 'expires', label: 'Hết hạn' }, S],
      [
        { serial: 'BH-LX-0001', customer: 'Nguyễn Minh Anh', order: 'LX20250218001', product: PRODUCTS[0] ?? 'Sofa Oslo', start: '20/02/2025', expires: '20/02/2035', claim: '', status: 'Còn hiệu lực' },
        { serial: 'BH-LX-0002', customer: 'Lê Thu Hà', order: 'LX26100650', product: PRODUCTS[1] ?? 'Sofa Berlin', start: '05/10/2026', expires: '05/10/2036', claim: 'Đường may bung nhẹ', status: 'Đang sửa chữa' },
        { serial: 'BH-LX-0003', customer: 'Phạm Gia Huy', order: 'LX24050101', product: PRODUCTS[2] ?? 'Sofa Milan', start: '01/05/2016', expires: '01/05/2026', claim: '', status: 'Hết hạn' },
      ], ['Kích hoạt phiếu']),
  ],
};

// ----------------------------------------------------------------------

export const SOFA2_SHOP_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  cart: schema('/sofa2/cart', 'giỏ hàng', 'customer', ['Đang mở', 'Bỏ quên', 'Đã chuyển đơn', 'Đã huỷ'], [
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content'),
    f('product', 'Sản phẩm', 'select', 'content', { required: true, options: PRODUCTS }),
    f('qty', 'Số lượng', 'number', 'content', { required: true }),
    f('total', 'Giá trị (₫)', 'number', 'display'),
    f('coupon', 'Mã giảm giá', 'text', 'display'),
    f('updated', 'Cập nhật', 'date', 'display'),
  ]),
  checkout: schema('/sofa2/checkout', 'cấu hình thanh toán', 'method', ['Đang bật', 'Tạm tắt'], [
    f('method', 'Tên phương thức / cấu hình', 'text', 'content', { required: true }),
    f('type', 'Loại', 'select', 'content', { required: true, options: ['Phương thức', 'Phí giao hàng', 'Mã giảm giá', 'Điều khoản'] }),
    f('note', 'Mô tả hiển thị cho khách', 'textarea', 'content', { multiline: 3 }),
    f('fee', 'Phí (₫)', 'number', 'display'),
    f('position', 'Thứ tự hiển thị', 'number', 'display'),
  ]),
  'checkout-success': schema('/sofa2/checkout/success', 'khối nội dung', 'block', ['Đã xuất bản', 'Bản nháp', 'Tạm ẩn'], [
    f('block', 'Tên khối', 'text', 'content', { required: true }),
    f('type', 'Loại', 'select', 'content', { options: ['Thông điệp', 'Sản phẩm gợi ý', 'CTA', 'Email'] }),
    f('heading', 'Tiêu đề hiển thị', 'text', 'content'),
    f('content', 'Nội dung', 'textarea', 'content', { multiline: 4, helper: 'Dùng {{name}}, {{code}} cho tên khách và mã đơn' }),
    f('position', 'Thứ tự', 'number', 'display'),
  ]),
  tracking: schema('/sofa2/orders/tracking', 'đơn theo dõi', 'code', ['Đã giao', 'Đang xử lý', 'Đang giao', 'Đã huỷ'], [
    f('code', 'Mã đơn hàng', 'text', 'content', { required: true, helper: 'Khách nhập mã này (không cần #) ở trang tra cứu' }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('phone', 'Số điện thoại', 'text', 'content', { required: true }),
    f('address', 'Địa chỉ giao', 'textarea', 'content', { multiline: 2 }),
    f('items', 'Sản phẩm (Tên xSL; ...)', 'textarea', 'content', { multiline: 2, placeholder: 'Sofa Oslo 3 Chỗ x1; Sofa Berlin Góc x2' }),
    f('total', 'Tổng cộng (₫)', 'number', 'display'),
    f('step', 'Bước hiện tại', 'select', 'display', { required: true, options: SOFA2_TRACKING_STEPS }),
    f('carrier', 'Đơn vị vận chuyển', 'text', 'display'),
    f('eta', 'Ngày giao dự kiến', 'text', 'display'),
  ]),
  accounts: schema('/sofa2/account', 'tài khoản', 'name', ['Hoạt động', 'Chưa xác minh', 'Bị khoá'], [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('email', 'Email', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content'),
    f('tier', 'Hạng thành viên', 'select', 'display', { options: ['Thường', 'Bạc', 'Vàng', 'Kim cương'] }),
    f('points', 'Điểm thưởng', 'number', 'display'),
    f('joined', 'Ngày tham gia', 'date', 'display'),
  ]),
  profiles: schema('/sofa2/account', 'hồ sơ', 'name', ['Đầy đủ', 'Thiếu thông tin'], [
    f('name', 'Họ tên', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content'),
    f('email', 'Email', 'text', 'content'),
    f('birthday', 'Ngày sinh', 'text', 'content'),
    f('gender', 'Giới tính', 'select', 'content', { options: ['Nữ', 'Nam', 'Khác'] }),
    f('style', 'Phong cách yêu thích', 'select', 'display', { options: ['Bắc Âu', 'Hiện đại', 'Tân cổ điển', 'Tối giản', 'Indochine'] }),
    f('newsletter', 'Nhận bản tin', 'select', 'display', { options: ['Có', 'Không'] }),
  ]),
  addresses: schema('/sofa2/account', 'địa chỉ', 'receiver', ['Mặc định', 'Đã xác minh', 'Ngoài vùng giao'], [
    f('customer', 'Tài khoản', 'text', 'content', { required: true }),
    f('receiver', 'Người nhận', 'text', 'content', { required: true }),
    f('phone', 'Điện thoại', 'text', 'content', { required: true }),
    f('address', 'Địa chỉ chi tiết', 'textarea', 'content', { multiline: 2, required: true }),
    f('city', 'Tỉnh / Thành phố', 'text', 'content'),
    f('type', 'Loại địa chỉ', 'select', 'display', { options: ['Nhà riêng', 'Văn phòng', 'Công trình'] }),
    f('isDefault', 'Mặc định', 'select', 'display', { options: ['Có', 'Không'] }),
  ]),
  'my-orders': schema('/sofa2/account', 'đơn hàng', 'code', ['Hoàn tất', 'Đang xử lý', 'Đang giao', 'Yêu cầu huỷ', 'Đổi trả', 'Đã huỷ'], [
    f('code', 'Mã đơn', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('items', 'Sản phẩm', 'textarea', 'content', { multiline: 2 }),
    f('total', 'Tổng (₫)', 'number', 'display'),
    f('payment', 'Thanh toán', 'select', 'display', { options: PAYMENTS }),
    f('created', 'Ngày đặt', 'date', 'display'),
  ]),
  wishlist: schema('/sofa2/account', 'mục yêu thích', 'product', ['Đang lưu', 'Đã mua', 'Đã bỏ'], [
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('product', 'Sản phẩm', 'select', 'content', { required: true, options: PRODUCTS }),
    f('added', 'Ngày lưu', 'date', 'display'),
    f('notify', 'Báo khi giảm giá', 'select', 'display', { options: ['Có', 'Không'] }),
  ]),
  transactions: schema('/sofa2/account', 'giao dịch', 'txn', ['Thành công', 'Đang xử lý', 'Thất bại', 'Đã hoàn'], [
    f('txn', 'Mã giao dịch', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('order', 'Mã đơn', 'text', 'content'),
    f('type', 'Loại', 'select', 'content', { required: true, options: ['Thanh toán', 'Hoàn tiền', 'Đặt cọc', 'Điểm thưởng'] }),
    f('method', 'Phương thức', 'select', 'display', { options: PAYMENTS }),
    f('amount', 'Số tiền (₫)', 'number', 'display', { required: true }),
    f('date', 'Ngày', 'date', 'display'),
  ]),
  warranties: schema('/sofa2/account', 'phiếu bảo hành', 'serial', ['Còn hiệu lực', 'Chờ kích hoạt', 'Đang sửa chữa', 'Hết hạn'], [
    f('serial', 'Số phiếu', 'text', 'content', { required: true }),
    f('customer', 'Khách hàng', 'text', 'content', { required: true }),
    f('order', 'Mã đơn', 'text', 'content'),
    f('product', 'Sản phẩm', 'select', 'content', { required: true, options: PRODUCTS }),
    f('start', 'Ngày bắt đầu', 'text', 'display'),
    f('expires', 'Ngày hết hạn', 'text', 'display'),
    f('claim', 'Yêu cầu sửa chữa', 'textarea', 'display', { multiline: 2 }),
  ]),
};

export function getSofa2ShopSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_SHOP_SCHEMAS[moduleSlug] : undefined;
}
