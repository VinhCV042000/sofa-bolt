import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA15_COLORS } from 'src/sections/sofa15/sofa15-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';

const POLICIES: Record<string, { title: string; intro: string; lines: string[] }> = {
  shipping: {
    title: 'Chính sách giao hàng',
    intro: 'Giao hàng và lắp đặt bởi đội ngũ white-glove của Maison Gatsby.',
    lines: [
      'Miễn phí giao và lắp đặt trong nội thành Hà Nội, TP.HCM, Đà Nẵng.',
      'Khu vực khác: 2-5 ngày làm việc, phí vận chuyển tính theo khoảng cách.',
      'Kiểm tra sản phẩm cùng nhân viên giao hàng trước khi ký nhận.',
      'Hỗ trợ mang vác lên tầng, tháo lắp cửa nếu cần.',
      'Thu hồi và xử lý toàn bộ vật liệu đóng gói sau khi lắp đặt.',
    ],
  },
  warranty: {
    title: 'Chính sách bảo hành',
    intro: 'Bảo hành dài hạn cho từng chi tiết chế tác thủ công.',
    lines: [
      'Bảo hành 10 năm cho khung gỗ sồi nguyên khối.',
      'Bảo hành 5 năm cho hệ đệm và lò xo túi độc lập.',
      'Bảo hành 2 năm cho da thật, velvet và cơ cấu recliner.',
      'Vệ sinh và bảo dưỡng miễn phí 1 lần/năm trong 3 năm đầu.',
      'Xuất trình phiếu bảo hành điện tử trong tài khoản khách hàng.',
    ],
  },
  returns: {
    title: 'Chính sách đổi trả',
    intro: 'Đổi trả minh bạch, không phát sinh chi phí ẩn.',
    lines: [
      'Đổi trả trong 30 ngày với sản phẩm nguyên trạng, còn đầy đủ bao bì.',
      'Miễn phí đổi mới nếu lỗi do nhà sản xuất.',
      'Sản phẩm bespoke theo yêu cầu riêng không áp dụng đổi trả.',
      'Hoàn tiền trong 7 ngày làm việc kể từ khi nhận hàng hoàn.',
      'Liên hệ hotline 1900 1925 để khởi tạo yêu cầu đổi trả.',
    ],
  },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const type = params.type || 'shipping';
  const policy = POLICIES[type] || POLICIES.shipping;

  return (
    <>
      <Helmet>
        <title>{policy.title} — Sofa15</title>
      </Helmet>

      <Sofa15PageHero
        overline="CHÍNH SÁCH"
        title={<span>{policy.title.toUpperCase()}</span>}
        subtitle={policy.intro}
        image={SOFA15_PAGE_IMAGES.prod5}
      />

      <Sofa15Section bg="black">
        <Stack spacing={4} sx={{ maxWidth: 820, mx: 'auto' }}>
          <Stack spacing={2} sx={{ p: 4, bgcolor: SOFA15_COLORS.charcoal, border: `1px solid ${varAlpha(SOFA15_COLORS.gold, 0.25)}` }}>
            {policy.lines.map((line) => (
              <Stack key={line} direction="row" spacing={1.5} alignItems="flex-start">
                <Iconify icon="solar:check-circle-bold-duotone" width={20} sx={{ color: SOFA15_COLORS.gold, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.6), lineHeight: 1.9 }}>
                  {line}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            {Object.entries(POLICIES).map(([key, value]) => (
              <Typography
                key={key}
                component={RouterLink}
                href={`/sofa15/policy/${key}`}
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: key === type ? SOFA15_COLORS.gold : varAlpha('#FFFFFF', 0.45),
                  fontFamily: theme.typography.fontSecondaryFamily,
                }}
              >
                {value.title}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}