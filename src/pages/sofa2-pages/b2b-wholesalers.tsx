import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Nhà phân phối — LUXE Sofa' };

const DISTRIBUTORS = [
  { name: 'Furniture Distribution JSC', region: 'Toàn quốc', discount: '32%', contract: 'HD-NPP-2026-01', expires: '31/12/2026' },
  { name: 'Home Supply North', region: 'Miền Bắc', discount: '28%', contract: 'HD-NPP-2026-02', expires: '30/06/2027' },
  { name: 'Decor Distribute South', region: 'Miền Nam', discount: '30%', contract: 'HD-NPP-2026-03', expires: '15/11/2026' },
  { name: 'Mid Furniture Co.', region: 'Miền Trung', discount: '25%', contract: 'HD-NPP-2025-08', expires: '30/09/2026' },
  { name: 'Vina Home Supply', region: 'Toàn quốc', discount: '22%', contract: 'HD-NPP-2026-04', expires: '31/12/2026' },
];

const ADVANTAGES = [
  { icon: 'solar:box-bold-duotone', title: 'Nguồn hàng ổn định', desc: 'Cam kết sản lượng và thời gian giao hàng cho nhà phân phối.' },
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu cạnh tranh', desc: 'Mức chiết khấu lên đến 32% theo giá trị hợp đồng.' },
  { icon: 'solar:truck-bold-duotone', title: 'Hỗ trợ vận chuyển', desc: 'Giao hàng tận kho NPP toàn quốc với chi phí ưu đãi.' },
  { icon: 'solar:document-text-bold-duotone', title: 'Hợp đồng dài hạn', desc: 'Ký hợp đồng 1–2 năm với điều khoản linh hoạt.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        title="Nhà phân phối"
        subtitle="Đối tác nhà phân phối khu vực — hợp đồng dài hạn, chiết khấu cạnh tranh và nguồn hàng ổn định."
        image={SOFA2_PAGE_IMAGES.b2b}
        overline="Đối tác phân phối"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', maxWidth: 600, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Lợi ích</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">Hợp tác phân phối</Typography>
          </Box>
        </Stack>
        <Grid container spacing={3}>
          {ADVANTAGES.map((a, index) => (
            <Grid key={a.title} xs={12} sm={6} md={3}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.08 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'common.white' }}>
                  <Iconify icon={a.icon} width={28} />
                </Box>
                <Typography variant="h6">{a.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{a.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa2Section>

      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ mb: { xs: 5, md: 8 } }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h3">Danh sách nhà phân phối</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đối tác phân phối đang hợp tác với LUXE Sofa.</Typography>
        </Stack>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Paper sx={{ borderRadius: 2, boxShadow: (t) => t.customShadows.card, overflow: 'hidden' }}>
            <Stack divider={<Divider />}>
              {DISTRIBUTORS.map((d) => (
                <Stack
                  key={d.contract}
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  alignItems={{ md: 'center' }}
                  justifyContent="space-between"
                  sx={{ p: 3 }}
                >
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle1">{d.name}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:map-point-bold-duotone" width={16} sx={{ color: 'text.disabled' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{d.region}</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Chip label={`Chiết khấu ${d.discount}`} size="small" color="success" variant="soft" />
                    <Chip label={d.contract} size="small" variant="outlined" />
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>HĐ đến {d.expires}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Sofa2Section>

      <Sofa2Section>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h3">Trở thành nhà phân phối</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Liên hệ để thảo luận điều khoản hợp tác phân phối.</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa2/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký hợp tác
            </Button>
          </Box>
        </Stack>
      </Sofa2Section>
    </>
  );
}
