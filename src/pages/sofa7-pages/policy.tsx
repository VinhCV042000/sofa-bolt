import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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

const metadata = { title: 'Chính sách Sofa7' };

const SECTIONS = [
  {
    id: 'warranty',
    icon: 'solar:shield-check-bold-duotone',
    heading: 'Bảo hành 10 năm khung thép',
    text: 'Sofa7 bảo hành 10 năm cho khung thép hàn Mig và 5 năm cho da thật/velvet. Bảo hành áp dụng cho lỗi sản xuất, đứt chỉ may, bong tróc da/velvet và cong vênh khung. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi. Không bảo hành cho hư hỏng do sử dụng sai cách, tác động ngoại cảnh hoặc tự ý sửa chữa.',
  },
  {
    id: 'returns',
    icon: 'solar:refresh-circle-bold-duotone',
    heading: 'Đổi trả 30 ngày',
    text: '30 ngày đổi trả cho sản phẩm tiêu chuẩn, hoàn tiền 100% nếu sản phẩm còn nguyên trạng thái và đầy đủ phụ kiện. Sofa đóng theo yêu cầu (bespoke) không áp dụng đổi trả trừ trường hợp lỗi sản xuất. Chi phí vận chuyển đổi trả tại Sofa7 đối với sản phẩm lỗi; khách hàng chịu chi phí nếu đổi vì lý do cá nhân.',
  },
  {
    id: 'shipping',
    icon: 'solar:delivery-bold-duotone',
    heading: 'Giao hàng 24h nội thành',
    text: 'Sản phẩm có sẵn: giao trong 24h nội thành TP.HCM và Hà Nội. Ngoại thành 2-3 ngày, các tỉnh khác 3-5 ngày. Sofa đóng theo yêu cầu: 10-20 ngày. Miễn phí giao hàng và lắp đặt toàn quốc. Hỗ trợ lưu kho miễn phí 30 ngày kể từ ngày sản xuất hoàn tất.',
  },
  {
    id: 'privacy',
    icon: 'solar:lock-keyhole-bold-duotone',
    heading: 'Bảo mật thông tin',
    text: 'Sofa7 cam kết bảo mật thông tin cá nhân của khách hàng theo chính sách bảo mật. Thông tin chỉ được sử dụng cho mục đích xử lý đơn hàng, tư vấn và chăm sóc khách hàng. Chúng tôi không chia sẻ, bán hoặc cho thuê thông tin cho bên thứ ba ngoài các đối tác vận chuyển và thanh toán được ủy quyền.',
  },
  {
    id: 'terms',
    icon: 'solar:document-text-bold-duotone',
    heading: 'Điều khoản sử dụng',
    text: 'Việc truy cập và sử dụng website Sofa7 đồng nghĩa với việc bạn chấp nhận các điều khoản sử dụng. Nội dung, hình ảnh và thiết kế sản phẩm thuộc bản quyền của Sofa7. Không được sao chép, phân phối hoặc sử dụng cho mục đích thương mại nếu chưa có sự đồng ý bằng văn bản. Mọi tranh chấp sẽ được giải quyết theo pháp luật Việt Nam.',
  },
];

const SECTION_META: Record<string, { title: string; overline: string }> = {
  shipping: { title: 'Chính sách giao hàng', overline: 'Giao hàng' },
  warranty: { title: 'Chính sách bảo hành', overline: 'Bảo hành' },
  returns: { title: 'Chính sách đổi trả', overline: 'Đổi trả' },
  privacy: { title: 'Chính sách bảo mật', overline: 'Bảo mật' },
  terms: { title: 'Điều khoản sử dụng', overline: 'Điều khoản' },
};

export default function Page() {
  const { section = '' } = useParams();

  const meta = SECTION_META[section] ?? { title: 'Chính sách Sofa7', overline: 'Chính sách' };

  // When a specific section is requested, highlight only that one; otherwise show all.
  const visibleSections = section ? SECTIONS.filter((s) => s.id === section) : SECTIONS;

  const content = useMemo(() => (
    <Stack spacing={5}>
      {visibleSections.map((s, index) => (
        <Grid container key={s.id} spacing={{ xs: 4, md: 6 }} alignItems="flex-start" component={MotionViewport}>
          <Grid xs={12} md={4}>
            <Stack
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              spacing={2}
              sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}
            >
              <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                <Iconify icon={s.icon} width={32} />
              </Box>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>{s.heading}</Typography>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mục {index + 1}</Typography>
            </Stack>
          </Grid>
          <Grid xs={12} md={8}>
            <Stack component={m.div} variants={varFade({ distance: 24 }).inRight} spacing={2} sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}` }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{s.text}</Typography>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Stack>
  ), [visibleSections]);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa7PageHero
        title={meta.title}
        subtitle="Bảo hành 10 năm khung thép, đổi trả 30 ngày, giao hàng 24h nội thành, bảo mật và điều khoản — minh bạch và rõ ràng."
        image={SOFA7_PAGE_IMAGES.service4}
        overline={meta.overline}
      />

      {/* Intro */}
      <Sofa7Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>CAM KẾT SOFA7</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
              <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>
                Chính sách rõ ràng
              </Box>
              , quyền lợi trọn vẹn
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Sofa7 luôn đặt trải nghiệm và quyền lợi khách hàng lên hàng đầu. Mọi chính sách
              được công bố minh bạch để bạn yên tâm khi mua sắm và sử dụng sản phẩm industrial loft.
            </Typography>
          </Box>
        </Stack>
      </Sofa7Section>

      {/* Policy sections */}
      <Sofa7Section bg="grey">
        {content}
      </Sofa7Section>

      {/* CTA back to all policies */}
      {section && (
        <Sofa7Section>
          <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Button component={RouterLink} href="/sofa7/policy" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric } }} startIcon={<Iconify icon="solar:undo-left-round-bold-duotone" />}>
              Xem tất cả chính sách
            </Button>
          </Stack>
        </Sofa7Section>
      )}
    </>
  );
}
