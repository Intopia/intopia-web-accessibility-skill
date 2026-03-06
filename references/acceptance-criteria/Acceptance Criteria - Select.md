---
title: "Acceptance Criteria: Select"
metadata:
  author: Intopia
  version: "1.0"
---
A select is a form control that lets users choose a single option from a predefined list.

### **Labels and messaging**

*   The select has a permanent visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The select's label describes the purpose of the select.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
*   The select has a description that helps people choose the right option.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   There is a visible way to identify when the select is required.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   There is a visible way to identify when the select is disabled.
    
    *   **Type:** Best Practice
        
*   When the select has invalid data, the error message concisely and precisely describes the issue.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.1 Error Identification
        
*   The error message includes how to fix it where possible.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.3 Error Suggestion([https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html\))
        
*   The error message is close to the select.
    
    *   **Type:** Best Practice
        
### **Semantic markup**

*   The select's role (combobox) is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The select's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The accessible description is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The select's expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The required state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The disabled state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The error message is the accessible description and included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The option's role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The option's value is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The select's value is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
### **Keyboard**

*   The select is focusable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   People can select an option from the dropdown using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When the select has focus and the dropdown is closed, pressing the up and down arrow keys on the keyboard changes the selected option.
    
    *   **Type:** Best Practice
        
*   Pressing Enter or Space key on the keyboard opens the dropdown.
    
    *   **Type:** Best Practice
        
*   Pressing the up and down arrow keys on the keyboard when the dropdown is open, navigates the list of options.
    
    *   **Type:** Best Practice
        
*   Pressing the Enter key on the keyboard when the dropdown is open, selects the focused option.
    
    *   **Type:** Best Practice
        
*   Pressing Escape on the Keyboard when the dropdown is open, closes the dropdown.
    
    *   **Type:** Best Practice
        
*   Pressing Tab key to navigate away from the select, closes the dropdown.
    
    *   **Type:** Best Practice
        
*   Focusing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.2.1 On Focus
        
*   Choosing an option does not trigger an unexpected change in context, such as move focus to a new location, load a new page or open a modal.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.2.2 On Input
        
*   The select and the options have a clear focus style when they receive focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
*   When the select receives focus using a keyboard, the select is not completely hidden by other content, such as a popup menu or tooltip.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum)
        
### **Visual design**

*   If the select or the options use a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   The select's outline and up or down arrow has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold). The contrast requirements apply to all of the select’s states (default, focus, hover, error). Note, If the select is disabled it does not need to meet contrast requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
### **Adaptive UI**

*   The select can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without text overlapping, truncating or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing