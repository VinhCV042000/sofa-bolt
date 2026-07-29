import { Helmet } from 'react-helmet-async';

import { Sofa9View } from 'src/sections/sofa9/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA RETRO — Sofa phong cách Memphis 80s | Velvet neon, họa tiết hình học',
  description:
    'SOFA RETRO — Sofa phong cách Memphis 80s. Velvet neon 40+ màu, họa tiết hình học, cảm giác retro. 36+ mẫu, giao 24h, bảo hành 10 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa9View />
    </>
  );
}
