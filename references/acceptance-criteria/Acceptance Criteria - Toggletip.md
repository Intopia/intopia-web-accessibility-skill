---
title: "Acceptance Criteria: Toggletip"
metadata:
  author: Intopia
  version: "1.1"
---
A toggletip is a button with an associated pop-up of short content that shows when you activate the button. It extends the Disclosure pattern (`references/acceptance-criteria/Acceptance Criteria - Disclosure.md`) — apply all of Disclosure's criteria first, then apply the additional toggletip-specific criteria below.

### Labels and messaging

*   The toggletip button has a descriptive visible label (for example, "more info" or a recognisable icon).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup

*   The toggletip button only shows or hides the toggletip content.

    *   **Type:** Best Practice

### Keyboard
                
*   When the toggletip content is expanded, the content can be collapsed by pressing the Escape key.

    *   **Type:** Best Practice

*   When the content is collapsed by pressing the Escape key, focus returns to the toggletip button.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.3 Focus Order

*   The toggletip content is collapsed when keyboard focus moves away from the button.
    
    *   **Type:** Best Practice
        
### Visual design

*   The toggletip content appears visually when the button is activated.
    
    *   **Type:** Best Practice
