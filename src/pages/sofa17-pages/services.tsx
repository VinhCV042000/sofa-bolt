import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian Riad Ma-rốc tổng thể.', path: '/sofa17/services/design', accent: SOFA17_COLORS.gold },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa Riad Ma-rốc theo kích thước, màu riêng.', path: '/sofa17/services/design/custom', accent: SOFA17_COLORS.emerald },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa17/services/design/3d', accent: SOFA17_COLORS.burgundy },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian Riad Ma-rốc.', path: '/sofa17/services/design/consult', accent: SOFA17_COLORS.gold },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa Riad Ma-rốc chuyên nghiệp.', path: '/sofa17/services/production', accent: SOFA17_COLORS.emerald },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa17/services/production/crafting', accent: SOFA17_COLORS.burgundy },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa17/services/production/oem', accent: SOFA17_COLORS.gold },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa17/services/production/odm', accent: SOFA17_COLORS.emerald },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa17/services/production/project', accent: SOFA17_COLORS.burgundy },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa17</title></Helmet>
      <Sofa17PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa Riad Ma-rốc — trọn gói." image={SOFA17_PAGE_IMAGES.service1} />

      <Sofa17Section bg="black">
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(s.accent, 0.3)}`, bgcolor: SOFA17_COLORS.charcoal, '&:hover': { border: `1px solid ${s.accent}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(s.accent, 0.4)}`, color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4), fontWeight: 'fontWeightLight', lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa17Section>
    </>
  );
}
