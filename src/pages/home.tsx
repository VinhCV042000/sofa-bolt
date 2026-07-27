import { Helmet } from 'react-helmet-async';

import { SpaView } from 'src/sections/spa/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Serenity Spa - Tái tạo năng lượng, nuôi dưỡng tâm hồn',
  description:
    'Serenity Spa - Trải nghiệm spa cao cấp với massage trị liệu, chăm sóc da, liệu pháp body và aromatherapy. Đặt lịch ngay hôm nay!',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <SpaView />
    </>
  );
}
