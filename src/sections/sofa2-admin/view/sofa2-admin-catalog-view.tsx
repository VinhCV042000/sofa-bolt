import { z } from 'zod';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from 'src/components/iconify';

import { Sofa2AdminLayout } from './sofa2-admin-layout';
import { findSofa2AdminModule } from '../sofa2-admin-data';
import {
  slugify,
  catalogApi,
  useSofa2Catalog,
  type CatalogState,
  type CatalogEntity,
  type CatalogRecord,
} from '../sofa2-catalog-store';

// ----------------------------------------------------------------------

type FieldType = 'text' | 'textarea' | 'number' | 'money' | 'image' | 'switch' | 'select' | 'date' | 'status';

type Field = {
  key: string;
  label: string;
  type?: FieldType;
  width?: number;
  required?: boolean;
  options?: (s: CatalogState) => { value: string; label: string }[];
  helper?: string;
  list?: boolean;
};

type Column = { label: string; render: (r: CatalogRecord, s: CatalogState) => React.ReactNode };

type Schema = {
  entity: CatalogEntity;
  title: string;
  addLabel: string;
  fields: Field[];
  columns: Column[];
  kpis: (s: CatalogState) => { label: string; value: string | number }[];
};

const STATUS = [
  { value: 'published', label: 'Đang hiển thị' },
  { value: 'draft', label: 'Bản nháp' },
  { value: 'hidden', label: 'Tạm ẩn' },
];
const statusLabel = (v: unknown) => STATUS.find((s) => s.value === v)?.label ?? String(v);
const statusColor = (v: unknown) => (v === 'published' ? 'success' : v === 'draft' ? 'warning' : 'default');

export const vnd = (n: unknown) => (Number(n) ? `${Number(n).toLocaleString('vi-VN')} ₫` : '—');

const nameOf = (list: CatalogRecord[], id: unknown) => String(list.find((r) => r.id === id)?.name ?? '—');

const productOptions = (s: CatalogState) => s.products.map((p) => ({ value: p.id, label: `${p.name} (${p.sku})` }));
const WAREHOUSES = ['Kho Hà Nội', 'Kho TP.HCM', 'Kho Đà Nẵng', 'Showroom Q1'].map((w) => ({ value: w, label: w }));
const PRICE_LISTS = ['Bán lẻ', 'Đại lý', 'B2B dự án', 'Thành viên VIP'].map((w) => ({ value: w, label: w }));

const statusChip = (v: unknown) => <Chip size="small" variant="soft" color={statusColor(v) as any} label={statusLabel(v)} />;

const variantPrice = (v: CatalogRecord, s: CatalogState) => {
  const p = s.products.find((x) => x.id === v.product);
  const base = Number(p?.salePrice) || Number(p?.basePrice) || 0;
  return base + Number(v.priceDelta || 0);
};

const available = (r: CatalogRecord) => Number(r.onHand) - Number(r.reserved);

// ----------------------------------------------------------------------

const SCHEMAS: Record<string, Schema> = {
  categories: {
    entity: 'categories',
    title: 'Danh mục',
    addLabel: 'Thêm danh mục',
    fields: [
      { key: 'name', label: 'Tên danh mục', required: true, width: 6 },
      { key: 'slug', label: 'Đường dẫn (slug)', width: 6, helper: 'Để trống sẽ tự tạo từ tên' },
      { key: 'parent', label: 'Danh mục cha', type: 'select', width: 6, options: (s) => [{ value: '', label: '— Gốc —' }, ...s.categories.filter((c) => !c.parent).map((c) => ({ value: c.id, label: String(c.name) }))] },
      { key: 'order', label: 'Thứ tự', type: 'number', width: 3 },
      { key: 'status', label: 'Trạng thái', type: 'status', width: 3 },
      { key: 'image', label: 'Ảnh đại diện (URL)', type: 'image', width: 12 },
      { key: 'description', label: 'Mô tả', type: 'textarea', width: 12 },
      { key: 'showMenu', label: 'Hiện trên menu trang khách', type: 'switch', width: 12 },
    ],
    columns: [
      { label: 'Danh mục', render: (r) => <Typography variant="subtitle2" sx={{ pl: r.parent ? 3 : 0 }}>{r.parent ? '└ ' : ''}{r.name}</Typography> },
      { label: 'Slug', render: (r) => `/sofa2/products/category/${r.slug}` },
      { label: 'Danh mục cha', render: (r, s) => (r.parent ? nameOf(s.categories, r.parent) : '—') },
      { label: 'Sản phẩm', render: (r, s) => s.products.filter((p) => p.category === r.id || s.categories.some((c) => c.parent === r.id && c.id === p.category)).length },
      { label: 'Menu', render: (r) => (r.showMenu ? 'Có' : 'Không') },
      { label: 'Trạng thái', render: (r) => statusChip(r.status) },
    ],
    kpis: (s) => [
      { label: 'Tổng danh mục', value: s.categories.length },
      { label: 'Danh mục gốc', value: s.categories.filter((c) => !c.parent).length },
      { label: 'Hiện trên menu', value: s.categories.filter((c) => c.showMenu).length },
      { label: 'Đang ẩn', value: s.categories.filter((c) => c.status !== 'published').length },
    ],
  },
  products: {
    entity: 'products',
    title: 'Sản phẩm',
    addLabel: 'Thêm sản phẩm',
    fields: [
      { key: 'name', label: 'Tên sản phẩm', required: true, width: 8 },
      { key: 'sku', label: 'Mã SKU', required: true, width: 4 },
      { key: 'slug', label: 'Đường dẫn (slug)', width: 6, helper: 'Để trống sẽ tự tạo từ tên' },
      { key: 'category', label: 'Danh mục', type: 'select', width: 6, required: true, options: (s) => s.categories.map((c) => ({ value: c.id, label: `${c.parent ? '— ' : ''}${c.name}` })) },
      { key: 'basePrice', label: 'Giá niêm yết (₫)', type: 'money', width: 4, required: true },
      { key: 'salePrice', label: 'Giá khuyến mãi (₫)', type: 'money', width: 4, helper: '0 = không giảm' },
      { key: 'brand', label: 'Thương hiệu', width: 4 },
      { key: 'material', label: 'Chất liệu', width: 6 },
      { key: 'dimensions', label: 'Kích thước', width: 3 },
      { key: 'warranty', label: 'Bảo hành', width: 3 },
      { key: 'image', label: 'Ảnh chính (URL)', type: 'image', width: 12 },
      { key: 'description', label: 'Mô tả sản phẩm', type: 'textarea', width: 12 },
      { key: 'seoTitle', label: 'Tiêu đề SEO', width: 6, helper: 'Tối đa 60 ký tự' },
      { key: 'seoDescription', label: 'Mô tả SEO', width: 6, helper: 'Tối đa 160 ký tự' },
      { key: 'status', label: 'Trạng thái', type: 'status', width: 6 },
      { key: 'featured', label: 'Sản phẩm nổi bật (trang chủ)', type: 'switch', width: 6 },
    ],
    columns: [
      {
        label: 'Sản phẩm',
        render: (r) => (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box component="img" src={String(r.image || '')} alt="" sx={{ width: 44, height: 44, borderRadius: 1, objectFit: 'cover', bgcolor: 'action.hover' }} />
            <Box>
              <Typography variant="subtitle2">{r.name}{r.featured ? ' ★' : ''}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>{r.sku}</Typography>
            </Box>
          </Stack>
        ),
      },
      { label: 'Danh mục', render: (r, s) => nameOf(s.categories, r.category) },
      {
        label: 'Giá',
        render: (r) =>
          Number(r.salePrice) ? (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{vnd(r.salePrice)}</Typography>
              <Typography variant="caption" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>{vnd(r.basePrice)}</Typography>
            </Box>
          ) : (
            vnd(r.basePrice)
          ),
      },
      { label: 'Biến thể', render: (r, s) => s.variants.filter((v) => v.product === r.id).length },
      {
        label: 'Tồn khả dụng',
        render: (r, s) => {
          const skus = s.variants.filter((v) => v.product === r.id).map((v) => v.sku);
          return s.inventory.filter((i) => skus.includes(i.sku)).reduce((a, i) => a + available(i), 0);
        },
      },
      { label: 'Trạng thái', render: (r) => statusChip(r.status) },
    ],
    kpis: (s) => [
      { label: 'Tổng sản phẩm', value: s.products.length },
      { label: 'Đang bán', value: s.products.filter((p) => p.status === 'published').length },
      { label: 'Đang giảm giá', value: s.products.filter((p) => Number(p.salePrice) > 0).length },
      { label: 'Thiếu SEO', value: s.products.filter((p) => !p.seoTitle || !p.seoDescription).length },
    ],
  },
  attributes: {
    entity: 'attributes',
    title: 'Thuộc tính',
    addLabel: 'Thêm thuộc tính',
    fields: [
      { key: 'name', label: 'Tên thuộc tính', required: true, width: 6 },
      { key: 'code', label: 'Mã', width: 3, helper: 'vd: color' },
      { key: 'type', label: 'Kiểu', type: 'select', width: 3, options: () => ['Danh sách', 'Màu', 'Văn bản', 'Số'].map((v) => ({ value: v, label: v })) },
      { key: 'values', label: 'Giá trị (cách nhau bằng dấu phẩy)', type: 'textarea', width: 12, required: true },
      { key: 'forVariant', label: 'Dùng để tạo biến thể', type: 'switch', width: 6 },
      { key: 'filterable', label: 'Hiện ở bộ lọc trang khách', type: 'switch', width: 6 },
    ],
    columns: [
      { label: 'Thuộc tính', render: (r) => <Typography variant="subtitle2">{r.name}</Typography> },
      { label: 'Mã / Kiểu', render: (r) => `${r.code} · ${r.type}` },
      {
        label: 'Giá trị',
        render: (r) => (
          <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
            {String(r.values).split(',').filter(Boolean).map((v) => <Chip key={v} size="small" label={v.trim()} />)}
          </Stack>
        ),
      },
      { label: 'Biến thể', render: (r) => (r.forVariant ? 'Có' : 'Không') },
      { label: 'Bộ lọc', render: (r) => (r.filterable ? 'Có' : 'Không') },
    ],
    kpis: (s) => [
      { label: 'Thuộc tính', value: s.attributes.length },
      { label: 'Tổng giá trị', value: s.attributes.reduce((a, r) => a + String(r.values).split(',').filter(Boolean).length, 0) },
      { label: 'Dùng cho biến thể', value: s.attributes.filter((a) => a.forVariant).length },
      { label: 'Có ở bộ lọc', value: s.attributes.filter((a) => a.filterable).length },
    ],
  },
  variants: {
    entity: 'variants',
    title: 'Biến thể',
    addLabel: 'Thêm biến thể',
    fields: [
      { key: 'product', label: 'Sản phẩm', type: 'select', required: true, width: 6, options: productOptions },
      { key: 'sku', label: 'SKU biến thể', required: true, width: 6 },
      { key: 'options', label: 'Tổ hợp thuộc tính', width: 12, helper: 'vd: Kem / Vải bouclé / 3 chỗ' },
      { key: 'priceDelta', label: 'Chênh lệch giá (₫)', type: 'money', width: 4, helper: 'Cộng vào giá sản phẩm' },
      { key: 'weight', label: 'Khối lượng (kg)', type: 'number', width: 4 },
      { key: 'barcode', label: 'Mã vạch', width: 4 },
      { key: 'status', label: 'Trạng thái', type: 'status', width: 6 },
    ],
    columns: [
      { label: 'SKU', render: (r) => <Typography variant="subtitle2">{r.sku}</Typography> },
      { label: 'Sản phẩm', render: (r, s) => nameOf(s.products, r.product) },
      { label: 'Tổ hợp', render: (r) => r.options },
      { label: 'Giá bán', render: (r, s) => vnd(variantPrice(r, s)) },
      { label: 'Tồn', render: (r, s) => s.inventory.filter((i) => i.sku === r.sku).reduce((a, i) => a + available(i), 0) },
      { label: 'Trạng thái', render: (r) => statusChip(r.status) },
    ],
    kpis: (s) => [
      { label: 'Biến thể', value: s.variants.length },
      { label: 'Sản phẩm có biến thể', value: new Set(s.variants.map((v) => v.product)).size },
      { label: 'Chưa có tồn kho', value: s.variants.filter((v) => !s.inventory.some((i) => i.sku === v.sku)).length },
      { label: 'Đang ẩn', value: s.variants.filter((v) => v.status !== 'published').length },
    ],
  },
  inventory: {
    entity: 'inventory',
    title: 'Tồn kho',
    addLabel: 'Thêm dòng tồn kho',
    fields: [
      { key: 'sku', label: 'SKU', type: 'select', required: true, width: 6, options: (s) => s.variants.map((v) => ({ value: String(v.sku), label: `${v.sku} — ${v.options}` })) },
      { key: 'warehouse', label: 'Kho', type: 'select', required: true, width: 6, options: () => WAREHOUSES },
      { key: 'onHand', label: 'Tồn thực tế', type: 'number', width: 3 },
      { key: 'reserved', label: 'Đã giữ cho đơn', type: 'number', width: 3 },
      { key: 'minStock', label: 'Tồn tối thiểu', type: 'number', width: 3 },
      { key: 'location', label: 'Vị trí kệ', width: 3 },
    ],
    columns: [
      { label: 'SKU', render: (r) => <Typography variant="subtitle2">{r.sku}</Typography> },
      { label: 'Kho / Kệ', render: (r) => `${r.warehouse} · ${r.location || '—'}` },
      { label: 'Tồn thực tế', render: (r) => r.onHand },
      { label: 'Đã giữ', render: (r) => r.reserved },
      { label: 'Khả dụng', render: (r) => <b>{available(r)}</b> },
      {
        label: 'Tình trạng',
        render: (r) =>
          available(r) <= 0 ? <Chip size="small" color="error" variant="soft" label="Hết hàng" /> : available(r) <= Number(r.minStock) ? <Chip size="small" color="warning" variant="soft" label="Sắp hết" /> : <Chip size="small" color="success" variant="soft" label="Đủ hàng" />,
      },
    ],
    kpis: (s) => [
      { label: 'Tổng tồn thực tế', value: s.inventory.reduce((a, r) => a + Number(r.onHand), 0) },
      { label: 'Khả dụng', value: s.inventory.reduce((a, r) => a + available(r), 0) },
      { label: 'Sắp hết / hết', value: s.inventory.filter((r) => available(r) <= Number(r.minStock)).length },
      { label: 'Giá trị tồn', value: vnd(s.inventory.reduce((a, r) => { const v = s.variants.find((x) => x.sku === r.sku); return a + (v ? variantPrice(v, s) * Number(r.onHand) : 0); }, 0)) },
    ],
  },
  pricing: {
    entity: 'pricing',
    title: 'Bảng giá',
    addLabel: 'Thêm giá bán',
    fields: [
      { key: 'product', label: 'Sản phẩm', type: 'select', required: true, width: 6, options: productOptions },
      { key: 'priceList', label: 'Bảng giá', type: 'select', required: true, width: 6, options: () => PRICE_LISTS },
      { key: 'price', label: 'Giá bán (₫)', type: 'money', required: true, width: 4 },
      { key: 'salePrice', label: 'Giá khuyến mãi (₫)', type: 'money', width: 4 },
      { key: 'minQty', label: 'Số lượng tối thiểu', type: 'number', width: 4 },
      { key: 'startDate', label: 'Bắt đầu', type: 'date', width: 4 },
      { key: 'endDate', label: 'Kết thúc', type: 'date', width: 4 },
      { key: 'status', label: 'Trạng thái', type: 'status', width: 4 },
    ],
    columns: [
      { label: 'Sản phẩm', render: (r, s) => <Typography variant="subtitle2">{nameOf(s.products, r.product)}</Typography> },
      { label: 'Bảng giá', render: (r) => <Chip size="small" label={String(r.priceList)} /> },
      { label: 'Giá bán', render: (r) => vnd(r.price) },
      { label: 'Khuyến mãi', render: (r) => (Number(r.salePrice) ? `${vnd(r.salePrice)} (-${Math.round((1 - Number(r.salePrice) / Number(r.price)) * 100)}%)` : '—') },
      { label: 'Hiệu lực', render: (r) => (r.startDate || r.endDate ? `${r.startDate || '…'} → ${r.endDate || '…'}` : 'Không giới hạn') },
      { label: 'Trạng thái', render: (r) => statusChip(r.status) },
    ],
    kpis: (s) => [
      { label: 'Dòng giá', value: s.pricing.length },
      { label: 'Bảng giá đang dùng', value: new Set(s.pricing.map((p) => p.priceList)).size },
      { label: 'Đang khuyến mãi', value: s.pricing.filter((p) => Number(p.salePrice) > 0).length },
      { label: 'Giá bán lẻ TB', value: vnd(Math.round(s.pricing.filter((p) => p.priceList === 'Bán lẻ').reduce((a, p, _i, arr) => a + Number(p.price) / arr.length, 0))) },
    ],
  },
};

// ----------------------------------------------------------------------

function validate(schema: Schema, values: CatalogRecord, s: CatalogState) {
  const errors: Record<string, string> = {};
  schema.fields.forEach((f) => {
    const v = values[f.key];
    if (f.type === 'number' || f.type === 'money') {
      const r = z.number().min(0, 'Không được âm').max(10_000_000_000).safeParse(Number(v));
      if (!r.success) errors[f.key] = r.error.issues[0].message;
      if (f.required && !Number(v)) errors[f.key] = 'Bắt buộc';
    } else if (typeof v === 'string') {
      const r = z.string().max(f.type === 'textarea' ? 4000 : 255, 'Quá dài').safeParse(v);
      if (!r.success) errors[f.key] = r.error.issues[0].message;
      if (f.required && !v.trim()) errors[f.key] = 'Bắt buộc';
      if (f.type === 'image' && v && !/^https?:\/\//.test(v)) errors[f.key] = 'URL phải bắt đầu bằng http(s)://';
    }
  });
  if ('sku' in values && schema.entity !== 'inventory') {
    const dup = s[schema.entity].some((r) => r.id !== values.id && r.sku === values.sku);
    if (dup) errors.sku = 'SKU đã tồn tại';
  }
  if (schema.entity === 'pricing' && Number(values.salePrice) >= Number(values.price) && Number(values.salePrice) > 0)
    errors.salePrice = 'Phải nhỏ hơn giá bán';
  if (schema.entity === 'products' && Number(values.salePrice) >= Number(values.basePrice) && Number(values.salePrice) > 0)
    errors.salePrice = 'Phải nhỏ hơn giá niêm yết';
  return errors;
}

export function Sofa2AdminCatalogView() {
  const { group = 'catalog', module = 'products' } = useParams();
  const found = useMemo(() => findSofa2AdminModule(group, module), [group, module]);
  const schema = SCHEMAS[module] ?? SCHEMAS.products;
  const s = useSofa2Catalog();
  const rows = s[schema.entity];

  const [toast, setToast] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState<{ values: CatalogRecord; isNew: boolean } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirm, setConfirm] = useState<string[] | null>(null);
  const [adjust, setAdjust] = useState<{ row: CatalogRecord; delta: number; reason: string } | null>(null);
  const [bulkPct, setBulkPct] = useState<number | null>(null);
  const [gen, setGen] = useState<{ product: string; picks: Record<string, string[]> } | null>(null);

  const hasStatus = schema.fields.some((f) => f.type === 'status');

  const filtered = rows.filter((r) => {
    if (hasStatus && statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (!search) return true;
    return Object.values(r).some((v) => String(v).toLowerCase().includes(search.toLowerCase()));
  });
  const ordered =
    schema.entity === 'categories'
      ? filtered
          .filter((c) => !c.parent)
          .sort((a, b) => Number(a.order) - Number(b.order))
          .flatMap((p) => [p, ...filtered.filter((c) => c.parent === p.id).sort((a, b) => Number(a.order) - Number(b.order))])
          .concat(filtered.filter((c) => c.parent && !filtered.some((p) => p.id === c.parent)))
      : filtered;

  const openNew = () => {
    const values: CatalogRecord = { id: '' };
    schema.fields.forEach((f) => {
      values[f.key] = f.type === 'number' || f.type === 'money' ? 0 : f.type === 'switch' ? false : f.type === 'status' ? 'draft' : '';
    });
    setErrors({});
    setForm({ values, isNew: true });
  };

  const save = () => {
    if (!form) return;
    const v = { ...form.values };
    if ('slug' in v && !String(v.slug).trim()) v.slug = slugify(String(v.name));
    const errs = validate(schema, v, s);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (form.isNew) {
      const { id, ...rest } = v;
      catalogApi.create(schema.entity, rest);
      setToast(`Đã thêm ${schema.title.toLowerCase()} mới.`);
    } else {
      catalogApi.update(schema.entity, v.id, v);
      setToast('Đã lưu thay đổi.');
    }
    setForm(null);
  };

  const remove = (ids: string[]) => {
    if (schema.entity === 'categories' && s.products.some((p) => ids.includes(String(p.category)))) {
      setToast('Không thể xoá: danh mục đang có sản phẩm. Hãy chuyển sản phẩm sang danh mục khác trước.');
      setConfirm(null);
      return;
    }
    catalogApi.remove(schema.entity, ids);
    setSelected([]);
    setConfirm(null);
    setToast(`Đã xoá ${ids.length} bản ghi.`);
  };

  const exportCsv = () => {
    const keys = ['id', ...schema.fields.map((f) => f.key)];
    const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [keys.join(','), ...rows.map((r) => keys.map((k) => esc(r[k])).join(','))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }));
    a.download = `sofa2-${module}.csv`;
    a.click();
  };

  const duplicate = (r: CatalogRecord) => {
    const { id, ...rest } = r;
    catalogApi.create(schema.entity, {
      ...rest,
      ...('name' in r ? { name: `${r.name} (bản sao)` } : {}),
      ...('sku' in r && schema.entity !== 'inventory' ? { sku: `${r.sku}-COPY` } : {}),
      ...('slug' in r ? { slug: `${r.slug}-copy` } : {}),
      ...('status' in r ? { status: 'draft' } : {}),
    });
    setToast('Đã nhân bản (ở trạng thái bản nháp).');
  };

  const generateVariants = () => {
    if (!gen) return;
    const product = s.products.find((p) => p.id === gen.product);
    const lists = Object.values(gen.picks).filter((l) => l.length);
    if (!product || !lists.length) return;
    const combos = lists.reduce<string[][]>((acc, l) => acc.flatMap((c) => l.map((v) => [...c, v])), [[]]);
    const fresh = combos
      .map((c) => ({
        product: product.id,
        sku: `${product.sku}-${c.map((x) => slugify(x).slice(0, 3).toUpperCase()).join('-')}`,
        options: c.join(' / '),
        priceDelta: 0,
        weight: 0,
        barcode: '',
        status: 'draft',
      }))
      .filter((v) => !s.variants.some((x) => x.sku === v.sku));
    catalogApi.createMany('variants', fresh);
    setGen(null);
    setToast(`Đã tạo ${fresh.length} biến thể mới (bỏ qua SKU trùng).`);
  };

  const allChecked = !!ordered.length && ordered.every((r) => selected.includes(r.id));

  return (
    <>
      <Helmet>
        <title>{`${found?.module.name ?? schema.title} | Sản phẩm - Quản trị Sofa2`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa2AdminLayout
        activeGroup={group}
        activeModule={module}
        breadcrumb={[found?.group.name ?? 'Sản phẩm', found?.module.name ?? schema.title]}
        title={found?.module.name ?? schema.title}
        subtitle={found?.module.description}
      >
        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          {schema.kpis(s).map((k) => (
            <Grid key={k.label} xs={6} md={3}>
              <Card sx={{ p: 2.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{k.label}</Typography>
                <Typography variant="h4">{k.value}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card>
          <Stack spacing={1.5} sx={{ p: 2.5 }} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
            <TextField size="small" value={search} placeholder={`Tìm trong ${schema.title.toLowerCase()}...`} onChange={(e) => setSearch(e.target.value)} sx={{ width: { md: 280 } }} />
            {hasStatus && (
              <TextField select size="small" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} sx={{ width: { md: 170 } }}>
                <MenuItem value="all">Tất cả trạng thái</MenuItem>
                {STATUS.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
              </TextField>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {!!selected.length && hasStatus && (
                <>
                  <Button size="small" variant="outlined" onClick={() => { catalogApi.updateMany(schema.entity, selected, () => ({ status: 'published' })); setToast('Đã hiển thị các mục đã chọn.'); }}>Hiển thị</Button>
                  <Button size="small" variant="outlined" onClick={() => { catalogApi.updateMany(schema.entity, selected, () => ({ status: 'hidden' })); setToast('Đã ẩn các mục đã chọn.'); }}>Ẩn</Button>
                </>
              )}
              {!!selected.length && <Button size="small" color="error" variant="outlined" onClick={() => setConfirm(selected)}>Xoá ({selected.length})</Button>}
              {schema.entity === 'pricing' && <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:tag-price-bold" />} onClick={() => setBulkPct(5)}>Điều chỉnh giá %</Button>}
              {schema.entity === 'variants' && <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:magic-stick-3-bold" />} onClick={() => setGen({ product: String(s.products[0]?.id ?? ''), picks: {} })}>Sinh biến thể tự động</Button>}
              <Button size="small" variant="outlined" startIcon={<Iconify icon="solar:export-bold" />} onClick={exportCsv}>Xuất CSV</Button>
              <Button size="small" variant="outlined" onClick={() => { catalogApi.reset(); setToast('Đã khôi phục dữ liệu mẫu.'); }}>Khôi phục</Button>
              <Button size="small" variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={openNew}>{schema.addLabel}</Button>
            </Stack>
          </Stack>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox checked={allChecked} onChange={(e) => setSelected(e.target.checked ? ordered.map((r) => r.id) : [])} />
                  </TableCell>
                  {schema.columns.map((c) => <TableCell key={c.label}>{c.label}</TableCell>)}
                  <TableCell align="right">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ordered.map((r) => (
                  <TableRow key={r.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox checked={selected.includes(r.id)} onChange={(e) => setSelected((p) => (e.target.checked ? [...p, r.id] : p.filter((x) => x !== r.id)))} />
                    </TableCell>
                    {schema.columns.map((c) => <TableCell key={c.label}>{c.render(r, s)}</TableCell>)}
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                      {schema.entity === 'products' && (
                        <Tooltip title="Xem trên trang khách">
                          <IconButton size="small" href={`/sofa2/products/${r.slug}`} target="_blank"><Iconify icon="solar:eye-bold" /></IconButton>
                        </Tooltip>
                      )}
                      {schema.entity === 'inventory' && (
                        <Tooltip title="Nhập / xuất kho">
                          <IconButton size="small" onClick={() => setAdjust({ row: r, delta: 1, reason: 'Nhập hàng' })}><Iconify icon="solar:transfer-vertical-bold" /></IconButton>
                        </Tooltip>
                      )}
                      <Tooltip title="Nhân bản"><IconButton size="small" onClick={() => duplicate(r)}><Iconify icon="solar:copy-bold" /></IconButton></Tooltip>
                      <Tooltip title="Sửa"><IconButton size="small" onClick={() => { setErrors({}); setForm({ values: { ...r }, isNew: false }); }}><Iconify icon="solar:pen-bold" /></IconButton></Tooltip>
                      <Tooltip title="Xoá"><IconButton size="small" color="error" onClick={() => setConfirm([r.id])}><Iconify icon="solar:trash-bin-trash-bold" /></IconButton></Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
                {!ordered.length && (
                  <TableRow>
                    <TableCell colSpan={schema.columns.length + 2} align="center" sx={{ py: 6, color: 'text.secondary' }}>Không có dữ liệu phù hợp.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {schema.entity === 'inventory' && !!s.moves.length && (
          <Card sx={{ mt: 3, p: 2.5 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>Lịch sử nhập / xuất kho</Typography>
            {s.moves.slice(0, 10).map((m) => (
              <Stack key={m.id} direction="row" spacing={2} sx={{ py: 0.75, borderBottom: '1px dashed', borderColor: 'divider' }}>
                <Typography variant="caption" sx={{ width: 140, color: 'text.secondary' }}>{m.at}</Typography>
                <Typography variant="body2" sx={{ width: 160 }}>{m.sku}</Typography>
                <Typography variant="body2" sx={{ width: 60, fontWeight: 700, color: m.delta > 0 ? 'success.main' : 'error.main' }}>{m.delta > 0 ? `+${m.delta}` : m.delta}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{m.reason}</Typography>
              </Stack>
            ))}
          </Card>
        )}
      </Sofa2AdminLayout>

      {/* Form thêm / sửa */}
      <Dialog open={!!form} onClose={() => setForm(null)} fullWidth maxWidth="md">
        <DialogTitle>{form?.isNew ? schema.addLabel : `Sửa ${schema.title.toLowerCase()}`}</DialogTitle>
        <DialogContent dividers>
          {form && (
            <Grid container spacing={2}>
              {schema.fields.map((f) => {
                const v = form.values[f.key];
                const set = (val: string | number | boolean) => setForm({ ...form, values: { ...form.values, [f.key]: val } });
                const common = { fullWidth: true, size: 'small' as const, label: f.label + (f.required ? ' *' : ''), error: !!errors[f.key], helperText: errors[f.key] || f.helper };
                let input: React.ReactNode;
                if (f.type === 'switch') input = <FormControlLabel control={<Switch checked={!!v} onChange={(e) => set(e.target.checked)} />} label={f.label} />;
                else if (f.type === 'select' || f.type === 'status')
                  input = (
                    <TextField select {...common} value={String(v ?? '')} onChange={(e) => set(e.target.value)}>
                      {(f.type === 'status' ? STATUS : f.options?.(s) ?? []).map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
                    </TextField>
                  );
                else if (f.type === 'number' || f.type === 'money')
                  input = <TextField {...common} type="number" value={v ?? 0} onChange={(e) => set(Number(e.target.value))} inputProps={{ min: 0, step: f.type === 'money' ? 100000 : 1 }} />;
                else if (f.type === 'date') input = <TextField {...common} type="date" InputLabelProps={{ shrink: true }} value={v ?? ''} onChange={(e) => set(e.target.value)} />;
                else
                  input = (
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <TextField {...common} multiline={f.type === 'textarea'} minRows={f.type === 'textarea' ? 3 : undefined} value={v ?? ''} onChange={(e) => set(e.target.value)} />
                      {f.type === 'image' && !!v && <Box component="img" src={String(v)} alt="" sx={{ width: 56, height: 56, borderRadius: 1, objectFit: 'cover' }} />}
                    </Stack>
                  );
                return <Grid key={f.key} xs={12} md={f.width ?? 6}>{input}</Grid>;
              })}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setForm(null)}>Huỷ</Button>
          <Button variant="contained" onClick={save}>Lưu</Button>
        </DialogActions>
      </Dialog>

      {/* Xác nhận xoá */}
      <Dialog open={!!confirm} onClose={() => setConfirm(null)}>
        <DialogTitle>Xoá {confirm?.length} bản ghi?</DialogTitle>
        <DialogContent>Thao tác này không thể hoàn tác.</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirm(null)}>Huỷ</Button>
          <Button color="error" variant="contained" onClick={() => confirm && remove(confirm)}>Xoá</Button>
        </DialogActions>
      </Dialog>

      {/* Nhập / xuất kho */}
      <Dialog open={!!adjust} onClose={() => setAdjust(null)} fullWidth maxWidth="xs">
        <DialogTitle>Nhập / xuất kho · {adjust?.row.sku}</DialogTitle>
        <DialogContent dividers>
          {adjust && (
            <Stack spacing={2}>
              <Typography variant="body2">Tồn hiện tại: <b>{adjust.row.onHand}</b> → sau điều chỉnh: <b>{Math.max(0, Number(adjust.row.onHand) + adjust.delta)}</b></Typography>
              <TextField size="small" type="number" label="Số lượng (+ nhập / − xuất)" value={adjust.delta} onChange={(e) => setAdjust({ ...adjust, delta: Math.trunc(Number(e.target.value)) })} />
              <TextField select size="small" label="Lý do" value={adjust.reason} onChange={(e) => setAdjust({ ...adjust, reason: e.target.value })}>
                {['Nhập hàng', 'Xuất bán', 'Chuyển kho', 'Kiểm kê', 'Hàng lỗi', 'Khách trả hàng'].map((x) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
              </TextField>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAdjust(null)}>Huỷ</Button>
          <Button variant="contained" disabled={!adjust?.delta} onClick={() => { if (adjust) { catalogApi.adjustStock(adjust.row.id, adjust.delta, adjust.reason); setToast('Đã cập nhật tồn kho.'); setAdjust(null); } }}>Xác nhận</Button>
        </DialogActions>
      </Dialog>

      {/* Điều chỉnh giá hàng loạt */}
      <Dialog open={bulkPct !== null} onClose={() => setBulkPct(null)} fullWidth maxWidth="xs">
        <DialogTitle>Điều chỉnh giá hàng loạt</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <Typography variant="body2">Áp dụng cho {selected.length || rows.length} dòng giá {selected.length ? 'đã chọn' : '(tất cả)'}. Giá được làm tròn tới 1.000 ₫.</Typography>
            <TextField size="small" type="number" label="Tăng / giảm (%)" value={bulkPct ?? 0} onChange={(e) => setBulkPct(Math.max(-90, Math.min(200, Number(e.target.value))))} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBulkPct(null)}>Huỷ</Button>
          <Button
            variant="contained"
            onClick={() => {
              const k = 1 + Number(bulkPct) / 100;
              const ids = selected.length ? selected : rows.map((r) => r.id);
              catalogApi.updateMany('pricing', ids, (r) => ({ price: Math.round((Number(r.price) * k) / 1000) * 1000 }));
              setToast(`Đã điều chỉnh ${ids.length} dòng giá.`);
              setBulkPct(null);
            }}
          >
            Áp dụng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Sinh biến thể */}
      <Dialog open={!!gen} onClose={() => setGen(null)} fullWidth maxWidth="sm">
        <DialogTitle>Sinh biến thể tự động</DialogTitle>
        <DialogContent dividers>
          {gen && (
            <Stack spacing={2.5}>
              <TextField select size="small" label="Sản phẩm" value={gen.product} onChange={(e) => setGen({ ...gen, product: e.target.value })}>
                {productOptions(s).map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
              </TextField>
              {s.attributes.filter((a) => a.forVariant).map((a) => {
                const picks = gen.picks[a.id] ?? [];
                return (
                  <Box key={a.id}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>{a.name}</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {String(a.values).split(',').map((x) => x.trim()).filter(Boolean).map((val) => (
                        <Chip
                          key={val}
                          label={val}
                          color={picks.includes(val) ? 'primary' : 'default'}
                          variant={picks.includes(val) ? 'filled' : 'outlined'}
                          onClick={() => setGen({ ...gen, picks: { ...gen.picks, [a.id]: picks.includes(val) ? picks.filter((p) => p !== val) : [...picks, val] } })}
                        />
                      ))}
                    </Stack>
                  </Box>
                );
              })}
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Sẽ tạo {Object.values(gen.picks).filter((l) => l.length).reduce((a, l) => a * l.length, Object.values(gen.picks).some((l) => l.length) ? 1 : 0)} tổ hợp.
              </Typography>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGen(null)}>Huỷ</Button>
          <Button variant="contained" onClick={generateVariants}>Tạo biến thể</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!toast} message={toast} autoHideDuration={3000} onClose={() => setToast('')} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
    </>
  );
}
