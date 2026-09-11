import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Chart, useChart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';

import {
  SOFA10_ADMIN_CHART_MONTHS,
  SOFA10_ADMIN_REVENUE_SERIES,
  SOFA10_ADMIN_FUNNEL,
} from '../sofa10-admin-config';

const ACCENT = '#7C8A6B';
const SAGE = '#C4A882';
const SURFACE = '#3E4C3C';

const currency = (value: number) => `${value.toFixed(1)} tỷ ₫`;

export function Sofa10AdminRevenueChart() {
  const actual = SOFA10_ADMIN_REVENUE_SERIES[0].data;
  const target = SOFA10_ADMIN_REVENUE_SERIES[1].data;

  const cumulative = actual.reduce<number[]>((acc, value) => {
    acc.push(Number(((acc[acc.length - 1] ?? 0) + value).toFixed(1)));
    return acc;
  }, []);

  const total = cumulative[cumulative.length - 1] ?? 0;
  const totalTarget = target.reduce((sum, value) => sum + value, 0);
  const completion = Math.round((total / totalTarget) * 100);

  const options = useChart({
    colors: [ACCENT, SAGE, alpha(SURFACE, 0.6)],
    stroke: { width: [0, 3, 2], dashArray: [0, 0, 6] },
    xaxis: { categories: SOFA10_ADMIN_CHART_MONTHS },
    plotOptions: { bar: { columnWidth: '42%', borderRadius: 4 } },
    legend: { show: true, position: 'top', horizontalAlign: 'right' },
    yaxis: [
      { seriesName: 'Doanh thu', min: 0, max: Math.ceil(Math.max(...actual, ...target) + 1), labels: { formatter: (value: number) => `${value.toFixed(0)} tỷ` } },
      { seriesName: 'Doanh thu', show: false, min: 0, max: Math.ceil(Math.max(...actual, ...target) + 1) },
      { opposite: true, seriesName: 'Luỹ kế', min: 0, labels: { formatter: (value: number) => `${value.toFixed(0)} tỷ` } },
    ],
    tooltip: { y: { formatter: (value: number) => currency(value) } },
  });

  return (
    <Card>
      <CardHeader
        title="Doanh thu chi tiết"
        subheader={`Thực tế · mục tiêu · luỹ kế 12 tháng — đạt ${completion}% kế hoạch năm`}
      />
      <Chart
        type="line"
        height={360}
        options={options}
        series={[
          { name: 'Doanh thu', type: 'column', data: actual },
          { name: 'Mục tiêu', type: 'line', data: target },
          { name: 'Luỹ kế', type: 'line', data: cumulative },
        ]}
        sx={{ px: 2, pb: 2 }}
      />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ p: 2.5 }} spacing={3}>
        {[
          { label: 'Tổng doanh thu năm', value: currency(total) },
          { label: 'Mục tiêu năm', value: currency(totalTarget) },
          { label: 'Tháng cao nhất', value: currency(Math.max(...actual)) },
          { label: 'Tăng trưởng cuối kỳ', value: `+${Math.round(((actual[actual.length - 1] - actual[0]) / actual[0]) * 100)}%` },
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

export function Sofa10AdminFunnel() {
  const top = SOFA10_ADMIN_FUNNEL[0].value;

  return (
    <Card sx={{ height: 1 }}>
      <CardHeader title="Phễu chuyển đổi" subheader="Hành trình khách hàng trong 30 ngày gần nhất" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOFA10_ADMIN_FUNNEL.map((step, index) => {
          const ratio = (step.value / top) * 100;
          const previous = SOFA10_ADMIN_FUNNEL[index - 1];
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
                    {index === 0 ? 'điểm bắt đầu' : `${stepRate.toFixed(1)}% từ bước trước`}
                  </Typography>
                </Stack>
              </Stack>
              <Box sx={{ height: 34, borderRadius: 1, overflow: 'hidden', bgcolor: alpha(SURFACE, 0.06) }}>
                <Box
                  sx={{
                    height: 1,
                    width: `${Math.max(ratio, 6)}%`,
                    display: 'flex',
                    alignItems: 'center',
                    px: 1.5,
                    color: '#FFF',
                    fontSize: 12,
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${ACCENT}, ${SAGE})`,
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
