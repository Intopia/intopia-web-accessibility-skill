# Reference Index

Locate the relevant files before generating code: match each UI component against the **Component Index**, and each cross-cutting concern against the **Topic Index**. Load what applies, then fall back to the Universal Rules in `SKILL.md` for anything not covered.

## Component Index

Per-component references live in `references/`. A dash (—) means no file exists for that component in that category; fall back to the applicable topic file and the Universal Rules in `SKILL.md`.

**Shared base for interactive controls.** The seven atomic controls (Button, Link, Checkbox, Checkbox Group, Radio Group, Select, Text Field) share a common set of acceptance criteria held in `references/acceptance-criteria/Acceptance Criteria - Interactive Control.md`. Each of those seven files lists only its own unique criteria and points back to the base. **Load-once rule:** if the request includes one or more of these controls, load the Interactive Control base file **once**, then load each identified control's own file for its deltas. Do not re-load the base per control.

| Component | Acceptance Criteria | Code Example |
|---|---|---|
| Accordion *(extends Disclosure)* | `references/acceptance-criteria/Acceptance Criteria - Accordion.md` | — |
| Interactive Control (shared base for the 7 controls below) | `references/acceptance-criteria/Acceptance Criteria - Interactive Control.md` | — |
| Accordion | `references/acceptance-criteria/Acceptance Criteria - Accordion.md` | — |
| Button | `references/acceptance-criteria/Acceptance Criteria - Button.md` | `references/code-example/Code example - Button.md` |
| Checkbox | `references/acceptance-criteria/Acceptance Criteria - Checkbox.md` | — |
| Checkbox Group | `references/acceptance-criteria/Acceptance Criteria - Checkbox Group.md` | — |
| Complex Image (diagram, graph, infographic) | `references/acceptance-criteria/Acceptance Criteria - Complex Image (e.g. diagram, graph, infographic).md` | `references/code-example/Code example - Complex Image (e.g. diagram, graph, infographic).md` |
| Disclosure | `references/acceptance-criteria/Acceptance Criteria - Disclosure.md` | `references/code-example/Code example - Disclosure.md` |
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
| Toggletip *(extends Disclosure)* | `references/acceptance-criteria/Acceptance Criteria - Toggletip.md` | — |
| Tooltip | `references/acceptance-criteria/Acceptance Criteria - Tooltip.md` | — |

- Accordion and Toggletip both build on the Disclosure pattern — load the Disclosure AC file together with theirs; each file lists only its own additional criteria.
- Tooltip builds on the trigger interactive element it is added to. It only lists the additional criteria for the Tooltip content.

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
