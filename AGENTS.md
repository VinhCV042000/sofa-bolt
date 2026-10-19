# Technical decisions

- Use the configured Clerk publishable key on Lovable-hosted domains, and derive keys from hostnames only for custom domains, because preview hostnames are not Clerk Frontend API domains.