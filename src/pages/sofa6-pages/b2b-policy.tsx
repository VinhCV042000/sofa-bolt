import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Chính sách đại lý — Sofa Earth' };

const SECTIONS = [
  {
    icon: 'solar:hand-money-bold-duotone',
    title: 'Chiết khấu',
    desc: 'Mức chiết khấu theo bậc doanh số, tăng dần từ 10% đến 35% cho đối tác đạt chỉ tiêu. Đối tác Green và Earth hưởng mức chiết khấu cao nhất cùng ưu đãi riêng theo từng chiến dịch xanh.',
  },
  {
    icon: 'solar:megaphone-bold-duotone',
    title: 'Hỗ trợ marketing',
    desc: 'Cung cấp bộ tài liệu sản phẩm, hình ảnh, video chất lượng cao. Hỗ trợ co-branding chiến dịch xanh, trưng bày tại showroom và chia sẻ leads từ kênh online của Sofa Earth.',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Bảo hành',
    desc: 'Bảo hành 5 năm khung gỗ và cơ cấu, 5 năm cho đệm. Bảo trì làm mới bọc linen/wool trọn đời với chi phí ưu đãi. Ưu tiên xử lý bảo hành cho dự án và đối tác B2B.',
  },
  {
    icon: 'solar:book-bookmark-bold-duotone',
    title: 'Đào tạo',
    desc: 'Đào tạo kiến thức sản phẩm, phân biệt linen tự nhiên, bông hữu cơ, wool và kỹ năng tư vấn bán hàng. Cập nhật xu hướng nội thất xanh mới qua các buổi workshop định kỳ.',
  },
  {
    icon: 'solar:map-bold-duotone',
    title: 'Vùng độc quyền',
    desc: 'Phân quyền khu vực bán hàng rõ ràng theo tỉnh/thành. Bảo vệ quyền lợi đại lý, không cạnh tranh trực tiếp trong cùng vùng độc quyền đã cam kết.',
  },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero
        title="Chính sách đại lý"
        subtitle="Chiết khấu, hỗ trợ marketing, bảo hành, đào tạo và vùng độc quyền dành riêng cho đối tác Sofa Earth."
        image={SOFA6_PAGE_IMAGES.b2b}
        overline="Chính sách B2B"
      />

      {/* Policy sections */}
      <Sofa6Section>
        <Grid container spacing={3}>
          {SECTIONS.map((s, index) => (
            <Grid key={s.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                  <Iconify icon={s.icon} width={28} />
                </Box>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{s.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa6Section>

      {/* CTA */}
      <Sofa6Section bg="grey">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          <Typography variant="h3" sx={{ ...textGradient(`135deg, ${SOFA6_COLORS.terracottaLight}, ${SOFA6_COLORS.sageLight}`) }}>
            Sẵn sàng trở thành đại lý?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để tận hưởng chính sách chiết khấu và hỗ trợ tốt nhất từ Sofa Earth.</Typography>
          <Button component={RouterLink} href="/sofa6/b2b/register" size="large" variant="contained" startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
            Đăng ký đại lý
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
