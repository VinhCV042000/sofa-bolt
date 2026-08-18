import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1CollectionCreateView } from 'src/sections/sofa1-admin/collection/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Thêm bộ sưu tập | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CollectionCreateView />
    </>
  );
}
