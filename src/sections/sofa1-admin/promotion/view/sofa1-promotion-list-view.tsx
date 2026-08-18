import type {
  GridSlots,
  GridColDef,
  GridRowSelectionModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  DataGrid,
  gridClasses,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDate } from 'src/utils/format-time';

import { _sofa1Promotions } from 'src/_mock/_sofa1';
import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import {
  RenderCellSofa1Promotion,
  RenderCellSofa1PromotionStatus,
  RenderCellSofa1PromotionCreatedAt,
} from '../sofa1-promotion-table-row';

// ----------------------------------------------------------------------

const HIDE_COLUMNS_TOGGLABLE = ['actions'];

export function Sofa1PromotionListView() {
  const router = useRouter();

  const confirmRows = useBoolean();

  const [tableData, setTableData] = useState(_sofa1Promotions);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>({});

  const handleDeleteRow = useCallback((id: string) => {
    setTableData((prev) => prev.filter((row) => row.id !== id));
    toast.success('Đã xóa khuyến mãi!');
  }, []);

  const handleDeleteRows = useCallback(() => {
    setTableData((prev) => prev.filter((row) => !selectedRowIds.includes(row.id)));
    toast.success('Đã xóa khuyến mãi!');
  }, [selectedRowIds]);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(paths.dashboard.sofa1.promotion.edit(id));
    },
    [router]
  );

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Khuyến mãi',
      flex: 1,
      minWidth: 260,
      hideable: false,
      renderCell: (params) => (
        <RenderCellSofa1Promotion params={params} onViewRow={() => handleEditRow(params.row.id)} />
      ),
    },
    {
      field: 'service',
      headerName: 'Dịch vụ',
      width: 160,
    },
    {
      field: 'discountPercent',
      headerName: 'Giảm giá',
      width: 100,
      renderCell: (params) => `${params.row.discountPercent}%`,
    },
    {
      field: 'validFrom',
      headerName: 'Bắt đầu',
      width: 120,
      renderCell: (params) => fDate(params.row.validFrom),
    },
    {
      field: 'validUntil',
      headerName: 'Kết thúc',
      width: 120,
      renderCell: (params) => fDate(params.row.validUntil),
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 140,
      renderCell: (params) => <RenderCellSofa1PromotionStatus params={params} />,
    },
    {
      field: 'createdAt',
      headerName: 'Ngày tạo',
      width: 160,
      renderCell: (params) => <RenderCellSofa1PromotionCreatedAt params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="Sửa"
          onClick={() => handleEditRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label="Xóa"
          onClick={() => handleDeleteRow(params.row.id)}
          sx={{ color: 'error.main' }}
        />,
      ],
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  const CustomToolbarCallback = useCallback(
    () => (
      <CustomToolbar selectedRowIds={selectedRowIds} onOpenConfirmDeleteRows={confirmRows.onTrue} />
    ),
    [selectedRowIds, confirmRows.onTrue]
  );

  return (
    <>
      <DashboardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CustomBreadcrumbs
          heading="Khuyến mãi"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Sofa1', href: paths.dashboard.sofa1.root },
            { name: 'Khuyến mãi' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.sofa1.promotion.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              Thêm khuyến mãi
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Card
          sx={{
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            height: { xs: 800, md: 2 },
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={tableData}
            columns={columns}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: CustomToolbarCallback as GridSlots['toolbar'],
              noRowsOverlay: () => <EmptyContent />,
              noResultsOverlay: () => <EmptyContent title="Không tìm thấy kết quả" />,
            }}
            slotProps={{
              columnsManagement: { getTogglableColumns },
            }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
          />
        </Card>
      </DashboardContent>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Xóa"
        content={
          <>
            Bạn có chắc muốn xóa <strong> {selectedRowIds.length} </strong> khuyến mãi?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Xóa
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

type CustomToolbarProps = {
  selectedRowIds: GridRowSelectionModel;
  onOpenConfirmDeleteRows: () => void;
};

function CustomToolbar({ selectedRowIds, onOpenConfirmDeleteRows }: CustomToolbarProps) {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />

      <Stack spacing={1} flexGrow={1} direction="row" alignItems="center" justifyContent="flex-end">
        {!!selectedRowIds.length && (
          <Button
            size="small"
            color="error"
            startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
            onClick={onOpenConfirmDeleteRows}
          >
            Xóa ({selectedRowIds.length})
          </Button>
        )}

        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Stack>
    </GridToolbarContainer>
  );
}
