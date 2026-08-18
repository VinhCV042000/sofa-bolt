import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Chart, useChart } from 'src/components/chart';

import { SOFA5_ADMIN_THEME } from './sofa5-admin-layout';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA5_ADMIN_THEME;

const MONTHS = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];

export function Sofa5AdminCharts() {
  const revenueOptions = useChart({
    colors: [ACCENT, '#B08D57'],
    stroke: { width: 3, curve: 'smooth' },
    xaxis: { categories: MONTHS },
    yaxis: {
      labels: { formatter: (value: number) => `${Math.round(value / 1000)}tỷ` },
    },
    tooltip: {
      y: { formatter: (value: number) => `${value.toLocaleString('vi-VN')} triệu ₫` },
    },
    legend: { show: true, position: 'top', horizontalAlign: 'right' },
  });

  const channelOptions = useChart({
    colors: [ACCENT, '#B08D57', '#7A2E2E', '#E3D9C6'],
    labels: ['Showroom', 'Website', 'Đại lý B2B', 'Sàn TMĐT'],
    legend: { position: 'bottom' },
    plotOptions: { pie: { donut: { size: '72%' } } },
    tooltip: { y: { formatter: (value: number) => `${value}%` } },
  });

  const ordersOptions = useChart({
    colors: [SURFACE],
    plotOptions: { bar: { columnWidth: '44%', borderRadius: 4 } },
    xaxis: { categories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'] },
    tooltip: { y: { formatter: (value: number) => `${value} đơn` } },
  });

  return (
    <>
      <Grid xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Doanh thu theo tháng (triệu ₫)
          </Typography>
          <Chart
            type="area"
            height={320}
            options={revenueOptions}
            series={[
              {
                name: 'Năm nay',
                data: [1820, 2140, 2380, 2260, 2720, 3040, 3310, 3180, 3460, 3820, 4150, 4620],
              },
              {
                name: 'Năm trước',
                data: [1480, 1620, 1840, 1910, 2080, 2260, 2410, 2380, 2620, 2840, 3080, 3320],
              },
            ]}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <Card sx={{ p: 3, height: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Nguồn doanh thu
          </Typography>
          <Chart type="donut" height={320} options={channelOptions} series={[38, 29, 22, 11]} />
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Đơn hàng 7 ngày gần nhất
          </Typography>
          <Chart
            type="bar"
            height={260}
            options={ordersOptions}
            series={[{ name: 'Đơn hàng', data: [24, 31, 28, 42, 46, 58, 37] }]}
          />
        </Card>
      </Grid>
    </>
  );
}
