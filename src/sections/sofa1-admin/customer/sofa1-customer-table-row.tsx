import type { GridCellParams } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

import { SOFA1_CUSTOMER_STATUS_OPTIONS } from 'src/_mock/_sofa1';

import { Label } from 'src/components/label';

import { formatSofa1Price } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

const STATUS_COLORS: Record<string, 'default' | 'success' | 'warning' | 'error'> = {
  active: 'success',
  vip: 'warning',
  blocked: 'error',
};

export function RenderCellSofa1CustomerTotalSpent({ params }: ParamsProps) {
  return formatSofa1Price(params.row.totalSpent);
}

export function RenderCellSofa1CustomerCreatedAt({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{fDate(params.row.createdAt)}</Box>
      <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
        {fTime(params.row.createdAt)}
      </Box>
    </Stack>
  );
}

export function RenderCellSofa1Customer({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <Avatar alt={params.row.name} src={params.row.avatarUrl} sx={{ width: 40, height: 40, mr: 2 }} />

      <ListItemText
        disableTypography
        primary={<Box component="span">{params.row.name}</Box>}
        secondary={
          <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
            {params.row.email}
          </Box>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      />
    </Stack>
  );
}

export function RenderCellSofa1CustomerStatus({
  params,
  onChangeStatus,
}: ParamsProps & {
  onChangeStatus: (id: string, status: string) => void;
}) {
  const option = SOFA1_CUSTOMER_STATUS_OPTIONS.find((item) => item.value === params.row.status);

  return (
    <Select
      size="small"
      variant="outlined"
      value={params.row.status}
      onClick={(event) => event.stopPropagation()}
      onChange={(event) => {
        event.stopPropagation();
        onChangeStatus(params.row.id, event.target.value as string);
      }}
      renderValue={(value) => (
        <Label variant="soft" color={STATUS_COLORS[value as string] || 'default'}>
          {option?.label || value}
        </Label>
      )}
      sx={{
        minWidth: 130,
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '& .MuiSelect-select': { display: 'flex', alignItems: 'center', py: 0.5 },
      }}
    >
      {SOFA1_CUSTOMER_STATUS_OPTIONS.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
