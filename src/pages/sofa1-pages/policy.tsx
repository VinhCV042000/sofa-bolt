import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa1PageHero, Sofa1Section } from 'src/sections/sofa1-pages/sofa1-page-hero';
import { SOFA1_PAGE_IMAGES } from 'src/sections/sofa1-pages/sofa1-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Chính sách Casa Sofa' };

const SECTIONS = [
  {
    icon: 'solar:shield-check-bold-duotone',
    heading: 'Bảo hành',
    text: 'Casa Sofa bảo hành 7 năm cho khung gỗ và cơ cấu, 5 năm cho đệm và bọc. Bảo hành áp dụng cho lỗi sản xuất, cong vênh khung, đứt chỉ may và bong tróc da. Bảo trì làm mới bọc trọn đời với chi phí ưu đãi cho khách hàng VIP. Không bảo hành cho hư hỏng do sử dụng sai cách, tác động ngoại cảnh hoặc tự ý sửa chữa.',
  },
  {
    icon: 'solar:refresh-circle-bold-duotone',
    heading: 'Đổi trả',
    text: '30 ngày đổi trả cho sản phẩm tiêu chuẩn, hoàn tiền 100% nếu sản phẩm còn nguyên trạng thái và đầy đủ phụ kiện. Sofa đóng theo yêu cầu (bespoke) không áp dụng đổi trả trừ trường hợp lỗi sản xuất. Chi phí vận chuyển đổi trả tại Casa Sofa đối với sản phẩm lỗi; khách hàng chịu chi phí nếu đổi vì lý do cá nhân.',
  },
  {
    icon: 'solar:delivery-bold-duotone',
    heading: 'Giao hàng',
    text: 'Sản phẩm có sẵn: giao trong 2-5 ngày. Sofa đóng theo yêu cầu: 7-14 ngày. Miễn phí giao hàng và lắp đặt nội thành Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. Ngoại thành tính phí theo khoảng cách. Hỗ trợ lưu kho miễn phí 30 ngày kể từ ngày sản xuất hoàn tất.',
  },
  {
    icon: 'solar:lock-keyhole-bold-duotone',
    heading: 'Bảo mật thông tin',
    text: 'Casa Sofa cam kết bảo mật thông tin cá nhân của khách hàng theo chính sách bảo mật. Thông tin chỉ được sử dụng cho mục đích xử lý đơn hàng, tư vấn và chăm sóc khách hàng. Chúng tôi không chia sẻ, bán hoặc cho thuê thông tin cho bên thứ ba ngoài các đối tác vận chuyển và thanh toán được ủy quyền.',
  },
  {
    icon: 'solar:document-text-bold-duotone',
    heading: 'Điều khoản sử dụng',
    text: 'Việc truy cập và sử dụng website Casa Sofa đồng nghĩa với việc bạn chấp nhận các điều khoản sử dụng. Nội dung, hình ảnh và thiết kế sản phẩm thuộc bản quyền của Casa Sofa. Không được sao chép, phân phối hoặc sử dụng cho mục đích thương mại nếu chưa có sự đồng ý bằng văn bản. Mọi tranh chấp sẽ được giải quyết theo pháp luật Việt Nam.',
  },
];

export default function Page() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa1PageHero
        title="Chính sách Casa Sofa"
        subtitle="Bảo hành, đổi trả, giao hàng, bảo mật thông tin và điều khoản sử dụng — minh bạch và rõ ràng."
        image={SOFA1_PAGE_IMAGES.service4}
        overline="Chính sách"
      />

      {/* Intro */}
      <Sofa1Section>
        <Stack spacing={3} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>Cam kết Casa Sofa</Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography variant="h2">
              <Box component="span" sx={{ ...textGradient(`135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}`) }}>
                Chính sách rõ ràng
              </Box>
              , quyền lợi trọn vẹn
            </Typography>
          </Box>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Casa Sofa luôn đặt trải nghiệm và quyền lợi khách hàng lên hàng đầu. Mọi chính sách
              được công bố minh bạch để bạn yên tâm khi mua sắm và sử dụng sản phẩm.
            </Typography>
          </Box>
        </Stack>
      </Sofa1Section>

      {/* Policy sections */}
      <Sofa1Section bg="grey">
        <Stack spacing={5}>
          {SECTIONS.map((s, index) => (
            <Grid container key={s.heading} spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
              <Grid xs={12} md={4}>
                <Stack
                  component={m.div}
                  variants={varFade({ distance: 24 }).inLeft}
                  spacing={2}
                  sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}
                >
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 2, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.primary.mainChannel, 0.08), color: 'primary.main' }}>
                    <Iconify icon={s.icon} width={32} />
                  </Box>
                  <Typography variant="h5">{s.heading}</Typography>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>Mục {index + 1}</Typography>
                </Stack>
              </Grid>
              <Grid xs={12} md={8}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inRight} spacing={2} sx={{ p: 4, height: 1, borderRadius: 3, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{s.text}</Typography>
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Sofa1Section>
    </>
  );
}
