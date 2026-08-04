---
title: "Acceptance Criteria: Toggletip"
metadata:
  author: Intopia
  version: "1.0"
---
A toggletip is a button with an associated pop-up of short content that shows when you activate the button.

### Labels and messaging

*   The toggletip button has a descriptive visible label (for example, "more info" or a recognisable icon).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup


*   The toggletip content's expanded or collapsed state is on the button in the accessibility tree.

    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The toggletip button has an aria-controls attribute set to the ID of the element containing the toggletip content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   When the toggletip content is collapsed, it is not in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   When the toggletip content is expanded, it comes directly after the toggletip button in the accessibility tree.
    
    *   **Type:** WCAG

        **Success Criteria:** 1.3.2 Meaningful Sequence

*   The toggletip button only shows or hides the toggletip content.

    *   **Type:** Best Practice

### Keyboard
                
*   When the toggletip content is expanded, it can be collapsed by pressing the Escape key.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus
        
*   The toggletip content is collapsed when keyboard focus moves away from the button.
    
    *   **Type:** Best Practice
        
*   When the toggletip button is activated, focus stays on the toggletip button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
        
### Visual design

*   The toggletip content appears visually when the button is activated.
    
    *   **Type:** Best Practice
    
*   Icons (for example, the toggletip button icon) have a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### Adaptive UI

*   Text within the toggletip component can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   The toggletip component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text spacing within the toggletip component can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing