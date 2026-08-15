import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { SOFA19_PAGE_IMAGES } from 'src/sections/sofa19-pages/sofa19-pages-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian pastel pop tổng thể.', path: '/sofa19/services/design', accent: SOFA19_COLORS.jungleLight },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa pastel theo kích thước, màu riêng.', path: '/sofa19/services/design/custom', accent: SOFA19_COLORS.sand },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa19/services/design/3d', accent: SOFA19_COLORS.coral },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian pastel pop.', path: '/sofa19/services/design/consult', accent: SOFA19_COLORS.golden },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa pastel pop chuyên nghiệp.', path: '/sofa19/services/production', accent: SOFA19_COLORS.jungleLight },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công theo bản vẽ.', path: '/sofa19/services/production/crafting', accent: SOFA19_COLORS.sand },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa19/services/production/oem', accent: SOFA19_COLORS.coral },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa19/services/production/odm', accent: SOFA19_COLORS.golden },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất cho dự án lớn.', path: '/sofa19/services/production/project', accent: SOFA19_COLORS.jungleLight },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa19</title></Helmet>
      <Sofa19PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa pastel pop — trọn gói." image={SOFA19_PAGE_IMAGES.service1} />

      <Sofa19Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, textDecoration: 'none', borderRadius: '32px', bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.06)}`, boxShadow: `6px 6px 0 ${sofa19Alpha(s.accent, 0.3)}`, '&:hover': { boxShadow: `8px 8px 0 ${sofa19Alpha(s.accent, 0.5)}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa19Alpha(s.accent, 0.2), color: s.accent }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), fontWeight: 700, lineHeight: 1.8 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>
    </>
  );
}
