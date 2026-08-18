import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1ProjectListView } from 'src/sections/sofa1-admin/project/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Dự án | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProjectListView />
    </>
  );
}
