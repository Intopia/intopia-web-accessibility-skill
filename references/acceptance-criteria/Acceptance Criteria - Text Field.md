---
title: "Acceptance Criteria: Text Field"
metadata:
  author: Intopia
  version: "1.0"
---
A text field is an input control that allows users to enter and edit free-form text.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging

*   The text field has a permanent visible label. It does not use placeholder text for its label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The text field's label describes the purpose of the text field.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   The text field has a description that provides information that helps users enter the right data.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify the text field is required.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify when the text field is disabled.

    *   **Type:** Best Practice

*   When the text field has invalid or missing data, then a descriptive error message is displayed close to the field.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.1 Error Identification

### Semantic markup

*   The text field’s value is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The accessible description is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The required state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The text field has appropriate autocomplete suggestions when it receives focus.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.5 Identify Input Purpose

*   The text field shows the default on-screen keyboard when focused on a mobile device.

    *   **Type:** Best Practice

*   The error message is the accessible description and included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

### Keyboard

*   The text field is focusable using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   People can enter a value into the text field using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   People can focus onto the text field without unexpectedly losing context.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.1 On Focus

*   People can enter or change values into the text field without unexpectedly losing context.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.2 On Input

### Visual design

*   The text field’s outline has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

### Adaptive UI

*   The text field can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
