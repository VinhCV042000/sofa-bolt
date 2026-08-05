import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Đại lý B2B - Sofa Pop' };

const PARTNERS = [
  { icon: 'solar:hand-shake-bold-duotone', title: 'Đại lý phân phối', desc: 'Hợp tác phân phối sofa Pop trên toàn quốc.', path: '/sofa4/b2b/register' },
  { icon: 'solar:buildings-bold-duotone', title: 'Nhà phân phối', desc: 'Trở thành nhà phân phối khu vực.', path: '/sofa4/b2b/register' },
  { icon: 'solar:document-text-bold-duotone', title: 'Báo giá dự án', desc: 'Nhận báo giá sofa số lượng lớn.', path: '/sofa4/b2b/quote' },
  { icon: 'solar:hammer-bold-duotone', title: 'Yêu cầu sản xuất OEM', desc: 'Sản xuất sofa theo thương hiệu riêng.', path: '/sofa4/b2b/oem' },
  { icon: 'solar:users-group-rounded-bold-duotone', title: 'Đối tác thi công', desc: 'Hợp tác thi công nội thất dự án.', path: '/sofa4/b2b' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Chính sách đại lý', desc: 'Chính sách và quyền lợi đại lý.', path: '/sofa4/b2b/policy' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Đại lý B2B" title="Hợp tác kinh doanh eco" subtitle="Trở thành đối tác phân phối sofa Pop Sofa Pop." image={SOFA4_PAGE_IMAGES.b2b} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={3}>
            {PARTNERS.map((partner, index) => (
              <Grid key={partner.title} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: index * 0.08 }} spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}`, height: 1 }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                    <Iconify icon={partner.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{partner.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{partner.desc}</Typography>
                  <Box component={RouterLink} href={partner.path} sx={{ textDecoration: 'none' }}>
                    <Typography variant="button" sx={{ color: 'warning.main' }}>Tìm hiểu →</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
