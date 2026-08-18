import type { ISofa1Category } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CategoryNewEditForm } from '../sofa1-category-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  category?: ISofa1Category;
};

export function Sofa1CategoryEditView({ category }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa danh mục"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Danh mục', href: paths.dashboard.sofa1.category.root },
          { name: category?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CategoryNewEditForm currentCategory={category} />
    </DashboardContent>
  );
}
