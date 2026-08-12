import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { textGradient } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA8_COLORS } from 'src/sections/sofa8/sofa8-data';
import { Sofa8Section, Sofa8PageHero } from 'src/sections/sofa8-pages/sofa8-page-hero';
import {
  SOFA8_PAGE_IMAGES,
  SOFA8_PAGE_COMPANY_INFO,
} from 'src/sections/sofa8-pages/sofa8-pages-data';

// ----------------------------------------------------------------------

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: {
    title: 'LỊCH SỬ HÌNH THÀNH',
    overline: 'LỊCH SỬ',
    subtitle: 'Hành trình từ xưởng nhỏ đến thương hiệu sofa coastal quốc gia.',
    image: SOFA8_PAGE_IMAGES.historyHero,
    content: [
      { heading: '2016 — Khởi đầu', body: 'Sofa8 ra đời từ xưởng nhỏ tại Hà Nội, với niềm đam mê mang biển vào không gian sống.' },
      { heading: '2018 — Mở rộng', body: 'Mở showroom đầu tiên tại TP.HCM, đưa coastal design đến nhiều khách hàng hơn.' },
      { heading: '2020 — Quốc gia', body: 'Phủ sóng 4 showroom: Hà Nội, TP.HCM, Đà Nẵng, Nha Trang. 10k+ khách hàng.' },
      { heading: '2023 — Premium', body: 'Ra mắt bộ sưu tập Luxury — linen nhập khẩu Ý, bouclé premium, gỗ sồi trắng.' },
      { heading: '2025 — Tương lai', body: '40k+ biệt thự nghỉ dưỡng, 35+ mẫu coastal. Tiếp tục mang biển đến mọi nhà.' },
    ],
  },
  vision: {
    title: 'TẦM NHÌN & SỨ MỆNH',
    overline: 'TẦM NHÌN',
    subtitle: 'Mang biển đến mọi không gian sống — thanh lịch, thư giãn, bền vững.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa coastal hàng đầu Việt Nam, mang hơi thở biển đến mọi nhà.' },
      { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa đẹp, bền, thoải mái — nâng tầm chất lượng sống coastal.' },
      { heading: 'Giá trị', body: 'Thanh lịch, thư giãn, yêu biển. Mỗi sản phẩm là một tác phẩm coastal.' },
    ],
  },
  values: {
    title: 'GIÁ TRỊ CỐT LÕI',
    overline: 'GIÁ TRỊ',
    subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa8.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Chất lượng', body: 'Linen, bouclé, gỗ sồi — nguyên liệu tốt nhất cho coastal living.' },
      { heading: 'Thẩm mỹ', body: 'Mỗi sofa là tác phẩm nghệ thuật coastal, đẹp và thanh lịch.' },
      { heading: 'Bền vững', body: 'Sản xuất thân thiện môi trường, bền 30+ năm, bảo trì trọn đời.' },
      { heading: 'Khách hàng', body: 'Hài lòng 100%. Đổi trả 45 ngày. Bảo hành 7 năm. Bảo trì trọn đời.' },
      { heading: 'Đổi mới', body: 'Liên tục cập nhật xu hướng coastal, vật liệu mới, thiết kế mới.' },
    ],
  },
  factory: {
    title: 'NHÀ MÁY SẢN XUẤT',
    overline: 'NHÀ MÁY',
    subtitle: 'Nhà máy 5000m², công nghệ hiện đại, đội ngũ lành nghề.',
    image: SOFA8_PAGE_IMAGES.factory,
    content: [
      { heading: 'Diện tích', body: 'Nhà máy 5000m² tại Hà Nội, 3 xưởng: cắt, may, lắp ráp.' },
      { heading: 'Công suất', body: '500+ sofa/tháng, đáp ứng mọi đơn hàng dự án lớn.' },
      { heading: 'Nhân lực', body: '50+ thợ lành nghề, 5+ năm kinh nghiệm coastal design.' },
    ],
  },
  process: {
    title: 'QUY TRÌNH SẢN XUẤT',
    overline: 'QUY TRÌNH',
    subtitle: '8 bước từ nguyên liệu đến sofa coastal hoàn hảo.',
    image: SOFA8_PAGE_IMAGES.workshop,
    content: [
      { heading: 'Bước 1 — Thiết kế', body: 'Thiết kế 3D theo yêu cầu khách hàng, chọn tone biển, chất liệu.' },
      { heading: 'Bước 2 — Chọn vật liệu', body: 'Linen Ý, bouclé premium, gỗ sồi trắng sấy tự nhiên.' },
      { heading: 'Bước 3 — Cắt khung', body: 'Cắt CNC khung gỗ sồi, độ chính xác ±0.5mm.' },
      { heading: 'Bước 4 — Lắp khung', body: 'Lắp khung, keo và đinh, kiểm tra chịu lực.' },
      { heading: 'Bước 5 — Cắt vải', body: 'Cắt linen/bouclé theo pattern, tối ưu nguyên liệu.' },
      { heading: 'Bước 6 — May bọc', body: 'May bọc thủ công, thợ 5+ năm kinh nghiệm.' },
      { heading: 'Bước 7 — Lắp đệm', body: 'Lắp đệm HR foam, lò xo, feather — êm ái coastal.' },
      { heading: 'Bước 8 — QC', body: 'Kiểm tra chất lượng 100%, đóng gói, giao 48h.' },
    ],
  },
  technology: {
    title: 'CÔNG NGHỆ SẢN XUẤT',
    overline: 'CÔNG NGHỆ',
    subtitle: 'Công nghệ hiện đại kết hợp thủ công truyền thống.',
    image: SOFA8_PAGE_IMAGES.technology,
    content: [
      { heading: 'Cắt CNC', body: 'Máy cắt CNC 5 trục, độ chính xác cao cho khung gỗ sồi.' },
      { heading: 'May tự động', body: 'Máy may tự động + thủ công, tối ưu tốc độ và chất lượng.' },
      { heading: 'Sấy gỗ', body: 'Tủ sấy gỗ sồi nhiệt độ, độ ẩm kiểm soát — bền 30+ năm.' },
      { heading: 'QC tự động', body: 'Hệ thống QC tự động kiểm tra từng sản phẩm trước khi giao.' },
    ],
  },
  certifications: {
    title: 'CHỨNG NHẬN CHẤT LƯỢNG',
    overline: 'CHỨNG NHẬN',
    subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng quốc tế.' },
      { heading: 'FSC Certified', body: 'Gỗ sồi từ rừng quản lý bền vững, chứng nhận FSC.' },
      { heading: 'OEKO-TEX', body: 'Linen và bouclé đạt chuẩn OEKO-TEX, an toàn cho da.' },
      { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường, Green Label Singapore.' },
    ],
  },
  team: {
    title: 'ĐỘI NGŨ NHÂN SỰ',
    overline: 'ĐỘI NGŨ',
    subtitle: '50+ chuyên gia tận tâm với coastal design.',
    image: SOFA8_PAGE_IMAGES.team,
    content: [
      { heading: 'Thiết kế', body: '5 nhà thiết kế coastal, từng tốt nghiệp các trường nghệ thuật hàng đầu.' },
      { heading: 'Thợ bọc', body: '20+ thợ bọc 5+ năm kinh nghiệm, thủ công truyền thống.' },
      { heading: 'Thợ mộc', body: '15+ thợ mộc chuyên gỗ sồi, cắt CNC và lắp khung.' },
      { heading: 'Tư vấn', body: '10+ tư vấn viên am hiểu coastal, nhiệt tình, chuyên nghiệp.' },
    ],
  },
  partners: {
    title: 'ĐỐI TÁC',
    overline: 'ĐỐI TÁC',
    subtitle: 'Đối tác nguyên liệu, phân phối, và dự án uy tín.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Linen Ý', body: 'Nhập khẩu linen từ Ý — chất lượng cao nhất cho coastal.' },
      { heading: 'Gỗ sồi Pháp', body: 'Gỗ sồi trắng từ rừng Pháp, chứng nhận FSC.' },
      { heading: 'Resort 5 sao', body: 'Đối tác cung cấp sofa cho 20+ resort 5 sao tại Việt Nam.' },
      { heading: 'Designer Studio', body: 'Hợp tác với 50+ studio thiết kế nội thất coastal.' },
    ],
  },
  gallery: {
    title: 'HÌNH ẢNH CÔNG TY',
    overline: 'THƯ VIỆN',
    subtitle: 'Không gian showroom, nhà máy, và sản phẩm coastal.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [],
  },
  video: {
    title: 'VIDEO GIỚI THIỆU',
    overline: 'VIDEO',
    subtitle: 'Khám phá Sofa8 qua video — coastal, linen, biển cả.',
    image: SOFA8_PAGE_IMAGES.aboutHero,
    content: [],
  },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa8</title>
      </Helmet>

      <Sofa8PageHero
        overline={data.overline}
        title={
          <span>{data.title}</span>
        }
        subtitle={data.subtitle}
        image={data.image}
      />

      {section === 'gallery' ? (
        <Sofa8Section>
          <Grid container spacing={2}>
            {[SOFA8_PAGE_IMAGES.workshop, SOFA8_PAGE_IMAGES.factory, SOFA8_PAGE_IMAGES.technology, SOFA8_PAGE_IMAGES.team, SOFA8_PAGE_IMAGES.product1, SOFA8_PAGE_IMAGES.product3, SOFA8_PAGE_IMAGES.product5, SOFA8_PAGE_IMAGES.product7].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: 2 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa8Section>
      ) : section === 'video' ? (
        <Sofa8Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Sofa8 Video"
              sx={{ width: 1, aspectRatio: '16/9', borderRadius: 3, border: 'none' }}
            />
          </Stack>
        </Sofa8Section>
      ) : (
        <Sofa8Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Box key={i} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA8_COLORS.coral, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', color: SOFA8_COLORS.ocean }}>
                      {item.heading}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.body}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Sofa8Section>
      )}

      <Sofa8Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold' }}>
            <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA8_COLORS.coral} 0%, ${SOFA8_COLORS.seafoam} 100%`) }}>
              {SOFA8_PAGE_COMPANY_INFO.tagline}
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Liên hệ: {SOFA8_PAGE_COMPANY_INFO.phone} · {SOFA8_PAGE_COMPANY_INFO.email}
          </Typography>
        </Stack>
      </Sofa8Section>
    </>
  );
}
