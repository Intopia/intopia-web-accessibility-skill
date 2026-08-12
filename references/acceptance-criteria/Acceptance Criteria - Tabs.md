---
title: "Acceptance Criteria: Tabs"
metadata:
  author: Intopia
  version: "1.1"
---
A tab component is a list of tabs (the tab list) with an associated tab panel for each tab, where activating a tab displays its tab panel and hides the others.

In addition to the Interactive Control acceptance criteria (`references/acceptance-criteria/Acceptance Criteria - Interactive Control.md`), the following acceptance criteria apply.

### **Labels and messaging**

*   Each tab has a visible label that describes the content of its associated tab panel.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

### **Semantic markup**

*   The container for the tabs has the tablist role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each tab has the tab role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each tab panel has the tabpanel role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The tab's selected and not selected state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each tab has aria-controls set to the id of its associated tab panel.

    *   **Type:** Best practice

*   Each tab panel's accessible name is included in the accessibility tree, usually by setting aria-labelledby to the id of its controlling tab.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   When a tab panel is selected, it is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.2 Meaningful Sequence

*   When a tab panel is not selected, it is not included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.2 Meaningful Sequence

### **Keyboard**

*   The tabs are operable using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   Only the selected tab is in the page's tab order. All other tabs are removed from the tab order.

    *   **Type:** Best practice

*   When focus is on a tab within the tab list, the Left and Right arrow keys (for horizontal tabs) or the Up and Down arrow keys (for vertical tabs) move focus between tabs.

    *   **Type:** Best practice

*   If the tabs use manual activation, pressing the Enter or Space key on a tab activates it.

    *   **Type:** Best practice

*   When a tab is activated, its associated tab panel is displayed.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   When a tab is activated, focus remains on the activated tab.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.3 Focus Order

### **Visual design**

*   The selected tab does not rely on colour alone to indicate that it is selected.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Color

### **Adaptive UI**

*   The tab component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. Tabs and panels reflow or stack as needed.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
