import type { ISofa1Project } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1ProjectNewEditForm } from '../sofa1-project-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  project?: ISofa1Project;
};

export function Sofa1ProjectEditView({ project }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa dự án"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Dự án', href: paths.dashboard.sofa1.project.root },
          { name: project?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1ProjectNewEditForm currentProject={project} />
    </DashboardContent>
  );
}
