import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa3Section, Sofa3PageHero } from 'src/sections/sofa3-pages/sofa3-page-hero';
import { SOFA3_PRODUCTS, formatSofa3Price } from 'src/sections/sofa3-pages/sofa3-pages-data';

const metadata = { title: 'Chi tiết sản phẩm - Sofa Terra' };

const TABS = ['Thông tin', 'Thông số kỹ thuật', 'Đánh giá', 'Hỏi đáp'];

export default function Page() {
  const theme = useTheme();
  const { slug } = useParams();
  const [tab, setTab] = useState(0);
  const product = SOFA3_PRODUCTS.find((p) => p.id === slug) || SOFA3_PRODUCTS[0];
  const related = SOFA3_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa3PageHero overline="Sản phẩm" title={product.name} subtitle={product.description} image={product.image} />

      <Sofa3Section>
        <Grid container spacing={{ xs: 4, md: 6 }} component={MotionViewport}>
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft} sx={{ overflow: 'hidden', borderRadius: 3 }}>
              <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {product.images.map((img, i) => (
                <Box key={i} component="img" src={img} alt={`${product.name} ${i + 1}`} sx={{ width: 80, height: 80, borderRadius: 2, objectFit: 'cover', cursor: 'pointer', border: (t) => `2px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.2)}` }} />
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={product.rating} precision={0.1} size="small" readOnly />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating} ({product.reviews} đánh giá)</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3" sx={{ color: 'success.main', fontWeight: 'fontWeightBold' }}>{formatSofa3Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h5" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa3Price(product.oldPrice)}</Typography>}
              </Stack>

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:leaf-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chất liệu: {product.material}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:ruler-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kích thước: {product.size}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:palette-bold-duotone" width={20} sx={{ color: 'success.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Màu sắc: {product.colors.join(', ')}</Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success" size="large" startIcon={<Iconify icon="solar:cart-bold-duotone" />} component={RouterLink} href="/sofa3/cart">
                  Thêm vào giỏ
                </Button>
                <Button variant="outlined" color="success" size="large" startIcon={<Iconify icon="solar:heart-bold-duotone" />}>
                  Yêu thích
                </Button>
              </Stack>

              <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {TABS.map((t) => <Tab key={t} label={t} />)}
              </Tabs>

              <Box sx={{ py: 2 }}>
                {tab === 0 && <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{product.description} Vật liệu tự nhiên 100%, carbon âm, tái chế 100% khi hết vòng đời.</Typography>}
                {tab === 1 && (
                  <Stack spacing={1}>
                    <Typography variant="body2">Chất liệu: {product.material}</Typography>
                    <Typography variant="body2">Kích thước: {product.size}</Typography>
                    <Typography variant="body2">Màu sắc: {product.colors.join(', ')}</Typography>
                    <Typography variant="body2">Bảo hành: 10 năm khung gỗ, 7 năm đệm bọc</Typography>
                  </Stack>
                )}
                {tab === 2 && (
                  <Stack spacing={2}>
                    {[{ name: 'Mai Thị Hồng', rating: 5, content: 'Sofa rất êm, linen hữu công mềm mại. Yêu!' }, { name: 'David Park', rating: 5, content: 'Eco-living đúng nghĩa. Carbon âm là điểm cộng lớn.' }].map((r) => (
                      <Stack key={r.name} spacing={1} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Rating value={r.rating} size="small" readOnly />
                          <Typography variant="subtitle2">{r.name}</Typography>
                        </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{r.content}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                )}
                {tab === 3 && (
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chưa có câu hỏi nào. Hỏi đầu tiên!</Typography>
                    <Button variant="outlined" color="success" size="small">Đặt câu hỏi</Button>
                  </Stack>
                )}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Sofa3Section>

      <Sofa3Section bg="grey">
        <Stack spacing={3}>
          <Typography variant="h4">Sản phẩm liên quan</Typography>
          <Grid container spacing={3}>
            {related.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1">{p.name}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'success.main', fontWeight: 'fontWeightBold' }}>{formatSofa3Price(p.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa3/products/${p.id}`} variant="outlined" color="success" size="small">Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa3Section>
    </>
  );
}
