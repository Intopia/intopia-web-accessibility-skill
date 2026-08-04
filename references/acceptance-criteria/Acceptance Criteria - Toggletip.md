---
title: "Acceptance Criteria: Toggletip"
metadata:
  author: Intopia
  version: "1.0"
---
A toggletip is a small pop-up that shows extra information when you activate a button.

### Labels and messaging

*   The toggletip button has a descriptive visible label (for example, "more info" or a recognisable icon).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup

*   The toggletip button has a role of button in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The toggletip button has an accessible name in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
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

*   The toggletip button is focusable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The toggletip button is operable using Enter or Space keys.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When the toggletip content is expanded, it can be collapsed by pressing the Escape key.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus
        
*   The toggletip content is collapsed when keyboard focus moves away from the button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.13 Content on Hover or Focus

*   The toggletip button has a visible focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
*   When the toggletip button is activated, focus stays on the toggletip button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
        
### Visual design

*   The toggletip content appears visually when the button is activated.
    
    *   **Type:** Best Practice
        
*   All text within the toggletip component (trigger label, content text) meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   Icons (for example, the toggletip button icon) have a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   If the toggletip button uses a custom focus style, the focus style has a contrast ratio of 3:1 against the background colours.
    
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