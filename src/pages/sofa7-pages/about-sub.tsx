import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7PageHero, Sofa7Section } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

const metadata = { title: 'Về Sofa7 — Chi tiết' };

const SECTION_META: Record<string, { label: string; image: string; overline: string }> = {
  history: { label: 'Lịch sử', image: SOFA7_PAGE_IMAGES.historyHero, overline: 'HÀNH TRÌNH' },
  vision: { label: 'Tầm nhìn', image: SOFA7_PAGE_IMAGES.aboutHero, overline: 'TẦM NHÌN' },
  values: { label: 'Giá trị cốt lõi', image: SOFA7_PAGE_IMAGES.workshop, overline: 'GIÁ TRỊ' },
  factory: { label: 'Xưởng sản xuất', image: SOFA7_PAGE_IMAGES.factory, overline: 'XƯỞNG' },
  process: { label: 'Quy trình', image: SOFA7_PAGE_IMAGES.technology, overline: 'QUY TRÌNH' },
  technology: { label: 'Công nghệ', image: SOFA7_PAGE_IMAGES.technology, overline: 'CÔNG NGHỆ' },
  certifications: { label: 'Chứng nhận', image: SOFA7_PAGE_IMAGES.factory, overline: 'CHỨNG NHẬN' },
  team: { label: 'Đội ngũ', image: SOFA7_PAGE_IMAGES.team, overline: 'ĐỘI NGŨ' },
  partners: { label: 'Đối tác', image: SOFA7_PAGE_IMAGES.workshop, overline: 'ĐỐI TÁC' },
  gallery: { label: 'Thư viện ảnh', image: SOFA7_PAGE_IMAGES.aboutHero, overline: 'GALLERY' },
  video: { label: 'Video', image: SOFA7_PAGE_IMAGES.factory, overline: 'VIDEO' },
};

const TIMELINE = [
  { year: '2015', title: 'KHỞI ĐẦU', desc: 'Xưởng nhỏ 5 người tại Hà Nội. Sofa bespoke đầu tiên ra đời.' },
  { year: '2017', title: 'STREET POP', desc: 'Ra mắt bộ sưu tập Street Pop — velvet đỏ phá cách.' },
  { year: '2019', title: 'EXPAND', desc: 'Mở showroom TP.HCM. 10k+ urban dwellers.' },
  { year: '2021', title: 'NEON LOUNGE', desc: 'Bộ sưu tập Neon Lounge — cam neon bùng nổ.' },
  { year: '2023', title: '50K+', desc: 'Vượt mốc 50k khách hàng. Mở Đà Nẵng & Cần Thơ.' },
  { year: '2025', title: 'URBAN LEGEND', desc: '40+ mẫu loft design. Thương hiệu urban #1 Việt Nam.' },
];

const VISIONS = [
  { icon: 'solar:eye-bold-duotone', title: 'TẦM NHÌN 2030', desc: 'Trở thành thương hiệu sofa urban #1 Đông Nam Á. Mang vibe loft đến mọi không gian sống.' },
  { icon: 'solar:globe-bold-duotone', title: 'SỨ MỆNH', desc: 'Đưa street style vào nội thất Việt. Phá vỡ quy tắc, tạo cá tính độc nhất cho từng không gian.' },
];

const VALUE_CARDS = [
  { icon: 'solar:shield-check-bold-duotone', title: 'CHẤT LƯỢNG KHÔNG THỎA HIỆP', desc: 'Da thật, thép đen, velvet Ý. Không giả, không nhái, không cắt xén.' },
  { icon: 'solar:bolt-bold-duotone', title: 'CÁ TÍNH PHÁ CÁCH', desc: '40+ màu neon, mix & match. Không sofa nào giống sofa nào.' },
  { icon: 'solar:hand-shake-bold-duotone', title: 'ĐỒNG HÀNH 10 NĂM+', desc: 'Bảo hành 10 năm thép, 5 năm da/velvet. Bảo trì trọn đời.' },
];

const STEPS = [
  { num: '01', title: 'CHỌN VIBE', desc: 'Concrete, Street Pop, Neon, hay Graffiti? Chọn phong cách phù hợp.' },
  { num: '02', title: 'CHỌN SIZE', desc: 'Từ studio 30m² đến loft 100m². Modular linh hoạt cho mọi không gian.' },
  { num: '03', title: 'CHỌN COLOR', desc: '40+ màu velvet, 10+ tone da. Mix & match tạo combo độc nhất.' },
  { num: '04', title: 'SẢN XUẤT', desc: 'Hàn Mig khung thép, bọc da/velvet thủ công. QC từng công đoạn.' },
  { num: '05', title: 'SHIP & SETUP', desc: 'Giao 24h nội thành, lắp đặt miễn phí. Đổi trả 30 ngày không lý do.' },
];

const TECHS = [
  { icon: 'solar:bolt-bold-duotone', title: 'HÀN MIG', desc: 'Hàn Mig khung thép, chịu lực 500kg. Mối hàn đồng nhất, không rỉ.' },
  { icon: 'solar:water-bold-duotone', title: 'SƠN TĨNH ĐIỆN', desc: 'Sơn tĩnh điện 3 lớp, chống rỉ, chống trầy. Bền 10 năm+.' },
  { icon: 'solar:scissors-bold-duotone', title: 'CẮT LASER', desc: 'Cắt CNC laser chính xác 0.1mm. Mọi chi tiết đồng nhất.' },
  { icon: 'solar:cpu-bold-duotone', title: 'QC TỰ ĐỘNG', desc: 'Kiểm tra chất lượng tự động AI. Không sản phẩm lỗi ra xưởng.' },
];

const CERTS = [
  { icon: 'solar:medal-ribbon-star-bold-duotone', title: 'ISO 9001', desc: 'Hệ thống quản lý chất lượng quốc tế.' },
  { icon: 'solar:leaf-bold-duotone', title: 'OEKO-TEX', desc: 'Velvet & da không chứa chất độc hại.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'GREENGUARD', desc: 'Sản phẩm thân thiện không gian trong nhà.' },
  { icon: 'solar:flag-bold-duotone', title: 'MADE IN VIETNAM', desc: 'Sản xuất 100% tại Việt Nam.' },
];

const TEAM = [
  { name: 'Đặng Việt', role: 'Founder & Creative Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Lê Mai', role: 'Head of Design', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Trần Khoa', role: 'Production Manager', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { name: 'Phương Anh', role: 'Brand Strategist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
];

const PARTNERS = ['LOFT DISTRICT 7', 'BRICK VILLA THẢO ĐIỀN', 'HOTEL ZONE 9', 'RESORT STREET ART', 'OFFICE OPEN PLAN', 'SHOWROOM CONCRETE'];

const GALLERY_IMAGES = [
  SOFA7_PAGE_IMAGES.product1, SOFA7_PAGE_IMAGES.product2, SOFA7_PAGE_IMAGES.product3, SOFA7_PAGE_IMAGES.product4,
  SOFA7_PAGE_IMAGES.product5, SOFA7_PAGE_IMAGES.product6, SOFA7_PAGE_IMAGES.product7, SOFA7_PAGE_IMAGES.product8,
];

export default function Page() {
  const theme = useTheme();
  const { section } = useParams();

  const meta = SECTION_META[section ?? ''];

  if (!meta) {
    return (
      <>
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Sofa7Section>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
            <Iconify icon="solar:danger-bold-duotone" width={64} sx={{ color: SOFA7_COLORS.red }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
              TRANG KHÔNG TỒN TẠI
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</Typography>
            <Button component={RouterLink} href="/sofa7/about" size="large" variant="contained" sx={{ borderRadius: 0, bgcolor: SOFA7_COLORS.electric, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { bgcolor: SOFA7_COLORS.cyan } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
              VỀ TRANG VỀ SOFA7
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Sofa7 — ${meta.label}`}</title>
      </Helmet>

      <Sofa7PageHero
        overline={meta.overline}
        title={
          <>
            {meta.label.toUpperCase().split(' ').slice(0, -1).join(' ')}{' '}
            <span>{meta.label.toUpperCase().split(' ').slice(-1)}</span>
          </>
        }
        image={meta.image}
      />

      {/* History — timeline */}
      {section === 'history' && (
        <Sofa7Section>
          <Stack spacing={5}>
            {TIMELINE.map((item, idx) => (
              <Grid key={item.year} container spacing={3} alignItems="center" component={m.div} {...varFade({ distance: 24 }).inUp}>
                <Grid xs={3} md={2}>
                  <Typography variant="h2" sx={{ color: SOFA7_COLORS.electric, fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                    {item.year}
                  </Typography>
                </Grid>
                <Grid xs={9} md={10}>
                  <Stack spacing={1} sx={{ pl: 3, borderLeft: `3px solid ${idx % 2 === 0 ? SOFA7_COLORS.electric : SOFA7_COLORS.cyan}` }}>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Sofa7Section>
      )}

      {/* Vision — 2 cards */}
      {section === 'vision' && (
        <Sofa7Section>
          <Grid container spacing={4}>
            {VISIONS.map((item) => (
              <Grid key={item.title} xs={12} md={6}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={3} sx={{ p: 5, height: 1, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                    <Iconify icon={item.icon} width={32} />
                  </Box>
                  <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Values — 3 cards */}
      {section === 'values' && (
        <Sofa7Section>
          <Grid container spacing={3}>
            {VALUE_CARDS.map((item) => (
              <Grid key={item.title} xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Factory — image + text */}
      {section === 'factory' && (
        <Sofa7Section>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid xs={12} md={6}>
              <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
                <Box component="img" src={SOFA7_PAGE_IMAGES.factory} alt="Xưởng Sofa7" sx={{ width: 1, aspectRatio: '4/3', objectFit: 'cover', borderRadius: 0 }} />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
                <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                  XƯỞNG <Box component="span" sx={{ ...textGradient(`90deg, ${SOFA7_COLORS.electric} 0%, ${SOFA7_COLORS.cyan} 100%`) }}>INDUSTRIAL</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Xưởng Sofa7 rộng 2000m² tại Hà Nội. 50 thợ lành nghề — hàn Mig, bọc da, may velvet.
                  Mỗi sofa trải qua 12 công đoạn QC trước khi ra xưởng.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Máy cắt CNC laser, hàn Mig tự động, sơn tĩnh điện 3 lớp. Công nghệ Đức + bàn tay Việt = chất lượng quốc tế.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Sofa7Section>
      )}

      {/* Process — 5 steps */}
      {section === 'process' && (
        <Sofa7Section>
          <Stack spacing={3}>
            {STEPS.map((item) => (
              <Stack key={item.num} component={m.div} variants={varFade({ distance: 24 }).inUp} direction="row" spacing={3} alignItems="center" sx={{ p: 3, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric, flexShrink: 0 }}>
                  <Typography variant="h4" sx={{ fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.num}</Typography>
                </Box>
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Sofa7Section>
      )}

      {/* Technology — 4 tech cards */}
      {section === 'technology' && (
        <Sofa7Section>
          <Grid container spacing={3}>
            {TECHS.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.cyan }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Certifications — 4 cert cards */}
      {section === 'certifications' && (
        <Sofa7Section>
          <Grid container spacing={3}>
            {CERTS.map((item) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} alignItems="center" sx={{ p: 4, height: 1, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`, textAlign: 'center' }}>
                  <Box sx={{ width: 64, height: 64, display: 'flex', borderRadius: 0, alignItems: 'center', justifyContent: 'center', bgcolor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.electric }}>
                    <Iconify icon={item.icon} width={32} />
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.desc}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Team — 4 members */}
      {section === 'team' && (
        <Sofa7Section>
          <Grid container spacing={3} justifyContent="center">
            {TEAM.map((member) => (
              <Grid key={member.name} xs={12} sm={6} md={3}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} alignItems="center" sx={{ p: 4, borderRadius: 0, bgcolor: 'background.paper', border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` }}>
                  <Box component="img" src={member.avatar} alt={member.name} sx={{ width: 96, height: 96, borderRadius: 0, objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: SOFA7_COLORS.electric, textTransform: 'uppercase', letterSpacing: 1 }}>{member.role}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Partners — 6 names */}
      {section === 'partners' && (
        <Sofa7Section>
          <Grid container spacing={3}>
            {PARTNERS.map((name) => (
              <Grid key={name} xs={12} sm={6} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} alignItems="center" justifyContent="center" sx={{ p: 4, height: 120, borderRadius: 0, bgcolor: SOFA7_COLORS.concrete, color: 'common.white' }}>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily, color: SOFA7_COLORS.electric, textAlign: 'center' }}>{name}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Gallery — 8 images grid */}
      {section === 'gallery' && (
        <Sofa7Section>
          <Grid container spacing={2}>
            {GALLERY_IMAGES.map((img, idx) => (
              <Grid key={idx} xs={6} md={3}>
                <Box component={m.img} src={img} alt={`Gallery ${idx + 1}`} variants={varFade({ distance: 24 }).inUp} sx={{ width: 1, aspectRatio: '1/1', objectFit: 'cover', borderRadius: 0, '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' } }} />
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Video — 3 video placeholders */}
      {section === 'video' && (
        <Sofa7Section>
          <Grid container spacing={4}>
            {[0, 1, 2].map((idx) => (
              <Grid key={idx} xs={12} md={4}>
                <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ borderRadius: 0 }}>
                  <Box sx={{ position: 'relative', aspectRatio: '16/9', bgcolor: SOFA7_COLORS.concrete, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 0, overflow: 'hidden' }}>
                    <Box component="img" src={[SOFA7_PAGE_IMAGES.product1, SOFA7_PAGE_IMAGES.product3, SOFA7_PAGE_IMAGES.factory][idx]} alt={`Video ${idx + 1}`} sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover', opacity: 0.4 }} />
                    <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: SOFA7_COLORS.electric, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                      <Iconify icon="solar:play-bold" width={32} sx={{ color: SOFA7_COLORS.concrete }} />
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold', fontFamily: theme.typography.fontSecondaryFamily }}>
                    {['SOFAT7 — BEHIND THE SCENES', 'QUY TRÌNH SẢN XUẤT', 'STORY OF SOFA7'][idx]}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Sofa7Section>
      )}

      {/* Back link */}
      <Sofa7Section bg="grey" py={{ xs: 6, md: 8 }}>
        <Stack direction="row" justifyContent="center">
          <Button component={RouterLink} href="/sofa7/about" size="large" variant="outlined" sx={{ borderRadius: 0, borderColor: SOFA7_COLORS.concrete, color: SOFA7_COLORS.concrete, fontWeight: 'fontWeightBold', '&:hover': { borderColor: SOFA7_COLORS.electric, color: SOFA7_COLORS.electric, bgcolor: 'transparent' } }} startIcon={<Iconify icon="solar:arrow-left-bold-duotone" />}>
            VỀ TRANG VỀ SOFA7
          </Button>
        </Stack>
      </Sofa7Section>
    </>
  );
}
