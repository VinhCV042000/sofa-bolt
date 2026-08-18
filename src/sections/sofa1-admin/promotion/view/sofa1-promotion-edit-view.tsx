import type { ISofa1Promotion } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1PromotionNewEditForm } from '../sofa1-promotion-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  promotion?: ISofa1Promotion;
};

export function Sofa1PromotionEditView({ promotion }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa khuyến mãi"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Khuyến mãi', href: paths.dashboard.sofa1.promotion.root },
          { name: promotion?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1PromotionNewEditForm currentPromotion={promotion} />
    </DashboardContent>
  );
}
