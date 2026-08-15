import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian Mediterranean tổng thể.', path: '/sofa18/services/design', accent: SOFA18_COLORS.clay },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa Riviera theo kích thước, màu riêng.', path: '/sofa18/services/design/custom', accent: SOFA18_COLORS.sage },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa18/services/design/3d', accent: SOFA18_COLORS.rust },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian Riviera.', path: '/sofa18/services/design/consult', accent: SOFA18_COLORS.clay },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa Riviera chuyên nghiệp.', path: '/sofa18/services/production', accent: SOFA18_COLORS.sage },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa18/services/production/crafting', accent: SOFA18_COLORS.rust },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa18/services/production/oem', accent: SOFA18_COLORS.clay },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa18/services/production/odm', accent: SOFA18_COLORS.sage },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa18/services/production/project', accent: SOFA18_COLORS.rust },
];

export default function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa18</title></Helmet>
      <Sofa18PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa Riviera — trọn gói." image={SOFA18_PAGE_IMAGES.service1} />

      <Sofa18Section bg="cream">
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${varAlpha(s.accent, 0.25)}`, borderRadius: 3, bgcolor: SOFA18_COLORS.creamLight, '&:hover': { border: `1px solid ${s.accent}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${varAlpha(s.accent, 0.4)}`, borderRadius: 2, color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightMedium', color: SOFA18_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, fontWeight: 'fontWeightLight', lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
