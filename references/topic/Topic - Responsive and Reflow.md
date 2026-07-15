---
title: "Topic: Responsive and Reflow"
metadata:
  author: Intopia
  version: "1.0"
---
# Responsive and Reflow (WCAG 2.2 1.4.10 Reflow)

Load this topic when building page layouts, multi-column structures, navigation, toolbars, or anything that must reflow at small viewport sizes.

Content must reflow without loss of information or functionality at a viewport width of 320 CSS pixels (vertical scrolling) or a height of 256 CSS pixels (horizontal scrolling). Users must not be required to scroll in two dimensions to read or interact with content. Tables, complex data visualisations, maps, and toolbars are exempt where 2D layout is essential to usage or meaning.

## Layout rules

- Set `<meta name="viewport" content="width=device-width, initial-scale=1">` in `<head>`.
- Use relative units (`%`, `rem`, `em`, `vw`, `ch`) for widths, padding, and font sizes. Avoid fixed pixel widths on layout containers.
- Build layouts with Flexbox or CSS Grid. Use `flex-wrap: wrap`, or Grid with `repeat(auto-fit, minmax(<min>, 1fr))`, so columns collapse at narrow widths.
- Stack horizontal navigation, toolbars, button groups, and multi-column forms vertically at narrow widths (use a media query around 600–768px).
- Allow long strings (URLs, IDs, codes, email addresses) to break with `overflow-wrap: anywhere` or `word-break: break-word`. Long unbreakable strings are a common cause of 320px overflow.
- Avoid horizontal-only scrolling regions for primary content. If a data table or diagram genuinely requires 2D layout, wrap it in a focusable scroll container so keyboard users can reach it:

<div role="region" aria-label="Quarterly sales data" tabindex="0" style="overflow-x: auto;">   <table>...</table> </div>

- Hide nothing at small widths that is available at large widths. Collapsing into a menu is acceptable; removing content is not.
