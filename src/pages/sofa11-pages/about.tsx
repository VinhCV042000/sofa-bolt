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

import { sofa11Alpha, SOFA11_COLORS } from 'src/sections/sofa11/sofa11-data';
import { Sofa11Section, Sofa11PageHero } from 'src/sections/sofa11-pages/sofa11-page-hero';
import {
  SOFA11_PAGE_IMAGES,
  SOFA11_PAGE_COMPANY_INFO,
} from 'src/sections/sofa11-pages/sofa11-pages-data';

const VALUES = [
  {
    icon: 'solar:palette-bold',
    title: '200+ Mã Màu',
    desc: 'Hơn 200 mã vải để bạn tự phối — vì phòng khách của bạn không nên giống catalogue.',
    accent: SOFA11_COLORS.magenta,
  },
  {
    icon: 'solar:bolt-circle-bold',
    title: 'Giao 48h',
    desc: 'Giao lắp siêu tốc nội thành 48h. Đổi tông phòng khách ngay lập tức.',
    accent: SOFA11_COLORS.lime,
  },
  {
    icon: 'solar:cube-bold',
    title: 'Render 3D 24h',
    desc: 'Dựng bản render 3D trong 24h để bạn duyệt trước khi may.',
    accent: SOFA11_COLORS.cyan,
  },
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
      <Helmet>
        <title>Về Sofa11 — Neon Pop</title>
      </Helmet>
      <Sofa11PageHero
        overline="VỀ CHÚNG TÔI"
        title={
          <>
            VỀ <span>SOFA11</span>
          </>
        }
        subtitle="NEON POP — No beige allowed. 5 năm đúc kết sofa pop, dáng cong, module ghép tự do."
        image={SOFA11_PAGE_IMAGES.aboutHero}
      />

      <Sofa11Section>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Box component={m.div} variants={varFade({ distance: 24 }).inLeft}>
              <Box
                component="img"
                src={SOFA11_PAGE_IMAGES.workshop}
                alt="Xưởng Sofa11"
                sx={{
                  width: 1,
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: '24px 24px 24px 0',
                  border: `3px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.4)}`,
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack spacing={3} component={m.div} variants={varFade({ distance: 24 }).inRight}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  px: 2,
                  py: 0.75,
                  width: 'fit-content',
                  borderRadius: 99,
                  border: `2px solid ${SOFA11_COLORS.lime}`,
                }}
              >
                <Iconify
                  icon="solar:bolt-circle-bold"
                  width={18}
                  sx={{ color: SOFA11_COLORS.lime }}
                />
                <Typography
                  variant="overline"
                  sx={{ color: SOFA11_COLORS.lime, letterSpacing: 2, fontSize: 12 }}
                >
                  NEON POP · SINCE 2019
                </Typography>
              </Stack>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -1.5,
                  textTransform: 'uppercase',
                  color: SOFA11_COLORS.cream,
                }}
              >
                TỪ XƯỞNG NHỎ{' '}
                <Box
                  component="span"
                  sx={{
                    color: SOFA11_COLORS.magenta,
                    textShadow: `3px 3px 0 ${SOFA11_COLORS.cyan}`,
                  }}
                >
                  ĐẾN POP
                </Box>
              </Typography>
              <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.72), lineHeight: 1.8 }}>
                Sofa11 ra đời năm {SOFA11_PAGE_COMPANY_INFO.founded} từ một xưởng nhỏ tại Hà Nội.
                Bắt đầu với triết lý &ldquo;no beige allowed&rdquo; — sofa thủ công màu chói, dáng
                cong, module ghép tự do.
              </Typography>
              <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.72), lineHeight: 1.8 }}>
                {SOFA11_PAGE_COMPANY_INFO.tagline}. 5 năm neon pop, 12.8k+ phòng khách đã lên màu.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Sofa11Section>

      <Sofa11Section bg="grape">
        <Stack
          spacing={2}
          sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}
        >
          <Typography
            variant="overline"
            sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), letterSpacing: 4 }}
          >
            GIÁ TRỊ CỐT LÕI
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: -1.5,
              textTransform: 'uppercase',
              color: SOFA11_COLORS.cream,
            }}
          >
            3 LÝ DO{' '}
            <Box
              component="span"
              sx={{ color: SOFA11_COLORS.lime, textShadow: `3px 3px 0 ${SOFA11_COLORS.magenta}` }}
            >
              CHỌN SOFA11
            </Box>
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {VALUES.map((item) => (
            <Grid key={item.title} xs={12} md={4}>
              <Stack
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
                spacing={2}
                sx={{
                  p: 4,
                  height: 1,
                  borderRadius: '24px 24px 24px 0',
                  bgcolor: sofa11Alpha(item.accent, 0.08),
                  border: `2px solid ${sofa11Alpha(item.accent, 0.3)}`,
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: item.accent,
                    color: SOFA11_COLORS.void,
                    boxShadow: `0 0 24px ${sofa11Alpha(item.accent, 0.5)}`,
                  }}
                >
                  <Iconify icon={item.icon} width={28} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 900, textTransform: 'uppercase', color: SOFA11_COLORS.cream }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6), lineHeight: 1.8 }}
                >
                  {item.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>

      <Sofa11Section>
        <Grid container spacing={3}>
          {SOFA11_PAGE_COMPANY_INFO.stats.map((s) => (
            <Grid key={s.label} xs={6} md={3}>
              <Stack
                spacing={0.5}
                alignItems="center"
                component={m.div}
                variants={varFade({ distance: 24 }).inUp}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: SOFA11_COLORS.magenta,
                    textShadow: `2px 2px 0 ${SOFA11_COLORS.cyan}`,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: sofa11Alpha(SOFA11_COLORS.cream, 0.5),
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontWeight: 700,
                  }}
                >
                  {s.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>

      <Sofa11Section bg="grape">
        <Stack
          spacing={2}
          sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 5, md: 8 } }}
        >
          <Typography
            variant="overline"
            sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.4), letterSpacing: 4 }}
          >
            KHÁM PHÁ THÊM
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: -1.5,
              textTransform: 'uppercase',
              color: SOFA11_COLORS.cream,
            }}
          >
            11 GÓC NHÌN{' '}
            <Box
              component="span"
              sx={{ color: SOFA11_COLORS.lime, textShadow: `3px 3px 0 ${SOFA11_COLORS.magenta}` }}
            >
              VỀ SOFA11
            </Box>
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {SUB_PAGES.map((item) => (
            <Grid key={item.slug} xs={6} sm={4} md={3}>
              <Stack
                component={RouterLink}
                href={`/sofa11/about/${item.slug}`}
                spacing={2}
                sx={{
                  p: 3,
                  height: 1,
                  borderRadius: '16px 16px 16px 0',
                  textDecoration: 'none',
                  bgcolor: sofa11Alpha(SOFA11_COLORS.void, 0.4),
                  border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.1)}`,
                  '&:hover': {
                    borderColor: SOFA11_COLORS.lime,
                    boxShadow: `0 0 20px ${sofa11Alpha(SOFA11_COLORS.lime, 0.3)}`,
                  },
                  transition: 'all 0.25s',
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: sofa11Alpha(SOFA11_COLORS.lime, 0.15),
                    color: SOFA11_COLORS.lime,
                  }}
                >
                  <Iconify icon={item.icon} width={20} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 800, color: SOFA11_COLORS.cream, textTransform: 'uppercase' }}
                >
                  {item.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Sofa11Section>

      <Sofa11Section>
        <Stack
          spacing={4}
          alignItems="center"
          sx={{
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            p: { xs: 5, md: 8 },
            borderRadius: '32px 32px 32px 0',
            bgcolor: SOFA11_COLORS.grape,
            border: `2px solid ${sofa11Alpha(SOFA11_COLORS.magenta, 0.3)}`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: -1,
              textTransform: 'uppercase',
              color: SOFA11_COLORS.cream,
            }}
          >
            PHÒNG KHÁCH{' '}
            <Box
              component="span"
              sx={{ color: SOFA11_COLORS.lime, textShadow: `3px 3px 0 ${SOFA11_COLORS.magenta}` }}
            >
              BẬT MÀU
            </Box>
          </Typography>
          <Typography sx={{ color: sofa11Alpha(SOFA11_COLORS.cream, 0.6) }}>
            Ghé showroom hoặc đặt lịch tư vấn miễn phí để phối màu sofa pop.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button
              component={RouterLink}
              href="/sofa11/showrooms"
              size="large"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 900,
                borderRadius: 99,
                textTransform: 'uppercase',
                color: SOFA11_COLORS.void,
                bgcolor: SOFA11_COLORS.lime,
                boxShadow: `0 0 32px ${sofa11Alpha(SOFA11_COLORS.lime, 0.5)}`,
                '&:hover': { bgcolor: SOFA11_COLORS.cyan, transform: 'translateY(-2px)' },
                transition: 'all .25s',
              }}
            >
              XEM SHOWROOM
            </Button>
            <Button
              component={RouterLink}
              href="/sofa11/products"
              size="large"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 99,
                textTransform: 'uppercase',
                color: SOFA11_COLORS.cream,
                border: `2px solid ${sofa11Alpha(SOFA11_COLORS.cream, 0.4)}`,
                '&:hover': { borderColor: SOFA11_COLORS.magenta, color: SOFA11_COLORS.magenta },
              }}
            >
              XEM SẢN PHẨM
            </Button>
          </Stack>
        </Stack>
      </Sofa11Section>
    </>
  );
}
