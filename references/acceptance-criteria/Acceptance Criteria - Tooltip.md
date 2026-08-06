---
title: "Acceptance Criteria: Tooltip"
metadata:
  author: Intopia
  version: "1.0"
---
A tooltip is a small pop-up that shows extra information. The tooltip is only shown when you hover over a trigger interactive control or focus on the trigger using your keyboard. The tooltip is supporting content: the interactive control has its own function, separate from showing the tooltip.

### Semantic markup

*   The tooltip content's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The tooltip content's role of tooltip is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   When the tooltip content is visible, it is in the accessibility tree.

    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The tooltip content is programmatically associated with its trigger using aria-describedby.
    
    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships
        
### Keyboard

*   The tooltip content is visible when the interactive control has focus.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard

*   The tooltip content is visible when the interactive control is hovered over.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus

*   The tooltip content is dismissible by pressing the Escape key or clicking outside of it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus
        
### Visual design

*   The tooltip content remains visible when the mouse cursor moves from the trigger to the tooltip content itself.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus

### Adaptive UI
    
*   The tooltip content can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
