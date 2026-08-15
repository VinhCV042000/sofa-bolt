import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_B2B_SECTIONS } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import {
  Sofa20Panel,
  sofa20FieldSx,
  Sofa20LinkGrid,
  Sofa20SectionTitle,
  sofa20GoldButtonSx,
} from 'src/sections/sofa20-pages/sofa20-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA20_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Đại lý B2B'} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero
        overline="ĐẠI LÝ B2B"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>ĐẠI LÝ <span>B2B</span></>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Ironworks & Co.'}
        image={SOFA20_PAGE_IMAGES.factory}
      />

      <Sofa20Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa20Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa20FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa20FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa20FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa20FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa20FieldSx} />
                  <Button size="large" variant="contained" sx={sofa20GoldButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa20Panel>
          )}

          <Stack>
            <Sofa20SectionTitle>Chương trình hợp tác</Sofa20SectionTitle>
            <Sofa20LinkGrid
              items={SOFA20_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa20/b2b/${s.slug}` : '/sofa20/b2b' }))}
              cols={4}
            />
          </Stack>
        </Stack>
      </Sofa20Section>
    </>
  );
}
