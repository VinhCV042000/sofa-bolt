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

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15PageHero, Sofa15Section } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian Art Deco tổng thể.', path: '/sofa15/services/design', accent: SOFA15_COLORS.gold },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa Art Deco theo kích thước, màu riêng.', path: '/sofa15/services/design/custom', accent: SOFA15_COLORS.emerald },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa15/services/design/3d', accent: SOFA15_COLORS.burgundy },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian Art Deco.', path: '/sofa15/services/design/consult', accent: SOFA15_COLORS.gold },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa Art Deco chuyên nghiệp.', path: '/sofa15/services/production', accent: SOFA15_COLORS.emerald },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa15/services/production/crafting', accent: SOFA15_COLORS.burgundy },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa15/services/production/oem', accent: SOFA15_COLORS.gold },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa15/services/production/odm', accent: SOFA15_COLORS.emerald },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa15/services/production/project', accent: SOFA15_COLORS.burgundy },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa15</title></Helmet>
      <Sofa15PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa Art Deco — trọn gói." image={SOFA15_PAGE_IMAGES.service1} />

      <Sofa15Section bg="black">
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(s.accent, 0.3)}`, bgcolor: SOFA15_COLORS.charcoal, '&:hover': { border: `1px solid ${s.accent}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(s.accent, 0.4)}`, color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight', lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa15Section>
    </>
  );
}
