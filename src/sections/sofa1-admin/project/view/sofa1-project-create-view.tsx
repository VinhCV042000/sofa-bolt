import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ProjectNewEditForm } from '../sofa1-project-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1ProjectCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm dự án mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Dự án', href: paths.dashboard.sofa1.project.root },
          { name: 'Dự án mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ProjectNewEditForm />
    </DashboardContent>
  );
}
