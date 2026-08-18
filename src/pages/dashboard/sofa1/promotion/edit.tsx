import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Promotions } from 'src/_mock/_sofa1';

import { Sofa1PromotionEditView } from 'src/sections/sofa1-admin/promotion/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa khuyến mãi | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentPromotion = _sofa1Promotions.find((promotion) => promotion.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1PromotionEditView promotion={currentPromotion} />
    </>
  );
}
