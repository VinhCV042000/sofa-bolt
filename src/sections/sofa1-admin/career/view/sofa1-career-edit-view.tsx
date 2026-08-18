import type { ISofa1Career } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1CareerNewEditForm } from '../sofa1-career-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  career?: ISofa1Career;
};

export function Sofa1CareerEditView({ career }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa tin tuyển dụng"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Tuyển dụng', href: paths.dashboard.sofa1.career.root },
          { name: career?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1CareerNewEditForm currentCareer={career} />
    </DashboardContent>
  );
}
