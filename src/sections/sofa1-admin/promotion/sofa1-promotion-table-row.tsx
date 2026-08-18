import type { GridCellParams } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

import { SOFA1_PROMOTION_STATUS_OPTIONS } from 'src/_mock/_sofa1';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellSofa1PromotionStatus({ params }: ParamsProps) {
  const status = SOFA1_PROMOTION_STATUS_OPTIONS.find(
    (option) => option.value === params.row.status
  );

  return (
    <Label
      variant="soft"
      color={
        (params.row.status === 'active' && 'success') ||
        (params.row.status === 'upcoming' && 'info') ||
        'default'
      }
    >
      {status?.label || params.row.status}
    </Label>
  );
}

export function RenderCellSofa1PromotionCreatedAt({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{fDate(params.row.createdAt)}</Box>
      <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
        {fTime(params.row.createdAt)}
      </Box>
    </Stack>
  );
}

export function RenderCellSofa1Promotion({
  params,
  onViewRow,
}: ParamsProps & {
  onViewRow: () => void;
}) {
  return (
    <ListItemText
      disableTypography
      primary={
        <Link
          noWrap
          color="inherit"
          variant="subtitle2"
          onClick={onViewRow}
          sx={{ cursor: 'pointer' }}
        >
          {params.row.title}
        </Link>
      }
      secondary={
        <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
          {params.row.service}
        </Box>
      }
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    />
  );
}
