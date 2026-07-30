import { Helmet } from 'react-helmet-async';

import { Sofa11View } from 'src/sections/sofa11/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA POP — Sofa màu neon, dáng cong, module | 200+ mã vải tuỳ chọn',
  description:
    'SOFA POP — sofa thủ công phong cách retro-futurism: màu neon, dáng bo tròn, module ghép tự do. 200+ mã vải, render 3D trong 24h, giao 48h, bảo hành 10 năm.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa11View />
    </>
  );
}
