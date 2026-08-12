import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Sofa12PageHero } from 'src/sections/sofa12-pages/sofa12-page-hero';
import { SOFA12_PAGE_IMAGES, SOFA12_PAGE_MILESTONES } from 'src/sections/sofa12-pages/sofa12-pages-data';

const SECTIONS: Record<string, { title: string; overline: string; image: string; content: string[] }> = {
  history: { title: 'Lịch sử hình thành', overline: 'Lịch sử', image: 'historyHero', content: [
    `TERRA ARCH ra đời năm ${'2018'} từ xưởng mộc nhỏ tại Hà Nội với 5 nghệ nhân.`,
    'Bắt đầu từ những chiếc sofa bespoke bằng vải lanh thô, thương hiệu dần khẳng định chất lượng thủ công.',
    'Năm 2020, phát triển kỹ thuật uốn vòm lưng ghế bằng tay — 18 công đoạn thủ công mỗi chiếc.',
    'Năm 2022, mở showroom tại 3 thành phố lớn, phục vụ hơn 3.000 gia đình.',
    'Năm 2025, ra mắt 40+ mã vải đất độc quyền, trở thành thương hiệu sofa thủ công hàng đầu.',
  ]},
  vision: { title: 'Tầm nhìn & Sứ mệnh', overline: 'Tầm nhìn', image: 'aboutHero', content: [
    'Tầm nhìn: Trở thành thương hiệu sofa thủ công hàng đầu Việt Nam, mang đất nung và vòm cong vào mỗi không gian sống.',
    'Sứ mệnh: Chế tác sofa bền vững với vật liệu tự nhiên, đồng hành cùng gia đình Việt qua nhiều thế hệ.',
    'Giá trị: Mỗi chiếc sofa TERRA ARCH là tác phẩm thủ công — 18 công đoạn, không sản xuất hàng loạt.',
  ]},
  values: { title: 'Giá trị cốt lõi', overline: 'Giá trị', image: 'workshop', content: [
    'Thủ công: 18 công đoạn chế tác mỗi chiếc sofa, từ uốn vòm đến bọc vải.',
    'Vật liệu tự nhiên: Vải lanh thô, gỗ tần bì FSC, len cừu, cao su thiên nhiên.',
    'Bền vững: Sofa để truyền lại, không để thay — bảo hành 12 năm khung & đệm.',
    'Tận tâm: Bộ swatch 40 mã vải gửi tận nhà, khách xem dưới nắng rồi mới chốt.',
  ]},
  factory: { title: 'Nhà máy sản xuất', overline: 'Nhà máy', image: 'factory', content: [
    'Nhà máy TERRA ARCH tại Hà Nội rộng 5.000m² với 80 nghệ nhân thủ công.',
    'Xưởng uốn vòm cong riêng, xưởng mộng âm gỗ tần bì, xưởng bọc vải lanh.',
    'Mỗi chiếc sofa qua 18 công đoạn, mất 18-24 ngày cho hàng đặt riêng.',
  ]},
  process: { title: 'Quy trình sản xuất', overline: 'Quy trình', image: 'workshop', content: [
    '01. Đo & nghe: Kiến trúc sư tới nhà đo đạc, nghe thói quen ngồi của gia đình.',
    '02. Chọn chất: Bộ swatch 40 mã vải đất gửi tận nhà để xem dưới nắng.',
    '03. Dựng phom: Khung gỗ tần bì mộng âm, thợ uốn vòm lưng bằng tay trong 9 ngày.',
    '04. Về nhà: Giao lắp trong 48h nội thành, kê dọn sạch sẽ, hướng dẫn bảo dưỡng.',
  ]},
  technology: { title: 'Công nghệ sản xuất', overline: 'Công nghệ', image: 'technology', content: [
    'Kỹ thuật uốn vòm cong bằng tay — không máy móc, mỗi vòm là duy nhất.',
    'Mộng âm gỗ tần bì — kết nối không đinh, không keo hóa học.',
    'Phủ chống thấm gốc nước cho toàn bộ vải — lau khăn ẩm là sạch.',
  ]},
  certifications: { title: 'Chứng nhận chất lượng', overline: 'Chứng nhận', image: 'factory', content: [
    'Chứng nhận OEKO-TEX cho vải lanh thô — an toàn cho da và môi trường.',
    'Chứng nhận FSC cho gỗ tần bì — khai thác bền vững.',
    'Chứng nhận ISO 9001:2015 cho quy trình sản xuất thủ công.',
    'Bảo hành 12 năm khung gỗ, 8 năm đệm cao su thiên nhiên.',
  ]},
  team: { title: 'Đội ngũ nhân sự', overline: 'Đội ngũ', image: 'team', content: [
    '80 nghệ nhân thủ công với trung bình 10+ năm kinh nghiệm.',
    '5 kiến trúc sư nội thất đo đạc và tư vấn tận nhà.',
    'Đội lắp đặt chuyên nghiệp — kê dọn sạch sẽ, hướng dẫn bảo dưỡng.',
  ]},
  partners: { title: 'Đối tác', overline: 'Đối tác', image: 'b2b', content: [
    'Đối tác vật liệu: Nhà cung cấp vải lanh Bỉ, gỗ tần bì FSC Việt Nam.',
    'Đối tác thiết kế: Studio kiến trúc tại TP.HCM, Hà Nội, Đà Nẵng.',
    'Đối tác phân phối: Showroom tại 4 thành phố lớn trên toàn quốc.',
  ]},
  gallery: { title: 'Hình ảnh công ty', overline: 'Thư viện', image: 'aboutHero', content: [
    'Xưởng chế tác tại Hà Nội — 18 công đoạn thủ công mỗi chiếc sofa.',
    'Showroom TERRA ARCH tại TP.HCM, Hà Nội, Đà Nẵng, Hội An.',
    'Dự án thực tế: căn hộ Thảo Điền, biệt thự Hội An, resort Nha Trang.',
  ]},
  video: { title: 'Video giới thiệu', overline: 'Video', image: 'aboutHero', content: [
    'Video quay quá trình uốn vòm cong bằng tay — 9 ngày cho mỗi vòm.',
    'Video hướng dẫn bảo dưỡng vải lanh thô và bouclé.',
    'Video trải nghiệm khách hàng tại showroom TERRA ARCH.',
  ]},
};

export default function Page() {
  const { section } = useParams();
  const data = SECTIONS[section || 'history'] || SECTIONS.history;

  return (
    <>
      <Helmet>
        <title>{data.title} - TERRA ARCH</title>
      </Helmet>

      <Sofa12PageHero overline={data.overline} title={data.title} subtitle="TERRA ARCH — Sofa đất nung, vòm cong thủ công." image={SOFA12_PAGE_IMAGES[data.image as keyof typeof SOFA12_PAGE_IMAGES] || SOFA12_PAGE_IMAGES.aboutHero} />

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            {data.content.map((para, i) => (
              <Typography key={i} variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {para}
              </Typography>
            ))}
          </Stack>

          {section === 'history' && (
            <Stack spacing={3} sx={{ mt: 6 }}>
              {SOFA12_PAGE_MILESTONES.map((m) => (
                <Stack key={m.year} direction="row" spacing={3} alignItems="flex-start">
                  <Typography variant="h4" sx={{ color: 'warning.main', minWidth: 80 }}>{m.year}</Typography>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">{m.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{m.description}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
}
