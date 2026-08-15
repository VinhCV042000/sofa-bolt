import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { sofa19FormatPrice, SOFA19_PAGE_IMAGES, SOFA19_PAGE_PRODUCTS, SOFA19_PAGE_PRODUCT_CATEGORIES } from 'src/sections/sofa19-pages/sofa19-pages-data';

export default function Page() {
  const params = useParams();
  const slug = params.slug || '';
  const allCategories = [...SOFA19_PAGE_PRODUCT_CATEGORIES.types, ...SOFA19_PAGE_PRODUCT_CATEGORIES.styles, ...SOFA19_PAGE_PRODUCT_CATEGORIES.spaces, ...SOFA19_PAGE_PRODUCT_CATEGORIES.sizes, ...SOFA19_PAGE_PRODUCT_CATEGORIES.prices];
  const category = allCategories.find((c) => c.slug === slug);
  const label = category?.label || 'Tất cả sản phẩm';
  const filtered = SOFA19_PAGE_PRODUCTS.filter((p) => p.category === slug || p.style === slug);

  return (
    <>
      <Helmet><title>{label} — Sofa19</title></Helmet>
      <Sofa19PageHero overline="DANH MỤC" title={<span>{label.toUpperCase()}</span>} subtitle={`${filtered.length} sản phẩm trong danh mục ${label.toLowerCase()}.`} image={SOFA19_PAGE_IMAGES.prod1} />

      <Sofa19Section>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
          <Link component={RouterLink} href="/sofa19/products" sx={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), fontWeight: 700, '&:hover': { color: SOFA19_COLORS.coralDeep } }}>Sản phẩm</Typography></Link>
          <Iconify icon="solar:alt-arrow-right-linear" width={16} sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.4) }} />
          <Typography variant="body2" sx={{ color: SOFA19_COLORS.coralDeep, fontWeight: 800 }}>{label}</Typography>
        </Stack>

        {filtered.length === 0 ? (
          <Stack spacing={2} alignItems="center" sx={{ py: 10, textAlign: 'center' }}>
            <Iconify icon="solar:cart-large-2-minimalistic-bold-duotone" width={80} sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.3) }} />
            <Typography variant="h5" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.5), fontWeight: 800 }}>Chưa có sản phẩm trong danh mục này</Typography>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((product) => (
              <Grid key={product.id} xs={12} sm={6} md={4}>
                <Stack component={RouterLink} href={`/sofa19/products/${product.slug}`} spacing={2} sx={{ textDecoration: 'none', '&:hover .product-img': { transform: 'scale(1.05)' }, '&:hover .product-name': { color: SOFA19_COLORS.coralDeep } }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', borderRadius: '24px', border: `6px solid ${SOFA19_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa19Alpha(product.colors[0], 0.4)}` }}>
                    {product.badge && <Chip label={product.badge === 'bestseller' ? 'BÁN CHẠY' : product.badge === 'new' ? 'MỚI' : 'LIMITED'} size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1, bgcolor: SOFA19_COLORS.coral, color: SOFA19_COLORS.ink, fontWeight: 800, borderRadius: 99 }} />}
                    <Box className="product-img" component="img" src={product.image} alt={product.name} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography className="product-name" variant="subtitle1" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink, transition: 'color 0.2s' }}>{product.name}</Typography>
                    <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{product.material}</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating value={product.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: SOFA19_COLORS.coralDeep } }} />
                      <Typography variant="caption" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.5) }}>({product.reviews})</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: SOFA19_COLORS.jungle }}>{sofa19FormatPrice(product.price)}</Typography>
                      {product.oldPrice && <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.4), textDecoration: 'line-through' }}>{sofa19FormatPrice(product.oldPrice)}</Typography>}
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa19Section>
    </>
  );
}
