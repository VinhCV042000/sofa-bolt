import { Helmet } from 'react-helmet-async';

import { Sofa6View } from 'src/sections/sofa6/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA EARTH — Sofa thủ công từ vật liệu thiên nhiên | Linen, bông hữu cơ, wool',
  description:
    'SOFA EARTH — Sofa thủ công 100% từ vật liệu thiên nhiên. Linen tự nhiên, bông hữu cơ, thuốc nhuộm thực vật, gỗ sồi FSC. 35+ mẫu, bảo hành 5 năm, trả góp 0%.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa6View />
    </>
  );
}
