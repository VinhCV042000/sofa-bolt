import type { IDateValue } from './common';

// ----------------------------------------------------------------------
// Shared admin <-> public data model for the "sofa1" business (Casa Sofa).
// Every entity below is the single source of truth consumed by both:
//  - the public site (src/sections/sofa1/*, src/sections/sofa1-pages/*)
//  - the admin dashboard (src/sections/sofa1-admin/*, src/pages/dashboard/sofa1/*)
// See src/_mock/_sofa1.ts for the actual seeded data and src/actions/sofa1.ts
// for the hooks that expose it.
// ----------------------------------------------------------------------

export type ISofa1TableFilters = {
  publish: string[];
};

// ----------------------------------------------------------------------

export type ISofa1Category = {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  image: string;
  description?: string;
  itemCount: number;
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Collection = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  displayCount: string;
  productIds: string[];
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Product = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  categoryId: string;
  collectionId: string;
  style: string;
  price: number;
  priceSale: number | null;
  coverUrl: string;
  images: string[];
  colors: string[];
  colorNames: string[];
  material?: string;
  size?: string;
  rating: number;
  totalReviews: number;
  badge: string;
  description: string;
  subDescription?: string;
  quantity: number;
  available: number;
  inventoryType: string;
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Project = {
  id: string;
  name: string;
  slug: string;
  type: string;
  year: string;
  location: string;
  coverUrl: string;
  images: string[];
  description: string;
  productIds: string[];
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Showroom = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  openHours: string;
  coverUrl: string;
  mapUrl?: string;
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverUrl: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  publish: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Career = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Promotion = {
  id: string;
  title: string;
  service: string;
  icon: string;
  description: string;
  discountPercent: number;
  validFrom: IDateValue;
  validUntil: IDateValue;
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1OrderItem = {
  productId: string;
  name: string;
  coverUrl: string;
  quantity: number;
  price: number;
};

export type ISofa1Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  items: ISofa1OrderItem[];
  subtotal: number;
  total: number;
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl?: string;
  totalOrders: number;
  totalSpent: number;
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1B2BLead = {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: IDateValue;
};

// ----------------------------------------------------------------------

export type ISofa1CareerApplication = {
  id: string;
  careerId: string;
  careerTitle: string;
  candidateName: string;
  email: string;
  phone: string;
  coverLetter?: string;
  status: string;
  createdAt: IDateValue;
};
