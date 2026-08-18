import type { Sofa1AdminRow, Sofa1CmsFieldDef } from 'src/sections/sofa1-admin/sofa1-admin-data';

import { Helmet } from 'react-helmet-async';
import { useMemo, useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
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
import InputAdornment from '@mui/material/InputAdornment';
import TableContainer from '@mui/material/TableContainer';

import { RouterLink } from 'src/routes/components';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

import {
  SOFA1_ADMIN_ROOT,
  SOFA1_ADMIN_GROUPS,
  findSofa1AdminModule,
} from 'src/sections/sofa1-admin/sofa1-admin-data';

import { Sofa1AdminLayout, SOFA1_ADMIN_THEME } from './sofa1-admin-layout';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA1_ADMIN_THEME;

const statusColor = (value: string) => {
  const v = value.toLowerCase();
  if (
    /(xuất bản|hoàn tất|thành công|hoạt động|đã duyệt|còn hàng|đang chạy|đã giao|vip|đang tuyển|đang áp dụng|^tốt)/.test(
      v
    )
  )
    return 'success';
  if (/(chờ|đang xử lý|nháp|xem xét|mới|sắp hết|sắp diễn ra|đang xét duyệt|phỏng vấn|thiếu)/.test(v))
    return 'warning';
  if (/(từ chối|hủy|lỗi|hết hàng|tạm ẩn|quá hạn|đã hết hạn|đã khóa)/.test(v)) return 'error';
  return 'default';
};

const formatCell = (value: string | number, type?: string) => {
  if (type === 'money' && typeof value === 'number') return `${value.toLocaleString('vi-VN')} ₫`;
  if (type === 'number' && typeof value === 'number') return value.toLocaleString('vi-VN');
  return value;
};

function exportRowsToCsv(fileName: string, columns: { key: string; label: string }[], rows: Record<string, unknown>[]) {
  const header = columns.map((c) => `"${c.label.replace(/"/g, '""')}"`).join(',');
  const lines = rows.map((row) =>
    columns
      .map((c) => `"${String(row[c.key] ?? '').replace(/"/g, '""')}"`)
      .join(',')
  );
  const csv = [header, ...lines].join('\n');
  const blob = new Blob([`${csv}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

type Sofa1CrudDialogState = { mode: 'create' | 'edit'; row?: Sofa1AdminRow };

/**
 * Form Thêm/Sửa dựng động từ `module.crudFields` — chạy hoàn toàn tại
 * /sofa1/admin (không điều hướng sang trang khác), phục vụ đúng yêu cầu
 * "trang độc lập, không liên kết đến sofa1/dashboard".
 */
function Sofa1CmsFormDialog({
  open,
  title,
  fields,
  initialValues,
  onClose,
  onSubmit,
}: {
  open: boolean;
  title: string;
  fields: Sofa1CmsFieldDef[];
  initialValues: Record<string, string | number>;
  onClose: () => void;
  onSubmit: (values: Record<string, string | number>) => void;
}) {
  const [values, setValues] = useState<Record<string, string | number>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      setValues(initialValues);
      setErrors({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleChange = (key: string, value: string | number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const nextErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !String(values[field.key] ?? '').trim()) {
        nextErrors[field.key] = 'Bắt buộc nhập';
      }
    });
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    onSubmit(values);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack spacing={2.5} sx={{ pt: 1 }}>
          {fields.map((field) =>
            field.type === 'select' ? (
              <TextField
                key={field.key}
                select
                fullWidth
                label={field.label}
                value={values[field.key] ?? ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                error={!!errors[field.key]}
                helperText={errors[field.key]}
              >
                {(field.options ?? []).map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                key={field.key}
                fullWidth
                label={field.label}
                type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
                multiline={field.type === 'textarea'}
                minRows={field.type === 'textarea' ? 3 : undefined}
                value={values[field.key] ?? ''}
                onChange={(e) =>
                  handleChange(field.key, field.type === 'number' ? Number(e.target.value) : e.target.value)
                }
                error={!!errors[field.key]}
                helperText={errors[field.key]}
                InputLabelProps={field.type === 'date' ? { shrink: true } : undefined}
              />
            )
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ bgcolor: SOFA1_ADMIN_THEME.SURFACE, '&:hover': { bgcolor: '#3A2C24' } }}
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function Sofa1AdminModuleView() {
  const { group: groupSlug, module: moduleSlug } = useParams();
  const [search, setSearch] = useState('');
  const [dialogState, setDialogState] = useState<Sofa1CrudDialogState | null>(null);

  const found = useMemo(() => findSofa1AdminModule(groupSlug, moduleSlug), [groupSlug, moduleSlug]);

  const [localRows, setLocalRows] = useState(found?.module.rows ?? []);

  useEffect(() => {
    setLocalRows(found?.module.rows ?? []);
  }, [found?.module]);

  const dialogInitialValues = useMemo(() => {
    if (!found?.module?.crudFields) return {};
    const source = dialogState?.mode === 'edit' ? dialogState.row : undefined;
    return found.module.crudFields.reduce<Record<string, string | number>>((acc, field) => {
      if (source && source[field.key] !== undefined) {
        acc[field.key] = source[field.key] as string | number;
      } else {
        acc[field.key] =
          field.type === 'number' ? 0 : field.type === 'select' ? field.options?.[0]?.value ?? '' : '';
      }
      return acc;
    }, {});
  }, [found?.module?.crudFields, dialogState]);

  if (!found) {
    const first = SOFA1_ADMIN_GROUPS[0];
    return <Navigate to={`${SOFA1_ADMIN_ROOT}/${first.slug}/${first.modules[0].slug}`} replace />;
  }

  const { group, module } = found;
  const isNativeCrud = !!module.crudFields?.length;
  const entityLabel = module.crudEntityLabel ?? module.name.toLowerCase();

  const rows = localRows.filter((row) =>
    search
      ? Object.values(row).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
      : true
  );

  const handleDeleteRow = (id?: string, index?: number) => {
    setLocalRows((prev) => prev.filter((row, i) => (id ? row.id !== id : i !== index)));
    toast.success('Đã xoá bản ghi (chỉ trên phiên xem này — dữ liệu gốc không đổi).');
  };

  const openCreateDialog = () => setDialogState({ mode: 'create' });
  const openEditDialog = (row: Sofa1AdminRow) => setDialogState({ mode: 'edit', row });
  const closeDialog = () => setDialogState(null);

  const handleDialogSubmit = (values: Record<string, string | number>) => {
    if (dialogState?.mode === 'edit' && dialogState.row) {
      setLocalRows((prev) =>
        prev.map((row) => (row === dialogState.row ? { ...row, ...values } : row))
      );
      toast.success(`Đã lưu thay đổi ${entityLabel} (chỉ trên phiên xem này).`);
    } else {
      const newRow: Sofa1AdminRow = { id: `${module.slug}-${localRows.length + 1}-${Date.now()}`, ...values };
      setLocalRows((prev) => [newRow, ...prev]);
      toast.success(`Đã thêm ${entityLabel} mới (chỉ trên phiên xem này).`);
    }
    closeDialog();
  };

  return (
    <>
      <Helmet>
        <title>{`${module.name} | ${group.name} - Quản trị Casa Sofa`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa1AdminLayout
        activeGroup={group.slug}
        activeModule={module.slug}
        breadcrumb={[group.name, module.name]}
        title={module.name}
        subtitle={module.description}
      >
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: -1.5 }} flexWrap="wrap" useFlexGap>
              {module.linked ? (
                <Chip
                  size="small"
                  color="success"
                  variant="soft"
                  icon={<Iconify icon="solar:link-bold-duotone" width={14} />}
                  label={
                    module.manageHref
                      ? 'Dữ liệu thật — đồng bộ với /dashboard/sofa1'
                      : 'Dữ liệu thật — đồng bộ với trang xem /sofa1'
                  }
                />
              ) : (
                <Chip
                  size="small"
                  variant="soft"
                  icon={<Iconify icon="solar:eye-scan-bold-duotone" width={14} />}
                  label="Dữ liệu minh hoạ — chưa có model thật"
                />
              )}
              {isNativeCrud && (
                <Chip
                  size="small"
                  variant="soft"
                  color="default"
                  icon={<Iconify icon="solar:lock-keyhole-minimalistic-bold-duotone" width={14} />}
                  label="Trang độc lập — không liên kết sofa1/dashboard"
                />
              )}
              {module.manageHref && (
                <Button
                  size="small"
                  component={RouterLink}
                  href={module.manageHref}
                  startIcon={<Iconify icon="solar:widget-4-bold-duotone" width={16} />}
                  sx={{ color: SURFACE }}
                >
                  Mở trang quản trị đầy đủ
                </Button>
              )}
              {module.publicHref && (
                <Button
                  size="small"
                  component={RouterLink}
                  href={module.publicHref}
                  target="_blank"
                  startIcon={<Iconify icon="solar:eye-bold-duotone" width={16} />}
                  sx={{ color: SURFACE }}
                >
                  Xem trang công khai
                </Button>
              )}
            </Stack>
          </Grid>

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
                  onChange={(e) => setSearch(e.target.value)}
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
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    startIcon={<Iconify icon="solar:export-bold-duotone" />}
                    onClick={() =>
                      exportRowsToCsv(`${module.slug}.csv`, module.columns, rows)
                    }
                  >
                    Xuất CSV
                  </Button>
                  {isNativeCrud ? (
                    <Button
                      size="small"
                      variant="contained"
                      color="inherit"
                      onClick={openCreateDialog}
                      sx={{ bgcolor: SURFACE, '&:hover': { bgcolor: '#3A2C24' } }}
                      startIcon={<Iconify icon="mingcute:add-line" />}
                    >
                      {module.actions?.[0] ?? 'Thêm mới'}
                    </Button>
                  ) : (
                    (module.actions ?? ['Thêm mới']).map((action, index) => {
                      const href = index === 0 ? module.newHref ?? module.manageHref : module.manageHref;
                      return (
                        <Button
                          key={action}
                          size="small"
                          variant={index === 0 ? 'contained' : 'outlined'}
                          color="inherit"
                          component={href ? RouterLink : 'button'}
                          href={href}
                          sx={
                            index === 0
                              ? { bgcolor: SURFACE, '&:hover': { bgcolor: '#3A2C24' } }
                              : undefined
                          }
                          startIcon={index === 0 ? <Iconify icon="mingcute:add-line" /> : undefined}
                        >
                          {action}
                        </Button>
                      );
                    })
                  )}
                </Stack>
              </Stack>

              <TableContainer sx={{ borderTop: `1px solid ${alpha('#8A6A45', 0.16)}` }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      {module.columns.map((col) => (
                        <TableCell key={col.key}>{col.label}</TableCell>
                      ))}
                      <TableCell align="right">Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => {
                      const viewHref = row.viewHref ?? module.publicHref;
                      const targetHref = row.editHref ?? module.manageHref;
                      return (
                        <TableRow key={row.id ?? index} hover>
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
                                    sx={{ fontWeight: col.key === module.columns[0].key ? 600 : 400 }}
                                  >
                                    {formatCell(value, col.type)}
                                  </Typography>
                                )}
                              </TableCell>
                            );
                          })}
                          <TableCell align="right">
                            <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                              <IconButton
                                size="small"
                                component={viewHref ? RouterLink : 'button'}
                                href={viewHref}
                                target={viewHref ? '_blank' : undefined}
                                disabled={!viewHref}
                              >
                                <Iconify icon="solar:eye-bold-duotone" width={18} />
                              </IconButton>
                              <IconButton
                                size="small"
                                component={isNativeCrud ? 'button' : row.editHref ? RouterLink : 'button'}
                                href={isNativeCrud ? undefined : row.editHref}
                                onClick={isNativeCrud ? () => openEditDialog(row) : undefined}
                                disabled={!isNativeCrud && !targetHref}
                              >
                                <Iconify icon="solar:pen-bold-duotone" width={18} />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => handleDeleteRow(row.id, index)}
                                sx={{ color: 'error.main' }}
                              >
                                <Iconify icon="solar:trash-bin-trash-bold-duotone" width={18} />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {!rows.length && (
                      <TableRow>
                        <TableCell
                          colSpan={module.columns.length + 1}
                          align="center"
                          sx={{ py: 6 }}
                        >
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Không tìm thấy dữ liệu phù hợp.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ p: 2, borderTop: `1px solid ${alpha('#8A6A45', 0.16)}` }}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Hiển thị {rows.length} / {localRows.length} bản ghi
                </Typography>
                <Chip
                  size="small"
                  label={`Nhóm: ${group.name}`}
                  sx={{ bgcolor: alpha(ACCENT, 0.14), color: '#7A5A2E' }}
                />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Sofa1AdminLayout>

      {module.crudFields && (
        <Sofa1CmsFormDialog
          open={!!dialogState}
          title={`${dialogState?.mode === 'edit' ? 'Sửa' : 'Thêm'} ${entityLabel}`}
          fields={module.crudFields}
          initialValues={dialogInitialValues}
          onClose={closeDialog}
          onSubmit={handleDialogSubmit}
        />
      )}
    </>
  );
}
