import type { GridCellParams } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

import { SOFA1_APPLICATION_STATUS_OPTIONS } from 'src/_mock/_sofa1';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

const STATUS_COLORS: Record<string, 'default' | 'info' | 'success' | 'warning' | 'error'> = {
  new: 'info',
  reviewing: 'warning',
  interview: 'warning',
  hired: 'success',
  rejected: 'error',
};

export function RenderCellSofa1CareerApplicationCreatedAt({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{fDate(params.row.createdAt)}</Box>
      <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
        {fTime(params.row.createdAt)}
      </Box>
    </Stack>
  );
}

export function RenderCellSofa1CareerApplication({ params }: ParamsProps) {
  return (
    <ListItemText
      disableTypography
      primary={<Box component="span">{params.row.candidateName}</Box>}
      secondary={
        <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
          {params.row.careerTitle}
        </Box>
      }
      sx={{ display: 'flex', flexDirection: 'column' }}
    />
  );
}

export function RenderCellSofa1CareerApplicationStatus({
  params,
  onChangeStatus,
}: ParamsProps & {
  onChangeStatus: (id: string, status: string) => void;
}) {
  const option = SOFA1_APPLICATION_STATUS_OPTIONS.find((item) => item.value === params.row.status);

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
        minWidth: 150,
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '& .MuiSelect-select': { display: 'flex', alignItems: 'center', py: 0.5 },
      }}
    >
      {SOFA1_APPLICATION_STATUS_OPTIONS.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
