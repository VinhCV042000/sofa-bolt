import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import { useParams } from 'src/routes/hooks';

import {
  Sofa1AdminKpis,
  Sofa1AdminTable,
  Sofa1AdminLayout,
  Sofa1AdminHeading,
} from 'src/sections/sofa1-admin/sofa1-admin-layout';
import {
  findSofa1AdminGroup,
  findSofa1AdminSection,
} from 'src/sections/sofa1-admin/sofa1-admin-config';

// ----------------------------------------------------------------------

export default function Page() {
  const { group: groupSlug, section: sectionSlug } = useParams();

  const group = findSofa1AdminGroup(groupSlug);
  const section = findSofa1AdminSection(groupSlug, sectionSlug);

  if (!group || !section) {
    return <Navigate to="/sofa1/admin" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${section.name} | ${group.name} | Quản trị Sofa1`}</title>
      </Helmet>

      <Sofa1AdminLayout>
        <Sofa1AdminHeading
          title={section.name}
          description={section.desc}
          breadcrumb={[{ name: 'Quản trị' }, { name: group.name }, { name: section.name }]}
        />

        <Sofa1AdminKpis items={section.kpis} />

        <Sofa1AdminTable columns={section.columns} rows={section.rows} />
      </Sofa1AdminLayout>
    </>
  );
}
