import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1ProductCreateView } from 'src/sections/sofa1-admin/product/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Thêm sản phẩm | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProductCreateView />
    </>
  );
}
