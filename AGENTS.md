# Technical decisions

- Use the configured Clerk publishable key on Lovable-hosted domains, and derive keys from hostnames only for custom domains, because preview hostnames are not Clerk Frontend API domains.
- Route Clerk script and Frontend API traffic through the same-origin Clerk proxy on Lovable-hosted domains, because the preview host itself cannot serve Clerk assets directly.