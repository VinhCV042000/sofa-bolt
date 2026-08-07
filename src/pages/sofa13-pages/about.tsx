import { Helmet } from 'react-helmet-async';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

import { sofa13Alpha, SOFA13_COLORS } from 'src/sections/sofa13/sofa13-data';
import { Sofa13PageHero, Sofa13Section } from 'src/sections/sofa13-pages/sofa13-page-hero';
import { SOFA13_PAGE_IMAGES, SOFA13_PAGE_COMPANY_INFO } from 'src/sections/sofa13-pages/sofa13-pages-data';

const VALUES = [
  { icon: 'solar:crown-star-bold', title: 'Thủ công 14 năm', desc: '14 năm đúc kết thủ công art deco, velvet và da Ý.', accent: SOFA13_COLORS.gold },
  { icon: 'solar:shield-star-bold', title: 'Bảo hành 10 năm', desc: 'Khung & đệm bảo hành 10 năm, sửa miễn phí trọn đời khung.', accent: SOFA13_COLORS.emeraldBright },
  { icon: 'solar:medal-ribbons-star-bold', title: '98% hài lòng', desc: 'Hơn 24,000 khách hàng tin tưởng và hài lòng.', accent: SOFA13_COLORS.goldPale },
];

const SUB_PAGES = [
  { slug: 'history', label: 'Lịch sử', icon: 'solar:clock-circle-bold-duotone' },
  { slug: 'vision', label: 'Tầm nhìn', icon: 'solar:eye-bold-duotone' },
  { slug: 'values', label: 'Giá trị cốt lõi', icon: 'solar:star-bold-duotone' },
  { slug: 'factory', label: 'Nhà máy', icon: 'solar:buildings-bold-duotone' },
  { slug: 'process', label: 'Quy trình', icon: 'solar:widget-bold-duotone' },
  { slug: 'technology', label: 'Công nghệ', icon: 'solar:cpu-bold-duotone' },
  { slug: 'certifications', label: 'Chứng nhận', icon: 'solar:medal-ribbon-star-bold-duotone' },
  { slug: 'team', label: 'Đội ngũ', icon: 'solar:users-group-rounded-bold-duotone' },
  { slug: 'partners', label: 'Đối tác', icon: 'solar:hand-shake-bold-duotone' },
  { slug: 'gallery', label: 'Thư viện ảnh', icon: 'solar:gallery-bold-duotone' },
  { slug: 'video', label: 'Video', icon: 'solar:videocamera-bold-duotone' },
];

export default function Page() {
  return (
    <>
      <Helmet><title>Về Sofa13 — Art Deco Noir & Gold</title></Helmet>
      <Sofa13PageHero overline="VỀ CHÚNG TÔI" title={<>VỀ <span>SOFA13</span></>} subtitle="ART DECO NOIR & GOLD — 14 năm thủ công velvet và da Ý, jazz-age glamour." image={SOFA13_PAGE_IMAGES.aboutHero} />

      <Sofa13Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA13_PAGE_IMAGES.workshop} alt="Xưởng Sofa13" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', border: `2px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.4)}` }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, py: 0.75, width: 'fit-content', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06) }}>
                <Iconify icon="solar:crown-star-bold" width={16} sx={{ color: SOFA13_COLORS.gold }} />
                <Typography variant="overline" sx={{ color: SOFA13_COLORS.goldPale, letterSpacing: 3, fontSize: 12 }}>ART DECO · SINCE 2015</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
                TỪ XƯỞNG NHỎ <span>ĐẾN SALON</span>
              </Typography>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>
                Sofa13 ra đời năm {SOFA13_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý art deco — vàng trên noir, velvet và da Ý.
              </Typography>
              <Typography sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.9 }}>
                {SOFA13_PAGE_COMPANY_INFO.tagline}. 14 năm thủ công, 24,000+ không gian đã trang hoàng.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa13Section>

      <Sofa13Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            3 LÝ DO <span>CHỌN SOFA13</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack component={m.div} variants={varFade({ distance: 24 }).inUp} spacing={2} sx={{ p: 4, height: 1, border: `1px solid ${sofa13Alpha(item.accent, 0.3)}`, bgcolor: sofa13Alpha(item.accent, 0.04) }}>
              <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${item.accent}`, color: item.accent }}>
                <Iconify icon={item.icon} width={28} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, color: SOFA13_COLORS.ivory }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: SOFA13_COLORS.ivorySoft, lineHeight: 1.8 }}>{item.desc}</Typography>
            </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section>
        <Grid container spacing={3}>
          {SOFA13_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: SOFA13_COLORS.gold }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.5), letterSpacing: 1, fontWeight: 700 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section bg="charcoal">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa13Alpha(SOFA13_COLORS.ivory, 0.4), letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            11 GÓC NHÌN <span>VỀ SOFA13</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa13/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.15)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.noirDeep, 0.4), '&:hover': { borderColor: SOFA13_COLORS.gold, bgcolor: sofa13Alpha(SOFA13_COLORS.gold, 0.06) }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, color: SOFA13_COLORS.gold }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: SOFA13_COLORS.ivory, letterSpacing: 1 }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa13Section>

      <Sofa13Section>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', p: { xs: 5, md: 8 }, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.3)}`, bgcolor: sofa13Alpha(SOFA13_COLORS.charcoal, 0.5) }}>
          <Typography variant="h3" sx={{ fontWeight: 400, letterSpacing: 1, color: SOFA13_COLORS.ivory, '& span': { color: SOFA13_COLORS.gold, fontStyle: 'italic' } }}>
            SALON <span>ART DECO</span>
          </Typography>
          <Typography sx={{ color: SOFA13_COLORS.ivorySoft }}>Ghé salon hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa noir & gold.</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button component={RouterLink} href="/sofa13/showrooms" size="large" sx={{ px: 4, py: 1.75, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, borderRadius: 0, color: SOFA13_COLORS.noir, bgcolor: SOFA13_COLORS.gold, '&:hover': { bgcolor: SOFA13_COLORS.goldPale } }}>XEM SALON</Button>
            <Button component={RouterLink} href="/sofa13/products" size="large" sx={{ px: 4, py: 1.75, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, borderRadius: 0, color: SOFA13_COLORS.ivory, border: `1px solid ${sofa13Alpha(SOFA13_COLORS.gold, 0.5)}`, '&:hover': { borderColor: SOFA13_COLORS.gold, color: SOFA13_COLORS.gold } }}>XEM SẢN PHẨM</Button>
          </Stack>
        </Stack>
      </Sofa13Section>
    </>
  );
}
