---
title: "Acceptance Criteria: Select"
metadata:
  author: Intopia
  version: "1.0"
---
A select is a form control that lets users choose a single option from a predefined list.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging
- The select has a permanent visible label. (WCAG 3.3.2)
- The select's label describes the purpose of the select. (WCAG 2.4.6)
- The select has a description that helps people choose the right option. (WCAG 3.3.2)
- There is a visible way to identify when the select is required. (WCAG 3.3.2)
- There is a visible way to identify when the select is disabled. (BP)
- When the select has invalid data, the error message concisely and precisely describes the issue. (WCAG 3.3.1)
- The error message includes how to fix it where possible. (WCAG 3.3.3)
- The error message is close to the select. (BP)

### Semantic markup
- The select has the combobox role in the accessibility tree. Note, a native single-option `<select>` exposes the combobox role; a select that allows multiple options (`multiple`, or a `size` greater than 1) exposes the listbox role instead. (WCAG 4.1.2)
- The accessible description is included in the accessibility tree. (WCAG 1.3.1)
- The select's expanded or collapsed state is included in the accessibility tree. (WCAG 4.1.2)
- The required state is included in the accessibility tree. (WCAG 1.3.1)
- The disabled state is included in the accessibility tree. (WCAG 1.3.1)
- The error message is the accessible description and included in the accessibility tree. (WCAG 1.3.1)
- The option's role is included in the accessibility tree. (WCAG 4.1.2)
- The option's value is included in the accessibility tree. (WCAG 4.1.2)
- The select's value is included in the accessibility tree. (WCAG 4.1.2)
### Keyboard
- The select is focusable using a keyboard. (WCAG 2.1.1)
- People can select an option from the dropdown using a keyboard. (WCAG 2.1.1)
- When the select has focus and the dropdown is closed, pressing the up and down arrow keys on the keyboard changes the selected option. (BP)
- Pressing Enter or Space key on the keyboard opens the dropdown. (BP)
- Pressing the up and down arrow keys on the keyboard when the dropdown is open, navigates the list of options. (BP)
- Pressing the Enter key on the keyboard when the dropdown is open, selects the focused option. (BP)
- Pressing Escape on the Keyboard when the dropdown is open, closes the dropdown. (BP)
- Pressing Tab key to navigate away from the select, closes the dropdown. (BP)
- Focusing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal. (WCAG 3.2.1)
- Choosing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal. (WCAG 3.2.2)
- The select's options have a clear focus style when they receive focus using a keyboard. (WCAG 2.4.7)
### Visual design
- If the select's options use a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
- The select's outline and up or down arrow has a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
### Adaptive UI
- The select can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it. (WCAG 1.4.10)
