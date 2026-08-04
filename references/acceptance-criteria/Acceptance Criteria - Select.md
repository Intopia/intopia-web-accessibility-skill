---
title: "Acceptance Criteria: Select"
metadata:
  author: Intopia
  version: "1.0"
---
A select is a form control that lets users choose a single option from a predefined list.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### **Labels and messaging**

*   The select has a permanent visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The select's label describes the purpose of the select.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   The select has a description that helps people choose the right option.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify when the select is required.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify when the select is disabled.

    *   **Type:** Best Practice

*   When the select has invalid data, the error message concisely and precisely describes the issue.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.1 Error Identification

*   The error message includes how to fix it where possible.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.3 Error Suggestion

*   The error message is close to the select.

    *   **Type:** Best Practice

### **Semantic markup**

*   The select has the combobox role in the accessibility tree. Note, a native single-option `<select>` exposes the combobox role; a select that allows multiple options (`multiple`, or a `size` greater than 1) exposes the listbox role instead.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The accessible description is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The select's expanded or collapsed state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The required state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The error message is the accessible description and included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The option's role is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The option's value is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The select's value is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### **Keyboard**

*   The select is focusable using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   People can select an option from the dropdown using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   When the select has focus and the dropdown is closed, pressing the up and down arrow keys on the keyboard changes the selected option.

    *   **Type:** Best Practice

*   Pressing Enter or Space key on the keyboard opens the dropdown.

    *   **Type:** Best Practice

*   Pressing the up and down arrow keys on the keyboard when the dropdown is open, navigates the list of options.

    *   **Type:** Best Practice

*   Pressing the Enter key on the keyboard when the dropdown is open, selects the focused option.

    *   **Type:** Best Practice

*   Pressing Escape on the Keyboard when the dropdown is open, closes the dropdown.

    *   **Type:** Best Practice

*   Pressing Tab key to navigate away from the select, closes the dropdown.

    *   **Type:** Best Practice

*   Focusing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.1 On Focus

*   Choosing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.2 On Input

*   The select's options have a clear focus style when they receive focus using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.7 Focus Visible

### **Visual design**

*   If the select's options use a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

*   The select's outline and up or down arrow has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

### **Adaptive UI**

*   The select can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
