import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { _sofa1Products } from 'src/_mock/_sofa1';

import { Sofa1ProductEditView } from 'src/sections/sofa1-admin/product/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sofa1: Sửa sản phẩm | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentProduct = _sofa1Products.find((product) => product.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Sofa1ProductEditView product={currentProduct} />
    </>
  );
}
