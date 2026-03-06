---
name: intopia-resource-index
description: Index of Intopia accessibility resources — acceptance criteria by component, code examples, colour contrast reference, and workflow mapping. Use to locate reference files in references/ before building or validating HTML.
metadata:
  author: Intopia
  version: "1.0"
---

# Intopia Accessibility — Resource Index

**Purpose**: Use this index to find relevant resources in the `references/` folder. Before building or reviewing HTML for accessibility, look up the component or topic below and read the listed resource files to apply the correct acceptance criteria and patterns. Colour contrast testing is mandatory before finalising work.

All paths are relative to the folder that contains this index (the repository root).
Example: `references/acceptance-criteria/Acceptance Criteria - Modal Dialog.md`

---

## Environment check — read this first

Some steps in this workflow require filesystem access (opening files) or shell access (running scripts). Before proceeding:

- **If you cannot open files**: You are in a plain-chat environment. Tell the user which files you need and ask them to paste the content directly. Do not proceed as though you read files you cannot open.
- **If you cannot run shell commands**: You cannot execute the contrast script. Tell the user: *"I cannot run the contrast script in this environment. Here is the palette JSON — please run `node check-colour-contrast.js palette.json` and share the results."* Do not report the script as having passed.
- **If a file path returns an error**: Stop. Do not guess at alternative paths or fabricate file content. Tell the user the file could not be found.

---

## How to Use This Index

1. **Identify** the component or topic you are working on (e.g. modal, form, button, table).
2. **Find** the matching section below and note the resource file names. If your task involves more than one component (e.g. a form inside a modal), note the resources for **each** component — you must apply all of them.
3. **Read** those resource files from `references/` before implementing or validating. Also check the **Code Examples** section for a reference implementation of the same component. If one exists, read it alongside the acceptance criteria.
4. **Confirm you read each file** by summarising at least one key criterion from it before proceeding. If you cannot open a file, stop and notify the user.
5. **Apply** the acceptance criteria and code patterns from the resources to complete your task.
6. **Run mandatory colour contrast checks** using:
   - `references/colour-contrast/Colour Contrast Reference.md`
   - `scripts/check-colour-contrast.js`
   - `assets/colour-contrast-template.json` (starting template)

---

## Acceptance Criteria (by component)

Use these when building or validating specific UI components. Each file contains component-specific acceptance criteria.

| Component | Resource file |
|-----------|----------------|
| Accordion | `references/acceptance-criteria/Acceptance Criteria - Accordion.md` |
| Button | `references/acceptance-criteria/Acceptance Criteria - Button.md` |
| Checkbox | `references/acceptance-criteria/Acceptance Criteria - Checkbox.md` |
| Checkbox Group | `references/acceptance-criteria/Acceptance Criteria - Checkbox Group.md` |
| Complex Image (diagram, graph, infographic) | `references/acceptance-criteria/Acceptance Criteria - Complex Image (e.g. diagram, graph, infographic).md` |
| Heading | `references/acceptance-criteria/Acceptance Criteria - Heading.md` |
| Image | `references/acceptance-criteria/Acceptance Criteria - Image.md` |
| Landmark | `references/acceptance-criteria/Acceptance Criteria - Landmark.md` |
| Link | `references/acceptance-criteria/Acceptance Criteria - Link.md` |
| List | `references/acceptance-criteria/Acceptance Criteria - List.md` |
| Modal Dialog | `references/acceptance-criteria/Acceptance Criteria - Modal Dialog.md` |
| Page Language | `references/acceptance-criteria/Acceptance Criteria - Page Language.md` |
| Page Title | `references/acceptance-criteria/Acceptance Criteria - Page Title.md` |
| Radio Group | `references/acceptance-criteria/Acceptance Criteria - Radio Group.md` |
| Select | `references/acceptance-criteria/Acceptance Criteria - Select.md` |
| Table | `references/acceptance-criteria/Acceptance Criteria - Table.md` |
| Tabs | `references/acceptance-criteria/Acceptance Criteria - Tabs.md` |
| Text Field (forms) | `references/acceptance-criteria/Acceptance Criteria - Text Field.md` |
| Toggletip | `references/acceptance-criteria/Acceptance Criteria - Toggletip.md` |
| Tooltip | `references/acceptance-criteria/Acceptance Criteria - Tooltip.md` |

> **Component not listed above?** Do not guess a file path. Say: *"No acceptance criteria file found for [component] in INDEX.md. I will apply general WCAG 2.2 principles only — this component should be added to the index."* Then proceed using your general accessibility knowledge and flag the gap to the user.

---

## Code Examples and Samples

Reference implementations and patterns in `references/code-example/`. Always check this section alongside acceptance criteria — if a code example exists for your component, read it before building.

### Code samples (by component)

| Component | Resource file |
|-----------|----------------|
| Button | `references/code-example/Code example - Button.md` |
| Complex Image | `references/code-example/Code example - Complex Image (e.g. diagram, graph, infographic).md` |
| Heading | `references/code-example/Code example - Heading.md` |
| Image | `references/code-example/Code example - Image.md` |
| Landmark | `references/code-example/Code example - Landmark.md` |
| Link | `references/code-example/Code example - Link.md` |
| List | `references/code-example/Code example - List.md` |
| Page Language | `references/code-example/Code example - Page language.md` |
| Page Title | `references/code-example/Code example - Page Title.md` |
| Radio Group | `references/code-example/Code example - Radio Group.md` |
| Table | `references/code-example/Code example - Table.md` |
| Text Field | `references/code-example/Code example - Text Field.md` |

---

## Reference and Templates

| Resource | File | Notes |
|----------|------|-------|
| General accessibility checklist | `references/checklist/Checklist.md` | Use for general reviews |
| Colour Contrast Reference | `references/colour-contrast/Colour Contrast Reference.md` | **Mandatory** — read before any visual UI work |
| Contrast template | `assets/colour-contrast-template.json` | Starter JSON for contrast checks |
| Contrast script | `scripts/check-colour-contrast.js` | **Mandatory** — must pass before task completion |

---

## Quick Mapping: Skill Workflow → Index

| When building… | Acceptance Criteria file(s) | Code sample? |
|----------------|----------------------------|--------------|
| Forms / inputs | Text Field, Checkbox, Checkbox Group, Radio Group, Select | Text Field, Radio Group |
| Modals / dialogs | Modal Dialog | — |
| Buttons | Button | Button |
| Navigation / menus | Landmark | Landmark |
| Tables | Table | Table |
| Links | Link | Link |
| Images | Image, Complex Image | Image, Complex Image |
| Headings | Heading | Heading |
| Lists | List | List |
| Tabs | Tabs | — |
| Accordion | Accordion | — |
| Tooltip / Toggletip | Tooltip, Toggletip | — |
| Page-level structure | Page Title, Page Language, Landmark |
| **Any component not listed above** | Search Acceptance Criteria table by name. If not found, apply general WCAG 2.2 principles and flag the gap. | Check Code Examples table |

**Colour contrast is mandatory for all visual UI work.** Always read `references/colour-contrast/Colour Contrast Reference.md` and run `scripts/check-colour-contrast.js` before completing any task. Do not mark work as complete until the script reports zero failures — or, if you cannot run the script, provide the palette JSON and instruct the user to run it or test using a colour contrast analyser.