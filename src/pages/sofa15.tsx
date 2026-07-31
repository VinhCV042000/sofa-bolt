import { Helmet } from 'react-helmet-async';

import { Sofa15View } from 'src/sections/sofa15/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Maison Gatsby — Art Deco Luxury Sofas, Hand-Tufted Velvet, Gilded Brass',
  description:
    'Maison Gatsby: art deco luxury sofas since 1925. Hand-tufted Italian velvet, 24K gold-leaf brass frames, geometric 1920s glamour. Bespoke commissions, white-glove delivery worldwide.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa15View />
    </>
  );
}
