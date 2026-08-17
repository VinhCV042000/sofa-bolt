import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TableContainer from '@mui/material/TableContainer';

import { Iconify } from 'src/components/iconify';

import { Sofa1AdminLayout, SOFA1_ADMIN_THEME } from './sofa1-admin-layout';
import {
  SOFA1_ADMIN_ROOT,
  SOFA1_ADMIN_GROUPS,
  findSofa1AdminModule,
} from '../sofa1-admin-data.tsx';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA1_ADMIN_THEME;

const statusColor = (value: string) => {
  const v = value.toLowerCase();
  if (/(xuất bản|hoàn tất|thành công|hoạt động|đã duyệt|còn hàng|đang chạy|đã giao)/.test(v))
    return 'success';
  if (/(chờ|đang xử lý|nháp|xem xét|mới)/.test(v)) return 'warning';
  if (/(từ chối|hủy|lỗi|hết hàng|tạm ẩn|quá hạn)/.test(v)) return 'error';
  return 'default';
};

const formatCell = (value: string | number, type?: string) => {
  if (type === 'money' && typeof value === 'number') return `${value.toLocaleString('vi-VN')} ₫`;
  if (type === 'number' && typeof value === 'number') return value.toLocaleString('vi-VN');
  return value;
};

export function Sofa1AdminModuleView() {
  const { group: groupSlug, module: moduleSlug } = useParams();
  const [search, setSearch] = useState('');

  const found = useMemo(() => findSofa1AdminModule(groupSlug, moduleSlug), [groupSlug, moduleSlug]);

  if (!found) {
    const first = SOFA1_ADMIN_GROUPS[0];
    return <Navigate to={`${SOFA1_ADMIN_ROOT}/${first.slug}/${first.modules[0].slug}`} replace />;
  }

  const { group, module } = found;

  const rows = module.rows.filter((row) =>
    search
      ? Object.values(row).some((v) => String(v).toLowerCase().includes(search.toLowerCase()))
      : true
  );

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
                    startIcon={<Iconify icon="solar:filter-bold-duotone" />}
                  >
                    Bộ lọc
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    startIcon={<Iconify icon="solar:export-bold-duotone" />}
                  >
                    Xuất Excel
                  </Button>
                  {(module.actions ?? ['Thêm mới']).map((action, index) => (
                    <Button
                      key={action}
                      size="small"
                      variant={index === 0 ? 'contained' : 'outlined'}
                      color="inherit"
                      sx={
                        index === 0
                          ? { bgcolor: SURFACE, '&:hover': { bgcolor: '#3A2C24' } }
                          : undefined
                      }
                      startIcon={index === 0 ? <Iconify icon="mingcute:add-line" /> : undefined}
                    >
                      {action}
                    </Button>
                  ))}
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
                    {rows.map((row, index) => (
                      <TableRow key={index} hover>
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
                            <Iconify
                              icon="solar:eye-bold-duotone"
                              width={18}
                              sx={{ color: 'text.disabled' }}
                            />
                            <Iconify
                              icon="solar:pen-bold-duotone"
                              width={18}
                              sx={{ color: 'text.disabled' }}
                            />
                            <Iconify
                              icon="solar:trash-bin-trash-bold-duotone"
                              width={18}
                              sx={{ color: 'text.disabled' }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
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
                  Hiển thị {rows.length} / {module.rows.length} bản ghi
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
    </>
  );
}
