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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10PageHero, Sofa10Section } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  SOFA10_PAGE_PRODUCTS,
  SOFA10_PAGE_IMAGES,
  formatSofa10Price,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA10_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA10_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA10_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA10_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline="CHI TIẾT SẢN PHẨM" title={<><span>{product.name.toUpperCase()}</span></>} subtitle={product.material} image={product.image} />

      <Sofa10Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/3' }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, borderRadius: 1, overflow: 'hidden', cursor: 'pointer', border: selectedImage === i ? `2px solid ${SOFA10_COLORS.wood}` : '2px solid transparent', opacity: selectedImage === i ? 1 : 0.6, transition: 'all 0.2s' }}>
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
                {product.badge && <Chip label={product.badge} size="small" sx={{ bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight' }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>

              <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight' }}>{product.name}</Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood }}>{formatSofa10Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa10Price(product.oldPrice)}</Typography>}
              </Stack>

              <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{product.description}</Typography>

              <Divider />

              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>Chất liệu</Typography><Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>Kích thước</Typography><Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>{product.size}</Typography></Stack>

              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>Màu sắc</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: color, cursor: 'pointer', border: selectedColor === i ? `3px solid ${SOFA10_COLORS.wood}` : '2px solid transparent', transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa10/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 2, bgcolor: SOFA10_COLORS.charcoal, color: 'common.white', fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { bgcolor: SOFA10_COLORS.ink } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa10/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 2, borderColor: SOFA10_COLORS.wood, color: SOFA10_COLORS.wood, fontWeight: 'fontWeightLight', textTransform: 'none', '&:hover': { borderColor: SOFA10_COLORS.ink, color: SOFA10_COLORS.ink, bgcolor: 'transparent' } }}>Tư vấn</Button>
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
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Chất liệu</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{product.material}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Kích thước</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{product.size}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Đánh giá</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>{product.rating}/5 ({product.reviews} đánh giá)</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: 'text.secondary' }}>Bảo hành</Typography><Typography sx={{ fontWeight: 'fontWeightNormal' }}>12 năm</Typography></Stack>
              </Stack>
            )}
            {tab === 1 && <Typography sx={{ color: 'text.secondary', lineHeight: 2, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: 'text.secondary', lineHeight: 2, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Linen: giặt máy 30°C, phơi bóng râm. Gỗ: lau khăn ẩm, sơn dầu định kỳ 6 tháng. Bouclé: hút bụi, giặt khô.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Stack key={i} spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: SOFA10_COLORS.wood, color: 'common.white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'fontWeightNormal' }}>K{i}</Box>
                      <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightNormal' }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" /></Box>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>Sofa mộc mạc, linen thô đẹp, tone trầm tĩnh tại. Rất hài lòng với Sofa10!</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa10Section>

      <Sofa10Section bg="grey">
        <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', mb: 4, textAlign: 'center' }}>Sản phẩm liên quan</Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa10/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA10_COLORS.wood } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 1, aspectRatio: '4/5' }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 'fontWeightNormal', color: 'text.primary', transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA10_COLORS.wood, fontWeight: 'fontWeightNormal' }}>{formatSofa10Price(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa10Section>
    </>
  );
}
