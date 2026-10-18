# Project rules

- Run the classic frontend preview directly with Vite so missing optional external API database credentials cannot prevent the website from starting; keep API failures explicit and never mock authenticated persistence.

- Keep SEO form transformations in pure shared utilities with focused tests so draft saves, canonical URLs and exports obey the same rules.
- Preserve the existing sitemap server mechanism; omit lastmod until authoritative page-specific content timestamps exist because SEO-save dates do not establish content changes.
- Treat the existing external SEO API as unavailable when its database or authentication is unconfigured; never replace it with local mock persistence or claim end-to-end verification.