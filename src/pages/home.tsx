import { Helmet } from 'react-helmet-async';

import { SofaView } from 'src/sections/sofa/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Casa Sofa - Sofa cao cấp chế tác thủ công, đẹp mọi không gian sống',
  description:
    'Casa Sofa - Sofa cao cấp da bò thật, gỗ sồi nguyên khối. 80+ mẫu sofa hiện đại, cổ điển, sofa góc. Bảo hành 5 năm, giao hàng toàn quốc.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <SofaView />
    </>
  );
}
