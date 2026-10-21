import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
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
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import TablePagination from '@mui/material/TablePagination';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { isSofa2JobOpen } from 'src/sections/sofa2/sofa2-recruitment';

import { Sofa2AdminLayout } from './sofa2-admin-layout';
import { Sofa2AdminSeoGenerator } from './sofa2-admin-seo-generator';
import {
  getSofa2AdminRows,
  loadSofa2DealerRows,
  syncSofa2DealerRows,
  type AdminRow,
  useSofa2AdminRows,
} from '../sofa2-admin-store';
import { sofa2Today, sofa2Slugify, type Sofa2CmsField, type Sofa2CmsSchema } from '../sofa2-cms';
import { Sofa2AdminDealerInsights } from './sofa2-admin-dealer-insights';

import type { Sofa2AdminGroup, Sofa2AdminModule } from '../sofa2-admin-data';

// ----------------------------------------------------------------------

const SURFACE = '#2A2A2A';

const statusColor = (value: string) => {
  const v = String(value).toLowerCase();
  if (/(xuất bản|đang chạy|tốt)/.test(v)) return 'success';
  if (/(nháp|chờ|cần cải thiện)/.test(v)) return 'warning';
  if (/(ẩn|hết hạn|thiếu)/.test(v)) return 'error';
  return 'default';
};

const asNumber = (value: unknown) => Number(String(value ?? '').replace(/[^\d.-]/g, '')) || 0;

const compactMoney = (value: number) => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)} tỷ`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)} tr`;
  return `${Math.round(value).toLocaleString('vi-VN')} ₫`;
};

const getDate = (value: unknown) => {
  const raw = String(value ?? '').trim();
  const localized = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (localized) return new Date(Number(localized[3]), Number(localized[2]) - 1, Number(localized[1]));
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
};

const isPortalEnabled = (value: unknown) =>
  value === true || ['có', 'yes', 'true', '1'].includes(String(value ?? '').trim().toLowerCase());

const GROUP_LABEL: Record<Sofa2CmsField['group'], string> = {
  content: 'Nội dung',
  display: 'Hiển thị & lịch',
  seo: 'SEO & chia sẻ',
};

type FormState = { open: boolean; mode: 'create' | 'edit'; index: number; values: AdminRow };

type Props = { group: Sofa2AdminGroup; module: Sofa2AdminModule; schema: Sofa2CmsSchema };

export function Sofa2AdminCmsView({ group, module, schema }: Props) {
  const { rows, createRow, updateRow, deleteRow, deleteRows, resetRows } = useSofa2AdminRows(
    group.slug,
    module.slug
  );

  const [dealerLoading, setDealerLoading] = useState(group.slug === 'dealer');
  useEffect(() => {
    if (group.slug !== 'dealer') return undefined;
    let active = true;
    setDealerLoading(true);
    loadSofa2DealerRows(module.slug, module.rows)
      .catch(() => {
        if (active) setToast('Không tải được dữ liệu máy chủ; các thay đổi chưa thể đồng bộ.');
      })
      .finally(() => {
        if (active) setDealerLoading(false);
      });
    return () => {
      active = false;
    };
  }, [group.slug, module.slug, module.rows]);

  const syncDealerModule = async () => {
    if (group.slug !== 'dealer') return true;
    try {
      await syncSofa2DealerRows(module.slug, getSofa2AdminRows(group.slug, module.slug));
      return true;
    } catch {
      return false;
    }
  };

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

  const { titleKey, statusKey, statusOptions, fields, clientPath, entity } = schema;

  const publishLabel = schema.publishLabel ?? 'Xuất bản';
  const defaultDraft = schema.defaultStatus ?? statusOptions[1] ?? 'Bản nháp';
  const published = statusOptions[0];
  const hideClientLink = schema.hideClientLink ?? false;
  const showStatusToggle = schema.statusToggle !== false;
  const linkedRecruitmentDeleteNote =
    group.slug === 'hr' && ['submit-cv', 'applicant-profile'].includes(module.slug)
      ? ' Hồ sơ và đơn ứng tuyển có cùng mã sẽ bị xoá cùng nhau; bộ đếm hồ sơ của vị trí cũng được cập nhật.'
      : '';

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: rows.length };
    statusOptions.forEach((s) => {
      map[s] = rows.filter((r) => String(r[statusKey]) === s).length;
    });
    return map;
  }, [rows, statusKey, statusOptions]);

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
      else if (field.type === 'switch')
        values[field.key] = group.slug === 'dealer' && field.key === 'portalAccess' ? 'Không' : 'Có';
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
    });
    if (group.slug === 'customer') {
      const uniqueKey =
        module.slug === 'profiles'
          ? 'customerId'
          : ['customer-orders', 'warranties', 'complaints'].includes(module.slug)
            ? 'code'
            : undefined;
      if (uniqueKey) {
        const candidate = String(form.values[uniqueKey] ?? '').trim().toLowerCase();
        const duplicate = candidate && rows.some((row, index) =>
          !(form.mode === 'edit' && index === form.index) &&
          String(row[uniqueKey] ?? '').trim().toLowerCase() === candidate
        );
        if (duplicate) next[uniqueKey] = 'Giá trị này đã tồn tại.';
      }
      if (module.slug === 'vouchers') {
        const code = String(form.values.code ?? '').trim().toLowerCase();
        const customerId = String(form.values.customerId ?? '').trim().toLowerCase();
        const duplicate = code && customerId && rows.some((row, index) =>
          !(form.mode === 'edit' && index === form.index) &&
          String(row.code ?? '').trim().toLowerCase() === code &&
          String(row.customerId ?? '').trim().toLowerCase() === customerId
        );
        if (duplicate) next.code = 'Voucher này đã tồn tại cho khách hàng.';
      }
    }
    if (group.slug === 'hr') {
      const uniqueKey =
        ['recruitment', 'job-detail', 'recruitment-tracking'].includes(module.slug)
          ? 'jobId'
          : ['submit-cv', 'applicant-profile'].includes(module.slug)
            ? 'applicationId'
            : undefined;
      if (uniqueKey) {
        const candidate = String(form.values[uniqueKey] ?? '').trim().toLowerCase();
        const duplicate = candidate && rows.some((row, index) =>
          !(form.mode === 'edit' && index === form.index) &&
          String(row[uniqueKey] ?? '').trim().toLowerCase() === candidate
        );
        if (duplicate) next[uniqueKey] = 'Mã này đã được sử dụng.';
        if (
          form.mode === 'edit' &&
          String(form.values[uniqueKey] ?? '') !== String(rows[form.index]?.[uniqueKey] ?? '')
        ) {
          next[uniqueKey] = 'Không thể đổi mã sau khi tạo vì mã này liên kết với hồ sơ tuyển dụng.';
        }
      }

      if (['submit-cv', 'applicant-profile'].includes(module.slug)) {
        const email = String(form.values.email ?? '').trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          next.email = 'Vui lòng nhập email hợp lệ.';
        }
        const phone = String(form.values.phone ?? '').replace(/\D/g, '');
        if (phone && (phone.length < 9 || phone.length > 15)) {
          next.phone = 'Số điện thoại cần có từ 9 đến 15 chữ số.';
        }
        const cvUrl = String(form.values.cvUrl ?? '').trim();
        if (cvUrl) {
          try {
            const parsed = new URL(cvUrl);
            if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('invalid protocol');
          } catch {
            next.cvUrl = 'Vui lòng nhập đường dẫn CV bắt đầu bằng http:// hoặc https://.';
          }
        }
      }

      if (['recruitment', 'job-detail'].includes(module.slug)) {
        const salaryMin = Number(form.values.salaryMin) || 0;
        const salaryMax = Number(form.values.salaryMax) || 0;
        if (salaryMin && salaryMax && salaryMax < salaryMin) {
          next.salaryMax = 'Lương tối đa phải lớn hơn hoặc bằng lương tối thiểu.';
        }
      }

      if (module.slug === 'applicant-profile') {
        const score = Number(form.values.interviewScore);
        if (Number.isFinite(score) && (score < 0 || score > 10)) {
          next.interviewScore = 'Điểm phỏng vấn phải nằm trong khoảng 0–10.';
        }
      }
    }
    if (group.slug === 'dealer') {
      const uniqueKeyByModule: Record<string, string> = {
        dashboard: 'dealer',
        'price-policy': 'name',
        quotes: 'code',
        'dealer-orders': 'code',
        'sales-docs': 'title',
      };
      const uniqueKey = uniqueKeyByModule[module.slug];
      if (uniqueKey) {
        const candidate = String(form.values[uniqueKey] ?? '').trim().toLowerCase();
        const duplicate = candidate && rows.some(
          (row, index) =>
            !(form.mode === 'edit' && index === form.index) &&
            String(row[uniqueKey] ?? '').trim().toLowerCase() === candidate
        );
        if (duplicate) next[uniqueKey] = 'Giá trị này đã tồn tại.';
      }

      if (module.slug === 'dashboard') {
        const email = String(form.values.email ?? '').trim().toLowerCase();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          next.email = 'Vui lòng nhập email hợp lệ.';
        }
        const duplicateEmail =
          email &&
          rows.some(
            (row, index) =>
              !(form.mode === 'edit' && index === form.index) &&
              String(row.email ?? '').trim().toLowerCase() === email
          );
        if (duplicateEmail) next.email = 'Email này đã được gán cho đại lý khác.';
        if (String(form.values.portalAccess) === 'Có' && !email) {
          next.email = 'Cần email đăng nhập trước khi bật quyền cổng đại lý.';
        }
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitForm = async () => {
    if (!validate()) return;

    const clean: AdminRow = { ...form.values };
    fields.forEach((field) => {
      if (field.type === 'number') clean[field.key] = Number(clean[field.key]) || 0;
      else clean[field.key] = String(clean[field.key] ?? '');
    });
    if (
      group.slug === 'hr' &&
      ['recruitment', 'job-detail', 'recruitment-tracking'].includes(module.slug) &&
      !String(clean.jobId ?? '').trim()
    ) {
      clean.jobId = `JOB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    }
    if (group.slug === 'hr' && ['submit-cv', 'applicant-profile'].includes(module.slug) && !String(clean.applicationId ?? '').trim()) {
      clean.applicationId = `APP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    }
    if (fields.some((x) => x.key === 'updated')) clean.updated = sofa2Today();
    if (group.slug === 'dealer' && module.slug === 'dashboard' && form.mode === 'edit') {
      clean.dealerId = rows[form.index]?.dealerId ?? '';
    }

    if (form.mode === 'create') {
      createRow(clean);
    } else {
      updateRow(form.index, clean);
    }
    const synced = await syncDealerModule();
    setToast(
      synced
        ? form.mode === 'create'
          ? `Đã thêm ${entity} mới.`
          : `Đã cập nhật ${entity}.`
        : 'Đã lưu tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.'
    );
    setForm((prev) => ({ ...prev, open: false }));
  };

  const togglePublish = async (index: number) => {
    const row = rows[index];
    const isPublished = String(row[statusKey]) === published;
    const next = isPublished ? statusOptions[1] ?? 'Bản nháp' : published;
    updateRow(index, { ...row, [statusKey]: next, ...(row.updated ? { updated: sofa2Today() } : {}) });
    const synced = await syncDealerModule();
    setToast(
      synced
        ? isPublished
          ? `Đã gỡ ${publishLabel.toLowerCase()} ${entity}.`
          : `Đã ${publishLabel.toLowerCase()} ${entity}.`
        : 'Đã lưu tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.'
    );
  };

  const duplicateRow = async (index: number) => {
    const row = rows[index];
    const copy: AdminRow = {
      ...row,
      [titleKey]: `${row[titleKey]} (bản sao)`,
      [statusKey]: statusOptions[1] ?? 'Bản nháp',
    };
    if (group.slug === 'dealer' && module.slug === 'dashboard') {
      delete copy.dealerId;
      copy.email = '';
      copy.portalAccess = 'Không';
    }
    if (copy.slug) copy.slug = `${sofa2Slugify(String(row[titleKey]))}-copy`;
    createRow(copy);
    const synced = await syncDealerModule();
    setToast(synced ? `Đã nhân bản ${entity}.` : 'Đã lưu tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.');
  };

  const doDelete = async () => {
    if (confirm.index !== null) {
      deleteRow(confirm.index);
      setSelected([]);
      const synced = await syncDealerModule();
      setToast(synced ? `Đã xoá ${entity}.` : 'Đã xoá tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.');
    }
    setConfirm({ open: false, index: null });
  };

  const doBulkDelete = async () => {
    const deletedCount = selected.length;
    deleteRows(selected);
    setSelected([]);
    setBulkConfirm(false);
    const synced = await syncDealerModule();
    setToast(
      synced
        ? `Đã xoá ${deletedCount} ${entity}.`
        : 'Đã xoá tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.'
    );
  };

  const bulkPublish = async () => {
    selected
      .slice()
      .sort((a, b) => a - b)
      .forEach((index) => updateRow(index, { ...rows[index], [statusKey]: published }));
    const synced = await syncDealerModule();
    setToast(
      synced
        ? `Đã ${publishLabel.toLowerCase()} ${selected.length} ${entity}.`
        : 'Đã lưu tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.'
    );
    setSelected([]);
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
    a.download = `cms-${module.slug}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setToast('Đã xuất dữ liệu CSV.');
  };

  // ----------------------------------------------------------------------

  const renderField = (field: Sofa2CmsField) => {
    const value = form.values[field.key] ?? '';
    const error = errors[field.key];
    const fieldOptions =
      field.key === 'dealer' && group.slug === 'dealer'
        ? Array.from(
            new Set(
              [
                ...getSofa2AdminRows('dealer', 'dashboard').map((row) =>
                  String(row.dealer ?? '').trim()
                ),
                ...(field.options ?? []),
                String(value).trim(),
              ].filter(Boolean)
            )
          )
        : field.options ?? [];

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
        onBlur={() => {
          if (field.key === 'slug' && !String(value).trim()) {
            setValue('slug', `${clientPath}/${sofa2Slugify(String(form.values[titleKey] ?? ''))}`);
          }
        }}
      >
        {fieldOptions.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const groupedFields = (g: Sofa2CmsField['group']) => fields.filter((x) => x.group === g);
  const dashboardStats = useMemo(() => {
    if (group.slug === 'dealer') {
      const sum = (field: string, items = rows) =>
        items.reduce((total, row) => total + asNumber(row[field]), 0);
      const countStatus = (status: string) =>
        rows.filter((row) => String(row.status) === status).length;
      const endDateWithinDays = (days: number) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const limit = new Date(today);
        limit.setDate(limit.getDate() + days);
        return rows.filter((row) => {
          const endDate = getDate(row.endDate);
          return (
            String(row.status) === 'Đang áp dụng' &&
            endDate !== null &&
            endDate >= today &&
            endDate <= limit
          );
        }).length;
      };
      const activePolicies = rows.filter((row) => String(row.status) === 'Đang áp dụng');
      const statsByModule: Record<string, typeof module.stats> = {
        dashboard: [
          { label: 'Đại lý trong hệ thống', value: rows.length.toLocaleString('vi-VN') },
          {
            label: 'Cổng đại lý đã bật',
            value: rows.filter((row) => isPortalEnabled(row.portalAccess)).length.toLocaleString('vi-VN'),
          },
          { label: 'Doanh số tháng', value: compactMoney(sum('achieved')) },
          { label: 'Đang tạm ngưng', value: countStatus('Tạm ngưng').toLocaleString('vi-VN') },
        ],
        'price-policy': [
          { label: 'Chính sách đang áp dụng', value: activePolicies.length.toLocaleString('vi-VN') },
          {
            label: 'Chiết khấu trung bình',
            value: `${activePolicies.length ? Math.round(sum('discount', activePolicies) / activePolicies.length) : 0}%`,
          },
          { label: 'Sắp hết hạn 30 ngày', value: endDateWithinDays(30).toLocaleString('vi-VN') },
          { label: 'Bản nháp', value: countStatus('Bản nháp').toLocaleString('vi-VN') },
        ],
        quotes: [
          {
            label: 'Chờ xử lý',
            value: (countStatus('Chờ xử lý') + countStatus('Chờ phản hồi')).toLocaleString('vi-VN'),
          },
          { label: 'Đã gửi', value: countStatus('Đã gửi').toLocaleString('vi-VN') },
          {
            label: 'Tỷ lệ chốt',
            value: `${rows.length ? Math.round((countStatus('Đã chốt') / rows.length) * 100) : 0}%`,
          },
          { label: 'Giá trị báo giá', value: compactMoney(sum('value')) },
        ],
        'dealer-orders': [
          { label: 'Tổng đơn hàng', value: rows.length.toLocaleString('vi-VN') },
          { label: 'Đang giao', value: countStatus('Đang giao').toLocaleString('vi-VN') },
          { label: 'Chờ xác nhận', value: countStatus('Chờ xác nhận').toLocaleString('vi-VN') },
          { label: 'Tổng giá trị đơn', value: compactMoney(sum('total')) },
        ],
        debts: [
          { label: 'Tổng dư nợ', value: compactMoney(sum('balance')) },
          {
            label: 'Dư nợ quá hạn',
            value: compactMoney(
              sum('balance', rows.filter((row) => String(row.status) === 'Quá hạn'))
            ),
          },
          { label: 'Sắp đến hạn', value: countStatus('Sắp đến hạn').toLocaleString('vi-VN') },
          { label: 'Tổng hạn mức', value: compactMoney(sum('limit')) },
        ],
        'sales-docs': [
          { label: 'Đã xuất bản', value: countStatus('Đã xuất bản').toLocaleString('vi-VN') },
          { label: 'Lượt tải', value: sum('downloads').toLocaleString('vi-VN') },
          {
            label: 'Tài liệu giới hạn',
            value: rows.filter((row) => row.access !== 'Tất cả đại lý').length.toLocaleString('vi-VN'),
          },
          { label: 'Bản nháp', value: countStatus('Bản nháp').toLocaleString('vi-VN') },
        ],
      };
      return statsByModule[module.slug] ?? module.stats;
    }

    if (group.slug !== 'hr') return module.stats;

    const sum = (key: string, items = rows) =>
      items.reduce((total, row) => total + (Number(row[key]) || 0), 0);
    const average = (key: string, items = rows) =>
      items.length ? sum(key, items) / items.length : 0;
    const count = (predicate: (row: AdminRow) => boolean) => rows.filter(predicate).length;
    const openJobs = rows.filter(isSofa2JobOpen);
    const totalApplicants = sum('applicants');
    const hired = sum('hired');
    const formatCount = (value: number) => Math.round(value).toLocaleString('vi-VN');

    const statsByModule: Record<string, typeof module.stats> = {
      recruitment: [
        { label: 'Vị trí đang tuyển', value: formatCount(openJobs.length) },
        { label: 'Chỉ tiêu còn mở', value: formatCount(sum('quantity', openJobs)) },
        { label: 'Hồ sơ nhận', value: formatCount(totalApplicants) },
        { label: 'Đã nhận việc', value: formatCount(hired) },
      ],
      'job-detail': [
        { label: 'Vị trí đã đăng', value: formatCount(rows.length) },
        { label: 'Lượt xem tin', value: formatCount(sum('views')) },
        { label: 'Hồ sơ/vị trí', value: formatCount(average('applicants')) },
        { label: 'Ngày mở TB', value: `${Math.round(average('daysOpen'))} ngày` },
      ],
      'submit-cv': [
        { label: 'Tổng hồ sơ', value: formatCount(rows.length) },
        { label: 'Mới chưa xử lý', value: formatCount(count((row) => String(row.status) === 'Mới')) },
        { label: 'Đang tuyển chọn', value: formatCount(count((row) => ['Đang sàng lọc', 'Phỏng vấn', 'Thử việc'].includes(String(row.status)))) },
        { label: 'Trúng tuyển', value: formatCount(count((row) => String(row.status) === 'Trúng tuyển')) },
      ],
      'applicant-profile': [
        { label: 'Tổng ứng viên', value: formatCount(rows.length) },
        { label: 'Đang phỏng vấn', value: formatCount(count((row) => String(row.status) === 'Phỏng vấn')) },
        { label: 'Thử việc / offer', value: formatCount(count((row) => ['Thử việc', 'Trúng tuyển'].includes(String(row.status)))) },
        { label: 'Đã nhận việc', value: formatCount(count((row) => String(row.status) === 'Trúng tuyển')) },
      ],
      'recruitment-tracking': [
        { label: 'Vị trí đang tuyển', value: formatCount(openJobs.length) },
        { label: 'Ngày mở TB', value: `${Math.round(average('daysOpen', openJobs))} ngày` },
        { label: 'Chi phí TB/vị trí', value: `${(average('cost', rows) / 1000000).toFixed(1)} tr` },
        { label: 'Tỷ lệ trúng tuyển', value: `${totalApplicants ? Math.round((hired / totalApplicants) * 100) : 0}%` },
      ],
    };

    return statsByModule[module.slug] ?? module.stats;
  }, [group.slug, module, rows]);

  return (
    <>
      <Helmet>
        <title>{`${module.name} | CMS - Quản trị LUXE Sofa`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa2AdminLayout
        activeGroup={group.slug}
        activeModule={module.slug}
        breadcrumb={[group.name, module.name]}
        title={module.name}
        subtitle={module.description}
      >
        {group.slug === 'dealer' && dealerLoading && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Đang tải dữ liệu đại lý đã đồng bộ…
          </Alert>
        )}
        <Grid container spacing={3}>
          {dashboardStats.map((stat) => (
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

          {group.slug === 'dealer' && module.slug === 'dashboard' && (
            <Grid xs={12}>
              <Sofa2AdminDealerInsights moduleSlug={module.slug} rows={rows} />
            </Grid>
          )}

          {!hideClientLink && (
            <Grid xs={12}>
              <Card sx={{ p: 2.5 }}>
                <Stack
                  spacing={1.5}
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems={{ md: 'center' }}
                >
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2">Trang tương ứng trên website</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {clientPath}
                    </Typography>
                  </Stack>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    component={RouterLink}
                    href={clientPath}
                    target="_blank"
                    startIcon={<Iconify icon="solar:eye-bold-duotone" />}
                  >
                    Xem trang khách hàng
                  </Button>
                </Stack>
              </Card>
            </Grid>
          )}

          {module.slug === 'seo' && (
            <Grid xs={12}>
              <Sofa2AdminSeoGenerator moduleSlug={module.slug} moduleName={module.name} />
            </Grid>
          )}

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
                          startIcon={<Iconify icon="solar:cloud-upload-bold-duotone" />}
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
                  {group.slug !== 'hr' && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="inherit"
                      onClick={() => {
                        resetRows(module.rows);
                        setSelected([]);
                        syncDealerModule().then((synced) =>
                          setToast(
                            synced
                              ? 'Đã khôi phục dữ liệu gốc.'
                              : 'Đã khôi phục tạm trên trình duyệt nhưng chưa đồng bộ được với máy chủ.'
                          )
                        );
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
                      {module.columns.map((col) => (
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
                        {module.columns.map((col) => {
                          const value = row[col.key] ?? '—';
                          return (
                            <TableCell key={col.key}>
                              {col.type === 'status' ? (
                                <Chip
                                  size="small"
                                  label={String(value)}
                                  color={statusColor(String(value)) as any}
                                />
                              ) : col.key === 'cvUrl' && /^https?:\/\//i.test(String(value)) ? (
                                <Typography
                                  component="a"
                                  href={String(value)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  variant="body2"
                                  sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                >
                                  Mở CV / Portfolio
                                </Typography>
                              ) : (
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: col.key === titleKey ? 600 : 400 }}
                                >
                                  {typeof value === 'number' ? value.toLocaleString('vi-VN') : value}
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
                          <TableCell
                            colSpan={module.columns.length + (showStatusToggle ? 3 : 2)}
                            align="center"
                            sx={{ py: 6 }}
                          >
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

      {/* Form thêm / sửa chi tiết */}
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
            {(['content', 'display', 'seo'] as const).map((g) => {
              const list = groupedFields(g);
              if (!list.length) return null;
              return (
                <Stack key={g} spacing={2}>
                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                    {GROUP_LABEL[g]}
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
                <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
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
            {group.slug === 'dealer' && module.slug === 'dashboard'
              ? 'Hồ sơ sẽ bị xoá và quyền truy cập cổng đại lý bị thu hồi. Các báo giá, đơn hàng và công nợ đã lưu vẫn được giữ nhưng sẽ không còn liên kết với hồ sơ này. Khôi phục chỉ nạp lại dữ liệu mẫu ban đầu.'
              : `${linkedRecruitmentDeleteNote} Bản ghi sẽ bị xoá khỏi ${module.name.toLowerCase()}. Khôi phục chỉ nạp lại dữ liệu mẫu ban đầu, không hoàn tác bản ghi đã xoá.`}
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

      {/* Xác nhận xoá hàng loạt */}
      <Dialog open={bulkConfirm} onClose={() => setBulkConfirm(false)}>
        <DialogTitle>{`Xoá ${selected.length} ${entity}?`}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {group.slug === 'dealer' && module.slug === 'dashboard'
              ? `Bạn đang xoá ${selected.length} hồ sơ đại lý. Quyền truy cập cổng sẽ bị thu hồi; báo giá, đơn hàng và công nợ được giữ lại nhưng không còn liên kết với hồ sơ. Khôi phục chỉ nạp lại dữ liệu mẫu ban đầu.`
              : `${linkedRecruitmentDeleteNote} Các bản ghi đã chọn sẽ bị xoá khỏi ${module.name.toLowerCase()}. Khôi phục chỉ nạp lại dữ liệu mẫu ban đầu, không hoàn tác các bản ghi đã xoá.`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setBulkConfirm(false)}>
            Huỷ
          </Button>
          <Button color="error" variant="contained" onClick={doBulkDelete}>
            Xoá {selected.length}
          </Button>
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
