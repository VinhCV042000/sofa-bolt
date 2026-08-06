import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_PRODUCTS, formatSofa12PagePrice } from 'src/sections/sofa12-pages/sofa12-pages-data';

export default function Page() {
  const { id } = useParams();
  const product = SOFA12_PAGE_PRODUCTS.find((p) => p.id === id) || SOFA12_PAGE_PRODUCTS[0];

  return (
    <>
      <Helmet><title>{product.name} - TERRA ARCH</title></Helmet>
      <Sofa12PageHero overline="Chi tiết sản phẩm" title={product.name} subtitle={product.description} image={product.image} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid xs={12} md={6}>
              <Stack spacing={2}>
                <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                <Grid container spacing={1}>
                  {(product.images || [product.image]).map((img, i) => (
                    <Grid key={i} xs={3}>
                      <Box component="img" src={img} alt={`${product.name} ${i + 1}`} sx={{ width: 1, borderRadius: 1, aspectRatio: '1/1', objectFit: 'cover', cursor: 'pointer', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.2)}` }} />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>({product.reviews} đánh giá)</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h4" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold' }}>{formatSofa12PagePrice(product.price)}</Typography>
                  {product.oldPrice && <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa12PagePrice(product.oldPrice)}</Typography>}
                </Stack>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>{product.description}</Typography>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Chất liệu: {product.material}</Typography>
                  <Typography variant="subtitle2">Kích thước: {product.size}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="subtitle2">Màu sắc:</Typography>
                    {product.colors.map((c) => (
                      <Box key={c} sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), fontSize: 12 }}>{c}</Box>
                    ))}
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="warning" size="large" startIcon={<Iconify icon="solar:cart-bold-duotone" />}>Thêm vào giỏ</Button>
                  <Button variant="outlined" color="warning" size="large" startIcon={<Iconify icon="solar:heart-bold-duotone" />}>Yêu thích</Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Tabs value={0}>
              <Tab label="Thông số kỹ thuật" />
              <Tab label="Hướng dẫn bảo quản" />
              <Tab label="Đánh giá khách hàng" />
              <Tab label="Hỏi đáp" />
            </Tabs>
            <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, mt: 2 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {product.name} — {product.material}. Kích thước: {product.size}. Bảo hành 12 năm khung gỗ, 8 năm đệm.
                Vỏ đệm tháo giặt được, phủ chống thấm gốc nước. Giao hàng 48h nội thành, lắp đặt miễn phí.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
