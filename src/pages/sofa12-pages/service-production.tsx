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
  { title: 'Gia công sofa', desc: 'Gia công sofa thủ công 18 công đoạn tại xưởng TERRA.', link: '/sofa12/services/production/oem' },
  { title: 'Sofa OEM', desc: 'Sản xuất sofa theo thiết kế của đối tác — OEM.', link: '/sofa12/services/production/oem' },
  { title: 'Sofa ODM', desc: 'Thiết kế và sản xuất sofa theo yêu cầu — ODM.', link: '/sofa12/services/production/odm' },
  { title: 'Đặt hàng theo dự án', desc: 'Sản xuất sofa theo dự án căn hộ, khách sạn, resort.', link: '/sofa12/services/production/project' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Dịch vụ sản xuất - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Dịch vụ" title="Dịch vụ sản xuất" subtitle="Gia công sofa, OEM, ODM, đặt hàng theo dự án." image={SOFA12_PAGE_IMAGES.service2} />
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
