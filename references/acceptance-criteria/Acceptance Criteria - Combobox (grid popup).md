---
title: "Acceptance Criteria: Combobox (grid popup)"
metadata:
  author: Intopia
  version: "1.0"
---
An editable combobox that presents its suggestions in a grid instead of a flat list, so each suggestion can carry descriptive information in additional columns (for example a name column and a category column). Typing filters the suggestions as for list autocomplete.

In addition to acceptance criteria for combobox and combobox (list autocomplete), the following acceptance criteria apply. Where the base criteria describe the popup's role (listbox) and the suggestions' roles (option), the criteria below replace them.

### **Semantic markup**

*   The combobox indicates that its popup is a grid (aria-haspopup="grid").

    *   **Type:** Best practice

*   The popup's role (grid) is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each suggestion's role (row) is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each piece of information within a suggestion has the gridcell role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### **Keyboard**

*   Pressing the up and down arrow keys moves visual focus between suggestion rows. When focus is on the first or last row, focus does not move.

    *   **Type:** Best practice

*   Pressing the left and right arrow keys moves visual focus between the cells of a suggestion. When focus is on the first or last cell of a row, focus does not move.

    *   **Type:** Best practice

*   Pressing the Enter key sets the combobox's value to the content of the first cell in the focused row and closes the popup.

    *   **Type:** Best practice
