---
title: "Acceptance Criteria: Combobox (date picker)"
metadata:
  author: Intopia
  version: "1.0"
---
A date picker combobox is an editable date input whose popup is a modal dialog containing a calendar grid and buttons for navigating by month and year. People can type the date directly or choose it from the calendar.

In addition to the acceptance criteria for combobox:

*   the popup is a modal dialog, so the acceptance criteria for modal dialog apply
*   the popup is not a listbox, so the base criteria for the popup's role (listbox), the suggestions' roles and states (option, aria-selected) and visual focus via aria-activedescendant do not apply
*   DOM focus moves into the dialog while it is open.

### **Labels and messaging**

*   A visible hint states the expected date format, for example "Date format: dd/mm/yyyy".

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

### **Semantic markup**

*   The combobox indicates that its popup is a dialog (aria-haspopup="dialog").

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The combobox indicates that typing does not filter suggestions (aria-autocomplete="none", or the attribute omitted, which is equivalent).

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The date format hint is the combobox's accessible description and included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The calendar has the grid role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The calendar's accessible name is the visible month and year heading.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The day-of-week column headers expose full day names to assistive technology, even when abbreviated visibly (for example "Mo" announced as "Monday").

    *   **Type:** Best practice

*   The selected date's state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The month and year navigation buttons have accessible names included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   When the displayed month or year changes, the change is announced to screen reader users without moving focus.

    *   **Type:** Best practice

### **Keyboard**

*   Pressing the Down arrow key (or Alt and Down arrow) on the combobox opens the dialog.

    *   **Type:** Best practice

*   When the dialog opens, focus moves to the date matching the combobox's value, or to today's date when the field is empty or invalid.

    *   **Type:** Best practice

*   Only one date in the calendar is in the Tab order at a time (roving tabindex), so the Tab key moves between the dialog's controls rather than through every day.

    *   **Type:** Best practice

*   Pressing the left and right arrow keys moves focus a day earlier or later. Pressing the up and down arrow keys moves focus a week earlier or later.

    *   **Type:** Best practice

*   Pressing the Home and End keys moves focus to the first and last day of the current week.

    *   **Type:** Best practice

*   Pressing the Page Up and Page Down keys shows the previous and next month. With the Shift key held, they show the previous and next year.

    *   **Type:** Best practice

*   Pressing the Enter key on a date selects it, updates the combobox's value, closes the dialog and returns focus to the combobox.

    *   **Type:** Best practice

*   Pressing the Space key on a date selects it and updates the combobox's value without closing the dialog.

    *   **Type:** Best practice

*   Pressing the Escape key closes the dialog without changing the combobox's value and returns focus to the combobox.

    *   **Type:** Best practice

### **Visual design**

*   The selected date and today's date are identified by more than colour alone, for example a border or a text label.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Colour
