import { Helmet } from 'react-helmet-async';

import { Sofa2View } from 'src/sections/sofa2/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'LUXE Sofa — Sofa thiết kế độc quyền | Scandinavian, Industrial, Mid-Century',
  description:
    'LUXE Sofa — Sofa thiết kế độc quyền 3 phong cách. Công nghệ đệm Đức, gỗ sồi FSC, da bò Ý. 80+ mẫu, bảo hành 10 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa2View />
    </>
  );
}
