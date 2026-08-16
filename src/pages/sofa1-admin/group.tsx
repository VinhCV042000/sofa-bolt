import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import { useParams } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { Sofa1AdminLayout, Sofa1AdminHeading } from 'src/sections/sofa1-admin/sofa1-admin-layout';
import { findSofa1AdminGroup } from 'src/sections/sofa1-admin/sofa1-admin-config';

// ----------------------------------------------------------------------

export default function Page() {
  const { group: groupSlug } = useParams();

  const group = findSofa1AdminGroup(groupSlug);

  if (!group) {
    return <Navigate to="/sofa1/admin" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${group.name} | Quản trị Sofa1`}</title>
      </Helmet>

      <Sofa1AdminLayout>
        <Sofa1AdminHeading
          title={group.name}
          description={group.desc}
          breadcrumb={[{ name: 'Quản trị' }, { name: group.name }]}
        />

        <Box
          sx={{
            gap: 2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          }}
        >
          {group.sections.map((section) => (
            <Card key={section.slug}>
              <CardActionArea
                component={RouterLink}
                href={`/sofa1/admin/${group.slug}/${section.slug}`}
                sx={{ p: 2.5, height: 1 }}
              >
                <Stack spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Iconify icon={group.icon} width={20} sx={{ color: 'primary.main' }} />
                    <Typography variant="subtitle1">{section.name}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {section.desc}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                    {section.kpis.slice(0, 2).map((kpi) => (
                      <Box key={kpi.label}>
                        <Typography variant="h6">{kpi.value}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                          {kpi.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Sofa1AdminLayout>
    </>
  );
}
