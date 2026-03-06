---
title: "Acceptance Criteria: Tooltip"
metadata:
  author: Intopia
  version: "1.0"
---
A tooltip is a small pop-up that shows extra information when you hover your mouse over an element or focus on it using your keyboard. It gives you a short, helpful explanation or more context about the item you're looking at, without cluttering the main screen.

### **Labels and messaging**

*   The tooltip trigger has a visible label (icon or text) that describes its purpose.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels (A)
        
### **Semantic markup**

*   The tooltip content's role of `tooltip` is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value (A)
        
*   The tooltip content is programmatically associated with its trigger using `aria-describedby`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships (A)
        
*   The tooltip content is programmatically hidden when not active and becomes programmatically visible when the trigger is activated.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus (AA)
        
*   The tooltip trigger's role of button is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value (A)
        
*   The tooltip trigger's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value (A)
        
### **Keyboard**

*   The tooltip trigger is focusable and operable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard (A)
        
*   The tooltip content is dismissible by pressing the Escape key, moving keyboard focus away, or clicking outside of it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus (AA)
        
### **Visual design**

*   The tooltip content remains visible when the mouse cursor moves from the trigger to the tooltip content itself.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus (AA)
        
*   All text within the tooltip component (trigger label, content text) meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   Interactive icons (e.g., the tooltip trigger icon) have a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast)
        
*   If the tooltip trigger uses a custom focus style, the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast)
        
### **Adaptive UI**

*   Text within the tooltip component can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text (AA)
        
*   The tooltip component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. tab elements or panels should reflow or stack as needed.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text spacing within the tooltip component can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing (AA)