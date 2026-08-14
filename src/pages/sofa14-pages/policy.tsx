import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

import { SOFA14_COLORS } from 'src/sections/sofa14/sofa14-data';
import { SOFA14_PAGE_IMAGES } from 'src/sections/sofa14-pages/sofa14-pages-data';
import { Sofa14Section, Sofa14PageHero } from 'src/sections/sofa14-pages/sofa14-page-hero';

const POLICIES: Record<string, { title: string; content: { heading: string; body: string }[] }> = {
  shipping: { title: 'CHÍNH SÁCH GIAO HÀNG', content: [{ heading: 'Giao hàng 24h', body: 'Sản phẩm có sẵn giao 24h tại Hà Nội và TP.HCM nội thành.' }, { heading: 'Lắp đặt miễn phí', body: 'Lắp đặt miễn phí toàn quốc.' }, { heading: 'Ngoại thành', body: 'Ngoại thành 2-3 ngày làm việc.' }] },
  warranty: { title: 'CHÍNH SÁCH BẢO HÀNH', content: [{ heading: 'Bảo hành 10 năm', body: 'Bảo hành 10 năm cho velvet và khung.' }, { heading: 'Bảo trì trọn đời', body: 'Bảo trì làm mới bọc với chi phí ưu đãi trọn đời.' }] },
  returns: { title: 'CHÍNH SÁCH ĐỔI TRẢ', content: [{ heading: '30 ngày đổi trả', body: '30 ngày đổi trả không lý do. Hoàn tiền 100% cho sản phẩm tiêu chuẩn.' }, { heading: 'Điều kiện', body: 'Sản phẩm còn nguyên tem, không hư hỏng do sử dụng.' }] },
};

export default function Page() {
  const theme = useTheme();
  const params = useParams();
  const section = params.section || 'shipping';
  const data = POLICIES[section] || POLICIES.shipping;

  return (
    <>
      <Helmet>
        <title>{data.title} — Sofa14</title>
      </Helmet>

      <Sofa14PageHero overline="CHÍNH SÁCH" title={<span>{data.title}</span>} subtitle="Thông tin chi tiết về chính sách của Sofa14." image={SOFA14_PAGE_IMAGES.contact} />

      <Sofa14Section>
        <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }} component={m.div} variants={varFade({ distance: 24 }).inUp}>
          {data.content.map((item, i) => (
            <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
              <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: SOFA14_COLORS.coral, flexShrink: 0 }} />
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold', color: SOFA14_COLORS.coral }}>{item.heading}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.body}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Sofa14Section>
    </>
  );
}
