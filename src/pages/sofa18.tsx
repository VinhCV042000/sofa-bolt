import { Helmet } from 'react-helmet-async';

import { Sofa18View } from 'src/sections/sofa18/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Muji-An — Japanese Wabi-Sabi Sofas, Organic Linen, Hinoki Cedar',
  description:
    'Muji-An: Japanese wabi-sabi sofas since 1972. Undyed hand-woven organic linen, hand-planed hinoki cedar frames, low-platform meditative silhouettes. Bespoke commissions, kintsugi lifetime mending, white-glove delivery worldwide.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa18View />
    </>
  );
}
