import { Helmet } from 'react-helmet-async';

import { Sofa20View } from 'src/sections/sofa20/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Ironworks & Co — Industrial Steampunk Sofas, Hand-Welded Steel, Full-Grain Leather',
  description:
    'Ironworks & Co: industrial steampunk forged sofas since 1898. Hand-welded steel frames, copper-riveted seams, full-grain vegetable-tanned leather, Edison-bulb warmth. Manchester foundry craftsmanship, bespoke commissions, lifetime reupholstering, worldwide white-glove delivery.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa20View />
    </>
  );
}
