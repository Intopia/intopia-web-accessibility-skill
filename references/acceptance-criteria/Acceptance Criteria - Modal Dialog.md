---
title: "Acceptance Criteria: Modal Dialog"
metadata:
  author: Intopia
  version: "1.0"
---
A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert, meaning users cannot interact with content outside an active dialog window. Modal dialogs contain their tab sequence, and typically do not allow keyboard focus to move outside without closing the dialog.

### **Labels and messaging**

*   The modal dialog has a clear, descriptive heading that identifies its purpose.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels.
        
### **Semantic markup**

*   The modal dialog container element has `role="dialog"` in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value.
        
*   The modal dialog has an accessible name in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value.
        
*   Content outside the active modal dialog is programmatically inert.
    
    *   **Success Criteria:** 1.3.1 Information and Relationships.
        
### **Keyboard**

*   When the modal dialog opens, keyboard focus is moved to the modal.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order.
        
*   When the modal dialog opens, initial focus is sent to the modal heading.
    
    *   **Type:** Best practice.
        
*   While the modal dialog is open, focus is trapped inside of the modal container. Focus does not move to elements in the background.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order.
        
*   The modal dialog can be closed with a keyboard, such as using a close or cancel button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard.
        
*   Pressing the Escape key closes the modal dialog.
    
    *   **Type:** Best Practice
        
*   When the modal dialog is closed, focus is returned a logical position, such as the button that opened it.
    
    *   **Success Criteria:** 2.4.3 Focus Order.
        
*   All interactive elements within the modal dialog have a clear focus style when they receive focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible.
        
*   When an element within the modal dialog receives focus using a keyboard, it is not completely hidden by other content, such as a popup menu or tooltip.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum).
        
### **Visual design**

*   Content outside an active modal dialog is dimmed or blurred to indicate its inert state.
    
    *   **Type:** Best practice.
        
*   Text within the modal dialog meets the minimum contrast ratio of 4.5:1 against its background, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum).
        
*   Non-text elements (e.g., icons, borders of input fields) within the modal dialog have a contrast ratio of at least 3:1 against their background.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast.
        
*   If interactive elements within the modal dialog use custom focus styles, these styles have a contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast.
        
### **Adaptive UI**

*   Text within the modal dialog can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text.
        
*   The modal dialog can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text spacing within the modal dialog can be increased without text overlapping, truncating, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing.