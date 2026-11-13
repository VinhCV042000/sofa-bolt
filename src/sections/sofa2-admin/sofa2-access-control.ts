export type Sofa2AdminAccessSession = {
  role: 'admin' | 'staff';
  email?: string;
  name?: string;
  permissions?: string[];
  roles?: string[];
};

const GROUP_PERMISSION_MODULE: Record<string, string> = {
  cms: 'CMS',
  catalog: 'Sản phẩm',
  warehouse: 'Kho hàng',
  orders: 'Đơn hàng',
  crm: 'CRM',
  marketing: 'Marketing',
  analytics: 'Analytics',
  seo: 'SEO',
  access: 'Phân quyền',
  b2b: 'Đại lý B2B',
  dealer: 'Đại lý',
  shopping: 'Mua hàng',
  shop: 'Giỏ hàng & Khách hàng',
  customer: 'Khách hàng',
  support: 'Hỗ trợ',
  hr: 'Tuyển dụng',
};

export function getSofa2PermissionModule(groupSlug: string) {
  return GROUP_PERMISSION_MODULE[groupSlug] ?? '';
}

export function hasSofa2AdminPermission(
  session: Sofa2AdminAccessSession | null,
  groupSlug: string,
  action: string
) {
  if (session?.role === 'admin') return true;
  const permissionModule = getSofa2PermissionModule(groupSlug);
  return !!permissionModule && !!session?.permissions?.includes(`${permissionModule}:${action}`);
}

export function canOpenSofa2AdminGroup(
  session: Sofa2AdminAccessSession | null,
  groupSlug: string
) {
  // User and role administration remains reserved for the immutable root administrator.
  if (groupSlug === 'access') return session?.role === 'admin';
  return hasSofa2AdminPermission(session, groupSlug, 'Xem');
}
