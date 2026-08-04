import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import {
  SOFA2_PRODUCTS,
  formatSofa2Price,
} from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const COLOR_SWATCH: Record<string, string> = {
  'Be': '#d9c5a0',
  'Xám': '#9e9e9e',
  'Nâu': '#6d4c3f',
  'Đen': '#222',
  'Trắng': '#f5f5f5',
  'Nâu đậm': '#4e342e',
  'Xám đậm': '#555',
  'Xanh navy': '#1a237e',
};

const TABS = [
  { value: 'info', label: 'Thông tin sản phẩm' },
  { value: 'specs', label: 'Thông số kỹ thuật' },
  { value: 'care', label: 'Hướng dẫn bảo quản' },
];

export default function Page() {
  const theme = useTheme();
  const { id = '' } = useParams();
  const [tab, setTab] = useState('info');
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const product = SOFA2_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Helmet><title>Không tìm thấy sản phẩm - LUXE Sofa</title></Helmet>
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 20 }}>
          <Iconify icon="solar:cart-cross-bold-duotone" width={72} sx={{ color: 'text.disabled' }} />
          <Typography variant="h4">Không tìm thấy sản phẩm</Typography>
          <Button component={RouterLink} href="/sofa2/products" variant="contained">Quay lại danh sách</Button>
        </Stack>
      </>
    );
  }

  const related = SOFA2_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  const images = product.images?.length ? product.images : [product.image];

  return (
    <>
      <Helmet><title>{product.name} - LUXE Sofa</title></Helmet>

      <Sofa2PageHero overline="Chi tiết sản phẩm" title={product.name} subtitle={product.description} image={product.image} />

      {/* Overview */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            {/* Gallery */}
            <Grid xs={12} md={6}>
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box component="img" src={images[selectedImage]} alt={product.name} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                <Stack direction="row" spacing={1.5}>
                  {images.map((src, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      src={src}
                      alt={`${product.name} ${idx + 1}`}
                      onClick={() => setSelectedImage(idx)}
                      sx={{ width: 80, height: 60, borderRadius: 1, objectFit: 'cover', cursor: 'pointer', border: (t) => `2px solid ${idx === selectedImage ? t.vars.palette.primary.main : 'transparent'}` }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Info */}
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h2">{product.name}</Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{formatSofa2Price(product.price)}</Typography>
                  {product.oldPrice && (
                    <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa2Price(product.oldPrice)}</Typography>
                  )}
                </Stack>
                <Typography sx={{ color: 'text.secondary' }}>{product.description}</Typography>

                {/* Colors */}
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Màu sắc</Typography>
                  <Stack direction="row" spacing={1.5}>
                    {(product.colors ?? []).map((color) => (
                      <Box key={color} title={color} sx={{ width: 28, height: 28, borderRadius: '50%', border: (t) => `2px solid ${t.vars.palette.divider}`, bgcolor: COLOR_SWATCH[color] ?? '#ccc', cursor: 'pointer' }} />
                    ))}
                  </Stack>
                </Stack>

                {/* Add to cart */}
                <Stack direction="row" spacing={2}>
                  <Button
                    size="large"
                    variant="contained"
                    color={added ? 'success' : 'primary'}
                    startIcon={<Iconify icon={added ? 'solar:check-circle-bold-duotone' : 'solar:cart-bold-duotone'} />}
                    onClick={() => setAdded(true)}
                  >
                    {added ? 'Đã thêm vào giỏ' : 'Thêm vào giỏ'}
                  </Button>
                  <Button component={RouterLink} href="/sofa2/showrooms" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
                    Tư vấn miễn phí
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Tabs: specs / care */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={4}>
            <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: (t) => `1px solid ${t.vars.palette.divider}` }}>
              {TABS.map((t) => <Tab key={t.value} value={t.value} label={t.label} />)}
            </Tabs>

            {tab === 'info' && (
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h5">Thông tin sản phẩm</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{product.description}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Sofa {product.name} được chế tác thủ công bởi nghệ nhân LUXE Sofa, đảm bảo chất lượng cao và độ bền vượt thời gian. Sản phẩm đi kèm bảo hành chính hãng 10 năm.</Typography>
              </Stack>
            )}

            {tab === 'specs' && (
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h5">Thông số kỹ thuật</Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                  <Stack sx={{ p: 2, borderRadius: 1, bgcolor: 'background.paper', flex: '1 1 200px' }}>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>Chất liệu</Typography>
                    <Typography>{product.material}</Typography>
                  </Stack>
                  <Stack sx={{ p: 2, borderRadius: 1, bgcolor: 'background.paper', flex: '1 1 200px' }}>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>Kích thước</Typography>
                    <Typography>{product.size}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            )}

            {tab === 'care' && (
              <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h5">Hướng dẫn bảo quản</Typography>
                <Typography sx={{ color: 'text.secondary' }}>• Hút bụi định kỳ hàng tuần bằng máy hút bụi đầu mềm.</Typography>
                <Typography sx={{ color: 'text.secondary' }}>• Tránh ánh nắng trực tiếp để không phai màu chất liệu.</Typography>
                <Typography sx={{ color: 'text.secondary' }}>• Với sofa da, dùng khăn ẩm lau nhẹ và dưỡng da 6 tháng/lần.</Typography>
                <Typography sx={{ color: 'text.secondary' }}>• Với sofa vải, giặt khô hoặc dùng dung dịch chuyên dụng.</Typography>
                <Typography sx={{ color: 'text.secondary' }}>• Liên hệ dịch vụ bảo trì miễn phí của LUXE Sofa trong năm đầu.</Typography>
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Reviews placeholder */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={3}>
            <Typography variant="h3">
              Đánh giá
              <Box component="span" sx={{ opacity: 0.4 }}> từ khách hàng</Box>
            </Typography>
            <Stack spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}>
              <Iconify icon="solar:chat-square-like-bold-duotone" width={40} sx={{ color: 'text.disabled', mx: 'auto' }} />
              <Typography sx={{ color: 'text.secondary' }}>Chưa có đánh giá cho sản phẩm này. Hãy là người đầu tiên đánh giá!</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Q&A placeholder */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: (t) => varAlpha(t.vars.palette.grey['500Channel'], 0.04) }}>
        <Container component={MotionViewport}>
          <Stack spacing={3}>
            <Typography variant="h3">
              Hỏi & Đáp
            </Typography>
            <Stack spacing={2} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}>
              <Iconify icon="solar:question-circle-bold-duotone" width={40} sx={{ color: 'text.disabled', mx: 'auto' }} />
              <Typography sx={{ color: 'text.secondary' }}>Chưa có câu hỏi nào. Bạn có thắc mắc về sản phẩm này?</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Related */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container component={MotionViewport}>
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Gợi ý cho bạn</Typography>
            <Typography variant="h2">
              Sản phẩm
              <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`) }}> liên quan</Box>
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {related.map((p) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ height: 1, borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover' }} />
                  <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle2">{p.name}</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{formatSofa2Price(p.price)}</Typography>
                    <Button component={RouterLink} href={`/sofa2/products/${p.id}`} size="small" variant="outlined">Xem chi tiết</Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
