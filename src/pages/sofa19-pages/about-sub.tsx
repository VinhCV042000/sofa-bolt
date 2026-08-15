import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_COMPANY_INFO } from 'src/sections/sofa19-pages/sofa19-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; subtitle: string; image: string; content: { heading: string; body: string }[] }> = {
  history: { title: 'LỊCH SỬ HÌNH THÀNH', overline: 'LỊCH SỬ', subtitle: 'Hành trình từ xưởng nhỏ đến showroom pastel pop.', image: SOFA19_PAGE_IMAGES.historyHero, content: [{ heading: '2018 — Khởi đầu', body: 'Sofa19 ra đời từ xưởng nhỏ tại Hà Nội với triết lý pastel pop.' }, { heading: '2020 — Cotton', body: 'Ra mắt bộ sưu tập Cloud Mint — cotton pastel, êm như mây.' }, { heading: '2022 — Velvet', body: 'Ra mắt Coral Pop — velvet pastel, vui tươi và ấm áp.' }, { heading: '2024 — Showroom', body: 'Mở showroom đầu tiên tại Hà Nội, trải nghiệm pastel pop.' }, { heading: '2025 — Tương lai', body: '8,200+ sản phẩm đã giao. Tiếp tục claymorphism.' }] },
  vision: { title: 'TẦM NHÌN & SỨ MỆNH', overline: 'TẦM NHÌN', subtitle: 'Pastel pop — vẻ đẹp tươi sáng cho mọi không gian.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [{ heading: 'Tầm nhìn', body: 'Trở thành thương hiệu sofa pastel pop hàng đầu Việt Nam.' }, { heading: 'Sứ mệnh', body: 'Tạo ra những chiếc sofa claymorphism — mint, sky, coral, butter.' }, { heading: 'Giá trị', body: 'Thủ công 10+ năm, cotton và nỉ pastel, mỗi sản phẩm là một tác phẩm.' }] },
  values: { title: 'GIÁ TRỊ CỐT LÕI', overline: 'GIÁ TRỊ', subtitle: '5 giá trị định hình mọi sản phẩm và dịch vụ của Sofa19.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [{ heading: 'Thủ công', body: '10+ năm thủ công, mỗi đường may là một tác phẩm.' }, { heading: 'Pastel pop', body: 'Mint, sky, coral, butter — claymorphism.' }, { heading: 'Vật liệu', body: 'Cotton và nỉ pastel nhập khẩu.' }, { heading: 'Tùy chỉnh', body: 'Đặt màu, vải, kích thước riêng. Render 3D 24h.' }, { heading: 'Bền vững', body: 'Bảo hành 5 năm, sửa miễn phí.' }] },
  factory: { title: 'NHÀ MÁY SẢN XUẤT', overline: 'NHÀ MÁY', subtitle: 'Nhà máy 3000m², thủ công kết hợp công nghệ.', image: SOFA19_PAGE_IMAGES.factory, content: [{ heading: 'Diện tích', body: 'Nhà máy 3000m² tại Hà Nội, 3 xưởng: may, nỉ, lắp ráp.' }, { heading: 'Công suất', body: '200+ sofa/tháng, đáp ứng mọi đơn hàng.' }, { heading: 'Nhân lực', body: '35+ thợ lành nghề, 3+ năm kinh nghiệm pastel pop.' }] },
  process: { title: 'QUY TRÌNH SẢN XUẤT', overline: 'QUY TRÌNH', subtitle: '4 bước từ ý tưởng đến sofa pastel pop.', image: SOFA19_PAGE_IMAGES.workshop, content: [{ heading: 'Bước 1 — Tư vấn', body: 'Tư vấn phong cách pastel, màu, vật liệu.' }, { heading: 'Bước 2 — Thiết kế 3D', body: 'Bản vẽ 3D trong 24h.' }, { heading: 'Bước 3 — May bọc', body: 'May thủ công, xử lý cotton pastel.' }, { heading: 'Bước 4 — Giao lắp', body: 'Giao lắp tận nơi, bảo hành 5 năm.' }] },
  technology: { title: 'CÔNG NGHỆ SẢN XUẤT', overline: 'CÔNG NGHỆ', subtitle: 'Thủ công truyền thống kết hợp công nghệ hiện đại.', image: SOFA19_PAGE_IMAGES.technology, content: [{ heading: 'Cắt CNC', body: 'Máy cắt CNC cho độ chính xác cao.' }, { heading: 'Render 3D', body: 'Hệ thống render 3D 24h cho khách duyệt.' }, { heading: 'May thủ công', body: 'May thủ công, xử lý cotton pastel.' }, { heading: 'QC tự động', body: 'Hệ thống QC kiểm tra từng sản phẩm.' }] },
  certifications: { title: 'CHỨNG NHẬN CHẤT LƯỢNG', overline: 'CHỨNG NHẬN', subtitle: 'Chứng nhận quốc tế về chất lượng và môi trường.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [{ heading: 'ISO 9001:2015', body: 'Chứng nhận hệ thống quản lý chất lượng.' }, { heading: 'OEKO-TEX', body: 'Cotton đạt chuẩn OEKO-TEX.' }, { heading: 'Green Label', body: 'Sản phẩm thân thiện môi trường.' }] },
  team: { title: 'ĐỘI NGŨ NHÂN SỰ', overline: 'ĐỘI NGŨ', subtitle: '35+ chuyên gia tận tâm với pastel pop.', image: SOFA19_PAGE_IMAGES.team, content: [{ heading: 'Thiết kế', body: '3 nhà thiết kế pastel pop.' }, { heading: 'Thợ may', body: '12+ thợ may cotton 3+ năm.' }, { heading: 'Thợ nỉ', body: '8+ thợ bọc nỉ pastel.' }, { heading: 'Stylist', body: '6+ stylist am hiểu pastel pop.' }] },
  partners: { title: 'ĐỐI TÁC', overline: 'ĐỐI TÁC', subtitle: 'Đối tác vật liệu, phân phối, và dự án uy tín.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [{ heading: 'Cotton', body: 'Nhập khẩu cotton pastel chất lượng cao.' }, { heading: 'Nỉ', body: 'Nỉ pastel đạt chuẩn OEKO-TEX.' }, { heading: 'Hotel & Resort', body: 'Đối tác cung cấp sofa cho 60+ hotel, resort.' }, { heading: 'Designer', body: 'Hợp tác với 30+ studio thiết kế pastel pop.' }] },
  gallery: { title: 'HÌNH ẢNH CÔNG TY', overline: 'THƯ VIỆN', subtitle: 'Không gian showroom, nhà máy, và sản phẩm pastel pop.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [] },
  video: { title: 'VIDEO GIỚI THIỆU', overline: 'VIDEO', subtitle: 'Khám phá Sofa19 qua video — pastel pop.', image: SOFA19_PAGE_IMAGES.aboutHero, content: [] },
};

export default function Page() {
  const params = useParams();
  const section = params.section || 'history';
  const data = SECTIONS[section] || SECTIONS.history;

  return (
    <>
      <Helmet><title>{data.title} — Sofa19</title></Helmet>
      <Sofa19PageHero overline={data.overline} title={<span>{data.title}</span>} subtitle={data.subtitle} image={data.image} />

      {section === 'gallery' ? (
        <Sofa19Section>
          <Grid container spacing={2}>
            {[SOFA19_PAGE_IMAGES.workshop, SOFA19_PAGE_IMAGES.factory, SOFA19_PAGE_IMAGES.technology, SOFA19_PAGE_IMAGES.team, SOFA19_PAGE_IMAGES.prod1, SOFA19_PAGE_IMAGES.prod3, SOFA19_PAGE_IMAGES.prod5, SOFA19_PAGE_IMAGES.gallery1].map((img, i) => (
              <Grid key={i} xs={6} md={3}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
                  <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: '24px', border: `6px solid ${SOFA19_COLORS.white}`, boxShadow: `4px 4px 0 ${sofa19Alpha(SOFA19_COLORS.jungleLight, 0.3)}` }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Sofa19Section>
      ) : section === 'video' ? (
        <Sofa19Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Box component="iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sofa19 Video" sx={{ width: 1, aspectRatio: '16/9', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 20px 0 -8px ${sofa19Alpha(SOFA19_COLORS.sand, 0.4)}` }} />
          </Stack>
        </Sofa19Section>
      ) : (
        <Sofa19Section>
          <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
            {data.content.map((item, i) => (
              <Sofa19Card key={i} accent={[SOFA19_COLORS.jungleLight, SOFA19_COLORS.sand, SOFA19_COLORS.coral, SOFA19_COLORS.golden][i % 4]} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 10, height: 10, mt: 1.5, borderRadius: '50%', bgcolor: SOFA19_COLORS.coralDeep, flexShrink: 0 }} />
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{item.heading}</Typography>
                    <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.9), lineHeight: 1.9 }}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Sofa19Card>
            ))}
          </Stack>
        </Sofa19Section>
      )}

      <Sofa19Section bg="jungleLight">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink, '& span': { color: SOFA19_COLORS.coralDeep } }}>
            <span>{SOFA19_PAGE_COMPANY_INFO.tagline}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7) }}>Liên hệ: {SOFA19_PAGE_COMPANY_INFO.phone} · {SOFA19_PAGE_COMPANY_INFO.email}</Typography>
        </Stack>
      </Sofa19Section>
    </>
  );
}
