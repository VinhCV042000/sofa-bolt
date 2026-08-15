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

import { SOFA18_COLORS } from 'src/sections/sofa18/sofa18-data';
import { Sofa18Section, Sofa18PageHero } from 'src/sections/sofa18-pages/sofa18-page-hero';
import { SOFA18_PAGE_IMAGES, SOFA18_PAGE_CAREERS } from 'src/sections/sofa18-pages/sofa18-pages-data';
import { Sofa18Panel, sofa18FieldSx, sofa18ButtonSx, Sofa18SectionTitle } from 'src/sections/sofa18-pages/sofa18-shop-ui';

export default function Page() {
  const { id } = useParams();
  const job = SOFA18_PAGE_CAREERS.find((j) => j.id === id);

  return (
    <>
      <Helmet><title>{`${job?.title ?? 'Tuyển dụng'} — Sofa18`}</title></Helmet>

      <Sofa18PageHero
        overline="TUYỂN DỤNG"
        title={job ? <span>{job.title.toUpperCase()}</span> : <>GIA NHẬP <span>SOFA18</span></>}
        subtitle={job?.description ?? 'Cùng xây dựng thương hiệu sofa Mediterranean hàng đầu Việt Nam.'}
        image={SOFA18_PAGE_IMAGES.careers}
      />

      <Sofa18Section bg="cream">
        <Stack spacing={5}>
          {job ? (
            <Grid container spacing={4}>
              <Grid xs={12} md={7}>
                <Sofa18Panel title="Mô tả công việc">
                  <Stack direction="row" spacing={1}>
                    <Chip label={job.location} size="small" sx={{ bgcolor: varAlpha(SOFA18_COLORS.clay, 0.15), color: SOFA18_COLORS.clayDeep }} />
                    <Chip label={job.type} size="small" sx={{ bgcolor: varAlpha(SOFA18_COLORS.sage, 0.15), color: SOFA18_COLORS.sageDeep }} />
                    <Chip label={job.salary} size="small" sx={{ bgcolor: varAlpha(SOFA18_COLORS.rust, 0.15), color: SOFA18_COLORS.ruby }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft, lineHeight: 2 }}>{job.description}</Typography>
                  <Stack spacing={1.5}>
                    {job.requirements.map((r) => (
                      <Stack key={r} direction="row" spacing={1.5} alignItems="center">
                        <Iconify icon="solar:check-circle-bold" width={20} sx={{ color: SOFA18_COLORS.clay }} />
                        <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{r}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Sofa18Panel>
              </Grid>
              <Grid xs={12} md={5}>
                <Sofa18Panel title="Nộp CV">
                  <Stack spacing={2.5}>
                    <TextField fullWidth label="Họ và tên" sx={sofa18FieldSx} />
                    <TextField fullWidth label="Email" type="email" sx={sofa18FieldSx} />
                    <TextField fullWidth label="Số điện thoại" sx={sofa18FieldSx} />
                    <TextField fullWidth multiline rows={3} label="Giới thiệu bản thân" sx={sofa18FieldSx} />
                    <Button size="large" variant="contained" sx={sofa18ButtonSx}>Gửi hồ sơ ứng tuyển</Button>
                  </Stack>
                </Sofa18Panel>
              </Grid>
            </Grid>
          ) : (
            <Stack>
              <Sofa18SectionTitle>Vị trí đang tuyển</Sofa18SectionTitle>
              <Grid container spacing={3}>
                {SOFA18_PAGE_CAREERS.map((j) => (
                  <Grid key={j.id} xs={12} md={6}>
                    <Stack
                      component={RouterLink}
                      href={`/sofa18/careers/${j.id}`}
                      spacing={1.5}
                      sx={{ p: 3.5, height: 1, borderRadius: 3, textDecoration: 'none', bgcolor: SOFA18_COLORS.creamLight, border: `1px solid ${varAlpha(SOFA18_COLORS.clay, 0.2)}`, transition: 'all .25s', '&:hover': { transform: 'translateY(-4px)', borderColor: SOFA18_COLORS.clay } }}
                    >
                      <Typography variant="h6" sx={{ color: SOFA18_COLORS.ink, fontWeight: 'fontWeightLight' }}>{j.title}</Typography>
                      <Typography variant="body2" sx={{ color: SOFA18_COLORS.inkSoft }}>{j.description}</Typography>
                      <Box>
                        <Chip label={`${j.location} · ${j.type} · ${j.salary}`} size="small" sx={{ bgcolor: varAlpha(SOFA18_COLORS.clay, 0.15), color: SOFA18_COLORS.clayDeep }} />
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}
        </Stack>
      </Sofa18Section>
    </>
  );
}
