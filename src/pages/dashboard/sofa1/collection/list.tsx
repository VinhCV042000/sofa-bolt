import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1CollectionListView } from 'src/sections/sofa1-admin/collection/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Bộ sưu tập | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CollectionListView />
    </>
  );
}
