import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import {
  Sofa1AdminKpis,
  Sofa1AdminTable,
  Sofa1AdminLayout,
  Sofa1AdminHeading,
} from 'src/sections/sofa1-admin/sofa1-admin-layout';
import { SOFA1_ADMIN_GROUPS } from 'src/sections/sofa1-admin/sofa1-admin-config';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Quản trị Sofa1 | Tổng quan</title>
      </Helmet>

      <Sofa1AdminLayout>
        <Sofa1AdminHeading
          title="Tổng quan hệ thống"
          description="Theo dõi nhanh tình hình kinh doanh, nội dung và vận hành của Sofa1."
          action="Tạo nhanh"
        />

        <Sofa1AdminKpis
          items={[
            { label: 'Doanh thu tháng', value: '6,4 tỷ', note: '+18,2% so với tháng trước' },
            { label: 'Đơn hàng', value: '412', note: '28 đơn chờ xử lý' },
            { label: 'Khách hàng', value: '4.286', note: '184 khách VIP' },
            { label: 'Tỷ lệ chuyển đổi', value: '2,9%', note: 'Bỏ giỏ hàng 64,2%' },
          ]}
        />

        <Box
          sx={{
            mb: 3,
            gap: 2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          }}
        >
          {SOFA1_ADMIN_GROUPS.map((group) => (
            <Card key={group.slug}>
              <CardActionArea component={RouterLink} href={`/sofa1/admin/${group.slug}`} sx={{ p: 2.5 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Iconify icon={group.icon} width={32} sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle1">{group.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                      {group.desc}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', mt: 1, display: 'block' }}>
                      {group.sections.length} mục quản trị
                    </Typography>
                  </Box>
                </Stack>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Đơn hàng gần đây
        </Typography>
        <Sofa1AdminTable
          columns={SOFA1_ADMIN_GROUPS[3].sections[0].columns}
          rows={SOFA1_ADMIN_GROUPS[3].sections[0].rows}
        />
      </Sofa1AdminLayout>
    </>
  );
}
