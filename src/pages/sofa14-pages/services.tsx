import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian pastel pop tổng thể.', path: '/sofa14/services/design', accent: SOFA14_COLORS.mint },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa pastel theo kích thước, màu riêng.', path: '/sofa14/services/design/custom', accent: SOFA14_COLORS.sky },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa14/services/design/3d', accent: SOFA14_COLORS.coral },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian pastel pop.', path: '/sofa14/services/design/consult', accent: SOFA14_COLORS.butter },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa pastel pop chuyên nghiệp.', path: '/sofa14/services/production', accent: SOFA14_COLORS.mint },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa14/services/production/crafting', accent: SOFA14_COLORS.sky },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa14/services/production/oem', accent: SOFA14_COLORS.coral },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa14/services/production/odm', accent: SOFA14_COLORS.butter },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa14/services/production/project', accent: SOFA14_COLORS.mint },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa14</title></Helmet>
      <Sofa14PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa pastel pop — trọn gói." image={SOFA14_PAGE_IMAGES.service1} />

      <Sofa14Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', borderRadius: '32px', bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa14Alpha(s.accent, 0.3)}`, '&:hover': { boxShadow: `8px 8px 0 ${sofa14Alpha(s.accent, 0.5)}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa14Alpha(s.accent, 0.2), color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7), fontWeight: 700, lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
