import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11PageHero, Sofa11Section } from 'src/sections/sofa11-pages/sofa11-page-hero';
import { SOFA11_PAGE_IMAGES, SOFA11_PAGE_COMPANY_INFO } from 'src/sections/sofa11-pages/sofa11-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: { title: 'LỊCH SỬ HÌNH THÀNH', overline: 'LỊCH SỬ', subtitle: 'Hành trình từ xưởng nhỏ đến thương hiệu sofa neon pop.', image: SOFA11_PAGE_IMAGES.historyHero, content: [{ heading: '2019 — Khởi đầu', body: 'Sofa11 ra đời từ xưởng nhỏ tại Hà Nội với triết lý "no beige allowed".' }, { heading: '2020 — Pop màu', body: 'Ra mắt bộ sưu tập Bubblegum — nhung Ý hồng chói, đường cong bong bóng.' }, { heading: '2022 — Module', body: 'Ra mắt Acid Module — vải nhung tăm xanh chanh, module ghép tự do.' }, { heading: '2023 — Cyber', body: 'Ra mắt Cyber Blue — da bóng phản quang, dáng thấp retro-future.' }, { heading: '2025 — Tương lai', body: '12.8k+ phòng khách đã lên màu, 200+ mã vải. Tiếp tục bùng nổ.' }] },
  vision: { title: 'TẦM NHÌN & SỨ MỆNH', overline: 'TẦM NHÌN', subtitle: 'No beige allowed — phòng khách của bạn không nên giống catalogue.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [{ heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa pop hàng đầu Việt Nam, mang màu sắc đến mọi phòng khách.' }, { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa màu chói, dáng cong, module ghép — vì bạn khác biệt.' }, { heading: 'Giá trị', body: 'Màu pop, dáng cong, module tự do. Mỗi sản phẩm là một tuyên ngôn.' }] },
  values: { title: 'GIÁ TRỊ CỐT LÕI', overline: 'GIÁ TRỊ', subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa11.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [{ heading: 'Màu pop', body: 'Màu chói, dáng cong — vì phòng khách của bạn không nên giống catalogue.' }, { heading: 'Module', body: 'Ghép tự do, hơn 20 bố cục — sofa thay đổi theo bạn.' }, { heading: 'Tùy chỉnh', body: '200+ mã vải, phối 3 màu, render 3D 24h.' }, { heading: 'Tốc độ', body: 'Giao 48h nội thành, đổi tông phòng khách ngay lập tức.' }, { heading: 'Bền vững', body: 'Áo bọc rời, thay vỏ thay sofa — bền vững cho túi tiền và môi trường.' }] },
  factory: { title: 'NHÀ MÁY SẢN XUẤT', overline: 'NHÀ MÁY', subtitle: 'Nhà máy 3000m², thủ công truyền thống kết hợp công nghệ.', image: SOFA11_PAGE_IMAGES.factory, content: [{ heading: 'Diện tích', body: 'Nhà máy 3000m² tại Hà Nội, 3 xưởng: may, da, lắp ráp.' }, { heading: 'Công suất', body: '250+ sofa/tháng, đáp ứng mọi đơn hàng dự án.' }, { heading: 'Nhân lực', body: '35+ thợ lành nghề, 3+ năm kinh nghiệm pop design.' }] },
  process: { title: 'QUY TRÌNH SẢN XUẤT', overline: 'QUY TRÌNH', subtitle: '6 bước từ ý tưởng đến sofa pop bùng nổ.', image: SOFA11_PAGE_IMAGES.workshop, content: [{ heading: 'Bước 1 — Chọn dáng', body: 'Bo tròn, module, dáng thấp hay cong 180°.' }, { heading: 'Bước 2 — Quẹt màu', body: '200+ mã vải, phối tối đa 3 màu.' }, { heading: 'Bước 3 — Render 3D', body: 'Dựng bản render trong 24h để duyệt.' }, { heading: 'Bước 4 — May bọc', body: 'May thủ công, xử lý nhung Ý, corduroy.' }, { heading: 'Bước 5 — Lắp ráp', body: 'Lắp ráp thủ công, kiểm tra từng chi tiết.' }, { heading: 'Bước 6 — Giao 48h', body: 'Giao lắp tận nơi, bảo hành 10 năm.' }] },
  technology: { title: 'CÔNG NGHỆ SẢN XUẤT', overline: 'CÔNG NGHỆ', subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.', image: SOFA11_PAGE_IMAGES.technology, content: [{ heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao, kết hợp thủ công.' }, { heading: 'Render 3D', body: 'Hệ thống render 3D trong 24h cho khách duyệt.' }, { heading: 'May bán tự động', body: 'Máy may + thủ công, xử lý nhung Ý.' }, { heading: 'QC tự động', body: 'Hệ thống QC kiểm tra từng sản phẩm trước khi giao.' }] },
  certifications: { title: 'CHỨNG NHẬN CHẤT LƯỢNG', overline: 'CHỨNG NHẬN', subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [{ heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng quốc tế.' }, { heading: 'OEKO-TEX', body: 'Vải đạt chuẩn OEKO-TEX, an toàn cho da.' }, { heading: 'REACH', body: 'Da bóng đạt chuẩn REACH, không hóa chất độc hại.' }, { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường, áo bọc rời giảm rác thải.' }] },
  team: { title: 'ĐỘI NGŨ NHÂN SỰ', overline: 'ĐỘI NGŨ', subtitle: '35+ chuyên gia tận tâm với pop design.', image: SOFA11_PAGE_IMAGES.team, content: [{ heading: 'Thiết kế', body: '3 nhà thiết kế pop, từng tu nghiệp tại Ý.' }, { heading: 'Thợ may', body: '12+ thợ may 3+ năm kinh nghiệm, thủ công truyền thống.' }, { heading: 'Thợ da', body: '8+ thợ bọc da bóng chuyên nghiệp.' }, { heading: 'Stylist', body: '6+ stylist am hiểu màu pop, nhiệt tình.' }] },
  partners: { title: 'ĐỐI TÁC', overline: 'ĐỐI TÁC', subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [{ heading: 'Nhung Ý', body: 'Nhập khẩu nhung Ý — chất lượng cao nhất.' }, { heading: 'Da bóng', body: 'Da bóng đạt chuẩn REACH, nhập khẩu Ý.' }, { heading: 'Cafe & Studio', body: 'Đối tác cung cấp sofa cho 60+ cafe, studio pop.' }, { heading: 'Designer', body: 'Hợp tác với 30+ studio thiết kế nội thất pop.' }] },
  gallery: { title: 'HÌNH ẢNH CÔNG TY', overline: 'THƯ VIỆN', subtitle: 'Không gian showroom, nhà máy, và sản phẩm pop.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [] },
  video: { title: 'VIDEO GIỚI THIỆU', overline: 'VIDEO', subtitle: 'Khám phá Sofa11 qua video — neon pop, bùng nổ.', image: SOFA11_PAGE_IMAGES.aboutHero, content: [] },
};

export default function Page() {
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet><title>{data.title} — Sofa11</title></Helmet>
      <Sofa11PageHero overline={data.overline} title={<><span>{data.title}</span></>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa11Section>
          <Grid container spacing={2}>
            {[SOFA11_PAGE_IMAGES.workshop, SOFA11_PAGE_IMAGES.factory, SOFA11_PAGE_IMAGES.technology, SOFA11_PAGE_IMAGES.team, SOFA11_PAGE_IMAGES.prod1, SOFA11_PAGE_IMAGES.prod3, SOFA11_PAGE_IMAGES.prod5, SOFA11_PAGE_IMAGES.gallery1].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px 16px 16px 0', border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.2)}` }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa11Section>
      ) : section === 'video' ? (
        <Sofa11Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa11 Video" sx={{ width: 1, aspectRatio: '16/9', borderRadius: '24px 24px 24px 0', border: `3px solid ${SOFA11_COLORS.magenta}` }} />
          </Stack>
        </Sofa11Section>
      ) : (
        <Sofa11Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Box key={i} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA11_COLORS.lime, flexShrink: 0, boxShadow: `0 0 12px ${sofa11Alpha(SOFA11_COLORS.lime, 0.6)}` }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: SOFA11_COLORS.magenta, textTransform: 'uppercase' }}>{item.heading}</Typography>
                    <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.72), lineHeight: 1.8 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Sofa11Section>
      )}

      <Sofa11Section bg="grape">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -1, textTransform: 'uppercase', color: SOFA11_COLORS.cream }}>
            <Box component="span" sx={{ color: SOFA11_COLORS.lime, textShadow: `2px 2px 0 ${SOFA11_COLORS.magenta}` }}>{SOFA11_PAGE_COMPANY_INFO.tagline}</Box>
          </Typography>
          <Typography variant="body2" sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.5) }}>Liên hệ: {SOFA11_PAGE_COMPANY_INFO.phone} · {SOFA11_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa11Section>
    </>
  );
}
