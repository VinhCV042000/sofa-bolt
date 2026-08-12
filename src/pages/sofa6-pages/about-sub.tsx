import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA6_COLORS } from 'src/sections/sofa6/sofa6-data';
import { SOFA6_PAGE_IMAGES } from 'src/sections/sofa6-pages/sofa6-pages-data';
import { Sofa6Section, Sofa6PageHero } from 'src/sections/sofa6-pages/sofa6-page-hero';

const metadata = { title: 'Chi tiết giới thiệu - Sofa Earth' };

const SECTION_META: Record<string, { title: string; icon: string; content: string }> = {
  history: { title: 'Lịch sử hình thành', icon: 'solar:clock-circle-bold-duotone', content: 'Sofa Earth ra đời năm 2010 từ một xưởng mộc nhỏ tại Hà Nội. Hành trình 15 năm chế tác sofa tự nhiên.' },
  vision: { title: 'Tầm nhìn & Sứ mệnh', icon: 'solar:eye-bold-duotone', content: 'Tầm nhìn và sứ mệnh của Sofa Earth với nội thất tự nhiên Việt Nam.' },
  values: { title: 'Giá trị cốt lõi', icon: 'solar:hand-stars-bold-duotone', content: 'Vật liệu tự nhiên 100%, thuốc nhuộm thực vật, may thủ công — ba giá trị cốt lõi của Sofa Earth.' },
  factory: { title: 'Nhà máy sản xuất', icon: 'solar:buildings-bold-duotone', content: 'Nhà máy chế tác với xưởng may thủ công và khu nhuộm thực vật.' },
  process: { title: 'Quy trình sản xuất', icon: 'solar:list-bold-duotone', content: '5 bước từ vật liệu đến sofa hoàn thiện, tất cả thủ công và thân thiện môi trường.' },
  technology: { title: 'Công nghệ sản xuất', icon: 'solar:cpu-bold-duotone', content: 'Công nghệ hỗ trợ chế tác thủ công, giữ chất tay nghề nghệ nhân.' },
  certifications: { title: 'Chứng nhận chất lượng', icon: 'solar:medal-ribbon-bold-duotone', content: 'Các chứng nhận quốc tế và trong nước về vật liệu tự nhiên và bền vững.' },
  team: { title: 'Đội ngũ nhân sự', icon: 'solar:users-group-rounded-bold-duotone', content: 'Đội ngũ nghệ nhân Việt với 15+ năm kinh nghiệm may sofa thủ công.' },
  partners: { title: 'Đối tác', icon: 'solar:hand-shake-bold-duotone', content: 'Đối tác vật liệu và dự án đồng hành cùng Sofa Earth.' },
  gallery: { title: 'Hình ảnh công ty', icon: 'solar:gallery-bold-duotone', content: 'Thư viện ảnh nhà máy, showroom, xưởng chế tác và sản phẩm tự nhiên.' },
  video: { title: 'Video giới thiệu', icon: 'solar:videocamera-bold-duotone', content: 'Video hành trình chế tác sofa tự nhiên từ nông trường đến phòng khách.' },
};

const TIMELINE = [
  { year: '2010', title: 'Khởi đầu', description: 'Sofa Earth ra đời từ xưởng mộc nhỏ tại Hà Nội với 5 nghệ nhân, chuyên sofa bespoke bằng linen.' },
  { year: '2013', title: 'Mở rộng vật liệu', description: 'Nhập bông hữu cơ và wool tự nhiên, hợp tác với nông trường linen Việt Nam.' },
  { year: '2016', title: 'Thuốc nhuộm thực vật', description: 'Phát triển kỹ thuật nhuộm thực vật từ chàm, củ nghệ, vỏ bời lời — không hóa chất.' },
  { year: '2018', title: 'Showroom đầu tiên', description: 'Mở showroom đầu tiên tại Hà Nội, đưa sofa tự nhiên đến gần khách hàng.' },
  { year: '2020', title: 'Chứng nhận GOTS', description: 'Đạt chứng nhận GOTS cho bông hữu cơ và FSC cho gỗ bền vững.' },
  { year: '2022', title: 'Mở rộng toàn quốc', description: 'Mở showroom tại TP.HCM, Đà Nẵng, Cần Thơ — phục vụ 50.000+ gia đình xanh.' },
  { year: '2025', title: 'Hành trình tiếp nối', description: 'Tiên phong nội thất tự nhiên Việt Nam, mang thiên nhiên vào mọi không gian sống.' },
];

const VISIONS = [
  { icon: 'solar:eye-bold-duotone', title: 'Tầm nhìn', desc: 'Trở thành thương hiệu sofa tự nhiên hàng đầu Việt Nam, tiên phong nội thất bền vững và an toàn cho sức khỏe.' },
  { icon: 'solar:heart-bold-duotone', title: 'Sứ mệnh', desc: 'Mang thiên nhiên vào ngôi nhà mỗi gia đình Việt qua sofa thủ công từ vật liệu tự nhiên 100%.' },
];

const VALUE_CARDS = [
  { icon: 'solar:leaf-bold-duotone', title: '100% Tự Nhiên', desc: 'Linen, bông hữu cơ, wool tự nhiên — không hóa chất, không nhựa, an toàn cho da và sức khỏe.' },
  { icon: 'solar:water-bold-duotone', title: 'Thuốc Nhuộm Thực Vật', desc: 'Nhuộm từ chàm, củ nghệ, vỏ bời lời — màu từ thiên nhiên, an toàn và tạo patina đẹp theo thời gian.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'May Thủ Công', desc: 'Mỗi sofa được may bởi nghệ nhân Việt với 15+ năm kinh nghiệm, đường kim tỉ mỉ, hoàn thiện đẹp.' },
];

const PROCESS_STEPS = [
  { number: '01', title: 'Chọn Vật Liệu', desc: 'Linen, bông hữu cơ, wool, velvet thực vật — mỗi chất liệu mang cảm giác riêng.' },
  { number: '02', title: 'Nhuộm Thực Vật', desc: 'Nhuộm vải bằng chàm, nghệ, vỏ bời lời — màu tự nhiên, an toàn, độc đáo.' },
  { number: '03', title: 'Cắt & May Thủ Công', desc: 'Nghệ nhân cắt may từng chi tiết, đường kim đều đặn, hoàn thiện tỉ mỉ.' },
  { number: '04', title: 'Lắp Khung Gỗ', desc: 'Khung gỗ sồi FSC, sấy tự nhiên 90 ngày, bền 30+ năm, lắp ráp thủ công.' },
  { number: '05', title: 'Giao & Lắp Đặt', desc: 'Giao trong 5-10 ngày, lắp đặt miễn phí, bảo trì bọc trọn đời với chi phí ưu đãi.' },
];

const TECH_CARDS = [
  { icon: 'solar:scissors-bold-duotone', title: 'Cắt CNC Precision', desc: 'Máy cắt CNC hỗ trợ cắt vải chính xác, giảm hao hụt, tối ưu vật liệu tự nhiên.' },
  { icon: 'solar:water-bold-duotone', title: 'Nhuộm Thủ Công', desc: 'Khu nhuộm thực vật thủ công, chàm, nghệ, vỏ bời lời — không hóa chất công nghiệp.' },
  { icon: 'solar:sun-bold-duotone', title: 'Sấy Gỗ Tự Nhiên', desc: 'Gỗ sồi sấy tự nhiên 90 ngày, không hóa chất bảo quản, bền 30+ năm.' },
  { icon: 'solar:hand-stars-bold-duotone', title: 'May Tay Nghệ Nhân', desc: 'Đường kim tay nghề nghệ nhân, mỗi sofa là tác phẩm thủ công độc bản.' },
];

const CERT_CARDS = [
  { icon: 'solar:leaf-bold-duotone', title: 'GOTS', desc: 'Global Organic Textile Standard — chứng nhận bông hữu cơ toàn cầu.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'OEKO-TEX', desc: 'Chứng nhận an toàn vải không chứa hóa chất độc hại cho da.' },
  { icon: 'solar:tree-bold-duotone', title: 'FSC', desc: 'Forest Stewardship Council — gỗ khai thác bền vững, có trách nhiệm.' },
  { icon: 'solar:medal-ribbon-bold-duotone', title: 'EcoLabel Vietnam', desc: 'Nhãn sinh thái Việt Nam — sản phẩm thân thiện môi trường.' },
];

const TEAM_MEMBERS = [
  { name: 'Nguyễn Văn Sơn', role: 'Nghệ nhân trưởng — May linen', avatar: SOFA6_PAGE_IMAGES.team },
  { name: 'Lê Thu Hằng', role: 'Thiết kế nội thất bền vững', avatar: SOFA6_PAGE_IMAGES.workshop },
  { name: 'Trần Việt Cường', role: 'Thợ nhuộm thực vật', avatar: SOFA6_PAGE_IMAGES.factory },
  { name: 'Hoàng Mai', role: 'Quản lý xưởng chế tác', avatar: SOFA6_PAGE_IMAGES.technology },
];

const PARTNERS = ['Nông trường linen Hà Giang', 'Rừng tre Việt Nam', 'Nông trại bông hữu cơ', 'Hợp tác xã wool Mộc Châu', 'Vinhomes', 'Six Senses'];

const GALLERY_IMAGES = [
  SOFA6_PAGE_IMAGES.workshop, SOFA6_PAGE_IMAGES.factory, SOFA6_PAGE_IMAGES.technology, SOFA6_PAGE_IMAGES.team,
  SOFA6_PAGE_IMAGES.product1, SOFA6_PAGE_IMAGES.product3, SOFA6_PAGE_IMAGES.product5, SOFA6_PAGE_IMAGES.product7,
];

const VIDEO_THUMBS = [
  { thumb: SOFA6_PAGE_IMAGES.workshop, title: 'Hành trình chế tác sofa linen' },
  { thumb: SOFA6_PAGE_IMAGES.factory, title: 'Nhuộm thực vật — màu từ thiên nhiên' },
  { thumb: SOFA6_PAGE_IMAGES.team, title: 'Nghệ nhân Sofa Earth' },
];

export default function Page() {
  const { section } = useParams();
  const data = section ? SECTION_META[section] : undefined;

  if (!data) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa6PageHero overline="Giới thiệu" title="Trang không tồn tại" subtitle="Trang bạn tìm không tồn tại trong phần giới thiệu." image={SOFA6_PAGE_IMAGES.historyHero} />
        <Sofa6Section>
          <Stack spacing={3} alignItems="center" sx={{ py: 8, textAlign: 'center' }} component={MotionViewport}>
            <Iconify icon="solar:file-remove-bold-duotone" width={64} sx={{ color: 'text.disabled' }} />
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>Trang không tồn tại</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 480 }}>
              Phần giới thiệu bạn tìm không có. Vui lòng quay lại trang giới thiệu chính.
            </Typography>
            <Button component={RouterLink} href="/sofa6/about" variant="outlined" startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />} sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>
              Về trang giới thiệu
            </Button>
          </Stack>
        </Sofa6Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Sofa6PageHero overline="Giới thiệu" title={data.title} subtitle={data.content} image={SOFA6_PAGE_IMAGES.historyHero} />

      <Sofa6Section>
        <Stack spacing={4} component={MotionViewport}>
          <Box component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                <Iconify icon={data.icon} width={28} />
              </Box>
              <Typography variant="h3">{data.title}</Typography>
            </Stack>
          </Box>

          {/* HISTORY — timeline 2010-2025 */}
          {section === 'history' && (
            <Stack spacing={3}>
              {TIMELINE.map((milestone, i) => (
                <Stack key={milestone.year} component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.06 }} direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Typography variant="h3" sx={{ color: SOFA6_COLORS.terracotta, fontWeight: 'fontWeightBold', minWidth: 80 }}>{milestone.year}</Typography>
                  <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>{milestone.title}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{milestone.description}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}

          {/* VISION — 2 cards */}
          {section === 'vision' && (
            <Grid container spacing={4}>
              {VISIONS.map((v, i) => (
                <Grid key={v.title} xs={12} md={6}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.1 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon={v.icon} width={28} />
                    </Box>
                    <Typography variant="h5">{v.title}</Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{v.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* VALUES — 3 cards */}
          {section === 'values' && (
            <Grid container spacing={3}>
              {VALUE_CARDS.map((item, i) => (
                <Grid key={item.title} xs={12} md={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon={item.icon} width={28} />
                    </Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* FACTORY — image + text */}
          {section === 'factory' && (
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid xs={12} md={6}>
                <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                  <Box component="img" src={SOFA6_PAGE_IMAGES.factory} alt="Nhà máy Sofa Earth" sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                  <Typography variant="h5">Xưởng chế tác thủ công</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Nhà máy Sofa Earth gồm xưởng may thủ công, khu nhuộm thực vật, và xưởng gỗ sồi FSC.
                    Mỗi sofa được chế tác bởi nghệ nhân Việt với 15+ năm kinh nghiệm.
                    Không dây chuyền công nghiệp — mỗi sản phẩm là tác phẩm thủ công độc bản.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Khu nhuộm thực vật sử dụng chàm, củ nghệ, vỏ bời lời — không hóa chất công nghiệp,
                    an toàn cho nghệ nhân, an toàn cho người dùng, an toàn cho môi trường.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          )}

          {/* PROCESS — 5 steps */}
          {section === 'process' && (
            <Grid container spacing={3}>
              {PROCESS_STEPS.map((step, i) => (
                <Grid key={step.number} xs={12} sm={6} md={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Typography variant="h2" sx={{ color: varAlpha(SOFA6_COLORS.terracotta, 0.2), fontWeight: 'fontWeightBold' }}>{step.number}</Typography>
                    <Typography variant="h6">{step.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* TECHNOLOGY — 4 tech cards */}
          {section === 'technology' && (
            <Grid container spacing={3}>
              {TECH_CARDS.map((tech, i) => (
                <Grid key={tech.title} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 1.5, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.sage, 0.08), color: SOFA6_COLORS.sage }}>
                      <Iconify icon={tech.icon} width={28} />
                    </Box>
                    <Typography variant="h6">{tech.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{tech.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* CERTIFICATIONS — 4 cert cards */}
          {section === 'certifications' && (
            <Grid container spacing={3}>
              {CERT_CARDS.map((cert, i) => (
                <Grid key={cert.title} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ p: 4, height: 1, borderRadius: 2, bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card, textAlign: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: 72, height: 72, display: 'flex', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.terracotta, 0.08), color: SOFA6_COLORS.terracotta }}>
                      <Iconify icon={cert.icon} width={36} />
                    </Box>
                    <Typography variant="h6">{cert.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{cert.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* TEAM — 4 members */}
          {section === 'team' && (
            <Grid container spacing={3}>
              {TEAM_MEMBERS.map((member, i) => (
                <Grid key={member.name} xs={12} sm={6} md={3}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} spacing={2} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'background.paper', boxShadow: (t) => t.customShadows.card }}>
                    <Box component="img" src={member.avatar} alt={member.name} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover' }} />
                    <Stack spacing={0.5} sx={{ p: 2.5 }}>
                      <Typography variant="subtitle1">{member.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{member.role}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* PARTNERS — 6 names */}
          {section === 'partners' && (
            <Grid container spacing={3}>
              {PARTNERS.map((partner, i) => (
                <Grid key={partner} xs={12} sm={6} md={4}>
                  <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.06 }} direction="row" spacing={2} alignItems="center" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: (t) => `1px solid ${varAlpha(t.vars.palette.grey['500Channel'], 0.12)}` }}>
                    <Box sx={{ width: 48, height: 48, display: 'flex', borderRadius: 1, alignItems: 'center', justifyContent: 'center', bgcolor: varAlpha(SOFA6_COLORS.sage, 0.08), color: SOFA6_COLORS.sage }}>
                      <Iconify icon="solar:hand-shake-bold-duotone" width={24} />
                    </Box>
                    <Typography variant="subtitle2">{partner}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}

          {/* GALLERY — 8 images grid */}
          {section === 'gallery' && (
            <Grid container spacing={3}>
              {GALLERY_IMAGES.map((img, i) => (
                <Grid key={i} xs={12} sm={6} md={3}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.06 }}>
                    <Box component="img" src={img} alt={`Gallery ${i + 1}`} sx={{ width: 1, borderRadius: 2, aspectRatio: '4/3', objectFit: 'cover' }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* VIDEO — 3 video placeholders */}
          {section === 'video' && (
            <Grid container spacing={3}>
              {VIDEO_THUMBS.map((video, i) => (
                <Grid key={i} xs={12} sm={6} md={4}>
                  <Box component={m.div} variants={varFade({ distance: 24 }).inUp} transition={{ delay: i * 0.08 }} sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden', aspectRatio: '16/9', cursor: 'pointer' }}>
                    <Box component="img" src={video.thumb} alt={video.title} sx={{ width: 1, height: 1, objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.4)' }}>
                      <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: SOFA6_COLORS.terracotta, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Iconify icon="solar:play-bold-duotone" width={32} sx={{ color: 'common.white' }} />
                      </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                      <Typography variant="subtitle2" sx={{ color: 'common.white' }}>{video.title}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Sofa6Section>

      <Sofa6Section bg="grey">
        <Stack direction="row" spacing={2} justifyContent="center" component={MotionViewport}>
          <Button component={RouterLink} href="/sofa6/about" variant="outlined" startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />} sx={{ color: SOFA6_COLORS.terracotta, borderColor: SOFA6_COLORS.terracotta }}>
            Về trang giới thiệu
          </Button>
        </Stack>
      </Sofa6Section>
    </>
  );
}
