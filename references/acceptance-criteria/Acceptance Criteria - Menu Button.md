---
title: "Acceptance Criteria: Menu button"
metadata:
  author: Intopia
  version: "1.0"
---
A menu button is an interactive element that, when activated, opens a menu of actions, commands, or navigation links. It is typically styled as a button with a visual indicator, such as a downward-pointing arrow, to suggest its menu-triggering functionality.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### **Labels and messaging**

*   The menu button has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The menu button's label describes its purpose (for example, "Account", "Settings", "Add to cart").

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   If the menu button uses an icon without visible text, the icon is recognisable, or its purpose is conveyed via a tooltip on hover and focus. See the Tooltip acceptance criteria.

    *   **Type:** Best Practice

### **Semantic markup**

*   The menu button's accessible name is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu button has the button role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu button has `aria-haspopup` set to `menu` or `true`.

    *   **Type:** Best Practice

*   The menu button's expanded or collapsed state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu popup has the menu role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu button has `aria-controls` set to the `id` of the menu popup element.

    *   **Type:** Best Practice

### **Keyboard**

*   The menu button is activated by pressing the Enter or Space key on the keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   When the menu button is activated by Enter or Space, the menu opens and keyboard focus moves to the first menu item.

    *   **Type:** Best Practice

### **Adaptive UI**

*   The menu button can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
