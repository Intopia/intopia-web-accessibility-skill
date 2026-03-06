---
title: "Acceptance Criteria: Radio Group"
metadata:
  author: Intopia
  version: "1.0"
---
A radio group is a set of related radio buttons where users can select exactly one option at a time.

**Labels and messaging**

*   The radio group has a visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The radio group’s label provides a descriptive label for radio buttons in the group.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
*   The radio button has a visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The radio button’s label describes the purpose of the radio button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.2 Labels or Instructions
        
*   The radio group's error message concisely and precisely describes the issue.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.1 Error Identification
        
*   The error message tells the user how to fix the error.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.3.3 Error Suggestion
        
*   There is an accessible visual indicator to identify when the radio group is required.
    
    *   **Type:** Best Practice
        
*   There is an accessible visual indicator to identify when the radio button is disabled.
    
    *   **Type:** Best Practice
        
**Semantic markup**

*   The radio buttons are grouped programmatically, and the group role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The radio group’s visible label is the accessible name for the radio group in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The radio button’s accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The radio button’s accessible name includes the exact text from its visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.5.3 Label in Name
        
*   The error message is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The radio group's required state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The radio button’s disabled state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The radio button’s role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The radio button’s checked and not checked state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
**Keyboard**

*   The radio buttons are focusable using the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The radio buttons can be checked using a keyboard, and when a radio button is checked, the other radio buttons in the group are automatically deselected.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When a radio button is focused using the keyboard, the Left and Right or Up and Down arrow keys move focus between radio buttons within the same group, and the currently focused radio button is automatically selected (and any previously selected button is deselected).
    
    *   **Type:** Best Practice
        
*   The radio buttons have a clear focus style when they receive focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
**Visual design**

*   If the radio button uses a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   The error state does not use colour as the only method to indicate an error.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.1 Use of Color
        
*   The radio button’s outline and checked state has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold). The contrast requirements apply to all of the radio button’s states (default, checked, focus, hover, error). Note, if the radio button is disabled it does not need to meet contrast requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
**Adaptive UI**

*   The radio group can be viewed at smaller screen widths (320px) without loss of content or functionality, and the user does not have to scroll horizontally to use them.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing