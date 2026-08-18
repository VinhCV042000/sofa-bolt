import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1CareerListView } from 'src/sections/sofa1-admin/career/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Tuyển dụng | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CareerListView />
    </>
  );
}
