import { Sofa2AdminToolsView } from 'src/sections/sofa2-admin/view';
import { Sofa2AdminAccessGuard } from 'src/sections/sofa2-admin/view/sofa2-admin-access-guard';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Sofa2AdminAccessGuard group="tools">
      <Sofa2AdminToolsView />
    </Sofa2AdminAccessGuard>
  );
}
