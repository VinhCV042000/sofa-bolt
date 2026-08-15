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

import { SOFA20_COLORS } from 'src/sections/sofa20/sofa20-data';
import { sofa20FormatPrice, SOFA20_PAGE_PRODUCTS } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Card, Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA20_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA20_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA20_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA20_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet><title>{product.name} — Sofa20</title></Helmet>
      <Sofa20PageHero overline="CHI TIẾT TÁC PHẨM" title={<span>{product.name.toUpperCase()}</span>} subtitle={product.material} image={product.image} />

      <Sofa20Section bg="black">
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.3)}` }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, overflow: 'hidden', cursor: 'pointer', border: selectedImage === i ? `2px solid ${SOFA20_COLORS.gold}` : `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}`, opacity: selectedImage === i ? 1 : 0.5, transition: 'all 0.2s' }}>
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
                {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ bgcolor: SOFA20_COLORS.gold, color: SOFA20_COLORS.black, fontWeight: 'fontWeightMedium', borderRadius: 0 }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA20_COLORS.gold } }} />
                  <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{product.name}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`) }}>{sofa20FormatPrice(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: varAlpha('#FFFFFF', 0.2), textDecoration: 'line-through' }}>{sofa20FormatPrice(product.oldPrice)}</Typography>}
              </Stack>
              <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{product.description}</Typography>
              <Divider sx={{ borderColor: varAlpha(SOFA20_COLORS.gold, 0.1) }} />
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold }}>CHẤT LIỆU</Typography><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold }}>KÍCH THƯỚC</Typography><Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>{product.size}</Typography></Stack>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold }}>MÀU SẮC</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, bgcolor: color, cursor: 'pointer', border: selectedColor === i ? `2px solid ${SOFA20_COLORS.gold}` : `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}`, transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: varAlpha('#FFFFFF', 0.3) }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa20/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.black, bgcolor: SOFA20_COLORS.gold, border: `1px solid ${SOFA20_COLORS.gold}`, '&:hover': { bgcolor: SOFA20_COLORS.goldLight } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa20/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 'fontWeightMedium', color: SOFA20_COLORS.gold, bgcolor: 'transparent', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.4)}`, '&:hover': { border: `1px solid ${SOFA20_COLORS.gold}`, bgcolor: varAlpha(SOFA20_COLORS.gold, 0.08) } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: varAlpha(SOFA20_COLORS.gold, 0.1), '& .MuiTab-root': { color: varAlpha('#FFFFFF', 0.3), fontWeight: 'fontWeightMedium' }, '& .Mui-selected': { color: SOFA20_COLORS.gold }, '& .MuiTabs-indicator': { bgcolor: SOFA20_COLORS.gold } }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Sofa20Card accent={SOFA20_COLORS.gold}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Chất liệu</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{product.material}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Kích thước</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{product.size}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Đánh giá</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>{product.rating}/5 ({product.reviews})</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Bảo hành</Typography><Typography sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>10 năm</Typography></Stack>
                </Stack>
              </Sofa20Card>
            )}
            {tab === 1 && <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, maxWidth: 700, fontWeight: 'fontWeightLight' }}>Da: lau bằng khăn mềm, dung dịch chuyên dụng. Dệt tay: hút bụi, giặt khô.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Sofa20Card key={i} accent={[SOFA20_COLORS.gold, SOFA20_COLORS.emerald, SOFA20_COLORS.burgundy][i - 1]}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 36, height: 36, bgcolor: [SOFA20_COLORS.gold, SOFA20_COLORS.emerald, SOFA20_COLORS.burgundy][i - 1], color: SOFA20_COLORS.black, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'fontWeightMedium' }}>{i}</Box>
                        <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white' }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA20_COLORS.gold } }} /></Box>
                      </Stack>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), fontWeight: 'fontWeightLight' }}>Tuyệt tác Riad công nghiệp! Phòng khách của tôi như một không gian Riad Manchester!</Typography>
                    </Stack>
                  </Sofa20Card>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa20Section>

      <Sofa20Section bg="charcoal">
        <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', mb: 4, textAlign: 'center', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>Tác phẩm <span>liên quan</span></Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa20/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA20_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/5', border: `1px solid ${varAlpha(SOFA20_COLORS.gold, 0.2)}` }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'fontWeightMedium', ...textGradient(`90deg, ${SOFA20_COLORS.goldLight} 0%, ${SOFA20_COLORS.gold} 50%, ${SOFA20_COLORS.goldDark} 100%`) }}>{sofa20FormatPrice(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa20Section>
    </>
  );
}
