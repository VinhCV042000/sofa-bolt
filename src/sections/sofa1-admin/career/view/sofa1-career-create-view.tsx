import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CareerNewEditForm } from '../sofa1-career-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1CareerCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm tin tuyển dụng mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Tuyển dụng', href: paths.dashboard.sofa1.career.root },
          { name: 'Tin mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CareerNewEditForm />
    </DashboardContent>
  );
}
