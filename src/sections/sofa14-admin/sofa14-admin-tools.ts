// SOFA14 ADMIN — utility pages (reports, settings, notifications, profile)
// ----------------------------------------------------------------------

export type Sofa14AdminTool = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const SOFA14_ADMIN_TOOLS: Sofa14AdminTool[] = [
  {
    slug: 'reports',
    name: 'Reports',
    icon: 'solar:chart-square-bold-duotone',
    description: 'Revenue, orders, channel and best-seller charts for the last 12 months.',
  },
  {
    slug: 'settings',
    name: 'System Settings',
    icon: 'solar:settings-bold-duotone',
    description: 'Business info, operations, payments and display options.',
  },
  {
    slug: 'notifications',
    name: 'Notifications & Log',
    icon: 'solar:bell-bing-bold-duotone',
    description: 'System events, stock alerts, orders and security warnings.',
  },
  {
    slug: 'profile',
    name: 'Admin Profile',
    icon: 'solar:user-id-bold-duotone',
    description: 'Account info, role, login sessions and two-factor security.',
  },
];

export const findSofa14AdminTool = (slug?: string) =>
  SOFA14_ADMIN_TOOLS.find((tool) => tool.slug === slug);

// ----------------------------------------------------------------------

export type Sofa14FunnelStep = {
  label: string;
  value: number;
  icon: string;
  desc: string;
};

export const SOFA14_ADMIN_FUNNEL: Sofa14FunnelStep[] = [
  {
    label: 'Visits',
    value: 112600,
    icon: 'solar:eye-bold-duotone',
    desc: 'Website, landing page and ad campaigns',
  },
  {
    label: 'Product views',
    value: 52400,
    icon: 'solar:armchair-2-bold-duotone',
    desc: 'Visitors opening at least one product detail page',
  },
  {
    label: 'Add to cart',
    value: 16200,
    icon: 'solar:cart-large-2-bold-duotone',
    desc: 'Carts created or updated',
  },
  {
    label: 'Checkout started',
    value: 6680,
    icon: 'solar:card-bold-duotone',
    desc: 'Customers entering shipping info',
  },
  {
    label: 'Order completed',
    value: 2480,
    icon: 'solar:check-circle-bold-duotone',
    desc: 'Orders confirmed and paid',
  },
];

// ----------------------------------------------------------------------

export const SOFA14_SETTINGS_FIELDS = [
  { key: 'brand', label: 'Brand name', value: 'CLAY POP', helper: 'Displayed across the site' },
  { key: 'hotline', label: 'Hotline', value: '1900 8686' },
  { key: 'email', label: 'Support email', value: 'support@claypop.vn' },
  { key: 'address', label: 'Headquarters', value: '18 Lê Lợi, Q1, TP.HCM' },
  { key: 'currency', label: 'Currency', value: 'VND' },
  { key: 'tax', label: 'VAT (%)', value: '8' },
  { key: 'freeship', label: 'Free shipping from (₫)', value: '5.000.000' },
  { key: 'warranty', label: 'Default warranty (months)', value: '120' },
];

export const SOFA14_SETTINGS_TOGGLES = [
  { key: 'maintenance', label: 'Maintenance mode', desc: 'Lock the site from visitors', on: false },
  { key: 'reviews', label: 'Allow product reviews', desc: 'Only verified buyers can review', on: true },
  { key: 'cod', label: 'COD payment', desc: 'For orders under 20 million', on: true },
  { key: 'installment', label: '0% Installment', desc: '5 partner banks', on: true },
  { key: 'chatbot', label: 'Consultation chatbot', desc: 'AI assistant on product pages', on: false },
  { key: 'newsletter', label: 'Email newsletter', desc: 'Auto-sent every Wednesday', on: true },
];

export const SOFA14_NOTIFICATIONS = [
  { time: '09:42', type: 'Orders', level: 'info', text: '10 new orders pending confirmation from Website' },
  { time: '09:05', type: 'Warehouse', level: 'warning', text: 'SKU CM-SUNBURST-L-EM at 0 units in Central HCM' },
  { time: '08:30', type: 'Security', level: 'error', text: '3 failed login attempts on eleanor@claypop.vn' },
  { time: '08:02', type: 'Marketing', level: 'success', text: 'Campaign "Cloud Mint Launch" achieved 45% open rate' },
  { time: '07:20', type: 'CMS', level: 'info', text: 'Page "Sky Puff Collection" published' },
  { time: '06:58', type: 'SEO', level: 'warning', text: 'Sitemap detected 4 URLs returning 404' },
  { time: '06:10', type: 'CRM', level: 'success', text: '42 new customer registrations' },
];

export const SOFA14_PROFILE = {
  name: 'Eleanor',
  role: 'Senior Administrator',
  email: 'eleanor@claypop.vn',
  phone: '0912 345 412',
  team: 'Digital Operations',
  joined: '01/2023',
  permissions: ['CMS', 'Products', 'Orders', 'CRM', 'Marketing', 'Analytics', 'SEO', 'Access Control'],
  sessions: [
    { device: 'MacBook Pro • Chrome', place: 'TP.HCM, VN', time: 'Active now' },
    { device: 'iPhone 15 • Safari', place: 'TP.HCM, VN', time: '2 hours ago' },
    { device: 'Windows • Edge', place: 'Hà Nội, VN', time: 'Yesterday, 17:20' },
  ],
};
