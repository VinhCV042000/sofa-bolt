import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { sofa16FormatPrice, SOFA16_PAGE_PRODUCTS } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Card, Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA16_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA16_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA16_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA16_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet><title>{product.name} — Sofa16</title></Helmet>
      <Sofa16PageHero overline="CHI TIẾT TÁC PHẨM" title={<span>{product.name.toUpperCase()}</span>} subtitle={product.material} image={product.image} />

      <Sofa16Section bg="cream">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: 3 }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, overflow: 'hidden', cursor: 'pointer', borderRadius: 2, border: selectedImage === i ? `2px solid ${SOFA16_COLORS.terracotta}` : `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, opacity: selectedImage === i ? 1 : 0.6, transition: 'all 0.2s' }}>
                      <Box component="img" src={img} alt={`Thumb ${i}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ bgcolor: SOFA16_COLORS.terracotta, color: 'common.white', fontWeight: 'fontWeightMedium', borderRadius: 1 }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA16_COLORS.terracotta } }} />
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{product.name}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: SOFA16_COLORS.inkSoft, textDecoration: 'line-through', opacity: 0.5 }}>{sofa16FormatPrice(product.oldPrice)}</Typography>}
              </Stack>
              <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{product.description}</Typography>
              <Divider sx={{ borderColor: varAlpha(SOFA16_COLORS.terracotta, 0.15) }} />
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>CHẤT LIỆU</Typography><Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>KÍCH THƯỚC</Typography><Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>{product.size}</Typography></Stack>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep }}>MÀU SẮC</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, bgcolor: color, cursor: 'pointer', borderRadius: '50%', border: selectedColor === i ? `2px solid ${SOFA16_COLORS.terracotta}` : `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa16/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: 'common.white', bgcolor: SOFA16_COLORS.terracotta, boxShadow: `0 8px 24px -8px ${varAlpha(SOFA16_COLORS.terracotta, 0.6)}`, '&:hover': { bgcolor: SOFA16_COLORS.terracottaDeep } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa16/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 2, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.terracottaDeep, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.4)}`, '&:hover': { border: `1px solid ${SOFA16_COLORS.terracotta}`, bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.06) } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: varAlpha(SOFA16_COLORS.terracotta, 0.15), '& .MuiTab-root': { color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightMedium' }, '& .Mui-selected': { color: SOFA16_COLORS.terracotta }, '& .MuiTabs-indicator': { bgcolor: SOFA16_COLORS.terracotta } }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Sofa16Card accent={SOFA16_COLORS.terracotta}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Chất liệu</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{product.material}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Kích thước</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{product.size}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Đánh giá</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>{product.rating}/5 ({product.reviews})</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: SOFA16_COLORS.inkSoft }}>Bảo hành</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>10 năm</Typography></Stack>
                </Stack>
              </Sofa16Card>
            )}
            {tab === 1 && <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Linen: hút bụi định kỳ, giặt khô chuyên dụng. Tránh ánh nắng trực tiếp kéo dài.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Sofa16Card key={i} accent={[SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.azure][i - 1]}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 36, height: 36, bgcolor: [SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.azure][i - 1], color: 'common.white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'fontWeightMedium', borderRadius: '50%' }}>{i}</Box>
                        <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA16_COLORS.terracotta } }} /></Box>
                      </Stack>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, fontWeight: 'fontWeightLight' }}>Tuyệt tác Riviera! Phòng khách của tôi như một không gian Địa Trung Hải!</Typography>
                    </Stack>
                  </Sofa16Card>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa16Section>

      <Sofa16Section bg="stone">
        <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', mb: 4, textAlign: 'center', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>Tác phẩm <span>liên quan</span></Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa16/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA16_COLORS.terracotta } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/5', borderRadius: 2 }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`) }}>{sofa16FormatPrice(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa16Section>
    </>
  );
}
