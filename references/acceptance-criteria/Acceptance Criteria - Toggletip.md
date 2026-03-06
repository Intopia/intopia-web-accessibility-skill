---
title: "Acceptance Criteria: Toggletip"
metadata:
  author: Intopia
  version: "1.0"
---
A toggletip is a small pop-up that shows extra information when you activate a button, typically by clicking it or pressing the Space/Enter key on your keyboard.

### Labels and messaging

*   The toggletip button has a descriptive visible label (for example, "more info" or a recognisable icon).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup

*   The toggletip button has the button role in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The toggletip button has an accessible name in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The toggletip button's expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The toggletip button has aria-controls set to the ID of the element containing the toggletip panel content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   When focus is on the toggletip button and the toggletip panel is collapsed, pressing Enter expands the toggletip panel, and all content in the toggletip panel is included in the accessibility API.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   When focus is on the toggletip button and the toggletip panel is expanded, pressing Enter collapses the toggletip panel, and all content in the toggletip panel is removed from the accessibility API.
    
    *   **Type:** WCAG  
        **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   The content in the toggletip panel comes directly after the toggletip header in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
### Keyboard

*   The toggletip button is focusable using the Tab key.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The toggletip button is operable using Space/Enter keys.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The toggletip content can be dismissed by pressing the Escape key.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus (AA)
        
*   The toggletip content can be dismissed by moving keyboard focus away from the button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus (AA)
        
### Visual design

*   The toggletip content appears visually when the button is activated.
    
    *   **Type:** Best Practice
        
*   The toggletip button uses an icon (for example, an "i" icon).
    
    *   **Type:** Best Practice
        
*   All text within the toggletip component (trigger label, content text) meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   Interactive icons (for example, the toggletip button icon) have a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast)
        
*   If the toggletip button uses a custom focus style, the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast)
        
### **Adaptive UI**

*   Text within the toggletip component can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text (AA)
        
*   The toggletip component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. tab elements or panels should reflow or stack as needed.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text spacing within the toggletip component can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing (AA)