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
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';
import { SOFA6_PRODUCTS, formatSofa6Price } from 'src/sections/sofa6-pages/sofa6-pages-data';

const metadata = { title: 'Chi tiết sản phẩm - Sofa Earth' };

const TABS = ['Thông tin', 'Thông số kỹ thuật', 'Bảo quản', 'Đánh giá', 'Hỏi đáp'];

const REVIEWS = [
  { name: 'Lê Thu Hằng', rating: 5, content: 'Sofa linen rất êm, màu terra ấm áp. Đúng phong cách tự nhiên mình tìm kiếm.' },
  { name: 'Trần Việt Cường', rating: 5, content: 'Vật liệu tự nhiên 100%, không hóa chất. An toàn cho con nhỏ, rất yên tâm.' },
];

export default function Page() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const product = SOFA6_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa6PageHero overline="Sản phẩm" title="Không tìm thấy sản phẩm" subtitle="Sản phẩm bạn tìm không tồn tại hoặc đã bị gỡ." image={SOFA6_PRODUCTS[0].image} />
        <Sofa6Section>
          <Stack spacing={2} alignItems="center" sx={{ py: 8, textAlign: 'center' }} component={MotionViewport}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>Sản phẩm không tồn tại</Typography>
            <Button component={RouterLink} href="/sofa6/products" variant="outlined" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem tất cả sản phẩm</Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  const related = SOFA6_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Sản phẩm" title={product.name} subtitle={product.description} image={product.image} />

      <Sofa6Section>
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
                <Typography variant="h3" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{formatSofa6Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h5" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa6Price(product.oldPrice)}</Typography>}
              </Stack>

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:leaf-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.sage }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chất liệu: {product.material}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:ruler-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.sage }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kích thước: {product.size}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon="solar:palette-bold-duotone" width={20} sx={{ color: SOFA6_COLORS.sage }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Màu sắc: {product.colors.join(', ')}</Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" startIcon={<Iconify icon="solar:cart-bold-duotone" />} component={RouterLink} href="/sofa6/cart" sx={{ bgcolor: SOFA6_COLORS.terracotta, color: 'common.white', '&:hover': { bgcolor: SOFA6_COLORS.clay } }}>
                  Thêm vào giỏ
                </Button>
                <Button variant="outlined" size="large" startIcon={<Iconify icon="solar:heart-bold-duotone" />} sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta, '&:hover': { borderColor: SOFA6_COLORS.clay, bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08) } }}>
                  Yêu thích
                </Button>
              </Stack>

              <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {TABS.map((t) => <Tab key={t} label={t} />)}
              </Tabs>

              <Box sx={{ py: 2 }}>
                {tab === 0 && <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{product.description} Vật liệu tự nhiên 100%, thuốc nhuộm thực vật, an toàn cho sức khỏe.</Typography>}
                {tab === 1 && (
                  <Stack spacing={1}>
                    <Typography variant="body2">Chất liệu: {product.material}</Typography>
                    <Typography variant="body2">Kích thước: {product.size}</Typography>
                    <Typography variant="body2">Màu sắc: {product.colors.join(', ')}</Typography>
                    <Typography variant="body2">Bảo hành: 5 năm khung gỗ, bảo trì bọc trọn đời</Typography>
                  </Stack>
                )}
                {tab === 2 && (
                  <Stack spacing={1}>
                    <Typography variant="body2">• Giặt nhẹ, không vắt mạnh, phơi bóng râm</Typography>
                    <Typography variant="body2">• Không dùng chất tẩy rửa hóa chất mạnh</Typography>
                    <Typography variant="body2">• Hút bụi định kỳ mỗi tuần 1 lần</Typography>
                    <Typography variant="body2">• Tránh ánh nắng trực tiếp để giữ màu nhuộm thực vật</Typography>
                  </Stack>
                )}
                {tab === 3 && (
                  <Stack spacing={2}>
                    {REVIEWS.map((r) => (
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
                {tab === 4 && (
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chưa có câu hỏi nào. Hỏi đầu tiên!</Typography>
                    <Button variant="outlined" size="small" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta, alignSelf: 'flex-start' }}>Đặt câu hỏi</Button>
                  </Stack>
                )}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack spacing={3} component={MotionViewport}>
          <Typography variant="h4">Sản phẩm liên quan</Typography>
          <Grid container spacing={3}>
            {related.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1">{p.name}</Typography>
                    <Typography variant="subtitle2" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold' }}>{formatSofa6Price(p.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa6/products/${p.id}`} variant="outlined" size="small" sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa6Section>
    </>
  );
}
