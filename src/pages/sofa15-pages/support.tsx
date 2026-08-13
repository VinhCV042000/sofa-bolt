import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA15_SUPPORT_TOPICS } from 'src/sections/sofa15-pages/sofa15-shop-data';
import { Sofa15Section, Sofa15PageHero } from 'src/sections/sofa15-pages/sofa15-page-hero';
import { SOFA15_PAGE_IMAGES } from 'src/sections/sofa15-pages/sofa15-pages-data';
import {
  Sofa15Panel,
  Sofa15LinkGrid,
  sofa15FieldSx,
  Sofa15SectionTitle,
  sofa15GoldButtonSx,
} from 'src/sections/sofa15-pages/sofa15-shop-ui';

export default function Page() {
  const { topic } = useParams();
  const current = SOFA15_SUPPORT_TOPICS.find((t) => t.slug === topic);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Trung tâm trợ giúp'} — Sofa15`}</title>
      </Helmet>

      <Sofa15PageHero
        overline="HỖ TRỢ"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TRUNG TÂM <span>TRỢ GIÚP</span></>}
        subtitle={current?.desc ?? 'FAQ, chat trực tuyến, ticket hỗ trợ và các chính sách.'}
        image={SOFA15_PAGE_IMAGES.team}
      />

      <Sofa15Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa15Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {(topic === 'ticket' || topic === 'chat') && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Họ và tên" sx={sofa15FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa15FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa15FieldSx} />
                  <Button size="large" variant="contained" sx={sofa15GoldButtonSx}>{topic === 'chat' ? 'Bắt đầu chat' : 'Gửi ticket'}</Button>
                </Stack>
              )}
            </Sofa15Panel>
          )}

          <Stack>
            <Sofa15SectionTitle>Chủ đề hỗ trợ</Sofa15SectionTitle>
            <Sofa15LinkGrid items={SOFA15_SUPPORT_TOPICS.map((t) => ({ title: t.title, desc: t.desc, icon: t.icon, path: t.path }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa15Section>
    </>
  );
}
