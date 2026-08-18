import type { ISofa1BlogPost } from 'src/types/sofa1';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Sofa1BlogPostNewEditForm } from '../sofa1-blog-post-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  post?: ISofa1BlogPost;
};

export function Sofa1BlogPostEditView({ post }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Sửa bài viết"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Sofa1', href: paths.dashboard.sofa1.root },
          { name: 'Bài viết', href: paths.dashboard.sofa1.blog.root },
          { name: post?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Sofa1BlogPostNewEditForm currentPost={post} />
    </DashboardContent>
  );
}
