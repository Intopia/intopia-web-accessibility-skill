---
title: "Acceptance Criteria: Checkbox Group"
metadata:
  author: Intopia
  version: "1.0"
---
A checkbox group is a related set of checkboxes that allows users to select one, many, or no options from the group.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### **Labels and messaging**

*   The checkbox group has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The checkbox's group label provides a descriptive label for checkboxes in the group.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   The checkbox has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The checkbox's label describes the purpose of the checkbox.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   The error message concisely and precisely describes the issue.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.1 Error Identification

*   The error message includes how to fix it where possible.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.3 Error Suggestion

*   The error message is close to the checkbox.

    *   **Type:** Best Practice

*   There is an accessible visual indicator to identify when the checkbox is required.

    *   **Type:** Best Practice

*   There is an accessible visual indicator to identify when the checkbox is disabled.

    *   **Type:** Best Practice

### **Semantic markup**

*   Each checkbox has the checkbox role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The checkbox is part of a group. The group role is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The checkbox's group label is the accessible name for the checkbox group in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The checkbox's checked and not checked state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The error message is programmatically associated with the checkbox and is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The checkbox's required state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The checkbox's disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

### **Keyboard**

*   The checkbox is focusable using the keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   The checkbox can be checked and unchecked using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

### **Visual design**

*   The checkbox’s outline and checked state has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

*   The error state does not use colour as the only method to indicate an error.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Color

### **Adaptive UI**

*   The checkbox can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use them.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
