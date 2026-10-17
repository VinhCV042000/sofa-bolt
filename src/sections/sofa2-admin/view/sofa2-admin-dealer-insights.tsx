import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';

import { Chart, useChart } from 'src/components/chart';

import type { AdminRow } from '../sofa2-admin-store';

type Props = { moduleSlug: string; rows: AdminRow[] };

const text = (value: unknown) => String(value ?? '').trim();
const number = (value: unknown) => Number(text(value).replace(/[^\d.-]/g, '')) || 0;

const currency = (value: number) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(value);

export function Sofa2AdminDealerInsights({ moduleSlug, rows }: Props) {
  const dealers = rows.slice(0, 10);
  const labels = dealers.map((row) => text(row.dealer) || 'Đại lý chưa đặt tên');
  const targetSeries = dealers.map((row) => number(row.target));
  const achievedSeries = dealers.map((row) => number(row.achieved));
  const statusEntries = Object.entries(
    rows.reduce<Record<string, number>>((counts, row) => {
      const status = text(row.status) || 'Chưa phân loại';
      counts[status] = (counts[status] ?? 0) + 1;
      return counts;
    }, {})
  );

  const revenueOptions = useChart({
    colors: ['#A6634A', '#222222'],
    xaxis: {
      categories: labels,
      labels: {
        formatter: (value: string) => {
          const amount = Number(value);
          if (!Number.isFinite(amount)) return value;
          if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(1)} tỷ`;
          if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(0)} tr`;
          return amount.toLocaleString('vi-VN');
        },
      },
    },
    plotOptions: { bar: { horizontal: true, barHeight: '58%', borderRadius: 4 } },
    dataLabels: { enabled: false },
    legend: { position: 'top', horizontalAlign: 'right' },
    tooltip: { y: { formatter: (value: number) => currency(value) } },
  });

  const statusOptions = useChart({
    colors: ['#2E7D32', '#A6634A', '#ED6C02', '#757575', '#C62828'],
    labels: statusEntries.map(([status]) => status),
    stroke: { width: 0 },
    legend: { position: 'bottom', horizontalAlign: 'center' },
    dataLabels: { enabled: true },
  });

  if (moduleSlug !== 'dashboard') return null;

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Card>
          <CardHeader
            title="Doanh số theo đại lý"
            subheader="So sánh doanh số đã đạt với chỉ tiêu tháng"
          />
          <Chart
            type="bar"
            series={[
              { name: 'Đã đạt', data: achievedSeries },
              { name: 'Chỉ tiêu', data: targetSeries },
            ]}
            options={revenueOptions}
            height={Math.max(300, dealers.length * 42)}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>

      <Grid xs={12} md={4}>
        <Card sx={{ height: 1 }}>
          <CardHeader title="Tình trạng đại lý" subheader="Phân loại theo trạng thái hiện tại" />
          <Chart
            type="donut"
            series={statusEntries.map(([, count]) => count)}
            options={statusOptions}
            height={300}
            sx={{ px: 2, pb: 2 }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
