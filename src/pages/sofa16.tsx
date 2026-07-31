import { Helmet } from 'react-helmet-async';

import { Sofa16View } from 'src/sections/sofa16/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Casa Sorrento — Mediterranean Riviera Sofas, Hand-Woven Linen, Olive Wood',
  description:
    'Casa Sorrento: Mediterranean riviera sofas since 1962. Sun-dried Italian linen, hand-woven rattan, reclaimed olive wood frames. Coastal comfort, bespoke commissions, white-glove delivery worldwide.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa16View />
    </>
  );
}
