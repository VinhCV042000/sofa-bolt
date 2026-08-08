import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { varAlpha } from 'src/theme/styles';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16PageHero, Sofa16Section } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian Mediterranean tổng thể.', path: '/sofa16/services/design', accent: SOFA16_COLORS.terracotta },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa Riviera theo kích thước, màu riêng.', path: '/sofa16/services/design/custom', accent: SOFA16_COLORS.olive },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa16/services/design/3d', accent: SOFA16_COLORS.azure },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian Riviera.', path: '/sofa16/services/design/consult', accent: SOFA16_COLORS.terracotta },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa Riviera chuyên nghiệp.', path: '/sofa16/services/production', accent: SOFA16_COLORS.olive },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa16/services/production/crafting', accent: SOFA16_COLORS.azure },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa16/services/production/oem', accent: SOFA16_COLORS.terracotta },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa16/services/production/odm', accent: SOFA16_COLORS.olive },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa16/services/production/project', accent: SOFA16_COLORS.azure },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa16</title></Helmet>
      <Sofa16PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa Riviera — trọn gói." image={SOFA16_PAGE_IMAGES.service1} />

      <Sofa16Section bg="cream">
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(s.accent, 0.25)}`, borderRadius: 3, bgcolor: SOFA16_COLORS.creamLight, '&:hover': { border: `1px solid ${s.accent}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(s.accent, 0.4)}`, borderRadius: 2, color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight', lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>
    </>
  );
}
