---
title: "Acceptance Criteria: Checkbox Group"
metadata:
  author: Intopia
  version: "1.0"
---
A checkbox group is a related set of checkboxes that allows users to select one, many, or no options from the group.

### **Labels and messaging**

*   The checkbox group has a visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The checkbox's group label provides a descriptive label for checkboxes in the group.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
*   The checkbox has a visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The checkbox's label describes the purpose of the checkbox.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
*   The error message concisely and precisely describes the issue.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.1 Error Identification
        
*   The error message includes how to fix it where possible.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.3 Error Suggestion
        
*   The error message is close to the checkbox.
    
    *   **Type:** Best Practice
        
*   There is an accessible visual indicator to identify when the checkbox is required.
    
    *   **Type:** Best Practice
        
*   There is an accessible visual indicator to identify when the checkbox is disabled.
    
    *   **Type:** Best Practice
        
### **Semantic markup**

*   The checkbox is part of a group. The group role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The checkbox's group label is the accessible name for the checkbox group in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The checkbox's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The checkbox's accessible name includes the exact text from its visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.5.3 Label in Name
        
*   The checkbox's role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value([https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html\))
        
*   The checkbox's checked and not checked state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value([https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html\))
        
*   The error message is programmatically associated with the checkbox and is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships([https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html\))
        
*   The checkbox's required state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships([https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html\))
        
*   The checkbox's disabled state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships([https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html\))
        
### **Keyboard**

*   The checkbox is focusable using the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard([https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html\))
        
*   The checkbox can be checked and unchecked using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard([https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html\))
        
*   The checkbox has a clear focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible([https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html\))
        
### **Visual design**

*   If the checkbox uses a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast([https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html\))
        
*   The checkbox’s outline and checked state has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast([https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html\))
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold). The contrast requirements apply to all of the checkbox’s states (default, checked, focus, hover, error). Note, If the checkbox’s are disabled they do not need to meet contrast requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)([https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html\))
        
*   The error state does not use colour as the only method to indicate an error.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.1 Use of Color([https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html\))
        
### **Adaptive UI**

*   The checkbox can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use them.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow([https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html\))
        
*   The checkbox's label can be increased up to 200% without being truncated, overlapping other text, or being cut off
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text([https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html\))
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing([https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html\))
        
​