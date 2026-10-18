---
name: Sofa2 dealer access
description: Authentication and privacy rules for the Sofa2 dealer portal.
---

The dealer portal is separate from the public customer site. An administrator approves dealer access, and the server must enforce roles and return private quotes, orders, debt, and sales documents only for the authenticated dealer.

**Why:** The user chose a dedicated login and role-based portal; dealer financial and order data must not be exposed through client-side filtering alone.

**How to apply:** Keep dealer authorization and record ownership checks in server routes whenever the portal or its data modules change.
