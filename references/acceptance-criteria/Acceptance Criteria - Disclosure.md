---
title: "Acceptance Criteria: Disclosure"
metadata:
  author: Intopia
  version: "1.0"
---
A disclosure is a button that shows or hides a section of related content.

### Labels and messaging

*   The disclosure button has a visible label that describes the content it shows or hides.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### Semantic markup

*   The disclosure button's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
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

*   The disclosure button is focusable using the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard

*   When the disclosure button is activated, focus stays on the disclosure button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order

*   When focus is on the disclosure button and the content is collapsed, pressing Enter or Space expands the content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When focus is on the disclosure button and the content is expanded, pressing Enter or Space collapses the content.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The disclosure button has a focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
### Visual design

*   A visual indicator (for example, an arrow icon) shows whether the content is expanded or collapsed.
    
    *   **Type:** Best Practice
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   If a visual indicator icon is used, it has a minimum contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   If the disclosure button uses a custom focus style, the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### Adaptive UI

*   The disclosure can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing
