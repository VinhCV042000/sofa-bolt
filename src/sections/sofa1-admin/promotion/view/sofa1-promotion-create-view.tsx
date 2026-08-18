import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1PromotionNewEditForm } from '../sofa1-promotion-new-edit-form';

// ----------------------------------------------------------------------

export function Sofa1PromotionCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm khuyến mãi mới"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Khuyến mãi', href: paths.dashboard.sofa1.promotion.root },
          { name: 'Khuyến mãi mới' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1PromotionNewEditForm />
    </DashboardContent>
  );
}
