import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ProductNewEditForm } from '../sofa1-product-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1ProductCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm sản phẩm mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Sản phẩm', href: paths.dashboard.sofa1.product.root },
          { name: 'Sản phẩm mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ProductNewEditForm />
    </DashboardContent>
  );
}
