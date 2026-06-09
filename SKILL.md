---
name: intopia-web-accessibility
description: Build accessible web user interfaces that meet WCAG 2.2 Level AA. Use whenever generating HTML, CSS, JSX, TSX, React, Vue, or Svelte components, pages, forms, modals, or email templates - including small snippets.
user-invocable: true
metadata:
  author: Intopia
  version: "2.0"
---
 
## Overview
 
Apply these accessibility principles whenever generating or modifying UI code. The goal is interfaces usable by people of all abilities, without workarounds.
 
## Instructions
 
1. Identify each UI component in the user's request.
2. For every component identified, look it up in the **Component Index** below and read the linked acceptance criteria file (and code example file, if one exists). These are authoritative — do not generate component code without consulting them.
3. If colour values are involved, consult `references/colour-contrast/Colour Contrast Reference.md`.
4. Apply the Core Accessibility Principles below to fill any gaps not covered by the component-specific references.
5. Generate the code.
6. After presenting the code, list the specific accessibility decisions made, one line per component or pattern (e.g. "Modal: focus moves to heading on open, trapped while open, returns to trigger on close").
---
 
## Component Index
 
Per-component references live in `references/`. Use this index to locate the relevant files before generating code. A dash (—) means no file exists for that component in that category; fall back to the Core Accessibility Principles.
 
| Component | Acceptance Criteria | Code Example |
|---|---|---|
| Accordion | `references/acceptance-criteria/Acceptance Criteria - Accordion.md` | — |
| Button | `references/acceptance-criteria/Acceptance Criteria - Button.md` | `references/code-example/Code example - Button.md` |
| Checkbox | `references/acceptance-criteria/Acceptance Criteria - Checkbox.md` | — |
| Checkbox Group | `references/acceptance-criteria/Acceptance Criteria - Checkbox Group.md` | — |
| Complex Image (diagram, graph, infographic) | `references/acceptance-criteria/Acceptance Criteria - Complex Image (e.g. diagram, graph, infographic).md` | `references/code-example/Code example - Complex Image (e.g. diagram, graph, infographic).md` |
| Heading | `references/acceptance-criteria/Acceptance Criteria - Heading.md` | `references/code-example/Code example - Heading.md` |
| Image | `references/acceptance-criteria/Acceptance Criteria - Image.md` | `references/code-example/Code example - Image.md` |
| Landmark | `references/acceptance-criteria/Acceptance Criteria - Landmark.md` | `references/code-example/Code example - Landmark.md` |
| Link | `references/acceptance-criteria/Acceptance Criteria - Link.md` | `references/code-example/Code example - Link.md` |
| List | `references/acceptance-criteria/Acceptance Criteria - List.md` | `references/code-example/Code example - List.md` |
| Modal Dialog | `references/acceptance-criteria/Acceptance Criteria - Modal Dialog.md` | — |
| Page Language | `references/acceptance-criteria/Acceptance Criteria - Page Language.md` | `references/code-example/Code example - Page language.md` |
| Page Title | `references/acceptance-criteria/Acceptance Criteria - Page Title.md` | `references/code-example/Code example - Page Title.md` |
| Radio Group | `references/acceptance-criteria/Acceptance Criteria - Radio Group.md` | `references/code-example/Code example - Radio Group.md` |
| Select | `references/acceptance-criteria/Acceptance Criteria - Select.md` | — |
| Table | `references/acceptance-criteria/Acceptance Criteria - Table.md` | `references/code-example/Code example - Table.md` |
| Tabs | `references/acceptance-criteria/Acceptance Criteria - Tabs.md` | — |
| Text Field | `references/acceptance-criteria/Acceptance Criteria - Text Field.md` | `references/code-example/Code example - Text Field.md` |
| Toggletip | `references/acceptance-criteria/Acceptance Criteria - Toggletip.md` | — |
| Tooltip | `references/acceptance-criteria/Acceptance Criteria - Tooltip.md` | — |
 
**Cross-cutting references**
 
- Colour contrast: `references/colour-contrast/Colour Contrast Reference.md`
---
 
## Core Accessibility Principles

### Foundations

- Use semantic HTML first. Use elements for their intended purpose.
- Use ARIA sparingly. ARIA enhances semantic HTML; it does not replace it. Never add ARIA roles to native elements that already have the correct role.

### Page Level

- `<title>`: descriptive and unique per page.
- `lang` attribute: set on `<html>` and matches the content language.
- Landmarks: use `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` for structure.
- Headings: `<h1>` through `<h6>` in hierarchical order. Do not skip levels. Don't visually hide headings unless instructed to do so.
- Skip link: provide a skip-to-main link to bypass repeated navigation. As a general guide, a skip link is unnecessary if there are fewer than 5 focusable items before the main content, but apply judgement based on context.

### Semantic Markup

#### Lists

Use the correct list type:

- `<ul>`: related items where order does not matter (navigation links, feature lists, search results).
- `<ol>`: items where sequence matters (steps, rankings, instructions).
- `<dl>`: term/value pairs (glossaries, metadata, key-value data).

Do not use list markup for visual indentation. Avoid suppressing list semantics with `list-style: none`; some screen readers remove list semantics when this CSS is applied.

#### Tables

Use `<table>` for data with meaningful row/column relationships. Never use tables for visual layout.

- Use `<th>` for header cells, always with a `scope` attribute (`scope="col"` or `scope="row"`).
- Use `<caption>` to name the table. Prefer `<caption>` over `aria-label` on the table element.
- Use `<thead>`, `<tbody>`, and `<tfoot>` to group rows semantically.
- For complex tables with multiple header levels, use `id` and `headers` to associate cells with their headers explicitly.
- For layout tables (legacy code only), add `role="presentation"` to suppress table semantics. Do not use `<th>` in layout tables.
- For sortable columns, put a `<button>` inside the `<th>` and set `aria-sort` (`ascending`, `descending`, or `none`) on that `<th>`. Only one column is sorted at a time; the rest are `none`.

```
<th scope="col" aria-sort="ascending"><button type="button">Name</button></th>
<th scope="col" aria-sort="none"><button type="button">Role</button></th>
```

#### Buttons and Links

- `<button>`: triggers an action (submit, open modal, toggle, expand). Activated by Enter and Space.
- `<a href>`: navigates to a location (page, anchor, URL). Activated by Enter.

Never use `<div>`, `<span>`, or other non-interactive elements as buttons or links. If the design requires custom styling, style a native element rather than using ARIA to patch an incorrect one. If a link performs an action rather than navigating, use `<button>`.

#### Accessible Names

Every interactive element must have an accessible name. Apply in this order of preference:

1. **Native label:** `<label>`, `<caption>`, `<figcaption>`, button text, link text.
2. `aria-labelledby`**:** references visible text already on the page by `id`. Preferred when visible text exists.
3. `aria-label`**:** use only when no visible text is available (e.g. an icon-only button). The value must match or begin with any visible text on the element (label-in-name requirement).

Do not use `aria-label` to override or contradict visible text.

```
<!-- Icon-only button: use aria-label --> <button type="button" aria-label="Close dialog">  <svg aria-hidden="true" focusable="false">...</svg> </button> <!-- Label via aria-labelledby (preferred when visible text exists) --> <h2 id="billing-heading">Billing address</h2> <form aria-labelledby="billing-heading">...</form>
```

#### Roles

Prefer native HTML elements over ARIA roles. When a custom component is unavoidable:

- Assign the correct ARIA role (e.g. `role="dialog"`, `role="tab"`, `role="combobox"`).
- Do not add roles to native elements that already carry the correct role (e.g. do not add `role="button"` to `<button>`).
- Ensure required owned elements and required context are present (e.g. `role="option"` must be inside `role="listbox"`).

#### State

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

**`aria-pressed` requires a true toggle.** Use `aria-pressed` only when pressing the button switches it between an active and inactive state, and the same button press deactivates it. If the button is one of a group where activation is exclusive (pressing it turns it on, but another button turns it off), it is not a toggle. In that case, either use a `role="radio"` group or communicate the active item with `aria-current="true"`. Using `aria-pressed` on a button that cannot be deactivated by its own press misrepresents the interaction to assistive technology.

Use `aria-disabled="true"` instead of the `disabled` attribute when the element should remain focusable, so keyboard users can discover it and understand why it is unavailable. Pair it with a visible explanation where possible.

#### Hiding Content

- `aria-hidden="true"`: removes an element and its children from the accessibility tree. Use for decorative icons, duplicate text, and visually redundant content. Never apply to focusable elements.
- `hidden` or `display: none`: removes content from both visual rendering and the accessibility tree. Use when content is not present.
- Visually hidden but available to screen readers: use a `.visually-hidden` / `.sr-only` CSS class that clips the element without using `display: none` or `visibility: hidden`.

```
.visually-hidden {  position: absolute;  width: 1px;  height: 1px;  padding: 0;  margin: -1px;  overflow: hidden;  clip: rect(0, 0, 0, 0);  white-space: nowrap;  border: 0; }
```

### Keyboard Navigation

- Tab order follows logical visual reading order (top to bottom, left to right).
- Use `tabindex="0"` to include custom elements in the tab order.
- Use `tabindex="-1"` only for programmatic focus management.
- Never use `tabindex` values greater than 0.
- Focus must never leave the visible viewport or be lost.

### Focus Indicators

- All interactive elements must have a visible focus indicator.
- Use `outline: 2px solid` with `outline-offset: 2px` for focus states. Do not rely on the default browser focus ring in environments that apply `outline: 0` or `outline: none`.
- Minimum 3:1 contrast ratio between the focus indicator and the adjacent background.
- Use `:focus-visible` to show focus rings for keyboard users without affecting mouse users.
- Never remove `outline` without an equally visible replacement.

### Focus Management on Dynamic Content

| Pattern           | Required behaviour                                           |
| :---------------- | :----------------------------------------------------------- |
| Modal opens       | Move focus to modal heading. Trap focus inside. Return focus to trigger on close. |
| Menu opens        | Move focus to first item. Return focus to menu button on close. |
| Toast / alert     | Use `role="status"` or `role="alert"` with `aria-live`. Do not move focus. |
| Accordion expands | Focus stays on the header trigger. Do not move it.           |
| SPA navigation    | Move focus to new page heading or `<main>`.                  |

### Live Regions

Use `aria-live` only when all three conditions are true:

1. Content changes dynamically after page load.
2. The change does not result from explicit user navigation.
3. Focus management is not already handling the announcement.

- `role="status"` (`aria-live="polite"`): non-urgent updates such as search result counts and filter feedback.
- `role="alert"` (`aria-live="assertive"`): critical, time-sensitive errors only.
- Set `aria-atomic="true"` only when the whole region should be read as a unit.

### Progress Bars

A static progress bar does not need ARIA roles — its information is best conveyed as text (e.g. "Step 2 of 4" or "60% complete"). If that text is not part of the visual design, include it visually hidden so screen reader users still get it.
```
<div class="progress-track"><div class="progress-fill" style="width: 60%"></div></div>
<span class="visually-hidden">60% complete</span>
```
If the progress bar updates dynamically, use the progressbar role with value attributes so assistive technology announces changes:
```
<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"></div>
```

### Forms

#### Structure and Labels

- Use `<label>` for every input. Associate explicitly with `for`/`id`; do not rely on wrapping alone.
- Use `<fieldset>` and `<legend>` for grouped inputs (radio groups, checkboxes, date field sets, address field sets).
- Never use `placeholder` as a substitute for a `<label>`. Placeholder text disappears on input, has insufficient contrast by default, and is not reliably announced by screen readers. **Exception:** A Search icon is a valid visual label for a search field providing the field has an accessible name e.g. Search.

#### Input Types

- Use the correct `type` attribute: `email`, `tel`, `number`, `date`, `password`, `search`, `url`. This provides appropriate keyboards on mobile and semantic meaning.
- Use `autocomplete` attributes for personal data fields (e.g. `autocomplete="given-name"`, `autocomplete="email"`, `autocomplete="current-password"`). Required by WCAG 1.3.5.

#### Required Fields

- Mark required fields both visually and programmatically.
- Use `required` and `aria-required="true"` on the input.

```
<label for="name">Full name <span aria-hidden="true">*</span></label> <input type="text" id="name" name="name" required aria-required="true" autocomplete="name">
```

#### Hints and Descriptions

- Use `aria-describedby` to associate hints, constraints, or instructions with an input.
- Place the hint element before the error message in the DOM so it is read first.
- Hints must be persistent visible text, not placeholder or tooltip content.

#### Form Error Handling

- Do not rely on browser-native constraint validation (e.g. `required`, `type="email"` default popups). Always provide custom inline error messages.
- Error messages must include the field name and a resolution instruction (e.g. "Enter your first name", not "This field is required").
- Use `aria-invalid="true"` on inputs with validation errors.
- Use `aria-describedby` to associate the error message with the input.
- Error messages must be visible text, not colour or icon alone.
- On submission failure, move focus to the first error or an error summary at the top of the form.
- Do not use `role="alert"` or `aria-live="assertive"` on error containers when focus is already being moved to the error.

```
<label for="email">Email address</label> <input  type="email"  id="email"  name="email"  required  aria-required="true"  aria-invalid="true"  aria-describedby="email-hint email-error" > <p id="email-hint">We'll never share your email.</p> <p id="email-error">Enter a valid email address.</p>
```

#### Disabled and Read-only States

- `disabled`: removes the element from the tab order and prevents interaction. Use only when the field genuinely cannot be used.
- `readonly`: keeps the field focusable and its value submittable. Use when the value is visible but should not be changed.
- Do not mark a field as both `disabled` and `required`.
- Avoid disabling the submit button to signal an incomplete form. Keep it enabled and surface errors on submit instead.

### Drag and Drop
 
Any drag-and-drop interaction (reorderable lists, kanban boards, file sorting, repositioning items) must be fully operable without a pointer drag gesture. Pointer dragging may remain as an enhancement, but it must never be the only way to perform the action.
 
#### Keyboard operation
 
Provide a keyboard-operable mechanism using one of the following patterns. Either pattern must use native `<button>` elements, follow a logical tab order, and have visible focus indicators meeting 3:1 contrast.
 
- **Drag handle with keyboard controls:** Make the handle a focusable native `<button>`. On activation (Enter or Space) the item enters a "grabbed" state where arrow keys move it between valid positions, Enter or Space drops it, and Escape cancels and returns it to its original position.
- **Move menu / move controls:** Provide a `<button>` (e.g. "Move item") that opens a menu or exposes controls letting the user choose a new position directly (move up, move down, move to top, move to a named target). This is often simpler and more robust than a grabbed state, particularly when moving items between containers.

#### Screen reader feedback
 
The interaction must expose its state and outcome to screen reader users:
 
- Give each draggable item and each drop target an accessible name describing what it is and where it is (e.g. "Task A, item 2 of 5, To Do column").
- Describe the available keys in help text associated with the handle via `aria-describedby` (e.g. "Press Enter to pick up, arrow keys to move, Escape to cancel").
- Announce every meaningful change through a polite live region (`role="status"` / `aria-live="polite"`): pick-up ("Grabbed Task A, position 2 of 5"), each move ("Task A, now position 3 of 5"), drop ("Dropped Task A at position 3 of 5"), and cancel ("Cancelled, Task A returned to position 2 of 5"). Do not use `aria-live="assertive"` for reorder status; assertive is reserved for critical, time-sensitive content.
- Do not move focus to make an announcement; use the live region and keep focus on the item or handle being moved. 
- Do not use `aria-pressed` to convey the grabbed state; communicate it through the live region announcement and `aria-describedby` help text instead.

#### WCAG considerations
 
- **2.5.7 Dragging Movements (AA):** Functionality that uses a dragging movement must also be operable with a single pointer without dragging (e.g. tap to select then tap to place, or up/down controls). The keyboard mechanism above does not by itself satisfy 2.5.7 — also provide a non-dragging pointer path.
- **2.1.1 Keyboard (A):** All functionality available via drag must be available from the keyboard, with no keyboard trap. Escape must always exit the grabbed state.
- **2.5.8 Target Size (AA):** Drag handles and move controls must meet the 24×24px minimum target size.

#### Acceptance
 
- Item can be reordered or moved using the keyboard alone.
- Item can be reordered or moved using single-pointer taps without a drag gesture.
- Grab, move, drop, and cancel are each announced to screen reader users via a polite live region.
- Escape cancels an in-progress move and restores the original position.
- Handles and controls are native buttons with visible focus and adequate target size.

### Colour Contrast (WCAG 2.2 AA)

| Content type                                    | Minimum ratio |
| :---------------------------------------------- | :------------ |
| Normal text (below 24px regular / 18.66px bold) | 4.5:1         |
| Large text (24px+ regular / 18.66px+ bold)      | 3:1           |
| UI components (borders, focus indicators)       | 3:1           |
| Meaningful icons and graphical objects          | 3:1           |

Form field borders and focus states are frequent failure points. Always check both explicitly. Verify every pair using the Colour Contrast Workflow below.

### Alternative Text

| Image type                         | Requirement                                                  |
| :--------------------------------- | :----------------------------------------------------------- |
| Decorative                         | `alt=""` (empty string; do not omit the attribute)           |
| Informative                        | Describe the information conveyed, not the image literally   |
| Functional (inside link or button) | Describe the action or destination                           |
| Complex (chart, diagram)           | Use `aria-describedby` pointing to a nearby detailed text description |

### Charts and Data Visualisations

A chart is a complex image; the visual alone is never sufficient.

Unless an interactive chart is explicitly requested, mark the chart (`<svg>`/`<canvas>`/wrapper) `aria-hidden="true"` and provide the data as the accessible equivalent: a marked-up `<table>` (see Tables) for exact values, or a text summary stating the takeaway (e.g. "Revenue rose steadily from Q1 to Q4, peaking at $1.2M") when the trend matters more. Place it adjacent to the chart or in a `<details>` disclosure directly after. The table or summary must be readable on its own, not gated behind hover or mouse-only controls. Give the chart a visible heading or `<figcaption>` for sighted context; the accessible name lives on the table `<caption>` or summary.

The chart must still work visually: distinguish series without relying on colour alone (1.4.1) using labels, patterns, or markers; meet 3:1 for meaningful data elements (1.4.11) and text contrast (4.5:1, or 3:1 large) for labels, axes, and legends.

If an interactive chart is explicitly requested, the chart cannot be `aria-hidden`: each focusable point needs a visible focus indicator and an accessible name conveying its value, still provide the data table, and respect `prefers-reduced-motion`.

### Responsive Layout (WCAG 2.2 1.4.10 Reflow)

Content must reflow without loss of information or functionality at a viewport width of 320 CSS pixels (vertical scrolling) or a height of 256 CSS pixels (horizontal scrolling). Users must not be required to scroll in two dimensions to read or interact with content. Tables, complex data visualisations, maps, and toolbars are exempt where 2D layout is essential to usage or meaning.

#### Layout rules

- Set `<meta name="viewport" content="width=device-width, initial-scale=1">` in `<head>`.
- Use relative units (`%`, `rem`, `em`, `vw`, `ch`) for widths, padding, and font sizes. Avoid fixed pixel widths on layout containers.
- Build layouts with Flexbox or CSS Grid. Use `flex-wrap: wrap`, or Grid with `repeat(auto-fit, minmax(<min>, 1fr))`, so columns collapse at narrow widths.
- Stack horizontal navigation, toolbars, button groups, and multi-column forms vertically at narrow widths (use a media query around 600–768px).
- Allow long strings (URLs, IDs, codes, email addresses) to break with `overflow-wrap: anywhere` or `word-break: break-word`. Long unbreakable strings are a common cause of 320px overflow.
- Avoid horizontal-only scrolling regions for primary content. If a data table or diagram genuinely requires 2D layout, wrap it in a focusable scroll container so keyboard users can reach it:

<div role="region" aria-label="Quarterly sales data" tabindex="0" style="overflow-x: auto;">   <table>...</table> </div>

- Hide nothing at small widths that is available at large widths. Collapsing into a menu is acceptable; removing content is not.

---
 
## Acceptance Criteria
 
Generated code passes these checks before being presented to the user:
 
- [ ] Page has a descriptive `<title>` and correct `lang` attribute
- [ ] Landmark regions are present and correctly used
- [ ] Heading hierarchy is logical with no skipped levels
- [ ] All interactive elements have an accessible name, role, and state
- [ ] Tab order is logical; no `tabindex` values greater than 0
- [ ] Focus indicators are visible and meet 3:1 contrast
- [ ] Focus is managed correctly for modals, menus, and dynamic content
- [ ] Live regions are used only where needed and are not duplicated
- [ ] All form inputs have labels; grouped inputs use `<fieldset>`/`<legend>`
- [ ] Form errors include the field name and resolution instruction
- [ ] `aria-invalid` and `aria-describedby` are applied on validation failure
- [ ] All meaningful images have appropriate alt text; decorative images use `alt=""`
- [ ] Text contrast meets 4.5:1 (normal) or 3:1 (large text / UI components)