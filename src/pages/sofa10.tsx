import { Helmet } from 'react-helmet-async';

import { Sofa10View } from 'src/sections/sofa10/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA WABI — Sofa phong cách Nhật Bản wabi-sabi | Linen thô, gỗ mộc, bouclé',
  description:
    'SOFA WABI — Sofa phong cách wabi-sabi Nhật Bản. Linen thô, gỗ tự nhiên, bouclé mộc. 26+ mẫu, giao 72h, bảo hành 12 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa10View />
    </>
  );
}
