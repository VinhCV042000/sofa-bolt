import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_B2B_SECTIONS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import {
  Sofa15Panel,
  sofa15FieldSx,
  Sofa15LinkGrid,
  Sofa15SectionTitle,
  sofa15GoldButtonSx,
} from 'src/sections/sofa15-pages/sofa15-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA15_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Đại lý B2B'} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero
        overline="ĐẠI LÝ B2B"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>ĐẠI LÝ <span>B2B</span></>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Maison Gatsby.'}
        image={SOFA15_PAGE_IMAGES.factory}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa15Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa15FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa15FieldSx} />
                  <Button size="large" variant="contained" sx={sofa15GoldButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa15Panel>
          )}

          <Stack>
            <Sofa15SectionTitle>Chương trình hợp tác</Sofa15SectionTitle>
            <Sofa15LinkGrid
              items={SOFA15_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa15/b2b/${s.slug}` : '/sofa15/b2b' }))}
              cols={4}
            />
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}
