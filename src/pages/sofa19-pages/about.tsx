import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade } from 'src/components/animate';

import { sofa19Alpha, SOFA19_COLORS } from 'src/sections/sofa19/sofa19-data';
import { Sofa19Card, Sofa19Section, Sofa19PageHero } from 'src/sections/sofa19-pages/sofa19-page-hero';
import { SOFA19_PAGE_IMAGES, SOFA19_PAGE_COMPANY_INFO } from 'src/sections/sofa19-pages/sofa19-pages-data';

const VALUES = [
  { icon: 'solar:confetti-bold-duotone', title: 'Thủ công 10+ năm', desc: '10+ năm đúc kết thủ công pastel pop.', accent: SOFA19_COLORS.jungleLight },
  { icon: 'solar:hearts-bold-duotone', title: 'Bảo hành 5 năm', desc: 'Khung & đệm bảo hành 5 năm.', accent: SOFA19_COLORS.coral },
  { icon: 'solar:magic-stick-3-bold-duotone', title: '98% hài lòng', desc: 'Hơn 8,200 khách hàng tin tưởng.', accent: SOFA19_COLORS.golden },
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
      <Helmet><title>Về Sofa19 — Pastel Pop</title></Helmet>
      <Sofa19PageHero overline="VỀ CHÚNG TÔI" title={<>VỀ <span>SOFA19</span></>} subtitle="SOFT CLAY / PASTEL POP — 10+ năm thủ công cotton và nỉ pastel, claymorphism." image={SOFA19_PAGE_IMAGES.aboutHero} />

      <Sofa19Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box component="img" src={SOFA19_PAGE_IMAGES.workshop} alt="Xưởng Sofa19" sx={{ width: 1, aspectRatio: '4/5', objectFit: 'cover', borderRadius: '32px', border: `8px solid ${SOFA19_COLORS.white}`, boxShadow: `0 20px 0 -8px ${sofa19Alpha(SOFA19_COLORS.coral, 0.4)}` }} />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2.25, py: 1, width: 'fit-content', borderRadius: 99, bgcolor: SOFA19_COLORS.white, boxShadow: `4px 4px 0 ${sofa19Alpha(SOFA19_COLORS.ink, 0.08)}`, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.06)}` }}>
                <Iconify icon="solar:confetti-bold-duotone" width={18} sx={{ color: SOFA19_COLORS.coralDeep }} />
                <Typography variant="overline" sx={{ color: SOFA19_COLORS.inkSoft, letterSpacing: 1.5, fontSize: 12 }}>PASTEL POP · SINCE 2018</Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -1, color: SOFA19_COLORS.ink, '& span': { color: SOFA19_COLORS.jungle } }}>
                TỪ XƯỞNG NHỎ <span>ĐẾN BLOOM</span>
              </Typography>
              <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.9), lineHeight: 1.9 }}>
                Sofa19 ra đời năm {SOFA19_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội. Bắt đầu với triết lý pastel pop — mint, sky, coral, butter.
              </Typography>
              <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.9), lineHeight: 1.9 }}>
                {SOFA19_PAGE_COMPANY_INFO.tagline}. 10+ năm thủ công, 8,200+ sản phẩm đã giao.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa19Section>

      <Sofa19Section bg="jungleLight">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.6), letterSpacing: 4 }}>GIÁ TRỊ CỐT LÕI</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -1, color: SOFA19_COLORS.ink, '& span': { color: SOFA19_COLORS.coralDeep } }}>
            3 LÝ DO <span>CHỌN SOFA19</span>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Sofa19Card accent={item.accent} component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Stack spacing={2}>
                  <Box sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', bgcolor: sofa19Alpha(item.accent, 0.2), color: item.accent }}>
                    <Iconify icon={item.icon} width={28} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.8), lineHeight: 1.8 }}>{item.desc}</Typography>
                </Stack>
              </Sofa19Card>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>

      <Sofa19Section>
        <Grid container spacing={3}>
          {SOFA19_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack spacing={0.5} alignItems="center" component={m.div} variants={varFade({ distance: 24 }).inUp}>
                <Typography variant="h2" sx={{ fontWeight: 800, color: SOFA19_COLORS.jungle }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.7), fontWeight: 700 }}>{s.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>

      <Sofa19Section bg="creamDeep">
        <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.6), letterSpacing: 4 }}>KHÁM PHÁ THÊM</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -1, color: SOFA19_COLORS.ink, '& span': { color: SOFA19_COLORS.coralDeep } }}>
            11 GÓC NHÌN <span>VỀ SOFA19</span>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack component={RouterLink} href={`/sofa19/about/${item.slug}`} spacing={2} sx={{ p: 3, height: 1, textDecoration: 'none', borderRadius: '24px', bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.06)}`, boxShadow: `4px 4px 0 ${sofa19Alpha(SOFA19_COLORS.jungleLight, 0.3)}`, '&:hover': { boxShadow: `6px 6px 0 ${sofa19Alpha(SOFA19_COLORS.coral, 0.4)}` }, transition: 'all 0.25s' }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', bgcolor: sofa19Alpha(SOFA19_COLORS.golden, 0.3), color: SOFA19_COLORS.coralDeep }}>
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 800, color: SOFA19_COLORS.ink }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa19Section>

      <Sofa19Section>
        <Sofa19Card accent={SOFA19_COLORS.coral} sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', p: { xs: 5, md: 8 } }}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: -1, color: SOFA19_COLORS.ink, '& span': { color: SOFA19_COLORS.jungle } }}>
              BLOOM <span>POP</span>
            </Typography>
            <Typography sx={{ color: sofa19Alpha(SOFA19_COLORS.inkSoft, 0.9) }}>Ghé showroom hoặc đặt lịch tư vấn miễn phí để trải nghiệm sofa pastel pop.</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <Button component={RouterLink} href="/sofa19/showrooms" size="large" sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 800, borderRadius: 99, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.jungleLight, boxShadow: `0 8px 0 ${SOFA19_COLORS.jungle}`, '&:hover': { bgcolor: SOFA19_COLORS.jungleLight, transform: 'translateY(2px)', boxShadow: `0 6px 0 ${SOFA19_COLORS.jungle}` } }}>XEM SHOWROOM</Button>
              <Button component={RouterLink} href="/sofa19/products" size="large" sx={{ px: 4, py: 1.75, fontSize: 15, fontWeight: 800, borderRadius: 99, color: SOFA19_COLORS.ink, bgcolor: SOFA19_COLORS.white, border: `2px solid ${sofa19Alpha(SOFA19_COLORS.ink, 0.1)}`, '&:hover': { borderColor: SOFA19_COLORS.coral, color: SOFA19_COLORS.coralDeep } }}>XEM SẢN PHẨM</Button>
            </Stack>
          </Stack>
        </Sofa19Card>
      </Sofa19Section>
    </>
  );
}
