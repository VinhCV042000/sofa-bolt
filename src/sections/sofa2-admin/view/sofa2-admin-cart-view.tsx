import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
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
import CardHeader from '@mui/material/CardHeader';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import TablePagination from '@mui/material/TablePagination';

import { Chart, useChart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';

import { Sofa2AdminLayout } from './sofa2-admin-layout';
import { type AdminRow, useSofa2AdminRows } from '../sofa2-admin-store';
import { sofa2Today, type Sofa2CmsField } from '../sofa2-cms';
import { type Sofa2CartSchema } from '../sofa2-cart';

import type { Sofa2AdminGroup, Sofa2AdminModule } from '../sofa2-admin-data';

// ----------------------------------------------------------------------

const SURFACE = '#2A2A2A';
const PALETTE = ['#1A1A1A', '#455A64', '#607D8B', '#90A4AE', '#CFD8DC', '#B0BEC5'];

const statusColor = (value: string) => {
  const v = String(value).toLowerCase();
  if (/(đang mua|đang bật|đang áp dụng|hoạt động|thành công|đã giao|còn hiệu lực|mặc định|đã xác thực|đã đặt|đang giao)/.test(v)) return 'success';
  if (/(bản nháp|chờ|chưa xác thực|đang xử lý|phụ|đang sản xuất|sắp hết hạn|đang xác nhận)/.test(v)) return 'warning';
  if (/(bỏ dở|tạm tắt|tạm khoá|thất bại|đã huỷ|hết hạn|ẩn)/.test(v)) return 'error';
  return 'default';
};

const GROUP_LABEL: Record<string, string> = {
  content: 'Nội dung & thông tin',
  display: 'Trạng thái',
  seo: 'SEO',
  technical: 'Kỹ thuật',
};

type FormState = { open: boolean; mode: 'create' | 'edit'; index: number; values: AdminRow };

type Props = { group: Sofa2AdminGroup; module: Sofa2AdminModule; schema: Sofa2CartSchema };

// ----------------------------------------------------------------------

function CartChart({ schema }: { schema: Sofa2CartSchema }) {
  const { chartType, chartTitle, chartSubtitle, chartCategories, chartSeries, chartLabels, chartDonutData } = schema;
  const donutOptions = useChart({
    colors: PALETTE,
    labels: chartLabels ?? [],
    stroke: { width: 0 },
    legend: { position: 'bottom', horizontalAlign: 'center' },
  });
  const hbarOptions = useChart({
    colors: [PALETTE[1]],
    xaxis: { categories: chartCategories ?? [] },
    plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 4 } },
    legend: { show: false },
  });
  const areaOptions = useChart({
    colors: [PALETTE[1]],
    xaxis: { categories: chartCategories ?? [] },
    stroke: { curve: 'smooth', width: 3 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05 } },
  });
  const lineOptions = useChart({
    colors: [PALETTE[1]],
    xaxis: { categories: chartCategories ?? [] },
    stroke: { curve: 'smooth', width: 3 },
  });
  const barOptions = useChart({
    colors: [PALETTE[0], PALETTE[1]],
    xaxis: { categories: chartCategories ?? [] },
    plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
    legend: { show: (chartSeries ?? []).length > 1, position: 'top' },
  });

  if (chartType === 'donut') {
    return (
      <Card>
        <CardHeader title={chartTitle} subheader={chartSubtitle} />
        <Chart type="donut" series={chartDonutData ?? []} options={donutOptions} height={340} sx={{ px: 2, pb: 2 }} />
      </Card>
    );
  }

  if (chartType === 'horizontal-bar') {
    return (
      <Card>
        <CardHeader title={chartTitle} subheader={chartSubtitle} />
        <Chart type="bar" series={chartSeries ?? []} options={hbarOptions} height={340} sx={{ px: 2, pb: 2 }} />
      </Card>
    );
  }

  if (chartType === 'area') {
    return (
      <Card>
        <CardHeader title={chartTitle} subheader={chartSubtitle} />
        <Chart type="area" series={chartSeries ?? []} options={areaOptions} height={340} sx={{ px: 2, pb: 2 }} />
      </Card>
    );
  }

  if (chartType === 'line') {
    return (
      <Card>
        <CardHeader title={chartTitle} subheader={chartSubtitle} />
        <Chart type="line" series={chartSeries ?? []} options={lineOptions} height={340} sx={{ px: 2, pb: 2 }} />
      </Card>
    );
  }

  // bar (mặc định)
  return (
    <Card>
      <CardHeader title={chartTitle} subheader={chartSubtitle} />
      <Chart type="bar" series={chartSeries ?? []} options={barOptions} height={340} sx={{ px: 2, pb: 2 }} />
    </Card>
  );
}

// ----------------------------------------------------------------------

const readMonth = (value: unknown) => {
  const text = String(value ?? '');
  const iso = text.match(/^\d{4}-(\d{1,2})/);
  if (iso) return Number(iso[1]) - 1;
  const local = text.match(/^\d{1,2}\/(\d{1,2})\/\d{4}$/);
  if (local) return Number(local[1]) - 1;
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? -1 : parsed.getMonth();
};

function getDynamicCartChart(
  schema: Sofa2CartSchema,
  rows: AdminRow[],
  moduleSlug: string
): Sofa2CartSchema {
  const next = { ...schema };

  if (schema.chartType === 'donut') {
    const labels = schema.chartLabels ?? schema.statusOptions;
    const key = moduleSlug === 'account' ? 'tier' : schema.statusKey;
    return {
      ...next,
      chartDonutData: labels.map(
        (label) => rows.filter((row) => String(row[key]) === label).length
      ),
    };
  }

  if (moduleSlug === 'profile') {
    const categories = ['Có điện thoại', 'Có email', 'Có ảnh', 'Có ngày sinh'];
    const completion = [
      rows.filter((row) => String(row.phone ?? '').trim()).length,
      rows.filter((row) => String(row.email ?? '').trim()).length,
      rows.filter((row) => String(row.avatar ?? '').trim()).length,
      rows.filter((row) => String(row.birthday ?? '').trim()).length,
    ];
    return { ...next, chartCategories: categories, chartSeries: [{ name: 'Hồ sơ', data: completion }] };
  }

  if (moduleSlug === 'addresses') {
    const byCity = new Map<string, number>();
    rows.forEach((row) => {
      const city = String(row.city || 'Chưa phân loại');
      byCity.set(city, (byCity.get(city) ?? 0) + 1);
    });
    const entries = [...byCity.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
    return {
      ...next,
      chartCategories: entries.map(([city]) => city),
      chartSeries: [{ name: 'Địa chỉ', data: entries.map(([, count]) => count) }],
    };
  }

  if (moduleSlug === 'tracking') {
    const steps = ['Đặt hàng', 'Xác nhận', 'Sản xuất', 'Giao hàng', 'Hoàn tất'];
    return {
      ...next,
      chartCategories: steps,
      chartSeries: [
        {
          name: 'Đơn hàng',
          data: steps.map((step) => rows.filter((row) => String(row.step) === step).length),
        },
      ],
    };
  }

  if (moduleSlug === 'my-orders' || moduleSlug === 'transactions') {
    const categories = Array.from({ length: 12 }, (_, index) => `T${index + 1}`);
    const values = Array.from({ length: 12 }, () => 0);
    rows.forEach((row) => {
      const month = readMonth(row.orderDate ?? row.date);
      if (month >= 0 && month < 12) {
        values[month] +=
          moduleSlug === 'transactions' ? Number(row.amount ?? 0) / 1_000_000 : 1;
      }
    });
    return {
      ...next,
      chartCategories: categories,
      chartSeries: [
        {
          name: moduleSlug === 'transactions' ? 'Giá trị (triệu ₫)' : 'Đơn hàng',
          data: values,
        },
      ],
    };
  }

  if (moduleSlug === 'checkout') {
    const methods = rows.filter((row) => row.type !== 'Phí giao hàng');
    return {
      ...next,
      chartCategories: methods.map((row) => String(row.label || row.method || 'Chưa đặt tên')),
      chartSeries: [
        {
          name: 'Đang bật',
          data: methods.map((row) => (row.status === 'Đang bật' ? 1 : 0)),
        },
      ],
    };
  }

  if (moduleSlug === 'success') {
    return {
      ...next,
      chartCategories: rows.map((row) => String(row.name || 'Mẫu')),
      chartSeries: [
        {
          name: 'Mẫu đang áp dụng',
          data: rows.map((row) => (row.status === 'Đang áp dụng' ? 1 : 0)),
        },
      ],
    };
  }

  return next;
}

// ----------------------------------------------------------------------

export function Sofa2AdminCartView({ group, module, schema }: Props) {
  const { rows, createRow, updateRow, deleteRow, deleteRows, resetRows } = useSofa2AdminRows(
    group.slug,
    module.slug
  );

  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<number[]>([]);
  const [toast, setToast] = useState('');
  const [detail, setDetail] = useState<AdminRow | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirm, setConfirm] = useState<{ open: boolean; index: number | null }>({
    open: false,
    index: null,
  });
  const [bulkConfirm, setBulkConfirm] = useState(false);
  const [form, setForm] = useState<FormState>({
    open: false,
    mode: 'create',
    index: -1,
    values: {},
  });

  const { titleKey, statusKey, statusOptions, fields, entity } = schema;
  const publishLabel = schema.publishLabel ?? 'Kích hoạt';
  const defaultDraft = schema.defaultStatus ?? statusOptions[1] ?? 'Bản nháp';
  const published = statusOptions[0];
  const showStatusToggle = schema.statusToggle !== false;
  const sharedClientModules = new Set([
    'account',
    'profile',
    'cart',
    'tracking',
    'addresses',
    'my-orders',
    'transactions',
    'warranty',
  ]);
  const showReset = !(group.slug === 'shopping' && sharedClientModules.has(module.slug));

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: rows.length };
    statusOptions.forEach((s) => {
      map[s] = rows.filter((r) => String(r[statusKey]) === s).length;
    });
    return map;
  }, [rows, statusKey, statusOptions]);
  const chartSchema = useMemo(
    () => getDynamicCartChart(schema, rows, module.slug),
    [module.slug, rows, schema]
  );
  const dynamicStats = useMemo(() => {
    const statusCount = (status: string) =>
      rows.filter((row) => String(row[statusKey]) === status).length;
    const total = rows.length;
    const amount = (key: string) => rows.reduce((sum, row) => sum + Number(row[key] ?? 0), 0);
    const valuesByModule: Record<string, (string | number)[]> = {
      cart: [
        total,
        statusCount('Đang mua'),
        statusCount('Bỏ dở'),
        `${amount('value').toLocaleString('vi-VN')} ₫`,
      ],
      checkout: [
        total,
        statusCount('Đang bật'),
        rows.filter((row) => row.type === 'Phí giao hàng').length,
        rows.filter((row) => Number(row.fee ?? 0) > 0).length,
      ],
      tracking: [
        total,
        statusCount('Đang giao'),
        statusCount('Đã giao'),
        statusCount('Chờ xác nhận'),
      ],
      account: [
        total,
        rows.filter((row) => String(row.status) === 'Đầy đủ').length,
        rows.filter((row) => String(row.status) === 'Thiếu thông tin').length,
        rows.filter((row) => row.emailOptIn === 'Có' || row.smsOptIn === 'Có').length,
      ],
      profile: [
        total,
        rows.filter((row) => Boolean(String(row.phone ?? '').trim())).length,
        rows.filter((row) => Boolean(String(row.email ?? '').trim())).length,
        rows.filter((row) => Boolean(String(row.birthday ?? '').trim())).length,
      ],
      addresses: [
        total,
        rows.filter((row) => String(row.status) === 'Mặc định').length,
        new Set(rows.map((row) => String(row.city ?? '')).filter(Boolean)).size,
        rows.filter((row) => Boolean(String(row.phone ?? '').trim())).length,
      ],
      'my-orders': [
        total,
        statusCount('Chờ xác nhận'),
        statusCount('Đã giao') + statusCount('Hoàn thành'),
        `${amount('total').toLocaleString('vi-VN')} ₫`,
      ],
      transactions: [
        total,
        statusCount('Thành công'),
        statusCount('Đang xử lý'),
        `${amount('amount').toLocaleString('vi-VN')} ₫`,
      ],
      warranty: [
        total,
        statusCount('Còn hiệu lực'),
        statusCount('Đang sửa chữa') + statusCount('Đang xử lý'),
        statusCount('Hết hạn') + statusCount('Đã hết hạn'),
      ],
      success: [
        total,
        statusCount('Đang áp dụng'),
        statusCount('Bản nháp'),
        statusCount('Tạm tắt'),
      ],
    };
    return valuesByModule[module.slug];
  }, [module.slug, rows, statusKey]);
  const visibleStats = module.stats.map((stat, index) => ({
    ...stat,
    value: dynamicStats?.[index] ?? stat.value,
    trend: dynamicStats ? undefined : stat.trend,
  }));

  const filtered = rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => (tab === 'all' ? true : String(row[statusKey]) === tab))
    .filter(({ row }) =>
      search
        ? Object.values(row).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
        : true
    );

  const paged = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // ----------------------------------------------------------------------

  const emptyValues = () => {
    const values: AdminRow = {};
    fields.forEach((field) => {
      if (field.type === 'number') values[field.key] = 0;
      else if (field.type === 'switch') values[field.key] = 'Có';
      else if (field.key === statusKey) values[field.key] = defaultDraft;
      else if (field.type === 'date') values[field.key] = sofa2Today();
      else values[field.key] = '';
    });
    return values;
  };

  const openCreate = () => {
    setErrors({});
    setForm({ open: true, mode: 'create', index: -1, values: emptyValues() });
  };

  const openEdit = (index: number) => {
    setErrors({});
    setForm({ open: true, mode: 'edit', index, values: { ...emptyValues(), ...rows[index] } });
  };

  const setValue = (key: string, value: string | number) =>
    setForm((prev) => ({ ...prev, values: { ...prev.values, [key]: value } }));

  const validate = () => {
    const next: Record<string, string> = {};
    fields.forEach((field) => {
      const value = String(form.values[field.key] ?? '').trim();
      if (field.required && !value) next[field.key] = 'Trường bắt buộc';
      else if (field.maxLength && value.length > field.maxLength)
        next[field.key] = `Tối đa ${field.maxLength} ký tự (hiện ${value.length})`;
      else if (
        field.key === 'email' &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        next[field.key] = 'Email chưa đúng định dạng';
      } else if (module.slug === 'cart' && field.key === 'items' && value) {
        try {
          const parsed: unknown = JSON.parse(value);
          if (
            !Array.isArray(parsed) ||
            parsed.some(
              (item) =>
                !item ||
                typeof item !== 'object' ||
                !('id' in item) ||
                !('name' in item) ||
                !('price' in item) ||
                !('qty' in item)
            )
          ) {
            next[field.key] = 'Chi tiết giỏ phải là danh sách JSON có id, name, price và qty.';
          }
        } catch {
          next[field.key] = 'Chi tiết giỏ phải có định dạng JSON hợp lệ.';
        }
      } else if (
        ['code', 'txnId', 'addressId', 'method'].includes(field.key) &&
        value &&
        rows.some(
          (row, index) =>
            index !== form.index && String(row[field.key] ?? '').toLowerCase() === value.toLowerCase()
        )
      ) {
        next[field.key] = 'Giá trị này đã tồn tại';
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitForm = () => {
    if (!validate()) return;

    const clean: AdminRow = { ...form.values };
    fields.forEach((field) => {
      if (field.type === 'number') clean[field.key] = Number(clean[field.key]) || 0;
      else clean[field.key] = String(clean[field.key] ?? '');
    });
    if (fields.some((x) => x.key === 'updated')) clean.updated = sofa2Today();

    if (form.mode === 'create') {
      createRow(clean);
      setToast(`Đã thêm ${entity} mới.`);
    } else {
      updateRow(form.index, clean);
      setToast(`Đã cập nhật ${entity}.`);
    }
    setForm((prev) => ({ ...prev, open: false }));
  };

  const togglePublish = (index: number) => {
    const row = rows[index];
    const isPublished = String(row[statusKey]) === published;
    const next = isPublished ? defaultDraft : published;
    updateRow(index, { ...row, [statusKey]: next, ...(row.updated ? { updated: sofa2Today() } : {}) });
    setToast(isPublished ? `Đã gỡ ${publishLabel.toLowerCase()} ${entity}.` : `Đã ${publishLabel.toLowerCase()} ${entity}.`);
  };

  const duplicateRow = (index: number) => {
    const row = rows[index];
    const copy: AdminRow = {
      ...row,
      [titleKey]: `${row[titleKey]} (bản sao)`,
      [statusKey]: defaultDraft,
    };
    createRow(copy);
    setToast(`Đã nhân bản ${entity}.`);
  };

  const doDelete = () => {
    if (confirm.index !== null) {
      deleteRow(confirm.index);
      setSelected([]);
      setToast(`Đã xoá ${entity}.`);
    }
    setConfirm({ open: false, index: null });
  };

  const bulkPublish = () => {
    if (!showStatusToggle) return;
    selected
      .slice()
      .sort((a, b) => a - b)
      .forEach((index) => updateRow(index, { ...rows[index], [statusKey]: published }));
    setToast(`Đã ${publishLabel.toLowerCase()} ${selected.length} ${entity}.`);
    setSelected([]);
  };

  const bulkDelete = () => {
    deleteRows(selected);
    setToast(`Đã xoá ${selected.length} ${entity}.`);
    setSelected([]);
    setBulkConfirm(false);
  };

  const toggleSelect = (index: number) =>
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  const allOnPage = paged.length > 0 && paged.every(({ index }) => selected.includes(index));

  const exportCsv = () => {
    const keys = fields.map((x) => x.key);
    const header = fields.map((x) => x.label).join(',');
    const body = filtered
      .map(({ row }) => keys.map((k) => `"${String(row[k] ?? '')}"`).join(','))
      .join('\n');
    const blob = new Blob([`\ufeff${header}\n${body}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cart-${module.slug}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setToast('Đã xuất dữ liệu CSV.');
  };

  // ----------------------------------------------------------------------

  const renderField = (field: Sofa2CmsField) => {
    const value = form.values[field.key] ?? '';
    const error = errors[field.key];

    if (field.type === 'switch') {
      return (
        <FormControlLabel
          key={field.key}
          control={
            <Switch
              checked={String(value) === 'Có'}
              onChange={(e) => setValue(field.key, e.target.checked ? 'Có' : 'Không')}
            />
          }
          label={field.label}
        />
      );
    }

    return (
      <TextField
        key={field.key}
        fullWidth
        select={field.type === 'select'}
        multiline={field.type === 'textarea'}
        minRows={field.multiline}
        type={field.type === 'number' ? 'number' : 'text'}
        label={field.label}
        value={value}
        error={!!error}
        placeholder={field.placeholder}
        helperText={
          error ??
          (field.maxLength
            ? `${String(value).length}/${field.maxLength} ký tự${field.helper ? ` — ${field.helper}` : ''}`
            : field.helper)
        }
        onChange={(e) => setValue(field.key, e.target.value)}
      >
        {(field.options ?? []).map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const groupedFields = (g: string) => fields.filter((x) => x.group === g);
  const formGroups = ['content', 'technical', 'display'];
  const tableCols = module.columns;

  return (
    <>
      <Helmet>
        <title>{`${module.name} | Mua hàng - Quản trị LUXE Sofa`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa2AdminLayout
        activeGroup={group.slug}
        activeModule={module.slug}
        breadcrumb={[group.name, module.name]}
        title={module.name}
        subtitle={module.description}
      >
        <Grid container spacing={3}>
          {/* KPI cards */}
          {visibleStats.map((stat) => (
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

          {/* Chart */}
          <Grid xs={12}>
            <CartChart schema={chartSchema} />
          </Grid>

          {/* Table */}
          <Grid xs={12}>
            <Card>
              <Tabs
                value={tab}
                onChange={(_, next) => {
                  setTab(next);
                  setPage(0);
                }}
                sx={{ px: 2.5, boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha('#919EAB', 0.08)}` }}
              >
                <Tab value="all" label={`Tất cả (${counts.all})`} />
                {statusOptions.map((s) => (
                  <Tab key={s} value={s} label={`${s} (${counts[s] ?? 0})`} />
                ))}
              </Tabs>

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
                  placeholder={`Tìm ${entity}...`}
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
                    <>
                      {showStatusToggle && (
                        <Button
                          size="small"
                          color="success"
                          variant="outlined"
                          onClick={bulkPublish}
                          startIcon={<Iconify icon="solar:check-circle-bold-duotone" />}
                        >
                          {publishLabel} ({selected.length})
                        </Button>
                      )}
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        onClick={() => setBulkConfirm(true)}
                        startIcon={<Iconify icon="solar:trash-bin-trash-bold-duotone" />}
                      >
                        Xoá ({selected.length})
                      </Button>
                    </>
                  )}
                  {showReset && (
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
                  )}
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

              <TableContainer sx={{ borderTop: `1px solid ${alpha('#919EAB', 0.16)}` }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={allOnPage}
                          onChange={() =>
                            setSelected(allOnPage ? [] : paged.map(({ index }) => index))
                          }
                        />
                      </TableCell>
                      {tableCols.map((col) => (
                        <TableCell key={col.key}>{col.label}</TableCell>
                      ))}
                      {showStatusToggle && <TableCell align="center">{publishLabel}</TableCell>}
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
                        {tableCols.map((col) => {
                          const value = row[col.key] ?? '—';
                          return (
                            <TableCell key={col.key}>
                              {col.type === 'status' ? (
                                <Chip
                                  size="small"
                                  label={String(value)}
                                  color={statusColor(String(value)) as any}
                                />
                              ) : col.type === 'money' && typeof value === 'number' ? (
                                <Typography variant="body2" sx={{ fontWeight: col.key === titleKey ? 600 : 400 }}>
                                  {value.toLocaleString('vi-VN')} ₫
                                </Typography>
                              ) : col.type === 'number' && typeof value === 'number' ? (
                                <Typography variant="body2" sx={{ fontWeight: col.key === titleKey ? 600 : 400 }}>
                                  {value.toLocaleString('vi-VN')}
                                </Typography>
                              ) : (
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: col.key === titleKey ? 600 : 400 }}
                                >
                                  {value}
                                </Typography>
                              )}
                            </TableCell>
                          );
                        })}
                        {showStatusToggle && (
                          <TableCell align="center">
                            <Switch
                              size="small"
                              checked={String(row[statusKey]) === published}
                              onChange={() => togglePublish(index)}
                            />
                          </TableCell>
                        )}
                        <TableCell align="right">
                          <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                            <Tooltip title="Xem chi tiết">
                              <IconButton size="small" onClick={() => setDetail(row)}>
                                <Iconify icon="solar:eye-bold-duotone" width={18} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Sửa">
                              <IconButton size="small" onClick={() => openEdit(index)}>
                                <Iconify icon="solar:pen-bold-duotone" width={18} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Nhân bản">
                              <IconButton size="small" onClick={() => duplicateRow(index)}>
                                <Iconify icon="solar:copy-bold-duotone" width={18} />
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
                        <TableCell colSpan={tableCols.length + (showStatusToggle ? 3 : 2)} align="center" sx={{ py: 6 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Chưa có {entity} nào phù hợp.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Divider />

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
            </Card>
          </Grid>
        </Grid>
      </Sofa2AdminLayout>

      {/* Form thêm / sửa */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={form.open}
        onClose={() => setForm((prev) => ({ ...prev, open: false }))}
      >
        <DialogTitle>
          {form.mode === 'create'
            ? `Thêm ${entity} — ${module.name}`
            : `Chỉnh sửa ${entity} — ${module.name}`}
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={3} sx={{ pt: 1 }}>
            {formGroups.map((g) => {
              const list = groupedFields(g);
              if (!list.length) return null;
              return (
                <Stack key={g} spacing={2}>
                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                    {GROUP_LABEL[g] ?? g}
                  </Typography>
                  <Grid container spacing={2}>
                    {list.map((field) => (
                      <Grid
                        key={field.key}
                        xs={12}
                        md={field.type === 'textarea' || field.type === 'switch' ? 12 : 6}
                      >
                        {renderField(field)}
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              );
            })}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setForm((prev) => ({ ...prev, open: false }))}>
            Huỷ
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => {
              setValue(statusKey, defaultDraft);
              setTimeout(submitForm, 0);
            }}
          >
            Lưu nháp
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
        <DialogTitle>{`Chi tiết ${entity}`}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1.5}>
            {fields.map((field) => (
              <Stack key={field.key} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {field.label}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'right', wordBreak: 'break-word' }}>
                  {String(detail?.[field.key] ?? '—') || '—'}
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
        <DialogTitle>{`Xoá ${entity}?`}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {showReset
              ? `Bản ghi sẽ bị xoá khỏi ${module.name.toLowerCase()}. Bạn có thể bấm "Khôi phục" để nạp lại dữ liệu gốc.`
              : `Bản ghi sẽ bị xoá khỏi ${module.name.toLowerCase()} và trang khách hàng liên quan. Thao tác này không thể hoàn tác.`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setConfirm({ open: false, index: null })}>
            Huỷ
          </Button>
          <Button color="error" variant="contained" onClick={doDelete}>
            Xoá
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={bulkConfirm} onClose={() => setBulkConfirm(false)}>
        <DialogTitle>{`Xoá ${selected.length} ${entity}?`}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Các bản ghi đã chọn sẽ bị xoá khỏi dữ liệu quản trị và trang khách hàng liên quan.
            Thao tác này không thể hoàn tác.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setBulkConfirm(false)}>Huỷ</Button>
          <Button color="error" variant="contained" onClick={bulkDelete}>Xoá {selected.length} bản ghi</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!toast}
        message={toast}
        autoHideDuration={2600}
        onClose={() => setToast('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}
