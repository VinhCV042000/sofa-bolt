import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { SOFA2_ADMIN_THEME } from './sofa2-admin-layout';
import {
  buildSofa2Robots,
  buildSofa2Schema,
  buildSofa2Sitemap,
  getSofa2SeoEntries,
  buildSofa2SitemapIndex,
  SOFA2_SEO_SCOPE_BY_MODULE,
} from '../sofa2-seo-generator';

// ----------------------------------------------------------------------

const { ACCENT, SURFACE } = SOFA2_ADMIN_THEME;

type TabKey = 'sitemap' | 'robots' | 'schema';

const TABS: { value: TabKey; label: string; icon: string; file: string }[] = [
  { value: 'sitemap', label: 'Sitemap XML', icon: 'solar:sitemap-bold-duotone', file: 'sitemap.xml' },
  { value: 'robots', label: 'Robots.txt', icon: 'solar:shield-check-bold-duotone', file: 'robots.txt' },
  { value: 'schema', label: 'Schema JSON-LD', icon: 'solar:code-bold-duotone', file: 'schema.jsonld' },
];

const download = (name: string, content: string, mime: string) => {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
};

// ----------------------------------------------------------------------

type Props = { moduleSlug: string; moduleName: string };

export function Sofa2AdminSeoGenerator({ moduleSlug, moduleName }: Props) {
  const scope = SOFA2_SEO_SCOPE_BY_MODULE[moduleSlug] ?? 'all';

  const initialTab: TabKey =
    moduleSlug === 'robots' ? 'robots' : moduleSlug === 'schema' ? 'schema' : 'sitemap';

  const [tab, setTab] = useState<TabKey>(initialTab);
  const [toast, setToast] = useState('');

  const entries = useMemo(() => getSofa2SeoEntries(scope), [scope]);

  const content = useMemo(() => {
    if (tab === 'robots') return buildSofa2Robots();
    if (tab === 'schema') return buildSofa2Schema(scope);
    return moduleSlug === 'sitemap' ? buildSofa2SitemapIndex() : buildSofa2Sitemap(scope);
  }, [tab, scope, moduleSlug]);

  const active = TABS.find((t) => t.value === tab)!;

  const fileName =
    tab === 'sitemap' && moduleSlug !== 'sitemap' ? `sitemap-${moduleSlug}.xml` : active.file;

  const mime =
    tab === 'robots' ? 'text/plain' : tab === 'schema' ? 'application/ld+json' : 'application/xml';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setToast(`Đã sao chép ${fileName}`);
  };

  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'center' }}
        sx={{ p: 2.5 }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: SURFACE }}>
            Tự sinh SEO kỹ thuật – {moduleName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sinh sitemap, robots và schema JSON-LD trực tiếp từ dữ liệu sản phẩm, danh mục và dự án
            đang có trên website.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip size="small" label={`${entries.length} URL`} sx={{ fontWeight: 700 }} />
          <Button
            size="small"
            variant="outlined"
            onClick={handleCopy}
            startIcon={<Iconify icon="solar:copy-bold-duotone" />}
          >
            Sao chép
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              download(fileName, content, mime);
              setToast(`Đã tải ${fileName}`);
            }}
            startIcon={<Iconify icon="solar:download-bold-duotone" />}
            sx={{ bgcolor: ACCENT, '&:hover': { bgcolor: ACCENT, opacity: 0.9 } }}
          >
            Tải {fileName}
          </Button>
        </Stack>
      </Stack>

      <Divider />

      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        sx={{ px: 2.5, [`& .MuiTabs-indicator`]: { bgcolor: ACCENT } }}
      >
        {TABS.map((item) => (
          <Tab
            key={item.value}
            value={item.value}
            label={item.label}
            icon={<Iconify icon={item.icon} width={18} />}
            iconPosition="start"
          />
        ))}
      </Tabs>

      <Divider />

      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.5,
          maxHeight: 420,
          overflow: 'auto',
          fontSize: 12.5,
          lineHeight: 1.7,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.04),
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}
      >
        {content}
      </Box>

      <Snackbar
        open={!!toast}
        message={toast}
        autoHideDuration={2500}
        onClose={() => setToast('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Card>
  );
}
