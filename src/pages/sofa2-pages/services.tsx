import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa2PageHero, Sofa2Section } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Dịch vụ nội thất - LUXE Sofa' };

const CATEGORIES = [
  {
    title: 'Thiết kế nội thất',
    overline: 'Design',
    icon: 'solar:pen-new-round-bold-duotone',
    description: 'Giải pháp thiết kế nội thất trọn gói, từ ý tưởng đến bản vẽ thi công.',
    subs: [
      { title: 'Thiết kế custom', desc: 'Sofa thiết kế riêng theo không gian và phong cách của bạn.' },
      { title: 'Diễn họa 3D', desc: 'Hình ảnh 3D chân thực trước khi sản xuất.' },
      { title: 'Tư vấn nội thất', desc: 'Đội ngũ chuyên gia tư vấn 1:1 miễn phí.' },
    ],
    href: '/sofa2/services/design',
  },
  {
    title: 'Dịch vụ sản xuất',
    overline: 'Production',
    icon: 'solar:hammer-bold-duotone',
    description: 'Xưởng sản xuất quy mô lớn với nghệ nhân lành nghề và máy móc hiện đại.',
    subs: [
      { title: 'Gia công', desc: 'Gia công sofa theo yêu cầu với độ chính xác cao.' },
      { title: 'OEM', desc: 'Sản xuất theo thương hiệu của đối tác.' },
      { title: 'ODM', desc: 'Thiết kế và sản xuất sản phẩm độc quyền.' },
      { title: 'Dự án', desc: 'Cung cấp sofa cho dự án căn hộ, khách sạn, resort.' },
    ],
    href: '/sofa2/services/production',
  },
];

const PROCESS = [
  { title: 'Tiếp nhận & tư vấn', desc: 'Lắng nghe yêu cầu và tư vấn giải pháp phù hợp.' },
  { title: 'Khảo sát & thiết kế', desc: 'Đo đạc hiện trạng và lên bản vẽ, diễn họa 3D.' },
  { title: 'Sản xuất & thi công', desc: 'Nghệ nhân chế tác thủ công với nguyên liệu chọn lọc.' },
  { title: 'Bàn giao & bảo hành', desc: 'Lắp đặt tận nơi và bảo hành chính hãng 10 năm.' },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa2PageHero
        overline="Dịch vụ"
        title="Dịch Vụ Của LUXE Sofa"
        subtitle="Thiết kế và sản xuất nội thất trọn gói — từ ý tưởng đến kiệt tác trong ngôi nhà của bạn."
        image={SOFA2_PAGE_IMAGES.service1}
      />

      {/* Categories */}
      <Sofa2Section>
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
      </Sofa2Section>

      {/* Process */}
      <Sofa2Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>Quy trình</Typography>
          <Typography variant="h2">Bốn bước làm việc</Typography>
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
      </Sofa2Section>
    </>
  );
}
