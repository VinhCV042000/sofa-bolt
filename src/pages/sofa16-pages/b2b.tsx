import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { SOFA16_B2B_SECTIONS } from 'src/sections/sofa16-pages/sofa16-shop-data';
import { SOFA16_PAGE_IMAGES } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx, Sofa16LinkGrid, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem', 'contractor'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA16_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Đại lý B2B'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="ĐẠI LÝ B2B"
        title={<span>{(current?.title ?? 'Đại lý B2B').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Sofa16.'}
        image={SOFA16_PAGE_IMAGES.b2b}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa16Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{current.desc}</Typography>
              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa16FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa16FieldSx} />
                  <Button size="large" variant="contained" sx={sofa16ButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa16Panel>
          )}

          <Stack>
            <Sofa16SectionTitle>Chương trình hợp tác</Sofa16SectionTitle>
            <Sofa16LinkGrid
              cols={4}
              items={SOFA16_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa16/b2b/${s.slug}` : '/sofa16/b2b' }))}
            />
          </Stack>
        </Stack>
      </Sofa16Section>
    </>
  );
}
