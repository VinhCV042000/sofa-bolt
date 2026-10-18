/** Pure transformations shared by SEO forms and client metadata. */
export function seoEnabled(value: unknown) {
  return value === undefined || value === '' || value === true ||
    ['có', 'yes', 'true', '1'].includes(String(value).toLowerCase());
}

export function seoCanonical(path: string, value: string, origin: string) {
  try {
    const candidate = new URL(value || path, origin);
    const current = new URL(path, origin);
    const normalize = (pathname: string) => pathname.replace(/\/+$/, '') || '/';
    if (candidate.origin !== current.origin || candidate.search || candidate.hash ||
      normalize(candidate.pathname) !== normalize(current.pathname)) return current.href;
    return candidate.href;
  } catch {
    return new URL(path, origin).href;
  }
}

export function seoFormValues<T extends Record<string, string | number>>(
  values: T, statusKey: string, draftStatus?: string
) {
  return draftStatus === undefined ? { ...values } : { ...values, [statusKey]: draftStatus };
}

export function seoCsvCell(value: unknown) {
  const text = String(value ?? '');
  const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
  return `"${safe.replace(/"/g, '""')}"`;
}