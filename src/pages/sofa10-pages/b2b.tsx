import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { SOFA10_PAGE_IMAGES } from 'src/sections/sofa10-pages/sofa10-pages-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';

const B2B_ITEMS = [
  { title: 'Giới thiệu hợp tác', desc: 'Hợp tác cùng Sofa10 phát triển', icon: 'solar:hand-shake-bold-duotone', path: '/sofa10/b2b' },
  { title: 'Đại lý phân phối', desc: 'Trở thành đại lý Sofa10', icon: 'solar:users-group-rounded-bold-duotone', path: '/sofa10/b2b/register' },
  { title: 'Báo giá dự án', desc: 'Yêu cầu báo giá số lượng lớn', icon: 'solar:document-bold-duotone', path: '/sofa10/b2b/quote' },
  { title: 'Yêu cầu OEM', desc: 'Sản xuất theo thương hiệu', icon: 'solar:box-bold-duotone', path: '/sofa10/b2b/oem' },
  { title: 'Chính sách đại lý', desc: 'Quyền lợi và chính sách', icon: 'solar:shield-check-bold-duotone', path: '/sofa10/b2b/policy' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Đại lý B2B — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="ĐẠI LÝ B2B" title={<>ĐẠI LÝ <span>B2B</span></>} subtitle="Hợp tác cùng Sofa10 — phát triển kinh doanh retro." image={SOFA10_PAGE_IMAGES.b2b} />

      <Sofa10Section>
        <Grid container spacing={3}>
          {B2B_ITEMS.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={4}>
              <Stack component={RouterLink} href={item.path} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA10_COLORS.wood, transition: 'border-color 0.3s' } }}>
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA10_COLORS.paper, color: SOFA10_COLORS.wood }}>
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary' }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>
    </>
  );
}
