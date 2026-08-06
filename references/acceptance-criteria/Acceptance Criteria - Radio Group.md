---
title: "Acceptance Criteria: Radio Group"
metadata:
  author: Intopia
  version: "1.0"
---
A radio group is a set of related radio buttons where users can select exactly one option at a time.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### **Labels and messaging**

*   The radio group has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The radio group’s label provides a descriptive label for radio buttons in the group.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   The radio button has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The radio button’s label describes the purpose of the radio button.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The radio group's error message concisely and precisely describes the issue.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.1 Error Identification

*   The error message tells the user how to fix the error.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.3 Error Suggestion

*   There is an accessible visual indicator to identify when the radio group is required.

    *   **Type:** Best Practice

*   There is an accessible visual indicator to identify when the radio button is disabled.

    *   **Type:** Best Practice

### **Semantic markup**

*   Each radio button has the radio role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The radio buttons are grouped programmatically, and the group role is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The radio group’s visible label is the accessible name for the radio group in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The error message is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The radio group's required state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The radio button’s disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The radio button’s checked and not checked state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### **Keyboard**

*   The radio buttons are focusable using the keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   The radio buttons can be checked using a keyboard, and when a radio button is checked, the other radio buttons in the group are automatically deselected.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   When a radio button is focused using the keyboard, the Left and Right or Up and Down arrow keys move focus between radio buttons within the same group, and the currently focused radio button is automatically selected (and any previously selected button is deselected).

    *   **Type:** Best Practice

### **Visual design**

*   The error state does not use colour as the only method to indicate an error.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Color

*   The radio button’s outline and checked state has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

### **Adaptive UI**

*   The radio group can be viewed at smaller screen widths (320px) without loss of content or functionality, and the user does not have to scroll horizontally to use them.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
