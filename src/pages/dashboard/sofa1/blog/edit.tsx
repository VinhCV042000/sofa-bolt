import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1BlogPosts } from 'src/_mock/_sofa1';

import { Sofa1BlogPostEditView } from 'src/sections/sofa1-admin/blog/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa bài viết | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentPost = _sofa1BlogPosts.find((post) => post.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1BlogPostEditView post={currentPost} />
    </>
  );
}
