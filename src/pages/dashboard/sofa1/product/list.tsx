import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1ProductListView } from 'src/sections/sofa1-admin/product/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sản phẩm | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProductListView />
    </>
  );
}
