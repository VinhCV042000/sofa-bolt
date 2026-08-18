import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1OrderListView } from 'src/sections/sofa1-admin/order/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Đơn hàng | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1OrderListView />
    </>
  );
}
