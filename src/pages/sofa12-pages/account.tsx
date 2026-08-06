import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const ACCOUNT_ITEMS = [
  { title: 'Hồ sơ cá nhân', desc: 'Quản lý thông tin cá nhân' },
  { title: 'Địa chỉ giao hàng', desc: 'Quản lý địa chỉ giao hàng' },
  { title: 'Đơn hàng của tôi', desc: 'Theo dõi đơn hàng' },
  { title: 'Yêu thích', desc: 'Danh sách sản phẩm yêu thích' },
  { title: 'Lịch sử giao dịch', desc: 'Lịch sử mua hàng' },
  { title: 'Phiếu bảo hành', desc: 'Quản lý phiếu bảo hành' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Tài khoản - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Tài khoản" title="Tài khoản khách hàng" subtitle="Quản lý thông tin tài khoản TERRA ARCH." image={SOFA12_PAGE_IMAGES.contact} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={2}>
            {ACCOUNT_ITEMS.map((item) => (
              <Stack key={item.title} spacing={0.5} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
