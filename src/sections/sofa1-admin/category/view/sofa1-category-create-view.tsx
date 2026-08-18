import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CategoryNewEditForm } from '../sofa1-category-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1CategoryCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm danh mục mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Danh mục', href: paths.dashboard.sofa1.category.root },
          { name: 'Danh mục mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CategoryNewEditForm />
    </DashboardContent>
  );
}
