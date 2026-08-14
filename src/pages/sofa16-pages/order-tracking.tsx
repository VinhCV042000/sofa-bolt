import { Helmet } from 'react-helmet-async';

import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_ORDER_STEPS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa16</title></Helmet>

      <Sofa16PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ sản xuất và giao nhận." image={SOFA16_PAGE_IMAGES.workshop} />

      <Sofa16Section bg="cream">
        <Stack spacing={4}>
          <Sofa16Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ maxWidth: 620 }}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SF16-2026-0912" sx={sofa16FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa16ButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa16Panel>

          <Sofa16Panel title="Tiến độ đơn hàng SF16-2026-0912">
            <Stepper activeStep={2} alternativeLabel sx={{ '& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed': { color: SOFA16_COLORS.terracotta } }}>
              {SOFA16_ORDER_STEPS.map((step) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="subtitle2" sx={{ color: SOFA16_COLORS.ink }}>{step.label}</Typography>
                    <Typography variant="caption" sx={{ color: SOFA16_COLORS.inkSoft }}>{step.desc}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Sofa16Panel>
        </Stack>
      </Sofa16Section>
    </>
  );
}
