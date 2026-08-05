---
title: "Acceptance Criteria: Combobox (no autocomplete)"
metadata:
  author: Intopia
  version: "1.0"
---
A combobox without autocomplete shows the same suggestions regardless of what the person types, for example recent searches or a fixed shortlist. People can type any value.

In addition to acceptance criteria for combobox, the following acceptance criteria apply.

### **Labels and messaging**

*   The description tells people they can either choose a suggestion or type their own value.

    *   **Type:** Best practice

### **Semantic markup**

*   The combobox indicates that suggestions are not related to the typed text (aria-autocomplete="none", or the attribute omitted, which is equivalent).

    *   **Type:** Best practice
