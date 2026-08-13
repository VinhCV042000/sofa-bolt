import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const B2B_ITEMS = [
  { slug: '', title: 'Giới thiệu hợp tác', desc: 'Hợp tác cùng Maison Gatsby phát triển thị trường nội thất cao cấp.', icon: 'solar:hand-shake-bold-duotone' },
  { slug: 'dealers', title: 'Đại lý phân phối', desc: 'Hệ thống đại lý Art Deco trên toàn quốc.', icon: 'solar:shop-bold-duotone' },
  { slug: 'distributors', title: 'Nhà phân phối', desc: 'Nhà phân phối khu vực — chiết khấu theo sản lượng.', icon: 'solar:box-bold-duotone' },
  { slug: 'register', title: 'Đăng ký đại lý', desc: 'Gửi hồ sơ trở thành đại lý chính thức.', icon: 'solar:user-plus-bold-duotone' },
  { slug: 'quote', title: 'Báo giá dự án', desc: 'Yêu cầu báo giá số lượng lớn cho dự án.', icon: 'solar:document-bold-duotone' },
  { slug: 'oem', title: 'Yêu cầu sản xuất OEM', desc: 'Sản xuất theo thương hiệu riêng của bạn.', icon: 'solar:factory-bold-duotone' },
  { slug: 'contractors', title: 'Đối tác thi công', desc: 'Hợp tác cùng nhà thầu, kiến trúc sư, designer.', icon: 'solar:ruler-cross-pen-bold-duotone' },
  { slug: 'policy', title: 'Chính sách đại lý', desc: 'Quyền lợi, chiết khấu, hỗ trợ marketing.', icon: 'solar:shield-check-bold-duotone' },
];

const goldField = {
  '& .MuiOutlinedInput-root': { borderRadius: 0, color: '#FFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: varAlpha(SOFA15_COLORS.gold, 0.3) },
  '& .MuiInputLabel-root': { color: varAlpha('#FFFFFF', 0.5) },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || '';
  const current = B2B_ITEMS.find((i) => i.slug === section) || B2B_ITEMS[0];
  const isForm = ['register', 'quote', 'oem', 'contractors'].includes(section);

  return (
    <>
      <Helmet>
        <title>{current.title} — Đại lý B2B Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="ĐẠI LÝ B2B"
        title={
          <>
            ĐẠI LÝ <span>B2B</span>
          </>
        }
        subtitle={current.desc}
        image={SOFA15_PAGE_IMAGES.b2b}
      />

      <Sofa15Section bg="black">
        <Grid container spacing={4}>
          <Grid xs={12} md={isForm ? 5 : 12}>
            <Grid container spacing={3}>
              {B2B_ITEMS.map((item) => {
                const active = item.slug === section;
                return (
                  <Grid key={item.title} xs={12} sm={6} md={isForm ? 12 : 3}>
                    <Stack
                      component={RouterLink}
                      href={`/sofa15/b2b${item.slug ? `/${item.slug}` : ''}`}
                      spacing={2}
                      sx={{
                        p: 3,
                        height: 1,
                        textDecoration: 'none',
                        bgcolor: SOFA15_COLORS.charcoal,
                        border: `1px solid ${varAlpha(SOFA15_COLORS.gold, active ? 0.8 : 0.25)}`,
                        '&:hover': { borderColor: SOFA15_COLORS.gold },
                        transition: 'border-color 0.25s',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: SOFA15_COLORS.gold,
                          border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.4)}`,
                        }}
                      >
                        <Iconify icon={item.icon} width={24} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'common.white',
                          fontWeight: 'fontWeightLight',
                          fontFamily: theme.typography.fontSecondaryFamily,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.4) }}>
                        {item.desc}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          {isForm && (
            <Grid xs={12} md={7}>
              <Stack
                spacing={2.5}
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: SOFA15_COLORS.charcoal,
                  border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.3)}`,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'common.white',
                    fontWeight: 'fontWeightLight',
                    fontFamily: theme.typography.fontSecondaryFamily,
                  }}
                >
                  {current.title}
                </Typography>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Tên công ty" sx={goldField} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Người liên hệ" sx={goldField} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Số điện thoại" sx={goldField} />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Email" sx={goldField} />
                  </Grid>
                  <Grid xs={12}>
                    <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={goldField} />
                  </Grid>
                </Grid>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: 0,
                    bgcolor: SOFA15_COLORS.gold,
                    color: SOFA15_COLORS.black,
                    '&:hover': { bgcolor: SOFA15_COLORS.goldLight },
                  }}
                >
                  Gửi yêu cầu
                </Button>
              </Stack>
            </Grid>
          )}

          {section === 'policy' && (
            <Grid xs={12}>
              <Stack spacing={2} sx={{ p: 4, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
                {[
                  'Chiết khấu 25-40% theo sản lượng cam kết năm.',
                  'Hỗ trợ trưng bày showroom: mẫu sofa, standee, catalogue Art Deco.',
                  'Đào tạo đội ngũ bán hàng và tư vấn thiết kế 2 lần/năm.',
                  'Bảo vệ khu vực kinh doanh độc quyền theo hợp đồng.',
                  'Hỗ trợ marketing, hình ảnh, nội dung số trọn gói.',
                ].map((line) => (
                  <Stack key={line} direction="row" spacing={1.5} alignItems="flex-start">
                    <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA15_COLORS.gold, mt: 0.2 }} />
                    <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.9 }}>
                      {line}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          )}
        </Grid>
      </Sofa15Section>
    </>
  );
}