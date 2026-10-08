import { useParams } from 'react-router-dom';

import { getSofa2CmsSchema } from 'src/sections/sofa2-admin/sofa2-cms';
import { findSofa2AdminModule } from 'src/sections/sofa2-admin/sofa2-admin-data';
import { getSofa2CatalogSchema } from 'src/sections/sofa2-admin/sofa2-catalog';
import { getSofa2OrderSchema } from 'src/sections/sofa2-admin/sofa2-orders';
import { getSofa2B2bSchema } from 'src/sections/sofa2-admin/sofa2-b2b';
import { getSofa2CrmSchema } from 'src/sections/sofa2-admin/sofa2-crm';
import { getSofa2AnalyticsSchema } from 'src/sections/sofa2-admin/sofa2-analytics';
import { getSofa2SeoSchema } from 'src/sections/sofa2-admin/sofa2-seo';
import { Sofa2AdminCmsView } from 'src/sections/sofa2-admin/view/sofa2-admin-cms-view';
import { Sofa2AdminAnalyticsView } from 'src/sections/sofa2-admin/view/sofa2-admin-analytics-view';
import { Sofa2AdminSeoView } from 'src/sections/sofa2-admin/view/sofa2-admin-seo-view';
import { Sofa2AdminModuleView } from 'src/sections/sofa2-admin/view';

// ----------------------------------------------------------------------

export default function Page() {
  const { group, module } = useParams();
  const found = findSofa2AdminModule(group, module);

  if (found && module) {
    const schema =
      (found.group.slug === 'cms' && getSofa2CmsSchema(found.module.slug)) ||
      (found.group.slug === 'catalog' && getSofa2CatalogSchema(found.module.slug)) ||
      (found.group.slug === 'orders' && getSofa2OrderSchema(found.module.slug)) ||
      (found.group.slug === 'b2b' && getSofa2B2bSchema(found.module.slug)) ||
      (found.group.slug === 'crm' && getSofa2CrmSchema(found.module.slug)) ||
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

    const analyticsSchema =
      found.group.slug === 'analytics' ? getSofa2AnalyticsSchema(found.module.slug) : undefined;
    if (analyticsSchema) {
      return (
        <Sofa2AdminAnalyticsView
          key={`${found.group.slug}/${found.module.slug}`}
          group={found.group}
          module={found.module}
          schema={analyticsSchema}
        />
      );
    }

    const seoSchema =
      found.group.slug === 'seo' ? getSofa2SeoSchema(found.module.slug) : undefined;
    if (seoSchema) {
      return (
        <Sofa2AdminSeoView
          key={`${found.group.slug}/${found.module.slug}`}
          group={found.group}
          module={found.module}
          schema={seoSchema}
        />
      );
    }
  }

  return <Sofa2AdminModuleView />;
}
