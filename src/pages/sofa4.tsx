import { Helmet } from 'react-helmet-async';

import { Sofa4View } from 'src/sections/sofa4/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Sofa Pop — Sofa màu sắc cá tính | Modular, bền vững, 20+ màu',
  description:
    'Sofa Pop — Sofa màu sắc độc quyền, modular linh hoạt, vật liệu bền vững. 20+ bảng màu, giao 48h, bảo hành 7 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa4View />
    </>
  );
}
