import { Sofa6AdminDashboardView } from 'src/sections/sofa6-admin/view';

// Sofa7 uses the shared administration system with its own branded route.
// The view derives the active brand and /sofa7/admin links from the URL.
export default function Page() {
  return <Sofa6AdminDashboardView />;
}