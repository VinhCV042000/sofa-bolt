import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Projects } from 'src/_mock/_sofa1';

import { Sofa1ProjectEditView } from 'src/sections/sofa1-admin/project/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa dự án | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentProject = _sofa1Projects.find((project) => project.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProjectEditView project={currentProject} />
    </>
  );
}
