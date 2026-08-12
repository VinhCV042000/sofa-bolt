import { useMemo } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA2_MILESTONES } from 'src/sections/sofa2/sofa2-data';
import { Sofa2PageHero } from 'src/sections/sofa2/sofa2-page-hero';
import { SOFA2_PAGE_IMAGES } from 'src/sections/sofa2/sofa2-pages-data';

// ----------------------------------------------------------------------

const SECTION_META: Record<string, { title: string; overline: string; image: string; helmet: string }> = {
  history: { title: 'Lịch sử phát triển', overline: 'Hành trình 12 năm', image: SOFA2_PAGE_IMAGES.aboutHero, helmet: 'Lịch sử - LUXE Sofa' },
  vision: { title: 'Tầm nhìn & Sứ mệnh', overline: 'Định hướng tương lai', image: SOFA2_PAGE_IMAGES.workshop, helmet: 'Tầm nhìn - LUXE Sofa' },
  values: { title: 'Giá trị cốt lõi', overline: 'Triết lý thương hiệu', image: SOFA2_PAGE_IMAGES.workshop, helmet: 'Giá trị - LUXE Sofa' },
  factory: { title: 'Nhà máy chế tác', overline: 'Năng lực sản xuất', image: SOFA2_PAGE_IMAGES.factory, helmet: 'Nhà máy - LUXE Sofa' },
  process: { title: 'Quy trình chế tác', overline: 'Từ ý tưởng đến sản phẩm', image: SOFA2_PAGE_IMAGES.factory, helmet: 'Quy trình - LUXE Sofa' },
  technology: { title: 'Công nghệ ứng dụng', overline: 'Đổi mới không ngừng', image: SOFA2_PAGE_IMAGES.technology, helmet: 'Công nghệ - LUXE Sofa' },
  certifications: { title: 'Chứng nhận chất lượng', overline: 'Tiêu chuẩn quốc tế', image: SOFA2_PAGE_IMAGES.factory, helmet: 'Chứng nhận - LUXE Sofa' },
  team: { title: 'Đội ngũ nghệ nhân', overline: 'Những con người tạo nên LUXE', image: SOFA2_PAGE_IMAGES.team, helmet: 'Đội ngũ - LUXE Sofa' },
  partners: { title: 'Đối tác của LUXE Sofa', overline: 'Mạng lưới hợp tác', image: SOFA2_PAGE_IMAGES.cta, helmet: 'Đối tác - LUXE Sofa' },
  gallery: { title: 'Thư viện ảnh', overline: 'Khoảnh khắc chế tác', image: SOFA2_PAGE_IMAGES.workshop, helmet: 'Thư viện ảnh - LUXE Sofa' },
  video: { title: 'Video hoạt động', overline: 'Hình ảnh động', image: SOFA2_PAGE_IMAGES.technology, helmet: 'Video - LUXE Sofa' },
};

const VALUES = [
  { icon: 'solar:pallete2-bold-duotone', title: 'Thiết kế độc quyền', desc: 'Mỗi mẫu sofa là thiết kế riêng, không trùng lặp trên thị trường.' },
  { icon: 'solar:leaf-bold-duotone', title: 'Gỗ FSC bền vững', desc: 'Khung gỗ sồi chứng nhận FSC, thân thiện môi trường.' },
  { icon: 'solar:bed-bold-duotone', title: 'Đệm Memory Foam', desc: 'Công nghệ đệm Đức ôm cơ thể, giữ form vượt thời gian.' },
];

const VISION = [
  { icon: 'solar:eye-bold-duotone', title: 'Tầm nhìn', desc: 'Trở thành thương hiệu sofa cao cấp số 1 Đông Nam Á vào năm 2030.' },
  { icon: 'solar:rocket-bold-duotone', title: 'Sứ mệnh', desc: 'Mang đến không gian sống sang trọng và bền vững cho mọi gia đình Việt.' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Thiết kế', desc: 'Đội ngũ thiết kế phác thảo 3D theo yêu cầu khách hàng.' },
  { step: '02', title: 'Chọn vật liệu', desc: 'Tuyển chọn gỗ sồi FSC, da bò và vải linen cao cấp.' },
  { step: '03', title: 'Chế tác khung', desc: 'Nghệ nhân gia công khung gỗ bằng tay, độ chính xác mm.' },
  { step: '04', title: 'May bọc', desc: 'May đệm, bọc da/vải thủ công với từng đường kim.' },
  { step: '05', title: 'Kiểm tra', desc: 'Kiểm tra chất lượng 12 tiêu chuẩn trước khi xuất xưởng.' },
];

const TECH = [
  { icon: 'solar:cpu-bold-duotone', title: 'Cắt CNC', desc: 'Máy cắt CNC độ chính xác 0.1mm cho khung gỗ.' },
  { icon: 'solar:bed-bold-duotone', title: 'Memory Foam', desc: 'Công nghệ đệm Đức ôm cơ thể, giảm áp lực cột sống.' },
  { icon: 'solar:battery-charge-bold-duotone', title: 'Recliner điện', desc: 'Cơ chế recliner Nhật Bản, 3 tư thế ngả, massage lưng.' },
  { icon: 'solar:wi-fi-router-bold-duotone', title: 'Sofa thông minh', desc: 'Tích hợp USB, loa Bluetooth và ngăn chứa thông minh.' },
];

const CERTS = [
  { icon: 'solar:leaf-bold-duotone', title: 'FSC', desc: 'Chứng nhận quản lý rừng bền vững.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'ISO 9001', desc: 'Quản lý chất lượng quốc tế.' },
  { icon: 'solar:medal-ribbon-bold-duotone', title: 'CE', desc: 'Tiêu chuẩn an toàn Châu Âu.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'EcoLabel', desc: 'Nhãn sinh thái thân thiện môi trường.' },
];

const TEAM = [
  { name: 'Nguyễn Minh Anh', role: 'Giám đốc sáng tạo', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Trần Hoàng Long', role: 'Trưởng xưởng chế tác', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Lê Thu Hà', role: 'Trưởng phòng thiết kế', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { name: 'Phạm Quốc Bảo', role: 'Quản lý chất lượng', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
];

const PARTNERS = ['Vingroup', 'Vinpearl', 'Marriott', 'InterContinental', 'BMW', 'Sun Group'];

const GALLERY = [SOFA2_PAGE_IMAGES.workshop, SOFA2_PAGE_IMAGES.factory, SOFA2_PAGE_IMAGES.technology, SOFA2_PAGE_IMAGES.team, SOFA2_PAGE_IMAGES.product1, SOFA2_PAGE_IMAGES.product7, SOFA2_PAGE_IMAGES.cta, SOFA2_PAGE_IMAGES.contact];

export default function Page() {
  const theme = useTheme();
  const { section = '' } = useParams();

  const meta = SECTION_META[section] ?? {
    title: 'Không tìm thấy trang',
    overline: 'Lỗi',
    image: SOFA2_PAGE_IMAGES.aboutHero,
    helmet: 'Không tìm thấy - LUXE Sofa',
  };

  const content = useMemo(() => {
    switch (section) {
      case 'history':
        return (
          <Stack spacing={4} component={MotionViewport}>
            {SOFA2_MILESTONES.map((item, idx) => (
              <Grid key={item.year} container spacing={4} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Grid xs={12} sm={3}>
                  <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 'fontWeightBold' }}>{item.year}</Typography>
                </Grid>
                <Grid xs={12} sm={9}>
                  <Stack spacing={0.5}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        );
      case 'vision':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {VISION.map((item) => (
              <Grid key={item.title} xs={12} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'values':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {VALUES.map((item) => (
              <Grid key={item.title} xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'factory':
        return (
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" component={MotionViewport}>
            <Grid xs={12} md={6}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box component="img" src={SOFA2_PAGE_IMAGES.factory} alt="Nhà máy" sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h3">Nhà máy 5000m² tại Bình Dương</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Nhà máy LUXE Sofa được trang bị dây chuyền sản xuất hiện đại kết hợp chế tác thủ công, công suất 500 sofa/tháng với hơn 80 nghệ nhân lành nghề.</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Khu vực sản xuất được chia thành các phân xưởng chuyên biệt: chế tác gỗ, may bọc, lắp ráp và kiểm tra chất lượng, đảm bảo mỗi sản phẩm đạt chuẩn quốc tế.</Typography>
              </Stack>
            </Grid>
          </Grid>
        );
      case 'process':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {PROCESS_STEPS.map((item) => (
              <Grid key={item.step} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h2" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}`), opacity: 0.5 }}>{item.step}</Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'technology':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {TECH.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'certifications':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {CERTS.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} alignItems="center" sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center' }}>
                  <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={item.icon} width={36} />
                  </Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'team':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {TEAM.map((member) => (
              <Grid key={member.name} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} alignItems="center" sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Avatar src={member.avatar} alt={member.name} sx={{ width: 96, height: 96 }} />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{member.role}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'partners':
        return (
          <Grid container spacing={3} component={MotionViewport}>
            {PARTNERS.map((name) => (
              <Grid key={name} xs={6} sm={4} md={2}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} alignItems="center" justifyContent="center" sx={{ p: 4, height: 120, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', opacity: 0.6 }}>{name}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        );
      case 'gallery':
        return (
          <Grid container spacing={2} component={MotionViewport}>
            {GALLERY.map((src, idx) => (
              <Grid key={idx} xs={6} sm={4} md={3}>
                <Box component={m.img} variants={varFade({ distance: 24 }).inUp} src={src} alt={`Gallery ${idx + 1}`} sx={{ width: 1, borderRadius: 2, aspectRatio: '1/1', objectFit: 'cover' }} />
              </Grid>
            ))}
          </Grid>
        );
      case 'video':
        return (
          <Stack spacing={3} component={MotionViewport}>
            {[SOFA2_PAGE_IMAGES.technology, SOFA2_PAGE_IMAGES.factory, SOFA2_PAGE_IMAGES.workshop].map((src, idx) => (
              <Box key={idx} component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '16/9' }}>
                <Box component="img" src={src} alt={`Video ${idx + 1}`} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                <Stack alignItems="center" justifyContent="center" sx={{ position: 'absolute', inset: 0, bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.4) }}>
                  <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(theme.vars.palette.common.whiteChannel, 0.9), color: 'primary.main' }}>
                    <Iconify icon="solar:play-bold" width={36} />
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        );
      default:
        return (
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h4">Trang không tồn tại</Typography>
            <Button component={RouterLink} href="/sofa2/about" variant="contained">Quay lại trang Về chúng tôi</Button>
          </Stack>
        );
    }
  }, [section, theme]);

  return (
    <>
      <Helmet>
        <title>{meta.helmet}</title>
      </Helmet>

      <Sofa2PageHero
        overline={meta.overline}
        title={meta.title}
        image={meta.image}
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container>{content}</Container>
      </Box>
    </>
  );
}
