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

import { SOFA10_COLORS } from 'src/sections/sofa10/sofa10-data';
import { Sofa10Section, Sofa10PageHero } from 'src/sections/sofa10-pages/sofa10-page-hero';
import {
  SOFA10_PAGE_IMAGES,
  SOFA10_PAGE_COMPANY_INFO,
} from 'src/sections/sofa10-pages/sofa10-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: {
    title: 'LỊCH SỬ HÌNH THÀNH',
    overline: 'LỊCH SỬ',
    subtitle: 'Hành trình từ xưởng nhỏ đến thương hiệu sofa wabi-sabi.',
    image: SOFA10_PAGE_IMAGES.historyHero,
    content: [
      { heading: '2016 — Khởi đầu', body: 'Sofa10 ra đời từ xưởng nhỏ tại Hà Nội, với niềm đam mê mang wabi-sabi vào không gian sống.' },
      { heading: '2018 — Mở rộng', body: 'Mở showroom đầu tiên tại TP.HCM, đưa wabi-sabi đến nhiều khách hàng hơn.' },
      { heading: '2020 — Quốc gia', body: 'Phủ sóng 4 showroom: Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. 15k+ khách hàng.' },
      { heading: '2022 — Premium', body: 'Ra mắt bộ sưu tập Luxury — gỗ óc chó, wool len Ý, bouclé cao cấp.' },
      { heading: '2025 — Tương lai', body: '30k+ không gian tĩnh, 26+ mẫu wabi-sabi. Tiếp tục tôn vinh sự mộc mạc.' },
    ],
  },
  vision: {
    title: 'TẦM NHÌN & SỨ MỆNH',
    overline: 'TẦM NHÌN',
    subtitle: 'Tôn vinh sự mộc mạc — vẻ đẹp trong sự không hoàn hảo.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa wabi-sabi hàng đầu Việt Nam, mang thẩm mỹ Nhật đến mọi nhà.' },
      { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa mộc mạc, bền, thoải mái — nâng tinh thần không gian.' },
      { heading: 'Giá trị', body: 'Mộc mạc, khiêm nhường, tĩnh tại. Mỗi sản phẩm là một tác phẩm wabi-sabi.' },
    ],
  },
  values: {
    title: 'GIÁ TRỊ CỐT LÕI',
    overline: 'GIÁ TRỊ',
    subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa10.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Mộc mạc', body: 'Vật liệu thô, tone trầm — tôn vinh sự không hoàn hảo.' },
      { heading: 'Chất lượng', body: 'Linen thô, gỗ FSC, bouclé tự nhiên — bền bỉ theo thời gian.' },
      { heading: 'Khiêm nhường', body: 'Thiết kế tối giản, không phô trương — đẹp trong sự giản dị.' },
      { heading: 'Khách hàng', body: 'Hài lòng 100%. Đổi trả 60 ngày. Bảo hành 12 năm.' },
      { heading: 'Bền vững', body: 'Vật liệu tự nhiên, gỗ FSC, sơn dầu thực vật — thân thiện môi trường.' },
    ],
  },
  factory: {
    title: 'NHÀ MÁY SẢN XUẤT',
    overline: 'NHÀ MÁY',
    subtitle: 'Nhà máy 4000m², thủ công truyền thống kết hợp công nghệ.',
    image: SOFA10_PAGE_IMAGES.factory,
    content: [
      { heading: 'Diện tích', body: 'Nhà máy 4000m² tại Hà Nội, 3 xưởng: gỗ, may, lắp ráp.' },
      { heading: 'Công suất', body: '300+ sofa/tháng, đáp ứng mọi đơn hàng dự án.' },
      { heading: 'Nhân lực', body: '40+ thợ lành nghề, 5+ năm kinh nghiệm wabi-sabi.' },
    ],
  },
  process: {
    title: 'QUY TRÌNH SẢN XUẤT',
    overline: 'QUY TRÌNH',
    subtitle: '8 bước từ vật liệu thô đến sofa wabi-sabi hoàn hảo.',
    image: SOFA10_PAGE_IMAGES.workshop,
    content: [
      { heading: 'Bước 1 — Thiết kế', body: 'Thiết kế 3D theo yêu cầu, chọn tone trầm, vật liệu mộc.' },
      { heading: 'Bước 2 — Chọn vật liệu', body: 'Linen thô, gỗ sồi/óc chó, bouclé, wool — tự nhiên.' },
      { heading: 'Bước 3 — Chế tác khung', body: 'Chế tác khung gỗ thủ công, giữ vân tự nhiên.' },
      { heading: 'Bước 4 — Sơn dầu', body: 'Sơn dầu thực vật bảo vệ, để vân gỗ lộ ra.' },
      { heading: 'Bước 5 — May bọc', body: 'May bọc thủ công, giữ vân linen không đều.' },
      { heading: 'Bước 6 — Lắp đệm', body: 'Lắp đệm HR foam, lò xo, feather — êm ái wabi-sabi.' },
      { heading: 'Bước 7 — Lắp ráp', body: 'Lắp ráp thủ công, kiểm tra từng chi tiết.' },
      { heading: 'Bước 8 — QC', body: 'Kiểm tra chất lượng 100%, đóng gói, giao 72h.' },
    ],
  },
  technology: {
    title: 'CÔNG NGHỆ SẢN XUẤT',
    overline: 'CÔNG NGHỆ',
    subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.',
    image: SOFA10_PAGE_IMAGES.technology,
    content: [
      { heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao, kết hợp thủ công.' },
      { heading: 'Sơn dầu tự động', body: 'Hệ thống sơn dầu thực vật đều, bảo vệ gỗ.' },
      { heading: 'May bán tự động', body: 'Máy may + thủ công, giữ vân linen không đều.' },
      { heading: 'QC tự động', body: 'Hệ thống QC kiểm tra từng sản phẩm trước khi giao.' },
    ],
  },
  certifications: {
    title: 'CHỨNG NHẬN CHẤT LƯỢNG',
    overline: 'CHỨNG NHẬN',
    subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng quốc tế.' },
      { heading: 'FSC Certified', body: 'Gỗ từ rừng quản lý bền vững, chứng nhận FSC.' },
      { heading: 'OEKO-TEX', body: 'Linen, cotton đạt chuẩn OEKO-TEX, an toàn cho da.' },
      { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường, Green Label Singapore.' },
    ],
  },
  team: {
    title: 'ĐỘI NGŨ NHÂN SỰ',
    overline: 'ĐỘI NGŨ',
    subtitle: '40+ chuyên gia tận tâm với wabi-sabi design.',
    image: SOFA10_PAGE_IMAGES.team,
    content: [
      { heading: 'Thiết kế', body: '4 nhà thiết kế wabi-sabi, từng tu nghiệp tại Nhật.' },
      { heading: 'Thợ bọc', body: '15+ thợ bọc 5+ năm kinh nghiệm, thủ công truyền thống.' },
      { heading: 'Thợ mộc', body: '12+ thợ mộc chuyên gỗ tự nhiên, giữ vân gỗ.' },
      { heading: 'Tư vấn', body: '8+ tư vấn viên am hiểu wabi-sabi, nhiệt tình.' },
    ],
  },
  partners: {
    title: 'ĐỐI TÁC',
    overline: 'ĐỐI TÁC',
    subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Linen Ý', body: 'Nhập khẩu linen thô từ Ý — chất lượng cao nhất.' },
      { heading: 'Gỗ FSC', body: 'Gỗ từ rừng quản lý bền vững, chứng nhận FSC.' },
      { heading: 'Cafe & Resort', body: 'Đối tác cung cấp sofa cho 80+ cafe, resort wabi-sabi.' },
      { heading: 'Designer Studio', body: 'Hợp tác với 40+ studio thiết kế nội thất wabi-sabi.' },
    ],
  },
  gallery: {
    title: 'HÌNH ẢNH CÔNG TY',
    overline: 'THƯ VIỆN',
    subtitle: 'Không gian showroom, nhà máy, và sản phẩm wabi-sabi.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
    content: [],
  },
  video: {
    title: 'VIDEO GIỚI THIỆU',
    overline: 'VIDEO',
    subtitle: 'Khám phá Sofa10 qua video — wabi-sabi, tĩnh tại.',
    image: SOFA10_PAGE_IMAGES.aboutHero,
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
        <title>{data.title} — Sofa10</title>
      </Helmet>

      <Sofa10PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa10Section>
          <Grid container spacing={2}>
            {[SOFA10_PAGE_IMAGES.workshop, SOFA10_PAGE_IMAGES.factory, SOFA10_PAGE_IMAGES.technology, SOFA10_PAGE_IMAGES.team, SOFA10_PAGE_IMAGES.product1, SOFA10_PAGE_IMAGES.product3, SOFA10_PAGE_IMAGES.product5, SOFA10_PAGE_IMAGES.product7].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: 2 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa10Section>
      ) : section === 'video' ? (
        <Sofa10Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa10 Video" sx={{ width: 1, aspectRatio: '16/9', borderRadius: 2, border: 'none' }} />
          </Stack>
        </Sofa10Section>
      ) : (
        <Sofa10Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Box key={i} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, mt: 1.5, borderRadius: '50%', bgcolor: SOFA10_COLORS.wood, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'fontWeightNormal', color: SOFA10_COLORS.wood, fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 2, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Sofa10Section>
      )}

      <Sofa10Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'fontWeightLight', letterSpacing: -0.5, fontFamily: theme.typography.fontSecondaryFamily }}>
            <Box component="span" sx={{ ...textGradient(`120deg, ${SOFA10_COLORS.sandLight} 0%, ${SOFA10_COLORS.woodLight} 100%`), fontStyle: 'italic' }}>{SOFA10_PAGE_COMPANY_INFO.tagline}</Box>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightLight' }}>Liên hệ: {SOFA10_PAGE_COMPANY_INFO.phone} · {SOFA10_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa10Section>
    </>
  );
}
