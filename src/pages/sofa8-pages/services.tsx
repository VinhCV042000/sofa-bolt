import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { SOFA8_PAGE_IMAGES } from 'src/sections/sofa8-pages/sofa8-pages-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';

const SERVICES = [
  { title: 'Thiết kế nội thất', icon: 'solar:pen-bold-duotone', desc: 'Thiết kế không gian coastal tổng thể.', path: '/sofa8/services/design' },
  { title: 'Thiết kế sofa theo yêu cầu', icon: 'solar:armchair-bold-duotone', desc: 'Sofa coastal theo kích thước, màu sắc riêng.', path: '/sofa8/services/design/custom' },
  { title: 'Thiết kế 3D', icon: 'solar:cube-bold-duotone', desc: 'Bản vẽ 3D trước khi sản xuất.', path: '/sofa8/services/design/3d' },
  { title: 'Tư vấn bố trí nội thất', icon: 'solar:widget-bold-duotone', desc: 'Tư vấn sắp xếp không gian coastal.', path: '/sofa8/services/design/consult' },
  { title: 'Dịch vụ sản xuất', icon: 'solar:tools-bold-duotone', desc: 'Gia công sofa coastal chuyên nghiệp.', path: '/sofa8/services/production' },
  { title: 'Gia công sofa', icon: 'solar:hammer-bold-duotone', desc: 'Gia công sofa theo bản vẽ.', path: '/sofa8/services/production/crafting' },
  { title: 'Sofa OEM', icon: 'solar:box-bold-duotone', desc: 'Sản xuất sofa theo thương hiệu riêng.', path: '/sofa8/services/production/oem' },
  { title: 'Sofa ODM', icon: 'solar:cart-bold-duotone', desc: 'Thiết kế và sản xuất sofa ODM.', path: '/sofa8/services/production/odm' },
  { title: 'Đặt hàng theo dự án', icon: 'solar:buildings-bold-duotone', desc: 'Sản xuất sofa cho dự án lớn.', path: '/sofa8/services/production/project' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Dịch vụ — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline="DỊCH VỤ"
        title={<>DỊCH <span>VỤ</span></>}
        subtitle="Thiết kế, sản xuất, gia công sofa coastal — trọn gói cho mọi nhu cầu."
        image={SOFA8_PAGE_IMAGES.service1}
      />

      <Sofa8Section>
        <Grid container spacing={3}>
          {SERVICES.map((s) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={s.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA8_COLORS.coral, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA8_COLORS.ocean, 0.08), color: SOFA8_COLORS.ocean }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa8Section>
    </>
  );
}
