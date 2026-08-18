import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ShowroomNewEditForm } from '../sofa1-showroom-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1ShowroomCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm showroom mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Showroom', href: paths.dashboard.sofa1.showroom.root },
          { name: 'Showroom mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ShowroomNewEditForm />
    </DashboardContent>
  );
}
