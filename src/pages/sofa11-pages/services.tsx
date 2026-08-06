import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES } from 'src/sections/sofa11-pages/sofa11-pages-data';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold', desc: 'Thiết kế không gian pop tổng thể.', path: '/sofa11/services/design', accent: SOFA11_COLORS.magenta },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold', desc: 'Sofa pop theo kích thước, màu riêng.', path: '/sofa11/services/design/custom', accent: SOFA11_COLORS.lime },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold', desc: 'Bản vẽ 3D trong 24h.', path: '/sofa11/services/design/3d', accent: SOFA11_COLORS.cyan },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold', desc: 'Tư vấn sắp xếp không gian pop.', path: '/sofa11/services/design/consult', accent: SOFA11_COLORS.tangerine },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold', desc: 'Gia công sofa pop chuyên nghiệp.', path: '/sofa11/services/production', accent: SOFA11_COLORS.magenta },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold', desc: 'Gia công theo bản vẽ.', path: '/sofa11/services/production/crafting', accent: SOFA11_COLORS.lime },
  { title: 'Sofa OEM', icon: 'solar:box-bold', desc: 'Sản xuất theo thương hiệu riêng.', path: '/sofa11/services/production/oem', accent: SOFA11_COLORS.cyan },
  { title: 'Sofa ODM', icon: 'solar:cart-bold', desc: 'Thiết kế và sản xuất ODM.', path: '/sofa11/services/production/odm', accent: SOFA11_COLORS.tangerine },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold', desc: 'Sản xuất cho dự án lớn.', path: '/sofa11/services/production/project', accent: SOFA11_COLORS.magenta },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ — Sofa11</title></Helmet>
      <Sofa11PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa pop — trọn gói." image={SOFA11_PAGE_IMAGES.service1} />

      <Sofa11Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: '20px 20px 20px 0', textDecoration: 'none', bgcolor: sofa11Alpha(s.accent, 0.08), border: `2px solid ${sofa11Alpha(s.accent, 0.3)}`, '&:hover': { borderColor: s.accent, boxShadow: `0 0 24px ${sofa11Alpha(s.accent, 0.3)}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: s.accent, color: SOFA11_COLORS.void, boxShadow: `0 0 20px ${sofa11Alpha(s.accent, 0.5)}` }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5), fontWeight: 700 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>
    </>
  );
}
