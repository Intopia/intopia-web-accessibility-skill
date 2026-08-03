---
title: "Acceptance Criteria: Interactive Control"
metadata:
  author: Intopia
  version: "1.1"
---
An interactive control is a focusable, operable user-interface element such as a button, link, checkbox, radio button, select, or text field. The following acceptance criteria apply to all interactive controls. Each individual control's file lists only the acceptance criteria unique to that control, and points back here for the shared ones.

### **Semantic markup**

*   The control's accessible name is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value.

*   The control's role is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value.

*   The control's accessible name contains the exact text of its visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.5.3 Label in Name.

*   The control's accessible name matches its visible label exactly, or at least starts with the exact text of the visible label, to improve the likelihood of successful speech-interface matches.

    *   **Type:** Best practice

### **Keyboard**

*   The control is focusable using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard.

*   The control has a clear focus style when it receives focus using a keyboard, and the focus style still renders in forced-colours mode (for example, Windows High Contrast Mode). Note that some techniques, such as box-shadow, are not rendered in forced-colours mode and would cause the focus indicator to disappear.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.7 Focus Visible.

*   When the control receives focus using a keyboard, the control is not completely hidden by other content, such as a popup menu or tooltip.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum).

### **Visual design**

*   If the control uses a custom focus style, the focus indicator has a contrast ratio of at least 3:1 against its background colour.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast.

*   All text meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px, or 18.5px and bold). The contrast requirements apply to all of the control's states (default, focus, hover, and, where applicable, checked and error). Note, if the control is disabled it does not need to meet contrast requirements.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.3 Contrast (Minimum).

### **Adaptive UI**

*   The control's text can be increased up to 200% without being truncated, overlapping other text, or overrunning its container.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.4 Resize Text.

*   Text spacing can be increased without text overlapping, truncating, or overrunning its container. See 1.4.12 Text Spacing for exact requirements.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.12 Text Spacing.
