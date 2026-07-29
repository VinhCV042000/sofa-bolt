import { Helmet } from 'react-helmet-async';

import { Sofa3View } from 'src/sections/sofa3/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Sofa Terra — Sofa tự nhiên bền vững | Linen hữu cơ, gỗ tre, carbon âm',
  description:
    'Sofa Terra — Sofa 100% vật liệu tự nhiên, carbon âm, tái chế 100%. Linen hữu cơ, gỗ tre, len cừu Merino. Tặng kèm cây xanh, bảo hành 10 năm.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa3View />
    </>
  );
}
