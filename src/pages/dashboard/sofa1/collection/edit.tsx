import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Collections } from 'src/_mock/_sofa1';

import { Sofa1CollectionEditView } from 'src/sections/sofa1-admin/collection/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa bộ sưu tập | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentCollection = _sofa1Collections.find((collection) => collection.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1CollectionEditView collection={currentCollection} />
    </>
  );
}
