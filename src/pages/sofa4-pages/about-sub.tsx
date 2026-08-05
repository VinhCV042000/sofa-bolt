import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { Sofa4Section, Sofa4PageHero } from 'src/sections/sofa4-pages/sofa4-page-hero';
import { SOFA4_PAGE_IMAGES, SOFA4_PAGE_MILESTONES } from 'src/sections/sofa4-pages/sofa4-pages-data';

const metadata = { title: 'Chi tiết giới thiệu - Sofa Pop' };

const SECTIONS: Record<string, { title: string; content: string; icon: string }> = {
  history: { title: 'Lịch sử hình thành', icon: 'solar:clock-circle-bold-duotone', content: 'Sofa Pop ra đời năm 2018 từ một xưởng mộc nhỏ tại Hà Nội. Bắt đầu với 5 nghệ nhân, chúng tôi dần phát triển thành thương hiệu sofa Pop hàng đầu Việt Nam.' },
  vision: { title: 'Tầm nhìn & Sứ mệnh', icon: 'solar:eye-bold-duotone', content: 'Tầm nhìn: Trở thành thương hiệu sofa Pop số 1 Đông Nam Á. Sứ mệnh: Mang đến không gian sống xanh, bền vững cho mọi gia đình, giảm dấu chân carbon cho hành tinh.' },
  values: { title: 'Giá trị cốt lõi', icon: 'solar:hand-stars-bold-duotone', content: 'Vật liệu tự nhiên 100%, carbon âm, tái chế 100%, chế tác thủ công, trồng cây xanh cho mỗi đơn hàng.' },
  factory: { title: 'Nhà máy sản xuất', icon: 'solar:buildings-bold-duotone', content: 'Nhà máy 5.000m² tại Hà Nội, sử dụng năng lượng mặt trời, thu hồi nước mưa, không rác thải chôn lấp.' },
  process: { title: 'Quy trình sản xuất', icon: 'solar:list-bold-duotone', content: 'Gieo trồng vật liệu → Thu hoạch & dệt → Chế tác sofa → Giao & trồng cây. Mỗi bước đều thân thiện môi trường.' },
  technology: { title: 'Công nghệ sản xuất', icon: 'solar:cpu-bold-duotone', content: 'Sử dụng CNC precision cutting, máy dệt không hóa chất, năng lượng tái tạo 100%.' },
  certifications: { title: 'Chứng nhận chất lượng', icon: 'solar:medal-ribbon-bold-duotone', content: 'FSC (gỗ bền vững), GOTS (hữu cơ), OEKO-TEX (an toàn), Carbon Neutral.' },
  team: { title: 'Đội ngũ nhân sự', icon: 'solar:users-group-rounded-bold-duotone', content: 'Đội ngũ 120+ nghệ nhân, kỹ sư, nhà thiết kế — tất cả tâm huyết với Pop.' },
  partners: { title: 'Đối tác', icon: 'solar:hand-shake-bold-duotone', content: 'Đối tác vật liệu: nông trường linen Ấn Độ, rừng tre Việt Nam, nông trại len Úc. Đối tác dự án: Vinhomes, Six Senses, Amanoi.' },
  gallery: { title: 'Hình ảnh công ty', icon: 'solar:gallery-bold-duotone', content: 'Thư viện ảnh nhà máy, showroom, xưởng chế tác và các dự án Pop.' },
  video: { title: 'Video giới thiệu', icon: 'solar:videocamera-bold-duotone', content: 'Video hành trình chế tác sofa eco từ nông trường đến phòng khách.' },
};

export default function Page() {
  const { section } = useParams();
  const data = SECTIONS[section || 'history'] || SECTIONS.history;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa4PageHero overline="Giới thiệu" title={data.title} subtitle={data.content} image={SOFA4_PAGE_IMAGES.historyHero} />

      <Sofa4Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: (t) => varAlpha(t.vars.palette.warning.mainChannel, 0.08), color: 'warning.main' }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h3">{data.title}</Typography>
            </Stack>
          </Box>

          {section === 'history' && (
            <Sofa4Section bg="grey">
              <Stack spacing={3}>
                {SOFA4_PAGE_MILESTONES.map((milestone, i) => (
                  <Stack key={milestone.year} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.06 }} direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <Typography variant="h3" sx={{ color: 'warning.main', fontWeight: 'fontWeightBold', minWidth: 80 }}>{milestone.year}</Typography>
                    <Stack spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{milestone.title}</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{milestone.description}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Sofa4Section>
          )}

          {section === 'gallery' && (
            <Grid container spacing={3}>
              {[SOFA4_PAGE_IMAGES.workshop, SOFA4_PAGE_IMAGES.factory, SOFA4_PAGE_IMAGES.technology, SOFA4_PAGE_IMAGES.team, SOFA4_PAGE_IMAGES.product1, SOFA4_PAGE_IMAGES.product3].map((img, i) => (
                <Grid key={i} xs={12} sm={6} md={4}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }}>
                    <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {section === 'video' && (
            <Box component={m.div} variants={varFade({ distance: 24 }).inUp} sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden', aspectRatio: '16/9' }}>
              <Box component="img" src={SOFA4_PAGE_IMAGES.cta} alt="Video thumbnail" sx={{ width: 1, height: 1, objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.4)' }}>
                <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: 'warning.main', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Iconify icon="solar:play-bold-duotone" width={40} sx={{ color: 'common.white' }} />
                </Box>
              </Box>
            </Box>
          )}

          {!section && (
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{data.content}</Typography>
          )}
        </Stack>
      </Sofa4Section>
    </>
  );
}
