import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Showrooms } from 'src/_mock/_sofa1';

import { Sofa1ShowroomEditView } from 'src/sections/sofa1-admin/showroom/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa showroom | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentShowroom = _sofa1Showrooms.find((showroom) => showroom.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ShowroomEditView showroom={currentShowroom} />
    </>
  );
}
