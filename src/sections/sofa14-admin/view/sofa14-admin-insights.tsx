import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Chart, useChart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';

import {
  SOFA14_ADMIN_ROOT,
  SOFA14_ADMIN_CHART_MONTHS,
  SOFA14_ADMIN_REVENUE_SERIES,
} from '../sofa14-admin-data';
import { SOFA14_ADMIN_TOOLS, SOFA14_ADMIN_FUNNEL } from '../sofa14-admin-tools';

// ----------------------------------------------------------------------

const ACCENT = '#C9A84C';
const EMERALD = '#0E5C46';
const SURFACE = '#222228';

const currency = (value: number) => `${value.toFixed(1)} tỷ ₫`;

/** Revenue chart: actual bars + target line + cumulative line */
export function Sofa14AdminRevenueChart() {
  const actual = SOFA14_ADMIN_REVENUE_SERIES[0].data;
  const target = SOFA14_ADMIN_REVENUE_SERIES[1].data;

  const cumulative = actual.reduce<number[]>((acc, value) => {
    acc.push(Number(((acc[acc.length - 1] ?? 0) + value).toFixed(1)));
    return acc;
  }, []);

  const total = cumulative[cumulative.length - 1] ?? 0;
  const totalTarget = target.reduce((sum, value) => sum + value, 0);
  const completion = Math.round((total / totalTarget) * 100);

  const options = useChart({
    colors: [ACCENT, EMERALD, alpha(SURFACE, 0.6)],
    stroke: { width: [0, 3, 2], dashArray: [0, 0, 6] },
    xaxis: { categories: SOFA14_ADMIN_CHART_MONTHS },
    plotOptions: { bar: { columnWidth: '42%', borderRadius: 4 } },
    legend: { show: true, position: 'top', horizontalAlign: 'right' },
    yaxis: [
      {
        seriesName: 'Revenue',
        min: 0,
        max: Math.ceil(Math.max(...actual, ...target) + 1),
        labels: { formatter: (value: number) => `${value.toFixed(0)} tỷ` },
      },
      {
        seriesName: 'Revenue',
        show: false,
        min: 0,
        max: Math.ceil(Math.max(...actual, ...target) + 1),
      },
      {
        opposite: true,
        seriesName: 'Cumulative',
        min: 0,
        labels: { formatter: (value: number) => `${value.toFixed(0)} tỷ` },
      },
    ],
    tooltip: { y: { formatter: (value: number) => currency(value) } },
  });

  return (
    <Card>
      <CardHeader
        title="Revenue detail"
        subheader={`Actual · target · cumulative 12 months — ${completion}% of annual plan`}
      />
      <Chart
        type="line"
        height={360}
        options={options}
        series={[
          { name: 'Revenue', type: 'column', data: actual },
          { name: 'Target', type: 'line', data: target },
          { name: 'Cumulative', type: 'line', data: cumulative },
        ]}
        sx={{ px: 2, pb: 2 }}
      />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ p: 2.5 }} spacing={3}>
        {[
          { label: 'Total annual revenue', value: currency(total) },
          { label: 'Annual target', value: currency(totalTarget) },
          { label: 'Peak month', value: currency(Math.max(...actual)) },
          { label: 'End-of-period growth', value: `+${Math.round(((actual[actual.length - 1] - actual[0]) / actual[0]) * 100)}%` },
        ].map((item) => (
          <Box key={item.label} sx={{ minWidth: 140 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {item.label}
            </Typography>
            <Typography variant="h6" sx={{ color: SURFACE }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

/** Conversion funnel from visits to completed orders */
export function Sofa14AdminFunnel() {
  const top = SOFA14_ADMIN_FUNNEL[0].value;

  return (
    <Card sx={{ height: 1 }}>
      <CardHeader
        title="Conversion funnel"
        subheader="Customer journey in the last 30 days"
      />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOFA14_ADMIN_FUNNEL.map((step, index) => {
          const ratio = (step.value / top) * 100;
          const previous = SOFA14_ADMIN_FUNNEL[index - 1];
          const stepRate = previous ? (step.value / previous.value) * 100 : 100;

          return (
            <Box key={step.label}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.75 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon={step.icon} width={18} sx={{ color: ACCENT }} />
                  <Typography variant="subtitle2">{step.label}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="baseline">
                  <Typography variant="subtitle2" sx={{ color: SURFACE }}>
                    {step.value.toLocaleString('vi-VN')}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: index === 0 ? 'text.disabled' : stepRate < 50 ? 'error.main' : 'success.main' }}
                  >
                    {index === 0 ? 'start' : `${stepRate.toFixed(1)}% from previous`}
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  height: 34,
                  borderRadius: 1,
                  overflow: 'hidden',
                  bgcolor: alpha(SURFACE, 0.06),
                }}
              >
                <Box
                  sx={{
                    height: 1,
                    width: `${Math.max(ratio, 6)}%`,
                    display: 'flex',
                    alignItems: 'center',
                    px: 1.5,
                    color: '#0B0B0D',
                    fontSize: 12,
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${ACCENT}, ${EMERALD})`,
                    transition: 'width .4s ease',
                  }}
                >
                  {ratio.toFixed(1)}%
                </Box>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {step.desc}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

/** Quick links to admin utility pages */
export function Sofa14AdminQuickLinks() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2.5 }}>
        Quick access
      </Typography>
      <Grid container spacing={2}>
        {SOFA14_ADMIN_TOOLS.map((tool) => (
          <Grid key={tool.slug} xs={12} sm={6} md={3}>
            <ButtonBase
              component={RouterLink}
              href={`${SOFA14_ADMIN_ROOT}/tools/${tool.slug}`}
              sx={{
                width: 1,
                height: 1,
                p: 2,
                gap: 1.5,
                borderRadius: 2,
                textAlign: 'left',
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: `1px solid ${alpha(SURFACE, 0.16)}`,
                transition: 'all .2s',
                '&:hover': { borderColor: ACCENT, bgcolor: alpha(ACCENT, 0.06) },
              }}
            >
              <Box sx={{ color: ACCENT }}>
                <Iconify icon={tool.icon} width={26} />
              </Box>
              <Typography variant="subtitle2">{tool.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {tool.description}
              </Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
