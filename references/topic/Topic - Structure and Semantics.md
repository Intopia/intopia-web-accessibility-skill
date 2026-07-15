---
title: "Topic: Structure and Semantics"
metadata:
  author: Intopia
  version: "1.0"
---
# Structure and Semantics

Load this topic when generating any page, document structure, or semantic markup (landmarks, headings, lists, tables, buttons, links, accessible names, ARIA roles, state, or hiding content).

## Foundations

- Use semantic HTML first. Use elements for their intended purpose.
- Use ARIA sparingly. ARIA enhances semantic HTML; it does not replace it. Never add ARIA roles to native elements that already have the correct role.

## Page Level

- `<title>`: descriptive and unique per page.
- `lang` attribute: set on `<html>` and matches the content language.
- Landmarks: use `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` for structure.
- Headings: `<h1>` through `<h6>` in hierarchical order. Do not skip levels. Don't visually hide headings unless instructed to do so.
- Skip link: provide a skip-to-main link to bypass repeated navigation. As a general guide, a skip link is unnecessary if there are fewer than 5 focusable items before the main content, but apply judgement based on context.

## Semantic Markup

### Lists

Use the correct list type:

- `<ul>`: related items where order does not matter (navigation links, feature lists, search results).
- `<ol>`: items where sequence matters (steps, rankings, instructions).
- `<dl>`: term/value pairs (glossaries, metadata, key-value data).

Do not use list markup for visual indentation. Avoid suppressing list semantics with `list-style: none`; some screen readers remove list semantics when this CSS is applied.

### Tables

Use `<table>` for data with meaningful row/column relationships. Never use tables for visual layout.

- Use `<th>` for header cells, always with a `scope` attribute (`scope="col"` or `scope="row"`).
- Use `<caption>` to name the table. Prefer `<caption>` over `aria-label` on the table element.
- Use `<thead>`, `<tbody>`, and `<tfoot>` to group rows semantically.
- For complex tables with multiple header levels, use `id` and `headers` to associate cells with their headers explicitly.
- For layout tables (legacy code only), add `role="presentation"` to suppress table semantics. Do not use `<th>` in layout tables.
- For sortable columns, put a `<button>` inside the `<th>` and set `aria-sort` (`ascending`, `descending`, or `none`) on that `<th>`. Only one column is sorted at a time; the rest are `none`.

### Buttons and Links

- `<button>`: triggers an action (submit, open modal, toggle, expand). Activated by Enter and Space.
- `<a href>`: navigates to a location (page, anchor, URL). Activated by Enter.

Never use `<div>`, `<span>`, or other non-interactive elements as buttons or links. If the design requires custom styling, style a native element rather than using ARIA to patch an incorrect one. If a link performs an action rather than navigating, use `<button>`.

### Accessible Names

Every interactive element must have an accessible name. Apply in this order of preference:

1. **Native label:** `<label>`, `<caption>`, `<figcaption>`, button text, link text.
2. `aria-labelledby`**:** references visible text already on the page by `id`. Preferred when visible text exists.
3. `aria-label`**:** use only when no visible text is available (e.g. an icon-only button). The value must match or begin with any visible text on the element (label-in-name requirement).

Do not use `aria-label` to override or contradict visible text.

```
<!-- Icon-only button: use aria-label --> <button type="button" aria-label="Close dialog">  <svg aria-hidden="true" focusable="false">...</svg> </button> <!-- Label via aria-labelledby (preferred when visible text exists) --> <h2 id="billing-heading">Billing address</h2> <form aria-labelledby="billing-heading">...</form>
```

### Roles

Prefer native HTML elements over ARIA roles. When a custom component is unavoidable:

- Assign the correct ARIA role (e.g. `role="dialog"`, `role="tab"`, `role="combobox"`).
- Do not add roles to native elements that already carry the correct role (e.g. do not add `role="button"` to `<button>`).
- Ensure required owned elements and required context are present (e.g. `role="option"` must be inside `role="listbox"`).

### State

Interactive elements must expose their current state programmatically.

| Pattern                                    | Attribute                                     |
| :----------------------------------------- | :-------------------------------------------- |
| Expandable control (accordion, disclosure) | `aria-expanded="true"` / `"false"`            |
| Toggle button                              | `aria-pressed="true"` / `"false"`             |
| Tab / option / treeitem                    | `aria-selected="true"` / `"false"`            |
| Checkbox or switch                         | `aria-checked="true"` / `"false"` / `"mixed"` |
| Functionally disabled (still focusable)    | `aria-disabled="true"`                        |
| Current page in navigation                 | `aria-current="page"`                         |

**Rule (prose):**

**`aria-pressed` requires a true toggle.** Use `aria-pressed` only when pressing the button switches it between an active and inactive state, and the same button press deactivates it.

Use `aria-disabled="true"` instead of the `disabled` attribute when the element should remain focusable, so keyboard users can discover it and understand why it is unavailable. Pair it with a visible explanation where possible.

### Hiding Content

- `aria-hidden="true"`: removes an element and its children from the accessibility tree. Use for decorative icons, duplicate text, and visually redundant content. Never apply to focusable elements.
- `hidden` or `display: none`: removes content from both visual rendering and the accessibility tree. Use when content is not present.
- Visually hidden but available to screen readers: use a `.visually-hidden` / `.sr-only` CSS class that clips the element without using `display: none` or `visibility: hidden`.

```
.visually-hidden {  position: absolute;  width: 1px;  height: 1px;  padding: 0;  margin: -1px;  overflow: hidden;  clip: rect(0, 0, 0, 0);  white-space: nowrap;  border: 0; }
```
