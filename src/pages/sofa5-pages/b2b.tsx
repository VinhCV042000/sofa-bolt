import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { SOFA5_B2B_SECTIONS } from 'src/sections/sofa5-pages/sofa5-shop-data';
import { SOFA5_PAGE_IMAGES } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx, Sofa5LinkGrid, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem', 'contractor'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA5_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet><title>{`${current?.title ?? 'Đại lý B2B'} — Sofa Royale`}</title></Helmet>

      <Sofa5PageHero
        overline="ĐẠI LÝ B2B"
        title={<span>{(current?.title ?? 'Đại lý B2B').toUpperCase()}</span>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Sofa5.'}
        image={SOFA5_PAGE_IMAGES.b2b}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {current && (
            <Sofa5Panel title={current.title}>
              <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>{current.desc}</Typography>
              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa5FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa5FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa5FieldSx} />
                  <Button size="large" variant="contained" sx={sofa5ButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa5Panel>
          )}

          <Stack>
            <Sofa5SectionTitle>Chương trình hợp tác</Sofa5SectionTitle>
            <Sofa5LinkGrid
              cols={4}
              items={SOFA5_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa5/b2b/${s.slug}` : '/sofa5/b2b' }))}
            />
          </Stack>
        </Stack>
      </Sofa5Section>
    </>
  );
}
