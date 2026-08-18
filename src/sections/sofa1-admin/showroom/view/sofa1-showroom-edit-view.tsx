import type { ISofa1Showroom } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ShowroomNewEditForm } from '../sofa1-showroom-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  showroom?: ISofa1Showroom;
};

export function Sofa1ShowroomEditView({ showroom }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa showroom"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Showroom', href: paths.dashboard.sofa1.showroom.root },
          { name: showroom?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ShowroomNewEditForm currentShowroom={showroom} />
    </DashboardContent>
  );
}
