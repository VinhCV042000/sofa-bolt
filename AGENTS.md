# Technical decisions

- Use the configured Clerk publishable key on Lovable-hosted domains, and derive keys from hostnames only for custom domains, because preview hostnames are not Clerk Frontend API domains.
- Allow the web app to start without its optional PostgreSQL connection and return a clear unavailable response from database-backed API routes, because missing credentials should not blank the public site.