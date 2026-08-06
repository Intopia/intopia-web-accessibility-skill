---
title: "Acceptance Criteria: Menu button"
metadata:
  author: Intopia
  version: "1.0"
---
A menu button is an interactive element that, when activated, opens a menu of actions, commands, or navigation links. It is typically styled as a button with a visual indicator, such as a downward-pointing arrow, to suggest its menu-triggering functionality.

In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### **Semantic markup**

*   The menu button has `aria-haspopup` set to `menu` or `true`.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The menu button's expanded or collapsed state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu has the menu role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The menu button has `aria-controls` set to the `id` of the menu popup element.

    *   **Type:** Best Practice

### **Keyboard**

*   When the menu button is activated by Enter or Space, the menu opens and keyboard focus moves to the first menu item.

    *   **Type:** Best Practice

### **Adaptive UI**

*   The menu can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
