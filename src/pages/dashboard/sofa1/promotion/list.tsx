import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1PromotionListView } from 'src/sections/sofa1-admin/promotion/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Khuyến mãi | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1PromotionListView />
    </>
  );
}
