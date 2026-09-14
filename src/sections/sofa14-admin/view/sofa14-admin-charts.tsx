import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { Chart, useChart } from 'src/components/chart';

import {
  SOFA14_ADMIN_CHART_MONTHS,
  SOFA14_ADMIN_TOP_PRODUCTS,
  SOFA14_ADMIN_ORDER_SERIES,
  SOFA14_ADMIN_CHANNEL_CHART,
  SOFA14_ADMIN_REVENUE_SERIES,
} from '../sofa14-admin-data';

// ----------------------------------------------------------------------

const PALETTE = ['#7FE3C4', '#FF9C8A', '#3B3357', '#FFD98E', '#2B2440'];

export function Sofa14AdminCharts() {
  const revenueOptions = useChart({
    colors: [PALETTE[0], PALETTE[1]],
    stroke: { width: [3, 2], dashArray: [0, 5] },
    xaxis: { categories: SOFA14_ADMIN_CHART_MONTHS },
    legend: { show: true },
  });

  const orderOptions = useChart({
    colors: [PALETTE[2]],
    xaxis: { categories: SOFA14_ADMIN_CHART_MONTHS },
    plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
  });

  const channelOptions = useChart({
    colors: PALETTE,
    labels: SOFA14_ADMIN_CHANNEL_CHART.labels,
    stroke: { width: 0 },
    legend: { position: 'bottom', horizontalAlign: 'center' },
    tooltip: { y: { formatter: (value: number) => `${value}%` } },
  });

  const topProductOptions = useChart({
    colors: [PALETTE[1]],
    xaxis: { categories: SOFA14_ADMIN_TOP_PRODUCTS.labels },
    plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 4 } },
  });

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Card>
          <CardHeader
            title="Revenue by month"
            subheader="Actual vs target (unit: billion VND)"
          />
          <Chart
            type="line"
            series={SOFA14_ADMIN_REVENUE_SERIES}
            options={revenueOptions}
            height={320}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <Card sx={{ height: 1 }}>
          <CardHeader title="Traffic / order sources" subheader="Share by channel (%)" />
          <Chart
            type="donut"
            series={SOFA14_ADMIN_CHANNEL_CHART.series}
            options={channelOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <CardHeader title="Orders" subheader="Total orders per month" />
          <Chart
            type="bar"
            series={SOFA14_ADMIN_ORDER_SERIES}
            options={orderOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <CardHeader title="Best sellers" subheader="Units sold in 90 days" />
          <Chart
            type="bar"
            series={[{ name: 'Sold', data: SOFA14_ADMIN_TOP_PRODUCTS.series }]}
            options={topProductOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap" spacing={2}>
            {[
              { label: 'Avg order value', value: '16.8tr' },
              { label: 'Retention rate', value: '64%' },
              { label: 'Return / exchange', value: '1.6%' },
              { label: 'Available stock', value: '3.120' },
            ].map((item) => (
              <Stack key={item.label} spacing={0.5}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {item.label}
                </Typography>
                <Typography variant="h5">{item.value}</Typography>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
