// SOFA2 ADMIN — Lược đồ chi tiết cho module Phân quyền
// 4 trang (Người dùng, Vai trò, Quyền hạn, Nhật ký hệ thống)
// dùng chung Sofa2AdminCmsView — form thêm/sửa/xoá, tab trạng thái, thao tác hàng loạt.
// ----------------------------------------------------------------------

import type { Sofa2CmsField, Sofa2CmsSchema, Sofa2CmsFieldType } from './sofa2-cms';

const f = (
  key: string,
  label: string,
  type: Sofa2CmsFieldType,
  group: Sofa2CmsField['group'],
  extra: Partial<Sofa2CmsField> = {}
): Sofa2CmsField => ({ key, label, type, group, ...extra });

const ROLES = ['Quản trị hệ thống', 'Quản lý bán hàng', 'Biên tập nội dung', 'CSKH', 'Kế toán', 'Thủ kho', 'Marketing', 'Nhân viên'];
const DEPARTMENTS = ['Ban giám đốc', 'Kinh doanh', 'Marketing', 'Nội dung', 'CSKH', 'Kế toán', 'Kho vận', 'IT'];
const MODULES = ['CMS', 'Sản phẩm', 'Kho hàng', 'Đơn hàng', 'Thanh toán', 'Hoàn tiền', 'CRM', 'Marketing', 'Analytics', 'SEO', 'Đại lý B2B', 'Phân quyền', 'Cài đặt hệ thống'];
const ACTIONS = ['Xem', 'Tạo mới', 'Sửa', 'Xoá', 'Xuất bản', 'Duyệt', 'Huỷ đơn', 'Duyệt hoàn tiền', 'Xuất dữ liệu', 'Nhập dữ liệu', 'Gán vai trò', 'Cấu hình'];
const SCOPES = ['Toàn hệ thống', 'Theo chi nhánh', 'Theo nhóm', 'Chỉ dữ liệu của mình'];
const BRANCHES = ['Tất cả', 'Showroom HCM', 'Showroom HN', 'Showroom Đà Nẵng', 'Kho tổng Bình Dương'];
const USERS = ['Minh Anh', 'Đức Anh', 'Thu Hà', 'Vinh Nguyễn', 'Hoàng Long', 'Quốc Bảo', 'Hệ thống', 'unknown'];
const EVENT_TYPES = ['Đăng nhập', 'Đăng xuất', 'Đăng nhập thất bại', 'Tạo mới', 'Cập nhật', 'Xoá', 'Xuất bản', 'Duyệt', 'Xuất dữ liệu', 'Thay đổi quyền', 'Thay đổi cấu hình'];

// ----------------------------------------------------------------------

export const SOFA2_ACCESS_SCHEMAS: Record<string, Sofa2CmsSchema> = {
  // ---- Người dùng ------------------------------------------------------
  users: {
    clientPath: '/sofa2/admin',
    entity: 'người dùng',
    titleKey: 'name',
    statusKey: 'status',
    statusOptions: ['Hoạt động', 'Chờ kích hoạt', 'Bị khoá'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Chờ kích hoạt',
    hideClientLink: true,
    fields: [
      f('name', 'Họ tên', 'text', 'content', { required: true, maxLength: 100 }),
      f('email', 'Email đăng nhập', 'text', 'content', { required: true, maxLength: 255, placeholder: 'ten@luxe.vn' }),
      f('phone', 'Điện thoại', 'text', 'content', { maxLength: 20, placeholder: '09xx xxx xxx' }),
      f('title', 'Chức danh', 'text', 'content', { maxLength: 100 }),
      f('department', 'Phòng ban', 'select', 'content', { options: DEPARTMENTS }),
      f('branch', 'Chi nhánh', 'select', 'content', { options: BRANCHES }),
      f('avatar', 'Ảnh đại diện (URL)', 'url', 'content'),
      f('note', 'Ghi chú', 'textarea', 'content', { multiline: 2, maxLength: 500 }),
      f('role', 'Vai trò', 'select', 'display', { required: true, options: ROLES, helper: 'Quyền thực tế lấy theo vai trò ở trang Vai trò.' }),
      f('extraRoles', 'Vai trò phụ (cách nhau dấu phẩy)', 'text', 'display'),
      f('twoFactor', 'Bắt buộc xác thực 2 lớp (2FA)', 'switch', 'display'),
      f('forceReset', 'Yêu cầu đổi mật khẩu lần đăng nhập tới', 'switch', 'display'),
      f('ipWhitelist', 'Giới hạn IP (cách nhau dấu phẩy)', 'text', 'display', { placeholder: '113.161.x.x' }),
      f('expiresAt', 'Hết hạn truy cập', 'date', 'display', { helper: 'Để trống nếu không giới hạn (dùng cho cộng tác viên).' }),
      f('last', 'Đăng nhập cuối', 'text', 'display'),
      f('status', 'Trạng thái', 'select', 'display', { required: true, options: ['Hoạt động', 'Chờ kích hoạt', 'Bị khoá'] }),
    ],
  },

  // ---- Vai trò ---------------------------------------------------------
  roles: {
    clientPath: '/sofa2/admin',
    entity: 'vai trò',
    titleKey: 'role',
    statusKey: 'status',
    statusOptions: ['Hệ thống', 'Tuỳ chỉnh', 'Ngưng dùng'],
    publishLabel: 'Kích hoạt',
    defaultStatus: 'Tuỳ chỉnh',
    hideClientLink: true,
    fields: [
      f('role', 'Tên vai trò', 'text', 'content', { required: true, maxLength: 80 }),
      f('code', 'Mã vai trò', 'text', 'content', { maxLength: 40, placeholder: 'sales_manager' }),
      f('description', 'Mô tả', 'textarea', 'content', { multiline: 3, maxLength: 500 }),
      f('scope', 'Module được truy cập (cách nhau dấu phẩy)', 'textarea', 'content', {
        multiline: 2,
        helper: `Các module: ${MODULES.join(', ')}.`,
      }),
      f('dataScope', 'Phạm vi dữ liệu', 'select', 'display', { required: true, options: SCOPES }),
      f('users', 'Số người dùng gán', 'number', 'display'),
      f('canApprove', 'Được duyệt (hoàn tiền, huỷ đơn, xuất bản)', 'switch', 'display'),
      f('canExport', 'Được xuất dữ liệu', 'switch', 'display'),
      f('isDefault', 'Vai trò mặc định cho người dùng mới', 'switch', 'display'),
      f('priority', 'Thứ tự ưu tiên', 'number', 'display', { helper: 'Số nhỏ = quyền cao hơn khi người dùng có nhiều vai trò.' }),
      f('status', 'Loại / trạng thái', 'select', 'display', { required: true, options: ['Hệ thống', 'Tuỳ chỉnh', 'Ngưng dùng'] }),
    ],
  },

  // ---- Quyền hạn -------------------------------------------------------
  permissions: {
    clientPath: '/sofa2/admin',
    entity: 'quyền',
    titleKey: 'action',
    statusKey: 'status',
    statusOptions: ['Bình thường', 'Nhạy cảm', 'Cần phê duyệt', 'Tắt'],
    publishLabel: 'Bật',
    defaultStatus: 'Bình thường',
    hideClientLink: true,
    fields: [
      f('module', 'Module', 'select', 'content', { required: true, options: MODULES }),
      f('action', 'Hành động', 'select', 'content', { required: true, options: ACTIONS }),
      f('code', 'Mã quyền', 'text', 'content', { maxLength: 60, placeholder: 'orders.cancel' }),
      f('description', 'Mô tả', 'textarea', 'content', { multiline: 2, maxLength: 300 }),
      f('roles', 'Vai trò được cấp (cách nhau dấu phẩy)', 'textarea', 'display', {
        required: true,
        multiline: 2,
        helper: `Vai trò: ${ROLES.join(', ')}.`,
      }),
      f('approver', 'Người phê duyệt', 'select', 'display', { options: ['Không cần', ...ROLES] }),
      f('limit', 'Hạn mức (₫)', 'number', 'display', { helper: 'vd: chỉ được duyệt hoàn tiền dưới hạn mức này.' }),
      f('requires2fa', 'Yêu cầu nhập lại 2FA khi thực hiện', 'switch', 'display'),
      f('logged', 'Ghi vào nhật ký hệ thống', 'switch', 'display'),
      f('status', 'Mức độ', 'select', 'display', { required: true, options: ['Bình thường', 'Nhạy cảm', 'Cần phê duyệt', 'Tắt'] }),
    ],
  },

  // ---- Nhật ký hệ thống ------------------------------------------------
  'audit-log': {
    clientPath: '/sofa2/admin',
    entity: 'sự kiện',
    titleKey: 'action',
    statusKey: 'status',
    statusOptions: ['Thành công', 'Cảnh báo', 'Từ chối'],
    publishLabel: 'Đánh dấu đã xử lý',
    defaultStatus: 'Thành công',
    hideClientLink: true,
    fields: [
      f('time', 'Thời gian', 'text', 'content', { required: true, placeholder: 'DD/MM HH:mm' }),
      f('user', 'Người dùng', 'select', 'content', { required: true, options: USERS }),
      f('type', 'Loại sự kiện', 'select', 'content', { options: EVENT_TYPES }),
      f('module', 'Module', 'select', 'content', { options: MODULES }),
      f('action', 'Hành động', 'text', 'content', { required: true, maxLength: 200 }),
      f('target', 'Đối tượng', 'text', 'content', { placeholder: 'vd: Đơn LX-26091502' }),
      f('detail', 'Chi tiết thay đổi', 'textarea', 'content', { multiline: 4, maxLength: 2000, placeholder: 'Giá: 25.900.000 → 24.900.000' }),
      f('ip', 'Địa chỉ IP', 'text', 'display'),
      f('device', 'Thiết bị / trình duyệt', 'text', 'display'),
      f('location', 'Vị trí', 'text', 'display'),
      f('handled', 'Đã xử lý / đã xem xét', 'switch', 'display'),
      f('status', 'Kết quả', 'select', 'display', { required: true, options: ['Thành công', 'Cảnh báo', 'Từ chối'] }),
    ],
  },
};

// ----------------------------------------------------------------------

export function getSofa2AccessSchema(moduleSlug?: string) {
  return moduleSlug ? SOFA2_ACCESS_SCHEMAS[moduleSlug] : undefined;
}
