import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress from '@mui/material/LinearProgress';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { Sofa10AdminCharts } from './sofa10-admin-charts';
import { Sofa10AdminFunnel, Sofa10AdminRevenueChart } from './sofa10-admin-insights';
import {
  Sofa10AdminLayout,
  Sofa10AdminHeading,
  Sofa10AdminKpis,
} from '../sofa10-admin-layout';
import {
  SOFA10_ADMIN_GROUPS,
  SOFA10_ADMIN_KPIS,
  SOFA10_ADMIN_ACTIVITIES,
} from '../sofa10-admin-config';

const ACCENT = '#7C8A6B';

export function Sofa10AdminDashboardView() {
  return (
    <>
      <Helmet>
        <title>Trung tâm quản trị | Sofa10</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa10AdminLayout>
        <Sofa10AdminHeading
          title="Tổng quan hệ thống"
          description="Bảng điều khiển quản trị Sofa10 — Wabi-Sabi Japanese Sofa"
          breadcrumb={[{ name: 'Admin' }, { name: 'Tổng quan' }]}
        />

        <Sofa10AdminKpis items={SOFA10_ADMIN_KPIS.map((k) => ({ label: k.label, value: k.value, note: k.note }))} />

        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid xs={12} md={8}>
            <Sofa10AdminRevenueChart />
          </Grid>
          <Grid xs={12} md={4}>
            <Sofa10AdminFunnel />
          </Grid>
          <Grid xs={12}>
            <Sofa10AdminCharts />
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2.5 }}>
                Nhóm chức năng quản trị
              </Typography>
              <Grid container spacing={2}>
                {SOFA10_ADMIN_GROUPS.map((group) => (
                  <Grid key={group.slug} xs={12} sm={6}>
                    <ButtonBase
                      component={RouterLink}
                      href={`/sofa10/admin/${group.slug}/${group.sections[0].slug}`}
                      sx={{
                        width: 1,
                        p: 2,
                        gap: 2,
                        borderRadius: 2,
                        textAlign: 'left',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all .2s',
                        '&:hover': { borderColor: ACCENT, bgcolor: (theme) => `${theme.palette.primary.lighter}` },
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          flexShrink: 0,
                          borderRadius: 1.5,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'primary.lighter',
                          color: 'primary.main',
                        }}
                      >
                        <Iconify icon={group.icon} width={24} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="subtitle1">{group.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {group.sections.map((m) => m.name).join(' · ')}
                        </Typography>
                      </Box>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          <Grid xs={12} md={4}>
            <Card sx={{ p: 3, height: 1 }}>
              <Typography variant="h6" sx={{ mb: 2.5 }}>
                Hoạt động gần đây
              </Typography>
              <Stack spacing={2.5}>
                {SOFA10_ADMIN_ACTIVITIES.map((item) => (
                  <Stack key={item.text} direction="row" spacing={1.5}>
                    <Box
                      sx={{
                        mt: 0.75,
                        width: 8,
                        height: 8,
                        flexShrink: 0,
                        borderRadius: '50%',
                        bgcolor: ACCENT,
                      }}
                    />
                    <Box>
                      <Typography variant="body2">{item.text}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {item.time} · {item.tag}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Box sx={{ mt: 4 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Typography variant="body2">Mục tiêu doanh thu tháng</Typography>
                  <Typography variant="subtitle2">72%</Typography>
                </Stack>
                <LinearProgress
                  value={72}
                  variant="determinate"
                  sx={{ height: 8, borderRadius: 1, [`& .MuiLinearProgress-bar`]: { bgcolor: ACCENT } }}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Sofa10AdminLayout>
    </>
  );
}
