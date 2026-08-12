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
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import {
  formatSofa7Price,
  SOFA7_PAGE_PRODUCTS,
} from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chi tiết sản phẩm — Sofa7' };

const REVIEWS = [
  { name: 'Đặng Việt', rating: 5, date: '15/01/2025', content: 'Sofa quá đẹp, vibe loft nguyên bản. Da thật mềm mại, khung thép chắc chắn. 10/10!' },
  { name: 'Lê Mai', rating: 5, date: '10/01/2025', content: 'Chất lượng đỉnh, giao hàng 24h. Lắp đặt miễn phí, nhân viên nhiệt tình.' },
  { name: 'Trần Khoa', rating: 4, date: '05/01/2025', content: 'Sofa đẹp, màu velvet đúng như ảnh. Giá hơi cao nhưng đáng tiền.' },
];

const QAS = [
  { question: 'Sofa có bảo hành bao lâu?', answer: 'Bảo hành 10 năm khung thép, 5 năm da/velvet. Bảo trì trọn đời.' },
  { question: 'Giao hàng bao lâu?', answer: 'Nội thành 24h, ngoại thành 2-3 ngày. Lắp đặt miễn phí toàn quốc.' },
  { question: 'Có đổi trả không?', answer: '30 ngày đổi trả không lý do. Hoàn tiền 100% cho sản phẩm tiêu chuẩn.' },
];

const SPECS = [
  { label: 'CHẤT LIỆU', value: '' },
  { label: 'KÍCH THƯỚC', value: '' },
  { label: 'BẢO HÀNH', value: '10 năm khung thép · 5 năm da/velvet' },
  { label: 'GIAO HÀNG', value: '24h nội thành · Lắp đặt miễn phí' },
];

const CARE_INSTRUCTIONS = [
  'Không dùng hóa chất mạnh khi vệ sinh da/velvet.',
  'Dưỡng da định kỳ 3 tháng/lần với kem dưỡng chuyên dụng.',
  'Tránh ánh nắng trực tiếp để không phai màu velvet.',
  'Hút bụi hàng tuần, lau mềm bằng khăn ẩm.',
];

export default function Page() {
  const theme = useTheme();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const product = SOFA7_PAGE_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              SẢN PHẨM KHÔNG TỒN TẠI
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Sản phẩm bạn tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.</Typography>
            <Button component={RouterLink} href="/sofa7/products" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG SẢN PHẨM
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  const related = SOFA7_PAGE_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const relatedFinal = related.length > 0 ? related : SOFA7_PAGE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${product.name}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline="SẢN PHẨM"
        title={
          <>
            {product.name.toUpperCase().split(' ').slice(0, 2).join(' ')}{' '}
            <span>{product.name.toUpperCase().split(' ').slice(2).join(' ')}</span>
          </>
        }
        image={product.image}
      />

      {/* Gallery + Info */}
      <Sofa7Section>
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {/* Gallery */}
          <Grid xs={12} md={6}>
            <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box sx={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 0, border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Box component="img" src={product.images[activeImage]} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              </Box>
              {product.images.length > 1 && (
                <Stack direction="row" spacing={1.5}>
                  {product.images.map((img, idx) => (
                    <Box
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      sx={{
                        width: 80,
                        height: 60,
                        borderRadius: 0,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: idx === activeImage ? `3px solid ${SOFA7_COLORS.electric}` : `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                      }}
                    >
                      <Box component="img" src={img} alt={`Thumb ${idx + 1}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Stack>
          </Grid>

          {/* Info */}
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Typography variant="body2" sx={{ color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1, fontSize: 12 }}>
                {product.material}
              </Typography>
              <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                {product.name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={product.rating} readOnly precision={0.1} size="large" sx={{ '& .MuiRating-iconFilled': { color: SOFA7_COLORS.electric } }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.rating} ({product.reviews} đánh giá)
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h4" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                  {formatSofa7Price(product.price)}
                </Typography>
                {product.oldPrice && (
                  <Typography variant="h6" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                    {formatSofa7Price(product.oldPrice)}
                  </Typography>
                )}
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{product.description}</Typography>

              {/* Colors */}
              <Stack spacing={1.5}>
                <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 2, fontWeight: 'fontWeightBold' }}>
                  MÀU SẮC
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  {product.colors.map((c, idx) => (
                    <Stack key={idx} spacing={0.5} alignItems="center">
                      <Box sx={{ width: 32, height: 32, bgcolor: c, borderRadius: 0, border: '2px solid', borderColor: 'divider', cursor: 'pointer', '&:hover': { borderColor: SOFA7_COLORS.electric } }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{product.colorNames[idx]}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>

              {/* Actions */}
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="contained" size="large" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', px: 4, '&:hover': { bgcolor: SOFA7_COLORS.cyan, color: SOFA7_COLORS.concrete } }} startIcon={<Iconify icon="solar:cart-bold-duotone" />}>
                  Thêm vào giỏ
                </Button>
                <Button variant="outlined" size="large" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', textTransform: 'uppercase', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
                  Tư vấn
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Sofa7Section>

      {/* Tabs: Info / Specs / Care */}
      <Sofa7Section bg="grey">
        <Stack spacing={3}>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ '& .MuiTab-root': { textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }, '& .MuiTabs-indicator': { bgcolor: SOFA7_COLORS.electric, height: 4 } }}>
            <Tab label="Thông tin" />
            <Tab label="Thông số" />
            <Tab label="Bảo quản" />
          </Tabs>

          {activeTab === 0 && (
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                {product.name}
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{product.description}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Sofa7 cam kết chất lượng với {product.material}. Mỗi sản phẩm trải qua 12 công đoạn QC, hàn Mig khung thép, bọc thủ công.
              </Typography>
            </Stack>
          )}

          {activeTab === 1 && (
            <Stack spacing={2}>
              {SPECS.map((spec) => (
                <Stack key={spec.label} direction="row" spacing={4} sx={{ py: 1.5, borderBottom: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Typography variant="overline" sx={{ color: SOFA7_COLORS.electric, letterSpacing: 2, fontWeight: 'fontWeightBold', minWidth: 120 }}>
                    {spec.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {spec.label === 'CHẤT LIỆU' ? product.material : spec.label === 'KÍCH THƯỚC' ? product.size : spec.value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          )}

          {activeTab === 2 && (
            <Stack spacing={2}>
              {CARE_INSTRUCTIONS.map((instruction, idx) => (
                <Stack key={idx} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, borderRadius: 0, flexShrink: 0, typography: 'caption', fontWeight: 'fontWeightBold' }}>
                    {idx + 1}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{instruction}</Typography>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </Sofa7Section>

      {/* Reviews */}
      <Sofa7Section>
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              ĐÁNH GIÁ ({product.reviews})
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {REVIEWS.map((review) => (
              <Grid key={review.name} xs={12} md={4}>
                <Stack spacing={2} sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{review.name}</Typography>
                    <Rating value={review.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA7_COLORS.electric } }} />
                  </Stack>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>{review.date}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{review.content}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa7Section>

      {/* Q&A */}
      <Sofa7Section bg="grey">
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.cyan }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              HỎI ĐÁP
            </Typography>
          </Stack>
          <Stack spacing={2}>
            {QAS.map((qa, idx) => (
              <Stack key={idx} spacing={1} sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="solar:question-circle-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.electric, flexShrink: 0, mt: 0.3 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'fontWeightBold' }}>{qa.question}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="solar:chat-square-bold-duotone" width={20} sx={{ color: SOFA7_COLORS.cyan, flexShrink: 0, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{qa.answer}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Sofa7Section>

      {/* Related products */}
      <Sofa7Section>
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box sx={{ width: 8, height: 40, bgcolor: SOFA7_COLORS.electric }} />
            <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              SẢN PHẨM LIÊN QUAN
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {relatedFinal.map((item) => (
              <Grid key={item.id} xs={6} md={3}>
                <Stack component={RouterLink} href={`/sofa7/products/${item.id}`} spacing={1.5} sx={{ textDecoration: 'none', borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, '&:hover': { borderColor: SOFA7_COLORS.electric }, overflow: 'hidden' }}>
                  <Box sx={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Box component="img" src={item.image} alt={item.name} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                  </Box>
                  <Stack spacing={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: 'text.primary' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold' }}>{formatSofa7Price(item.price)}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Sofa7Section>
    </>
  );
}
