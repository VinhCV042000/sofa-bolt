import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA2_PRODUCTS, formatSofa2Price, SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';
import { Sofa2Section, Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Danh sách yêu thích — LUXE Sofa' };

const WISHLIST = SOFA2_PRODUCTS.slice(0, 4);

export default function Page() {
  return (
    <>
      <Helmet><title>{metadata.title}</title></Helmet>

      <Sofa2PageHero
        title="Danh sách yêu thích"
        subtitle="Những sản phẩm bạn đã lưu — theo dõi giá và nhận thông báo khi có hàng."
        image={SOFA2_PAGE_IMAGES.cta}
        overline="Tài khoản"
      />

      <Sofa2Section>
        <Stack spacing={2} sx={{ mb: 4 }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h4">{WISHLIST.length} sản phẩm yêu thích</Typography>
        </Stack>

        {WISHLIST.length === 0 ? (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
            <Iconify icon="solar:heart-bold-duotone" width={96} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5">Chưa có sản phẩm yêu thích</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Lưu sản phẩm bạn thích bằng cách nhấn tim trên trang sản phẩm.</Typography>
            <Button component={RouterLink} href="/sofa2/products" size="large" variant="contained" startIcon={<Iconify icon="solar:bag-bold-duotone" />}>
              Khám phá sản phẩm
            </Button>
          </Stack>
        ) : (
          <Grid container spacing={3}>
            {WISHLIST.map((p, index) => (
              <Grid key={p.id} xs={12} sm={6} md={3}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inUp}
                  transition={{ delay: index * 0.06 }}
                  spacing={2}
                  sx={{ p: 2, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box component="img" src={p.image} sx={{ width: 1, height: 180, borderRadius: 1.5, objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', top: 8, right: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'error.main', color: 'common.white', cursor: 'pointer' }}>
                      <Iconify icon="solar:heart-bold" width={18} />
                    </Box>
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2">{p.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{p.material}</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>{formatSofa2Price(p.price)}</Typography>
                    <Chip label="Có hàng" size="small" color="success" variant="soft" />
                  </Stack>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="contained" fullWidth startIcon={<Iconify icon="solar:cart-bold-duotone" />} component={RouterLink} href="/sofa2/cart">
                      Thêm vào giỏ
                    </Button>
                    <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }}>
                      <Iconify icon="solar:trash-bin-trash-bold-duotone" width={18} />
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Sofa2Section>
    </>
  );
}
