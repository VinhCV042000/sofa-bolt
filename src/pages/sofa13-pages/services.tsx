import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { SOFA13_PAGE_IMAGES } from 'src/sections/sofa13-pages/sofa13-pages-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold', desc: 'Thiết kế không gian art deco tổng thể.', path: '/sofa13/services/design', accent: SOFA13_COLORS.gold },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold', desc: 'Sofa art deco theo kích thước, màu riêng.', path: '/sofa13/services/design/custom', accent: SOFA13_COLORS.emeraldBright },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa13/services/design/3d', accent: SOFA13_COLORS.goldPale },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold', desc: 'Tư vấn sắp xếp không gian art deco.', path: '/sofa13/services/design/consult', accent: SOFA13_COLORS.gold },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold', desc: 'Gia công sofa art deco chuyên nghiệp.', path: '/sofa13/services/production', accent: SOFA13_COLORS.emeraldBright },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold', desc: 'Gia công theo bản vẽ.', path: '/sofa13/services/production/crafting', accent: SOFA13_COLORS.goldPale },
  { title: 'Sofa OEM', icon: 'solar:box-bold', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa13/services/production/oem', accent: SOFA13_COLORS.gold },
  { title: 'Sofa ODM', icon: 'solar:cart-bold', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa13/services/production/odm', accent: SOFA13_COLORS.emeraldBright },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold', desc: 'Sản xuất cho dự án lớn.', path: '/sofa13/services/production/project', accent: SOFA13_COLORS.goldPale },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa13</title></Helmet>
      <Sofa13PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa art deco — trọn gói." image={SOFA13_PAGE_IMAGES.service1} />

      <Sofa13Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', border: `1px solid ${sofa13Alpha(s.accent, 0.3)}`, bgcolor: sofa13Alpha(s.accent, 0.04), '&:hover': { borderColor: s.accent, bgcolor: sofa13Alpha(s.accent, 0.08) }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${s.accent}`, color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), fontWeight: 700 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
