import { useParams } from 'react-router-dom';

import { getSofa2CmsSchema } from 'src/sections/sofa2-admin/sofa2-cms';
import { findSofa2AdminModule } from 'src/sections/sofa2-admin/sofa2-admin-data';
import { getSofa2CatalogSchema } from 'src/sections/sofa2-admin/sofa2-catalog';
import { Sofa2AdminCmsView } from 'src/sections/sofa2-admin/view/sofa2-admin-cms-view';
import { Sofa2AdminModuleView } from 'src/sections/sofa2-admin/view';

// ----------------------------------------------------------------------

export default function Page() {
  const { group, module } = useParams();
  const found = findSofa2AdminModule(group, module);

  if (found && module) {
    const schema =
      (found.group.slug === 'cms' && getSofa2CmsSchema(found.module.slug)) ||
      (found.group.slug === 'catalog' && getSofa2CatalogSchema(found.module.slug)) ||
      undefined;
    if (schema) {
      return (
        <Sofa2AdminCmsView
          key={`${found.group.slug}/${found.module.slug}`}
          group={found.group}
          module={found.module}
          schema={schema}
        />
      );
    }
  }

  return <Sofa2AdminModuleView />;
}
