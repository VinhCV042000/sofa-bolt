import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { useParams } from 'react-router-dom';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18PageHero, Sofa18Section } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_PRODUCTS, SOFA18_PAGE_IMAGES, formatSofa18Price } from 'src/sections/sofa18-pages/sofa18-pages-data';

const TABS = [
  { value: 'info', label: 'Thông tin' },
  { value: 'specs', label: 'Thông số' },
  { value: 'guide', label: 'Hướng dẫn' },
  { value: 'reviews', label: 'Đánh giá' },
  { value: 'qa', label: 'Hỏi đáp' },
];

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug || '';
  const product = SOFA18_PAGE_PRODUCTS.find((p) => p.slug === slug) || SOFA18_PAGE_PRODUCTS[0];
  const [tab, setTab] = useState('info');
  const related = SOFA18_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} — Muji-An</title>
      </Helmet>

      <Sofa18PageHero overline="CHI TIẾT" title={<>{product.name.toUpperCase()}</>} subtitle={product.description} image={product.image} />

      <Sofa18Section>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ overflow: 'hidden', borderRadius: 3, aspectRatio: '4/3' }}>
                <Box component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              <Stack direction="row" spacing={2}>
                {product.images?.map((img, i) => (
                  <Box key={i} sx={{ width: 80, height: 80, borderRadius: 2, overflow: 'hidden', border: `2px solid ${i === 0 ? SOFA18_COLORS.sage : 'transparent'}` }}>
                    <Box component="img" src={img} alt={`${product.name} ${i + 1}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                ))}
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<Iconify icon="solar:camera-bold-duotone" />} sx={{ borderColor: SOFA18_COLORS.clay, color: SOFA18_COLORS.charcoal }}>Hình 360°</Button>
                <Button variant="outlined" startIcon={<Iconify icon="solar:video-bold-duotone" />} sx={{ borderColor: SOFA18_COLORS.clay, color: SOFA18_COLORS.charcoal }}>Video</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Rating value={product.rating} readOnly precision={0.1} sx={{ color: SOFA18_COLORS.sage }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{product.rating} ({product.reviews} đánh giá)</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.sageDeep }}>{formatSofa18Price(product.price)}</Typography>
                {product.oldPrice && <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatSofa18Price(product.oldPrice)}</Typography>}
                {product.badge && <Chip label={product.badge} sx={{ bgcolor: SOFA18_COLORS.sage, color: 'common.white', fontWeight: 'fontWeightBold' }} />}
              </Stack>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chất liệu: {product.material}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Kích thước: {product.size}</Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Màu sắc:</Typography>
                <Stack direction="row" spacing={1}>
                  {product.colors.map((c, i) => (
                    <Box key={i} sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: c, border: '2px solid', borderColor: 'background.paper', boxShadow: 1 }} title={product.colorNames?.[i] || c} />
                  ))}
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Tùy chọn cấu hình:</Typography>
                <Grid container spacing={2}>
                  <Grid xs={6}><TextField fullWidth label="Kích thước" defaultValue={product.size} size="small" /></Grid>
                  <Grid xs={6}><TextField fullWidth label="Số chỗ" defaultValue="3" size="small" /></Grid>
                </Grid>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button size="large" variant="contained" startIcon={<Iconify icon="solar:cart-large-bold-duotone" />} sx={{ bgcolor: SOFA18_COLORS.sageDeep, color: 'common.white', fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA18_COLORS.sage } }}>Thêm vào giỏ</Button>
                <Button component={RouterLink} href="/sofa18/cart" size="large" variant="outlined" sx={{ borderColor: SOFA18_COLORS.clay, color: SOFA18_COLORS.charcoal, fontWeight: 'fontWeightBold' }}>Mua ngay</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa18Section>

      <Sofa18Section bg="paper">
        <Stack spacing={3}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
            {TABS.map((t) => <Tab key={t.value} value={t.value} label={t.label} />)}
          </Tabs>

          {tab === 'info' && <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 800 }}>{product.description} Linen hữu cơ không nhuộm, đan tay. Khung hinoki bào tay từ rừng Yoshino. Mỗi tác phẩm độc nhất, tôn vinh wabi-sabi.</Typography>}
          {tab === 'specs' && (
            <Stack spacing={1} sx={{ maxWidth: 600 }}>
              {[
                ['Chất liệu', product.material], ['Kích thước', product.size], ['Khung', 'Hinoki cedar (FSC®)'], ['Bọc', 'Linen GOTS® / Hemp'], ['Đệm', 'HR foam 40D'], ['Tải trọng', '300kg'], ['Bảo hành', '10 năm + trọn đời kintsugi'],
              ].map(([k, v]) => (
                <Stack key={k} direction="row" justifyContent="space-between" sx={{ py: 1, borderBottom: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}` }}>
                  <Typography variant="body2" sx={{ fontWeight: 'fontWeightBold' }}>{k}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{v}</Typography>
                </Stack>
              ))}
            </Stack>
          )}
          {tab === 'guide' && (
            <Stack spacing={3} sx={{ maxWidth: 800 }}>
              <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', mb: 1 }}>Hướng dẫn sử dụng</Typography><Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Tránh ánh nắng trực tiếp. Không đặt gần nguồn nhiệt. Lật đệm định kỳ.</Typography></Box>
              <Box><Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold', mb: 1 }}>Hướng dẫn bảo quản</Typography><Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>Giặt khô linen. Không dùng hóa chất mạnh. Phơi bóng râm. Kintsugi repair cho vết nứt.</Typography></Box>
            </Stack>
          )}
          {tab === 'reviews' && (
            <Stack spacing={3} sx={{ maxWidth: 800 }}>
              {[1, 2, 3].map((i) => (
                <Stack key={i} spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default', border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: SOFA18_COLORS.sage, width: 40, height: 40 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>Khách hàng {i}</Typography>
                    <Rating value={5} readOnly size="small" sx={{ color: SOFA18_COLORS.sage }} />
                  </Stack>
                  <Typography sx={{ color: 'text.secondary' }}>Sofa tuyệt vời, mang lại tĩnh lặng cho phòng khách. Linen êm, khung hinoki thơm.</Typography>
                </Stack>
              ))}
            </Stack>
          )}
          {tab === 'qa' && (
            <Stack spacing={3} sx={{ maxWidth: 800 }}>
              <Stack spacing={2}>
                <TextField fullWidth label="Câu hỏi của bạn" multiline rows={2} />
                <Button variant="contained" sx={{ alignSelf: 'flex-start', bgcolor: SOFA18_COLORS.sageDeep, color: 'common.white' }}>Gửi câu hỏi</Button>
              </Stack>
              <Typography sx={{ color: 'text.secondary' }}>Chưa có câu hỏi. Hãy là người đầu tiên!</Typography>
            </Stack>
          )}
        </Stack>
      </Sofa18Section>

      <Sofa18Section>
        <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', color: SOFA18_COLORS.charcoal, mb: 4 }}>Sản phẩm liên quan</Typography>
        <Grid container spacing={3}>
          {related.map((p) => (
            <Grid key={p.id} xs={6} md={3}>
              <Stack component={RouterLink} href={`/sofa18/products/${p.slug}`} spacing={1} sx={{ textDecoration: 'none' }}>
                <Box sx={{ overflow: 'hidden', borderRadius: 2, aspectRatio: '4/5' }}>
                  <Box component="img" src={p.image} alt={p.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 'fontWeightBold', color: 'text.primary' }}>{p.name}</Typography>
                <Typography variant="caption" sx={{ color: SOFA18_COLORS.sageDeep }}>{formatSofa18Price(p.price)}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa18Section>
    </>
  );
}
