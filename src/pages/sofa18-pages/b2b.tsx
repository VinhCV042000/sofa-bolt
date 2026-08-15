import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { SOFA18_B2B_SECTIONS } from 'src/sections/sofa18-pages/sofa18-shop-data';
import { SOFA18_PAGE_IMAGES } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx, Sofa18LinkGrid, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem', 'contractor'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA18_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Đại lý B2B'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="ĐẠI LÝ B2B"
        title={<span>{(current?.title ?? 'Đại lý B2B').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Sofa18.'}
        image={SOFA18_PAGE_IMAGES.b2b}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa18Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{current.desc}</Typography>
              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa18FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa18FieldSx} />
                  <Button size="large" variant="contained" sx={sofa18ButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa18Panel>
          )}

          <Stack>
            <Sofa18SectionTitle>Chương trình hợp tác</Sofa18SectionTitle>
            <Sofa18LinkGrid
              cols={4}
              items={SOFA18_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa18/b2b/${s.slug}` : '/sofa18/b2b' }))}
            />
          </Stack>
        </Stack>
      </Sofa18Section>
    </>
  );
}
