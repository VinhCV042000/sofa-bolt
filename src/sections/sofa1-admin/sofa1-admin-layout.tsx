import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { SOFA1_ADMIN_GROUPS } from './sofa1-admin-config';

// ----------------------------------------------------------------------

const NAV_WIDTH = 288;

function AdminNavContent() {
  const pathname = usePathname();

  return (
    <Stack sx={{ height: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ px: 2.5, py: 3, flexShrink: 0 }}
      >
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, borderRadius: 1.5 }}>
          <Iconify icon="solar:armchair-2-bold-duotone" />
        </Avatar>
        <Box>
          <Typography variant="subtitle1">Sofa1 Admin</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Bảng điều khiển quản trị
          </Typography>
        </Box>
      </Stack>

      <Scrollbar sx={{ px: 1.5, pb: 3, flex: '1 1 auto' }}>
        <ListItemButton
          component={RouterLink}
          href="/sofa1/admin"
          selected={pathname === '/sofa1/admin'}
          sx={{ borderRadius: 1, mb: 0.5, minHeight: 44 }}
        >
          <Iconify icon="solar:widget-5-bold-duotone" sx={{ mr: 1.5 }} />
          <Typography variant="body2" sx={{ fontWeight: 'fontWeightSemiBold' }}>
            Tổng quan
          </Typography>
        </ListItemButton>

        {SOFA1_ADMIN_GROUPS.map((group) => (
          <AdminNavGroup key={group.slug} group={group} pathname={pathname} />
        ))}

        <ListItemButton
          component={RouterLink}
          href="/sofa1"
          sx={{ borderRadius: 1, mt: 1, minHeight: 44, color: 'text.secondary' }}
        >
          <Iconify icon="solar:home-2-bold-duotone" sx={{ mr: 1.5 }} />
          <Typography variant="body2">Về trang bán hàng</Typography>
        </ListItemButton>
      </Scrollbar>
    </Stack>
  );
}

function AdminNavGroup({
  group,
  pathname,
}: {
  group: (typeof SOFA1_ADMIN_GROUPS)[number];
  pathname: string;
}) {
  const active = pathname.startsWith(`/sofa1/admin/${group.slug}`);
  const [open, setOpen] = useState(active);

  return (
    <Box sx={{ mb: 0.25 }}>
      <ListItemButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{ borderRadius: 1, minHeight: 44, ...(active && { color: 'primary.main' }) }}
      >
        <Iconify icon={group.icon} sx={{ mr: 1.5 }} />
        <Typography variant="body2" sx={{ flexGrow: 1, fontWeight: 'fontWeightSemiBold' }}>
          {group.name}
        </Typography>
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
        />
      </ListItemButton>

      <Collapse in={open} unmountOnExit>
        <Stack sx={{ pl: 3.5, borderLeft: (theme) => `dashed 1px ${theme.vars.palette.divider}`, ml: 2.5 }}>
          {group.sections.map((section) => {
            const href = `/sofa1/admin/${group.slug}/${section.slug}`;
            return (
              <ListItemButton
                key={section.slug}
                component={RouterLink}
                href={href}
                selected={pathname === href}
                sx={{ borderRadius: 1, minHeight: 36 }}
              >
                <Typography variant="body2" noWrap>
                  {section.name}
                </Typography>
              </ListItemButton>
            );
          })}
        </Stack>
      </Collapse>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Sofa1AdminLayout({ children }: { children: React.ReactNode }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.neutral' }}>
      <Box
        sx={{
          flexShrink: 0,
          width: NAV_WIDTH,
          display: { xs: 'none', lg: 'block' },
          borderRight: (theme) => `solid 1px ${theme.vars.palette.divider}`,
          bgcolor: 'background.default',
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        <AdminNavContent />
      </Box>

      <Drawer
        open={openNav}
        onClose={() => setOpenNav(false)}
        PaperProps={{ sx: { width: NAV_WIDTH } }}
      >
        <AdminNavContent />
      </Drawer>

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            px: { xs: 2, md: 4 },
            py: 2,
            position: 'sticky',
            top: 0,
            zIndex: 10,
            bgcolor: (theme) => varAlpha(theme.vars.palette.background.defaultChannel, 0.9),
            backdropFilter: 'blur(8px)',
            borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
          }}
        >
          <IconButton onClick={() => setOpenNav(true)} sx={{ display: { lg: 'none' } }}>
            <Iconify icon="solar:hamburger-menu-broken" />
          </IconButton>

          <TextField
            size="small"
            placeholder="Tìm kiếm trong trang quản trị..."
            sx={{ maxWidth: 360, flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" width={18} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <IconButton>
            <Iconify icon="solar:bell-bing-bold-duotone" />
          </IconButton>
          <Avatar sx={{ width: 34, height: 34 }}>NA</Avatar>
        </Stack>

        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 4 } }}>{children}</Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Sofa1AdminHeading({
  title,
  description,
  breadcrumb,
  action = 'Thêm mới',
}: {
  title: string;
  description?: string;
  breadcrumb?: { name: string; href?: string }[];
  action?: string;
}) {
  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent="space-between"
      sx={{ mb: 3 }}
    >
      <Box>
        {!!breadcrumb?.length && (
          <Stack direction="row" spacing={1} sx={{ mb: 1, color: 'text.disabled' }}>
            {breadcrumb.map((item, index) => (
              <Typography key={item.name} variant="caption">
                {index > 0 && '· '}
                {item.name}
              </Typography>
            ))}
          </Stack>
        )}
        <Typography variant="h4">{title}</Typography>
        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            {description}
          </Typography>
        )}
      </Box>

      <Stack direction="row" spacing={1.5}>
        <Button variant="outlined" startIcon={<Iconify icon="solar:export-bold" />}>
          Xuất dữ liệu
        </Button>
        <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
          {action}
        </Button>
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function Sofa1AdminKpis({
  items,
}: {
  items: { label: string; value: string; note?: string }[];
}) {
  return (
    <Box
      sx={{
        mb: 3,
        gap: 2,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: `repeat(${Math.min(items.length, 4)}, 1fr)` },
      }}
    >
      {items.map((item) => (
        <Card key={item.label} sx={{ p: 2.5 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {item.label}
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5 }}>
            {item.value}
          </Typography>
          {item.note && (
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              {item.note}
            </Typography>
          )}
        </Card>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

const statusColor = (value: string) => {
  const v = value.toLowerCase();
  if (/(hoàn tất|thành công|đang hoạt động|tốt|đã gửi|đã giao|có)/.test(v)) return 'success';
  if (/(chờ|đang|lên lịch|bản nháp)/.test(v)) return 'warning';
  if (/(huỷ|lỗi|cần|thất bại|tạm khoá|hết hàng|thiếu)/.test(v)) return 'error';
  return 'default';
};

export function Sofa1AdminTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: (string | number)[][];
}) {
  return (
    <Card>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ p: 2.5 }}>
        <TextField
          size="small"
          placeholder="Lọc danh sách..."
          sx={{ maxWidth: 280, flexGrow: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={18} />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button size="small" color="inherit" startIcon={<Iconify icon="solar:filter-bold" />}>
          Bộ lọc
        </Button>
      </Stack>

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} sx={{ whiteSpace: 'nowrap' }}>
                    {column}
                  </TableCell>
                ))}
                <TableCell align="right" width={64} />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} hover>
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
                    <IconButton size="small">
                      <Iconify icon="eva:more-vertical-fill" width={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}
