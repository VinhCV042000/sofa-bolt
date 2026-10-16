import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import type { AdminRow } from 'src/sections/sofa2-admin/sofa2-admin-store';

export const SOFA2_PORTAL_CUSTOMER_ID = 'KH-1001';
export const SOFA2_PORTAL_CUSTOMER_NAME = 'Nguyễn Minh Anh';

const PORTAL_LINKS = [
  { href: '/sofa2/account', label: 'Tổng quan', icon: 'solar:widget-2-bold-duotone' },
  { href: '/sofa2/profile', label: 'Hồ sơ', icon: 'solar:user-id-bold-duotone' },
  { href: '/sofa2/my-orders', label: 'Đơn hàng', icon: 'solar:bag-4-bold-duotone' },
  { href: '/sofa2/warranty', label: 'Bảo hành', icon: 'solar:shield-check-bold-duotone' },
  { href: '/sofa2/points', label: 'Điểm', icon: 'solar:star-rings-bold-duotone' },
  { href: '/sofa2/vouchers', label: 'Voucher', icon: 'solar:ticket-sale-bold-duotone' },
  { href: '/sofa2/complaints', label: 'Khiếu nại', icon: 'solar:chat-round-dots-bold-duotone' },
];

export function belongsToSofa2Customer(row: AdminRow, customerId = SOFA2_PORTAL_CUSTOMER_ID) {
  if (row.customerId) return String(row.customerId) === customerId;
  return String(row.customer ?? '') === SOFA2_PORTAL_CUSTOMER_NAME;
}

export function Sofa2CustomerPortalNav({ active }: { active: string }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      useFlexGap
      sx={{ mb: 3, p: 1.5, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
    >
      {PORTAL_LINKS.map((link) => (
        <Button
          key={link.href}
          component={RouterLink}
          href={link.href}
          size="small"
          variant={active === link.href ? 'contained' : 'text'}
          startIcon={<Iconify icon={link.icon} width={18} />}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  );
}

export const formatSofa2Date = (value: unknown) => {
  const date = String(value ?? '');
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
  return date || '—';
};
