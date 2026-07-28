import { Helmet } from 'react-helmet-async';

import { Sofa1View } from 'src/sections/sofa1/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Casa Sofa — Sofa cao cấp chế tác thủ công | Da bò & Gỗ sồi',
  description:
    'Casa Sofa — Sofa da bò thật nhập khẩu Ý, khung gỗ sồi nguyên khối. 80+ mẫu sofa hiện đại, cổ điển, góc L. Bảo hành 7 năm, giao hàng toàn quốc.',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <Sofa1View />
    </>
  );
}
