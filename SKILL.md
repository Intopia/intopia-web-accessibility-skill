---
name: intopia-web-accessibility
description: Build accessible web user interfaces that meet WCAG 2.2 Level AA. Use whenever generating HTML, CSS, JSX, TSX, React, Vue, or Svelte components, pages, forms, modals, or email templates - including small snippets.
user-invocable: true
metadata:
  author: Intopia
  version: "2.1"
---

## Overview

Apply these accessibility principles whenever generating or modifying UI code. The goal is interfaces usable by people of all abilities, without workarounds.

## Instructions

1. Identify each UI component **and which cross-cutting topics** the user's request touches (forms, keyboard/focus, images/charts, drag and drop, live regions, responsive layout, structure/semantics, colour).
2. Read `INDEX.md`. For every component identified, load the linked acceptance criteria file (and code example file, if one exists). For every applicable topic, load its file from `references/topic/` via the **Topic Index**. These are authoritative - do not generate code without consulting them.
3. If colour values are involved, consult `references/colour-contrast/Colour Contrast Reference.md`.
4. Apply the Universal Rules below to fill any gaps not covered by the component or topic references.
5. Generate the code.
6. After presenting the code, list the specific accessibility decisions made, one line per component or pattern (e.g. "Modal: focus moves to heading on open, trapped while open, returns to trigger on close").
---

## Universal Rules (always apply)

These rules apply to every generation regardless of which topics are loaded. Load the relevant topic file (see the Topic Index in `INDEX.md`) for the detail behind each.

- Use semantic HTML first; use elements for their intended purpose. See `references/topic/Topic - Structure and Semantics.md`.
- Use ARIA sparingly; never add a role a native element already has. See `references/topic/Topic - Structure and Semantics.md`.
- Every interactive element has an accessible name, correct role, and current state.
- Tab order follows visual reading order; never use `tabindex` greater than 0; focus is never lost or moved off-screen. See `references/topic/Topic - Keyboard and Focus.md`.
- All interactive elements have a visible focus indicator with at least 3:1 contrast.
- Manage focus for dynamic content (modals, menus, SPA navigation). See `references/topic/Topic - Keyboard and Focus.md`.
- Text and UI contrast meets 4.5:1 (normal text) or 3:1 (large text and UI components). See `references/colour-contrast/Colour Contrast Reference.md`.
- Never convey meaning by colour alone.
