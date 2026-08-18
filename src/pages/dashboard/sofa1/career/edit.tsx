import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Careers } from 'src/_mock/_sofa1';

import { Sofa1CareerEditView } from 'src/sections/sofa1-admin/career/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa tin tuyển dụng | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentCareer = _sofa1Careers.find((career) => career.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CareerEditView career={currentCareer} />
    </>
  );
}
