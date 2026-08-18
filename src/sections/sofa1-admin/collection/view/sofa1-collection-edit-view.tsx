import type { ISofa1Collection } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CollectionNewEditForm } from '../sofa1-collection-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  collection?: ISofa1Collection;
};

export function Sofa1CollectionEditView({ collection }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa bộ sưu tập"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Bộ sưu tập', href: paths.dashboard.sofa1.collection.root },
          { name: collection?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CollectionNewEditForm currentCollection={collection} />
    </DashboardContent>
  );
}
