import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import {
  SOFA14_PROFILE,
  SOFA14_ADMIN_TOOLS,
  SOFA14_NOTIFICATIONS,
  SOFA14_SETTINGS_FIELDS,
  SOFA14_SETTINGS_TOGGLES,
  findSofa14AdminTool,
} from '../sofa14-admin-tools';
import { Sofa14AdminCharts } from './sofa14-admin-charts';
import { Sofa14AdminFunnel, Sofa14AdminRevenueChart } from './sofa14-admin-insights';
import { Sofa14AdminLayout } from './sofa14-admin-layout';
import { SOFA14_ADMIN_ROOT } from '../sofa14-admin-data';

// ----------------------------------------------------------------------

const ACCENT = '#C9A84C';
const SURFACE = '#222228';

type SettingsValues = Record<string, string>;
type ToggleValues = Record<string, boolean>;

type Tone = 'error' | 'warning' | 'success' | 'info';

const toneColor = (level: string): Tone => {
  if (level === 'error') return 'error';
  if (level === 'warning') return 'warning';
  if (level === 'success') return 'success';
  return 'info';
};

export function Sofa14AdminToolsView() {
  const { tool: toolSlug } = useParams();
  const tool = findSofa14AdminTool(toolSlug ?? 'reports');
  const [toast, setToast] = useState('');
  const [period, setPeriod] = useState('12 months');
  const [notificationSearch, setNotificationSearch] = useState('');
  const [notificationLevel, setNotificationLevel] = useState('all');
  const [settings, setSettings] = useState<SettingsValues>(() =>
    Object.fromEntries(SOFA14_SETTINGS_FIELDS.map((field) => [field.key, field.value]))
  );
  const [toggles, setToggles] = useState<ToggleValues>(() =>
    Object.fromEntries(SOFA14_SETTINGS_TOGGLES.map((item) => [item.key, item.on]))
  );

  const notifications = useMemo(
    () =>
      SOFA14_NOTIFICATIONS.filter((item) => {
        const matchesText = `${item.type} ${item.text}`
          .toLowerCase()
          .includes(notificationSearch.toLowerCase());
        const matchesLevel = notificationLevel === 'all' || item.level === notificationLevel;
        return matchesText && matchesLevel;
      }),
    [notificationLevel, notificationSearch]
  );

  if (!tool) {
    return <Navigate to={`${SOFA14_ADMIN_ROOT}/tools/reports`} replace />;
  }

  const saveSettings = () => setToast('System settings saved.');
  const changePassword = () => setToast('Password reset link sent to admin email.');
  const endSession = () => setToast('Requested logout of other sessions.');

  const renderReports = () => (
    <Stack spacing={3}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
        <Box>
          <Typography variant="h6">Report center</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Track business health and make faster decisions.
          </Typography>
        </Box>
        <TextField
          select
          size="small"
          label="Period"
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
          sx={{ minWidth: 150 }}
        >
          {['7 days', '30 days', '12 months'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Grid container spacing={2}>
        {[
          { label: 'Net revenue', value: '7,2 tỷ ₫', trend: '+12%', icon: 'solar:wallet-money-bold-duotone' },
          { label: 'Avg order value', value: '16,8 million ₫', trend: '+4%', icon: 'solar:bill-list-bold-duotone' },
          { label: 'Repeat customers', value: '64%', trend: '+5%', icon: 'solar:users-group-two-rounded-bold-duotone' },
          { label: 'Conversion rate', value: '2,48%', trend: '+0,5%', icon: 'solar:graph-up-bold-duotone' },
        ].map((item) => (
          <Grid key={item.label} xs={12} sm={6} md={3}>
            <Card sx={{ p: 2.5, height: 1 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.label}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1, color: SURFACE }}>
                    {item.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700 }}>
                    {item.trend} vs previous
                  </Typography>
                </Box>
                <Box sx={{ color: ACCENT }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Sofa14AdminRevenueChart />
        </Grid>
        <Grid xs={12} md={4}>
          <Sofa14AdminFunnel />
        </Grid>
      </Grid>
      <Sofa14AdminCharts />
    </Stack>
  );

  const renderSettings = () => (
    <Stack spacing={3}>
      <Card>
        <CardHeader
          title="Operations info"
          subheader="Used across the website, invoices and customer service."
        />
        <Divider />
        <Grid container spacing={2.5} sx={{ p: 3 }}>
          {SOFA14_SETTINGS_FIELDS.map((field) => (
            <Grid key={field.key} xs={12} md={6}>
              <TextField
                fullWidth
                label={field.label}
                value={settings[field.key] ?? ''}
                helperText={field.helper}
                onChange={(event) =>
                  setSettings((previous) => ({ ...previous, [field.key]: event.target.value }))
                }
              />
            </Grid>
          ))}
        </Grid>
      </Card>
      <Card>
        <CardHeader title="System features" subheader="Toggle customer-facing functionality." />
        <Divider />
        <Grid container spacing={1} sx={{ p: 2.5 }}>
          {SOFA14_SETTINGS_TOGGLES.map((item) => (
            <Grid key={item.key} xs={12} md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 1, py: 1.25 }}
              >
                <Box sx={{ pr: 2 }}>
                  <Typography variant="subtitle2">{item.label}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.desc}
                  </Typography>
                </Box>
                <Switch
                  checked={Boolean(toggles[item.key])}
                  onChange={(event) =>
                    setToggles((previous) => ({ ...previous, [item.key]: event.target.checked }))
                  }
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="flex-end" sx={{ p: 2.5, pt: 0 }}>
          <Button variant="contained" onClick={saveSettings} startIcon={<Iconify icon="solar:diskette-bold-duotone" />}>
            Save settings
          </Button>
        </Stack>
      </Card>
    </Stack>
  );

  const renderNotifications = () => (
    <Card>
      <CardHeader title="Notifications & Log" subheader="Events that need your attention." />
      <Divider />
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ p: 2.5 }}>
        <TextField
          size="small"
          value={notificationSearch}
          onChange={(event) => setNotificationSearch(event.target.value)}
          placeholder="Search notifications..."
          sx={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={18} />
              </InputAdornment>
            ),
          }}
        />
        <Tabs value={notificationLevel} onChange={(_, value) => setNotificationLevel(value)} variant="scrollable">
          <Tab value="all" label="All" />
          <Tab value="warning" label="Warnings" />
          <Tab value="error" label="Security" />
        </Tabs>
      </Stack>
      <Stack divider={<Divider />}>
        {notifications.map((item) => (
          <Stack key={`${item.time}-${item.text}`} direction="row" spacing={2} alignItems="flex-start" sx={{ px: 3, py: 2 }}>
            <Box sx={{ color: `${toneColor(item.level)}.main`, pt: 0.25 }}>
              <Iconify
                icon={item.level === 'error' ? 'solar:shield-warning-bold-duotone' : 'solar:bell-bing-bold-duotone'}
                width={22}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" useFlexGap>
                <Typography variant="subtitle2">{item.type}</Typography>
                <Chip size="small" label={item.level === 'error' ? 'High priority' : item.level === 'warning' ? 'Attention' : 'Logged'} color={toneColor(item.level) as any} variant="soft" />
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                {item.text}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap' }}>
              {item.time}
            </Typography>
          </Stack>
        ))}
        {!notifications.length && (
          <Typography sx={{ p: 5, textAlign: 'center', color: 'text.secondary' }}>
            No matching notifications.
          </Typography>
        )}
      </Stack>
    </Card>
  );

  const renderProfile = () => (
    <Grid container spacing={3}>
      <Grid xs={12} md={5}>
        <Card sx={{ p: 3, height: 1 }}>
          <Stack alignItems="center" spacing={1.5} sx={{ textAlign: 'center' }}>
            <Box sx={{ width: 84, height: 84, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'warning.lighter', color: ACCENT }}>
              <Typography variant="h3">EV</Typography>
            </Box>
            <Typography variant="h6">{SOFA14_PROFILE.name}</Typography>
            <Chip label={SOFA14_PROFILE.role} color="warning" variant="soft" />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{SOFA14_PROFILE.email}</Typography>
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack spacing={1.5}>
            {[
              ['Phone', SOFA14_PROFILE.phone],
              ['Team', SOFA14_PROFILE.team],
              ['Joined', SOFA14_PROFILE.joined],
            ].map(([label, value]) => (
              <Stack key={label} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{label}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'right' }}>{value}</Typography>
              </Stack>
            ))}
          </Stack>
          <Stack spacing={1.5} sx={{ mt: 3 }}>
            <Button variant="outlined" onClick={changePassword} startIcon={<Iconify icon="solar:lock-keyhole-minimalistic-bold-duotone" />}>
              Change password
            </Button>
            <Button color="error" variant="outlined" onClick={endSession} startIcon={<Iconify icon="solar:logout-3-bold-duotone" />}>
              Logout other sessions
            </Button>
          </Stack>
        </Card>
      </Grid>
      <Grid xs={12} md={7}>
        <Stack spacing={3}>
          <Card>
            <CardHeader title="Access permissions" subheader="Business areas this account can manage." />
            <Divider />
            <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} sx={{ p: 3 }}>
              {SOFA14_PROFILE.permissions.map((permission) => (
                <Chip key={permission} label={permission} color="warning" variant="soft" icon={<Iconify icon="solar:check-circle-bold" width={16} />} />
              ))}
            </Stack>
          </Card>
          <Card>
            <CardHeader title="Login sessions" subheader="Devices that have accessed this admin account." />
            <Divider />
            <Stack divider={<Divider />}>
              {SOFA14_PROFILE.sessions.map((session) => (
                <Stack key={session.device} direction="row" spacing={1.5} alignItems="center" sx={{ p: 2.5 }}>
                  <Iconify icon="solar:laptop-minimalistic-bold-duotone" width={24} color={ACCENT} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2">{session.device}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{session.place}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: session.time === 'Active now' ? 'success.main' : 'text.secondary' }}>{session.time}</Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );

  const renderers: Record<string, () => JSX.Element> = {
    reports: renderReports,
    settings: renderSettings,
    notifications: renderNotifications,
    profile: renderProfile,
  };

  const content = (renderers[tool.slug] ?? renderReports)();

  return (
    <>
      <Helmet>
        <title>{`${tool.name} | Sofa Noir Admin`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Sofa14AdminLayout
        title={tool.name}
        subtitle={tool.description}
        breadcrumb={['Utilities', tool.name]}
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 0.5 }}>
            {SOFA14_ADMIN_TOOLS.map((item) => (
              <Button
                key={item.slug}
                href={`${SOFA14_ADMIN_ROOT}/tools/${item.slug}`}
                variant={item.slug === tool.slug ? 'contained' : 'outlined'}
                color={item.slug === tool.slug ? 'warning' : 'inherit'}
                startIcon={<Iconify icon={item.icon} width={18} />}
                sx={{ whiteSpace: 'nowrap' }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          {content}
        </Stack>
      </Sofa14AdminLayout>
      <Snackbar open={Boolean(toast)} autoHideDuration={3500} onClose={() => setToast('')}>
        <Alert severity="success" onClose={() => setToast('')}>
          {toast}
        </Alert>
      </Snackbar>
    </>
  );
}
