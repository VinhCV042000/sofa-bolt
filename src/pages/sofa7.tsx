import { Helmet } from 'react-helmet-async';

import { Sofa7View } from 'src/sections/sofa7/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA LOFT — Sofa industrial cho urban living | Da thật, thép đen, velvet neon',
  description:
    'SOFA LOFT — Sofa phong cách industrial loft. Da thật, khung thép đen, velvet neon 40+ màu. 42+ mẫu, giao 24h, bảo hành 10 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa7View />
    </>
  );
}
