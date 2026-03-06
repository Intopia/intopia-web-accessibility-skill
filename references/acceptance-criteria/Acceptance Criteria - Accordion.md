---
title: "Acceptance Criteria: Accordion"
metadata:
  author: Intopia
  version: "1.0"
---
An accordion is a vertically stacked set of headings that users can expand or collapse to show or hide associated content panels.

### **Labels and messaging**

*   The accordion header has a visible label that describes what it does.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### **Semantic markup**

*   The accordion header’s accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The accordion header’s label has a role of heading in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The accordion header’s role of button is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The accordion header’s expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The accordion header’s button has aria-controls set to the ID of the element containing the accordion panel content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   When focus is on the accordion header and the accordion is collapsed, pressing Enter expands the accordion panel, and all content in the accordion panel is included in the accessibility API.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   When focus is on the accordion header and the accordion is expanded, pressing Enter collapses the accordion panel, and all content in the accordion panel is removed from the accessibility API.
    
    *   **Type:** WCAG  
        **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   The content in the accordion panel comes directly after the accordion header in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
### **Keyboard**

*   The accordion header is focusable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The accordion header has a clear focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
*   When the accordion header is activated, focus stays on the accordion header.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
        
### **Visual design**

*   If the accordion header uses a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   The accordion icon has a minimum contrast ratio of 3:1 against the background color.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### **Adaptive UI**

*   The accordion can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use them.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing