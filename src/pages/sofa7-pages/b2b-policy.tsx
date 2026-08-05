import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';
import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chính sách đại lý — Sofa7' };

const POLICIES = [
  { icon: 'solar:hand-money-bold-duotone', title: 'Chiết khấu', desc: 'Chiết khấu từ 20-40% tùy hạng đại lý. Hạng Street Partner hưởng 40% chiết khấu khi đạt chỉ tiêu doanh số năm. Chiết khấu cộng thêm cho đơn hàng dự án số lượng lớn.' },
  { icon: 'solar:megaphone-bold-duotone', title: 'Hỗ trợ marketing', desc: 'Cung cấp full bộ tài liệu: hình ảnh, video, catalog, banner. Co-branding chiến dịch street, hỗ trợ chạy ads khu vực, cấp ngân sách marketing theo doanh số.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Bảo hành', desc: 'Bảo hành 10 năm khung thép hàn Mig, 5 năm da thật/velvet. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi. Hỗ trợ sửa chữa tại chỗ cho đại lý.' },
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Đào tạo', desc: 'Đào tạo kiến thức sản phẩm: da thật, velvet neon, khung thép. Kỹ năng tư vấn industrial loft. Workshop định kỳ cho nhân viên đại lý.' },
  { icon: 'solar:map-bold-duotone', title: 'Vùng độc quyền', desc: 'Phân quyền khu vực bán hàng rõ ràng theo quận/huyện/tỉnh. Bảo vệ quyền lợi đại lý, không cạnh tranh giá trong vùng độc quyền.' },
];

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title="CHÍNH SÁCH ĐẠI LÝ"
        subtitle="Chiết khấu 40%, hỗ trợ marketing, bảo hành 10 năm, đào tạo và vùng độc quyền — chính sách đại lý Sofa7 tối ưu cho đối tác."
        image={SOFA7_PAGE_IMAGES.b2b}
        overline="Chính sách"
      />

      {/* Intro */}
      <Sofa7Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>CHÍNH SÁCH ĐẠI LÝ SOFA7</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                Quyền lợi tối ưu
              </Box>
              {' '}cho đối tác
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Sofa7 cam kết mang đến chính sách đại lý minh bạch, cạnh tranh và quyền lợi dài hạn
              cho từng đối tác. 5 chính sách cốt lõi below đảm bảo lợi ích tối đa khi hợp tác.
            </Typography>
          </Box>
        </Stack>
      </Sofa7Section>

      {/* Policy cards */}
      <Sofa7Section bg="grey">
        <Grid container spacing={3}>
          {POLICIES.map((p, index) => (
            <Grid key={p.title} xs={12} sm={6} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                transition={{ delay: index * 0.06 }}
                spacing={2}
                sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                  <Iconify icon={p.icon} width={32} />
                </Box>
                <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>{p.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{p.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa7Section>

      {/* CTA */}
      <Sofa7Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`), textTransform: 'uppercase' }}>
              Sẵn sàng trở thành đối tác?
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary' }}>Đăng ký ngay để nhận chiết khấu và hỗ trợ tốt nhất từ Sofa7.</Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa7/b2b/register" size="large" variant="contained" sx={{ bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, borderRadius: 0, '&:hover': { bgcolor: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:hand-shake-bold-duotone" />}>
              Đăng ký đại lý
            </Button>
            <Button component={RouterLink} href="/sofa7/b2b/quote" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:document-bold-duotone" />}>
              Báo giá dự án
            </Button>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
