---
title: "Acceptance Criteria: Disclosure"
metadata:
  author: Intopia
  version: "1.0"
---
A disclosure is a button that shows or hides a section of related content.

In addition to the Interactive Control acceptance criteria (`references/acceptance-criteria/Acceptance Criteria - Interactive Control.md`), the following acceptance criteria apply.

### Labels and messaging

*   The disclosure button has a visible label that describes the content it shows or hides.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup

*   The disclosure button's role of button is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The disclosure button's expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The disclosure button has aria-controls set to the ID of the element containing the disclosed content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   When the content is collapsed, it is not included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   When the content is expanded, it is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   The content comes directly after the disclosure button in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
### Keyboard

*   When the disclosure button is activated, focus stays on the disclosure button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order

*   When focus is on the disclosure button and the content is collapsed, pressing Enter or Space expands the content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When focus is on the disclosure button and the content is expanded, pressing Enter or Space collapses the content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
### Visual design

*   A visual indicator (for example, an arrow icon) shows whether the content is expanded or collapsed.
    
    *   **Type:** Best Practice
        
*   If a visual indicator icon is used, it has a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### Adaptive UI

*   The disclosure can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
