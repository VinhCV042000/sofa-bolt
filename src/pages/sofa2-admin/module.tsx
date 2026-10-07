import { useParams } from 'react-router-dom';

import { Sofa2AdminCmsView, Sofa2AdminModuleView } from 'src/sections/sofa2-admin/view';

// ----------------------------------------------------------------------

export default function Page() {
  const { group } = useParams();
  return group === 'cms' ? <Sofa2AdminCmsView /> : <Sofa2AdminModuleView />;
}
