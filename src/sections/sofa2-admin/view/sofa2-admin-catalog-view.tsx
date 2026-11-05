// SOFA2 ADMIN — Module Sản phẩm: màn hình chi tiết 6 trang
// (Danh mục, Sản phẩm, Thuộc tính, Biến thể, Kho hàng, Giá bán)
// Dữ liệu đọc/ghi qua sofa2-catalog-store, đồng bộ với trang khách /sofa2/products.
// ----------------------------------------------------------------------

import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { fCurrency, fNumber } from 'src/utils/format-number';

import type {
  Sofa2AdminGroup,
  Sofa2AdminModule,
} from 'src/sections/sofa2-admin/sofa2-admin-data';
import {
  SOFA2_CATALOG_ATTRIBUTE_STATUSES,
  SOFA2_CATALOG_CATEGORY_STATUSES,
  SOFA2_CATALOG_MOVE_TYPES,
  SOFA2_CATALOG_PRICE_LISTS,
  SOFA2_CATALOG_PRICE_STATUSES,
  SOFA2_CATALOG_STATUSES,
  SOFA2_CATALOG_VARIANT_STATUSES,
  SOFA2_CATALOG_WAREHOUSES,
  adjustSofa2CatalogStock,
  applySofa2CatalogPriceRule,
  bulkChangeSofa2CatalogPrices,
  duplicateSofa2CatalogProduct,
  generateSofa2CatalogVariants,
  removeSofa2CatalogAttribute,
  removeSofa2CatalogCategory,
  removeSofa2CatalogPriceRow,
  removeSofa2CatalogPriceRule,
  removeSofa2CatalogProducts,
  removeSofa2CatalogVariant,
  saveSofa2CatalogAttribute,
  saveSofa2CatalogCategory,
  saveSofa2CatalogPriceRow,
  saveSofa2CatalogPriceRule,
  saveSofa2CatalogProduct,
  saveSofa2CatalogVariant,
  setSofa2CatalogProductsStatus,
  sofa2CatalogCategoryName,
  sofa2CatalogProductStock,
  sofa2CatalogStockStatus,
  slugifySofa2,
  useSofa2Catalog,
} from 'src/sections/sofa2-admin/sofa2-catalog-store';
import type {
  Sofa2CatalogAttribute,
  Sofa2CatalogCategory,
  Sofa2CatalogPriceRow,
  Sofa2CatalogPriceRule,
  Sofa2CatalogProduct,
  Sofa2CatalogState,
  Sofa2CatalogStockRow,
  Sofa2CatalogVariant,
} from 'src/sections/sofa2-admin/sofa2-catalog-store';

// ----------------------------------------------------------------------

const statusChipColor = (status: string): 'success' | 'warning' | 'error' | 'default' | 'info' => {
  if (['Đang bán', 'Hiển thị', 'Hoạt động', 'Đủ hàng', 'Giá gốc', 'Đang chạy'].includes(status)) return 'success';
  if (['Bản nháp', 'Sắp hết', 'Đang giảm', 'Chờ áp dụng'].includes(status)) return 'warning';
  if (['Hết hàng', 'Ngừng bán', 'Hết hiệu lực', 'Ẩn', 'Tạm ẩn'].includes(status)) return 'error';
  return 'default';
};

function CatalogKpi({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, flex: '1 1 180px' }}
    >
      <Iconify icon={icon} width={34} sx={{ color: 'primary.main', flexShrink: 0 }} />
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{value}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{label}</Typography>
      </Stack>
    </Stack>
  );
}

function useNotice() {
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const show = (type: 'success' | 'error', text: string) => {
    setNotice({ type, text });
    window.setTimeout(() => setNotice(null), 4000);
  };
  return { notice, show };
}

const th = (label: string, align: 'left' | 'right' = 'left') => (
  <TableCell align={align} sx={{ whiteSpace: 'nowrap' }}>
    <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 'fontWeightBold' }}>
      {label.toUpperCase()}
    </Typography>
  </TableCell>
);

const fieldLabel = (label: string) => (
  <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>{label}</Typography>
);

// ---------------------------------------------------------------------- DANH MỤC

function CategoriesScreen({ catalog, group, module }: { catalog: Sofa2CatalogState; group: Sofa2AdminGroup; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [editing, setEditing] = useState<Sofa2CatalogCategory | null>(null);
  const [open, setOpen] = useState(false);

  const parents = useMemo(
    () => Array.from(new Set(catalog.categories.map((c) => c.parent))).filter(Boolean),
    [catalog.categories]
  );
  const productCount = (slug: string) => catalog.products.filter((p) => p.category === slug).length;

  const blank = (): Sofa2CatalogCategory => ({
    id: `cat-${Date.now().toString(36)}`,
    name: '',
    slug: '',
    parent: parents[0] ?? 'Theo kiểu dáng',
    description: '',
    image: '',
    status: 'Hiển thị',
    order: catalog.categories.length,
    showInMenu: true,
    showInFilter: true,
  });

  const startAdd = () => {
    setEditing(blank());
    setOpen(true);
  };
  const startEdit = (row: Sofa2CatalogCategory) => {
    setEditing({ ...row });
    setOpen(true);
  };
  const save = () => {
    if (!editing?.name.trim()) {
      show('error', 'Vui lòng nhập tên danh mục.');
      return;
    }
    saveSofa2CatalogCategory({ ...editing, slug: editing.slug || slugifySofa2(editing.name) });
    setOpen(false);
    show('success', 'Đã lưu danh mục.');
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type} onClose={() => show as never}>{notice.text}</Alert>}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h6">{module.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
        </Stack>
        <Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />} onClick={startAdd}>
          Thêm danh mục
        </Button>
      </Stack>

      {parents.map((parent) => (
        <Card key={parent} sx={{ overflow: 'hidden' }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2.5, py: 1.5, bgcolor: 'action.hover' }}>
            <Iconify icon="solar:folder-bold-duotone" width={20} />
            <Typography variant="subtitle2">{parent}</Typography>
          </Stack>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {th('Danh mục')}
                  {th('Đường dẫn')}
                  {th('Sản phẩm', 'right')}
                  {th('Thứ tự', 'right')}
                  {th('Menu')}
                  {th('Bộ lọc')}
                  {th('Trạng thái')}
                  {th('', 'right')}
                </TableRow>
              </TableHead>
              <TableBody>
                {catalog.categories
                  .filter((c) => c.parent === parent)
                  .sort((a, b) => a.order - b.order)
                  .map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Typography variant="subtitle2">{row.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          /sofa2/products/category/{row.slug}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{fNumber(productCount(row.slug))}</TableCell>
                      <TableCell align="right">{row.order}</TableCell>
                      <TableCell>
                        <Switch
                          size="small"
                          checked={row.showInMenu}
                          onChange={(e) => saveSofa2CatalogCategory({ ...row, showInMenu: e.target.checked })}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch
                          size="small"
                          checked={row.showInFilter}
                          onChange={(e) => saveSofa2CatalogCategory({ ...row, showInFilter: e.target.checked })}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip size="small" color={statusChipColor(row.status)} label={row.status} />
                      </TableCell>
                      <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                        <IconButton size="small" onClick={() => startEdit(row)}>
                          <Iconify icon="solar:pen-bold" width={18} />
                        </IconButton>
                        <Tooltip title={productCount(row.slug) > 0 ? 'Không thể xoá khi còn sản phẩm' : 'Xoá danh mục'}>
                          <span>
                            <IconButton
                              size="small"
                              disabled={productCount(row.slug) > 0}
                              onClick={() => {
                                const error = removeSofa2CatalogCategory(row.id);
                                if (error) show('error', error);
                                else show('success', 'Đã xoá danh mục.');
                              }}
                            >
                              <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      ))}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{catalog.categories.some((c) => c.id === editing?.id) ? 'Sửa danh mục' : 'Thêm danh mục'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Box>
              {fieldLabel('Tên danh mục *')}
              <TextField
                fullWidth
                size="small"
                value={editing?.name ?? ''}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, name: e.target.value } : prev))}
              />
            </Box>
            <Box>
              {fieldLabel('Danh mục cha')}
              <Select
                fullWidth
                size="small"
                value={editing?.parent ?? ''}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, parent: e.target.value } : prev))}
              >
                {PARENT_GROUPS.map((p) => (
                  <MenuItem key={p} value={p}>{p}</MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              {fieldLabel('Mô tả')}
              <TextField
                fullWidth
                multiline
                minRows={3}
                size="small"
                value={editing?.description ?? ''}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, description: e.target.value } : prev))}
              />
            </Box>
            <Box>
              {fieldLabel('Ảnh đại diện (URL)')}
              <TextField
                fullWidth
                size="small"
                placeholder="https://..."
                value={editing?.image ?? ''}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, image: e.target.value } : prev))}
              />
            </Box>
            <Stack direction="row" spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Trạng thái')}
                <Select
                  fullWidth
                  size="small"
                  value={editing?.status ?? 'Hiển thị'}
                  onChange={(e) => setEditing((prev) => (prev ? { ...prev, status: e.target.value } : prev))}
                >
                  {SOFA2_CATALOG_CATEGORY_STATUSES.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ width: 130 }}>
                {fieldLabel('Thứ tự')}
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={editing?.order ?? 0}
                  onChange={(e) => setEditing((prev) => (prev ? { ...prev, order: Number(e.target.value) } : prev))}
                />
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="body2">Hiện trên menu</Typography>
              <Switch
                checked={editing?.showInMenu ?? true}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, showInMenu: e.target.checked } : prev))}
              />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="body2">Dùng làm bộ lọc</Typography>
              <Switch
                checked={editing?.showInFilter ?? true}
                onChange={(e) => setEditing((prev) => (prev ? { ...prev, showInFilter: e.target.checked } : prev))}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Huỷ</Button>
          <Button variant="contained" onClick={save}>Lưu danh mục</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

const PARENT_GROUPS = ['Phong cách', 'Theo kiểu dáng', 'Không gian', 'Kích thước', 'Khoảng giá'];

// ---------------------------------------------------------------------- SẢN PHẨM

function ProductsScreen({ catalog, group, module }: { catalog: Sofa2CatalogState; group: Sofa2AdminGroup; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tất cả');
  const [selected, setSelected] = useState<string[]>([]);
  const [editing, setEditing] = useState<Sofa2CatalogProduct | null>(null);
  const [open, setOpen] = useState(false);

  const categoryOptions = catalog.categories.filter((c) => c.parent === 'Theo kiểu dáng' || c.parent === 'Phong cách');
  const categoryLabel = (slug: string) => sofa2CatalogCategoryName(catalog, slug);

  const rows = catalog.products.filter((p) => {
    const matchSearch = `${p.sku} ${p.name}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'Tất cả' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const blank = (): Sofa2CatalogProduct => ({
    id: `prod-${Date.now().toString(36)}`,
    sku: `LX-${Date.now().toString().slice(-4)}`,
    name: '',
    slug: '',
    category: categoryOptions[0]?.slug ?? '',
    style: catalog.categories.find((c) => c.parent === 'Phong cách')?.slug ?? '',
    material: 'Vải linen',
    size: '',
    description: '',
    shortDescription: '',
    image: 'https://images.pexels.com/photos/276624/pexels-photo-276624.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [],
    colors: ['Be', 'Xám'],
    price: 10000000,
    oldPrice: 0,
    stock: 10,
    rating: 4.5,
    reviews: 0,
    badge: '',
    status: 'Bản nháp',
    featured: false,
    isNew: false,
  });

  const save = () => {
    if (!editing?.name.trim()) {
      show('error', 'Vui lòng nhập tên sản phẩm.');
      return;
    }
    saveSofa2CatalogProduct({ ...editing, slug: editing.slug || slugifySofa2(editing.name) });
    setOpen(false);
    show('success', 'Đã lưu sản phẩm — trang khách /sofa2/products sẽ cập nhật theo.');
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type}>{notice.text}</Alert>}
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
        <Stack>
          <Typography variant="h6">{module.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
        </Stack>
        <Button
          variant="contained"
          startIcon={<Iconify icon="solar:add-circle-bold-duotone" />}
          onClick={() => {
            setEditing(blank());
            setOpen(true);
          }}
        >
          Thêm sản phẩm
        </Button>
      </Stack>

      <Stack direction="row" spacing={1.5} flexWrap="wrap">
        <TextField
          size="small"
          placeholder="Tìm theo SKU hoặc tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 260 }}
          InputProps={{
            startAdornment: <Iconify icon="solar:magnifer-bold-duotone" width={18} sx={{ mr: 1, color: 'text.disabled' }} />,
          }}
        />
        <Select size="small" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} sx={{ minWidth: 150 }}>
          {['Tất cả', ...SOFA2_CATALOG_STATUSES].map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </Stack>

      {selected.length > 0 && (
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ p: 1.5, borderRadius: 1, bgcolor: 'action.selected' }}>
          <Typography variant="body2">Đã chọn {selected.length} sản phẩm</Typography>
          <Button size="small" startIcon={<Iconify icon="solar:eye-bold" width={16} />} onClick={() => { setSofa2CatalogProductsStatus(selected, 'Bản nháp'); setSelected([]); show('success', 'Đã chuyển sang bản nháp.'); }}>
            Ẩn khỏi web
          </Button>
          <Button size="small" startIcon={<Iconify icon="solar:cart-check-bold" width={16} />} onClick={() => { setSofa2CatalogProductsStatus(selected, 'Đang bán'); setSelected([]); show('success', 'Đã mở bán.'); }}>
            Mở bán
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<Iconify icon="solar:trash-bin-trash-bold" width={16} />}
            onClick={() => {
              if (window.confirm(`Xoá ${selected.length} sản phẩm đã chọn?`)) {
                removeSofa2CatalogProducts(selected);
                setSelected([]);
                show('success', 'Đã xoá sản phẩm đã chọn.');
              }
            }}
          >
            Xoá
          </Button>
        </Stack>
      )}

      <Card>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('')}
                {th('Ảnh')}
                {th('SKU')}
                {th('Sản phẩm')}
                {th('Danh mục')}
                {th('Giá bán', 'right')}
                {th('Tồn', 'right')}
                {th('Đánh giá')}
                {th('Nổi bật')}
                {th('Trạng thái')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      checked={selected.includes(row.id)}
                      onChange={(e) =>
                        setSelected((prev) => (e.target.checked ? [...prev, row.id] : prev.filter((id) => id !== row.id)))
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Box component="img" src={row.image} alt={row.name} sx={{ width: 52, height: 40, borderRadius: 1, objectFit: 'cover' }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{row.sku}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{row.name}</Typography>
                    {row.badge && <Chip size="small" label={row.badge} sx={{ mt: 0.5, height: 20 }} />}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{categoryLabel(row.category)}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" sx={{ fontWeight: 'fontWeightBold' }}>{fCurrency(row.price)}</Typography>
                    {row.oldPrice > 0 && (
                      <Typography variant="caption" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                        {fCurrency(row.oldPrice)}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">{fNumber(sofa2CatalogProductStock(catalog, row.id))}</TableCell>
                  <TableCell>
                    <Rating value={row.rating} precision={0.1} size="small" readOnly />
                  </TableCell>
                  <TableCell>
                    <Switch size="small" checked={row.featured} onChange={(e) => saveSofa2CatalogProduct({ ...row, featured: e.target.checked })} />
                  </TableCell>
                  <TableCell>
                    <Select
                      size="small"
                      value={row.status}
                      onChange={(e) => saveSofa2CatalogProduct({ ...row, status: e.target.value })}
                      sx={{ minWidth: 110, fontSize: 13 }}
                    >
                      {SOFA2_CATALOG_STATUSES.map((s) => (
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <Tooltip title="Sửa">
                      <IconButton size="small" onClick={() => { setEditing({ ...row }); setOpen(true); }}>
                        <Iconify icon="solar:pen-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Nhân bản">
                      <IconButton
                        size="small"
                        onClick={() => {
                          const newId = duplicateSofa2CatalogProduct(row.id);
                          show(newId ? 'success' : 'error', newId ? 'Đã nhân bản thành bản nháp mới.' : 'Không tìm thấy sản phẩm.');
                        }}
                      >
                        <Iconify icon="solar:copy-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Xoá">
                      <IconButton
                        size="small"
                        onClick={() => {
                          if (window.confirm(`Xoá sản phẩm "${row.name}"?`)) {
                            removeSofa2CatalogProducts([row.id]);
                            show('success', 'Đã xoá sản phẩm.');
                          }
                        }}
                      >
                        <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={11}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', py: 3 }}>
                      Không có sản phẩm nào khớp bộ lọc.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <ProductDialog
        open={open}
        editing={editing}
        setEditing={setEditing}
        catalog={catalog}
        categoryOptions={categoryOptions}
        onClose={() => setOpen(false)}
        onSave={save}
      />
    </Stack>
  );
}

function ProductDialog({
  open,
  editing,
  setEditing,
  catalog,
  categoryOptions,
  onClose,
  onSave,
}: {
  open: boolean;
  editing: Sofa2CatalogProduct | null;
  setEditing: (updater: (prev: Sofa2CatalogProduct | null) => Sofa2CatalogProduct | null) => void;
  catalog: Sofa2CatalogState;
  categoryOptions: Sofa2CatalogCategory[];
  onClose: () => void;
  onSave: () => void;
}) {
  const set = (patch: Partial<Sofa2CatalogProduct>) => setEditing((prev) => (prev ? { ...prev, ...patch } : prev));
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{catalog.products.some((p) => p.id === editing?.id) ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</DialogTitle>
      <DialogContent>
        {editing && (
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Tên sản phẩm *')}
                <TextField fullWidth size="small" value={editing.name} onChange={(e) => set({ name: e.target.value })} />
              </Box>
              <Box sx={{ width: { sm: 170 } }}>
                {fieldLabel('SKU')}
                <TextField fullWidth size="small" value={editing.sku} onChange={(e) => set({ sku: e.target.value })} />
              </Box>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Danh mục')}
                <Select fullWidth size="small" value={editing.category} onChange={(e) => set({ category: e.target.value })}>
                  {categoryOptions.map((c) => (
                    <MenuItem key={c.id} value={c.slug}>{c.name}</MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Phong cách')}
                <Select fullWidth size="small" value={editing.style} onChange={(e) => set({ style: e.target.value })}>
                  {catalog.categories.filter((c) => c.parent === 'Phong cách').map((c) => (
                    <MenuItem key={c.id} value={c.slug}>{c.name}</MenuItem>
                  ))}
                </Select>
              </Box>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Chất liệu')}
                <TextField fullWidth size="small" value={editing.material} onChange={(e) => set({ material: e.target.value })} />
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Kích thước')}
                <TextField fullWidth size="small" placeholder="220 x 90 x 80 cm" value={editing.size} onChange={(e) => set({ size: e.target.value })} />
              </Box>
            </Stack>
            <Box>
              {fieldLabel('Mô tả ngắn')}
              <TextField fullWidth multiline minRows={2} size="small" value={editing.shortDescription} onChange={(e) => set({ shortDescription: e.target.value })} />
            </Box>
            <Box>
              {fieldLabel('Mô tả chi tiết')}
              <TextField fullWidth multiline minRows={4} size="small" value={editing.description} onChange={(e) => set({ description: e.target.value })} />
            </Box>
            <Box>
              {fieldLabel('Ảnh chính (URL)')}
              <TextField fullWidth size="small" value={editing.image} onChange={(e) => set({ image: e.target.value })} />
            </Box>
            <Box>
              {fieldLabel('Thư viện ảnh (cách nhau dấu phẩy)')}
              <TextField
                fullWidth
                size="small"
                value={editing.images.join(', ')}
                onChange={(e) => set({ images: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
              />
            </Box>
            <Box>
              {fieldLabel('Màu sắc (cách nhau dấu phẩy)')}
              <TextField
                fullWidth
                size="small"
                value={editing.colors.join(', ')}
                onChange={(e) => set({ colors: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
              />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Giá bán (₫) *')}
                <TextField fullWidth size="small" type="number" value={editing.price} onChange={(e) => set({ price: Number(e.target.value) })} />
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Giá niêm yết (₫)')}
                <TextField fullWidth size="small" type="number" value={editing.oldPrice} onChange={(e) => set({ oldPrice: Number(e.target.value) })} />
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Tồn kho')}
                <TextField fullWidth size="small" type="number" value={editing.stock} onChange={(e) => set({ stock: Number(e.target.value) })} />
              </Box>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Trạng thái')}
                <Select fullWidth size="small" value={editing.status} onChange={(e) => set({ status: e.target.value })}>
                  {SOFA2_CATALOG_STATUSES.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Nhãn badge')}
                <TextField fullWidth size="small" placeholder="Mới / Bestseller / -23%" value={editing.badge} onChange={(e) => set({ badge: e.target.value })} />
              </Box>
              <Box sx={{ flex: 1 }}>
                {fieldLabel('Số sao')}
                <Rating value={editing.rating} precision={0.1} onChange={(_, v) => set({ rating: v ?? 4 })} />
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="body2">Sản phẩm nổi bật</Typography>
              <Switch checked={editing.featured} onChange={(e) => set({ featured: e.target.checked })} />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="body2">Gắn nhãn “Mới”</Typography>
              <Switch checked={editing.isNew} onChange={(e) => set({ isNew: e.target.checked })} />
            </Stack>
          </Stack>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Huỷ</Button>
        <Button variant="contained" onClick={onSave}>Lưu sản phẩm</Button>
      </DialogActions>
    </Dialog>
  );
}

// ---------------------------------------------------------------------- THUỘC TÍNH

function AttributesScreen({ catalog, module }: { catalog: Sofa2CatalogState; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [editing, setEditing] = useState<Sofa2CatalogAttribute | null>(null);
  const [open, setOpen] = useState(false);

  const blank = (): Sofa2CatalogAttribute => ({
    id: `attr-${Date.now().toString(36)}`,
    name: '',
    code: '',
    displayType: 'Ô màu',
    values: [],
    usage: 'Biến thể + Bộ lọc',
    status: 'Hoạt động',
    required: false,
  });

  const save = () => {
    if (!editing?.name.trim()) {
      show('error', 'Vui lòng nhập tên thuộc tính.');
      return;
    }
    saveSofa2CatalogAttribute({ ...editing, code: editing.code || slugifySofa2(editing.name) });
    setOpen(false);
    show('success', 'Đã lưu thuộc tính.');
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type}>{notice.text}</Alert>}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h6">{module.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
        </Stack>
        <Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />} onClick={() => { setEditing(blank()); setOpen(true); }}>
          Thêm thuộc tính
        </Button>
      </Stack>

      <Card>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('Thuộc tính')}
                {th('Mã')}
                {th('Kiểu hiển thị')}
                {th('Giá trị')}
                {th('Áp dụng')}
                {th('Bắt buộc')}
                {th('Trạng thái')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.attributes.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell><Typography variant="subtitle2">{row.name}</Typography></TableCell>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{row.code}</Typography></TableCell>
                  <TableCell>{row.displayType}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {row.values.slice(0, 5).map((v) => <Chip key={v} size="small" label={v} sx={{ height: 22 }} />)}
                      {row.values.length > 5 && <Chip size="small" label={`+${row.values.length - 5}`} sx={{ height: 22 }} />}
                    </Stack>
                  </TableCell>
                  <TableCell>{row.usage}</TableCell>
                  <TableCell><Switch size="small" checked={row.required} onChange={(e) => saveSofa2CatalogAttribute({ ...row, required: e.target.checked })} /></TableCell>
                  <TableCell><Chip size="small" color={statusChipColor(row.status)} label={row.status} /></TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <IconButton size="small" onClick={() => { setEditing({ ...row }); setOpen(true); }}>
                      <Iconify icon="solar:pen-bold" width={18} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => {
                        if (window.confirm(`Xoá thuộc tính "${row.name}"?`)) {
                          removeSofa2CatalogAttribute(row.id);
                          show('success', 'Đã xoá thuộc tính.');
                        }
                      }}
                    >
                      <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{catalog.attributes.some((a) => a.id === editing?.id) ? 'Sửa thuộc tính' : 'Thêm thuộc tính'}</DialogTitle>
        <DialogContent>
          {editing && (
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Tên thuộc tính *')}
                  <TextField fullWidth size="small" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                </Box>
                <Box sx={{ width: 160 }}>
                  {fieldLabel('Mã thuộc tính')}
                  <TextField fullWidth size="small" placeholder="color" value={editing.code} onChange={(e) => setEditing({ ...editing, code: e.target.value })} />
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Kiểu hiển thị')}
                  <Select fullWidth size="small" value={editing.displayType} onChange={(e) => setEditing({ ...editing, displayType: e.target.value })}>
                    {['Ô màu', 'Nút chọn', 'Danh sách thả', 'Ảnh minh hoạ'].map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </Select>
                </Box>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Áp dụng')}
                  <Select fullWidth size="small" value={editing.usage} onChange={(e) => setEditing({ ...editing, usage: e.target.value })}>
                    {['Biến thể + Bộ lọc', 'Biến thể', 'Bộ lọc', 'Tuỳ chọn'].map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </Select>
                </Box>
              </Stack>
              <Box>
                {fieldLabel('Danh sách giá trị (cách nhau dấu phẩy)')}
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  size="small"
                  value={editing.values.join(', ')}
                  onChange={(e) => setEditing({ ...editing, values: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                />
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">Bắt buộc chọn khi mua</Typography>
                <Switch checked={editing.required} onChange={(e) => setEditing({ ...editing, required: e.target.checked })} />
              </Stack>
              <Box>
                {fieldLabel('Trạng thái')}
                <Select fullWidth size="small" value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value })}>
                  {SOFA2_CATALOG_ATTRIBUTE_STATUSES.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                </Select>
              </Box>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Huỷ</Button>
          <Button variant="contained" onClick={save}>Lưu thuộc tính</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ---------------------------------------------------------------------- BIẾN THỂ

function VariantsScreen({ catalog, module }: { catalog: Sofa2CatalogState; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [productId, setProductId] = useState(catalog.products[0]?.id ?? '');
  const [genOpen, setGenOpen] = useState(false);
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  const product = catalog.products.find((p) => p.id === productId);
  const variants = catalog.variants.filter((v) => v.productId === productId);

  const applyGeneration = () => {
    const created = generateSofa2CatalogVariants(productId, selections);
    setGenOpen(false);
    setSelections({});
    show(created ? 'success' : 'error', created ? `Đã sinh ${created} biến thể mới.` : 'Chưa chọn giá trị nào để sinh biến thể.');
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type}>{notice.text}</Alert>}
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
        <Stack>
          <Typography variant="h6">{module.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
        </Stack>
        <Button variant="contained" startIcon={<Iconify icon="solar:magic-wand-bold-duotone" />} onClick={() => setGenOpen(true)} disabled={!product}>
          Sinh biến thể từ thuộc tính
        </Button>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="center">
        {fieldLabel('Sản phẩm')}
        <Select size="small" value={productId} onChange={(e) => setProductId(e.target.value)} sx={{ minWidth: 320 }}>
          {catalog.products.map((p) => (
            <MenuItem key={p.id} value={p.id}>{p.name} ({p.sku})</MenuItem>
          ))}
        </Select>
        <Chip size="small" label={`${variants.length} biến thể`} />
      </Stack>

      <Card>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('SKU biến thể')}
                {th('Tuỳ chọn')}
                {th('Giá (₫)', 'right')}
                {th('Tồn', 'right')}
                {th('Trạng thái')}
                {th('Mặc định')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {variants.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{row.sku}</Typography></TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      fullWidth
                      value={row.option}
                      onChange={(e) => saveSofa2CatalogVariant({ ...row, option: e.target.value })}
                      sx={{ minWidth: 200 }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      size="small"
                      type="number"
                      value={row.price}
                      onChange={(e) => saveSofa2CatalogVariant({ ...row, price: Number(e.target.value) })}
                      sx={{ width: 140 }}
                      inputProps={{ sx: { textAlign: 'right' } }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      size="small"
                      type="number"
                      value={row.stock}
                      onChange={(e) => saveSofa2CatalogVariant({ ...row, stock: Math.max(0, Number(e.target.value)) })}
                      sx={{ width: 90 }}
                      inputProps={{ sx: { textAlign: 'right' } }}
                    />
                  </TableCell>
                  <TableCell>
                    <Select size="small" value={row.status} onChange={(e) => saveSofa2CatalogVariant({ ...row, status: e.target.value })} sx={{ minWidth: 110, fontSize: 13 }}>
                      {SOFA2_CATALOG_VARIANT_STATUSES.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Switch size="small" checked={row.isDefault} onChange={(e) => saveSofa2CatalogVariant({ ...row, isDefault: e.target.checked })} />
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Xoá biến thể">
                      <IconButton
                        size="small"
                        onClick={() => {
                          if (window.confirm(`Xoá biến thể ${row.sku}?`)) {
                            removeSofa2CatalogVariant(row.id);
                            show('success', 'Đã xoá biến thể.');
                          }
                        }}
                      >
                        <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              {variants.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', py: 3 }}>
                      Sản phẩm này chưa có biến thể. Bấm “Sinh biến thể từ thuộc tính” để tạo tổ hợp màu / kích thước / chất liệu.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={genOpen} onClose={() => setGenOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Sinh biến thể cho “{product?.name ?? ''}”</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Chọn các giá trị muốn tạo tổ hợp. Ví dụ: 3 màu × 2 kích thước = 6 biến thể.
            </Typography>
            {catalog.attributes
              .filter((a) => a.status === 'Hoạt động' && a.usage.includes('Biến thể'))
              .map((attr) => (
                <Box key={attr.id}>
                  {fieldLabel(attr.name)}
                  <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                    {attr.values.map((value) => {
                      const active = (selections[attr.id] ?? []).includes(value);
                      return (
                        <ToggleButton
                          key={value}
                          value={value}
                          selected={active}
                          size="small"
                          sx={{ px: 1.5, py: 0.25, borderRadius: 1, textTransform: 'none', fontSize: 13 }}
                          onClick={() =>
                            setSelections((prev) => {
                              const list = prev[attr.id] ?? [];
                              return {
                                ...prev,
                                [attr.id]: active ? list.filter((v) => v !== value) : [...list, value],
                              };
                            })
                          }
                        >
                          {value}
                        </ToggleButton>
                      );
                    })}
                  </Stack>
                </Box>
              ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGenOpen(false)}>Huỷ</Button>
          <Button variant="contained" onClick={applyGeneration}>Sinh biến thể</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ---------------------------------------------------------------------- KHO HÀNG

function InventoryScreen({ catalog, module }: { catalog: Sofa2CatalogState; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [statusFilter, setStatusFilter] = useState('Tất cả');
  const [search, setSearch] = useState('');
  const [adjusting, setAdjusting] = useState<Sofa2CatalogStockRow | null>(null);
  const [moveType, setMoveType] = useState('Nhập');
  const [qty, setQty] = useState(1);
  const [reason, setReason] = useState('');

  const rows = useMemo(
    () =>
      catalog.stock
        .map((row) => ({ ...row, computed: sofa2CatalogStockStatus(row) }))
        .filter((row) => {
          const matchSearch = `${row.sku} ${row.warehouse} ${row.location}`.toLowerCase().includes(search.toLowerCase());
          const matchStatus = statusFilter === 'Tất cả' || row.computed === statusFilter;
          return matchSearch && matchStatus;
        })
        .sort((a, b) => (a.computed === 'Hết hàng' ? -1 : b.computed === 'Hết hàng' ? 1 : a.stock - b.stock)),
    [catalog.stock, search, statusFilter]
  );

  const totalStock = catalog.stock.reduce((sum, row) => sum + row.stock, 0);
  const lowCount = catalog.stock.filter((row) => sofa2CatalogStockStatus(row) === 'Sắp hết').length;
  const outCount = catalog.stock.filter((row) => sofa2CatalogStockStatus(row) === 'Hết hàng').length;
  const stockValue = catalog.prices.reduce((sum, row) => sum + row.sale * catalog.stock.filter((s) => s.sku === row.sku).reduce((n, s) => n + s.stock, 0), 0);

  const submitAdjust = () => {
    if (!adjusting) return;
    const error = adjustSofa2CatalogStock({ stockId: adjusting.id, type: moveType, qty, reason, by: 'Quản trị' });
    if (error) show('error', error);
    else {
      show('success', `Đã ghi nhận ${moveType.toLowerCase()} cho ${adjusting.sku}.`);
      setAdjusting(null);
      setReason('');
      setQty(1);
    }
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type}>{notice.text}</Alert>}
      <Stack>
        <Typography variant="h6">{module.name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
      </Stack>

      <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
        <CatalogKpi label="Tổng tồn kho" value={fNumber(totalStock)} icon="solar:box-bold-duotone" />
        <CatalogKpi label="Sắp hết (≤ ngưỡng)" value={fNumber(lowCount)} icon="solar:danger-triangle-bold-duotone" />
        <CatalogKpi label="Hết hàng" value={fNumber(outCount)} icon="solar:close-circle-bold-duotone" />
        <CatalogKpi label="Giá trị tồn" value={fCurrency(stockValue)} icon="solar:wallet-money-bold-duotone" />
      </Stack>

      <Stack direction="row" spacing={1.5} flexWrap="wrap">
        <TextField
          size="small"
          placeholder="Tìm SKU, kho, vị trí kệ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 260 }}
        />
        <ToggleButtonGroup size="small" value={statusFilter} exclusive onChange={(_, v) => v && setStatusFilter(v)}>
          {['Tất cả', 'Đủ hàng', 'Sắp hết', 'Hết hàng'].map((s) => (
            <ToggleButton key={s} value={s} sx={{ px: 1.5, textTransform: 'none', fontSize: 13 }}>{s}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      <Card>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('SKU')}
                {th('Kho')}
                {th('Vị trí kệ')}
                {th('Tồn thực tế', 'right')}
                {th('Đang giữ', 'right')}
                {th('Khả dụng', 'right')}
                {th('Ngưỡng', 'right')}
                {th('Kiểm kê')}
                {th('Trạng thái')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover sx={row.computed !== 'Đủ hàng' ? { bgcolor: 'action.hover' } : undefined}>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{row.sku}</Typography></TableCell>
                  <TableCell>{row.warehouse}</TableCell>
                  <TableCell><Typography variant="body2" sx={{ color: 'text.secondary' }}>{row.location}</Typography></TableCell>
                  <TableCell align="right">{fNumber(row.stock)}</TableCell>
                  <TableCell align="right">{fNumber(row.reserved)}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'fontWeightBold' }}>{fNumber(row.stock - row.reserved)}</TableCell>
                  <TableCell align="right">{row.minStock}</TableCell>
                  <TableCell><Typography variant="caption" sx={{ color: 'text.secondary' }}>{row.updated}</Typography></TableCell>
                  <TableCell><Chip size="small" color={statusChipColor(row.computed)} label={row.computed} /></TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      variant="soft"
                      startIcon={<Iconify icon="solar:box-minimalistic-in-bold-duotone" width={16} />}
                      onClick={() => { setAdjusting(row); setMoveType('Nhập'); setQty(1); setReason(''); }}
                    >
                      Nhập/xuất
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2.5, py: 1.5, bgcolor: 'action.hover' }}>
          <Iconify icon="solar:history-bold-duotone" width={20} />
          <Typography variant="subtitle2">Lịch sử nhập / xuất (mới nhất trước)</Typography>
        </Stack>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('Thời điểm')}
                {th('SKU')}
                {th('Kho')}
                {th('Loại')}
                {th('SL', 'right')}
                {th('Lý do')}
                {th('Người thực hiện')}
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.moves.slice(0, 12).map((move) => (
                <TableRow key={move.id} hover>
                  <TableCell><Typography variant="caption">{move.at}</Typography></TableCell>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{move.sku}</Typography></TableCell>
                  <TableCell>{move.warehouse}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={move.type}
                      color={move.type === 'Nhập' ? 'success' : move.type === 'Xuất' ? 'warning' : 'info'}
                      sx={{ height: 22 }}
                    />
                  </TableCell>
                  <TableCell align="right">{move.qty > 0 ? `+${move.qty}` : move.qty}</TableCell>
                  <TableCell><Typography variant="body2" sx={{ color: 'text.secondary' }}>{move.reason}</Typography></TableCell>
                  <TableCell>{move.by}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={Boolean(adjusting)} onClose={() => setAdjusting(null)} maxWidth="xs" fullWidth>
        <DialogTitle>Nhập / xuất kho — {adjusting?.sku}</DialogTitle>
        <DialogContent>
          {adjusting && (
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {adjusting.warehouse} · hiện còn {adjusting.stock} (khả dụng {adjusting.stock - adjusting.reserved})
              </Typography>
              <ToggleButtonGroup size="small" fullWidth value={moveType} exclusive onChange={(_, v) => v && setMoveType(v)}>
                {SOFA2_CATALOG_MOVE_TYPES.map((t) => (
                  <ToggleButton key={t} value={t} sx={{ textTransform: 'none' }}>{t}</ToggleButton>
                ))}
              </ToggleButtonGroup>
              <Box>
                {fieldLabel(moveType === 'Kiểm kê' ? 'Số lượng kiểm đếm thực tế' : 'Số lượng')}
                <TextField fullWidth size="small" type="number" value={qty} onChange={(e) => setQty(Math.max(0, Number(e.target.value)))} />
              </Box>
              <Box>
                {fieldLabel('Lý do / ghi chú')}
                <TextField fullWidth size="small" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="VD: Nhập lô sản xuất tháng 11" />
              </Box>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAdjusting(null)}>Huỷ</Button>
          <Button variant="contained" onClick={submitAdjust}>Ghi nhận</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ---------------------------------------------------------------------- GIÁ BÁN

function PricingScreen({ catalog, module }: { catalog: Sofa2CatalogState; module: Sofa2AdminModule }) {
  const { notice, show } = useNotice();
  const [selected, setSelected] = useState<string[]>([]);
  const [editing, setEditing] = useState<Sofa2CatalogPriceRow | null>(null);
  const [open, setOpen] = useState(false);
  const [percentOpen, setPercentOpen] = useState(false);
  const [percent, setPercent] = useState(-5);

  const blank = (): Sofa2CatalogPriceRow => ({
    id: `price-${Date.now().toString(36)}`,
    sku: catalog.products[0]?.sku ?? '',
    product: catalog.products[0]?.name ?? '',
    priceList: 'Bán lẻ',
    list: 0,
    sale: 0,
    dealer: 0,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    status: 'Giá gốc',
    showBadge: false,
    note: '',
  });

  const save = () => {
    if (!editing) return;
    saveSofa2CatalogPriceRow(editing);
    setOpen(false);
    show('success', 'Đã lưu giá — sản phẩm tương ứng trên web sẽ dùng giá mới.');
  };

  const applyPercent = () => {
    const touched = bulkChangeSofa2CatalogPrices(selected, percent);
    setPercentOpen(false);
    show(touched ? 'success' : 'error', touched ? `Đã điều chỉnh giá ${touched} dòng theo ${percent}%.` : 'Chưa chọn dòng nào.');
  };

  return (
    <Stack spacing={2}>
      {notice && <Alert severity={notice.type}>{notice.text}</Alert>}
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
        <Stack>
          <Typography variant="h6">{module.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{module.description}</Typography>
        </Stack>
        <Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold-duotone" />} onClick={() => { setEditing(blank()); setOpen(true); }}>
          Thêm dòng giá
        </Button>
      </Stack>

      {selected.length > 0 && (
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ p: 1.5, borderRadius: 1, bgcolor: 'action.selected' }}>
          <Typography variant="body2">Đã chọn {selected.length} dòng giá</Typography>
          <Button size="small" startIcon={<Iconify icon="solar:percent-bold" width={16} />} onClick={() => setPercentOpen(true)}>
            Điều chỉnh theo %
          </Button>
        </Stack>
      )}

      <Card>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('')}
                {th('SKU')}
                {th('Sản phẩm')}
                {th('Bảng giá')}
                {th('Niêm yết', 'right')}
                {th('Bán', 'right')}
                {th('Đại lý', 'right')}
                {th('Hiệu lực')}
                {th('Nhãn %')}
                {th('Trạng thái')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.prices.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      checked={selected.includes(row.id)}
                      onChange={(e) => setSelected((prev) => (e.target.checked ? [...prev, row.id] : prev.filter((id) => id !== row.id)))}
                    />
                  </TableCell>
                  <TableCell><Typography variant="body2" sx={{ fontFamily: 'monospace' }}>{row.sku}</Typography></TableCell>
                  <TableCell><Typography variant="subtitle2">{row.product}</Typography></TableCell>
                  <TableCell>{row.priceList}</TableCell>
                  <TableCell align="right">{fCurrency(row.list)}</TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" sx={{ fontWeight: 'fontWeightBold' }}>{fCurrency(row.sale)}</Typography>
                  </TableCell>
                  <TableCell align="right">{fCurrency(row.dealer)}</TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{row.startDate} → {row.endDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Switch size="small" checked={row.showBadge} onChange={(e) => saveSofa2CatalogPriceRow({ ...row, showBadge: e.target.checked })} />
                  </TableCell>
                  <TableCell><Chip size="small" color={statusChipColor(row.status)} label={row.status} /></TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <IconButton size="small" onClick={() => { setEditing({ ...row }); setOpen(true); }}>
                      <Iconify icon="solar:pen-bold" width={18} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => {
                        if (window.confirm(`Xoá dòng giá ${row.sku} (${row.priceList})?`)) {
                          removeSofa2CatalogPriceRow(row.id);
                          show('success', 'Đã xoá dòng giá.');
                        }
                      }}
                    >
                      <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2.5, py: 1.5, bgcolor: 'action.hover' }}>
          <Iconify icon="solar:calendar-mark-bold-duotone" width={20} />
          <Typography variant="subtitle2">Quy tắc giá theo lịch</Typography>
        </Stack>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {th('Quy tắc')}
                {th('Giảm', 'right')}
                {th('Bảng giá')}
                {th('Thời gian')}
                {th('Trạng thái')}
                {th('', 'right')}
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.rules.map((rule) => (
                <PriceRuleRow key={rule.id} rule={rule} onDeleted={() => show('success', 'Đã xoá quy tắc.')} onNotice={show} />
              ))}
              {catalog.rules.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', py: 2 }}>
                      Chưa có quy tắc nào.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
        <Box sx={{ p: 2 }}>
          <PriceRuleForm onSave={(rule) => { saveSofa2CatalogPriceRule(rule); show('success', 'Đã thêm quy tắc giá.'); }} />
        </Box>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{catalog.prices.some((p) => p.id === editing?.id) ? 'Sửa dòng giá' : 'Thêm dòng giá'}</DialogTitle>
        <DialogContent>
          {editing && (
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Sản phẩm')}
                  <Select
                    fullWidth
                    size="small"
                    value={editing.sku}
                    onChange={(e) => {
                      const product = catalog.products.find((p) => p.sku === e.target.value);
                      setEditing({ ...editing, sku: e.target.value, product: product?.name ?? editing.product });
                    }}
                  >
                    {catalog.products.map((p) => <MenuItem key={p.id} value={p.sku}>{p.name} ({p.sku})</MenuItem>)}
                  </Select>
                </Box>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Bảng giá')}
                  <Select fullWidth size="small" value={editing.priceList} onChange={(e) => setEditing({ ...editing, priceList: e.target.value })}>
                    {SOFA2_CATALOG_PRICE_LISTS.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </Select>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Giá niêm yết (₫)')}
                  <TextField fullWidth size="small" type="number" value={editing.list} onChange={(e) => setEditing({ ...editing, list: Number(e.target.value) })} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Giá bán (₫)')}
                  <TextField fullWidth size="small" type="number" value={editing.sale} onChange={(e) => setEditing({ ...editing, sale: Number(e.target.value) })} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Giá đại lý (₫)')}
                  <TextField fullWidth size="small" type="number" value={editing.dealer} onChange={(e) => setEditing({ ...editing, dealer: Number(e.target.value) })} />
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Bắt đầu')}
                  <TextField fullWidth size="small" type="date" value={editing.startDate} onChange={(e) => setEditing({ ...editing, startDate: e.target.value })} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Kết thúc')}
                  <TextField fullWidth size="small" type="date" value={editing.endDate} onChange={(e) => setEditing({ ...editing, endDate: e.target.value })} />
                </Box>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box sx={{ flex: 1 }}>
                  {fieldLabel('Trạng thái')}
                  <Select fullWidth size="small" value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value })}>
                    {SOFA2_CATALOG_PRICE_STATUSES.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </Select>
                </Box>
                <Box sx={{ flex: 2 }}>
                  {fieldLabel('Ghi chú')}
                  <TextField fullWidth size="small" value={editing.note} onChange={(e) => setEditing({ ...editing, note: e.target.value })} />
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">Hiện nhãn % giảm trên web</Typography>
                <Switch checked={editing.showBadge} onChange={(e) => setEditing({ ...editing, showBadge: e.target.checked })} />
              </Stack>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Huỷ</Button>
          <Button variant="contained" onClick={save}>Lưu giá</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={percentOpen} onClose={() => setPercentOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Điều chỉnh giá theo %</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Nhập số âm để giảm giá, số dương để tăng giá. Ví dụ −5 = giảm 5%.
            </Typography>
            <TextField fullWidth size="small" type="number" value={percent} onChange={(e) => setPercent(Number(e.target.value))} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPercentOpen(false)}>Huỷ</Button>
          <Button variant="contained" onClick={applyPercent}>Áp dụng</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

function PriceRuleRow({
  rule,
  onDeleted,
  onNotice,
}: {
  rule: Sofa2CatalogPriceRule;
  onDeleted: () => void;
  onNotice: (type: 'success' | 'error', text: string) => void;
}) {
  const apply = () => {
    const error = applySofa2CatalogPriceRule(rule.id);
    onNotice(error ? 'error' : 'success', error || `Đã áp dụng "${rule.name}" — giá các dòng liên quan đã cập nhật.`);
  };
  return (
    <TableRow hover>
      <TableCell><Typography variant="subtitle2">{rule.name}</Typography></TableCell>
      <TableCell align="right">−{rule.percent}%</TableCell>
      <TableCell>{rule.priceList}</TableCell>
      <TableCell>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{rule.startDate} → {rule.endDate}</Typography>
      </TableCell>
      <TableCell>
        <Chip size="small" color={statusChipColor(rule.status)} label={rule.status} />
        {rule.appliedAt && (
          <Typography variant="caption" sx={{ display: 'block', color: 'text.disabled' }}>Áp dụng: {rule.appliedAt}</Typography>
        )}
      </TableCell>
      <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
        <Button size="small" variant="soft" onClick={apply}>Áp dụng ngay</Button>
        <IconButton
          size="small"
          onClick={() => {
            if (window.confirm(`Xoá quy tắc "${rule.name}"?`)) {
              removeSofa2CatalogPriceRule(rule.id);
              onDeleted();
            }
          }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" width={18} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

function PriceRuleForm({ onSave }: { onSave: (rule: Sofa2CatalogPriceRule) => void }) {
  const [name, setName] = useState('');
  const [percent, setPercent] = useState(5);
  const [priceList, setPriceList] = useState('Bán lẻ');
  const [startDate, setStartDate] = useState('2026-12-01');
  const [endDate, setEndDate] = useState('2026-12-31');

  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle2">Thêm quy tắc nhanh</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flexWrap="wrap">
        <TextField size="small" placeholder="Tên quy tắc" value={name} onChange={(e) => setName(e.target.value)} sx={{ flex: 2, minWidth: 160 }} />
        <TextField size="small" type="number" label="Giảm (%)" value={percent} onChange={(e) => setPercent(Number(e.target.value))} sx={{ width: 110 }} />
        <Select size="small" value={priceList} onChange={(e) => setPriceList(e.target.value)} sx={{ minWidth: 130 }}>
          {SOFA2_CATALOG_PRICE_LISTS.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
        </Select>
        <TextField size="small" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} sx={{ width: 160 }} />
        <TextField size="small" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} sx={{ width: 160 }} />
        <Button
          variant="contained"
          onClick={() => {
            if (!name.trim()) return;
            onSave({
              id: `rule-${Date.now().toString(36)}`,
              name: name.trim(),
              percent,
              startDate,
              endDate,
              priceList,
              status: 'Chờ áp dụng',
              appliedAt: '',
            });
            setName('');
          }}
        >
          Thêm
        </Button>
      </Stack>
    </Stack>
  );
}

// ---------------------------------------------------------------------- Router

export function Sofa2AdminCatalogView({ group, module }: { group: Sofa2AdminGroup; module: Sofa2AdminModule }) {
  const catalog = useSofa2Catalog();

  switch (module.slug) {
    case 'categories':
      return <CategoriesScreen catalog={catalog} group={group} module={module} />;
    case 'products':
      return <ProductsScreen catalog={catalog} group={group} module={module} />;
    case 'attributes':
      return <AttributesScreen catalog={catalog} module={module} />;
    case 'variants':
      return <VariantsScreen catalog={catalog} module={module} />;
    case 'inventory':
      return <InventoryScreen catalog={catalog} module={module} />;
    case 'pricing':
      return <PricingScreen catalog={catalog} module={module} />;
    default:
      return null;
  }
}

