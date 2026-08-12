import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';
import { Sofa1Section, Sofa1PageHero } from 'src/sections/sofa1-pages/sofa1-page-hero';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ nội thất - Casa Sofa' };

const CATEGORIES = [
  {
    title: 'Thiết kế nội thất',
    overline: 'Design',
    icon: 'solar:pen-new-round-bold-duotone',
    description: 'Giải pháp thiết kế nội thất trọn gói, từ ý tưởng đến bản vẽ thi công mang dấu ấn thủ công.',
    subs: [
      { title: 'Thiết kế sofa theo yêu cầu', desc: 'Sofa thiết kế riêng theo không gian và phong cách của bạn.' },
      { title: 'Thiết kế 3D', desc: 'Diễn họa 3D chân thực trước khi sản xuất.' },
      { title: 'Tư vấn bố trí nội thất', desc: 'Đội ngũ nghệ nhân tư vấn 1:1 miễn phí.' },
    ],
    href: '/sofa1/services/design',
  },
  {
    title: 'Dịch vụ sản xuất',
    overline: 'Production',
    icon: 'solar:hammer-bold-duotone',
    description: 'Xưởng chế tác thủ công quy mô lớn với nghệ nhân lành nghề và nguyên liệu chọn lọc.',
    subs: [
      { title: 'Gia công sofa', desc: 'Gia công sofa theo yêu cầu với độ chính xác cao.' },
      { title: 'Sofa OEM', desc: 'Sản xuất theo thương hiệu của đối tác.' },
      { title: 'Sofa ODM', desc: 'Thiết kế và sản xuất sản phẩm độc quyền.' },
      { title: 'Đặt hàng theo dự án', desc: 'Cung cấp sofa cho dự án căn hộ, khách sạn, resort.' },
    ],
    href: '/sofa1/services/production',
  },
];

const PROCESS = [
  { title: 'Tiếp nhận & tư vấn', desc: 'Lắng nghe yêu cầu và tư vấn giải pháp phù hợp với không gian.' },
  { title: 'Khảo sát & thiết kế', desc: 'Đo đạc hiện trạng và lên bản vẽ, diễn họa 3D.' },
  { title: 'Chế tác thủ công', desc: 'Nghệ nhân chế tác từng đường kim với nguyên liệu chọn lọc.' },
  { title: 'Bàn giao & bảo hành', desc: 'Lắp đặt tận nơi và bảo hành chính hãng 7 năm.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        overline="Dịch vụ"
        title="Dịch Vụ Casa Sofa"
        subtitle="Thiết kế và chế tác nội thất thủ công trọn gói — từ ý tưởng đến kiệt tác trong ngôi nhà của bạn."
        image={SOFA1_PAGE_IMAGES.service1}
      />

      {/* Categories */}
      <Sofa1Section>
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Lĩnh vực</Typography>
          <Typography variant="h2">
            Hai trụ cột
            <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}> dịch vụ</Box>
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {CATEGORIES.map((cat) => (
            <Grid key={cat.title} xs={12} md={6}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={3}
                sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
              >
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                  <Iconify icon={cat.icon} width={32} />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="overline" sx={{ color: 'primary.main' }}>{cat.overline}</Typography>
                  <Typography variant="h4">{cat.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{cat.description}</Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {cat.subs.map((sub) => (
                    <Stack key={sub.title} direction="row" spacing={1.5} alignItems="flex-start">
                      <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main', mt: 0.25 }} width={20} />
                      <Box>
                        <Typography variant="subtitle2">{sub.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{sub.desc}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Button component={RouterLink} href={cat.href} variant="contained" size="large" sx={{ width: 'fit-content' }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                  Khám phá
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* Process */}
      <Sofa1Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quy trình</Typography>
          <Typography variant="h2">Bốn bước chế tác</Typography>
        </Stack>
        <Grid container spacing={3}>
          {PROCESS.map((step, index) => (
            <Grid key={step.title} xs={12} sm={6} md={3}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ position: 'relative', p: 3 }}>
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main', fontWeight: 'fontWeightBold', fontSize: 24 }}>
                  {index + 1}
                </Box>
                <Typography variant="h6">{step.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa1Section>

      {/* CTA */}
      <Sofa1Section>
        <Stack component={MotionViewport} spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h3">Bạn cần tư vấn dịch vụ?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Liên hệ ngay để được đội ngũ nghệ nhân Casa Sofa tư vấn miễn phí.</Typography>
          <Button component={RouterLink} href="/sofa1/contact" size="large" variant="contained" color="primary" startIcon={<Iconify icon="solar:phone-bold-duotone" />}>
            Liên hệ tư vấn
          </Button>
        </Stack>
      </Sofa1Section>
    </>
  );
}
