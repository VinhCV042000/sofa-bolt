import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13Section, Sofa13PageHero } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_COMPANY_INFO } from 'src/sections/sofa13-pages/sofa13-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: { title: 'LỊCH SỬ HÌNH THÀNH', overline: 'LỊCH SỬ', subtitle: 'Hành trình từ xưởng nhỏ đến salon art deco.', image: SOFA13_PAGE_IMAGES.historyHero, content: [{ heading: '2015 — Khởi đầu', body: 'Sofa13 ra đời từ xưởng nhỏ tại Hà Nội với triết lý art deco noir & gold.' }, { heading: '2017 — Velvet', body: 'Ra mắt bộ sưu tập Gatsby Gold — velvet vàng, đường cong art deco.' }, { heading: '2020 — Da Ý', body: 'Ra mắt Crown Deco — da Ý nhập khẩu, đỉnh cao art deco.' }, { heading: '2023 — Salon', body: 'Mở salon đầu tiên tại Hà Nội, trải nghiệm noir & gold.' }, { heading: '2025 — Tương lai', body: '24,000+ không gian đã trang hoàng. Tiếp tục jazz-age glamour.' }] },
  vision: { title: 'TẦM NHÌN & SỨ MỆNH', overline: 'TẦM NHÌN', subtitle: 'Art deco noir & gold — vẻ đẹp thời đại cho mọi không gian.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [{ heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa art deco hàng đầu Việt Nam.' }, { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa jazz-age glamour — vàng trên noir.' }, { heading: 'Giá trị', body: 'Thủ công 14 năm, velvet và da Ý, mỗi sản phẩm là một tác phẩm.' }] },
  values: { title: 'GIÁ TRỊ CỐT LÕI', overline: 'GIÁ TRỊ', subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa13.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [{ heading: 'Thủ công', body: '14 năm thủ công, mỗi đường may là một tác phẩm.' }, { heading: 'Art deco', body: 'Vàng trên noir, sunburst geometry — jazz-age glamour.' }, { heading: 'Vật liệu', body: 'Velvet và da Ý nhập khẩu, đỉnh cao chất lượng.' }, { heading: 'Tùy chỉnh', body: 'Đặt màu, vải, kích thước riêng. Render 3D 24h.' }, { heading: 'Bền vững', body: 'Bảo hành 10 năm, sửa miễn phí trọn đời khung.' }] },
  factory: { title: 'NHÀ MÁY SẢN XUẤT', overline: 'NHÀ MÁY', subtitle: 'Nhà máy 4000m², thủ công kết hợp công nghệ.', image: SOFA13_PAGE_IMAGES.factory, content: [{ heading: 'Diện tích', body: 'Nhà máy 4000m² tại Hà Nội, 4 xưởng: may, da, velvet, lắp ráp.' }, { heading: 'Công suất', body: '300+ sofa/tháng, đáp ứng mọi đơn hàng dự án.' }, { heading: 'Nhân lực', body: '45+ thợ lành nghề, 5+ năm kinh nghiệm art deco.' }] },
  process: { title: 'QUY TRÌNH SẢN XUẤT', overline: 'QUY TRÌNH', subtitle: '6 bước từ ý tưởng đến salon art deco.', image: SOFA13_PAGE_IMAGES.workshop, content: [{ heading: 'Bước 1 — Tư vấn', body: 'Tư vấn phong cách art deco, màu, vật liệu.' }, { heading: 'Bước 2 — Thiết kế 3D', body: 'Bản vẽ 3D trong 24h.' }, { heading: 'Bước 3 — Chọn vật liệu', body: 'Velvet, da Ý, linen — nhập khẩu.' }, { heading: 'Bước 4 — May bọc', body: 'May thủ công, xử lý velvet.' }, { heading: 'Bước 5 — Lắp ráp', body: 'Lắp ráp thủ công, kiểm tra từng chi tiết.' }, { heading: 'Bước 6 — Giao lắp', body: 'Giao lắp tận nơi, bảo hành 10 năm.' }] },
  technology: { title: 'CÔNG NGHỆ SẢN XUẤT', overline: 'CÔNG NGHỆ', subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.', image: SOFA13_PAGE_IMAGES.technology, content: [{ heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao.' }, { heading: 'Render 3D', body: 'Hệ thống render 3D 24h cho khách duyệt.' }, { heading: 'May thủ công', body: 'May thủ công, xử lý velvet Ý.' }, { heading: 'QC tự động', body: 'Hệ thống QC kiểm tra từng sản phẩm.' }] },
  certifications: { title: 'CHỨNG NHẬN CHẤT LƯỢNG', overline: 'CHỨNG NHẬN', subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [{ heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng.' }, { heading: 'OEKO-TEX', body: 'Velvet đạt chuẩn OEKO-TEX.' }, { heading: 'REACH', body: 'Da Ý đạt chuẩn REACH.' }, { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường.' }] },
  team: { title: 'ĐỘI NGŨ NHÂN SỰ', overline: 'ĐỘI NGŨ', subtitle: '45+ chuyên gia tận tâm với art deco.', image: SOFA13_PAGE_IMAGES.team, content: [{ heading: 'Thiết kế', body: '4 nhà thiết kế art deco, tu nghiệp tại Ý.' }, { heading: 'Thợ may', body: '15+ thợ may velvet 5+ năm.' }, { heading: 'Thợ da', body: '10+ thợ bọc da Ý.' }, { heading: 'Stylist', body: '8+ stylist am hiểu art deco.' }] },
  partners: { title: 'ĐỐI TÁC', overline: 'ĐỐI TÁC', subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [{ heading: 'Velvet Ý', body: 'Nhập khẩu velvet Ý chất lượng cao.' }, { heading: 'Da Ý', body: 'Da Ý đạt chuẩn REACH.' }, { heading: 'Hotel & Resort', body: 'Đối tác cung cấp sofa cho 80+ hotel, resort.' }, { heading: 'Designer', body: 'Hợp tác với 40+ studio thiết kế art deco.' }] },
  gallery: { title: 'HÌNH ẢNH CÔNG TY', overline: 'THƯ VIỆN', subtitle: 'Không gian salon, nhà máy, và sản phẩm art deco.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [] },
  video: { title: 'VIDEO GIỚI THIỆU', overline: 'VIDEO', subtitle: 'Khám phá Sofa13 qua video — noir & gold.', image: SOFA13_PAGE_IMAGES.aboutHero, content: [] },
};

export default function Page() {
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet><title>{data.title} — Sofa13</title></Helmet>
      <Sofa13PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa13Section>
          <Grid container spacing={2}>
            {[SOFA13_PAGE_IMAGES.workshop, SOFA13_PAGE_IMAGES.factory, SOFA13_PAGE_IMAGES.technology, SOFA13_PAGE_IMAGES.team, SOFA13_PAGE_IMAGES.prod1, SOFA13_PAGE_IMAGES.prod3, SOFA13_PAGE_IMAGES.prod5, SOFA13_PAGE_IMAGES.gallery1].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.2)}` }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa13Section>
      ) : section === 'video' ? (
        <Sofa13Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa13 Video" sx={{ width: 1, aspectRatio: '16/9', border: `2px solid ${SOFA13_COLORS.gold}` }} />
          </Stack>
        </Sofa13Section>
      ) : (
        <Sofa13Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Box key={i} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA13_COLORS.gold, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold, letterSpacing: 1 }}>{item.heading}</Typography>
                    <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Sofa13Section>
      )}

      <Sofa13Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            <span>{SOFA13_PAGE_COMPANY_INFO.tagline}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5) }}>Liên hệ: {SOFA13_PAGE_COMPANY_INFO.phone} · {SOFA13_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa13Section>
    </>
  );
}
