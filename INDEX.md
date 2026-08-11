# Reference Index

Locate the relevant files before generating code: match each UI component against the **Component Index**, and each cross-cutting concern against the **Topic Index**. Load what applies, then fall back to the Universal Rules in `SKILL.md` for anything not covered.

## Component Index

Per-component references live in `references/`. A dash (—) means no file exists for that component in that category; fall back to the applicable topic file and the Universal Rules in `SKILL.md`.

**Base files (load first).** Some components list only their own unique criteria and build on shared base files. The **Load first** column names those bases; load each one **before** the component's own file, in the order shown. Names in that column are other rows in this table, so load each named component's Acceptance Criteria file. **Load-once rule:** load each base only once, even when several requested components share it. Tooltip is a special case (see the note under the table); Combobox is loaded via its own base file, which routes to the right variant.

| Component | Acceptance Criteria | Load first | Code Example |
|---|---|---|---|
| Interactive Control | `references/acceptance-criteria/Acceptance Criteria - Interactive Control.md` | — | — |
| Accordion | `references/acceptance-criteria/Acceptance Criteria - Accordion.md` | Interactive Control, Button, Disclosure | — |
| Button | `references/acceptance-criteria/Acceptance Criteria - Button.md` | Interactive Control | `references/code-example/Code example - Button.md` |
| Carousel | `references/acceptance-criteria/Acceptance Criteria - Carousel.md` | Interactive Control, Button | — |
| Checkbox | `references/acceptance-criteria/Acceptance Criteria - Checkbox.md` | Interactive Control | — |
| Checkbox Group | `references/acceptance-criteria/Acceptance Criteria - Checkbox Group.md` | Interactive Control, Checkbox | — |
| Combobox (all variants) | `references/acceptance-criteria/Acceptance Criteria - Combobox.md` (its "Choosing a variant" tables route you to the variant file and any extra base) | via base file | `references/code-example/Code example - Combobox.md` |
| Complex Image (diagram, graph, infographic) | `references/acceptance-criteria/Acceptance Criteria - Complex Image (e.g. diagram, graph, infographic).md` | — | `references/code-example/Code example - Complex Image (e.g. diagram, graph, infographic).md` |
| Disclosure | `references/acceptance-criteria/Acceptance Criteria - Disclosure.md` | Interactive Control, Button | `references/code-example/Code example - Disclosure.md` |
| Heading | `references/acceptance-criteria/Acceptance Criteria - Heading.md` | — | `references/code-example/Code example - Heading.md` |
| Image | `references/acceptance-criteria/Acceptance Criteria - Image.md` | — | `references/code-example/Code example - Image.md` |
| Landmark | `references/acceptance-criteria/Acceptance Criteria - Landmark.md` | — | `references/code-example/Code example - Landmark.md` |
| Link | `references/acceptance-criteria/Acceptance Criteria - Link.md` | Interactive Control | `references/code-example/Code example - Link.md` |
| List | `references/acceptance-criteria/Acceptance Criteria - List.md` | — | `references/code-example/Code example - List.md` |
| Menu Button | `references/acceptance-criteria/Acceptance Criteria - Menu Button.md` | Interactive Control, Button | — |
| Modal Dialog | `references/acceptance-criteria/Acceptance Criteria - Modal Dialog.md` | — | — |
| Page Language | `references/acceptance-criteria/Acceptance Criteria - Page Language.md` | — | `references/code-example/Code example - Page language.md` |
| Page Title | `references/acceptance-criteria/Acceptance Criteria - Page Title.md` | — | `references/code-example/Code example - Page Title.md` |
| Radio Group | `references/acceptance-criteria/Acceptance Criteria - Radio Group.md` | Interactive Control | `references/code-example/Code example - Radio Group.md` |
| Select | `references/acceptance-criteria/Acceptance Criteria - Select.md` | Interactive Control | — |
| Table | `references/acceptance-criteria/Acceptance Criteria - Table.md` | — | `references/code-example/Code example - Table.md` |
| Tabs | `references/acceptance-criteria/Acceptance Criteria - Tabs.md` | — | — |
| Text Field | `references/acceptance-criteria/Acceptance Criteria - Text Field.md` | Interactive Control | `references/code-example/Code example - Text Field.md` |
| Toggletip | `references/acceptance-criteria/Acceptance Criteria - Toggletip.md` | Interactive Control, Button, Disclosure | — |
| Tooltip | `references/acceptance-criteria/Acceptance Criteria - Tooltip.md` | trigger control *(see note)* | — |

**Tooltip** builds on whichever trigger control it is added to (Button, Link, and so on, which already pull in Interactive Control), so its base is not fixed. It lists only the additional criteria for the tooltip content. The tooltip content does not contain interactive elements (for example, links, buttons, or form fields); if interactive content is needed, use the Toggletip pattern (`references/acceptance-criteria/Acceptance Criteria - Toggletip.md`) instead.


## Topic Index

Cross-cutting accessibility principles are split into topic files. Load a topic when its trigger applies; more than one usually will.

| Topic | File | Load when... |
|---|---|---|
| Structure and Semantics | `references/topic/Topic - Structure and Semantics.md` | building a page or document structure: landmarks, headings, lists, tables, buttons, links, accessible names, ARIA roles, state, or hiding content |
| Keyboard and Focus | `references/topic/Topic - Keyboard and Focus.md` | any interactive or custom widget, modal, menu, disclosure, tabs, or SPA navigation; anywhere focus moves programmatically |
| Forms | `references/topic/Topic - Forms.md` | any form, input, or control: labels, fieldsets, input types, autocomplete, required fields, hints, validation, disabled/read-only states |
| Live Regions and Status | `references/topic/Topic - Live Regions and Status.md` | dynamic updates after page load (result counts, filter feedback, toasts, status messages) or a progress bar |
| Images and Charts | `references/topic/Topic - Images and Charts.md` | images, icons, figures, charts, graphs, or data visualisations: alt text and accessible equivalents |
| Drag and Drop | `references/topic/Topic - Drag and Drop.md` | reorderable lists, kanban boards, file sorting, or repositioning items |
| Responsive and Reflow | `references/topic/Topic - Responsive and Reflow.md` | page layouts, multi-column structures, navigation, or toolbars that must reflow at small viewport sizes |
| Colour Contrast | `references/colour-contrast/Colour Contrast Reference.md` | any colour values are involved: text, borders, focus indicators, icons, states (including rgba/opacity) |
