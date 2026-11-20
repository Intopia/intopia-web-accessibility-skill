---
title: "Acceptance Criteria: Landmark"
metadata:
  author: Intopia
  version: "1.0"
---
Landmarks are a set of ARIA roles and corresponding HTML5 elements that identify major sections of a web page. They enable assistive technology users to understand the high-level structure of a page and navigate efficiently between distinct content areas.

### Labels and messaging

- If multiple landmark regions of the same type exist on a page (e.g. two navigation regions), each has an accessible name in the accessibility tree. (BP)

### Semantic markup

- When landmarks are used, the **appropriate landmark role** must be chosen for the content or section. For example: *   `<header>` → `banner` landmark *   `<nav>` → `navigation` landmark *   `<main>` → `main` landmark *   `<aside>` → `complementary` landmark *   `<footer>` → `contentinfo` landmark *   `<form>` → `form` landmark (WCAG 1.3.1)
- All content on the page is contained within an appropriate landmark region. (BP)

- Redundant ARIA landmark roles are not applied to native HTML5 landmark elements (e.g., `role="navigation"` is not added to a `<nav>` element). (BP)

- When a landmark has an accessible name, the accessible name does not duplicate the landmark’s role. For example, `<nav aria-label=”main”>` instead of `<nav aria-label=”main navigation”>`. (BP)

- The total number of landmark regions on a page is kept to a minimum, ideally seven or fewer, to maintain their value for navigation. (BP)

## Code examples

```html
<header>...</header>
<!-- Two landmarks of the same type: each has a name that doesn't repeat the role -->
<nav aria-label="Main">...</nav>
<nav aria-label="Quick links">...</nav>
<main>...</main>
<!-- A section is only a region landmark when it has a name -->
<section aria-labelledby="news-heading"><h2 id="news-heading">News</h2>...</section>
<footer>...</footer>
```
