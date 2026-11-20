---
title: "Topic: Responsive and Reflow"
metadata:
  author: Intopia
  version: "1.1"
---
# Responsive and Reflow (WCAG 1.4.10)

Content reflows at 320 CSS px wide (or 256 px high) with no loss of content or function and no two-dimensional scrolling. Data tables, complex charts, maps and toolbars are exempt where 2D layout is essential.

- Include `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Use relative units (`%`, `rem`, `em`, `ch`) and Flexbox/Grid with `flex-wrap: wrap` or `repeat(auto-fit, minmax(<min>, 1fr))` so columns collapse.
- Stack navigation, toolbars, button groups and multi-column forms at narrow widths (media query around 600–768px).
- Let long strings break: `overflow-wrap: anywhere`.
- If a table or diagram must scroll sideways, wrap it in a focusable, named scroll container: `<div role="region" aria-label="Orders" tabindex="0" style="overflow-x:auto">`.
- Hide nothing at small widths that exists at large widths. Collapsing into a menu is fine; removing content is not.
