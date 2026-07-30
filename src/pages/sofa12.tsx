import { Helmet } from 'react-helmet-async';

import { Sofa12View } from 'src/sections/sofa12/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'SOFA TERRA — Sofa vòm cong màu đất nung, thủ công, vải lanh tự nhiên',
  description:
    'SOFA TERRA: sofa vòm cong đóng thủ công 18 công đoạn, gỗ tần bì, vải lanh & bouclé màu đất nung. Swatch miễn phí, giao 48h, bảo hành 12 năm.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa12View />
    </>
  );
}
