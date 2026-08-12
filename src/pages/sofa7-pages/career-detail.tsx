import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SOFA7_COLORS } from 'src/sections/sofa7/sofa7-data';
import { Sofa7Section, Sofa7PageHero } from 'src/sections/sofa7-pages/sofa7-page-hero';
import { SOFA7_PAGE_IMAGES, SOFA7_PAGE_CAREERS } from 'src/sections/sofa7-pages/sofa7-pages-data';

// ----------------------------------------------------------------------

export default function Page() {
  const { id } = useParams();
  const career = SOFA7_PAGE_CAREERS.find((c) => c.id === id);

  if (!career) {
    return (
      <>
        <Helmet>
          <title>Không tìm thấy vị trí · Sofa7</title>
        </Helmet>
        <Sofa7PageHero
          overline="Tuyển dụng"
          title={
            <>
              Vị trí <span>không tồn tại</span>
            </>
          }
          image={SOFA7_PAGE_IMAGES.careers}
        />
        <Sofa7Section>
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', py: 10 }}>
            <Iconify
              icon="solar:file-remove-bold-duotone"
              width={64}
              sx={{ color: 'text.disabled' }}
            />
            <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
              Không tìm thấy vị trí
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Vị trí bạn tìm không tồn tại hoặc đã hết hạn tuyển.
            </Typography>
            <Button
              component={RouterLink}
              href="/sofa7/careers"
              variant="contained"
              sx={{
                borderRadius: 0,
                bgcolor: SOFA7_COLORS.electric,
                color: SOFA7_COLORS.concrete,
                '&:hover': { bgcolor: SOFA7_COLORS.cyan },
              }}
            >
              Về tuyển dụng
            </Button>
          </Stack>
        </Sofa7Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${career.title} · Tuyển dụng Sofa7`}</title>
      </Helmet>

      <Sofa7PageHero
        overline="Tuyển dụng"
        title={career.title}
        subtitle={`${career.type} · ${career.location} · ${career.salary}`}
        image={SOFA7_PAGE_IMAGES.careers}
      />

      <Sofa7Section>
        <Stack spacing={4} component={MotionViewport} sx={{ maxWidth: 760, mx: 'auto' }}>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
          >
            <Chip
              label={career.type}
              size="small"
              sx={{
                borderRadius: 0,
                bgcolor: varAlpha(SOFA7_COLORS.electric, 0.16),
                color: SOFA7_COLORS.concrete,
                fontWeight: 'fontWeightBold',
              }}
            />
            <Chip
              label={career.location}
              size="small"
              sx={{
                borderRadius: 0,
                bgcolor: varAlpha(SOFA7_COLORS.cyan, 0.16),
                color: SOFA7_COLORS.concrete,
                fontWeight: 'fontWeightBold',
              }}
            />
            <Chip
              label={career.salary}
              size="small"
              sx={{
                borderRadius: 0,
                bgcolor: 'common.black',
                color: SOFA7_COLORS.electric,
                fontWeight: 'fontWeightBold',
              }}
            />
          </Stack>

          <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h5"
              sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}
            >
              Mô tả công việc
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              {career.description}
            </Typography>
          </Stack>

          <Stack spacing={2} component={m.div} variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h5"
              sx={{ textTransform: 'uppercase', fontWeight: 'fontWeightBold' }}
            >
              Yêu cầu
            </Typography>
            <Stack spacing={1.5}>
              {career.requirements.map((req) => (
                <Stack key={req} direction="row" spacing={1.5} alignItems="center">
                  <Iconify
                    icon="solar:check-circle-bold-duotone"
                    width={20}
                    sx={{ color: SOFA7_COLORS.cyan }}
                  />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {req}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack
            spacing={2}
            component={m.div}
            variants={varFade({ distance: 24 }).inUp}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 0,
              bgcolor: 'background.paper',
              border: `1px solid ${varAlpha(SOFA7_COLORS.concrete, 0.12)}`,
              boxShadow: (t) => t.customShadows.card,
            }}
          >
            <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
              Ứng tuyển ngay
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Bạn phù hợp với vị trí &ldquo;{career.title}&rdquo;? Nộp CV ngay để gia nhập đội
              Sofa7.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button
                component={RouterLink}
                href="/sofa7/careers/apply"
                variant="contained"
                size="large"
                startIcon={<Iconify icon="solar:file-send-bold-duotone" />}
                sx={{
                  borderRadius: 0,
                  bgcolor: SOFA7_COLORS.electric,
                  color: SOFA7_COLORS.concrete,
                  '&:hover': { bgcolor: SOFA7_COLORS.cyan },
                }}
              >
                Nộp CV ngay
              </Button>
              <Button
                component={RouterLink}
                href="/sofa7/careers"
                variant="outlined"
                sx={{ borderRadius: 0 }}
              >
                Vị trí khác
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Sofa7Section>
    </>
  );
}
