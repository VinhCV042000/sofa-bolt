import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { SOFA17_PAGE_IMAGES } from 'src/sections/sofa17-pages/sofa17-pages-data';
import { SOFA17_SUPPORT_TOPICS } from 'src/sections/sofa17-pages/sofa17-shop-data';
import { Sofa17Section, Sofa17PageHero } from 'src/sections/sofa17-pages/sofa17-page-hero';
import {
  Sofa17Panel,
  sofa17FieldSx,
  Sofa17LinkGrid,
  Sofa17SectionTitle,
  sofa17GoldButtonSx,
} from 'src/sections/sofa17-pages/sofa17-shop-ui';

export default function Page() {
  const { topic } = useParams();
  const current = SOFA17_SUPPORT_TOPICS.find((t) => t.slug === topic);

  return (
    <>
      <Helmet>
        <title>{`${current?.title ?? 'Trung tâm trợ giúp'} — Sofa17`}</title>
      </Helmet>

      <Sofa17PageHero
        overline="HỖ TRỢ"
        title={current ? <>{current.title.split(' ')[0]} <span>{current.title.split(' ').slice(1).join(' ')}</span></> : <>TRUNG TÂM <span>TRỢ GIÚP</span></>}
        subtitle={current?.desc ?? 'FAQ, chat trực tuyến, ticket hỗ trợ và các chính sách.'}
        image={SOFA17_PAGE_IMAGES.team}
      />

      <Sofa17Section bg="black">
        <Stack spacing={5}>
          {current && (
            <Sofa17Panel title={current.title}>
              <Typography variant="body2" sx={{ color: varAlpha('#FFFFFF', 0.5), lineHeight: 2 }}>{current.desc}</Typography>

              {(topic === 'ticket' || topic === 'chat') && (
                <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
                  <TextField fullWidth label="Họ và tên" sx={sofa17FieldSx} />
                  <TextField fullWidth label="Email" type="email" sx={sofa17FieldSx} />
                  <TextField fullWidth multiline rows={4} label="Nội dung" sx={sofa17FieldSx} />
                  <Button size="large" variant="contained" sx={sofa17GoldButtonSx}>{topic === 'chat' ? 'Bắt đầu chat' : 'Gửi ticket'}</Button>
                </Stack>
              )}
            </Sofa17Panel>
          )}

          <Stack>
            <Sofa17SectionTitle>Chủ đề hỗ trợ</Sofa17SectionTitle>
            <Sofa17LinkGrid items={SOFA17_SUPPORT_TOPICS.map((t) => ({ title: t.title, desc: t.desc, icon: t.icon, path: t.path }))} cols={3} />
          </Stack>
        </Stack>
      </Sofa17Section>
    </>
  );
}
