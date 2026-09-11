import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
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

import { type AdminRow, useSofa10AdminRows } from '../sofa10-admin-store';
import {
  Sofa10AdminLayout,
  Sofa10AdminHeading,
  Sofa10AdminKpis,
} from '../sofa10-admin-layout';
import {
  SOFA10_ADMIN_GROUPS,
  findSofa10AdminGroup,
  findSofa10AdminSection,
} from '../sofa10-admin-config';

const statusColor = (value: string) => {
  const v = value.toLowerCase();
  if (/(hoàn tất|thành công|đang hoạt động|tốt|đã gửi|đã giao|có|đang áp dụng)/.test(v)) return 'success';
  if (/(chờ|đang|lên lịch|bản nháp|đang thực hiện|đang kiểm|đang sửa|đang giao|đang vận chuyển|đang xử lý|đang sản xuất)/.test(v)) return 'warning';
  if (/(huỷ|lỗi|cần|thất bại|tạm khoá|hết hàng|thiếu|cần tối ưu|cần bổ sung|cần sửa|có cảnh báo|tắt)/.test(v)) return 'error';
  return 'default';
};

type FormState = { open: boolean; mode: 'create' | 'edit'; index: number; values: AdminRow };

export function Sofa10AdminModuleView() {
  const { group: groupSlug, module: moduleSlug } = useParams();

  const group = useMemo(() => findSofa10AdminGroup(groupSlug), [groupSlug]);
  const section = useMemo(
    () => findSofa10AdminSection(groupSlug, moduleSlug),
    [groupSlug, moduleSlug]
  );

  const { rows, createRow, updateRow, deleteRow, deleteRows, resetRows } = useSofa10AdminRows(
    group?.slug ?? '',
    section?.slug ?? ''
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
    values: [],
  });

  if (!group) {
    const first = SOFA10_ADMIN_GROUPS[0];
    return <Navigate to={`/sofa10/admin/${first.slug}/${first.sections[0].slug}`} replace />;
  }

  if (moduleSlug && !section) {
    return (
      <Sofa10AdminLayout>
        <Sofa10AdminHeading title="Không tìm thấy trang quản trị" breadcrumb={[{ name: 'Admin' }, { name: group.name }]} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Trang quản trị không tồn tại trong nhóm {group.name}.
        </Typography>
      </Sofa10AdminLayout>
    );
  }

  const columns = section?.columns ?? [];
  const kpis = section?.kpis ?? [];

  const filtered = rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) =>
      search
        ? row.some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
        : true
    );

  const paged = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const openCreate = () => {
    const values: AdminRow = columns.map((_, i) => (i === columns.length - 1 ? '' : ''));
    setForm({ open: true, mode: 'create', index: -1, values });
  };

  const openEdit = (index: number) => {
    setForm({ open: true, mode: 'edit', index, values: [...rows[index]] });
  };

  const submitForm = () => {
    const clean: AdminRow = form.values.map((v) => v);

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
    const header = columns.join(',');
    const body = filtered
      .map(({ row }) => row.map((cell) => `"${String(cell ?? '')}"`).join(','))
      .join('\n');
    const blob = new Blob([`\ufeff${header}\n${body}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${group.slug}-${section?.slug ?? 'data'}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setToast('Đã xuất dữ liệu CSV.');
  };

  if (!section) {
    return (
      <Sofa10AdminLayout>
        <Sofa10AdminHeading title={group.name} description={group.desc} breadcrumb={[{ name: 'Admin' }, { name: group.name }]} />
        <Sofa10AdminKpis items={[{ label: 'Số trang', value: String(group.sections.length) }, { label: 'Nhóm', value: group.name }]} />
        {group.sections.map((sec) => (
          <Box key={sec.slug} sx={{ mb: 4 }}>
            <Sofa10AdminHeading title={sec.name} description={sec.desc} breadcrumb={[{ name: group.name }, { name: sec.name }]} />
            <Sofa10AdminKpis items={sec.kpis} />
            <ModuleTable
              columns={sec.columns}
              rows={sec.rows}
              onEdit={() => {}}
              onDelete={() => {}}
              onView={() => {}}
            />
          </Box>
        ))}
      </Sofa10AdminLayout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${section.name} | ${group.name} - Quản trị Sofa10`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa10AdminLayout>
        <Sofa10AdminHeading
          title={section.name}
          description={section.desc}
          breadcrumb={[{ name: 'Admin' }, { name: group.name }, { name: section.name }]}
        />

        <Sofa10AdminKpis items={kpis} />

        <Grid container spacing={3} sx={{ mt: 0 }}>
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
                  placeholder={`Tìm trong ${section.name.toLowerCase()}...`}
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
                      resetRows(section.rows);
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
                    onClick={openCreate}
                    startIcon={<Iconify icon="mingcute:add-line" />}
                  >
                    Thêm mới
                  </Button>
                </Stack>
              </Stack>

              <ModuleTable
                columns={columns}
                rows={paged.map(({ row }) => row)}
                selected={selected}
                paged={paged}
                allOnPage={allOnPage}
                toggleSelect={toggleSelect}
                toggleSelectAll={toggleSelectAll}
                onView={(row) => setDetail(row)}
                onEdit={(index) => openEdit(index)}
                onDelete={(index) => setConfirm({ open: true, index })}
              />

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
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 }, bgcolor: 'primary.lighter', color: 'primary.main' }}
                />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Sofa10AdminLayout>

      {/* Form thêm / sửa */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={form.open}
        onClose={() => setForm((prev) => ({ ...prev, open: false }))}
      >
        <DialogTitle>
          {form.mode === 'create' ? `Thêm mới — ${section.name}` : `Chỉnh sửa — ${section.name}`}
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            {columns.map((col, i) => (
              <TextField
                key={i}
                fullWidth
                label={col}
                value={form.values[i] ?? ''}
                onChange={(e) =>
                  setForm((prev) => {
                    const next = [...prev.values];
                    next[i] = e.target.value;
                    return { ...prev, values: next };
                  })
                }
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setForm((prev) => ({ ...prev, open: false }))}>
            Huỷ
          </Button>
          <Button variant="contained" onClick={submitForm}>
            {form.mode === 'create' ? 'Thêm mới' : 'Lưu thay đổi'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Xem chi tiết */}
      <Dialog fullWidth maxWidth="sm" open={!!detail} onClose={() => setDetail(null)}>
        <DialogTitle>{`Chi tiết — ${section.name}`}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1.5}>
            {columns.map((col, i) => (
              <Stack key={i} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {col}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                  {detail?.[i] ?? '—'}
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
            Bản ghi sẽ bị xoá khỏi danh sách {section.name.toLowerCase()}. Bạn có thể bấm "Khôi phục"
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

// ----------------------------------------------------------------------

function ModuleTable({
  columns,
  rows,
  selected,
  paged,
  allOnPage,
  toggleSelect,
  toggleSelectAll,
  onView,
  onEdit,
  onDelete,
}: {
  columns: string[];
  rows: (string | number)[][];
  selected?: number[];
  paged?: { row: AdminRow; index: number }[];
  allOnPage?: boolean;
  toggleSelect?: (index: number) => void;
  toggleSelectAll?: () => void;
  onView: (row: AdminRow) => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  const hasSelection = !!paged && !!toggleSelect;

  return (
    <TableContainer sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            {hasSelection && (
              <TableCell padding="checkbox">
                <Checkbox checked={!!allOnPage && allOnPage} onChange={toggleSelectAll} />
              </TableCell>
            )}
            {columns.map((col) => (
              <TableCell key={col} sx={{ whiteSpace: 'nowrap' }}>
                {col}
              </TableCell>
            ))}
            <TableCell align="right">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => {
            const realIndex = paged?.[rowIndex]?.index ?? rowIndex;
            const isSelected = selected?.includes(realIndex);
            return (
              <TableRow key={rowIndex} hover selected={isSelected}>
                {hasSelection && (
                  <TableCell padding="checkbox">
                    <Checkbox checked={!!isSelected} onChange={() => toggleSelect?.(realIndex)} />
                  </TableCell>
                )}
                {row.map((cell, cellIndex) => {
                  const text = String(cell);
                  const isStatus = cellIndex === row.length - 1 && Number.isNaN(Number(cell));
                  return (
                    <TableCell key={cellIndex} sx={{ whiteSpace: 'nowrap' }}>
                      {isStatus ? (
                        <Chip size="small" label={text} color={statusColor(text) as any} variant="soft" />
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: cellIndex === 0 ? 'fontWeightSemiBold' : undefined }}
                        >
                          {text}
                        </Typography>
                      )}
                    </TableCell>
                  );
                })}
                <TableCell align="right">
                  <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                    <Tooltip title="Xem">
                      <IconButton size="small" onClick={() => onView(row)}>
                        <Iconify icon="solar:eye-bold-duotone" width={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Sửa">
                      <IconButton size="small" onClick={() => onEdit(realIndex)}>
                        <Iconify icon="solar:pen-bold-duotone" width={18} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Xoá">
                      <IconButton size="small" color="error" onClick={() => onDelete(realIndex)}>
                        <Iconify icon="solar:trash-bin-trash-bold-duotone" width={18} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
          {!rows.length && (
            <TableRow>
              <TableCell colSpan={columns.length + 2} align="center" sx={{ py: 6 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Không tìm thấy dữ liệu phù hợp.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
