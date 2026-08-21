import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress from '@mui/material/LinearProgress';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { Sofa6AdminCharts } from './sofa6-admin-charts';
import { Sofa6AdminLayout, SOFA6_ADMIN_THEME } from './sofa6-admin-layout';
import {
  SOFA6_ADMIN_KPIS,
  SOFA6_ADMIN_ROOT,
  SOFA6_ADMIN_GROUPS,
  SOFA6_ADMIN_ACTIVITIES,
} from '../sofa6-admin-data';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA6_ADMIN_THEME;

export function Sofa6AdminDashboardView() {
  const { pathname } = useLocation();
  const adminRoot = pathname.startsWith('/sofa10')
    ? '/sofa10/admin'
    : pathname.startsWith('/sofa9')
    ? '/sofa9/admin'
    : pathname.startsWith('/sofa8')
      ? '/sofa8/admin'
    : pathname.startsWith('/sofa7')
      ? '/sofa7/admin'
      : SOFA6_ADMIN_ROOT;
  const brandName = pathname.startsWith('/sofa10')
    ? 'Sofa10'
    : pathname.startsWith('/sofa9')
    ? 'Sofa9'
    : pathname.startsWith('/sofa8')
      ? 'Sofa8'
      : pathname.startsWith('/sofa7')
        ? 'Sofa7'
        : 'Sofa6';

  return (
    <>
      <Helmet>
        <title>{`Trung tâm quản trị | ${brandName}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Sofa6AdminLayout
        title="Tổng quan hệ thống"
        subtitle="Bảng điều khiển tổng hợp toàn bộ nghiệp vụ: nội dung, sản phẩm, kho, đơn hàng, CRM, marketing, phân tích, SEO và phân quyền."
      >
        <Grid container spacing={3}>
          {SOFA6_ADMIN_KPIS.map((kpi) => (
            <Grid key={kpi.label} xs={12} sm={6} md={3}>
              <Card sx={{ p: 3, borderTop: `3px solid ${ACCENT}` }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {kpi.label}
                </Typography>
                <Typography variant="h3" sx={{ my: 1, color: SURFACE }}>
                  {kpi.value}
                </Typography>
                <Chip
                  size="small"
                  label={kpi.trend}
                  color={kpi.color}
                  variant="soft"
                  icon={<Iconify icon="solar:arrow-right-up-bold-duotone" width={14} />}
                />
              </Card>
            </Grid>
          ))}

          <Grid xs={12}>
            <Sofa6AdminCharts />
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2.5 }}>
                Nhóm chức năng quản trị
              </Typography>
              <Grid container spacing={2}>
                {SOFA6_ADMIN_GROUPS.map((group) => (
                  <Grid key={group.slug} xs={12} sm={6}>
                    <ButtonBase
                      component={RouterLink}
                      href={`${adminRoot}/${group.slug}/${group.modules[0].slug}`}
                      sx={{
                        width: 1,
                        p: 2,
                        gap: 2,
                        borderRadius: 2,
                        textAlign: 'left',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        border: `1px solid ${alpha('#A6634A', 0.2)}`,
                        transition: 'all .2s',
                        '&:hover': { borderColor: ACCENT, bgcolor: alpha(ACCENT, 0.06) },
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
                          bgcolor: alpha(ACCENT, 0.14),
                          color: '#A6634A',
                        }}
                      >
                        <Iconify icon={group.icon} width={24} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="subtitle1">{group.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {group.modules.map((m) => m.name).join(' · ')}
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
                {SOFA6_ADMIN_ACTIVITIES.map((item) => (
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
                  <Typography variant="subtitle2">68%</Typography>
                </Stack>
                <LinearProgress
                  value={68}
                  variant="determinate"
                  sx={{ height: 8, borderRadius: 1, [`& .MuiLinearProgress-bar`]: { bgcolor: ACCENT } }}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Sofa6AdminLayout>
    </>
  );
}
