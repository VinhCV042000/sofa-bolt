import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@mui/material/TableContainer';

import { Iconify } from 'src/components/iconify';

import { CmsPanel, CmsStatusChip } from './sofa2-cms-ui';
import { useSofa2Cms } from './sofa2-cms-store';
import { cmsId, CMS_STATUSES, type CmsPage, type CmsBlock, type CmsStatus } from './sofa2-cms-types';

// ----------------------------------------------------------------------

const BLOCK_TYPES = ['Banner', 'Rich text', 'Văn bản', 'Danh sách', 'Danh sách SP', 'Slider', 'FAQ', 'Thư viện ảnh', 'Biểu mẫu', 'Bản đồ', 'Timeline'];

type Props = { pageKey: string };

export function Sofa2CmsPageEditor({ pageKey }: Props) {
  const { cms, savePage } = useSofa2Cms();

  const stored = useMemo(() => cms.pages.find((p) => p.key === pageKey), [cms.pages, pageKey]);

  const [draft, setDraft] = useState<CmsPage | null>(stored ?? null);
  const [tab, setTab] = useState(0);
  const [toast, setToast] = useState('');
  const [blockForm, setBlockForm] = useState<{ open: boolean; index: number; value: CmsBlock } | null>(null);

  useEffect(() => {
    setDraft(stored ?? null);
  }, [stored]);

  if (!draft) {
    return (
      <CmsPanel title="Không tìm thấy trang">
        <Typography sx={{ color: 'text.secondary' }}>Trang này chưa tồn tại trong kho nội dung.</Typography>
      </CmsPanel>
    );
  }

  const patch = (values: Partial<CmsPage>) => setDraft({ ...draft, ...values });

  const commit = (next: CmsPage, message: string) => {
    setDraft(next);
    savePage(next);
    setToast(message);
  };

  const moveBlock = (index: number, dir: -1 | 1) => {
    const blocks = [...draft.blocks];
    const target = index + dir;
    if (target < 0 || target >= blocks.length) return;
    [blocks[index], blocks[target]] = [blocks[target], blocks[index]];
    commit({ ...draft, blocks }, 'Đã đổi thứ tự khối.');
  };

  const toggleBlock = (index: number) => {
    const blocks = draft.blocks.map((b, i) => (i === index ? { ...b, enabled: !b.enabled } : b));
    commit({ ...draft, blocks }, 'Đã cập nhật hiển thị.');
  };

  const deleteBlock = (index: number) => {
    commit({ ...draft, blocks: draft.blocks.filter((_, i) => i !== index) }, 'Đã xoá khối nội dung.');
  };

  const submitBlock = () => {
    if (!blockForm) return;
    const blocks = [...draft.blocks];
    if (blockForm.index === -1) blocks.push(blockForm.value);
    else blocks[blockForm.index] = blockForm.value;
    commit({ ...draft, blocks }, blockForm.index === -1 ? 'Đã thêm khối nội dung.' : 'Đã cập nhật khối nội dung.');
    setBlockForm(null);
  };

  const renderContent = (
    <Stack spacing={3}>
      {!!draft.fieldSchema.length && (
        <CmsPanel title="Nội dung hiển thị trên trang khách">
          <Grid container spacing={2}>
            {draft.fieldSchema.map((field) => (
              <Grid key={field.key} xs={12} md={field.multiline ? 12 : 6}>
                <TextField
                  fullWidth
                  label={field.label}
                  multiline={field.multiline}
                  rows={field.multiline ? 3 : undefined}
                  value={draft.fields[field.key] ?? ''}
                  onChange={(e) => patch({ fields: { ...draft.fields, [field.key]: e.target.value } })}
                />
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2.5 }}>
            <Button variant="contained" onClick={() => commit(draft, 'Đã lưu nội dung trang.')}>
              Lưu nội dung
            </Button>
          </Stack>
        </CmsPanel>
      )}

      <CmsPanel
        title={draft.blockLabel}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={() =>
              setBlockForm({
                open: true,
                index: -1,
                value: { id: cmsId(), title: '', type: BLOCK_TYPES[0], text: '', enabled: true },
              })
            }
          >
            Thêm
          </Button>
        }
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Tiêu đề</TableCell>
                <TableCell>Loại</TableCell>
                <TableCell>Nội dung</TableCell>
                <TableCell align="center">Hiển thị</TableCell>
                <TableCell align="right">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {draft.blocks.map((block, index) => (
                <TableRow key={block.id} hover>
                  <TableCell sx={{ fontWeight: 600 }}>{block.title}</TableCell>
                  <TableCell>{block.type}</TableCell>
                  <TableCell sx={{ maxWidth: 360, color: 'text.secondary' }}>
                    <Box sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {block.text}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Switch size="small" checked={block.enabled} onChange={() => toggleBlock(index)} />
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" justifyContent="flex-end">
                      <Tooltip title="Lên">
                        <span>
                          <IconButton size="small" disabled={index === 0} onClick={() => moveBlock(index, -1)}>
                            <Iconify icon="eva:arrow-upward-fill" width={18} />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <Tooltip title="Xuống">
                        <span>
                          <IconButton
                            size="small"
                            disabled={index === draft.blocks.length - 1}
                            onClick={() => moveBlock(index, 1)}
                          >
                            <Iconify icon="eva:arrow-downward-fill" width={18} />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <Tooltip title="Sửa">
                        <IconButton size="small" onClick={() => setBlockForm({ open: true, index, value: { ...block } })}>
                          <Iconify icon="solar:pen-bold" width={18} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xoá">
                        <IconButton size="small" color="error" onClick={() => deleteBlock(index)}>
                          <Iconify icon="solar:trash-bin-trash-bold" width={18} />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {!draft.blocks.length && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 5, color: 'text.secondary' }}>
                    Chưa có nội dung. Bấm “Thêm” để tạo mới.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CmsPanel>
    </Stack>
  );

  const renderSeo = (
    <CmsPanel title="Thẻ SEO của trang">
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Tiêu đề SEO"
            helperText={`${draft.seo.title.length}/60 ký tự`}
            value={draft.seo.title}
            onChange={(e) => patch({ seo: { ...draft.seo, title: e.target.value } })}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Đường dẫn chuẩn"
            value={draft.seo.canonical}
            onChange={(e) => patch({ seo: { ...draft.seo, canonical: e.target.value } })}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Mô tả SEO"
            helperText={`${draft.seo.description.length}/160 ký tự`}
            value={draft.seo.description}
            onChange={(e) => patch({ seo: { ...draft.seo, description: e.target.value } })}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Từ khoá"
            value={draft.seo.keywords}
            onChange={(e) => patch({ seo: { ...draft.seo, keywords: e.target.value } })}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Ảnh chia sẻ"
            value={draft.seo.image}
            onChange={(e) => patch({ seo: { ...draft.seo, image: e.target.value } })}
          />
        </Grid>
      </Grid>
      <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2.5 }}>
        <Button variant="contained" onClick={() => commit(draft, 'Đã lưu thẻ SEO.')}>
          Lưu SEO
        </Button>
      </Stack>
    </CmsPanel>
  );

  const renderPublish = (
    <CmsPanel title="Xuất bản">
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Trạng thái"
            value={draft.status}
            onChange={(e) => patch({ status: e.target.value as CmsStatus })}
          >
            {CMS_STATUSES.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            fullWidth
            label="Người sửa"
            value={draft.author}
            onChange={(e) => patch({ author: e.target.value })}
          />
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            fullWidth
            label="Đường dẫn trang khách"
            value={draft.path}
            onChange={(e) => patch({ path: e.target.value })}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Stack direction="row" spacing={1.5} flexWrap="wrap" alignItems="center">
        <CmsStatusChip status={draft.status} />
        <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
          Cập nhật lần cuối: {draft.updated}
        </Typography>
        <Button
          component="a"
          href={draft.path}
          target="_blank"
          rel="noopener"
          variant="outlined"
          startIcon={<Iconify icon="solar:eye-bold" />}
        >
          Xem trang khách
        </Button>
        <Button variant="contained" onClick={() => commit(draft, 'Đã lưu trạng thái xuất bản.')}>
          Lưu
        </Button>
      </Stack>
    </CmsPanel>
  );

  return (
    <Stack spacing={3}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)}>
        <Tab label="Nội dung" />
        <Tab label="SEO" />
        <Tab label="Xuất bản" />
      </Tabs>

      {tab === 0 && renderContent}
      {tab === 1 && renderSeo}
      {tab === 2 && renderPublish}

      <Dialog open={!!blockForm} onClose={() => setBlockForm(null)} fullWidth maxWidth="sm">
        <DialogTitle>{blockForm?.index === -1 ? 'Thêm nội dung' : 'Sửa nội dung'}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="Tiêu đề"
              value={blockForm?.value.title ?? ''}
              onChange={(e) =>
                setBlockForm((prev) => (prev ? { ...prev, value: { ...prev.value, title: e.target.value } } : prev))
              }
            />
            <TextField
              select
              fullWidth
              label="Loại"
              value={blockForm?.value.type ?? BLOCK_TYPES[0]}
              onChange={(e) =>
                setBlockForm((prev) => (prev ? { ...prev, value: { ...prev.value, type: e.target.value } } : prev))
              }
            >
              {BLOCK_TYPES.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Nội dung"
              value={blockForm?.value.text ?? ''}
              onChange={(e) =>
                setBlockForm((prev) => (prev ? { ...prev, value: { ...prev.value, text: e.target.value } } : prev))
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setBlockForm(null)}>
            Huỷ
          </Button>
          <Button variant="contained" onClick={submitBlock}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!toast}
        autoHideDuration={2500}
        onClose={() => setToast('')}
        message={toast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Stack>
  );
}
