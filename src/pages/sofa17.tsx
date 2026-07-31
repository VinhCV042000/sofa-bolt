import { Helmet } from 'react-helmet-async';

import { Sofa17View } from 'src/sections/sofa17/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Dar Zellige — Moroccan Riad Sofas, Hand-Woven Textiles, Atlas Cedar',
  description:
    'Dar Zellige: Moroccan riad sofas since 1958. Hand-woven souk-dyed textiles, carved Atlas cedar frames, zellige-inspired patterns. Marrakech craftsmanship, bespoke commissions, white-glove delivery worldwide.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa17View />
    </>
  );
}
