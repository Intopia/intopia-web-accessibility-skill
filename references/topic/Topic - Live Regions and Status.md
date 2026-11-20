---
title: "Topic: Live Regions and Status"
metadata:
  author: Intopia
  version: "1.1"
---
# Live Regions and Status

Use a live region only when content changes after page load, not from user navigation, and focus isn't already moving to it.

- `role="status"` (polite): non-urgent updates such as result counts and filter feedback.
- `role="alert"` (assertive): critical, time-sensitive errors only.
- `aria-atomic="true"` only when the whole region should be read as one unit.

## Progress bars
- Static: convey progress as text ("Step 2 of 4", "60% complete"), visually hidden if not shown.
- Updating: `<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"></div>`
