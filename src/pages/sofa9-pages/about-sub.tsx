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

import { SOFA9_COLORS } from 'src/sections/sofa9/sofa9-data';
import { Sofa9Section, Sofa9PageHero } from 'src/sections/sofa9-pages/sofa9-page-hero';
import {
  SOFA9_PAGE_IMAGES,
  SOFA9_PAGE_COMPANY_INFO,
} from 'src/sections/sofa9-pages/sofa9-pages-data';

// ----------------------------------------------------------------------

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: {
    title: 'LỊCH SỬ HÌNH THÀNH',
    overline: 'LỊCH SỬ',
    subtitle: 'Hành trình từ xưởng nhỏ đến thương hiệu sofa retro quốc gia.',
    image: SOFA9_PAGE_IMAGES.historyHero,
    content: [
      { heading: '2017 — Khởi đầu', body: 'Sofa9 ra đời từ xưởng nhỏ tại Hà Nội, với niềm đam mê mang retro Memphis vào không gian sống.' },
      { heading: '2019 — Mở rộng', body: 'Mở showroom đầu tiên tại TP.HCM, đưa retro design đến nhiều khách hàng hơn.' },
      { heading: '2021 — Quốc gia', body: 'Phủ sóng 4 showroom: Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. 20k+ khách hàng.' },
      { heading: '2023 — Premium', body: 'Ra mắt bộ sưu tập Luxury — velvet Ý nhập khẩu, gỗ óc chó, họa tiết độc quyền.' },
      { heading: '2025 — Tương lai', body: '60k+ người chơi vibe, 40+ mẫu retro. Tiếp tục mang vui vẻ đến mọi nhà.' },
    ],
  },
  vision: {
    title: 'TẦM NHÌN & SỨ MỆNH',
    overline: 'TẦM NHÌN',
    subtitle: 'Mang vui vẻ đến mọi không gian sống — bold, playful, memorable.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa retro hàng đầu Việt Nam, mang vibe Memphis đến mọi nhà.' },
      { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa vui vẻ, bền, thoải mái — nâng tinh thần không gian.' },
      { heading: 'Giá trị', body: 'Bold, playful, memorable. Mỗi sản phẩm là một tác phẩm retro.' },
    ],
  },
  values: {
    title: 'GIÁ TRỊ CỐT LÕI',
    overline: 'GIÁ TRỊ',
    subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa9.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Vui vẻ', body: 'Màu bùng nổ, họa tiết bold — sofa không bao giờ chán.' },
      { heading: 'Chất lượng', body: 'Velvet Ý, gỗ FSC, đệm high-density — vui vẻ mà bền bỉ.' },
      { heading: 'Độc đáo', body: 'Mỗi sofa là một tác phẩm, không đụng hàng.' },
      { heading: 'Khách hàng', body: 'Hài lòng 100%. Đổi trả 30 ngày. Bảo hành 10 năm.' },
      { heading: 'Đổi mới', body: 'Liên tục cập nhật xu hướng retro, pattern mới, màu mới.' },
    ],
  },
  factory: {
    title: 'NHÀ MÁY SẢN XUẤT',
    overline: 'NHÀ MÁY',
    subtitle: 'Nhà máy 5000m², công nghệ hiện đại, đội ngũ lành nghề.',
    image: SOFA9_PAGE_IMAGES.factory,
    content: [
      { heading: 'Diện tích', body: 'Nhà máy 5000m² tại Hà Nội, 3 xưởng: cắt, may, in họa tiết.' },
      { heading: 'Công suất', body: '500+ sofa/tháng, đáp ứng mọi đơn hàng dự án lớn.' },
      { heading: 'Nhân lực', body: '50+ thợ lành nghề, 5+ năm kinh nghiệm retro design.' },
    ],
  },
  process: {
    title: 'QUY TRÌNH SẢN XUẤT',
    overline: 'QUY TRÌNH',
    subtitle: '8 bước từ nguyên liệu đến sofa retro hoàn hảo.',
    image: SOFA9_PAGE_IMAGES.workshop,
    content: [
      { heading: 'Bước 1 — Thiết kế', body: 'Thiết kế 3D theo yêu cầu, chọn màu neon, họa tiết.' },
      { heading: 'Bước 2 — Chọn vật liệu', body: 'Velvet Ý 40+ màu, gỗ FSC, đệm high-density.' },
      { heading: 'Bước 3 — Cắt khung', body: 'Cắt CNC khung gỗ, độ chính xác ±0.5mm.' },
      { heading: 'Bước 4 — Lắp khung', body: 'Lắp khung, keo và đinh, kiểm tra chịu lực.' },
      { heading: 'Bước 5 — In họa tiết', body: 'In hình học, hoa retro lên velvet — kỹ thuật số.' },
      { heading: 'Bước 6 — May bọc', body: 'May bọc thủ công, thợ 5+ năm kinh nghiệm.' },
      { heading: 'Bước 7 — Lắp đệm', body: 'Lắp đệm HR foam, lò xo, feather — êm ái retro.' },
      { heading: 'Bước 8 — QC', body: 'Kiểm tra chất lượng 100%, đóng gói, giao 24h.' },
    ],
  },
  technology: {
    title: 'CÔNG NGHỆ SẢN XUẤT',
    overline: 'CÔNG NGHỆ',
    subtitle: 'Công nghệ hiện đại kết hợp thủ công truyền thống.',
    image: SOFA9_PAGE_IMAGES.technology,
    content: [
      { heading: 'Cắt CNC', body: 'Máy cắt CNC 5 trục, độ chính xác cao cho khung gỗ.' },
      { heading: 'In kỹ thuật số', body: 'In họa tiết hình học, hoa retro lên velvet — màu bền 10+ năm.' },
      { heading: 'May tự động', body: 'Máy may tự động + thủ công, tối ưu tốc độ và chất lượng.' },
      { heading: 'QC tự động', body: 'Hệ thống QC tự động kiểm tra từng sản phẩm trước khi giao.' },
    ],
  },
  certifications: {
    title: 'CHỨNG NHẬN CHẤT LƯỢNG',
    overline: 'CHỨNG NHẬN',
    subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng quốc tế.' },
      { heading: 'FSC Certified', body: 'Gỗ từ rừng quản lý bền vững, chứng nhận FSC.' },
      { heading: 'OEKO-TEX', body: 'Velvet đạt chuẩn OEKO-TEX, an toàn cho da.' },
      { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường, Green Label Singapore.' },
    ],
  },
  team: {
    title: 'ĐỘI NGŨ NHÂN SỰ',
    overline: 'ĐỘI NGŨ',
    subtitle: '50+ chuyên gia tận tâm với retro design.',
    image: SOFA9_PAGE_IMAGES.team,
    content: [
      { heading: 'Thiết kế', body: '5 nhà thiết kế retro, từng tốt nghiệp các trường nghệ thuật hàng đầu.' },
      { heading: 'Thợ bọc', body: '20+ thợ bọc 5+ năm kinh nghiệm, thủ công truyền thống.' },
      { heading: 'Thợ in', body: '10+ thợ in họa tiết, chuyên in kỹ thuật số lên velvet.' },
      { heading: 'Tư vấn', body: '10+ tư vấn viên am hiểu retro, nhiệt tình, chuyên nghiệp.' },
    ],
  },
  partners: {
    title: 'ĐỐI TÁC',
    overline: 'ĐỐI TÁC',
    subtitle: 'Đối tác nguyên liệu, phân phối, và dự án uy tín.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
    content: [
      { heading: 'Velvet Ý', body: 'Nhập khẩu velvet từ Ý — 40+ màu neon chất lượng cao nhất.' },
      { heading: 'Gỗ FSC', body: 'Gỗ từ rừng quản lý bền vững, chứng nhận FSC.' },
      { heading: 'Cafe & Shop', body: 'Đối tác cung cấp sofa cho 100+ cafe, shop retro.' },
      { heading: 'Designer Studio', body: 'Hợp tác với 50+ studio thiết kế nội thất retro.' },
    ],
  },
  gallery: {
    title: 'HÌNH ẢNH CÔNG TY',
    overline: 'THƯ VIỆN',
    subtitle: 'Không gian showroom, nhà máy, và sản phẩm retro.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
    content: [],
  },
  video: {
    title: 'VIDEO GIỚI THIỆU',
    overline: 'VIDEO',
    subtitle: 'Khám phá Sofa9 qua video — retro, velvet, vui vẻ.',
    image: SOFA9_PAGE_IMAGES.aboutHero,
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
        <title>{data.title} — Sofa9</title>
      </Helmet>

      <Sofa9PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa9Section>
          <Grid container spacing={2}>
            {[SOFA9_PAGE_IMAGES.workshop, SOFA9_PAGE_IMAGES.factory, SOFA9_PAGE_IMAGES.technology, SOFA9_PAGE_IMAGES.team, SOFA9_PAGE_IMAGES.product1, SOFA9_PAGE_IMAGES.product3, SOFA9_PAGE_IMAGES.product5, SOFA9_PAGE_IMAGES.product7].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: 3 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa9Section>
      ) : section === 'video' ? (
        <Sofa9Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa9 Video" sx={{ width: 1, aspectRatio: '16/9', borderRadius: 3, border: 'none' }} />
          </Stack>
        </Sofa9Section>
      ) : (
        <Sofa9Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Box key={i} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA9_COLORS.pink, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold', color: SOFA9_COLORS.pink, fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Sofa9Section>
      )}

      <Sofa9Section bg="grey">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
            <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA9_COLORS.pink} 0%, ${SOFA9_COLORS.yellow} 50%, ${SOFA9_COLORS.teal} 100%`) }}>{SOFA9_PAGE_COMPANY_INFO.tagline}</Box>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Liên hệ: {SOFA9_PAGE_COMPANY_INFO.phone} · {SOFA9_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa9Section>
    </>
  );
}
