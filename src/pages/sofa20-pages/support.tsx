import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA20_PAGE_IMAGES } from 'src/sections/sofa20-pages/sofa20-pages-data';
import { SOFA20_SUPPORT_TOPICS } from 'src/sections/sofa20-pages/sofa20-shop-data';
import { Sofa20Section, Sofa20PageHero } from 'src/sections/sofa20-pages/sofa20-page-hero';
import {
  Sofa20Panel,
  sofa20FieldSx,
  Sofa20LinkGrid,
  Sofa20SectionTitle,
  sofa20GoldButtonSx,
} from 'src/sections/sofa20-pages/sofa20-shop-ui';

export default function Page() {
  const { topic } = useParams();
  const current = SOFA20_SUPPORT_TOPICS.find((t) => t.slug === topic);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Trung tâm trợ giúp'} — Sofa20`}</title>
      </Helmet>

      <Sofa20PageHero
        overline="HỖ TRỢ"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TRUNG TÂM <span>TRỢ GIÚP</span></>}
        subtitle={current?.desc ?? 'FAQ, chat trực tuyến, ticket hỗ trợ và các chính sách.'}
        image={SOFA20_PAGE_IMAGES.team}
      />

      <Sofa20Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa20Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {(topic === 'ticket' || topic === 'chat') && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Họ và tên" sx={sofa20FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa20FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa20FieldSx} />
                  <Button size="large" variant="contained" sx={sofa20GoldButtonSx}>{topic === 'chat' ? 'Bắt đầu chat' : 'Gửi ticket'}</Button>
                </Stack>
              )}
            </Sofa20Panel>
          )}

          <Stack>
            <Sofa20SectionTitle>Chủ đề hỗ trợ</Sofa20SectionTitle>
            <Sofa20LinkGrid items={SOFA20_SUPPORT_TOPICS.map((t) => ({ title: t.title, desc: t.desc, icon: t.icon, path: t.path }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa20Section>
    </>
  );
}
