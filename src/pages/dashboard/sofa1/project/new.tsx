import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1ProjectCreateView } from 'src/sections/sofa1-admin/project/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Thêm dự án | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProjectCreateView />
    </>
  );
}
