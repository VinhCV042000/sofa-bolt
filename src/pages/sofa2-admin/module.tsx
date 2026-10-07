import { useParams } from 'react-router-dom';

import { Sofa2AdminCmsView, Sofa2AdminModuleView, Sofa2AdminCatalogView } from 'src/sections/sofa2-admin/view';

// ----------------------------------------------------------------------

export default function Page() {
  const { group } = useParams();
  if (group === 'cms') return <Sofa2AdminCmsView />;
  if (group === 'catalog') return <Sofa2AdminCatalogView />;
  return <Sofa2AdminModuleView />;
}
