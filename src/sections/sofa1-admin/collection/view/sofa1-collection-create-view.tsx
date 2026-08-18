import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CollectionNewEditForm } from '../sofa1-collection-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1CollectionCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm bộ sưu tập mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Bộ sưu tập', href: paths.dashboard.sofa1.collection.root },
          { name: 'Bộ sưu tập mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CollectionNewEditForm />
    </DashboardContent>
  );
}
