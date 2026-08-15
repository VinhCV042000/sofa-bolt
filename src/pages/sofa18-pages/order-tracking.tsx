import { Helmet } from 'react-helmet-async';

import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_ORDER_STEPS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  return (
    <>
      <Helmet><title>Theo dõi đơn hàng — Sofa18</title></Helmet>

      <Sofa18PageHero overline="ĐƠN HÀNG" title={<>THEO DÕI <span>ĐƠN HÀNG</span></>} subtitle="Nhập mã đơn hàng để xem tiến độ sản xuất và giao nhận." image={SOFA18_PAGE_IMAGES.workshop} />

      <Sofa18Section bg="cream">
        <Stack spacing={4}>
          <Sofa18Panel title="Tra cứu đơn hàng">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ maxWidth: 620 }}>
              <TextField fullWidth label="Mã đơn hàng" defaultValue="SF16-2026-0912" sx={sofa18FieldSx} />
              <Button size="large" variant="contained" sx={{ ...sofa18ButtonSx, flexShrink: 0 }}>Tra cứu</Button>
            </Stack>
          </Sofa18Panel>

          <Sofa18Panel title="Tiến độ đơn hàng SF16-2026-0912">
            <Stepper activeStep={2} alternativeLabel sx={{ '& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed': { color: SOFA18_COLORS.clay } }}>
              {SOFA18_ORDER_STEPS.map((step) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="subtitle2" sx={{ color: SOFA18_COLORS.ink }}>{step.label}</Typography>
                    <Typography variant="caption" sx={{ color: SOFA18_COLORS.inkSoft }}>{step.desc}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Sofa18Panel>
        </Stack>
      </Sofa18Section>
    </>
  );
}
