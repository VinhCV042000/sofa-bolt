import { Helmet } from 'react-helmet-async';

import { Sofa5View } from 'src/sections/sofa5/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Sofa Royale — Sofa cao cấp độc quyền | Da Ý, mạ vàng 24K, bespoke',
  description:
    'Sofa Royale — Sofa cao cấp chế tác thủ công 100%. Da bò Ý nguyên tấm, mạ vàng 24K, gỗ óc chó. Bảo hành 15 năm, dịch vụ white-glove, bespoke 1:1.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa5View />
    </>
  );
}
