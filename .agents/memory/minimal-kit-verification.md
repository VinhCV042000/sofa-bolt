---
name: Minimal Kit verification
description: Environment-specific constraints for verifying the imported Vite Minimal Kit app.
---

The imported Minimal Kit app declares Yarn and Node 20, while this Replit runtime may expose Node 24. Local dependency and script checks therefore need Yarn's engine bypass; the full template TypeScript check may also need a larger Node heap.

**Why:** The project includes a large number of routes and dependencies, so the default Node heap can abort before reporting the real diagnostics.

**How to apply:** Prefer `yarn --ignore-engines ...` for local checks and set `NODE_OPTIONS=--max-old-space-size=4096` for full TypeScript or production builds. Use targeted Vite route/module smoke tests when the full bundle exceeds the available time.