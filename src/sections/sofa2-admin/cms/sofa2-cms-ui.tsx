import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { CmsStatus } from './sofa2-cms-types';

// ----------------------------------------------------------------------

export const cmsStatusColor = (status: string) => {
  if (status === 'Đã xuất bản') return 'success';
  if (status === 'Bản nháp' || status === 'Chờ duyệt') return 'warning';
  return 'default';
};

export function CmsStatusChip({ status }: { status: CmsStatus | string }) {
  return <Chip size="small" label={status} color={cmsStatusColor(status) as any} variant="soft" />;
}

type PanelProps = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export function CmsPanel({ title, action, children }: PanelProps) {
  return (
    <Card sx={{ p: { xs: 2, md: 3 } }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2.5 }}
      >
        <Typography variant="h6">{title}</Typography>
        {action}
      </Stack>
      {children}
    </Card>
  );
}
