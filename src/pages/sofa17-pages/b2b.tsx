import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_B2B_SECTIONS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import {
  Sofa17Panel,
  sofa17FieldSx,
  Sofa17LinkGrid,
  Sofa17SectionTitle,
  sofa17GoldButtonSx,
} from 'src/sections/sofa17-pages/sofa17-shop-ui';

const FORM_SECTIONS = ['register', 'quote', 'oem'];

export default function Page() {
  const { section } = useParams();
  const current = SOFA17_B2B_SECTIONS.find((s) => s.slug === section);
  const isForm = section ? FORM_SECTIONS.includes(section) : false;

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Đại lý B2B'} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero
        overline="ĐẠI LÝ B2B"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>ĐẠI LÝ <span>B2B</span></>}
        subtitle={current?.desc ?? 'Hợp tác phân phối, dự án và sản xuất OEM cùng Maison Riad.'}
        image={SOFA17_PAGE_IMAGES.factory}
      />

      <Sofa17Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa17Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {isForm && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Tên công ty" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Người liên hệ" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Số điện thoại" sx={sofa17FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung yêu cầu" sx={sofa17FieldSx} />
                  <Button size="large" variant="contained" sx={sofa17GoldButtonSx}>Gửi yêu cầu</Button>
                </Stack>
              )}
            </Sofa17Panel>
          )}

          <Stack>
            <Sofa17SectionTitle>Chương trình hợp tác</Sofa17SectionTitle>
            <Sofa17LinkGrid
              items={SOFA17_B2B_SECTIONS.map((s) => ({ title: s.title, desc: s.desc, icon: s.icon, path: s.slug ? `/sofa17/b2b/${s.slug}` : '/sofa17/b2b' }))}
              cols={4}
            />
          </Stack>
        </Stack>
      </Sofa17Section>
    </>
  );
}
