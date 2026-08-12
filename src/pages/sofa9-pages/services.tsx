import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { SOFA9_PAGE_IMAGES } from 'src/sections/sofa9-pages/sofa9-pages-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian retro tổng thể.', path: '/sofa9/services/design' },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa retro theo kích thước, màu sắc riêng.', path: '/sofa9/services/design/custom' },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trước khi sản xuất.', path: '/sofa9/services/design/3d' },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian retro.', path: '/sofa9/services/design/consult' },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa retro chuyên nghiệp.', path: '/sofa9/services/production' },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công sofa theo bản vẽ.', path: '/sofa9/services/production/crafting' },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất sofa theo thương hiệu riêng.', path: '/sofa9/services/production/oem' },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất sofa ODM.', path: '/sofa9/services/production/odm' },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất sofa cho dự án lớn.', path: '/sofa9/services/production/project' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Dịch vụ — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="DỊCH VỤ" title={<>DỊCH <span>VỤ</span></>} subtitle="Thiết kế, sản xuất, gia công sofa retro — trọn gói cho mọi nhu cầu." image={SOFA9_PAGE_IMAGES.service1} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
