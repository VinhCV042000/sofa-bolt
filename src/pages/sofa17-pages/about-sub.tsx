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

import { SOFA17_COLORS } from 'src/sections/sofa17/sofa17-data';
import { Sofa17Card, Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import { SOFA17_PAGE_IMAGES, SOFA17_PAGE_COMPANY_INFO } from 'src/sections/sofa17-pages/sofa17-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: { title: 'LỊCH SỬ HÌNH THÀNH', overline: 'LỊCH SỬ', subtitle: 'Hành trình từ xưởng nhỏ đến Riad Ma-rốc.', image: SOFA17_PAGE_IMAGES.historyHero, content: [{ heading: '2015 — Khởi đầu', body: 'Sofa17 ra đời từ xưởng nhỏ tại Hà Nội với triết lý Riad Ma-rốc.' }, { heading: '2018 — Gold', body: 'Ra mắt Riad Gold Sofa — da thật phủ vàng.' }, { heading: '2020 — Emerald', body: 'Ra mắt Emerald Deco Sofa — velvet ngọc lục bảo.' }, { heading: '2022 — Showroom', body: 'Mở showroom đầu tiên tại Hà Nội, trải nghiệm Riad.' }, { heading: '2025 — Tương lai', body: '3,200+ tác phẩm đã giao. Tiếp tục Riad Ma-rốc.' }] },
  vision: { title: 'TẦM NHÌN & SỨ MỆNH', overline: 'TẦM NHÌN', subtitle: 'Riad Ma-rốc — vẻ đẹp sang trọng cho mọi không gian.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [{ heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa Riad Ma-rốc hàng đầu Việt Nam.' }, { heading: 'Sứ mệnh', body: 'Tạo ra những tuyệt tác Riad — vàng, đen, ngọc lục bảo.' }, { heading: 'Giá trị', body: 'Thủ công 10+ năm, da thật và velvet, mỗi tác phẩm là một tuyệt tác.' }] },
  values: { title: 'GIÁ TRỊ CỐT LÕI', overline: 'GIÁ TRỊ', subtitle: '5 giá trị định hình mọi tác phẩm và dịch vụ của Sofa17.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [{ heading: 'Thủ công', body: '10+ năm thủ công, mỗi đường may là một tuyệt tác.' }, { heading: 'Riad Ma-rốc', body: 'Vàng, đen, ngọc lục bảo — Riad 1920s.' }, { heading: 'Vật liệu', body: 'Da thật và velvet nhập khẩu cao cấp.' }, { heading: 'Tùy chỉnh', body: 'Đặt màu, da, kích thước riêng. Render 3D 24h.' }, { heading: 'Bền vững', body: 'Bảo hành 10 năm, sửa miễn phí.' }] },
  factory: { title: 'NHÀ MÁY SẢN XUẤT', overline: 'NHÀ MÁY', subtitle: 'Nhà máy 5000m², thủ công kết hợp công nghệ.', image: SOFA17_PAGE_IMAGES.factory, content: [{ heading: 'Diện tích', body: 'Nhà máy 5000m² tại Hà Nội, 4 xưởng: may, bọc, lắp ráp, mạ vàng.' }, { heading: 'Công suất', body: '100+ sofa/tháng, đáp ứng mọi đơn hàng.' }, { heading: 'Nhân lực', body: '45+ thợ lành nghề, 5+ năm kinh nghiệm Riad Ma-rốc.' }] },
  process: { title: 'QUY TRÌNH SẢN XUẤT', overline: 'QUY TRÌNH', subtitle: '4 bước từ ý tưởng đến tuyệt tác Riad Ma-rốc.', image: SOFA17_PAGE_IMAGES.workshop, content: [{ heading: 'Bước 1 — Tư vấn', body: 'Tư vấn phong cách Riad Ma-rốc, màu, vật liệu.' }, { heading: 'Bước 2 — Thiết kế 3D', body: 'Bản vẽ 3D trong 24h.' }, { heading: 'Bước 3 — May bọc', body: 'May thủ công, xử lý da thật và velvet.' }, { heading: 'Bước 4 — Giao lắp', body: 'Giao lắp tận nơi, bảo hành 10 năm.' }] },
  technology: { title: 'CÔNG NGHỆ SẢN XUẤT', overline: 'CÔNG NGHỆ', subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.', image: SOFA17_PAGE_IMAGES.technology, content: [{ heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao.' }, { heading: 'Mạ vàng', body: 'Công nghệ mạ vàng PVD cho khung.' }, { heading: 'May thủ công', body: 'May thủ công, xử lý da thật cao cấp.' }, { heading: 'QC', body: 'Hệ thống QC kiểm tra từng tác phẩm.' }] },
  certifications: { title: 'CHỨNG NHẬN CHẤT LƯỢNG', overline: 'CHỨNG NHẬN', subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [{ heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng.' }, { heading: 'Da thật', body: 'Da thật đạt chuẩn quốc tế.' }, { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường.' }] },
  team: { title: 'ĐỘI NGŨ NHÂN SỰ', overline: 'ĐỘI NGŨ', subtitle: '45+ chuyên gia tận tâm với Riad Ma-rốc.', image: SOFA17_PAGE_IMAGES.team, content: [{ heading: 'Thiết kế', body: '5 nhà thiết kế Riad Ma-rốc.' }, { heading: 'Thợ may', body: '15+ thợ may da 5+ năm.' }, { heading: 'Thợ bọc', body: '12+ thợ bọc velvet cao cấp.' }, { heading: 'Stylist', body: '8+ stylist am hiểu Riad Ma-rốc.' }] },
  partners: { title: 'ĐỐI TÁC', overline: 'ĐỐI TÁC', subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [{ heading: 'Da', body: 'Nhập khẩu da thật Ý, Brazil.' }, { heading: 'Velvet', body: 'Velvet cao cấp từ Thổ Nhĩ Kỳ.' }, { heading: 'Hotel & Resort', body: 'Đối tác cung cấp sofa cho 40+ hotel, resort 5 sao.' }, { heading: 'Designer', body: 'Hợp tác với 20+ studio thiết kế Riad Ma-rốc.' }] },
  gallery: { title: 'HÌNH ẢNH CÔNG TY', overline: 'THƯ VIỆN', subtitle: 'Không gian showroom, nhà máy, và tác phẩm Riad Ma-rốc.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [] },
  video: { title: 'VIDEO GIỚI THIỆU', overline: 'VIDEO', subtitle: 'Khám phá Sofa17 qua video — Riad Ma-rốc.', image: SOFA17_PAGE_IMAGES.aboutHero, content: [] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet><title>{data.title} — Sofa17</title></Helmet>
      <Sofa17PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa17Section bg="black">
          <Grid container spacing={2}>
            {[SOFA17_PAGE_IMAGES.workshop, SOFA17_PAGE_IMAGES.factory, SOFA17_PAGE_IMAGES.technology, SOFA17_PAGE_IMAGES.team, SOFA17_PAGE_IMAGES.prod1, SOFA17_PAGE_IMAGES.prod3, SOFA17_PAGE_IMAGES.prod5, SOFA17_PAGE_IMAGES.gallery1].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.2)}` }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa17Section>
      ) : section === 'video' ? (
        <Sofa17Section bg="black">
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa17 Video" sx={{ width: 1, aspectRatio: '16/9', border: `1px solid ${varAlpha(SOFA17_COLORS.gold, 0.3)}` }} />
          </Stack>
        </Sofa17Section>
      ) : (
        <Sofa17Section bg="black">
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Sofa17Card key={i} accent={[SOFA17_COLORS.gold, SOFA17_COLORS.emerald, SOFA17_COLORS.burgundy, SOFA17_COLORS.goldLight][i % 4]} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 10, height: 10, mt: 1.5, bgcolor: SOFA17_COLORS.gold, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'fontWeightMedium', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily }}>{item.heading}</Typography>
                    <Typography sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 1.9, fontWeight: 'fontWeightLight' }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Sofa17Card>
            ))}
          </Stack>
        </Sofa17Section>
      )}

      <Sofa17Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'fontWeightLight', color: 'common.white', fontFamily: theme.typography.fontSecondaryFamily, '& span': { ...textGradient(`90deg, ${SOFA17_COLORS.goldLight} 0%, ${SOFA17_COLORS.gold} 50%, ${SOFA17_COLORS.goldDark} 100%`), fontStyle: 'italic' } }}>
            <span>{SOFA17_PAGE_COMPANY_INFO.tagline}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>Liên hệ: {SOFA17_PAGE_COMPANY_INFO.phone} · {SOFA17_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa17Section>
    </>
  );
}
