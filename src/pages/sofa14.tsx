import { Helmet } from 'react-helmet-async';

import { Sofa14View } from 'src/sections/sofa14/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Sofa Bloom — Pastel Pop Sofas, Squishy Claymorphism Comfort',
  description:
    'Sofa Bloom: candy-colored, claymorphism-inspired sofas with squishy cloud-soft cushions. Pick your color, feel the bounce, and shop cheerful pastel comfort today.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa14View />
    </>
  );
}
