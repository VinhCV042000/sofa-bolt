// SOFA2 ADMIN — Công cụ SEO: chấm điểm, xem trước Google, sinh robots.txt / sitemap.xml,
// kiểm tra JSON-LD. Dùng chung cho màn hình module SEO.
// ----------------------------------------------------------------------

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import LinearProgress from '@mui/material/LinearProgress';

import { Iconify } from 'src/components/iconify';

import { SOFA2_SITE_ORIGIN } from '../sofa2-seo-generator';

import type { AdminRow } from '../sofa2-admin-store';
import type { Sofa2SeoKind } from '../sofa2-seo';

const SITE = SOFA2_SITE_ORIGIN;
const SITEMAP_FILES = new Set([
  'sitemap-pages.xml',
  'sitemap-categories.xml',
  'sitemap-products.xml',
  'sitemap-collections.xml',
  'sitemap-projects.xml',
  'sitemap-showrooms.xml',
  'sitemap-blog.xml',
]);
const yes = (v: unknown) => v === undefined || v === '' || ['có', 'true', '1', 'yes'].includes(String(v).toLowerCase());
const str = (v: unknown) => String(v ?? '').trim();
const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// ----------------------------------------------------------------------

export type SeoCheck = { label: string; ok: boolean; weight: number };

export function auditSeoPage(row: AdminRow) {
  const title = str(row.title);
  const desc = str(row.description);
  const kw = str(row.keyword).toLowerCase();
  const checks: SeoCheck[] = [
    { label: 'Meta title 30–60 ký tự', ok: title.length >= 30 && title.length <= 60, weight: 15 },
    { label: 'Meta description 120–160 ký tự', ok: desc.length >= 120 && desc.length <= 160, weight: 15 },
    { label: 'Từ khoá chính có trong title', ok: !!kw && title.toLowerCase().includes(kw), weight: 15 },
    { label: 'Từ khoá chính có trong description', ok: !!kw && desc.toLowerCase().includes(kw), weight: 10 },
    { label: 'Có heading H1', ok: !!str(row.h1), weight: 10 },
    { label: 'Có canonical URL', ok: !!str(row.canonical), weight: 10 },
    { label: 'Có ảnh chia sẻ (OG)', ok: !!str(row.ogImage), weight: 5 },
    { label: 'Ít nhất 3 liên kết nội bộ', ok: Number(row.internalLinks) >= 3, weight: 10 },
    { label: 'Cho phép index', ok: yes(row.indexable), weight: 10 },
  ];
  const total = checks.reduce((s, c) => s + c.weight, 0);
  const score = Math.round((checks.filter((c) => c.ok).reduce((s, c) => s + c.weight, 0) / total) * 100);
  return { score, checks };
}

export const scoreColor = (score: number) =>
  score >= 80 ? 'success' : score >= 50 ? 'warning' : 'error';

export const scoreToStatus = (score: number) =>
  score >= 80 ? 'Tốt' : score >= 50 ? 'Cần cải thiện' : 'Thiếu meta';

// ----------------------------------------------------------------------

export function SeoScoreChip({ row }: { row: AdminRow }) {
  const { score } = auditSeoPage(row);
  return <Chip size="small" variant="soft" color={scoreColor(score)} label={`${score}/100`} />;
}

/** Xem trước kết quả Google + checklist, hiển thị trong form thêm/sửa */
export function SeoPageAssistant({
  values,
  onApplyStatus,
}: {
  values: AdminRow;
  onApplyStatus?: (status: string) => void;
}) {
  const { score, checks } = auditSeoPage(values);
  const url = str(values.canonical) || `${SITE}${str(values.url)}`;
  const title = str(values.title) || 'Meta title sẽ hiển thị tại đây';
  const desc = str(values.description) || 'Meta description sẽ hiển thị tại đây…';

  return (
    <Stack spacing={2}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Xem trước Google & chấm điểm
      </Typography>
      <Box sx={{ p: 2, borderRadius: 1.5, border: '1px dashed', borderColor: 'divider' }}>
        <Typography variant="caption" sx={{ color: 'success.dark' }} noWrap component="div">
          {url}
        </Typography>
        <Typography sx={{ color: '#1a0dab', fontSize: 18, lineHeight: 1.3 }} noWrap>
          {title.length > 60 ? `${title.slice(0, 60)}…` : title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc.length > 160 ? `${desc.slice(0, 160)}…` : desc}
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">{score}/100</Typography>
        <LinearProgress
          variant="determinate"
          value={score}
          color={scoreColor(score)}
          sx={{ flex: 1, height: 8, borderRadius: 4 }}
        />
        {onApplyStatus && (
          <Button size="small" variant="outlined" onClick={() => onApplyStatus(scoreToStatus(score))}>
            Áp dụng đánh giá
          </Button>
        )}
      </Stack>
      <Box sx={{ display: 'grid', gap: 0.75, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {checks.map((c) => (
          <Stack key={c.label} direction="row" spacing={1} alignItems="center">
            <Iconify
              width={18}
              icon={c.ok ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
              sx={{ color: c.ok ? 'success.main' : 'error.main' }}
            />
            <Typography variant="body2">{c.label}</Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function validateJsonLd(text: string): { ok: boolean; message: string } {
  if (!str(text)) return { ok: false, message: 'Chưa có JSON-LD.' };
  try {
    const data = JSON.parse(text);
    const nodes = Array.isArray(data)
      ? data
      : Array.isArray(data['@graph'])
        ? data['@graph']
        : [data];
    const hasContext = !!data['@context'] || nodes.every((node) => !!node?.['@context']);
    if (!hasContext) return { ok: false, message: 'Thiếu "@context".' };
    if (!nodes.length || nodes.some((node) => !node || typeof node !== 'object' || !node['@type'])) {
      return { ok: false, message: 'Mỗi phần tử cần có "@type".' };
    }
    const types = nodes.map((node) => node['@type']).join(', ');
    return { ok: true, message: `JSON hợp lệ — @type: ${types}` };
  } catch (e) {
    return { ok: false, message: `Lỗi cú pháp JSON: ${(e as Error).message}` };
  }
}

export function createJsonLdTemplate(type: string, name = 'LUXE Sofa'): string {
  const common = { '@context': 'https://schema.org', '@type': type };
  const templates: Record<string, object> = {
    Product: {
      ...common,
      name,
      description: '',
      image: '',
      sku: '',
      brand: { '@type': 'Brand', name },
      offers: { '@type': 'Offer', priceCurrency: 'VND', price: 0, availability: 'https://schema.org/InStock' },
    },
    Article: {
      ...common,
      headline: '',
      description: '',
      author: { '@type': 'Person', name: '' },
      datePublished: '',
      image: '',
    },
    FurnitureStore: {
      ...common,
      name,
      url: '',
      telephone: '',
      address: { '@type': 'PostalAddress', streetAddress: '', addressCountry: 'VN' },
      openingHours: '',
    },
    LocalBusiness: {
      ...common,
      name,
      url: '',
      telephone: '',
      address: { '@type': 'PostalAddress', streetAddress: '', addressCountry: 'VN' },
    },
    FAQPage: {
      ...common,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Câu hỏi thường gặp',
          acceptedAnswer: { '@type': 'Answer', text: 'Nhập câu trả lời tại đây.' },
        },
      ],
    },
    BreadcrumbList: {
      ...common,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: '/sofa2' },
      ],
    },
  };
  return JSON.stringify(
    templates[type] ?? { ...common, name, url: '', description: '' },
    null,
    2
  );
}

export function SchemaJsonAssistant({
  values,
  onApplyTemplate,
}: {
  values: AdminRow;
  onApplyTemplate?: (jsonld: string) => void;
}) {
  const res = validateJsonLd(str(values.jsonld));
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ sm: 'center' }}>
      <Iconify
        icon={res.ok ? 'solar:check-circle-bold' : 'solar:danger-triangle-bold'}
        sx={{ color: res.ok ? 'success.main' : 'warning.main' }}
      />
      <Typography variant="body2" sx={{ flex: 1 }}>{res.message}</Typography>
      {onApplyTemplate && (
        <Button
          size="small"
          variant="outlined"
          onClick={() => onApplyTemplate(createJsonLdTemplate(str(values.type) || 'WebPage'))}
        >
          Chèn mẫu JSON-LD
        </Button>
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function buildRobotsTxt(rows: AdminRow[]) {
  const active = rows.filter((r) => str(r.status) === 'Hoạt động');
  const byAgent = new Map<string, AdminRow[]>();
  active.forEach((r) => {
    const rawAgent = str(r.agent) || '*';
    const a = /^[A-Za-z0-9_*.-]{1,120}$/.test(rawAgent) ? rawAgent : '*';
    byAgent.set(a, [...(byAgent.get(a) ?? []), r]);
  });
  const blocks = [...byAgent.entries()].map(([agent, list]) => {
    const lines = [`User-agent: ${agent}`];
    list.forEach((r) => {
      if (str(r.comment)) lines.push(`# ${str(r.comment).replace(/[\r\n]/g, ' ')}`);
      const rule = ['Allow', 'Disallow'].includes(str(r.rule)) ? str(r.rule) : 'Disallow';
      const path = (str(r.path) || '/').replace(/[\r\n]/g, '');
      if (path.startsWith('/')) lines.push(`${rule}: ${path}`);
    });
    const delay = Math.max(0, ...list.map((r) => Number(r.crawlDelay) || 0));
    if (delay) lines.push(`Crawl-delay: ${delay}`);
    return lines.join('\n');
  });
  const fallback = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /sofa2/admin',
    'Disallow: /sofa2/account',
    'Disallow: /sofa2/cart',
    'Disallow: /sofa2/checkout',
  ].join('\n');
  return [...(blocks.length ? blocks : [fallback]), `Sitemap: ${SITE}/sitemap.xml`].join('\n\n');
}

export function buildSitemapIndex(rows: AdminRow[]) {
  const items = rows
    .filter((r) => !['Lỗi URL', 'Tạm tắt'].includes(str(r.status)) && SITEMAP_FILES.has(str(r.file)))
    .map((r) => `  <sitemap>\n    <loc>${escapeXml(`${SITE}/${str(r.file)}`)}</loc>\n  </sitemap>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</sitemapindex>`;
}

export function buildSchemaBundle(rows: AdminRow[]) {
  const valid = rows
    .filter(
      (r) =>
        str(r.status) === 'Hợp lệ' &&
        str(r.validation) === 'Hợp lệ' &&
        (Number(r.errors) || 0) === 0
    )
    .map((r) => {
      try {
        return JSON.parse(str(r.jsonld));
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': valid }, null, 2);
}

/** Card xem trước tệp được sinh từ dữ liệu (robots.txt, sitemap.xml, JSON-LD) */
export function SeoGeneratedFile({
  kind,
  rows,
  onToast,
}: {
  kind: Sofa2SeoKind;
  rows: AdminRow[];
  onToast: (msg: string) => void;
}) {
  const file = useMemo(() => {
    if (kind === 'robots') return { name: 'robots.txt', mime: 'text/plain', text: buildRobotsTxt(rows) };
    if (kind === 'sitemap') return { name: 'sitemap.xml', mime: 'application/xml', text: buildSitemapIndex(rows) };
    if (kind === 'schema') return { name: 'schema.jsonld', mime: 'application/ld+json', text: buildSchemaBundle(rows) };
    return null;
  }, [kind, rows]);

  if (!file) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(file.text);
      onToast(`Đã sao chép ${file.name}.`);
    } catch {
      onToast('Không sao chép được, hãy chọn và copy thủ công.');
    }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([file.text], { type: file.mime }));
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
    onToast(`Đã tải ${file.name}.`);
  };

  return (
    <Card>
      <CardHeader
        title={`Tệp ${file.name} được sinh tự động`}
        subheader="Tạo từ các bản ghi đang hoạt động/hợp lệ bên dưới — cập nhật ngay khi bạn sửa."
        action={
          <Stack direction="row" spacing={1}>
            {(kind === 'sitemap' || kind === 'robots') && (
              <Button
                component="a"
                href={kind === 'sitemap' ? '/sitemap.xml' : '/robots.txt'}
                target="_blank"
                rel="noreferrer"
                size="small"
                variant="outlined"
                startIcon={<Iconify icon="solar:square-top-down-bold-duotone" />}
              >
                Mở công khai
              </Button>
            )}
            <Button size="small" variant="outlined" onClick={copy} startIcon={<Iconify icon="solar:copy-bold-duotone" />}>
              Sao chép
            </Button>
            <Button size="small" variant="outlined" onClick={download} startIcon={<Iconify icon="solar:download-bold-duotone" />}>
              Tải về
            </Button>
          </Stack>
        }
      />
      <Box
        component="pre"
        sx={{
          m: 2.5,
          mt: 2,
          p: 2,
          maxHeight: 280,
          overflow: 'auto',
          borderRadius: 1.5,
          bgcolor: '#1A1A1A',
          color: '#E0E0E0',
          fontSize: 12.5,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
        }}
      >
        {file.text}
      </Box>
    </Card>
  );
}
