---
title: "Acceptance Criteria: Link"
metadata:
  author: Intopia
  version: "1.0"
---
A link is an interactive element that takes users to another resource, location, page, or state.

### Labels and messaging

*   The link informs users where the link goes to.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.4 Link Purpose (In Context)
        
*   The link informs users when it is for the current page or step.
    
    *   **Type:** Best Practice
        
### **Semantic markup**

*   The link's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The link's accessible name matches its visible label exactly, or at least starts with the exact text of the visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.5.3 Label in Name
        
*   When the current state is communicated visually, then the state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The link's role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
### **Keyboard**

*   The link is focusable using the Tab key on the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The link is activated by pressing the Enter key on the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The link has a clear focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
*   When the link receives focus using a keyboard, the link is not completely hidden by other content, such as a popup menu or tooltip.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum)
        
### **Visual design**

*   The link does not look like plain text.
    
    *   **Type:** Best Practice
        
*   The link does not rely on color alone to indicate it is a link (e.g., it is underlined, bold, or uses an icon).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.1 Use of Color
        
*   The link meets the minimum contrast ratio of 4.5:1 against the background color, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   If the link uses a custom focus style, then the focus style has a contrast ratio of 3:1 against the background color.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### **Adaptive UI**

*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing