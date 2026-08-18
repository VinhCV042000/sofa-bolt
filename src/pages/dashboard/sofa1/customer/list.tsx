import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1CustomerListView } from 'src/sections/sofa1-admin/customer/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Khách hàng | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CustomerListView />
    </>
  );
}
