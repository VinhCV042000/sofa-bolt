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

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_PRODUCTS, SOFA11_PAGE_IMAGES, formatSofa11Price } from 'src/sections/sofa11-pages/sofa11-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA11_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA11_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA11_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA11_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet><title>{product.name} — Sofa11</title></Helmet>
      <Sofa11PageHero overline="CHI TIẾT SẢN PHẨM" title={<><span>{product.name.toUpperCase()}</span></>} subtitle={product.material} image={product.image} />

      <Sofa11Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: '24px 24px 24px 0', aspectRatio: '4/3', border: `3px solid ${sofa11Alpha(product.colors[0], 0.4)}` }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, borderRadius: '12px 12px 12px 0', overflow: 'hidden', cursor: 'pointer', border: selectedImage === i ? `2px solid ${SOFA11_COLORS.lime}` : '2px solid transparent', opacity: selectedImage === i ? 1 : 0.5, transition: 'all 0.2s' }}>
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
                {product.badge && <Chip label={product.badge} size="small" sx={{ bgcolor: product.colors[0], color: SOFA11_COLORS.void, fontWeight: 900 }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA11_COLORS.lime } }} />
                  <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.cream }}>{product.name}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 900, color: SOFA11_COLORS.magenta, textShadow: `2px 2px 0 ${SOFA11_COLORS.cyan}` }}>{formatSofa11Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.3), textDecoration: 'line-through' }}>{formatSofa11Price(product.oldPrice)}</Typography>}
              </Stack>
              <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.72), lineHeight: 1.8 }}>{product.description}</Typography>
              <Divider sx={{ borderColor: sofa11Alpha(SOFA11_COLORS.cream, 0.1) }} />
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Chất liệu</Typography><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), fontWeight: 700 }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Kích thước</Typography><Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), fontWeight: 700 }}>{product.size}</Typography></Stack>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.lime, textTransform: 'uppercase' }}>Màu sắc</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: color, cursor: 'pointer', border: selectedColor === i ? `3px solid ${SOFA11_COLORS.cream}` : '2px solid transparent', transition: 'all 0.2s', boxShadow: selectedColor === i ? `0 0 16px ${sofa11Alpha(color, 0.6)}` : 'none' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), fontWeight: 700 }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa11/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.void, bgcolor: SOFA11_COLORS.lime, boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`, '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' }, transition: 'all .25s' }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa11/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 700, textTransform: 'uppercase', color: SOFA11_COLORS.cream, border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}`, '&:hover': { borderColor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.magenta } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: sofa11Alpha(SOFA11_COLORS.cream, 0.1), '& .MuiTab-root': { color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), fontWeight: 800 }, '& .Mui-selected': { color: SOFA11_COLORS.lime }, '& .MuiTabs-indicator': { bgcolor: SOFA11_COLORS.lime } }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Chất liệu</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{product.material}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Kích thước</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{product.size}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Đánh giá</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>{product.rating}/5 ({product.reviews})</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Bảo hành</Typography><Typography sx={{ fontWeight: 800, color: SOFA11_COLORS.cream }}>10 năm</Typography></Stack>
              </Stack>
            )}
            {tab === 1 && <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8, maxWidth: 700 }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8, maxWidth: 700 }}>Nhung: giặt máy 30°C, bộ vỏ tháo rời. Da bóng: lau khăn ẩm, tránh hóa chất. Corduroy: hút bụi, giặt khô.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Stack key={i} spacing={1} sx={{ p: 3, borderRadius: '16px 16px 16px 0', bgcolor: sofa11Alpha(SOFA11_COLORS.grape, 0.5), border: `1px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.08)}` }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.void, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>K{i}</Box>
                      <Box><Typography variant="subtitle2" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA11_COLORS.lime } }} /></Box>
                    </Stack>
                    <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>Sofa pop chói, đường cong đẹp, module ghép tự do. Phòng khách của tôi bùng nổ!</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa11Section>

      <Sofa11Section bg="grape">
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center', textTransform: 'uppercase', color: SOFA11_COLORS.cream }}>Sản phẩm liên quan</Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa11/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA11_COLORS.lime } }}>
                <Box sx={{ overflow: 'hidden', borderRadius: '12px 12px 12px 0', aspectRatio: '4/5', border: `2px solid ${sofa11Alpha(p.colors[0], 0.3)}` }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 900, color: SOFA11_COLORS.cream, textTransform: 'uppercase', transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA11_COLORS.magenta, fontWeight: 900 }}>{formatSofa11Price(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>
    </>
  );
}
