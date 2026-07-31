import { Helmet } from 'react-helmet-async';

import { Sofa13View } from 'src/sections/sofa13/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA NOIR — Art Deco sofas in noir lacquer & 23-karat gold leaf',
  description:
    'SOFA NOIR: Art Deco jazz-age sofas hand-finished in noir lacquer, gold leaf trim and emerald velvet. Free swatch box, 5-day shipping, 14-year warranty.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa13View />
    </>
  );
}
