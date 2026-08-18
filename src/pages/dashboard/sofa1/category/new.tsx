import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1CategoryCreateView } from 'src/sections/sofa1-admin/category/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Thêm danh mục | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CategoryCreateView />
    </>
  );
}
