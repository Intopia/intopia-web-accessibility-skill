---
title: "Acceptance Criteria: Combobox (list autocomplete)"
metadata:
  author: Intopia
  version: "1.0"
---
A combobox with list autocomplete filters suggestions to match the typed text. With manual selection (the default and recommended behaviour), the suggestion is not selected automatically. If the user moves away without choosing, the typed text remains as the value (when free text is allowed).

In addition to acceptance criteria for combobox, the following acceptance criteria apply.

### **Labels and messaging**

*   When typing changes the available suggestions, the change is announced to screen reader users without moving focus, for example "12 results available".

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.3 Status Messages

*   When no suggestions match the typed text, this is conveyed to screen reader users without moving focus.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.3 Status Messages

### **Semantic markup**

*   The combobox indicates that suggestions are filtered by the typed text (aria-autocomplete="list").

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### **Keyboard**

*   No suggestion receives visual focus or becomes selected until the person moves into the list with the arrow keys.

    *   **Type:** Best practice

### With automatic selection

As above, except the first matching suggestion is highlighted automatically as the person types, and becomes the value if they close the popup without choosing a different one.

In addition to the acceptance criteria above, the following acceptance criteria apply.

#### **Semantic markup**

*   The automatically highlighted suggestion is exposed as selected in the accessibility tree (aria-selected="true" and referenced by aria-activedescendant), so screen reader users know a value will be committed.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

#### **Keyboard**

*   When the person deletes characters (Backspace or Delete), no suggestion is automatically selected, so they can clear their input without a value being forced on them.

    *   **Type:** Best practice
