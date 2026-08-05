---
title: "Acceptance Criteria: Combobox (list and inline autocomplete)"
metadata:
  author: Intopia
  version: "1.0"
---
A combobox with both list and inline autocomplete behaves like list autocomplete with automatic selection, plus an inline completion string: the remainder of the highlighted suggestion is appended after the typing cursor in the field.

In addition to acceptance criteria for combobox and combobox (list autocomplete) including its "with automatic selection" criteria, the following acceptance criteria apply.

### **Semantic markup**

*   The combobox indicates that it provides both list and inline autocomplete (aria-autocomplete="both").

    *   **Type:** Best practice

### **Keyboard**

*   The inline completion string is rendered as selected text so that continued typing replaces it, letting people ignore the suggestion and keep typing their own value.

    *   **Type:** Best practice
