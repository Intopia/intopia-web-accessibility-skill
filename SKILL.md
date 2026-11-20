---
name: intopia-web-accessibility
description: Build accessible web user interfaces that meet WCAG 2.2 Level AA. Use whenever generating HTML, CSS, JSX, TSX, React, Vue, or Svelte components, pages, forms, modals, or email templates - including small snippets.
user-invocable: true
metadata:
  author: Intopia
  version: "2.4"
---

Apply these rules whenever you generate or change UI code, so people of all abilities can use it without workarounds.

## Steps

1. Find each component in the request and each situational topic it touches (tables below).
2. Build one list of files: every file in the component's row (in order, base files first), plus each topic that applies. Remove duplicates. **Read them all in one batch of parallel reads.** Component files are `references/acceptance-criteria/Acceptance Criteria - <Name>.md`; topic files are `references/topic/Topic - <Name>.md`. These files are authoritative: don't generate code without them. If nothing in the tables applies, the Core rules below are enough.
3. If your code sets any colours, run the contrast check (see Colour contrast). If it sets none (for example an unstyled component), skip it.
4. Apply the Core rules below to everything.
5. Generate the code.
6. After the code, list the accessibility decisions made, one line per component (for example "Modal: focus moves to heading on open, trapped while open, returns to trigger on close").

## Components

| Component | Files to read, in order |
|---|---|
| Accordion | Interactive Control, Button, Disclosure, Accordion |
| Button | Interactive Control, Button |
| Card | Interactive Control, Link, Heading, Image, List, Card |
| Carousel | Interactive Control, Button, Carousel |
| Checkbox | Interactive Control, Checkbox |
| Checkbox Group | Interactive Control, Checkbox, Checkbox Group |
| Combobox, list autocomplete (default: typing filters the list) | Combobox, Combobox (list autocomplete) |
| Combobox, no autocomplete (fixed shortlist, recent searches) | Combobox, Combobox (no autocomplete) |
| Combobox, list and inline autocomplete (URL-style completion) | Combobox, Combobox (list autocomplete), Combobox (list and inline autocomplete) |
| Combobox, grid popup (options need extra columns) | Combobox, Combobox (list autocomplete), Combobox (grid popup) |
| Combobox, date picker | Combobox, Combobox (date picker), Modal Dialog |
| Complex Image (diagram, graph, infographic) | Complex Image (e.g. diagram, graph, infographic) |
| Disclosure | Interactive Control, Button, Disclosure |
| Heading | Heading |
| Image | Image |
| Landmark | Landmark |
| Link | Interactive Control, Link |
| List | List |
| Menu Button | Interactive Control, Button, Menu Button |
| Modal Dialog | Modal Dialog |
| Page Language | Page Language |
| Page Title | Page Title |
| Radio Group | Interactive Control, Radio Group |
| Select (select-only combobox) | Interactive Control, Select |
| Table | Table |
| Tabs | Interactive Control, Tabs |
| Text Field | Interactive Control, Text Field |
| Toggletip | Interactive Control, Button, Disclosure, Toggletip |
| Tooltip | the trigger's files (for example Button or Link), then Tooltip |

Tooltip content must not contain links, buttons or fields; if it does, use Toggletip.

## Topics (add each that applies)

| Topic | Add when... |
|---|---|
| Forms | any form, input or control: labels, fieldsets, input types, autocomplete, required, hints, validation, disabled or read-only |
| Live Regions and Status | content updates after load (result counts, filter feedback, toasts, status messages) or a progress bar |
| Images and Charts | images, icons, figures, charts, graphs or data visualisations |
| Drag and Drop | reorderable lists, kanban boards, sorting or repositioning items |
| Responsive and Reflow | page layouts, multi-column structures, navigation or toolbars |

## Core rules (always apply)

### Semantics
- Use native HTML for its purpose first. Use ARIA sparingly, and never add a role a native element already has. Custom widgets get the correct role plus required parent and child roles (for example `option` inside `listbox`).
- `<button>` for actions (Enter and Space); `<a href>` for navigation (Enter). Never a `div` or `span` as a button or link; style a native element instead.
- Every interactive element has an accessible name, role and current state. Name order of preference: native label or text, then `aria-labelledby` (visible text), then `aria-label` (no visible text only). The name must contain, ideally start with, the visible text.
- State: `aria-expanded` (disclosures), `aria-pressed` (true toggles only, label doesn't change), `aria-selected` (tabs, options), `aria-checked` (custom checkbox or switch), `aria-current="page"` (current nav link), `aria-disabled="true"` when a control must stay focusable while unavailable, with a visible reason where possible. Never use `aria-label` to contradict visible text.
- Page: unique descriptive `<title>`; `lang` on `<html>`; `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` landmarks; headings `h1`–`h6` in order with no skipped levels; don't visually hide headings unless asked.
- Skip link to `<main>` when there are 5 or more focusable items before main content. When focused it must be visible, its text 4.5:1 and its focus indicator 3:1 against the background it appears on (often a dark header, not the page body).
- Lists: `<ul>` unordered, `<ol>` when order matters, `<dl>` term and value. Avoid `list-style: none` (some screen readers drop list semantics).
- Tables: `<table>` for data only, never layout. `<th scope="col|row">`, a `<caption>`, `<thead>`/`<tbody>`. Complex headers use `id`/`headers`. Sortable columns: a `<button>` inside the `<th>`, `aria-sort` on the sorted `<th>` only.
- Hiding: `aria-hidden="true"` for decorative or duplicate content (never on focusable elements); `hidden` or `display:none` for absent content; a `.visually-hidden` clip class for screen-reader-only text.

### Keyboard and focus
- Tab order follows the visual reading order. `tabindex="0"` to add custom controls, `-1` only for programmatic focus, never above 0. Focus is never lost or moved off-screen.
- Every interactive element has a visible focus indicator: `outline: 2px solid` with `outline-offset: 2px` on `:focus-visible`. Never remove `outline` without an equally visible replacement (box-shadow alone disappears in forced-colours mode).
- The indicator needs 3:1 against every background the element can sit on when focused, not only the page body. Elements that move or appear on focus (a skip link over a dark header, controls in a dark hero or footer) need a colour that passes there. If one colour can't pass everywhere, set the focus colour per area or use a two-colour indicator.
- Modal opens: focus to its heading, trapped inside, back to the trigger on close. Menu opens: focus to the first item, back to the button on close. Toast or status: live region, don't move focus. Accordion: focus stays on the header button. SPA navigation: focus to the new heading or `<main>`.

### Colour contrast
- Thresholds: normal text 4.5:1; large text (24px, or 18.5px bold) 3:1; UI components and graphics (borders, focus rings, icons, states) 3:1. Never convey meaning by colour alone.
- Test the colour the browser renders. Composite any `rgba`, `hsla`, `opacity` or alpha colour first (box-shadow rings, overlays, hover opacity, rgba borders): `node scripts/composite-colour.js "rgba(29,78,216,0.3)" "#FFFFFF"`. Testing the base colour instead is a critical error.
- Check every pair: text on each background (including placeholder, helper and secondary or disabled-looking text), borders, focus indicators, icons, and each state (default, hover, focus, error). Write them to a palette file in a scratch folder (not the output folder), then run `node scripts/check-colour-contrast.js <palette.json>` (exit code 0 means all pass). Fix and re-run until all pass. Run the scripts; don't open or read their source.

  ```json
  {"checks": [
    {"id": "body-text", "foreground": "#1f2937", "background": "#ffffff", "type": "text-normal"},
    {"id": "focus-ring", "foreground": "#1d4ed8", "background": "#ffffff", "type": "ui", "state": "focus"}
  ]}
  ```
  `type` is `text-normal`, `text-large`, `ui` or `graphic`.
- If you changed a colour the user asked for, tell them which colour, its ratio, and what you used instead.
