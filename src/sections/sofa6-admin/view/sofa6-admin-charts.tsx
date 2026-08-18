import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { Chart, useChart } from 'src/components/chart';

import {
  SOFA6_ADMIN_CHART_MONTHS,
  SOFA6_ADMIN_TOP_PRODUCTS,
  SOFA6_ADMIN_ORDER_SERIES,
  SOFA6_ADMIN_CHANNEL_CHART,
  SOFA6_ADMIN_REVENUE_SERIES,
} from '../sofa6-admin-data';

// ----------------------------------------------------------------------

const PALETTE = ['#E07A4F', '#5B7553', '#A6634A', '#8BA888', '#3D2817'];

export function Sofa6AdminCharts() {
  const revenueOptions = useChart({
    colors: [PALETTE[0], PALETTE[1]],
    stroke: { width: [3, 2], dashArray: [0, 5] },
    xaxis: { categories: SOFA6_ADMIN_CHART_MONTHS },
    legend: { show: true },
  });

  const orderOptions = useChart({
    colors: [PALETTE[2]],
    xaxis: { categories: SOFA6_ADMIN_CHART_MONTHS },
    plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
  });

  const channelOptions = useChart({
    colors: PALETTE,
    labels: SOFA6_ADMIN_CHANNEL_CHART.labels,
    stroke: { width: 0 },
    legend: { position: 'bottom', horizontalAlign: 'center' },
    tooltip: { y: { formatter: (value: number) => `${value}%` } },
  });

  const topProductOptions = useChart({
    colors: [PALETTE[1]],
    xaxis: { categories: SOFA6_ADMIN_TOP_PRODUCTS.labels },
    plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 4 } },
  });

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Card>
          <CardHeader
            title="Doanh thu theo tháng"
            subheader="So sánh doanh thu thực tế với mục tiêu (đơn vị: tỷ đồng)"
          />
          <Chart
            type="line"
            series={SOFA6_ADMIN_REVENUE_SERIES}
            options={revenueOptions}
            height={320}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <Card sx={{ height: 1 }}>
          <CardHeader title="Nguồn truy cập / đặt hàng" subheader="Tỷ trọng theo kênh (%)" />
          <Chart
            type="donut"
            series={SOFA6_ADMIN_CHANNEL_CHART.series}
            options={channelOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <CardHeader title="Số đơn hàng" subheader="Tổng đơn mỗi tháng" />
          <Chart
            type="bar"
            series={SOFA6_ADMIN_ORDER_SERIES}
            options={orderOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={6}>
        <Card>
          <CardHeader title="Sản phẩm bán chạy" subheader="Số lượng bán trong 90 ngày" />
          <Chart
            type="bar"
            series={[{ name: 'Đã bán', data: SOFA6_ADMIN_TOP_PRODUCTS.series }]}
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
              { label: 'Giá trị đơn trung bình', value: '14.2tr' },
              { label: 'Tỷ lệ giữ khách', value: '62%' },
              { label: 'Đơn hoàn / đổi trả', value: '1.8%' },
              { label: 'Tồn kho khả dụng', value: '3.482' },
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
