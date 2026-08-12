import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Card, Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_COMPANY_INFO } from 'src/sections/sofa16-pages/sofa16-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: { title: 'LỊCH SỬ HÌNH THÀNH', overline: 'LỊCH SỬ', subtitle: 'Hành trình từ xưởng nhỏ đến Mediterranean Riviera.', image: SOFA16_PAGE_IMAGES.historyHero, content: [{ heading: '2016 — Khởi đầu', body: 'Sofa16 ra đời từ xưởng nhỏ tại Hà Nội với triết lý Mediterranean.' }, { heading: '2019 — Terracotta', body: 'Ra mắt Terracotta Riviera Sofa — linen terracotta.' }, { heading: '2021 — Olive', body: 'Ra mắt Olive Garden Sofa — linen olive.' }, { heading: '2023 — Showroom', body: 'Mở showroom đầu tiên tại Hà Nội, trải nghiệm Riviera.' }, { heading: '2025 — Tương lai', body: '2,800+ tác phẩm đã giao. Tiếp tục Mediterranean.' }] },
  vision: { title: 'TẦM NHÌN & SỨ MỆNH', overline: 'TẦM NHÌN', subtitle: 'Mediterranean Riviera — vẻ đẹp ấm áp cho mọi không gian.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [{ heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa Mediterranean hàng đầu Việt Nam.' }, { heading: 'Sứ mệnh', body: 'Tạo ra những tuyệt tác Riviera — terracotta, cream, olive.' }, { heading: 'Giá trị', body: 'Thủ công 10+ năm, linen nhập khẩu, mỗi tác phẩm là một tuyệt tác.' }] },
  values: { title: 'GIÁ TRỊ CỐT LÕI', overline: 'GIÁ TRỊ', subtitle: '5 giá trị định hình mọi tác phẩm và dịch vụ của Sofa16.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [{ heading: 'Thủ công', body: '10+ năm thủ công, mỗi đường may là một tuyệt tác.' }, { heading: 'Mediterranean', body: 'Terracotta, cream, olive — Riviera.' }, { heading: 'Vật liệu', body: 'Linen nhập khẩu cao cấp.' }, { heading: 'Tùy chỉnh', body: 'Đặt màu, linen, kích thước riêng. Render 3D 24h.' }, { heading: 'Bền vững', body: 'Bảo hành 10 năm, sửa miễn phí.' }] },
  factory: { title: 'NHÀ MÁY SẢN XUẤT', overline: 'NHÀ MÁY', subtitle: 'Nhà máy 5000m², thủ công kết hợp công nghệ.', image: SOFA16_PAGE_IMAGES.factory, content: [{ heading: 'Diện tích', body: 'Nhà máy 5000m² tại Hà Nội, 4 xưởng: may, bọc, lắp ráp, hoàn thiện.' }, { heading: 'Công suất', body: '100+ sofa/tháng, đáp ứng mọi đơn hàng.' }, { heading: 'Nhân lực', body: '45+ thợ lành nghề, 5+ năm kinh nghiệm Mediterranean.' }] },
  process: { title: 'QUY TRÌNH SẢN XUẤT', overline: 'QUY TRÌNH', subtitle: '4 bước từ ý tưởng đến tuyệt tác Riviera.', image: SOFA16_PAGE_IMAGES.workshop, content: [{ heading: 'Bước 1 — Tư vấn', body: 'Tư vấn phong cách Mediterranean, màu, vật liệu.' }, { heading: 'Bước 2 — Thiết kế 3D', body: 'Bản vẽ 3D trong 24h.' }, { heading: 'Bước 3 — May bọc', body: 'May thủ công, xử lý linen cao cấp.' }, { heading: 'Bước 4 — Giao lắp', body: 'Giao lắp tận nơi, bảo hành 10 năm.' }] },
  technology: { title: 'CÔNG NGHỆ SẢN XUẤT', overline: 'CÔNG NGHỆ', subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.', image: SOFA16_PAGE_IMAGES.technology, content: [{ heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao.' }, { heading: 'May thủ công', body: 'May thủ công, xử lý linen cao cấp.' }, { heading: 'QC', body: 'Hệ thống QC kiểm tra từng tác phẩm.' }] },
  certifications: { title: 'CHỨNG NHẬN CHẤT LƯỢNG', overline: 'CHỨNG NHẬN', subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [{ heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng.' }, { heading: 'Linen', body: 'Linen đạt chuẩn quốc tế.' }, { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường.' }] },
  team: { title: 'ĐỘI NGŨ NHÂN SỰ', overline: 'ĐỘI NGŨ', subtitle: '45+ chuyên gia tận tâm với Mediterranean.', image: SOFA16_PAGE_IMAGES.team, content: [{ heading: 'Thiết kế', body: '5 nhà thiết kế Mediterranean.' }, { heading: 'Thợ may', body: '15+ thợ may linen 5+ năm.' }, { heading: 'Thợ bọc', body: '12+ thợ bọc linen cao cấp.' }, { heading: 'Stylist', body: '8+ stylist am hiểu Riviera.' }] },
  partners: { title: 'ĐỐI TÁC', overline: 'ĐỐI TÁC', subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [{ heading: 'Linen', body: 'Nhập khẩu linen Ý, Bồ Đào Nha.' }, { heading: 'Hotel & Resort', body: 'Đối tác cung cấp sofa cho 40+ hotel, resort 5 sao.' }, { heading: 'Designer', body: 'Hợp tác với 20+ studio thiết kế Mediterranean.' }] },
  gallery: { title: 'HÌNH ẢNH CÔNG TY', overline: 'THƯ VIỆN', subtitle: 'Không gian showroom, nhà máy, và tác phẩm Riviera.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [] },
  video: { title: 'VIDEO GIỚI THIỆU', overline: 'VIDEO', subtitle: 'Khám phá Sofa16 qua video — Mediterranean Riviera.', image: SOFA16_PAGE_IMAGES.aboutHero, content: [] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet><title>{data.title} — Sofa16</title></Helmet>
      <Sofa16PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa16Section bg="cream">
          <Grid container spacing={2}>
            {[SOFA16_PAGE_IMAGES.workshop, SOFA16_PAGE_IMAGES.factory, SOFA16_PAGE_IMAGES.technology, SOFA16_PAGE_IMAGES.team, SOFA16_PAGE_IMAGES.prod1, SOFA16_PAGE_IMAGES.prod3, SOFA16_PAGE_IMAGES.prod5, SOFA16_PAGE_IMAGES.gallery1].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: 2 }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa16Section>
      ) : section === 'video' ? (
        <Sofa16Section bg="cream">
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa16 Video" sx={{ width: 1, aspectRatio: '16/9', borderRadius: 3, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.3)}` }} />
          </Stack>
        </Sofa16Section>
      ) : (
        <Sofa16Section bg="cream">
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Sofa16Card key={i} accent={[SOFA16_COLORS.terracotta, SOFA16_COLORS.olive, SOFA16_COLORS.azure, SOFA16_COLORS.terracottaDeep][i % 4]} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA16_COLORS.terracotta, borderRadius: '50%', flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                    <Typography sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Sofa16Card>
            ))}
          </Stack>
        </Sofa16Section>
      )}

      <Sofa16Section bg="stone">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', color: SOFA16_COLORS.ink, fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA16_COLORS.terracotta} 0%, ${SOFA16_COLORS.terracottaDeep} 100%`), fontStyle: 'italic' } }}>
            <span>{SOFA16_PAGE_COMPANY_INFO.tagline}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>Liên hệ: {SOFA16_PAGE_COMPANY_INFO.phone} · {SOFA16_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa16Section>
    </>
  );
}
