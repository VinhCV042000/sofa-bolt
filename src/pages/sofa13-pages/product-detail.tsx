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

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_PRODUCTS, sofa13FormatPrice } from 'src/sections/sofa13-pages/sofa13-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA13_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA13_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA13_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA13_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet><title>{product.name} — Sofa13</title></Helmet>
      <Sofa13PageHero overline="CHI TIẾT SẢN PHẨM" title={<><span>{product.name.toUpperCase()}</span></>} subtitle={product.material} image={product.image} />

      <Sofa13Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.4)}`, p: '8px', bgcolor: SOFA13_COLORS.charcoal }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, overflow: 'hidden', cursor: 'pointer', border: selectedImage === i ? `2px solid ${SOFA13_COLORS.gold}` : '1px solid transparent', opacity: selectedImage === i ? 1 : 0.5, transition: 'all 0.2s' }}>
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
                {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ bgcolor: SOFA13_COLORS.gold, color: SOFA13_COLORS.noir, fontWeight: 700, borderRadius: 0 }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA13_COLORS.gold } }} />
                  <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{product.name}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold }}>{sofa13FormatPrice(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.3), textDecoration: 'line-through' }}>{sofa13FormatPrice(product.oldPrice)}</Typography>}
              </Stack>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>{product.description}</Typography>
              <Divider sx={{ borderColor: sofa13Alpha(SOFA13_COLORS.ivory, 0.1) }} />
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>CHẤT LIỆU</Typography><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), fontWeight: 700 }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>KÍCH THƯỚC</Typography><Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), fontWeight: 700 }}>{product.size}</Typography></Stack>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>MÀU SẮC</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, bgcolor: color, cursor: 'pointer', border: selectedColor === i ? `2px solid ${SOFA13_COLORS.ivory}` : '1px solid transparent', transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), fontWeight: 700 }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa13/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa13/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 0, px: 4, py: 1.75, fontWeight: 700, letterSpacing: 1.5, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: sofa13Alpha(SOFA13_COLORS.ivory, 0.1), '& .MuiTab-root': { color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), fontWeight: 700 }, '& .Mui-selected': { color: SOFA13_COLORS.gold }, '& .MuiTabs-indicator': { bgcolor: SOFA13_COLORS.gold } }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Chất liệu</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{product.material}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Kích thước</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{product.size}</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Đánh giá</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>{product.rating}/5 ({product.reviews})</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Bảo hành</Typography><Typography sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>10 năm</Typography></Stack>
              </Stack>
            )}
            {tab === 1 && <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9, maxWidth: 700 }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6), lineHeight: 1.9, maxWidth: 700 }}>Velvet: giặt khô, bộ vỏ tháo rời. Da Ý: lau khăn ẩm, tránh hóa chất. Linen: hút bụi, giặt khô.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Stack key={i} spacing={1} sx={{ p: 3, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.ivory, 0.08)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 36, height: 36, border: `1px solid ${SOFA13_COLORS.gold}`, color: SOFA13_COLORS.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{i}</Box>
                      <Box><Typography variant="subtitle2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA13_COLORS.gold } }} /></Box>
                    </Stack>
                    <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.6) }}>Sofa art deco sang trọng, velvet vàng tuyệt đẹp. Phòng khách của tôi như một salon jazz-age!</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa13Section>

      <Sofa13Section bg="charcoal">
        <Typography variant="h4" sx={{ fontWeight: 400, mb: 4, textAlign: 'center', letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>Sản phẩm <span>liên quan</span></Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa13/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA13_COLORS.gold } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/5', border: `1px solid ${sofa13Alpha(p.colors[0], 0.3)}` }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1, transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA13_COLORS.gold, fontWeight: 700 }}>{sofa13FormatPrice(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>
    </>
  );
}
