import type { AdminRow } from 'src/sections/sofa2-admin/sofa2-admin-store';

export type Sofa2CartLine = {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  qty: number;
};

export type Sofa2CustomerDetails = {
  customerId: string;
  name: string;
  phone?: string;
  email?: string;
};

export function parseSofa2CartItems(value: unknown): Sofa2CartLine[] {
  if (typeof value !== 'string') return [];

  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
      .map((item) => ({
        id: String(item.id ?? ''),
        name: String(item.name ?? ''),
        price: Math.max(0, Number(item.price) || 0),
        image: String(item.image ?? ''),
        material: String(item.material ?? ''),
        qty: Math.max(1, Math.floor(Number(item.qty) || 1)),
      }))
      .filter((item) => item.id && item.name);
  } catch {
    return [];
  }
}

export function addSofa2CartLine(items: Sofa2CartLine[], line: Sofa2CartLine): Sofa2CartLine[] {
  const found = items.find((item) => item.id === line.id);
  if (!found) return [...items, { ...line, qty: Math.max(1, line.qty) }];
  return items.map((item) => (item.id === line.id ? { ...item, qty: item.qty + line.qty } : item));
}

export function makeSofa2CartRow(
  items: Sofa2CartLine[],
  customer: Sofa2CustomerDetails,
  existing?: AdminRow,
  status = 'Đang mua'
): AdminRow {
  return {
    ...(existing ?? {}),
    code: String(existing?.code || `CART-${customer.customerId}`),
    customerId: customer.customerId,
    customer: customer.name,
    phone: customer.phone ?? String(existing?.phone ?? ''),
    email: customer.email ?? String(existing?.email ?? ''),
    items: JSON.stringify(items),
    qty: items.reduce((sum, item) => sum + item.qty, 0),
    value: items.reduce((sum, item) => sum + item.price * item.qty, 0),
    status,
    channel: String(existing?.channel || 'Website'),
    updated: new Date().toISOString(),
  };
}

export function makeSofa2OrderCode() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `LX-${date}-${suffix}`;
}
