import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Categories } from 'src/_mock/_sofa1';

import { Sofa1CategoryEditView } from 'src/sections/sofa1-admin/category/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa danh mục | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentCategory = _sofa1Categories.find((category) => category.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CategoryEditView category={currentCategory} />
    </>
  );
}
