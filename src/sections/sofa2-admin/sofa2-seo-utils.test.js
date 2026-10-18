import { describe, expect, test } from 'bun:test';
import { seoCanonical, seoCsvCell, seoEnabled, seoFormValues } from './sofa2-seo-utils';

describe('SEO management rules', () => {
  test('save draft uses draft status without altering the form', () => {
    const form = { status: 'Tốt', url: '/sofa2/about' };
    expect(seoFormValues(form, 'status', 'Cần cải thiện').status).toBe('Cần cải thiện');
    expect(form.status).toBe('Tốt');
  });
  test('canonical stays on the page, not the homepage', () => {
    expect(seoCanonical('/sofa2/products/sofa-a', '/sofa2', 'https://example.com'))
      .toBe('https://example.com/sofa2/products/sofa-a');
  });
  test('empty canonical references the current page', () => {
    expect(seoCanonical('/sofa2/about', '', 'https://example.com'))
      .toBe('https://example.com/sofa2/about');
  });
  test('false and Không disable indexing while Có enables it', () => {
    expect(seoEnabled(false)).toBe(false);
    expect(seoEnabled('Không')).toBe(false);
    expect(seoEnabled('Có')).toBe(true);
  });
  test('CSV preserves embedded quotes and blocks spreadsheet formulas', () => {
    expect(seoCsvCell('Sofa "A"')).toBe('"Sofa ""A"""');
    expect(seoCsvCell('=1+1')).toBe('"\'=1+1"');
  });
});