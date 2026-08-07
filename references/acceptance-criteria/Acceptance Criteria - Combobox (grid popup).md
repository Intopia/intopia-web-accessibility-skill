---
title: "Acceptance Criteria: Combobox (grid popup)"
metadata:
  author: Intopia
  version: "1.0"
---
An editable combobox that presents its options in a grid instead of a flat list, so each option can carry descriptive information in additional columns (for example a name column and a category column). Typing filters the options as for list autocomplete.

In addition to acceptance criteria for combobox and combobox (list autocomplete), the following acceptance criteria apply. Where the base criteria describe the popup's role (listbox) and the options' roles (option), the criteria below replace them.

### **Semantic markup**

*   The combobox indicates that its popup is a grid (aria-haspopup="grid").

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The popup has the grid role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each option has the row role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each piece of information within an option has the gridcell role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### **Keyboard**

*   Pressing the up and down arrow keys moves visual focus between option rows. When focus is on the first or last row, focus does not move.

    *   **Type:** Best practice

*   Pressing the left and right arrow keys moves visual focus between the cells of an option. When focus is on the first or last cell of a row, focus does not move.

    *   **Type:** Best practice

*   Pressing the Enter key sets the combobox's value to the content of the first cell in the focused row and closes the popup.

    *   **Type:** Best practice
