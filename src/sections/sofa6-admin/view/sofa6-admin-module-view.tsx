import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
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
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import TablePagination from '@mui/material/TablePagination';

import { Iconify } from 'src/components/iconify';

import { type AdminRow, useSofa6AdminRows } from '../sofa6-admin-store';
import { Sofa6AdminLayout, SOFA6_ADMIN_THEME } from './sofa6-admin-layout';
import { SOFA6_ADMIN_ROOT, SOFA6_ADMIN_GROUPS, findSofa6AdminModule } from '../sofa6-admin-data';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA6_ADMIN_THEME;

const statusColor = (value: string) => {
  const v = value.toLowerCase();
  if (/(xuất bản|hoàn tất|thành công|hoạt động|đã duyệt|còn hàng|đang chạy|đã giao|đã hoàn)/.test(v))
    return 'success';
  if (/(chờ|đang xử lý|nháp|xem xét|mới)/.test(v)) return 'warning';
  if (/(từ chối|hủy|huỷ|lỗi|hết hàng|tạm ẩn|quá hạn|bị khoá)/.test(v)) return 'error';
  return 'default';
};

const formatCell = (value: string | number, type?: string) => {
  if (type === 'money' && typeof value === 'number') return `${value.toLocaleString('vi-VN')} ₫`;
  if (type === 'number' && typeof value === 'number') return value.toLocaleString('vi-VN');
  return value;
};

type FormState = { open: boolean; mode: 'create' | 'edit'; index: number; values: AdminRow };

export function Sofa6AdminModuleView() {
  const { group: groupSlug, module: moduleSlug } = useParams();
  const { pathname } = useLocation();
  const adminRoot = pathname.startsWith('/sofa7') ? '/sofa7/admin' : SOFA6_ADMIN_ROOT;

  const found = useMemo(() => findSofa6AdminModule(groupSlug, moduleSlug), [groupSlug, moduleSlug]);

  const group = found?.group;
  const module = found?.module;

  const { rows, createRow, updateRow, deleteRow, deleteRows, resetRows } = useSofa6AdminRows(
    group?.slug ?? '',
    module?.slug ?? ''
  );

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<number[]>([]);
  const [toast, setToast] = useState('');
  const [detail, setDetail] = useState<AdminRow | null>(null);
  const [confirm, setConfirm] = useState<{ open: boolean; index: number | null }>({
    open: false,
    index: null,
  });
  const [form, setForm] = useState<FormState>({
    open: false,
    mode: 'create',
    index: -1,
    values: {},
  });

  if (!found || !group || !module) {
    const first = SOFA6_ADMIN_GROUPS[0];
    return <Navigate to={`${adminRoot}/${first.slug}/${first.modules[0].slug}`} replace />;
  }

  const filtered = rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) =>
      search
        ? Object.values(row).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
        : true
    );

  const paged = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const openCreate = () => {
    const values: AdminRow = {};
    module.columns.forEach((col) => {
      values[col.key] = col.type === 'money' || col.type === 'number' ? 0 : '';
    });
    setForm({ open: true, mode: 'create', index: -1, values });
  };

  const openEdit = (index: number) => {
    setForm({ open: true, mode: 'edit', index, values: { ...rows[index] } });
  };

  const submitForm = () => {
    const clean: AdminRow = {};
    module.columns.forEach((col) => {
      const raw = form.values[col.key];
      clean[col.key] =
        col.type === 'money' || col.type === 'number' ? Number(raw) || 0 : String(raw ?? '');
    });

    if (form.mode === 'create') {
      createRow(clean);
      setToast('Đã thêm bản ghi mới.');
    } else {
      updateRow(form.index, clean);
      setToast('Đã cập nhật bản ghi.');
    }
    setForm((prev) => ({ ...prev, open: false }));
  };

  const doDelete = () => {
    if (confirm.index !== null) {
      deleteRow(confirm.index);
      setSelected([]);
      setToast('Đã xoá bản ghi.');
    }
    setConfirm({ open: false, index: null });
  };

  const doBulkDelete = () => {
    deleteRows(selected);
    setToast(`Đã xoá ${selected.length} bản ghi.`);
    setSelected([]);
  };

  const toggleSelect = (index: number) =>
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  const allOnPage = paged.length > 0 && paged.every(({ index }) => selected.includes(index));

  const toggleSelectAll = () =>
    setSelected(allOnPage ? [] : paged.map(({ index }) => index));

  const exportCsv = () => {
    const header = module.columns.map((c) => c.label).join(',');
    const body = filtered
      .map(({ row }) => module.columns.map((c) => `"${String(row[c.key] ?? '')}"`).join(','))
      .join('\n');
    const blob = new Blob([`\ufeff${header}\n${body}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${group.slug}-${module.slug}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setToast('Đã xuất dữ liệu CSV.');
  };

  return (
    <>
      <Helmet>
        <title>{`${module.name} | ${group.name} - Quản trị Sofa6`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa6AdminLayout
        activeGroup={group.slug}
        activeModule={module.slug}
        breadcrumb={[group.name, module.name]}
        title={module.name}
        subtitle={module.description}
      >
        <Grid container spacing={3}>
          {module.stats.map((stat) => (
            <Grid key={stat.label} xs={6} md={3}>
              <Card sx={{ p: 2.5 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                  <Typography variant="h4" sx={{ color: SURFACE }}>
                    {stat.value}
                  </Typography>
                  {stat.trend && (
                    <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700 }}>
                      {stat.trend}
                    </Typography>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}

          <Grid xs={12}>
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
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(0);
                  }}
                  placeholder={`Tìm trong ${module.name.toLowerCase()}...`}
                  sx={{ flex: 1, maxWidth: { md: 360 } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="eva:search-fill" width={18} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {!!selected.length && (
                    <Button
                      size="small"
                      color="error"
                      variant="outlined"
                      onClick={doBulkDelete}
                      startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" />}
                    >
                      Xoá ({selected.length})
                    </Button>
                  )}
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    onClick={() => {
                      resetRows(module.rows);
                      setSelected([]);
                      setToast('Đã khôi phục dữ liệu gốc.');
                    }}
                    startIcon={<Iconify icon="solar:refresh-bold-duotone" />}
                  >
                    Khôi phục
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    onClick={exportCsv}
                    startIcon={<Iconify icon="solar:export-bold-duotone" />}
                  >
                    Xuất CSV
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="inherit"
                    onClick={openCreate}
                    sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: alpha(SURFACE, 0.85) } }}
                    startIcon={<Iconify icon="mingcute:add-line" />}
                  >
                    {module.actions?.[0] ?? 'Thêm mới'}
                  </Button>
                </Stack>
              </Stack>

              <TableContainer sx={{ borderTop: `1px solid ${alpha('#A6634A', 0.16)}` }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox checked={allOnPage} onChange={toggleSelectAll} />
                      </TableCell>
                      {module.columns.map((col) => (
                        <TableCell key={col.key}>{col.label}</TableCell>
                      ))}
                      <TableCell align="right">Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paged.map(({ row, index }) => (
                      <TableRow key={index} hover selected={selected.includes(index)}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selected.includes(index)}
                            onChange={() => toggleSelect(index)}
                          />
                        </TableCell>
                        {module.columns.map((col) => {
                          const value = row[col.key] ?? '—';
                          return (
                            <TableCell key={col.key}>
                              {col.type === 'status' ? (
                                <Chip
                                  size="small"
                                  variant="soft"
                                  label={String(value)}
                                  color={statusColor(String(value)) as any}
                                />
                              ) : (
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: col.key === module.columns[0].key ? 600 : 400,
                                  }}
                                >
                                  {formatCell(value, col.type)}
                                </Typography>
                              )}
                            </TableCell>
                          );
                        })}
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                            <Tooltip title="Xem">
                              <IconButton size="small" onClick={() => setDetail(row)}>
                                <Iconify icon="solar:eye-bold-duotone" width={18} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Sửa">
                              <IconButton size="small" onClick={() => openEdit(index)}>
                                <Iconify icon="solar:pen-bold-duotone" width={18} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Xoá">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => setConfirm({ open: true, index })}
                              >
                                <Iconify icon="solar:trash-bin-trash-bold-duotone" width={18} />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                    {!filtered.length && (
                      <TableRow>
                        <TableCell colSpan={module.columns.length + 2} align="center" sx={{ py: 6 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Không tìm thấy dữ liệu phù hợp.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Divider />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ sm: 'center' }}
                justifyContent="space-between"
              >
                <TablePagination
                  component="div"
                  count={filtered.length}
                  page={page}
                  onPageChange={(_, next) => setPage(next)}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 25]}
                  onRowsPerPageChange={(e) => {
                    setRowsPerPage(parseInt(e.target.value, 10));
                    setPage(0);
                  }}
                  labelRowsPerPage="Số dòng:"
                />
                <Chip
                  size="small"
                  label={`Nhóm: ${group.name}`}
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 }, bgcolor: alpha(ACCENT, 0.14), color: '#A6634A' }}
                />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Sofa6AdminLayout>

      {/* Form thêm / sửa */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={form.open}
        onClose={() => setForm((prev) => ({ ...prev, open: false }))}
      >
        <DialogTitle>
          {form.mode === 'create' ? `Thêm mới — ${module.name}` : `Chỉnh sửa — ${module.name}`}
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            {module.columns.map((col) => (
              <TextField
                key={col.key}
                fullWidth
                label={col.label}
                type={col.type === 'money' || col.type === 'number' ? 'number' : 'text'}
                value={form.values[col.key] ?? ''}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    values: { ...prev.values, [col.key]: e.target.value },
                  }))
                }
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setForm((prev) => ({ ...prev, open: false }))}>
            Huỷ
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={submitForm}
            sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: alpha(SURFACE, 0.85) } }}
          >
            {form.mode === 'create' ? 'Thêm mới' : 'Lưu thay đổi'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Xem chi tiết */}
      <Dialog fullWidth maxWidth="sm" open={!!detail} onClose={() => setDetail(null)}>
        <DialogTitle>{`Chi tiết — ${module.name}`}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1.5}>
            {module.columns.map((col) => (
              <Stack key={col.key} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {col.label}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                  {formatCell(detail?.[col.key] ?? '—', col.type)}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setDetail(null)}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Xác nhận xoá */}
      <Dialog open={confirm.open} onClose={() => setConfirm({ open: false, index: null })}>
        <DialogTitle>Xoá bản ghi?</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Bản ghi sẽ bị xoá khỏi danh sách {module.name.toLowerCase()}. Bạn có thể bấm “Khôi phục”
            để nạp lại dữ liệu gốc.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setConfirm({ open: false, index: null })}>
            Huỷ
          </Button>
          <Button variant="contained" color="error" onClick={doDelete}>
            Xoá
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!toast}
        autoHideDuration={2500}
        message={toast}
        onClose={() => setToast('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}
