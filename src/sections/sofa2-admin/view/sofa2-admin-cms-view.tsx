import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import TableContainer from '@mui/material/TableContainer';

import { Iconify } from 'src/components/iconify';

import { Sofa2AdminLayout, SOFA2_ADMIN_THEME } from './sofa2-admin-layout';
import { SOFA2_ADMIN_ROOT, findSofa2AdminModule } from '../sofa2-admin-data';
import {
  useSofa2Cms,
  CMS_BLOCK_TYPES,
  CMS_STATUS_LABEL,
  type CmsItem,
  type CmsPage,
  type CmsBlock,
  type CmsStatus,
} from '../sofa2-cms-store';

// ----------------------------------------------------------------------

const { ACCENT_DEEP, SURFACE } = SOFA2_ADMIN_THEME;

export const CMS_PAGE_SLUGS = ['home', 'about', 'contact', 'policy', 'terms', 'faq'];

type Field = {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'status' | 'select';
  options?: string[];
  width?: number;
};

const STATUS_FIELD: Field = { key: 'status', label: 'Trạng thái', type: 'status', width: 6 };

const COLLECTION_SCHEMA: Record<string, { title: string; addLabel: string; fields: Field[] }> = {
  blog: {
    title: 'Bài viết blog',
    addLabel: 'Viết bài mới',
    fields: [
      { key: 'title', label: 'Tiêu đề', width: 12 },
      { key: 'slug', label: 'Đường dẫn (slug)', width: 6 },
      { key: 'category', label: 'Chuyên mục', type: 'select', options: ['Triết lý', 'Tư vấn', 'Xu hướng', 'Bảo dưỡng'], width: 6 },
      { key: 'author', label: 'Tác giả', width: 6 },
      { key: 'publishAt', label: 'Ngày đăng', width: 6 },
      STATUS_FIELD,
      { key: 'views', label: 'Lượt đọc', type: 'number', width: 6 },
      { key: 'excerpt', label: 'Tóm tắt', type: 'textarea', width: 12 },
    ],
  },
  menu: {
    title: 'Mục menu',
    addLabel: 'Thêm mục menu',
    fields: [
      { key: 'label', label: 'Nhãn hiển thị', width: 6 },
      { key: 'url', label: 'Liên kết', width: 6 },
      { key: 'position', label: 'Vị trí', type: 'select', options: ['Header', 'Footer', 'Mobile', 'Mega menu'], width: 6 },
      { key: 'parent', label: 'Thuộc mục cha', width: 6 },
      { key: 'order', label: 'Thứ tự', type: 'number', width: 6 },
      STATUS_FIELD,
    ],
  },
  banner: {
    title: 'Banner',
    addLabel: 'Tạo banner',
    fields: [
      { key: 'name', label: 'Tên banner', width: 12 },
      { key: 'position', label: 'Vị trí', type: 'select', options: ['Top bar', 'Trang chủ', 'Danh mục', 'Chi tiết sản phẩm', 'Popup'], width: 6 },
      { key: 'link', label: 'Liên kết đích', width: 6 },
      { key: 'image', label: 'Ảnh (URL)', width: 12 },
      { key: 'start', label: 'Bắt đầu', width: 6 },
      { key: 'end', label: 'Kết thúc', width: 6 },
      STATUS_FIELD,
    ],
  },
  slider: {
    title: 'Slider',
    addLabel: 'Tạo slider',
    fields: [
      { key: 'name', label: 'Tên slider', width: 12 },
      { key: 'page', label: 'Trang áp dụng', width: 6 },
      { key: 'slides', label: 'Số slide', type: 'number', width: 3 },
      { key: 'interval', label: 'Giây / slide', type: 'number', width: 3 },
      STATUS_FIELD,
    ],
  },
  seo: {
    title: 'SEO theo trang',
    addLabel: 'Thêm cấu hình SEO',
    fields: [
      { key: 'page', label: 'Tên trang', width: 6 },
      { key: 'path', label: 'Đường dẫn', width: 6 },
      { key: 'metaTitle', label: 'Meta title', width: 12 },
      { key: 'metaDescription', label: 'Meta description', type: 'textarea', width: 12 },
      { key: 'keywords', label: 'Từ khoá', width: 6 },
      STATUS_FIELD,
    ],
  },
  static: {
    title: 'Trang tĩnh',
    addLabel: 'Tạo trang tĩnh',
    fields: [
      { key: 'name', label: 'Tên trang', width: 6 },
      { key: 'path', label: 'Đường dẫn', width: 6 },
      { key: 'template', label: 'Mẫu bố cục', type: 'select', options: ['Trang văn bản', 'Trang form', 'Trang landing'], width: 6 },
      { key: 'updated', label: 'Cập nhật', width: 6 },
      STATUS_FIELD,
    ],
  },
};

const STATUS_OPTIONS: CmsStatus[] = ['published', 'draft', 'hidden'];

const statusChipColor = (status: string) =>
  status === 'published' ? 'success' : status === 'draft' ? 'warning' : 'default';

// ----------------------------------------------------------------------

export function Sofa2AdminCmsView() {
  const { group: groupSlug = 'cms', module: moduleSlug = 'home' } = useParams();

  const found = useMemo(() => findSofa2AdminModule(groupSlug, moduleSlug), [groupSlug, moduleSlug]);

  const cms = useSofa2Cms();
  const [toast, setToast] = useState('');

  const isPage = CMS_PAGE_SLUGS.includes(moduleSlug);
  const groupName = found?.group.name ?? 'CMS';
  const moduleName = found?.module.name ?? moduleSlug;

  return (
    <>
      <Helmet>
        <title>{`${moduleName} | CMS - Quản trị Sofa2`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa2AdminLayout
        activeGroup={groupSlug}
        activeModule={moduleSlug}
        breadcrumb={[groupName, moduleName]}
        title={moduleName}
        subtitle={
          isPage
            ? 'Biên tập từng khối nội dung, cấu hình SEO và xuất bản ra trang khách hàng.'
            : 'Thêm, sửa, xoá và xuất bản dữ liệu hiển thị trên trang khách hàng.'
        }
      >
        {isPage ? (
          <PageEditor slug={moduleSlug} cms={cms} onToast={setToast} />
        ) : (
          <CollectionEditor slug={moduleSlug} cms={cms} onToast={setToast} />
        )}
      </Sofa2AdminLayout>

      <Snackbar
        open={!!toast}
        message={toast}
        autoHideDuration={2500}
        onClose={() => setToast('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

type CmsApi = ReturnType<typeof useSofa2Cms>;

function PageEditor({
  slug,
  cms,
  onToast,
}: {
  slug: string;
  cms: CmsApi;
  onToast: (m: string) => void;
}) {
  const page = cms.state.pages[slug];
  const [tab, setTab] = useState(0);
  const [editing, setEditing] = useState<CmsBlock | null>(null);
  const [isNew, setIsNew] = useState(false);

  if (!page) return <Typography>Không tìm thấy trang.</Typography>;

  const setPage = (next: Partial<CmsPage>) => cms.savePage(slug, { ...page, ...next });

  const openNewBlock = () => {
    setIsNew(true);
    setEditing({
      id: '',
      type: CMS_BLOCK_TYPES[0],
      title: '',
      subtitle: '',
      body: '',
      image: '',
      ctaLabel: '',
      ctaHref: '',
      status: 'draft',
    });
  };

  const saveBlock = () => {
    if (!editing) return;
    if (isNew) {
      const { id, ...rest } = editing;
      cms.addBlock(slug, rest);
      onToast('Đã thêm khối nội dung.');
    } else {
      cms.updateBlock(slug, editing.id, editing);
      onToast('Đã cập nhật khối nội dung.');
    }
    setEditing(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Card sx={{ p: 2.5 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
            <Stack spacing={0.5} sx={{ flex: 1 }}>
              <Typography variant="h6">{page.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {page.template} · {page.path} · cập nhật {page.updated} bởi {page.author}
              </Typography>
            </Stack>
            <Chip
              size="small"
              variant="soft"
              label={CMS_STATUS_LABEL[page.status]}
              color={statusChipColor(page.status) as any}
            />
            <Button
              size="small"
              color="inherit"
              variant="outlined"
              href={page.path}
              target="_blank"
              startIcon={<Iconify icon="solar:eye-bold-duotone" />}
            >
              Xem trang khách
            </Button>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: alpha(SURFACE, 0.85) } }}
              onClick={() => {
                setPage({ status: page.status === 'published' ? 'draft' : 'published' });
                onToast(page.status === 'published' ? 'Đã chuyển về bản nháp.' : 'Đã xuất bản trang.');
              }}
              startIcon={<Iconify icon="solar:upload-bold-duotone" />}
            >
              {page.status === 'published' ? 'Gỡ xuất bản' : 'Xuất bản'}
            </Button>
          </Stack>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2.5 }}>
            <Tab label={`Khối nội dung (${page.blocks.length})`} />
            <Tab label="SEO & chia sẻ" />
            <Tab label="Thiết lập trang" />
          </Tabs>
          <Divider />

          {tab === 0 && (
            <Box sx={{ p: 2.5 }}>
              <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="inherit"
                  onClick={openNewBlock}
                  sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: alpha(SURFACE, 0.85) } }}
                  startIcon={<Iconify icon="mingcute:add-line" />}
                >
                  Thêm khối
                </Button>
              </Stack>

              <TableContainer sx={{ borderTop: `1px solid ${alpha(ACCENT_DEEP, 0.16)}` }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Khối nội dung</TableCell>
                      <TableCell>Loại</TableCell>
                      <TableCell>Trạng thái</TableCell>
                      <TableCell align="right">Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {page.blocks.map((b, i) => (
                      <TableRow key={b.id} hover>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">{b.title || '(chưa đặt tiêu đề)'}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {b.body}
                          </Typography>
                        </TableCell>
                        <TableCell>{b.type}</TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            variant="soft"
                            label={CMS_STATUS_LABEL[b.status]}
                            color={statusChipColor(b.status) as any}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                            <Tooltip title="Lên">
                              <IconButton size="small" onClick={() => cms.moveBlock(slug, b.id, -1)}>
                                <Iconify icon="eva:arrow-upward-fill" width={16} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Xuống">
                              <IconButton size="small" onClick={() => cms.moveBlock(slug, b.id, 1)}>
                                <Iconify icon="eva:arrow-downward-fill" width={16} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Sửa">
                              <IconButton
                                size="small"
                                onClick={() => {
                                  setIsNew(false);
                                  setEditing(b);
                                }}
                              >
                                <Iconify icon="solar:pen-bold" width={16} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Xoá">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => {
                                  cms.removeBlock(slug, b.id);
                                  onToast('Đã xoá khối nội dung.');
                                }}
                              >
                                <Iconify icon="solar:trash-bin-trash-bold-duotone" width={16} />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {tab === 1 && (
            <Grid container spacing={2} sx={{ p: 2.5 }}>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Meta title"
                  value={page.seo.title}
                  helperText={`${page.seo.title.length}/60 ký tự`}
                  onChange={(e) => setPage({ seo: { ...page.seo, title: e.target.value } })}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Meta description"
                  value={page.seo.description}
                  helperText={`${page.seo.description.length}/160 ký tự`}
                  onChange={(e) => setPage({ seo: { ...page.seo, description: e.target.value } })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Từ khoá"
                  value={page.seo.keywords}
                  onChange={(e) => setPage({ seo: { ...page.seo, keywords: e.target.value } })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Canonical URL"
                  value={page.seo.canonical}
                  onChange={(e) => setPage({ seo: { ...page.seo, canonical: e.target.value } })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ảnh chia sẻ (OG image)"
                  value={page.seo.ogImage}
                  onChange={(e) => setPage({ seo: { ...page.seo, ogImage: e.target.value } })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={page.seo.noindex}
                      onChange={(e) => setPage({ seo: { ...page.seo, noindex: e.target.checked } })}
                    />
                  }
                  label="Chặn lập chỉ mục (noindex)"
                />
              </Grid>
              <Grid xs={12}>
                <Card variant="outlined" sx={{ p: 2, bgcolor: alpha(ACCENT_DEEP, 0.06) }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Xem trước trên Google
                  </Typography>
                  <Typography sx={{ color: '#1a0dab', fontSize: 18 }}>{page.seo.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'success.dark' }}>
                    {page.seo.canonical}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {page.seo.description}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          )}

          {tab === 2 && (
            <Grid container spacing={2} sx={{ p: 2.5 }}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Tên trang"
                  value={page.name}
                  onChange={(e) => setPage({ name: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Đường dẫn trang khách"
                  value={page.path}
                  onChange={(e) => setPage({ path: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mẫu bố cục"
                  value={page.template}
                  onChange={(e) => setPage({ template: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Trạng thái"
                  value={page.status}
                  onChange={(e) => setPage({ status: e.target.value as CmsStatus })}
                >
                  {STATUS_OPTIONS.map((s) => (
                    <MenuItem key={s} value={s}>
                      {CMS_STATUS_LABEL[s]}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Người biên tập"
                  value={page.author}
                  onChange={(e) => setPage({ author: e.target.value })}
                />
              </Grid>
              <Grid xs={12}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => {
                    cms.resetAll();
                    onToast('Đã khôi phục dữ liệu CMS gốc.');
                  }}
                  startIcon={<Iconify icon="solar:refresh-bold-duotone" />}
                >
                  Khôi phục dữ liệu CMS gốc
                </Button>
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>

      <Dialog open={!!editing} onClose={() => setEditing(null)} fullWidth maxWidth="sm">
        <DialogTitle>{isNew ? 'Thêm khối nội dung' : 'Sửa khối nội dung'}</DialogTitle>
        <DialogContent dividers>
          {editing && (
            <Grid container spacing={2} sx={{ pt: 1 }}>
              <Grid xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Loại khối"
                  value={editing.type}
                  onChange={(e) => setEditing({ ...editing, type: e.target.value })}
                >
                  {CMS_BLOCK_TYPES.map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Trạng thái"
                  value={editing.status}
                  onChange={(e) => setEditing({ ...editing, status: e.target.value as CmsStatus })}
                >
                  {STATUS_OPTIONS.map((s) => (
                    <MenuItem key={s} value={s}>
                      {CMS_STATUS_LABEL[s]}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Tiêu đề"
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Tiêu đề phụ"
                  value={editing.subtitle}
                  onChange={(e) => setEditing({ ...editing, subtitle: e.target.value })}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Nội dung"
                  value={editing.body}
                  onChange={(e) => setEditing({ ...editing, body: e.target.value })}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Ảnh (URL)"
                  value={editing.image}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nhãn nút"
                  value={editing.ctaLabel}
                  onChange={(e) => setEditing({ ...editing, ctaLabel: e.target.value })}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Liên kết nút"
                  value={editing.ctaHref}
                  onChange={(e) => setEditing({ ...editing, ctaHref: e.target.value })}
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setEditing(null)}>
            Huỷ
          </Button>
          <Button variant="contained" color="inherit" onClick={saveBlock} sx={{ bgcolor: SURFACE }}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

// ----------------------------------------------------------------------

function CollectionEditor({
  slug,
  cms,
  onToast,
}: {
  slug: string;
  cms: CmsApi;
  onToast: (m: string) => void;
}) {
  const schema = COLLECTION_SCHEMA[slug] ?? COLLECTION_SCHEMA.static;
  const items = cms.state.collections[slug] ?? [];

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number[]>([]);
  const [form, setForm] = useState<{ open: boolean; index: number; values: CmsItem } | null>(null);

  const filtered = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) =>
      search
        ? Object.values(item).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
        : true
    );

  const emptyValues = () => {
    const values: CmsItem = {};
    schema.fields.forEach((f) => {
      values[f.key] = f.type === 'number' ? 0 : f.type === 'status' ? 'draft' : '';
    });
    return values;
  };

  const submit = () => {
    if (!form) return;
    if (form.index < 0) {
      cms.createItem(slug, form.values);
      onToast('Đã thêm bản ghi mới.');
    } else {
      cms.updateItem(slug, form.index, form.values);
      onToast('Đã cập nhật bản ghi.');
    }
    setForm(null);
  };

  const listColumns = schema.fields.filter((f) => f.type !== 'textarea').slice(0, 5);

  return (
    <Card>
      <Stack
        spacing={2}
        sx={{ p: 2.5 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'center' }}
      >
        <TextField
          size="small"
          value={search}
          placeholder={`Tìm trong ${schema.title.toLowerCase()}...`}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1, maxWidth: { md: 360 } }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {!!selected.length && (
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => {
                cms.removeItems(slug, selected);
                onToast(`Đã xoá ${selected.length} bản ghi.`);
                setSelected([]);
              }}
              startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" />}
            >
              Xoá ({selected.length})
            </Button>
          )}
          <Button
            size="small"
            color="inherit"
            variant="outlined"
            onClick={() => {
              cms.resetAll();
              onToast('Đã khôi phục dữ liệu CMS gốc.');
            }}
            startIcon={<Iconify icon="solar:refresh-bold-duotone" />}
          >
            Khôi phục
          </Button>
          <Button
            size="small"
            variant="contained"
            color="inherit"
            sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: alpha(SURFACE, 0.85) } }}
            onClick={() => setForm({ open: true, index: -1, values: emptyValues() })}
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            {schema.addLabel}
          </Button>
        </Stack>
      </Stack>

      <TableContainer sx={{ borderTop: `1px solid ${alpha(ACCENT_DEEP, 0.16)}` }}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={filtered.length > 0 && selected.length === filtered.length}
                  onChange={() =>
                    setSelected(
                      selected.length === filtered.length ? [] : filtered.map((f) => f.index)
                    )
                  }
                />
              </TableCell>
              {listColumns.map((col) => (
                <TableCell key={col.key}>{col.label}</TableCell>
              ))}
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map(({ item, index }) => (
              <TableRow key={index} hover selected={selected.includes(index)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(index)}
                    onChange={() =>
                      setSelected((prev) =>
                        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
                      )
                    }
                  />
                </TableCell>
                {listColumns.map((col) => (
                  <TableCell key={col.key}>
                    {col.type === 'status' ? (
                      <Chip
                        size="small"
                        variant="soft"
                        label={CMS_STATUS_LABEL[item[col.key] as CmsStatus] ?? String(item[col.key])}
                        color={statusChipColor(String(item[col.key])) as any}
                      />
                    ) : (
                      String(item[col.key] ?? '—')
                    )}
                  </TableCell>
                ))}
                <TableCell align="right">
                  <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                    <Tooltip title="Sửa">
                      <IconButton
                        size="small"
                        onClick={() => setForm({ open: true, index, values: { ...item } })}
                      >
                        <Iconify icon="solar:pen-bold" width={16} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Xoá">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => {
                          cms.removeItems(slug, [index]);
                          onToast('Đã xoá bản ghi.');
                        }}
                      >
                        <Iconify icon="solar:trash-bin-trash-bold-duotone" width={16} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {!filtered.length && (
              <TableRow>
                <TableCell colSpan={listColumns.length + 2} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Chưa có dữ liệu.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!form} onClose={() => setForm(null)} fullWidth maxWidth="sm">
        <DialogTitle>
          {form && form.index < 0 ? schema.addLabel : `Sửa ${schema.title.toLowerCase()}`}
        </DialogTitle>
        <DialogContent dividers>
          {form && (
            <Grid container spacing={2} sx={{ pt: 1 }}>
              {schema.fields.map((f) => (
                <Grid key={f.key} xs={12} md={f.width ?? 12}>
                  {f.type === 'status' || f.type === 'select' ? (
                    <TextField
                      select
                      fullWidth
                      label={f.label}
                      value={String(form.values[f.key] ?? '')}
                      onChange={(e) =>
                        setForm({ ...form, values: { ...form.values, [f.key]: e.target.value } })
                      }
                    >
                      {(f.type === 'status' ? STATUS_OPTIONS : (f.options ?? [])).map((opt) => (
                        <MenuItem key={opt} value={opt}>
                          {f.type === 'status' ? CMS_STATUS_LABEL[opt as CmsStatus] : opt}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    <TextField
                      fullWidth
                      label={f.label}
                      type={f.type === 'number' ? 'number' : 'text'}
                      multiline={f.type === 'textarea'}
                      minRows={f.type === 'textarea' ? 3 : undefined}
                      value={form.values[f.key] ?? ''}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          values: {
                            ...form.values,
                            [f.key]:
                              f.type === 'number' ? Number(e.target.value) || 0 : e.target.value,
                          },
                        })
                      }
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setForm(null)}>
            Huỷ
          </Button>
          <Button variant="contained" color="inherit" onClick={submit} sx={{ bgcolor: SURFACE }}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
