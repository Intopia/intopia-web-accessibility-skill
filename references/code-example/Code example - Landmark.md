---
title: "Code example: Landmark"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

If multiple landmark regions of the same type exist on a page (for example, two navigation regions), each has an accessible name in the accessibility tree.

<nav aria-label="Main">
  <!-- Main navigation links -->
</nav>
<nav aria-label="Quick links">
  <!-- Secondary navigation links -->
</nav>

When a landmark has an accessible name, the accessible name does not duplicate the landmarkâ€™s role. For example, `<nav aria-label=â€mainâ€>` instead of `<nav aria-label=â€main navigationâ€>`.

<nav aria-labal="main"><!-- Main navigation links --></nav>

* * *

Major sections of the page are identified using appropriate HTML5 landmark elements (e.g., `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<form>`, `<section>` with `aria-label`/`aria-labelledby` for `region` role, `<search>`).

<header>
  <!-- Site-wide header content -->
</header>
<nav>
  <!-- Main navigation links -->
</nav>
<main>
  <!-- Unique content of the page -->
</main>
<footer>
  <!-- Site-wide footer content -->
</footer>
<region aria-labelledby="regionHeadingId">
  <h2 id="regionHeadingId">News</h2>
  <!-- Region Content -->
</region>

* * *

If ARIA roles are used instead of native HTML5 elements, the correct ARIA landmark role is applied (e.g., `role="banner"`, `role="navigation"`, `role="main"`, `role="complementary"`, `role="contentinfo"`, `role="form"`, `role="search"`, `role="region"`).

<div role="banner">
  <!-- Site-wide header content -->
</div>
<div role="navigation" aria-label="Main">
  <!-- Main navigation links -->
</div>
<div role="main">
  <!-- Unique content of the page -->
</div>
<div role="complementary">
  <!-- Sidebar -->
</div>
<div role="contentinfo">
  <!-- Site-wide footer content -->
</div>

