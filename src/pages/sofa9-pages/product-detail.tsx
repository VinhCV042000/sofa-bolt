import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9PageHero, Sofa9Section } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  SOFA9_PAGE_PRODUCTS,
  SOFA9_PAGE_IMAGES,
  formatSofa9Price,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA9_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA9_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA9_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA9_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline="CHI TIẾT SẢN PHẨM" title={<><span>{product.name.toUpperCase()}</span></>} subtitle={product.material} image={product.image} />

      <Sofa9Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 80, height: 80, borderRadius: 2, overflow: 'hidden', cursor: 'pointer', border: selectedImage === i ? `2px solid ${SOFA9_COLORS.pink}` : '2px solid transparent', opacity: selectedImage === i ? 1 : 0.6, transition: 'all 0.2s' }}>
                      <Box component="img" src={img} alt={`Thumb ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" spacing={1} alignItems="center">
                {product.badge && <Chip label={product.badge} size="small" sx={{ bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>

              <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold' }}>{product.name}</Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink }}>{formatSofa9Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa9Price(product.oldPrice)}</Typography>}
              </Stack>

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{product.description}</Typography>

              <Divider />

              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Chất liệu</Typography><Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Kích thước</Typography><Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.size}</Typography></Stack>

              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Màu sắc</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: color, cursor: 'pointer', border: selectedColor === i ? `3px solid ${SOFA9_COLORS.pink}` : '2px solid transparent', transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa9/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 30, bgcolor: SOFA9_COLORS.pink, color: 'common.white', fontWeight: 'fontWeightBold', boxShadow: `0 4px 0 ${SOFA9_COLORS.black}`, '&:hover': { bgcolor: SOFA9_COLORS.pinkLight, boxShadow: `0 6px 0 ${SOFA9_COLORS.black}` } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa9/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 30, borderColor: SOFA9_COLORS.teal, color: SOFA9_COLORS.teal, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA9_COLORS.pink, color: SOFA9_COLORS.pink, bgcolor: 'transparent' } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Chất liệu</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{product.material}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Kích thước</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{product.size}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Đánh giá</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>{product.rating}/5 ({product.reviews} đánh giá)</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Bảo hành</Typography><Typography sx={{ fontWeight: 'fontWeightBold' }}>10 năm</Typography></Stack>
              </Stack>
            )}
            {tab === 1 && <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, maxWidth: 700 }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, maxWidth: 700 }}>Giặt khô định kỳ 6 tháng/lần. Tránh ánh nắng trực tiếp. Không dùng hóa chất mạnh. Velvet có lớp phủ chống bẩn.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Stack key={i} spacing={1} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: SOFA9_COLORS.pink, color: 'common.white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'fontWeightBold' }}>K{i}</Box>
                      <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" /></Box>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Sofa đẹp, velvet siêu mềm, màu neon bùng nổ. Rất hài lòng với Sofa9!</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa9Section>

      <Sofa9Section bg="grey">
        <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', mb: 4, textAlign: 'center' }}>Sản phẩm liên quan</Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa9/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA9_COLORS.pink } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary', transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA9_COLORS.pink, fontWeight: 'fontWeightBold' }}>{formatSofa9Price(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa9Section>
    </>
  );
}
