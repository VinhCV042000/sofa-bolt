import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { SOFA16_COLORS } from 'src/sections/sofa16/sofa16-data';
import { Sofa16Section, Sofa16PageHero } from 'src/sections/sofa16-pages/sofa16-page-hero';
import { SOFA16_PAGE_IMAGES, SOFA16_PAGE_CAREERS } from 'src/sections/sofa16-pages/sofa16-pages-data';
import { Sofa16Panel, sofa16FieldSx, sofa16ButtonSx, Sofa16SectionTitle } from 'src/sections/sofa16-pages/sofa16-shop-ui';

export default function Page() {
  const { id } = useParams();
  const job = SOFA16_PAGE_CAREERS.find((j) => j.id === id);

  return (
    <>
      <Helmet><title>{`${job?.title ?? 'Tuyển dụng'} — Sofa16`}</title></Helmet>

      <Sofa16PageHero
        overline="TUYỂN DỤNG"
        title={job ? <span>{job.title.toUpperCase()}</span> : <>GIA NHẬP <span>SOFA16</span></>}
        subtitle={job?.description ?? 'Cùng xây dựng thương hiệu sofa Mediterranean hàng đầu Việt Nam.'}
        image={SOFA16_PAGE_IMAGES.careers}
      />

      <Sofa16Section bg="cream">
        <Stack spacing={5}>
          {job ? (
            <Grid container spacing={4}>
              <Grid xs={12} md={7}>
                <Sofa16Panel title="Mô tả công việc">
                  <Stack direction="row" spacing={1}>
                    <Chip label={job.location} size="small" sx={{ bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.15), color: SOFA16_COLORS.terracottaDeep }} />
                    <Chip label={job.type} size="small" sx={{ bgcolor: varAlpha(SOFA16_COLORS.olive, 0.15), color: SOFA16_COLORS.oliveDeep }} />
                    <Chip label={job.salary} size="small" sx={{ bgcolor: varAlpha(SOFA16_COLORS.azure, 0.15), color: SOFA16_COLORS.azureDeep }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft, lineHeight: 2 }}>{job.description}</Typography>
                  <Stack spacing={1.5}>
                    {job.requirements.map((r) => (
                      <Stack key={r} direction="row" spacing={1.5} alignItems="center">
                        <Iconify icon="solar:check-circle-bold" width={20} sx={{ color: SOFA16_COLORS.terracotta }} />
                        <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{r}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Sofa16Panel>
              </Grid>
              <Grid xs={12} md={5}>
                <Sofa16Panel title="Nộp CV">
                  <Stack spacing={2.5}>
                    <TextField fullWidth label="Họ và tên" sx={sofa16FieldSx} />
                    <TextField fullWidth label="Email" type="email" sx={sofa16FieldSx} />
                    <TextField fullWidth label="Số điện thoại" sx={sofa16FieldSx} />
                    <TextField fullWidth multiline rows={3} label="Giới thiệu bản thân" sx={sofa16FieldSx} />
                    <Button size="large" variant="contained" sx={sofa16ButtonSx}>Gửi hồ sơ ứng tuyển</Button>
                  </Stack>
                </Sofa16Panel>
              </Grid>
            </Grid>
          ) : (
            <Stack>
              <Sofa16SectionTitle>Vị trí đang tuyển</Sofa16SectionTitle>
              <Grid container spacing={3}>
                {SOFA16_PAGE_CAREERS.map((j) => (
                  <Grid key={j.id} xs={12} md={6}>
                    <Stack
                      component={RouterLink}
                      href={`/sofa16/careers/${j.id}`}
                      spacing={1.5}
                      sx={{ p: 3.5, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: SOFA16_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA16_COLORS.terracotta, 0.2)}`, transition: 'all .25s', '&:hover': { transform: 'translateY(-4px)', borderColor: SOFA16_COLORS.terracotta } }}
                    >
                      <Typography variant="h6" sx={{ color: SOFA16_COLORS.ink, fontWeight: 'fontWeightLight' }}>{j.title}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA16_COLORS.inkSoft }}>{j.description}</Typography>
                      <Box>
                        <Chip label={`${j.location} · ${j.type} · ${j.salary}`} size="small" sx={{ bgcolor: varAlpha(SOFA16_COLORS.terracotta, 0.15), color: SOFA16_COLORS.terracottaDeep }} />
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}
        </Stack>
      </Sofa16Section>
    </>
  );
}
