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

import { sofa14Alpha, SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { Sofa14PageHero, Sofa14Section, Sofa14Card } from 'src/sections/sofa14-pages/sofa14-page-hero';
import { SOFA14_PAGE_PRODUCTS, sofa14FormatPrice } from 'src/sections/sofa14-pages/sofa14-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.id || '';
  const product = SOFA14_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA14_PAGE_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tab, setTab] = useState(0);

  const related = SOFA14_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : SOFA14_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet><title>{product.name} — Sofa14</title></Helmet>
      <Sofa14PageHero overline="CHI TIẾT SẢN PHẨM" title={<><span>{product.name.toUpperCase()}</span></>} subtitle={product.material} image={product.image} />

      <Sofa14Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', aspectRatio: '4/3', borderRadius: '32px', border: `8px solid ${SOFA14_COLORS.white}`, boxShadow: `0 16px 0 -6px ${sofa14Alpha(product.colors[0], 0.4)}` }}>
                <Box component="img" src={product.images?.[selectedImage] || product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {(product.images?.length || 0) > 1 && (
                <Stack direction="row" spacing={2}>
                  {product.images?.map((img, i) => (
                    <Box key={i} onClick={() => setSelectedImage(i)} sx={{ width: 70, height: 70, overflow: 'hidden', cursor: 'pointer', borderRadius: '16px', border: selectedImage === i ? `3px solid ${SOFA14_COLORS.coralDeep}` : '2px solid transparent', opacity: selectedImage === i ? 1 : 0.6, transition: 'all 0.2s' }}>
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
                {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ bgcolor: SOFA14_COLORS.coral, color: SOFA14_COLORS.ink, fontWeight: 800, borderRadius: 99 }} />}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA14_COLORS.coralDeep } }} />
                  <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>{product.rating} ({product.reviews} đánh giá)</Typography>
                </Stack>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{product.name}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 800, color: SOFA14_COLORS.mintDeep }}>{sofa14FormatPrice(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.4), textDecoration: 'line-through' }}>{sofa14FormatPrice(product.oldPrice)}</Typography>}
              </Stack>
              <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.9), lineHeight: 1.9 }}>{product.description}</Typography>
              <Divider sx={{ borderColor: sofa14Alpha(SOFA14_COLORS.ink, 0.08) }} />
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>CHẤT LIỆU</Typography><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), fontWeight: 700 }}>{product.material}</Typography></Stack>
              <Stack spacing={1.5}><Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>KÍCH THƯỚC</Typography><Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), fontWeight: 700 }}>{product.size}</Typography></Stack>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA14_COLORS.coralDeep }}>MÀU SẮC</Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((color, i) => (
                    <Box key={i} onClick={() => setSelectedColor(i)} sx={{ width: 40, height: 40, bgcolor: color, cursor: 'pointer', borderRadius: '50%', border: selectedColor === i ? `3px solid ${SOFA14_COLORS.ink}` : '2px solid transparent', transition: 'all 0.2s' }} />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.6), fontWeight: 700 }}>{product.colorNames?.[selectedColor]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button component={RouterLink} href="/sofa14/cart" size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.mint, boxShadow: `0 8px 0 ${SOFA14_COLORS.mintDeep}`, '&:hover': { bgcolor: SOFA14_COLORS.mint, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA14_COLORS.mintDeep}` } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa14/showrooms/visit" size="large" variant="outlined" startIcon={<Iconify icon="solar:phone-bold-duotone" />} sx={{ borderRadius: 99, px: 4, py: 1.75, fontWeight: 800, color: SOFA14_COLORS.ink, bgcolor: SOFA14_COLORS.white, border: `2px solid ${sofa14Alpha(SOFA14_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA14_COLORS.coral, color: SOFA14_COLORS.coralDeep } }}>Tư vấn</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 2, borderColor: sofa14Alpha(SOFA14_COLORS.ink, 0.08), '& .MuiTab-root': { color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.5), fontWeight: 800 }, '& .Mui-selected': { color: SOFA14_COLORS.coralDeep }, '& .MuiTabs-indicator': { bgcolor: SOFA14_COLORS.coralDeep, height: 4, borderRadius: 99 } }}>
            <Tab label="Thông số kỹ thuật" />
            <Tab label="Hướng dẫn sử dụng" />
            <Tab label="Hướng dẫn bảo quản" />
            <Tab label="Đánh giá khách hàng" />
          </Tabs>
          <Box sx={{ py: 4 }}>
            {tab === 0 && (
              <Sofa14Card accent={SOFA14_COLORS.mint}>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Chất liệu</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{product.material}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Kích thước</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{product.size}</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Đánh giá</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>{product.rating}/5 ({product.reviews})</Typography></Stack>
                  <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.7) }}>Bảo hành</Typography><Typography sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>5 năm</Typography></Stack>
                </Stack>
              </Sofa14Card>
            )}
            {tab === 1 && <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9, maxWidth: 700 }}>Đặt sofa trên mặt phẳng, tránh va đập mạnh. Không đặt gần nguồn nhiệt. Sử dụng khăn mềm để vệ sinh hàng ngày.</Typography>}
            {tab === 2 && <Typography sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8), lineHeight: 1.9, maxWidth: 700 }}>Cotton: giặt máy, bộ vỏ tháo rời. Nỉ: hút bụi, giặt khô. Velvet: giặt khô chuyên dụng.</Typography>}
            {tab === 3 && (
              <Stack spacing={3}>
                {[1, 2, 3].map((i) => (
                  <Sofa14Card key={i} accent={[SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral][i - 1]}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: [SOFA14_COLORS.mint, SOFA14_COLORS.sky, SOFA14_COLORS.coral][i - 1], color: SOFA14_COLORS.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{i}</Box>
                        <Box><Typography variant="subtitle2" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink }}>Khách hàng {i}</Typography><Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA14_COLORS.coralDeep } }} /></Box>
                      </Stack>
                      <Typography variant="body2" sx={{ color: sofa14Alpha(SOFA14_COLORS.inkSoft, 0.8) }}>Sofa pastel pop tuyệt đẹp! Phòng khách của tôi như một không gian claymorphism!</Typography>
                    </Stack>
                  </Sofa14Card>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Sofa14Section>

      <Sofa14Section bg="canvasDeep">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textAlign: 'center', color: SOFA14_COLORS.ink, '& span': { color: SOFA14_COLORS.coralDeep } }}>Sản phẩm <span>liên quan</span></Typography>
        <Grid container spacing={3}>
          {displayRelated.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa14/products/${p.slug}`} spacing={1.5} sx={{ textDecoration: 'none', '&:hover .product-name': { color: SOFA14_COLORS.coralDeep } }}>
                <Box sx={{ overflow: 'hidden', aspectRatio: '4/5', borderRadius: '20px', border: `5px solid ${SOFA14_COLORS.white}`, boxShadow: `3px 3px 0 ${sofa14Alpha(p.colors[0], 0.4)}` }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography className="product-name" variant="body2" sx={{ fontWeight: 800, color: SOFA14_COLORS.ink, transition: 'color 0.2s' }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ color: SOFA14_COLORS.mintDeep, fontWeight: 800 }}>{sofa14FormatPrice(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa14Section>
    </>
  );
}
