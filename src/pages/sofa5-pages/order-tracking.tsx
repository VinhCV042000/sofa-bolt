import { Helmet } from 'react-helmet-async';

import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_ORDER_STEPS } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa5</title></Helmet>

      <Sofa5PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ sản xuất và giao nhận." image={SOFA5_PAGE_IMAGES.workshop} />

      <Sofa5Section bg="cream">
        <Stack spacing={4}>
          <Sofa5Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ maxWidth: 620 }}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SF16-2026-0912" sx={sofa5FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa5ButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa5Panel>

          <Sofa5Panel title="Tiến độ đơn hàng SF16-2026-0912">
            <Stepper activeStep={2} alternativeLabel sx={{ '& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed': { color: SOFA5_COLORS.clay } }}>
              {SOFA5_ORDER_STEPS.map((step) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="subtitle2" sx={{ color: SOFA5_COLORS.ink }}>{step.label}</Typography>
                    <Typography variant="caption" sx={{ color: SOFA5_COLORS.inkSoft }}>{step.desc}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Sofa5Panel>
        </Stack>
      </Sofa5Section>
    </>
  );
}
