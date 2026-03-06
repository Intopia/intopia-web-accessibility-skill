---
title: "Acceptance Criteria: Tabs"
metadata:
  author: Intopia
  version: "1.0"
---
A tab component consists of a list of tab elements (the tab list) and associated tab panels (the content areas). Activating a tab element displays its corresponding tab panel and hides others.

### **Labels and messaging**

*   Each tab element has a visible label that clearly describes the content of its associated tab panel.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels
        
### **Semantic markup**

*   The container for the tab elements has `role="tablist"`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Each tab element has `role="tab"`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Each tab panel has `role="tabpanel"`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The active (selected) tab element has `aria-selected="true"`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Inactive (unselected) tab elements have `aria-selected="false"`.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Each tab element has `aria-controls` set to the `id` of its corresponding tab panel.
    
    *   **Type:** Best Practice
        
*   Each tab panel has an accessible name in the accessibility tree, usually by setting `aria-labelledby` to the `id` of its controlling tab element.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Only the active tab panel is visible and included in the accessibility tree (for example, by removing the `hidden` attribute or setting `display: block`).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
### **Keyboard**

*   The tab elements are navigable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   Only the selected tab element is included in the page's tab order (`tabindex="0"`). All other tab elements have `tabindex="-1"`.
    
    *   **Type:** Best Practice
        
*   When focus is on a tab element within the tab list, the Left and Right arrow keys (for horizontal tabs) or Up and Down arrow keys (for vertical tabs) move focus between tab elements.
    
    *   **Type:** Best Practice
        
*   If using manual activation, pressing the Enter or Space key on a tab element activates it, displays its associated tab panel, and keeps focus on the activated tab element.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When a tab element is activated, focus remains on the activated tab element.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
        
*   Tab elements have a clear focus style when they receive focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible
        
*   When a tab element receives focus using a keyboard, it is not completely hidden by other content, such as a popup menu or tooltip.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum)
        
### **Visual design**

*   The currently selected tab element is visually distinct from unselected tab elements (for example, different background colour, border, or text style).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.1 Use of Color
        
*   All text within the tab component (tab labels, panel content) meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
*   If tab elements use a custom focus style, the focus style has a contrast ratio of 3:1 against the background colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### **Adaptive UI**

*   Text within the tab component can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   The tab component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. tab elements or panels should reflow or stack as needed.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text spacing within the tab component can be increased without text overlapping, truncating, or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing