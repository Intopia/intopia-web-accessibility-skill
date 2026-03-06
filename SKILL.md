---
name: intopia-web-accessibility
description: Read this skill before building or modifying ANY HTML, CSS, JSX, TSX, React, Vue, or Svelte component, web page, dashboard, form, modal, button, navigation, card, table, poster, or email template — including small snippets. Governs WCAG 2.2 accessibility compliance, semantic HTML, ARIA, keyboard navigation, focus management, and colour contrast validation. Non-negotiable.
metadata:
  author: Intopia
  version: "1.0"
---

# Intopia Accessibility — Guide agents to build accessible components

## MANDATORY — Always Use When Building HTML

This skill MUST be used whenever building ANY HTML including components, pages, forms, modals, navigation, buttons, or layouts.

**Keywords**: accessibility, a11y, WCAG, HTML, forms, modals, buttons, navigation, semantic HTML, ARIA, keyboard navigation, screen readers, web development

---

## Anti-Hallucination Rules (Read These First — They Override Everything)

These rules prevent the most common failure modes. They apply before any workflow step and cannot be waived.

### File access — halt if you cannot read required files

- **INDEX.md:** If you cannot open `INDEX.md` or get no content/error, stop and output exactly:

> `SKILL HALTED: INDEX.md could not be read. I cannot proceed. Please verify the file exists alongside this skill (for example, ./INDEX.md) and retry. Do not ask me to continue using guessed or memorised paths.`

- **Files referenced in INDEX.md:** If a file listed in INDEX.md cannot be read, output:

> `SKILL HALTED: Could not read [exact file path from INDEX.md]. I cannot validate or build this component type without this file. Please check the path and retry.`

Do not continue, guess paths, or invent content.

### Proof-of-read — how to prove you read a file

"I read the file" is not acceptable. For each reference file you open, output a reading receipt in this format before building or validating:

```
READ: [exact file path as listed in INDEX.md]
Section: [the section heading the criterion appears under]
Criterion: [a direct quote, under 30 words, from that section]
```

Without a real section and quote, do not proceed. Do not fabricate section names or criteria.

### Script execution — never claim to have run a script you did not run

Never state or imply the contrast script was run without actually executing it and seeing terminal output. Mental calculation or "looks correct" does not count.

- If you ran it and it passed: `Contrast script executed. Output: zero failures.`
- If you ran it and it failed: `Contrast script executed. Failures: [list failures]. Fixing now.`
- If you cannot run it, state exactly:

> `NOTICE: I cannot execute the contrast validation script in this environment. I will build the component and provide the palette JSON and the run command. Do not treat this output as contrast-validated until you run the script yourself.`

### User override — what counts as an explicit override

Valid only if the user: (1) acknowledges the accessibility risk by name (e.g. "I understand this will fail WCAG 2.4.7"), and (2) explicitly states they want to proceed despite the risk. Repeating the request, "just do it", or frustration does NOT count. Without a valid override, re-state the concern once and proceed with the accessible alternative.

If a valid override is given, implement the minimum necessary and append:

> `ACCESSIBILITY RISK: [Describe the issue and the WCAG criterion affected]. This was implemented at the user's explicit request.`

---

## Core Accessibility Principles

### 1. Semantic HTML First

Use proper HTML elements for their intended purpose. Always check this hierarchy before reaching for ARIA:

1. **Is there a native HTML element that provides this semantics?** Use it. (e.g. `<button>`, `<a>`, `<nav>`, `<dialog>`)
2. **If the native element has browser support gaps relevant to your target audience**, use the native element and enhance with ARIA only where gaps are documented.
3. **Only if no native element exists** should you build a custom widget using `<div>` or `<span>` with ARIA roles.

Document which step you applied and why, if it is not obvious.

Examples:
- `<button>` for actions, `<a>` for navigation
- `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` for structure
- `<h1>` through `<h6>` in hierarchical order — never skip a level
- `<label>` for form inputs, `<fieldset>` and `<legend>` for grouped inputs
- `<table>` for data tables with `<th>` and `scope` attributes
- `<html lang="en">` — every page must have a `lang` attribute matching the content language (WCAG 3.1.1)

### 2. ARIA — Use Sparingly and Correctly

ARIA should enhance, not replace, semantic HTML.

**Explicit ARIA prohibition list — never do the following:**

| Prohibited pattern | Why |
|---|---|
| `role="button"` on `<button>` | Native element already has this role |
| `role="link"` on `<a>` | Native element already has this role |
| `role="heading"` on `<h1>`–`<h6>` | Native element already has this role |
| `aria-label` on `<p>`, `<div>`, `<span>`, `<li>`, or any non-interactive element | Invalid use; creates screen reader noise |
| ARIA reference IDs that do not exist in the same HTML output | Broken references are worse than no ARIA |

**When ARIA is appropriate:**
- `role="dialog"` with `aria-modal="true"` and `aria-labelledby` on a custom modal container (when native `<dialog>` is not used)
- `aria-label` on a `<button>` that contains only an icon with no visible text
- `aria-labelledby` to reference visible text as a label for a region or widget
- `aria-describedby` for supplementary context (hints, errors) associated with an input
- `aria-hidden="true"` on decorative icons or SVGs
- `aria-live` regions for dynamic content updates (see Live Regions section below)
- `aria-disabled` for disabled elements that are focusable

**ARIA reference integrity (mandatory):** Before finalising any HTML, check that every ID referenced in `aria-labelledby`, `aria-describedby`, or `aria-controls` exists in your output. If it does not, either add the element or remove the ARIA attribute.

### 3. Keyboard Navigation

All interactive elements must be keyboard accessible. Apply these rules:

- Tab order must follow the logical visual reading order — top to bottom, left to right
- Use `tabindex="0"` to add a custom element to the tab order
- Use `tabindex="-1"` only for programmatic focus (e.g. moving focus to a modal on open)
- **NEVER use `tabindex` values greater than 0** — this breaks the natural tab order and is very difficult to maintain
- Focus must never leave the visible viewport
- Focus must never be lost (e.g. after closing a modal, focus must return to the trigger element)

**Component keyboard interaction contracts — load the relevant acceptance criteria from INDEX.md for any custom widget, and follow these minimum patterns:**

| Component | Required keyboard behaviour |
|---|---|
| Modal / Dialog | Tab / Shift+Tab cycles within the dialog only (focus trap). Escape closes and returns focus to the trigger. Focus moves to first focusable element inside dialog on open. |
| Menu Button | Enter or Space opens the menu. Arrow Down moves to first item. Arrow Up / Down navigates items. Escape closes and returns focus to the trigger. |
| Custom Tabs | Arrow Left / Right switches between tabs. Tab exits the tab list into the panel. Home / End move to first / last tab. |
| Custom Select / Listbox | Enter or Space opens. Arrow Up / Down navigates options. Escape closes. Home / End jump to first / last. |
| Accordion | Enter or Space toggles a panel. Arrow Up / Down navigates headers (if ARIA pattern is used). |
| Combobox | Typing filters. Arrow Down opens / navigates list. Escape closes. Enter selects. |

For any widget not listed here, load the ARIA Authoring Practices Guide (APG) pattern for that widget before coding. Do not rely on training knowledge for keyboard patterns.

### 4. Focus Management on Dynamic Content

When content is added to or removed from the DOM, focus must be managed explicitly:

- **Modal opens:** Move focus to the first focusable element inside the modal, or to the modal container itself if it has `tabindex="-1"` and a descriptive label
- **Modal closes:** Return focus to the element that triggered the modal
- **Toast / alert appears:** Use `role="status"` or `role="alert"` with an appropriate `aria-live` value — do not move focus to the toast
- **Accordion panel expands:** Focus stays on the accordion header trigger; do not move it
- **Page content updates (SPA navigation):** Move focus to the new page heading or a skip-to-content region

### 5. Live Regions

Live regions are for content that **updates dynamically without user interaction and without a page reload**. They exist to notify screen reader users of changes they cannot see. They are not a general-purpose accessibility enhancer.

**Use `aria-live` only when all three conditions are true:**
1. The content changes dynamically (injected or mutated by JavaScript after page load)
2. The update happens without the user explicitly triggering navigation (i.e. they are not moving focus themselves)
3. The updated content is not already announced through focus management (e.g. a modal opening moves focus, so no live region is needed)

If any condition is false, do not use a live region.

**When NOT to use:** Static content, content the user navigated to (focus already announces), modals (focus handles it), tooltips, or when focus is already managed. Keep the live region around the smallest updated content, not a parent container.

**Politeness levels:**
- `aria-live="polite"` — announces after the screen reader finishes its current speech. Use for non-urgent updates: search result counts, filter feedback, async form hints.
- `aria-live="assertive"` — interrupts the screen reader immediately. Reserve for genuinely urgent, time-sensitive errors only. If in doubt, use polite.

**Prefer semantic roles over raw aria-live:**
- `role="status"` is equivalent to `aria-live="polite"` + `aria-atomic="true"` — use for status messages
- `role="alert"` is equivalent to `aria-live="assertive"` + `aria-atomic="true"` — use for critical errors when focus is sent to the first invalid field

**Do not double-announce:** If an element's role already implies a live region (e.g. `role="dialog"`, `role="alert"`), do not also add `aria-live` to it or to a parent — this causes the message to be read twice.

**aria-atomic:** Set `aria-atomic="true"` when the entire region should be read as a unit when any part changes. Omit it when only the changed portion should be announced.

### 6. Colour Contrast (WCAG 2.2 Level AA)

Text and UI components must have sufficient contrast:

- **Normal text** (below 24px regular or 18.66px bold): 4.5:1 minimum
- **Large text** (24px+ regular or 18.66px+ bold): 3:1 minimum
- **UI components** (form field borders, button borders, focus indicators): 3:1 minimum
- **Graphical objects** (meaningful icons, chart elements): 3:1 minimum
- **Form field borders** are a frequent failure point — always check them explicitly
- **Focus states** are a frequent failure point — always check them explicitly

### 7. Focus Indicators

All interactive elements need a visible focus indicator:

- Do not rely on the default browser focus ring in design systems that apply `outline: 0` or `outline: none` via CSS resets — verify the default is actually visible in the target environment before assuming it is present
- If the default is suppressed or insufficient, implement a custom focus style
- Minimum 3:1 contrast ratio between the focus indicator and the adjacent background
- Use `:focus-visible` to show focus rings for keyboard users without affecting mouse users
- Never remove `outline` without replacing it with an equally visible alternative

### 8. Alternative Text

All meaningful images need text alternatives:

- Decorative images: `alt=""` (empty string, not omitted)
- Informative images: Describe the information conveyed, not the image literally
- Functional images (inside links or buttons): Describe the action or destination
- Complex images (charts, diagrams): Use `aria-describedby` pointing to a detailed text description nearby

### 9. Form Error Handling

Forms must communicate errors accessibly:

- Always include the field name in the error message. Never use generic messages like "This field is required", instead provide a descriptive error that identifies the field by the label and provides an instruction to resolve the error e.g. "Please enter your first name."
- Use `aria-invalid="true"` on an input when it has a validation error
- Use `aria-describedby` on the input to point to the error message element
- Error messages must be visible text — not just colour change or icon alone
- On form submission failure, move focus to the first error or to a summary at the top of the form
- Don't use `role="alert"` or `aria-live="assertive"` on the error message container on forms that set focus on the first invalid field or error summary.

Example (one input + hint + error):
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required aria-required="true" aria-invalid="true" aria-describedby="email-error email-hint">
<p id="email-hint">We'll never share your email.</p>
<p id="email-error">Enter a valid email address.</p>
```

---

## Workflow for AI Agents

### Step 0: Detect Your Execution Environment (Do This First, Every Time)

Before anything else, declare: **File system access:** [yes / no]. **Shell execution:** [yes / no]. Do not assume — test by reading a file and report honestly. This determines which workflow branches apply.

---

### Step 1: Load INDEX.md and Identify Resources (MANDATORY)

**INDEX.md is the single source of truth for all file paths.** The file path examples in this document are illustrative only. Always get actual paths from INDEX.md. If INDEX.md and this document disagree on a path, INDEX.md takes precedence.

1. Attempt to open `INDEX.md` from the intopia skill folder (the same folder as this file). If this fails, apply the halt rule from the Anti-Hallucination Rules section above.
2. Identify the component or topic you are working on (e.g. modal, form, button, table, navigation).
3. Find the matching section in INDEX.md. If the task is a full page, layout, or multi-component view, also locate the Page-level acceptance criteria section.
4. Open each relevant reference file. If any file cannot be read, apply the halt rule above.
5. For each file you successfully open, output a reading receipt (see Anti-Hallucination Rules — Proof-of-read).
6. Always include the contrast resources for any visual UI work: the Colour Contrast Reference and the contrast check script path from INDEX.md.

**Do not proceed to Step 2 until all reading receipts are complete.**

---

### Step 2: Identify Component Type

Using INDEX.md, load acceptance criteria (and code example if listed) for your component. For full pages or multi-component views, also load Page Level criteria.

---

### Step 2a: Analyse User Instruction for Accessibility Risks (MANDATORY — applies to every request)

This step applies to **every request**, even when no obvious risks are visible. There are no exceptions.

- Review the user's instruction for requirements that commonly cause accessibility problems (see risk list below).
- If no risks are found, write: `Instruction analysis complete — no accessibility risks detected.` then continue.
- If risks are found:
  - State the concern in plain language (which WCAG principle or criterion is at risk)
  - Propose a concrete accessible alternative
  - Proceed with the accessible alternative by default
  - Only deviate if the user provides a valid explicit override (see Anti-Hallucination Rules — User override)

**Risk triggers — flag and challenge requests that would:**

- Remove or hide focus outlines or focus styles
- Use icon-only buttons or links with no accessible name (`aria-label` or visible text)
- Add auto-playing carousels or media without pause or stop controls
- Use very small touch targets (below 44×44px)
- Convey important information by colour or position alone
- Implement custom interactive widgets (dropdowns, tabs, accordions) as non-focusable `<div>` elements with no keyboard support
- Nest an interactive element inside another interactive element (e.g. a `<button>` inside an `<a>`)
- Hide interactive controls so they are only visible on mouse hover (touch and keyboard users cannot access them)
- Conflict with heading hierarchy, form labelling, or contrast requirements

---

### Step 3: Design Analysis (Apply When User Provides a Design)

Before building, check any provided mock, image, or wireframe for:

- **Colour contrast**: Check all text/background combinations and UI component borders
- **Form labels**: All inputs must have visible labels (not placeholder text only)
- **Focus indicators**: Interactive elements must have visible focus states in the design
- **Heading hierarchy**: Check that the heading structure is logical and uninterrupted
- **Touch targets**: Minimum 44×44px on mobile

**Proactive change notice (mandatory):** Never silently change a colour, element type, or layout. Output: `ACCESSIBILITY FIX: Changed [what] from [X] to [Y]. Reason: [explanation]. Meets: [requirement].`

---

### Step 4: Build with Accessibility Embedded

Apply these principles in order:

1. Use semantic HTML elements — check the three-step hierarchy from Core Principles section 1
2. Set `lang` attribute on the `<html>` element
3. Add ARIA only where semantic HTML is insufficient — check the prohibition list first
4. Verify all ARIA reference IDs (`aria-labelledby`, `aria-describedby`, `aria-controls`) exist in your output
5. Implement keyboard navigation per the component contract table
6. Implement focus management for any dynamic content
7. Add focus indicators (do not rely on default if CSS resets are present)
8. Associate all form labels with inputs; add error handling with `aria-invalid` and `aria-describedby`
9. Add `alt` text for all images
10. Follow heading hierarchy — no skipped levels

---

### Step 5: Validate Before Presenting

Work through this checklist. Do not present output until every item is confirmed. Do not tick any item without actually verifying it.

- [ ] `<html>` element has a `lang` attribute matching the content language
- [ ] All images have `alt` attributes (`alt=""` for decorative, descriptive text for informative)
- [ ] Every form input has an associated `<label>` (via `for`/`id` or wrapping)
- [ ] Form errors use `aria-invalid`, `aria-describedby`
- [ ] All interactive elements are reachable by keyboard in logical order
- [ ] No `tabindex` values greater than 0 are present
- [ ] Links have descriptive text — no "click here", "read more", or "here"
- [ ] Headings are hierarchical — no levels skipped
- [ ] All ARIA reference IDs exist in the output (aria-labelledby, aria-describedby, aria-controls)
- [ ] No prohibited ARIA patterns from the prohibition list are present
- [ ] Focus management is implemented for any dynamic content (modals, alerts, SPA navigation)
- [ ] Live regions use the correct `aria-live` value (`polite` or `assertive`)
- [ ] Colour contrast meets 4.5:1 for normal text, 3:1 for large text and UI components
- [ ] Form field borders meet 3:1 contrast minimum
- [ ] Focus indicators are visible and meet 3:1 contrast
- [ ] When delivering a full page or multi-component view: page-level acceptance criteria have been applied

---

### Step 6: Run Mandatory Colour Contrast Validation

**This is a required completion gate. Output is not finished until this step is done.**

The approach depends on your environment (declared in Step 0):

**If you have shell / script execution access:**

1. Open `references/colour-contrast/Colour Contrast Reference.md` (path from INDEX.md). Output your reading receipt.
2. Document every colour combination in your component: foreground colour, background colour, element type, and state (default, focus, hover, disabled).
3. Create or update a palette JSON using the template from `assets/colour-contrast-template.json`.
4. Execute the script from the repository root:
   - `node "scripts/check-colour-contrast.js" <path-to-palette.json>`
5. If any failures are reported, fix the colours and re-run. Repeat until the script reports zero failures.
6. State the result: `Contrast script executed. Output: zero failures.`

**If you do NOT have shell / script execution access:**

Output prominently: `CONTRAST NOT VALIDATED. Run: node "scripts/check-colour-contrast.js" <palette.json>.` Then provide the full palette JSON so the user can run it immediately.

**Never tick the contrast checkbox in Step 5 if you are in the no-shell branch.**

---

### Step 7: Apply All Component-Specific Criteria

After completing your reading receipts, apply every criterion from the loaded acceptance criteria files — not just the ones you noticed, all of them. For full pages, apply page-level criteria as well.

Fix any issues before presenting. Do not ask permission.

---

### Step 8: Present Accessible Code

Present only the final, fully accessible version. Include:

- All change notices for any deviation from the user's design or request
- The contrast validation result (or the unvalidated notice and palette JSON)
- Any ACCESSIBILITY RISK notices if a valid user override was applied

---

## Common Patterns and Examples

Load Code Examples from INDEX.md for Button, Landmark, Text Field, and other components. For **modals:** focus trap, focus on first focusable on open, return focus to trigger on close, Escape closes. Load Acceptance Criteria - Modal Dialog from INDEX.md. For **live regions:** use `role="status"` (polite) or `role="alert"` (assertive); avoid double-announce and combining with focus move.

---

## WCAG 2.2 Success Criteria Coverage

**Perceivable:** 1.1.1 (alt), 1.3.1 (semantics, labels), 1.3.2 (order), 1.4.3 (contrast), 1.4.11 (UI contrast). **Operable:** 2.1.1 (keyboard), 2.1.2 (no trap), 2.4.3 (focus order), 2.4.4 (link purpose), 2.4.6 (headings/labels), 2.4.7 (focus visible), 2.5.5 (target size). **Understandable:** 3.1.1 (lang), 3.2.1 (on focus), 3.2.2 (on input), 3.3.1 (error id), 3.3.2 (labels), 3.3.3 (error suggestion). **Robust:** 4.1.2 (name, role, value), 4.1.3 (status messages).

---

## Communication Guidelines

**Good:** Describe changes in plain language (e.g. "modal with focus trap and restoration", "contrast 2.85:1 → 7.0:1", "labels and aria-invalid added"). When challenging a request, state the risk and offer an accessible alternative. **Avoid:** Jargon without context; alarming error counts; silent design changes; ticking checkboxes without verifying.

---

## Critical Rules Summary

1. **Always detect your environment first** — shell access determines your contrast workflow branch
2. **Never fake file reads** — halt and tell the user if INDEX.md or any reference file cannot be opened
3. **Always produce reading receipts** — file path, section heading, and quoted criterion before building
4. **Never fake script execution** — only claim the contrast script passed if you ran it and saw the output
5. **Step 2a is unconditional** — analyse every instruction for accessibility risks, no exceptions
6. **Fix proactively AND announce every fix** — never change a design element silently
7. **Use semantic HTML before ARIA** — check the three-step hierarchy; consult the prohibition list
8. **Implement full keyboard contracts** — use the component table; load APG patterns for unlisted widgets
9. **Manage focus on dynamic content** — modals, alerts, SPA navigation all require explicit focus handling
10. **Validate before presenting** — every checklist item must be confirmed, not assumed

---

## Resource Files

All resource paths are defined in INDEX.md (single source of truth). Paths in this document are illustrative only; INDEX.md takes precedence.

---

## Summary

This skill combines anti-hallucination rules (halt, receipts, no fake script run), environment detection, INDEX.md as source of truth, embedded accessibility principles, component and page-level criteria from references, mandatory contrast validation, and a pre-present checklist. Accessibility is applied by default.
