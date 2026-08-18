import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1B2BLeadListView } from 'src/sections/sofa1-admin/b2b-lead/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Khách hàng doanh nghiệp | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1B2BLeadListView />
    </>
  );
}
