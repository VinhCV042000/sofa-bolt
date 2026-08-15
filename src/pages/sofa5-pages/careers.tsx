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

import { SOFA5_COLORS } from 'src/sections/sofa5/sofa5-data';
import { Sofa5Section, Sofa5PageHero } from 'src/sections/sofa5-pages/sofa5-page-hero';
import { SOFA5_PAGE_IMAGES, SOFA5_PAGE_CAREERS } from 'src/sections/sofa5-pages/sofa5-pages-data';
import { Sofa5Panel, sofa5FieldSx, sofa5ButtonSx, Sofa5SectionTitle } from 'src/sections/sofa5-pages/sofa5-shop-ui';

export default function Page() {
  const { id } = useParams();
  const job = SOFA5_PAGE_CAREERS.find((j) => j.id === id);

  return (
    <>
      <Helmet><title>{`${job?.title ?? 'Tuyển dụng'} — Sofa5`}</title></Helmet>

      <Sofa5PageHero
        overline="TUYỂN DỤNG"
        title={job ? <span>{job.title.toUpperCase()}</span> : <>GIA NHẬP <span>SOFA5</span></>}
        subtitle={job?.description ?? 'Cùng xây dựng thương hiệu sofa Mediterranean hàng đầu Việt Nam.'}
        image={SOFA5_PAGE_IMAGES.careers}
      />

      <Sofa5Section bg="cream">
        <Stack spacing={5}>
          {job ? (
            <Grid container spacing={4}>
              <Grid xs={12} md={7}>
                <Sofa5Panel title="Mô tả công việc">
                  <Stack direction="row" spacing={1}>
                    <Chip label={job.location} size="small" sx={{ bgcolor: varAlpha(SOFA5_COLORS.clay, 0.15), color: SOFA5_COLORS.clayDeep }} />
                    <Chip label={job.type} size="small" sx={{ bgcolor: varAlpha(SOFA5_COLORS.sage, 0.15), color: SOFA5_COLORS.sageDeep }} />
                    <Chip label={job.salary} size="small" sx={{ bgcolor: varAlpha(SOFA5_COLORS.rust, 0.15), color: SOFA5_COLORS.ruby }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft, lineHeight: 2 }}>{job.description}</Typography>
                  <Stack spacing={1.5}>
                    {job.requirements.map((r) => (
                      <Stack key={r} direction="row" spacing={1.5} alignItems="center">
                        <Iconify icon="solar:check-circle-bold" width={20} sx={{ color: SOFA5_COLORS.clay }} />
                        <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{r}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Sofa5Panel>
              </Grid>
              <Grid xs={12} md={5}>
                <Sofa5Panel title="Nộp CV">
                  <Stack spacing={2.5}>
                    <TextField fullWidth label="Họ và tên" sx={sofa5FieldSx} />
                    <TextField fullWidth label="Email" type="email" sx={sofa5FieldSx} />
                    <TextField fullWidth label="Số điện thoại" sx={sofa5FieldSx} />
                    <TextField fullWidth multiline rows={3} label="Giới thiệu bản thân" sx={sofa5FieldSx} />
                    <Button size="large" variant="contained" sx={sofa5ButtonSx}>Gửi hồ sơ ứng tuyển</Button>
                  </Stack>
                </Sofa5Panel>
              </Grid>
            </Grid>
          ) : (
            <Stack>
              <Sofa5SectionTitle>Vị trí đang tuyển</Sofa5SectionTitle>
              <Grid container spacing={3}>
                {SOFA5_PAGE_CAREERS.map((j) => (
                  <Grid key={j.id} xs={12} md={6}>
                    <Stack
                      component={RouterLink}
                      href={`/sofa5/careers/${j.id}`}
                      spacing={1.5}
                      sx={{ p: 3.5, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: SOFA5_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA5_COLORS.clay, 0.2)}`, transition: 'all .25s', '&:hover': { transform: 'translateY(-4px)', borderColor: SOFA5_COLORS.clay } }}
                    >
                      <Typography variant="h6" sx={{ color: SOFA5_COLORS.ink, fontWeight: 'fontWeightLight' }}>{j.title}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA5_COLORS.inkSoft }}>{j.description}</Typography>
                      <Box>
                        <Chip label={`${j.location} · ${j.type} · ${j.salary}`} size="small" sx={{ bgcolor: varAlpha(SOFA5_COLORS.clay, 0.15), color: SOFA5_COLORS.clayDeep }} />
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}
        </Stack>
      </Sofa5Section>
    </>
  );
}
