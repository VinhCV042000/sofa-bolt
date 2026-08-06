import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const ITEMS = [
  { title: 'Thiết kế sofa theo yêu cầu', desc: 'Thiết kế sofa độc quyền theo kích thước và chất liệu riêng.', link: '/sofa12/services/design/custom' },
  { title: 'Thiết kế 3D', desc: 'Bản vẽ 3D chân thực trước khi sản xuất.', link: '/sofa12/services/design/3d' },
  { title: 'Tư vấn bố trí nội thất', desc: 'Kiến trúc sư tư vấn tận nhà, đo đạc và bố trí sofa.', link: '/sofa12/services/design/consult' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Thiết kế nội thất - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Dịch vụ" title="Thiết kế nội thất" subtitle="Thiết kế sofa theo yêu cầu, 3D, tư vấn bố trí nội thất." image={SOFA12_PAGE_IMAGES.service1} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            {ITEMS.map((item) => (
              <Stack key={item.title} spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                <Button component={RouterLink} href={item.link} size="small" color="warning" startIcon={<Iconify icon="solar:arrow-right-bold-duotone" />}>Tìm hiểu</Button>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
