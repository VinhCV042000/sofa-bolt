import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Sofa1BlogPostListView } from 'src/sections/sofa1-admin/blog/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Bài viết | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1BlogPostListView />
    </>
  );
}
