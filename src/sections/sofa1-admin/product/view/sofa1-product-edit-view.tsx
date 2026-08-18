import type { ISofa1Product } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ProductNewEditForm } from '../sofa1-product-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  product?: ISofa1Product;
};

export function Sofa1ProductEditView({ product }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa sản phẩm"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Sản phẩm', href: paths.dashboard.sofa1.product.root },
          { name: product?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ProductNewEditForm currentProduct={product} />
    </DashboardContent>
  );
}
