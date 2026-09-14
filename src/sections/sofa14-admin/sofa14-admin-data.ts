// SOFA14 ADMIN — Art Deco Noir & Gold — admin configuration (demo data)
// ----------------------------------------------------------------------

export const SOFA14_ADMIN_ROOT = '/sofa14/admin';

export type Sofa14AdminColumn = { key: string; label: string; type?: 'text' | 'status' | 'money' | 'number' };

export type Sofa14AdminModule = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  stats: { label: string; value: string; trend?: string }[];
  columns: Sofa14AdminColumn[];
  rows: Record<string, string | number>[];
  actions?: string[];
};

export type Sofa14AdminGroup = {
  slug: string;
  name: string;
  icon: string;
  modules: Sofa14AdminModule[];
};

const money = (v: number) => v;

function mod(
  slug: string,
  name: string,
  description: string,
  icon: string,
  stats: Sofa14AdminModule['stats'],
  columns: Sofa14AdminColumn[],
  rows: Record<string, string | number>[],
  actions?: string[]
): Sofa14AdminModule {
  return { slug, name, description, icon, stats, columns, rows, actions };
}

const STATUS_COL: Sofa14AdminColumn = { key: 'status', label: 'Status', type: 'status' };

// ----------------------------------------------------------------------
// CMS
// ----------------------------------------------------------------------

const cmsPage = (slug: string, name: string, path: string) =>
  mod(
    slug,
    name,
    `Manage content, layout and publishing state for ${name.toLowerCase()} (${path}).`,
    'solar:document-text-bold-duotone',
    [
      { label: 'Content blocks', value: '16' },
      { label: 'Views (30d)', value: '24.6K', trend: '+18%' },
      { label: 'Drafts', value: '3' },
      { label: 'Last update', value: '12/09' },
    ],
    [
      { key: 'block', label: 'Content block' },
      { key: 'type', label: 'Type' },
      STATUS_COL,
      { key: 'updated', label: 'Updated' },
      { key: 'author', label: 'Author' },
    ],
    [
      { block: 'Hero — Cloud Mint', type: 'Banner', status: 'Published', updated: '12/09/2026', author: 'Eleanor' },
      { block: 'Heritage story', type: 'Rich text', status: 'Published', updated: '10/09/2026', author: 'Marcus' },
      { block: 'Featured collections', type: 'Product list', status: 'Draft', updated: '09/09/2026', author: 'Sofia' },
      { block: 'Client testimonials', type: 'Slider', status: 'Published', updated: '02/09/2026', author: 'Eleanor' },
      { block: 'Footer CTA', type: 'Banner', status: 'Hidden', updated: '28/08/2026', author: 'Marcus' },
    ],
    ['Add block', 'Preview', 'Publish']
  );

const CMS_GROUP: Sofa14AdminGroup = {
  slug: 'cms',
  name: 'CMS',
  icon: 'solar:documents-bold-duotone',
  modules: [
    cmsPage('home', 'Home', '/sofa14'),
    cmsPage('about', 'About Us', '/sofa14/about'),
    cmsPage('contact', 'Contact', '/sofa14/contact'),
    cmsPage('policy', 'Policy', '/sofa14/policy'),
    cmsPage('terms', 'Terms', '/sofa14/policy/terms'),
    cmsPage('faq', 'FAQ', '/sofa14/faq'),
    mod(
      'blog',
      'Blog',
      'Manage articles, categories, authors and publishing schedule.',
      'solar:notebook-bold-duotone',
      [
        { label: 'Articles', value: '112' },
        { label: 'Pending review', value: '5' },
        { label: 'Reads / month', value: '78K', trend: '+11%' },
        { label: 'Categories', value: '8' },
      ],
      [
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        STATUS_COL,
        { key: 'views', label: 'Views', type: 'number' },
        { key: 'updated', label: 'Published' },
      ],
      [
        { title: 'Art Deco Revival: Sofa Design 2026', category: 'Design', status: 'Published', views: 14200, updated: '10/09/2026' },
        { title: 'Caring for Velvet Upholstery', category: 'Care', status: 'Published', views: 7800, updated: '04/09/2026' },
        { title: 'Gold Leaf Finishing Techniques', category: 'Craft', status: 'Pending review', views: 0, updated: '12/09/2026' },
        { title: 'Sunburst Geometry in Furniture', category: 'Design', status: 'Draft', views: 0, updated: '11/09/2026' },
      ],
      ['Write article', 'Review']
    ),
    mod(
      'menu',
      'Menu',
      'Header, footer and mobile menu structure.',
      'solar:hamburger-menu-bold-duotone',
      [
        { label: 'Menus', value: '4' },
        { label: 'Menu items', value: '48' },
        { label: 'Broken links', value: '0' },
        { label: 'Max depth', value: '3' },
      ],
      [
        { key: 'menu', label: 'Menu' },
        { key: 'position', label: 'Position' },
        { key: 'items', label: 'Items', type: 'number' },
        STATUS_COL,
      ],
      [
        { menu: 'Main menu', position: 'Header', items: 22, status: 'Published' },
        { menu: 'Collections mega', position: 'Header', items: 16, status: 'Published' },
        { menu: 'Footer menu', position: 'Footer', items: 6, status: 'Published' },
        { menu: 'Mobile menu', position: 'Mobile', items: 10, status: 'Draft' },
      ],
      ['Add menu']
    ),
    mod(
      'banner',
      'Banner',
      'Promotional banners by placement and schedule.',
      'solar:gallery-wide-bold-duotone',
      [
        { label: 'Active banners', value: '8' },
        { label: 'Avg CTR', value: '4.1%', trend: '+0.8%' },
        { label: 'Expiring this week', value: '1' },
        { label: 'Placements', value: '6' },
      ],
      [
        { key: 'name', label: 'Banner' },
        { key: 'position', label: 'Placement' },
        { key: 'schedule', label: 'Schedule' },
        STATUS_COL,
      ],
      [
        { name: 'Cloud Mint Collection Launch', position: 'Top bar', schedule: '01/09 – 30/09', status: 'Active' },
        { name: 'Complimentary delivery', position: 'Homepage', schedule: 'Always', status: 'Active' },
        { name: 'Sky Puff new arrivals', position: 'Category', schedule: '05/09 – 20/09', status: 'Active' },
        { name: '0% Installment', position: 'Product page', schedule: '01/08 – 31/08', status: 'Expired' },
      ],
      ['Create banner']
    ),
    mod(
      'slider',
      'Slider',
      'Homepage and category page slideshows.',
      'solar:slider-horizontal-bold-duotone',
      [
        { label: 'Sliders', value: '3' },
        { label: 'Slides', value: '14' },
        { label: 'Transition', value: '5s' },
        { label: 'Clicks', value: '4.6K' },
      ],
      [
        { key: 'name', label: 'Slider' },
        { key: 'slides', label: 'Slides', type: 'number' },
        { key: 'page', label: 'Page' },
        STATUS_COL,
      ],
      [
        { name: 'Hero noir gold', slides: 5, page: 'Homepage', status: 'Published' },
        { name: 'Sky Puff collection', slides: 6, page: 'Collections', status: 'Published' },
        { name: 'Showroom 360°', slides: 3, page: 'Showroom', status: 'Draft' },
      ],
      ['Create slider']
    ),
    mod(
      'seo',
      'SEO',
      'Meta title, description and share image for each static page.',
      'solar:magnifer-bold-duotone',
      [
        { label: 'Optimized pages', value: '91%' },
        { label: 'Missing meta', value: '3' },
        { label: 'SEO score', value: '95/100', trend: '+6' },
        { label: 'Top-10 keywords', value: '126' },
      ],
      [
        { key: 'page', label: 'Page' },
        { key: 'title', label: 'Meta title' },
        { key: 'length', label: 'Length', type: 'number' },
        STATUS_COL,
      ],
      [
        { page: '/sofa14', title: 'CLAY POP — Art Deco Sofa Atelier', length: 52, status: 'Good' },
        { page: '/sofa14/about', title: 'About Us | CLAY POP', length: 38, status: 'Good' },
        { page: '/sofa14/faq', title: '', length: 0, status: 'Missing meta' },
        { page: '/sofa14/policy', title: 'Purchase Policy | CLAY POP', length: 46, status: 'Good' },
      ],
      ['Re-scan']
    ),
    mod(
      'static-pages',
      'Static Pages',
      'Custom content pages outside the default structure.',
      'solar:file-text-bold-duotone',
      [
        { label: 'Static pages', value: '16' },
        { label: 'Published', value: '13' },
        { label: 'Drafts', value: '3' },
        { label: 'Views', value: '28K' },
      ],
      [
        { key: 'title', label: 'Title' },
        { key: 'slug', label: 'URL' },
        STATUS_COL,
        { key: 'updated', label: 'Updated' },
      ],
      [
        { title: 'Measuring Your Living Room', slug: '/sofa14/guide-measure', status: 'Published', updated: '06/09/2026' },
        { title: 'Material Guarantees', slug: '/sofa14/guarantee', status: 'Published', updated: '01/09/2026' },
        { title: 'Partnership 2026', slug: '/sofa14/partners', status: 'Draft', updated: '12/09/2026' },
      ],
      ['Create page']
    ),
  ],
};

// ----------------------------------------------------------------------
// PRODUCTS
// ----------------------------------------------------------------------

const PRODUCT_GROUP: Sofa14AdminGroup = {
  slug: 'catalog',
  name: 'Products',
  icon: 'solar:box-bold-duotone',
  modules: [
    mod(
      'categories',
      'Categories',
      'Product category tree and display order.',
      'solar:folder-with-files-bold-duotone',
      [
        { label: 'Categories', value: '20' },
        { label: 'Parent categories', value: '5' },
        { label: 'Assigned products', value: '324' },
        { label: 'Hidden', value: '2' },
      ],
      [
        { key: 'name', label: 'Category' },
        { key: 'parent', label: 'Parent' },
        { key: 'products', label: 'Products', type: 'number' },
        STATUS_COL,
      ],
      [
        { name: 'Cloud Mint', parent: 'Collections', products: 48, status: 'Visible' },
        { name: 'Sky Puff', parent: 'Collections', products: 36, status: 'Visible' },
        { name: 'Sunburst', parent: 'Collections', products: 28, status: 'Visible' },
        { name: 'Armchair', parent: 'Single pieces', products: 22, status: 'Visible' },
        { name: 'Daybed', parent: 'Multi-function', products: 8, status: 'Hidden' },
      ],
      ['Add category']
    ),
    mod(
      'products',
      'Products',
      'Product list, images, descriptions and sales status.',
      'solar:armchair-bold-duotone',
      [
        { label: 'Products', value: '324' },
        { label: 'Active', value: '298' },
        { label: 'Out of stock', value: '12' },
        { label: 'New this month', value: '20', trend: '+20' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'name', label: 'Product name' },
        { key: 'category', label: 'Category' },
        { key: 'price', label: 'Price', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'CM-ROYAL-3S', name: 'Cloud Mint Royal 3-seater', category: 'Cloud Mint', price: money(46900000), status: 'Active' },
        { sku: 'CM-VELVET-2S', name: 'Coral Bounce 2-seater', category: 'Cloud Mint', price: money(32900000), status: 'Active' },
        { sku: 'SP-EMERALD', name: 'Sky Puff Lounge', category: 'Sky Puff', price: money(38500000), status: 'Active' },
        { sku: 'CM-SUNBURST-L', name: 'Sunburst Modular L', category: 'Sunburst', price: money(61900000), status: 'Out of stock' },
        { sku: 'CM-CLASSIC', name: 'Butter Cloud Loveseat', category: 'Cloud Mint', price: money(27900000), status: 'Active' },
        { sku: 'SP-ARM', name: 'Emerald Armchair', category: 'Sky Puff', price: money(21500000), status: 'Discontinued' },
      ],
      ['Add product', 'Import Excel']
    ),
    mod(
      'attributes',
      'Attributes',
      'Attribute sets for variants: color, material, size.',
      'solar:tuning-square-bold-duotone',
      [
        { label: 'Attribute groups', value: '9' },
        { label: 'Values', value: '138' },
        { label: 'Used for variants', value: '6' },
        { label: 'Filter facets', value: '5' },
      ],
      [
        { key: 'name', label: 'Attribute' },
        { key: 'values', label: 'Values', type: 'number' },
        { key: 'usage', label: 'Usage' },
        STATUS_COL,
      ],
      [
        { name: 'Color', values: 30, usage: 'Variant + Filter', status: 'Active' },
        { name: 'Material', values: 12, usage: 'Variant + Filter', status: 'Active' },
        { name: 'Size', values: 16, usage: 'Variant', status: 'Active' },
        { name: 'Leg style', values: 6, usage: 'Option', status: 'Active' },
        { name: 'Cushion firmness', values: 4, usage: 'Option', status: 'Hidden' },
      ],
      ['Add attribute']
    ),
    mod(
      'variants',
      'Product Variants',
      'SKU combinations by color, material and size.',
      'solar:layers-bold-duotone',
      [
        { label: 'Variants', value: '1.046' },
        { label: 'In stock', value: '920' },
        { label: 'Low stock alert', value: '36' },
        { label: 'Discontinued', value: '22' },
      ],
      [
        { key: 'sku', label: 'Variant SKU' },
        { key: 'product', label: 'Parent product' },
        { key: 'option', label: 'Options' },
        { key: 'stock', label: 'Stock', type: 'number' },
        { key: 'price', label: 'Price', type: 'money' },
      ],
      [
        { sku: 'CM-ROYAL-3S-BK', product: 'Cloud Mint Royal 3-seater', option: 'Velvet / Black / 2m4', stock: 16, price: money(46900000) },
        { sku: 'CM-ROYAL-3S-GD', product: 'Cloud Mint Royal 3-seater', option: 'Velvet / Gold / 2m4', stock: 8, price: money(47900000) },
        { sku: 'CM-VELVET-2S-BK', product: 'Coral Bounce 2-seater', option: 'Velvet / Black / 2m2', stock: 22, price: money(32900000) },
        { sku: 'CM-SUNBURST-L-EM', product: 'Sunburst Modular L', option: 'Velvet / Emerald / 3m0', stock: 0, price: money(61900000) },
      ],
      ['Create variant']
    ),
    mod(
      'inventory',
      'Inventory',
      'Stock by product at each warehouse / showroom.',
      'solar:box-minimalistic-bold-duotone',
      [
        { label: 'Total stock', value: '3.120' },
        { label: 'Low stock', value: '36' },
        { label: 'Out of stock', value: '12' },
        { label: 'Stock value', value: '21.4 tỷ' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'warehouse', label: 'Warehouse' },
        { key: 'stock', label: 'Stock', type: 'number' },
        { key: 'reserved', label: 'Reserved', type: 'number' },
        STATUS_COL,
      ],
      [
        { sku: 'CM-ROYAL-3S-BK', warehouse: 'Kho TP.HCM', stock: 16, reserved: 5, status: 'In stock' },
        { sku: 'CM-VELVET-2S-BK', warehouse: 'Kho Hà Nội', stock: 22, reserved: 6, status: 'In stock' },
        { sku: 'CM-SUNBURST-L-EM', warehouse: 'Kho TP.HCM', stock: 0, reserved: 0, status: 'Out of stock' },
        { sku: 'SP-EMERALD-GR', warehouse: 'Kho Đà Nẵng', stock: 4, reserved: 2, status: 'Low stock' },
      ],
      ['Stock in', 'Stocktake']
    ),
    mod(
      'pricing',
      'Pricing',
      'List price, sale price and dealer price.',
      'solar:tag-price-bold-duotone',
      [
        { label: 'Price lists', value: '5' },
        { label: 'On-sale products', value: '56' },
        { label: 'Avg discount', value: '14%' },
        { label: 'Profit margin', value: '38%', trend: '+4%' },
      ],
      [
        { key: 'sku', label: 'SKU' },
        { key: 'list', label: 'List price', type: 'money' },
        { key: 'sale', label: 'Sale price', type: 'money' },
        { key: 'dealer', label: 'Dealer price', type: 'money' },
        STATUS_COL,
      ],
      [
        { sku: 'CM-ROYAL-3S', list: money(54900000), sale: money(46900000), dealer: money(41200000), status: 'On sale' },
        { sku: 'CM-SUNBURST-L', list: money(68000000), sale: money(61900000), dealer: money(54500000), status: 'On sale' },
        { sku: 'CM-CLASSIC', list: money(27900000), sale: money(27900000), dealer: money(24600000), status: 'List price' },
        { sku: 'SP-ARM', list: money(21500000), sale: money(21500000), dealer: money(19000000), status: 'List price' },
      ],
      ['Create price list']
    ),
  ],
};

// ----------------------------------------------------------------------
// WAREHOUSE
// ----------------------------------------------------------------------

const WAREHOUSE_GROUP: Sofa14AdminGroup = {
  slug: 'warehouse',
  name: 'Warehouse',
  icon: 'solar:warehouse-bold-duotone',
  modules: [
    mod(
      'overview',
      'Warehouse Overview',
      'System-wide stock status by warehouse and showroom.',
      'solar:chart-square-bold-duotone',
      [
        { label: 'Warehouses', value: '6' },
        { label: 'Total stock', value: '3.120' },
        { label: 'Pending shipments', value: '52' },
        { label: 'Fill rate', value: '74%' },
      ],
      [
        { key: 'warehouse', label: 'Warehouse' },
        { key: 'city', label: 'Region' },
        { key: 'stock', label: 'Stock', type: 'number' },
        { key: 'fill', label: 'Fill' },
        STATUS_COL,
      ],
      [
        { warehouse: 'Central HCM Depot', city: 'TP.HCM', stock: 1180, fill: '76%', status: 'Active' },
        { warehouse: 'Hanoi Depot', city: 'Hà Nội', stock: 920, fill: '71%', status: 'Active' },
        { warehouse: 'Da Nang Depot', city: 'Đà Nẵng', stock: 480, fill: '58%', status: 'Active' },
        { warehouse: 'Consignment Depot', city: 'Nationwide', stock: 540, fill: '65%', status: 'Active' },
      ],
      ['Add warehouse']
    ),
    mod(
      'receipts',
      'Stock In / Out',
      'Goods receipt from atelier and dispatch notes.',
      'solar:import-bold-duotone',
      [
        { label: 'Notes this month', value: '168' },
        { label: 'Pending approval', value: '8' },
        { label: 'In value', value: '4.8 tỷ' },
        { label: 'Out value', value: '5.6 tỷ' },
      ],
      [
        { key: 'code', label: 'Note ID' },
        { key: 'type', label: 'Type' },
        { key: 'warehouse', label: 'Warehouse' },
        { key: 'value', label: 'Value', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'GR-2609-016', type: 'Receipt', warehouse: 'Central HCM', value: money(542000000), status: 'Completed' },
        { code: 'DN-2609-082', type: 'Dispatch', warehouse: 'Hanoi Depot', value: money(148000000), status: 'Completed' },
        { code: 'GR-2609-017', type: 'Receipt', warehouse: 'Da Nang Depot', value: money(86000000), status: 'Pending' },
        { code: 'DN-2609-083', type: 'Dispatch', warehouse: 'Central HCM', value: money(32500000), status: 'Processing' },
      ],
      ['Create receipt', 'Create dispatch']
    ),
    mod(
      'transfers',
      'Transfers & Stocktake',
      'Inter-warehouse transfers and periodic stocktake records.',
      'solar:transfer-horizontal-bold-duotone',
      [
        { label: 'Transfer orders', value: '28' },
        { label: 'In transit', value: '6' },
        { label: 'Stocktake diff', value: '2' },
        { label: 'Last stocktake', value: '31/08' },
      ],
      [
        { key: 'code', label: 'Order ID' },
        { key: 'from', label: 'From' },
        { key: 'to', label: 'To' },
        { key: 'items', label: 'Items', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'TR-0914', from: 'Central HCM', to: 'Da Nang Depot', items: 16, status: 'In transit' },
        { code: 'TR-0913', from: 'Hanoi Depot', to: 'Showroom Q1', items: 5, status: 'Completed' },
        { code: 'ST-0903', from: 'Central HCM', to: '—', items: 360, status: '2 items diff' },
      ],
      ['Create transfer', 'Open stocktake']
    ),
  ],
};

// ----------------------------------------------------------------------
// ORDERS
// ----------------------------------------------------------------------

const ORDER_GROUP: Sofa14AdminGroup = {
  slug: 'orders',
  name: 'Orders',
  icon: 'solar:cart-large-2-bold-duotone',
  modules: [
    mod(
      'orders',
      'Orders',
      'All online, showroom and dealer orders.',
      'solar:bill-list-bold-duotone',
      [
        { label: 'Orders this month', value: '428', trend: '+16%' },
        { label: 'Pending confirmation', value: '21' },
        { label: 'Revenue', value: '7.2 tỷ', trend: '+12%' },
        { label: 'AOV', value: '16.8 tr' },
      ],
      [
        { key: 'code', label: 'Order ID' },
        { key: 'customer', label: 'Customer' },
        { key: 'channel', label: 'Channel' },
        { key: 'total', label: 'Total', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'CM-26091001', customer: 'Eleanor Vance', channel: 'Website', total: money(46900000), status: 'Shipping' },
        { code: 'CM-26090998', customer: 'Marcus Chen', channel: 'Showroom HCM', total: money(61900000), status: 'Completed' },
        { code: 'CM-26090995', customer: 'Luxe Interiors Ltd', channel: 'Dealer', total: money(168000000), status: 'Pending' },
        { code: 'CM-26090990', customer: 'Sofia Park', channel: 'Website', total: money(32900000), status: 'Cancelled' },
      ],
      ['Create order', 'Export Excel']
    ),
    mod(
      'payments',
      'Payments',
      'Payment transactions, gateway reconciliation and installments.',
      'solar:card-transfer-bold-duotone',
      [
        { label: 'Transactions', value: '448' },
        { label: 'Success rate', value: '97.4%' },
        { label: 'Pending recon', value: '16' },
        { label: 'Installments', value: '68 orders' },
      ],
      [
        { key: 'txn', label: 'Transaction ID' },
        { key: 'order', label: 'Order' },
        { key: 'method', label: 'Method' },
        { key: 'amount', label: 'Amount', type: 'money' },
        STATUS_COL,
      ],
      [
        { txn: 'TXN-66213', order: 'CM-26091001', method: 'VNPay', amount: money(46900000), status: 'Success' },
        { txn: 'TXN-66210', order: 'CM-26090998', method: 'Bank transfer', amount: money(61900000), status: 'Success' },
        { txn: 'TXN-66208', order: 'CM-26090995', method: 'Dealer credit', amount: money(168000000), status: 'Pending recon' },
        { txn: 'TXN-66201', order: 'CM-26090990', method: 'Intl card', amount: money(32900000), status: 'Failed' },
      ],
      ['Reconcile']
    ),
    mod(
      'shipping',
      'Shipping',
      'Delivery dispatch, carriers and installation scheduling.',
      'solar:delivery-bold-duotone',
      [
        { label: 'In transit', value: '48' },
        { label: 'On-time rate', value: '96%' },
        { label: 'Install teams', value: '10' },
        { label: 'Shipping cost', value: '162 tr' },
      ],
      [
        { key: 'code', label: 'Shipment ID' },
        { key: 'order', label: 'Order' },
        { key: 'carrier', label: 'Carrier' },
        { key: 'eta', label: 'ETA' },
        STATUS_COL,
      ],
      [
        { code: 'SHP-40112', order: 'CM-26091001', carrier: 'In-house team', eta: '14/09/2026', status: 'Shipping' },
        { code: 'SHP-40109', order: 'CM-26090998', carrier: 'In-house team', eta: '10/09/2026', status: 'Delivered' },
        { code: 'SHP-40105', order: 'CM-26090995', carrier: 'Nhất Tín Logistics', eta: '18/09/2026', status: 'Awaiting pickup' },
      ],
      ['Create shipment']
    ),
    mod(
      'refunds',
      'Refunds',
      'Refund requests and processing status.',
      'solar:money-bag-bold-duotone',
      [
        { label: 'Requests this month', value: '12' },
        { label: 'Refunded', value: '9' },
        { label: 'Refund value', value: '148 tr' },
        { label: 'Avg time', value: '2.6 days' },
      ],
      [
        { key: 'code', label: 'Request ID' },
        { key: 'order', label: 'Order' },
        { key: 'reason', label: 'Reason' },
        { key: 'amount', label: 'Amount', type: 'money' },
        STATUS_COL,
      ],
      [
        { code: 'RF-2609-04', order: 'CM-26090990', reason: 'Customer cancel', amount: money(32900000), status: 'Refunded' },
        { code: 'RF-2609-05', order: 'CM-26090952', reason: 'Wrong color', amount: money(5800000), status: 'Processing' },
        { code: 'RF-2609-06', order: 'CM-26090940', reason: 'Late delivery', amount: money(1100000), status: 'Pending' },
      ],
      ['Approve refund']
    ),
    mod(
      'returns',
      'Returns',
      'Product return / exchange requests and return stock status.',
      'solar:restart-bold-duotone',
      [
        { label: 'Requests this month', value: '7' },
        { label: 'Return rate', value: '1.6%' },
        { label: 'Being collected', value: '2' },
        { label: 'Re-stocked', value: '5' },
      ],
      [
        { key: 'code', label: 'Request ID' },
        { key: 'product', label: 'Product' },
        { key: 'type', label: 'Type' },
        { key: 'reason', label: 'Reason' },
        STATUS_COL,
      ],
      [
        { code: 'RT-2609-01', product: 'Coral Bounce 2-seater', type: 'Exchange', reason: 'Color mismatch', status: 'Collecting' },
        { code: 'RT-2609-02', product: 'Cloud Mint Royal 3-seater', type: 'Return', reason: 'Stitching defect', status: 'Re-stocked' },
        { code: 'RT-2609-03', product: 'Sky Puff Lounge', type: 'Exchange', reason: 'Size too large', status: 'Pending' },
      ],
      ['Create request']
    ),
  ],
};

// ----------------------------------------------------------------------
// CRM
// ----------------------------------------------------------------------

const CRM_GROUP: Sofa14AdminGroup = {
  slug: 'crm',
  name: 'CRM',
  icon: 'solar:users-group-rounded-bold-duotone',
  modules: [
    mod(
      'customers',
      'Customers',
      'Customer profiles, tiers and lifetime value.',
      'solar:user-id-bold-duotone',
      [
        { label: 'Customers', value: '10.820' },
        { label: 'New this month', value: '428', trend: '+10%' },
        { label: 'VIP customers', value: '286' },
        { label: 'Avg LTV', value: '34 tr' },
      ],
      [
        { key: 'name', label: 'Customer' },
        { key: 'phone', label: 'Phone' },
        { key: 'tier', label: 'Tier' },
        { key: 'spent', label: 'Total spent', type: 'money' },
        STATUS_COL,
      ],
      [
        { name: 'Eleanor Vance', phone: '0912 xxx 412', tier: 'Gold', spent: money(92800000), status: 'Active' },
        { name: 'Marcus Chen', phone: '0987 xxx 336', tier: 'Silver', spent: money(61900000), status: 'Active' },
        { name: 'Luxe Interiors Ltd', phone: '0243 xxx 810', tier: 'Dealer', spent: money(1680000000), status: 'Active' },
        { name: 'Sofia Park', phone: '0905 xxx 229', tier: 'Standard', spent: money(32900000), status: 'Dormant' },
      ],
      ['Add customer', 'Import contacts']
    ),
    mod(
      'leads',
      'Leads',
      'Prospects from forms, hotline, showroom and ads.',
      'solar:magnet-bold-duotone',
      [
        { label: 'Leads this month', value: '1.086' },
        { label: 'Contacted', value: '768' },
        { label: 'Close rate', value: '18.6%', trend: '+2.4%' },
        { label: 'Hot leads', value: '84' },
      ],
      [
        { key: 'name', label: 'Lead' },
        { key: 'source', label: 'Source' },
        { key: 'interest', label: 'Interest' },
        { key: 'owner', label: 'Owner' },
        STATUS_COL,
      ],
      [
        { name: 'Daniel Wu', source: 'Instagram Ads', interest: 'Cloud Mint Royal', owner: 'Eleanor', status: 'Hot lead' },
        { name: 'Ava Mitchell', source: 'Google Ads', interest: 'Sunburst Modular', owner: 'Marcus', status: 'Contacted' },
        { name: 'Liam Foster', source: 'Showroom HCM', interest: 'Sky Puff', owner: 'Sofia', status: 'Consulting' },
        { name: 'Olivia Tan', source: 'Zalo OA', interest: 'Coral Bounce', owner: 'Unassigned', status: 'New' },
      ],
      ['Add lead', 'Assign']
    ),
    mod(
      'purchase-history',
      'Purchase History',
      'Transaction timeline per customer.',
      'solar:history-bold-duotone',
      [
        { label: 'Transactions', value: '16.420' },
        { label: 'Repeat customers', value: '36%' },
        { label: 'Repurchase cycle', value: '15 months' },
        { label: 'Orders / customer', value: '1.5' },
      ],
      [
        { key: 'customer', label: 'Customer' },
        { key: 'order', label: 'Order' },
        { key: 'date', label: 'Date' },
        { key: 'total', label: 'Value', type: 'money' },
        STATUS_COL,
      ],
      [
        { customer: 'Eleanor Vance', order: 'CM-26091001', date: '11/09/2026', total: money(46900000), status: 'Shipping' },
        { customer: 'Eleanor Vance', order: 'CM-25031432', date: '14/03/2025', total: money(62000000), status: 'Completed' },
        { customer: 'Marcus Chen', order: 'CM-26090998', date: '10/09/2026', total: money(61900000), status: 'Completed' },
      ]
    ),
    mod(
      'care',
      'Customer Care',
      'Tickets, callbacks, satisfaction surveys and warranty.',
      'solar:chat-round-call-bold-duotone',
      [
        { label: 'Open tickets', value: '32' },
        { label: 'Response time', value: '36 min' },
        { label: 'CSAT', value: '4.8/5', trend: '+0.3' },
        { label: 'Warranty in progress', value: '9' },
      ],
      [
        { key: 'ticket', label: 'Ticket' },
        { key: 'customer', label: 'Customer' },
        { key: 'topic', label: 'Topic' },
        { key: 'agent', label: 'Agent' },
        STATUS_COL,
      ],
      [
        { ticket: 'TK-7021', customer: 'Sofia Park', topic: 'Refund for cancel', agent: 'Sofia', status: 'Processing' },
        { ticket: 'TK-7018', customer: 'Eleanor Vance', topic: 'Schedule installation', agent: 'Eleanor', status: 'Closed' },
        { ticket: 'TK-7015', customer: 'Luxe Interiors Ltd', topic: 'Frame warranty', agent: 'Marcus', status: 'Awaiting reply' },
      ],
      ['Create ticket']
    ),
  ],
};

// ----------------------------------------------------------------------
// MARKETING
// ----------------------------------------------------------------------

const MARKETING_GROUP: Sofa14AdminGroup = {
  slug: 'marketing',
  name: 'Marketing',
  icon: 'solar:megaphone-bold-duotone',
  modules: [
    mod(
      'email',
      'Email Marketing',
      'Campaigns, automations and delivery performance.',
      'solar:letter-bold-duotone',
      [
        { label: 'Campaigns', value: '22' },
        { label: 'Open rate', value: '42.1%', trend: '+3.2%' },
        { label: 'Click rate', value: '7.6%' },
        { label: 'Attributed revenue', value: '780 tr' },
      ],
      [
        { key: 'campaign', label: 'Campaign' },
        { key: 'segment', label: 'Segment' },
        { key: 'sent', label: 'Sent', type: 'number' },
        { key: 'open', label: 'Open rate' },
        STATUS_COL,
      ],
      [
        { campaign: 'Cloud Mint Launch — 20%', segment: 'All customers', sent: 10820, open: '45%', status: 'Sent' },
        { campaign: 'Sky Puff new arrivals', segment: 'Velvet interest', sent: 2860, open: '49%', status: 'Sent' },
        { campaign: 'Abandoned cart reminder', segment: 'Automated', sent: 720, open: '56%', status: 'Active' },
        { campaign: 'Birthday greeting', segment: 'Automated', sent: 186, open: '62%', status: 'Active' },
      ],
      ['Create campaign']
    ),
    mod(
      'sms',
      'SMS Marketing',
      'Brand SMS, OTP and post-sale care.',
      'solar:chat-square-code-bold-duotone',
      [
        { label: 'Sent', value: '38.6K' },
        { label: 'Delivery rate', value: '98.7%' },
        { label: 'Monthly cost', value: '26 tr' },
        { label: 'Brand name', value: 'SOFANOIR' },
      ],
      [
        { key: 'campaign', label: 'Campaign' },
        { key: 'segment', label: 'Segment' },
        { key: 'sent', label: 'Sent', type: 'number' },
        { key: 'cost', label: 'Cost', type: 'money' },
        STATUS_COL,
      ],
      [
        { campaign: 'Weekend flash sale', segment: 'HN + HCM', sent: 15200, cost: money(10200000), status: 'Sent' },
        { campaign: 'Installation reminder', segment: 'Automated', sent: 388, cost: money(280000), status: 'Active' },
        { campaign: 'VIP exclusive offer', segment: 'Gold tier', sent: 286, cost: money(198000), status: 'Scheduled' },
      ],
      ['Create SMS campaign']
    ),
    mod(
      'push',
      'Push Notification',
      'Web/app push notifications by user behavior.',
      'solar:bell-bing-bold-duotone',
      [
        { label: 'Subscribers', value: '21.2K' },
        { label: 'CTR', value: '4.8%' },
        { label: 'Notifications this month', value: '16' },
        { label: 'Unsubscribe rate', value: '0.5%' },
      ],
      [
        { key: 'title', label: 'Notification' },
        { key: 'trigger', label: 'Trigger' },
        { key: 'reach', label: 'Reach', type: 'number' },
        { key: 'ctr', label: 'CTR' },
        STATUS_COL,
      ],
      [
        { title: '20% off Cloud Mint collection', trigger: 'Manual', reach: 19800, ctr: '5.6%', status: 'Sent' },
        { title: 'Your viewed item is on sale', trigger: 'Behavior', reach: 3120, ctr: '10.2%', status: 'Active' },
        { title: 'New Da Nang showroom', trigger: 'Location', reach: 1080, ctr: '3.6%', status: 'Scheduled' },
      ],
      ['Create notification']
    ),
    mod(
      'coupon',
      'Coupon',
      'Discount codes, conditions and usage limits.',
      'solar:ticket-sale-bold-duotone',
      [
        { label: 'Active codes', value: '14' },
        { label: 'Times used', value: '1.924' },
        { label: 'Discount value', value: '412 tr' },
        { label: 'Usage rate', value: '33%' },
      ],
      [
        { key: 'code', label: 'Code' },
        { key: 'value', label: 'Offer' },
        { key: 'condition', label: 'Condition' },
        { key: 'used', label: 'Used', type: 'number' },
        STATUS_COL,
      ],
      [
        { code: 'NOIR20', value: '20% off', condition: 'Orders from 25 million', used: 726, status: 'Active' },
        { code: 'FREESHIP', value: 'Free delivery & install', condition: 'HN/HCM inner city', used: 980, status: 'Active' },
        { code: 'VIP5', value: '5 million off', condition: 'Gold tier only', used: 82, status: 'Active' },
        { code: 'AUG15', value: '15% off', condition: 'Orders from 10 million', used: 136, status: 'Expired' },
      ],
      ['Create coupon']
    ),
    mod(
      'affiliate',
      'Affiliate',
      'Partners, commissions and settlement payments.',
      'solar:hand-money-bold-duotone',
      [
        { label: 'Affiliates', value: '216' },
        { label: 'Referred orders', value: '324' },
        { label: 'Commission this month', value: '248 tr' },
        { label: 'Commission rate', value: '5%' },
      ],
      [
        { key: 'partner', label: 'Affiliate' },
        { key: 'channel', label: 'Channel' },
        { key: 'orders', label: 'Orders', type: 'number' },
        { key: 'commission', label: 'Commission', type: 'money' },
        STATUS_COL,
      ],
      [
        { partner: 'Luxury Interiors Blog', channel: 'YouTube', orders: 68, commission: money(76200000), status: 'Active' },
        { partner: 'Decor Journal VN', channel: 'Blog', orders: 42, commission: money(32400000), status: 'Active' },
        { partner: 'Homey TikTok', channel: 'TikTok', orders: 28, commission: money(19600000), status: 'Pending settlement' },
      ],
      ['Invite affiliate']
    ),
  ],
};

// ----------------------------------------------------------------------
// ANALYTICS
// ----------------------------------------------------------------------

const ANALYTICS_GROUP: Sofa14AdminGroup = {
  slug: 'analytics',
  name: 'Analytics',
  icon: 'solar:chart-2-bold-duotone',
  modules: [
    mod(
      'revenue',
      'Revenue',
      'Revenue over time, by channel and region.',
      'solar:dollar-minimalistic-bold-duotone',
      [
        { label: 'Monthly revenue', value: '7.2 tỷ', trend: '+12%' },
        { label: 'Gross profit', value: '2.7 tỷ' },
        { label: 'Orders', value: '428' },
        { label: 'AOV', value: '16.8 tr', trend: '+4%' },
      ],
      [
        { key: 'channel', label: 'Channel' },
        { key: 'orders', label: 'Orders', type: 'number' },
        { key: 'revenue', label: 'Revenue', type: 'money' },
        { key: 'share', label: 'Share' },
        { key: 'growth', label: 'Growth' },
      ],
      [
        { channel: 'Website', orders: 186, revenue: money(2980000000), share: '41%', growth: '+18%' },
        { channel: 'Showroom', orders: 142, revenue: money(2520000000), share: '35%', growth: '+7%' },
        { channel: 'Dealer B2B', orders: 56, revenue: money(1280000000), share: '18%', growth: '+14%' },
        { channel: 'Marketplace', orders: 44, revenue: money(420000000), share: '6%', growth: '-1%' },
      ]
    ),
    mod(
      'best-sellers',
      'Best Sellers',
      'Product ranking by sales volume and corresponding stock.',
      'solar:medal-star-bold-duotone',
      [
        { label: 'Best sellers', value: '32' },
        { label: 'Top 10 contribution', value: '48%' },
        { label: 'No-sale products', value: '20' },
        { label: 'Inventory turnover', value: '4.0' },
      ],
      [
        { key: 'product', label: 'Product' },
        { key: 'sold', label: 'Sold', type: 'number' },
        { key: 'revenue', label: 'Revenue', type: 'money' },
        { key: 'stock', label: 'Stock', type: 'number' },
      ],
      [
        { product: 'Cloud Mint Royal 3-seater', sold: 82, revenue: money(3845800000), stock: 16 },
        { product: 'Coral Bounce 2-seater', sold: 64, revenue: money(2105600000), stock: 22 },
        { product: 'Sunburst Modular L', sold: 48, revenue: money(2971200000), stock: 0 },
        { product: 'Sky Puff Lounge', sold: 42, revenue: money(1617000000), stock: 4 },
      ]
    ),
    mod(
      'traffic',
      'Traffic Sources',
      'Traffic distribution by channel and session quality.',
      'solar:global-bold-duotone',
      [
        { label: 'Monthly sessions', value: '218K', trend: '+8%' },
        { label: 'New users', value: '66%' },
        { label: 'Avg duration', value: '3:34' },
        { label: 'Bounce rate', value: '38%' },
      ],
      [
        { key: 'source', label: 'Source' },
        { key: 'sessions', label: 'Sessions', type: 'number' },
        { key: 'bounce', label: 'Bounce' },
        { key: 'conversion', label: 'Conversion' },
      ],
      [
        { source: 'Organic Search', sessions: 94200, bounce: '34%', conversion: '2.6%' },
        { source: 'Instagram', sessions: 48600, bounce: '42%', conversion: '1.8%' },
        { source: 'Direct', sessions: 36400, bounce: '30%', conversion: '3.2%' },
        { source: 'Referral', sessions: 21800, bounce: '40%', conversion: '2.0%' },
        { source: 'Email', sessions: 16200, bounce: '24%', conversion: '5.2%' },
      ]
    ),
    mod(
      'behavior',
      'Customer Behavior',
      'Page flow, internal search and product interactions.',
      'solar:cursor-bold-duotone',
      [
        { label: 'Pages / session', value: '5.0' },
        { label: 'Add-to-cart', value: '16.2K' },
        { label: 'Cart abandonment', value: '62%' },
        { label: '360° views', value: '8.6K' },
      ],
      [
        { key: 'step', label: 'Journey step' },
        { key: 'users', label: 'Users', type: 'number' },
        { key: 'drop', label: 'Drop-off' },
        { key: 'time', label: 'Avg time' },
      ],
      [
        { step: 'Homepage', users: 218000, drop: '18%', time: '0:56' },
        { step: 'Collection page', users: 178000, drop: '26%', time: '1:24' },
        { step: 'Product detail', users: 122000, drop: '42%', time: '2:32' },
        { step: 'Add to cart', users: 16200, drop: '62%', time: '0:22' },
        { step: 'Checkout complete', users: 5400, drop: '—', time: '2:56' },
      ]
    ),
    mod(
      'conversion',
      'Conversion Rate',
      'Conversion funnel by channel, device and campaign.',
      'solar:filter-bold-duotone',
      [
        { label: 'Overall CR', value: '2.48%', trend: '+0.5%' },
        { label: 'Mobile CR', value: '1.92%' },
        { label: 'Desktop CR', value: '3.32%' },
        { label: 'Advised CR', value: '13.2%' },
      ],
      [
        { key: 'segment', label: 'Segment' },
        { key: 'sessions', label: 'Sessions', type: 'number' },
        { key: 'orders', label: 'Orders', type: 'number' },
        { key: 'cr', label: 'CR' },
      ],
      [
        { segment: 'Mobile – Organic', sessions: 72400, orders: 1390, cr: '1.92%' },
        { segment: 'Desktop – Organic', sessions: 24800, orders: 823, cr: '3.32%' },
        { segment: 'Email remarketing', sessions: 16200, orders: 842, cr: '5.20%' },
        { segment: 'Showroom advised', sessions: 3600, orders: 475, cr: '13.2%' },
      ]
    ),
  ],
};

// ----------------------------------------------------------------------
// SEO
// ----------------------------------------------------------------------

const seoPage = (slug: string, name: string, sample: string) =>
  mod(
    slug,
    name,
    `Optimize title, description, headings and internal links for ${name.toLowerCase()}.`,
    'solar:graph-up-bold-duotone',
    [
      { label: 'Tracked URLs', value: '46' },
      { label: 'Avg score', value: '92/100' },
      { label: 'Missing meta', value: '2' },
      { label: 'Top-10 keywords', value: '24' },
    ],
    [
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Meta title' },
      { key: 'keyword', label: 'Primary keyword' },
      { key: 'position', label: 'Rank', type: 'number' },
      STATUS_COL,
    ],
    [
      { url: sample, title: `${name} – CLAY POP`, keyword: 'art deco sofa', position: 3, status: 'Good' },
      { url: `${sample}/velvet`, title: 'Velvet Art Deco sofa premium', keyword: 'velvet sofa', position: 5, status: 'Good' },
      { url: `${sample}/gold`, title: '', keyword: 'gold leaf sofa', position: 12, status: 'Missing meta' },
      { url: `${sample}/modular`, title: 'Sunburst Modular sofa', keyword: 'modular sofa noir', position: 8, status: 'Needs improvement' },
    ],
    ['SEO scan', 'Export report']
  );

const SEO_GROUP: Sofa14AdminGroup = {
  slug: 'seo',
  name: 'SEO',
  icon: 'solar:graph-new-bold-duotone',
  modules: [
    seoPage('category', 'Category Page', '/sofa14/products/category'),
    seoPage('product', 'Product Page', '/sofa14/products'),
    seoPage('collection', 'Collection Page', '/sofa14/collections'),
    seoPage('project', 'Project Page', '/sofa14/projects'),
    seoPage('showroom', 'Showroom Page', '/sofa14/showrooms'),
    seoPage('blog', 'Blog Page', '/sofa14/blog'),
    seoPage('brand', 'Brand Page', '/sofa14/about'),
    mod(
      'sitemap',
      'Sitemap',
      'XML sitemap submitted to search engines.',
      'solar:sitemap-bold-duotone',
      [
        { label: 'Sitemap URLs', value: '1.386' },
        { label: 'Indexed', value: '1.312' },
        { label: 'Errors', value: '4' },
        { label: 'Last update', value: '12/09' },
      ],
      [
        { key: 'file', label: 'Sitemap file' },
        { key: 'urls', label: 'URLs', type: 'number' },
        { key: 'indexed', label: 'Indexed', type: 'number' },
        STATUS_COL,
      ],
      [
        { file: 'sitemap-products.xml', urls: 324, indexed: 316, status: 'Valid' },
        { file: 'sitemap-categories.xml', urls: 20, indexed: 20, status: 'Valid' },
        { file: 'sitemap-blog.xml', urls: 112, indexed: 108, status: 'Valid' },
        { file: 'sitemap-pages.xml', urls: 42, indexed: 36, status: '4 errors' },
      ],
      ['Regenerate sitemap', 'Submit to Search Console']
    ),
    mod(
      'robots',
      'Robots',
      'Crawl rules per bot.',
      'solar:shield-check-bold-duotone',
      [
        { label: 'Rules', value: '11' },
        { label: 'Blocked paths', value: '6' },
        { label: 'Allowed bots', value: '4' },
        { label: 'Last update', value: '01/09' },
      ],
      [
        { key: 'agent', label: 'User-agent' },
        { key: 'rule', label: 'Rule' },
        { key: 'path', label: 'Path' },
        STATUS_COL,
      ],
      [
        { agent: '*', rule: 'Allow', path: '/', status: 'Active' },
        { agent: '*', rule: 'Disallow', path: '/sofa14/admin', status: 'Active' },
        { agent: '*', rule: 'Disallow', path: '/sofa14/cart', status: 'Active' },
        { agent: 'Googlebot', rule: 'Allow', path: '/', status: 'Active' },
      ],
      ['Edit robots.txt']
    ),
    mod(
      'schema',
      'Schema',
      'JSON-LD structured data for products, articles and business.',
      'solar:code-square-bold-duotone',
      [
        { label: 'Schema types', value: '8' },
        { label: 'Applied URLs', value: '1.108' },
        { label: 'Warnings', value: '3' },
        { label: 'Errors', value: '0' },
      ],
      [
        { key: 'type', label: 'Schema type' },
        { key: 'scope', label: 'Scope' },
        { key: 'urls', label: 'URLs', type: 'number' },
        STATUS_COL,
      ],
      [
        { type: 'Product', scope: 'Product pages', urls: 324, status: 'Valid' },
        { type: 'BreadcrumbList', scope: 'Whole site', urls: 1108, status: 'Valid' },
        { type: 'Article', scope: 'Blog', urls: 112, status: '3 warnings' },
        { type: 'LocalBusiness', scope: 'Showroom', urls: 8, status: 'Valid' },
        { type: 'FAQPage', scope: 'FAQ page', urls: 1, status: 'Valid' },
      ],
      ['Validate schema']
    ),
  ],
};

// ----------------------------------------------------------------------
// ACCESS CONTROL
// ----------------------------------------------------------------------

const ACCESS_GROUP: Sofa14AdminGroup = {
  slug: 'access',
  name: 'Access Control',
  icon: 'solar:lock-keyhole-bold-duotone',
  modules: [
    mod(
      'users',
      'Users',
      'Admin accounts and access status.',
      'solar:user-bold-duotone',
      [
        { label: 'Accounts', value: '32' },
        { label: 'Active', value: '29' },
        { label: '2FA enabled', value: '24' },
        { label: 'Locked', value: '1' },
      ],
      [
        { key: 'name', label: 'User' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'last', label: 'Last login' },
        STATUS_COL,
      ],
      [
        { name: 'Eleanor', email: 'eleanor@claypop.vn', role: 'System Admin', last: '12/09/2026 09:14', status: 'Active' },
        { name: 'Marcus', email: 'marcus@claypop.vn', role: 'Sales Manager', last: '11/09/2026 17:30', status: 'Active' },
        { name: 'Sofia', email: 'sofia@claypop.vn', role: 'Customer Care', last: '12/09/2026 08:04', status: 'Active' },
        { name: 'Julian', email: 'julian@claypop.vn', role: 'Content Editor', last: '02/08/2026 10:18', status: 'Locked' },
      ],
      ['Invite user']
    ),
    mod(
      'roles',
      'Roles',
      'Role groups and permission scope.',
      'solar:users-group-two-rounded-bold-duotone',
      [
        { label: 'Roles', value: '7' },
        { label: 'Custom roles', value: '2' },
        { label: 'Assigned users', value: '32' },
        { label: 'Default role', value: 'Staff' },
      ],
      [
        { key: 'role', label: 'Role' },
        { key: 'users', label: 'Users', type: 'number' },
        { key: 'scope', label: 'Scope' },
        STATUS_COL,
      ],
      [
        { role: 'System Admin', users: 3, scope: 'Full access', status: 'System' },
        { role: 'Sales Manager', users: 7, scope: 'Orders, CRM, Warehouse', status: 'System' },
        { role: 'Content Editor', users: 5, scope: 'CMS, Blog, SEO', status: 'Custom' },
        { role: 'Customer Care', users: 11, scope: 'CRM, Returns, Support', status: 'Custom' },
        { role: 'Accountant', users: 4, scope: 'Payments, Refunds', status: 'Custom' },
      ],
      ['Create role']
    ),
    mod(
      'permissions',
      'Permissions',
      'Detailed permission matrix by module and action.',
      'solar:key-bold-duotone',
      [
        { label: 'Modules', value: '30' },
        { label: 'Permissions', value: '120' },
        { label: 'Sensitive permissions', value: '13' },
        { label: 'Requires approval', value: '5' },
      ],
      [
        { key: 'module', label: 'Module' },
        { key: 'action', label: 'Action' },
        { key: 'roles', label: 'Granted roles' },
        STATUS_COL,
      ],
      [
        { module: 'Orders', action: 'Cancel order', roles: 'Admin, Sales Manager', status: 'Requires approval' },
        { module: 'Refunds', action: 'Approve refund', roles: 'Admin, Accountant', status: 'Sensitive' },
        { module: 'CMS', action: 'Publish page', roles: 'Admin, Editor', status: 'Normal' },
        { module: 'Access Control', action: 'Assign role', roles: 'Admin', status: 'Sensitive' },
      ],
      ['Edit permission matrix']
    ),
    mod(
      'audit-log',
      'Audit Log',
      'Action history, logins and configuration changes.',
      'solar:clipboard-list-bold-duotone',
      [
        { label: 'Events today', value: '1.142' },
        { label: 'Failed logins', value: '9' },
        { label: 'Config changes', value: '7' },
        { label: 'Retention', value: '180 days' },
      ],
      [
        { key: 'time', label: 'Time' },
        { key: 'user', label: 'User' },
        { key: 'action', label: 'Action' },
        { key: 'ip', label: 'IP' },
        STATUS_COL,
      ],
      [
        { time: '12/09 09:14', user: 'Eleanor', action: 'Published homepage', ip: '113.20.x.14', status: 'Success' },
        { time: '12/09 08:41', user: 'Sofia', action: 'Approved refund RF-2609-04', ip: '113.20.x.22', status: 'Success' },
        { time: '12/09 07:58', user: 'unknown', action: 'Failed login', ip: '45.61.x.203', status: 'Denied' },
        { time: '11/09 22:10', user: 'Marcus', action: 'Edited dealer price list', ip: '113.20.x.31', status: 'Success' },
      ],
      ['Export log']
    ),
  ],
};

export const SOFA14_ADMIN_GROUPS: Sofa14AdminGroup[] = [
  CMS_GROUP,
  PRODUCT_GROUP,
  WAREHOUSE_GROUP,
  ORDER_GROUP,
  CRM_GROUP,
  MARKETING_GROUP,
  ANALYTICS_GROUP,
  SEO_GROUP,
  ACCESS_GROUP,
];

export function findSofa14AdminModule(groupSlug?: string, moduleSlug?: string) {
  const group = SOFA14_ADMIN_GROUPS.find((g) => g.slug === groupSlug);
  if (!group) return null;
  const found = group.modules.find((m) => m.slug === moduleSlug) ?? group.modules[0];
  return { group, module: found };
}

export const SOFA14_ADMIN_KPIS = [
  { label: 'Monthly revenue', value: '7.2 tỷ', trend: '+12%', color: 'primary' as const },
  { label: 'Orders', value: '428', trend: '+16%', color: 'info' as const },
  { label: 'New customers', value: '428', trend: '+10%', color: 'success' as const },
  { label: 'Conversion rate', value: '2.48%', trend: '+0.5%', color: 'warning' as const },
];

export const SOFA14_ADMIN_ACTIVITIES = [
  { time: '09:14', text: 'Eleanor published the homepage', tag: 'CMS' },
  { time: '08:41', text: 'Approved refund RF-2609-04 (32.9tr)', tag: 'Orders' },
  { time: '08:02', text: '21 new orders pending confirmation', tag: 'Orders' },
  { time: '07:30', text: 'Campaign "Cloud Mint Launch" achieved 45% open rate', tag: 'Marketing' },
  { time: '06:55', text: 'SKU CM-SUNBURST-L-EM out of stock at Central HCM', tag: 'Warehouse' },
];

// ----------------------------------------------------------------------
// Chart data (demo)
// ----------------------------------------------------------------------

export const SOFA14_ADMIN_CHART_MONTHS = [
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
];

export const SOFA14_ADMIN_REVENUE_SERIES = [
  { name: 'Revenue (tỷ)', data: [3.4, 3.9, 4.4, 4.8, 5.2, 5.6, 6.2, 7.2, 6.6, 7.0, 7.6, 8.4] },
  { name: 'Target (tỷ)', data: [3.6, 4.0, 4.5, 4.9, 5.4, 5.8, 6.4, 6.8, 7.2, 7.6, 8.0, 8.4] },
];

export const SOFA14_ADMIN_ORDER_SERIES = [
  { name: 'Orders', data: [186, 212, 238, 262, 286, 308, 372, 428, 392, 416, 456, 508] },
];

export const SOFA14_ADMIN_CHANNEL_CHART = {
  labels: ['Website', 'Showroom', 'Dealer B2B', 'Marketplace', 'Social'],
  series: [41, 35, 18, 6, 9],
};

export const SOFA14_ADMIN_TOP_PRODUCTS = {
  labels: ['Cloud Mint Royal 3S', 'Coral Bounce 2S', 'Sunburst Modular L', 'Sky Puff', 'Butter Cloud'],
  series: [82, 64, 48, 42, 32],
};
