import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
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
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from 'src/components/iconify';

import {
  slugify,
  catalogId,
  WAREHOUSES,
  productStock,
  CATALOG_STATUSES,
  useSofa2Catalog,
  CATEGORY_GROUP_LABELS,
  type PriceRule,
  type CategoryGroup,
  type CatalogStatus,
  type CatalogVariant,
  type CatalogProduct,
  type CatalogCategory,
  type CatalogAttribute,
} from './sofa2-catalog-store';

// ----------------------------------------------------------------------

export const SOFA2_CATALOG_SLUGS = ['categories', 'products', 'attributes', 'variants', 'inventory', 'pricing'];

const money = (n: number) => `${n.toLocaleString('vi-VN')} ₫`;

const statusColor = (s: CatalogStatus) =>
  s === 'Đang bán' ? 'success' : s === 'Bản nháp' ? 'warning' : s === 'Tạm ẩn' ? 'default' : 'error';

type Ctx = ReturnType<typeof useSofa2Catalog> & { notify: (m: string) => void };

function Toolbar({
  search,
  onSearch,
  children,
}: {
  search: string;
  onSearch: (v: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ p: 2 }} alignItems={{ sm: 'center' }}>
      <TextField
        size="small"
        placeholder="Tìm kiếm..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        sx={{ minWidth: 240 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ flexGrow: 1 }} />
      {children}
    </Stack>
  );
}

function Stat({ label, value, color }: { label: string; value: string | number; color?: string }) {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h5" sx={{ color }}>
        {value}
      </Typography>
    </Card>
  );
}

// ---------------------------------------------------------------------- Danh mục

function CategoriesPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, saveCategory, removeCategory, notify } = ctx;
  const [search, setSearch] = useState('');
  const [groupFilter, setGroupFilter] = useState<CategoryGroup | 'all'>('all');
  const [edit, setEdit] = useState<CatalogCategory | null>(null);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    catalog.products.forEach((p) => {
      m[p.category] = (m[p.category] ?? 0) + 1;
      m[p.style] = (m[p.style] ?? 0) + 1;
    });
    return m;
  }, [catalog.products]);

  const rows = catalog.categories
    .filter((c) => (groupFilter === 'all' ? true : c.group === groupFilter))
    .filter((c) => c.label.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.group.localeCompare(b.group) || a.order - b.order);

  const move = (c: CatalogCategory, dir: -1 | 1) => saveCategory({ ...c, order: c.order + dir * 1.5 });

  return (
    <Card>
      <Toolbar search={search} onSearch={setSearch}>
        <TextField select size="small" value={groupFilter} onChange={(e) => setGroupFilter(e.target.value as CategoryGroup)} sx={{ minWidth: 160 }}>
          <MenuItem value="all">Tất cả nhóm</MenuItem>
          {Object.entries(CATEGORY_GROUP_LABELS).map(([k, v]) => (
            <MenuItem key={k} value={k}>
              {v}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() =>
            setEdit({ id: catalogId(), slug: '', label: '', group: groupFilter === 'all' ? 'types' : groupFilter, description: '', order: 99, visible: true })
          }
        >
          Thêm danh mục
        </Button>
      </Toolbar>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Danh mục</TableCell>
              <TableCell>Nhóm</TableCell>
              <TableCell>Đường dẫn</TableCell>
              <TableCell align="right">Sản phẩm</TableCell>
              <TableCell>Hiển thị</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((c) => (
              <TableRow key={c.id} hover>
                <TableCell sx={{ fontWeight: 600 }}>{c.label}</TableCell>
                <TableCell>{CATEGORY_GROUP_LABELS[c.group]}</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>/sofa2/products/category/{c.slug}</TableCell>
                <TableCell align="right">{counts[c.slug] ?? 0}</TableCell>
                <TableCell>
                  <Switch size="small" checked={c.visible} onChange={(e) => saveCategory({ ...c, visible: e.target.checked })} />
                </TableCell>
                <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton size="small" onClick={() => move(c, -1)}>
                    <Iconify icon="eva:arrow-up-fill" />
                  </IconButton>
                  <IconButton size="small" onClick={() => move(c, 1)}>
                    <Iconify icon="eva:arrow-down-fill" />
                  </IconButton>
                  <IconButton size="small" href={`/sofa2/products/category/${c.slug}`} target="_blank">
                    <Iconify icon="solar:eye-bold" />
                  </IconButton>
                  <IconButton size="small" onClick={() => setEdit(c)}>
                    <Iconify icon="solar:pen-bold" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => {
                      if (counts[c.slug]) return notify('Danh mục còn sản phẩm, hãy chuyển sản phẩm trước khi xoá');
                      removeCategory(c.id);
                      return notify('Đã xoá danh mục');
                    }}
                  >
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!edit} onClose={() => setEdit(null)} fullWidth maxWidth="sm">
        <DialogTitle>{edit?.label ? 'Sửa danh mục' : 'Thêm danh mục'}</DialogTitle>
        {edit && (
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField label="Tên danh mục" value={edit.label} onChange={(e) => setEdit({ ...edit, label: e.target.value, slug: edit.slug || '' })} />
              <TextField
                label="Slug"
                value={edit.slug}
                placeholder={slugify(edit.label)}
                onChange={(e) => setEdit({ ...edit, slug: slugify(e.target.value) })}
                helperText="Để trống để tự sinh từ tên"
              />
              <TextField select label="Nhóm" value={edit.group} onChange={(e) => setEdit({ ...edit, group: e.target.value as CategoryGroup })}>
                {Object.entries(CATEGORY_GROUP_LABELS).map(([k, v]) => (
                  <MenuItem key={k} value={k}>
                    {v}
                  </MenuItem>
                ))}
              </TextField>
              <TextField label="Mô tả" multiline minRows={2} value={edit.description} onChange={(e) => setEdit({ ...edit, description: e.target.value })} />
              <FormControlLabel control={<Switch checked={edit.visible} onChange={(e) => setEdit({ ...edit, visible: e.target.checked })} />} label="Hiển thị trên website" />
            </Stack>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setEdit(null)}>Huỷ</Button>
          <Button
            variant="contained"
            disabled={!edit?.label}
            onClick={() => {
              if (!edit) return;
              saveCategory({ ...edit, slug: edit.slug || slugify(edit.label) });
              setEdit(null);
              notify('Đã lưu danh mục');
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

// ---------------------------------------------------------------------- Sản phẩm

const emptyProduct = (): CatalogProduct => ({
  id: catalogId(),
  name: '',
  slug: '',
  sku: `LUXE-${Math.floor(Math.random() * 900 + 100)}`,
  category: 'sofa-vang',
  style: 'hien-dai',
  price: 0,
  image: '',
  images: [],
  material: '',
  size: '',
  colors: [],
  rating: 5,
  reviews: 0,
  description: '',
  status: 'Bản nháp',
  featured: false,
});

function ProductsPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, saveProduct, removeProducts, notify } = ctx;
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [selected, setSelected] = useState<string[]>([]);
  const [edit, setEdit] = useState<CatalogProduct | null>(null);

  const cats = (g: CategoryGroup) => catalog.categories.filter((c) => c.group === g);
  const label = (slug: string) => catalog.categories.find((c) => c.slug === slug)?.label ?? slug;

  const rows = catalog.products.filter(
    (p) =>
      (status === 'all' || p.status === status) &&
      `${p.name} ${p.sku}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <Toolbar search={search} onSearch={setSearch}>
        <TextField select size="small" value={status} onChange={(e) => setStatus(e.target.value)} sx={{ minWidth: 150 }}>
          <MenuItem value="all">Mọi trạng thái</MenuItem>
          {CATALOG_STATUSES.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>
        {selected.length > 0 && (
          <>
            <Button
              variant="outlined"
              onClick={() => {
                selected.forEach((id) => {
                  const p = catalog.products.find((x) => x.id === id);
                  if (p) saveProduct({ ...p, status: 'Tạm ẩn' });
                });
                setSelected([]);
                notify('Đã ẩn sản phẩm đã chọn');
              }}
            >
              Ẩn ({selected.length})
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                removeProducts(selected);
                setSelected([]);
                notify('Đã xoá sản phẩm');
              }}
            >
              Xoá ({selected.length})
            </Button>
          </>
        )}
        <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={() => setEdit(emptyProduct())}>
          Thêm sản phẩm
        </Button>
      </Toolbar>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={(e) => setSelected(e.target.checked ? rows.map((r) => r.id) : [])}
                />
              </TableCell>
              <TableCell>Sản phẩm</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell align="right">Giá bán</TableCell>
              <TableCell align="right">Tồn kho</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((p) => {
              const stock = productStock(catalog, p.id);
              return (
                <TableRow key={p.id} hover selected={selected.includes(p.id)}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(p.id)}
                      onChange={(e) => setSelected(e.target.checked ? [...selected, p.id] : selected.filter((x) => x !== p.id))}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar variant="rounded" src={p.image} sx={{ width: 44, height: 44 }} />
                      <Box>
                        <Typography variant="subtitle2">
                          {p.name} {p.featured && <Iconify icon="solar:star-bold" width={14} sx={{ color: 'warning.main' }} />}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {p.sku}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {label(p.category)}
                    <Typography variant="caption" display="block" color="text.secondary">
                      {label(p.style)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {money(p.price)}
                    {p.oldPrice && (
                      <Typography variant="caption" display="block" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                        {money(p.oldPrice)}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Chip size="small" label={stock} color={stock === 0 ? 'error' : stock < 5 ? 'warning' : 'default'} />
                  </TableCell>
                  <TableCell>
                    <Chip size="small" variant="soft" label={p.status} color={statusColor(p.status)} />
                  </TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <IconButton size="small" href={`/sofa2/products/${p.id}`} target="_blank">
                      <Iconify icon="solar:eye-bold" />
                    </IconButton>
                    <IconButton size="small" onClick={() => setEdit({ ...p, id: catalogId(), name: `${p.name} (bản sao)`, sku: `${p.sku}-C`, status: 'Bản nháp' })}>
                      <Iconify icon="solar:copy-bold" />
                    </IconButton>
                    <IconButton size="small" onClick={() => setEdit(p)}>
                      <Iconify icon="solar:pen-bold" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => {
                        removeProducts([p.id]);
                        notify('Đã xoá sản phẩm');
                      }}
                    >
                      <Iconify icon="solar:trash-bin-trash-bold" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!edit} onClose={() => setEdit(null)} fullWidth maxWidth="md">
        <DialogTitle>{catalog.products.some((p) => p.id === edit?.id) ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</DialogTitle>
        {edit && (
          <DialogContent>
            <Grid container spacing={2} sx={{ pt: 1 }}>
              <Grid xs={12} md={8}>
                <TextField fullWidth label="Tên sản phẩm" value={edit.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField fullWidth label="SKU" value={edit.sku} onChange={(e) => setEdit({ ...edit, sku: e.target.value })} />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth select label="Kiểu dáng" value={edit.category} onChange={(e) => setEdit({ ...edit, category: e.target.value })}>
                  {cats('types').map((c) => (
                    <MenuItem key={c.id} value={c.slug}>
                      {c.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth select label="Phong cách" value={edit.style} onChange={(e) => setEdit({ ...edit, style: e.target.value })}>
                  {cats('styles').map((c) => (
                    <MenuItem key={c.id} value={c.slug}>
                      {c.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={6} md={3}>
                <TextField fullWidth type="number" label="Giá bán (₫)" value={edit.price} onChange={(e) => setEdit({ ...edit, price: Number(e.target.value) })} />
              </Grid>
              <Grid xs={6} md={3}>
                <TextField
                  fullWidth
                  type="number"
                  label="Giá gốc (₫)"
                  value={edit.oldPrice ?? ''}
                  onChange={(e) => setEdit({ ...edit, oldPrice: e.target.value ? Number(e.target.value) : undefined })}
                />
              </Grid>
              <Grid xs={6} md={3}>
                <TextField fullWidth label="Nhãn (badge)" value={edit.badge ?? ''} onChange={(e) => setEdit({ ...edit, badge: e.target.value || undefined })} />
              </Grid>
              <Grid xs={6} md={3}>
                <TextField fullWidth select label="Trạng thái" value={edit.status} onChange={(e) => setEdit({ ...edit, status: e.target.value as CatalogStatus })}>
                  {CATALOG_STATUSES.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Chất liệu" value={edit.material} onChange={(e) => setEdit({ ...edit, material: e.target.value })} />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Kích thước" value={edit.size} onChange={(e) => setEdit({ ...edit, size: e.target.value })} />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Màu sắc (phân cách bằng dấu phẩy)"
                  value={edit.colors.join(', ')}
                  onChange={(e) => setEdit({ ...edit, colors: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Ảnh (mỗi dòng một URL, dòng đầu là ảnh đại diện)"
                  multiline
                  minRows={2}
                  value={edit.images.join('\n')}
                  onChange={(e) => {
                    const images = e.target.value.split('\n').map((s) => s.trim()).filter(Boolean);
                    setEdit({ ...edit, images, image: images[0] ?? '' });
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField fullWidth multiline minRows={3} label="Mô tả" value={edit.description} onChange={(e) => setEdit({ ...edit, description: e.target.value })} />
              </Grid>
              <Grid xs={12}>
                <FormControlLabel control={<Switch checked={edit.featured} onChange={(e) => setEdit({ ...edit, featured: e.target.checked })} />} label="Sản phẩm nổi bật" />
              </Grid>
            </Grid>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setEdit(null)}>Huỷ</Button>
          <Button
            variant="contained"
            disabled={!edit?.name || !edit?.price}
            onClick={() => {
              if (!edit) return;
              saveProduct({ ...edit, slug: edit.slug || slugify(edit.name) });
              setEdit(null);
              notify('Đã lưu sản phẩm — trang khách đã cập nhật');
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

// ---------------------------------------------------------------------- Thuộc tính

function AttributesPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, saveAttribute, removeAttribute, notify } = ctx;
  const [edit, setEdit] = useState<CatalogAttribute | null>(null);
  const [value, setValue] = useState('');

  return (
    <Card>
      <Stack direction="row" sx={{ p: 2 }} justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => setEdit({ id: catalogId(), name: '', code: '', type: 'Chọn một', values: [], useForVariant: false })}
        >
          Thêm thuộc tính
        </Button>
      </Stack>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Thuộc tính</TableCell>
              <TableCell>Kiểu</TableCell>
              <TableCell>Giá trị</TableCell>
              <TableCell>Dùng cho biến thể</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.attributes.map((a) => (
              <TableRow key={a.id} hover>
                <TableCell>
                  <Typography variant="subtitle2">{a.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {a.code}
                  </Typography>
                </TableCell>
                <TableCell>{a.type}</TableCell>
                <TableCell>
                  <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {a.values.map((v) => (
                      <Chip key={v} size="small" label={v} />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Switch size="small" checked={a.useForVariant} onChange={(e) => saveAttribute({ ...a, useForVariant: e.target.checked })} />
                </TableCell>
                <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton size="small" onClick={() => setEdit(a)}>
                    <Iconify icon="solar:pen-bold" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => {
                      removeAttribute(a.id);
                      notify('Đã xoá thuộc tính');
                    }}
                  >
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!edit} onClose={() => setEdit(null)} fullWidth maxWidth="sm">
        <DialogTitle>Thuộc tính</DialogTitle>
        {edit && (
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField label="Tên" value={edit.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
              <TextField label="Mã" value={edit.code} placeholder={slugify(edit.name)} onChange={(e) => setEdit({ ...edit, code: slugify(e.target.value) })} />
              <TextField select label="Kiểu" value={edit.type} onChange={(e) => setEdit({ ...edit, type: e.target.value as CatalogAttribute['type'] })}>
                {['Chọn một', 'Màu sắc', 'Văn bản'].map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </TextField>
              <Stack direction="row" spacing={1}>
                <TextField
                  size="small"
                  fullWidth
                  label="Thêm giá trị"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && value.trim()) {
                      setEdit({ ...edit, values: [...edit.values, value.trim()] });
                      setValue('');
                    }
                  }}
                />
                <Button
                  onClick={() => {
                    if (!value.trim()) return;
                    setEdit({ ...edit, values: [...edit.values, value.trim()] });
                    setValue('');
                  }}
                >
                  Thêm
                </Button>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={0.5}>
                {edit.values.map((v) => (
                  <Chip key={v} label={v} onDelete={() => setEdit({ ...edit, values: edit.values.filter((x) => x !== v) })} />
                ))}
              </Stack>
              <FormControlLabel
                control={<Switch checked={edit.useForVariant} onChange={(e) => setEdit({ ...edit, useForVariant: e.target.checked })} />}
                label="Dùng để tạo biến thể"
              />
            </Stack>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setEdit(null)}>Huỷ</Button>
          <Button
            variant="contained"
            disabled={!edit?.name}
            onClick={() => {
              if (!edit) return;
              saveAttribute({ ...edit, code: edit.code || slugify(edit.name) });
              setEdit(null);
              notify('Đã lưu thuộc tính');
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

// ---------------------------------------------------------------------- Biến thể

function VariantsPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, saveVariant, addVariants, removeVariant, notify } = ctx;
  const [productId, setProductId] = useState(catalog.products[0]?.id ?? '');
  const [gen, setGen] = useState<Record<string, string[]> | null>(null);
  const product = catalog.products.find((p) => p.id === productId);
  const variants = catalog.variants.filter((v) => v.productId === productId);
  const varAttrs = catalog.attributes.filter((a) => a.useForVariant);

  const generate = () => {
    if (!product || !gen) return;
    const lists = Object.entries(gen).filter(([, vals]) => vals.length);
    let combos: Record<string, string>[] = [{}];
    lists.forEach(([code, vals]) => {
      combos = combos.flatMap((c) => vals.map((v) => ({ ...c, [code]: v })));
    });
    const exists = (o: Record<string, string>) => variants.some((v) => JSON.stringify(v.options) === JSON.stringify(o));
    const created: CatalogVariant[] = combos
      .filter((o) => Object.keys(o).length && !exists(o))
      .map((options) => ({
        id: catalogId(),
        productId: product.id,
        sku: `${product.sku}-${Object.values(options).map((v) => slugify(v).toUpperCase()).join('-')}`,
        options,
        price: product.price,
        stock: 0,
        reorderPoint: 3,
        warehouse: WAREHOUSES[0],
        active: true,
      }));
    addVariants(created);
    setGen(null);
    notify(`Đã tạo ${created.length} biến thể`);
  };

  return (
    <Card>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ p: 2 }}>
        <TextField select size="small" label="Sản phẩm" value={productId} onChange={(e) => setProductId(e.target.value)} sx={{ minWidth: 280 }}>
          {catalog.products.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" startIcon={<Iconify icon="solar:magic-stick-3-bold" />} disabled={!product} onClick={() => setGen({})}>
          Tạo biến thể tự động
        </Button>
      </Stack>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Tuỳ chọn</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="right">Tồn</TableCell>
              <TableCell>Kho</TableCell>
              <TableCell>Bán</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {variants.map((v) => (
              <TableRow key={v.id} hover>
                <TableCell sx={{ fontFamily: 'monospace', fontSize: 12 }}>{v.sku}</TableCell>
                <TableCell>
                  {Object.entries(v.options).map(([k, val]) => (
                    <Chip key={k} size="small" label={`${catalog.attributes.find((a) => a.code === k)?.name ?? k}: ${val}`} sx={{ mr: 0.5 }} />
                  ))}
                </TableCell>
                <TableCell align="right">
                  <TextField
                    size="small"
                    type="number"
                    value={v.price}
                    onChange={(e) => saveVariant({ ...v, price: Number(e.target.value) })}
                    sx={{ width: 130 }}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    size="small"
                    type="number"
                    value={v.stock}
                    onChange={(e) => saveVariant({ ...v, stock: Math.max(0, Number(e.target.value)) })}
                    sx={{ width: 80 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField select size="small" value={v.warehouse} onChange={(e) => saveVariant({ ...v, warehouse: e.target.value })}>
                    {WAREHOUSES.map((w) => (
                      <MenuItem key={w} value={w}>
                        {w}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                  <Switch size="small" checked={v.active} onChange={(e) => saveVariant({ ...v, active: e.target.checked })} />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="error" onClick={() => removeVariant(v.id)}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!variants.length && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                  Chưa có biến thể — bấm “Tạo biến thể tự động”.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!gen} onClose={() => setGen(null)} fullWidth maxWidth="sm">
        <DialogTitle>Tạo biến thể cho {product?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Chọn giá trị cho từng thuộc tính, hệ thống sẽ tạo mọi tổ hợp chưa tồn tại.
          </Typography>
          {varAttrs.map((a) => (
            <Box key={a.id} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {a.name}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {a.values.map((val) => {
                  const on = gen?.[a.code]?.includes(val);
                  return (
                    <Chip
                      key={val}
                      label={val}
                      color={on ? 'primary' : 'default'}
                      variant={on ? 'filled' : 'outlined'}
                      onClick={() => {
                        const cur = gen?.[a.code] ?? [];
                        setGen({ ...gen, [a.code]: on ? cur.filter((x) => x !== val) : [...cur, val] });
                      }}
                    />
                  );
                })}
              </Stack>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGen(null)}>Huỷ</Button>
          <Button variant="contained" onClick={generate}>
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

// ---------------------------------------------------------------------- Kho hàng

function InventoryPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, adjustStock, notify } = ctx;
  const [search, setSearch] = useState('');
  const [warehouse, setWarehouse] = useState('all');
  const [adjust, setAdjust] = useState<{ v: CatalogVariant; delta: number; reason: string } | null>(null);

  const name = (id: string) => catalog.products.find((p) => p.id === id)?.name ?? '—';
  const rows = catalog.variants.filter(
    (v) =>
      (warehouse === 'all' || v.warehouse === warehouse) &&
      `${v.sku} ${name(v.productId)}`.toLowerCase().includes(search.toLowerCase())
  );
  const total = catalog.variants.reduce((s, v) => s + v.stock, 0);
  const low = catalog.variants.filter((v) => v.stock > 0 && v.stock <= v.reorderPoint).length;
  const out = catalog.variants.filter((v) => v.stock === 0).length;
  const value = catalog.variants.reduce((s, v) => s + v.stock * v.price, 0);

  return (
    <Stack spacing={3}>
      <Grid container spacing={2}>
        <Grid xs={6} md={3}>
          <Stat label="Tổng tồn kho" value={total} />
        </Grid>
        <Grid xs={6} md={3}>
          <Stat label="Sắp hết" value={low} color="warning.main" />
        </Grid>
        <Grid xs={6} md={3}>
          <Stat label="Hết hàng" value={out} color="error.main" />
        </Grid>
        <Grid xs={6} md={3}>
          <Stat label="Giá trị tồn" value={money(value)} />
        </Grid>
      </Grid>
      <Card>
        <Toolbar search={search} onSearch={setSearch}>
          <TextField select size="small" value={warehouse} onChange={(e) => setWarehouse(e.target.value)} sx={{ minWidth: 160 }}>
            <MenuItem value="all">Tất cả kho</MenuItem>
            {WAREHOUSES.map((w) => (
              <MenuItem key={w} value={w}>
                {w}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm / SKU</TableCell>
                <TableCell>Kho</TableCell>
                <TableCell align="right">Tồn</TableCell>
                <TableCell align="right">Điểm đặt lại</TableCell>
                <TableCell>Tình trạng</TableCell>
                <TableCell align="right">Điều chỉnh</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((v) => (
                <TableRow key={v.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2">{name(v.productId)}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {v.sku}
                    </Typography>
                  </TableCell>
                  <TableCell>{v.warehouse}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700 }}>
                    {v.stock}
                  </TableCell>
                  <TableCell align="right">{v.reorderPoint}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      variant="soft"
                      label={v.stock === 0 ? 'Hết hàng' : v.stock <= v.reorderPoint ? 'Sắp hết' : 'Còn hàng'}
                      color={v.stock === 0 ? 'error' : v.stock <= v.reorderPoint ? 'warning' : 'success'}
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <Button size="small" onClick={() => setAdjust({ v, delta: 5, reason: 'Nhập kho' })}>
                      Nhập
                    </Button>
                    <Button size="small" color="inherit" onClick={() => setAdjust({ v, delta: -1, reason: 'Xuất kho' })}>
                      Xuất
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Lịch sử nhập / xuất
        </Typography>
        {catalog.moves.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            Chưa có phát sinh.
          </Typography>
        )}
        {catalog.moves.slice(0, 15).map((m) => (
          <Stack key={m.id} direction="row" spacing={2} sx={{ py: 0.75, borderBottom: '1px dashed', borderColor: 'divider' }}>
            <Typography variant="caption" sx={{ width: 150, color: 'text.secondary' }}>
              {m.at}
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              {catalog.variants.find((v) => v.id === m.variantId)?.sku ?? m.variantId} — {m.reason}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: m.delta > 0 ? 'success.main' : 'error.main' }}>
              {m.delta > 0 ? `+${m.delta}` : m.delta}
            </Typography>
          </Stack>
        ))}
      </Card>

      <Dialog open={!!adjust} onClose={() => setAdjust(null)} fullWidth maxWidth="xs">
        <DialogTitle>Điều chỉnh tồn kho</DialogTitle>
        {adjust && (
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Typography variant="body2">
                {adjust.v.sku} — hiện có <b>{adjust.v.stock}</b>
              </Typography>
              <TextField
                type="number"
                label="Số lượng (+ nhập / − xuất)"
                value={adjust.delta}
                onChange={(e) => setAdjust({ ...adjust, delta: Number(e.target.value) })}
              />
              <TextField select label="Lý do" value={adjust.reason} onChange={(e) => setAdjust({ ...adjust, reason: e.target.value })}>
                {['Nhập kho', 'Xuất kho', 'Kiểm kê', 'Hàng lỗi', 'Chuyển kho', 'Khách trả'].map((r) => (
                  <MenuItem key={r} value={r}>
                    {r}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setAdjust(null)}>Huỷ</Button>
          <Button
            variant="contained"
            disabled={!adjust?.delta}
            onClick={() => {
              if (!adjust) return;
              adjustStock(adjust.v.id, adjust.delta, adjust.reason);
              setAdjust(null);
              notify('Đã cập nhật tồn kho');
            }}
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ---------------------------------------------------------------------- Giá bán

function PricingPanel({ ctx }: { ctx: Ctx }) {
  const { catalog, saveProduct, bulkPrice, savePriceRule, removePriceRule, notify } = ctx;
  const [selected, setSelected] = useState<string[]>([]);
  const [percent, setPercent] = useState(-10);
  const [keepOld, setKeepOld] = useState(true);
  const [rule, setRule] = useState<PriceRule | null>(null);

  return (
    <Stack spacing={3}>
      <Card>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} sx={{ p: 2 }} alignItems={{ md: 'center' }}>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Bảng giá sản phẩm
          </Typography>
          <TextField
            size="small"
            type="number"
            label="Điều chỉnh %"
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            sx={{ width: 130 }}
          />
          <FormControlLabel control={<Checkbox checked={keepOld} onChange={(e) => setKeepOld(e.target.checked)} />} label="Giữ giá gốc khi giảm" />
          <Button
            variant="contained"
            disabled={!selected.length || !percent}
            onClick={() => {
              bulkPrice(selected, percent, keepOld);
              notify(`Đã điều chỉnh giá ${selected.length} sản phẩm`);
              setSelected([]);
            }}
          >
            Áp dụng ({selected.length})
          </Button>
        </Stack>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.length === catalog.products.length}
                    onChange={(e) => setSelected(e.target.checked ? catalog.products.map((p) => p.id) : [])}
                  />
                </TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell align="right">Giá gốc</TableCell>
                <TableCell align="right">Giá bán</TableCell>
                <TableCell align="right">Giảm</TableCell>
                <TableCell align="right">Biến thể</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.products.map((p) => {
                const vs = catalog.variants.filter((v) => v.productId === p.id).map((v) => v.price);
                const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
                return (
                  <TableRow key={p.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(p.id)}
                        onChange={(e) => setSelected(e.target.checked ? [...selected, p.id] : selected.filter((x) => x !== p.id))}
                      />
                    </TableCell>
                    <TableCell>{p.name}</TableCell>
                    <TableCell align="right">
                      <TextField
                        size="small"
                        type="number"
                        value={p.oldPrice ?? ''}
                        onChange={(e) => saveProduct({ ...p, oldPrice: e.target.value ? Number(e.target.value) : undefined })}
                        sx={{ width: 140 }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        size="small"
                        type="number"
                        value={p.price}
                        onChange={(e) => saveProduct({ ...p, price: Number(e.target.value) })}
                        sx={{ width: 140 }}
                      />
                    </TableCell>
                    <TableCell align="right">{off > 0 ? <Chip size="small" color="error" label={`-${off}%`} /> : '—'}</TableCell>
                    <TableCell align="right" sx={{ color: 'text.secondary' }}>
                      {vs.length ? `${money(Math.min(...vs))} – ${money(Math.max(...vs))}` : '—'}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card>
        <Stack direction="row" sx={{ p: 2 }} alignItems="center">
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Quy tắc giá theo lịch
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={() => setRule({ id: catalogId(), name: '', scope: 'Tất cả', target: '', percent: -5, start: '', end: '', active: false })}
          >
            Thêm quy tắc
          </Button>
        </Stack>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Tên</TableCell>
                <TableCell>Phạm vi</TableCell>
                <TableCell align="right">%</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Bật</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {catalog.priceRules.map((r) => (
                <TableRow key={r.id} hover>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>
                    {r.scope}
                    {r.target && ` · ${r.target}`}
                  </TableCell>
                  <TableCell align="right">{r.percent}%</TableCell>
                  <TableCell>
                    {r.start || '—'} → {r.end || '—'}
                  </TableCell>
                  <TableCell>
                    <Switch size="small" checked={r.active} onChange={(e) => savePriceRule({ ...r, active: e.target.checked })} />
                  </TableCell>
                  <TableCell align="right" sx={{ whiteSpace: 'nowrap' }}>
                    <Button
                      size="small"
                      onClick={() => {
                        const ids = catalog.products
                          .filter((p) => r.scope === 'Tất cả' || (r.scope === 'Danh mục' ? p.category === r.target || p.style === r.target : p.id === r.target))
                          .map((p) => p.id);
                        bulkPrice(ids, r.percent, true);
                        notify(`Đã áp dụng “${r.name}” cho ${ids.length} sản phẩm`);
                      }}
                    >
                      Áp dụng ngay
                    </Button>
                    <IconButton size="small" onClick={() => setRule(r)}>
                      <Iconify icon="solar:pen-bold" />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => removePriceRule(r.id)}>
                      <Iconify icon="solar:trash-bin-trash-bold" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={!!rule} onClose={() => setRule(null)} fullWidth maxWidth="sm">
        <DialogTitle>Quy tắc giá</DialogTitle>
        {rule && (
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField label="Tên" value={rule.name} onChange={(e) => setRule({ ...rule, name: e.target.value })} />
              <TextField select label="Phạm vi" value={rule.scope} onChange={(e) => setRule({ ...rule, scope: e.target.value as PriceRule['scope'], target: '' })}>
                {['Tất cả', 'Danh mục', 'Sản phẩm'].map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
              {rule.scope !== 'Tất cả' && (
                <TextField select label="Đối tượng" value={rule.target} onChange={(e) => setRule({ ...rule, target: e.target.value })}>
                  {(rule.scope === 'Danh mục'
                    ? catalog.categories.filter((c) => c.group === 'types' || c.group === 'styles').map((c) => ({ v: c.slug, l: c.label }))
                    : catalog.products.map((p) => ({ v: p.id, l: p.name }))
                  ).map((o) => (
                    <MenuItem key={o.v} value={o.v}>
                      {o.l}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              <TextField type="number" label="% điều chỉnh (âm = giảm)" value={rule.percent} onChange={(e) => setRule({ ...rule, percent: Number(e.target.value) })} />
              <Stack direction="row" spacing={2}>
                <TextField fullWidth type="date" label="Bắt đầu" InputLabelProps={{ shrink: true }} value={rule.start} onChange={(e) => setRule({ ...rule, start: e.target.value })} />
                <TextField fullWidth type="date" label="Kết thúc" InputLabelProps={{ shrink: true }} value={rule.end} onChange={(e) => setRule({ ...rule, end: e.target.value })} />
              </Stack>
            </Stack>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setRule(null)}>Huỷ</Button>
          <Button
            variant="contained"
            disabled={!rule?.name}
            onClick={() => {
              if (!rule) return;
              savePriceRule(rule);
              setRule(null);
              notify('Đã lưu quy tắc giá');
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function Sofa2CatalogModule({ slug }: { slug: string }) {
  const store = useSofa2Catalog();
  const [toast, setToast] = useState('');
  const ctx: Ctx = { ...store, notify: setToast };
  const { catalog } = store;

  const kpis = [
    { label: 'Sản phẩm', value: catalog.products.length },
    { label: 'Đang bán', value: catalog.products.filter((p) => p.status === 'Đang bán').length },
    { label: 'Biến thể', value: catalog.variants.length },
    { label: 'Danh mục hiển thị', value: catalog.categories.filter((c) => c.visible).length },
  ];

  return (
    <Stack spacing={3}>
      <Grid container spacing={2}>
        {kpis.map((k) => (
          <Grid key={k.label} xs={6} md={3}>
            <Stat label={k.label} value={k.value} />
          </Grid>
        ))}
      </Grid>

      {slug === 'categories' && <CategoriesPanel ctx={ctx} />}
      {slug === 'products' && <ProductsPanel ctx={ctx} />}
      {slug === 'attributes' && <AttributesPanel ctx={ctx} />}
      {slug === 'variants' && <VariantsPanel ctx={ctx} />}
      {slug === 'inventory' && <InventoryPanel ctx={ctx} />}
      {slug === 'pricing' && <PricingPanel ctx={ctx} />}

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="text.secondary">
          Dữ liệu lưu trên trình duyệt và hiển thị ngay ở trang khách /sofa2/products.
        </Typography>
        <Button
          size="small"
          color="inherit"
          onClick={() => {
            store.resetCatalog();
            setToast('Đã khôi phục dữ liệu mặc định');
          }}
        >
          Khôi phục mặc định
        </Button>
      </Stack>

      <Snackbar open={!!toast} autoHideDuration={2500} onClose={() => setToast('')} message={toast} />
    </Stack>
  );
}
