import { Helmet } from 'react-helmet-async';

import { Sofa19View } from 'src/sections/sofa19/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Casa Tropical — Brazilian Tropical Modern Sofas, Velvet Curves, Reclaimed Wood',
  description:
    'Casa Tropical: Brazilian tropical modern sofas since 1985. Bold Niemeyer-inspired velvet curves, reclaimed jacaranda and peroba wood frames, jungle green and coral palettes. São Paulo craftsmanship, bespoke commissions, white-glove delivery worldwide.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa19View />
    </>
  );
}
