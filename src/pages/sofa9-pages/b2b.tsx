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

const B2B_ITEMS = [
  { title: 'Giới thiệu hợp tác', desc: 'Hợp tác cùng Sofa9 phát triển', icon: 'solar:hand-shake-bold-duotone', path: '/sofa9/b2b' },
  { title: 'Đại lý phân phối', desc: 'Trở thành đại lý Sofa9', icon: 'solar:users-group-rounded-bold-duotone', path: '/sofa9/b2b/register' },
  { title: 'Báo giá dự án', desc: 'Yêu cầu báo giá số lượng lớn', icon: 'solar:document-bold-duotone', path: '/sofa9/b2b/quote' },
  { title: 'Yêu cầu OEM', desc: 'Sản xuất theo thương hiệu', icon: 'solar:box-bold-duotone', path: '/sofa9/b2b/oem' },
  { title: 'Chính sách đại lý', desc: 'Quyền lợi và chính sách', icon: 'solar:shield-check-bold-duotone', path: '/sofa9/b2b/policy' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Đại lý B2B — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="ĐẠI LÝ B2B" title={<>ĐẠI LÝ <span>B2B</span></>} subtitle="Hợp tác cùng Sofa9 — phát triển kinh doanh retro." image={SOFA9_PAGE_IMAGES.b2b} />

      <Sofa9Section>
        <Grid container spacing={3}>
          {B2B_ITEMS.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={item.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA9_COLORS.pink, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA9_COLORS.cream, color: SOFA9_COLORS.pink }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
