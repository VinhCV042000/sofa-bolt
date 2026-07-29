import { Helmet } from 'react-helmet-async';

import { Sofa8View } from 'src/sections/sofa8/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA BREEZE — Sofa coastal Mediterranean | Linen, bouclé, tone biển',
  description:
    'SOFA BREEZE — Sofa phong cách coastal Mediterranean. Linen thoáng, bouclé êm, tone biển dịu. 37+ mẫu, giao 48h, bảo hành 7 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa8View />
    </>
  );
}
