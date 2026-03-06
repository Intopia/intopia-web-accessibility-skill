---
title: "Acceptance Criteria: List"
metadata:
  author: Intopia
  version: "1.0"
---
A list is a structured collection of related items presented as ordered, unordered, or description content.

### **Semantic markup**

*   If the order of the list items is important, such as a list of instructions, then the related items are in an ordered list.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   If the order of the list items is not critical to understanding the content, then the related items are in an unordered list.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   If the list items contain terms and definitions, then the related items are in a description list.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   For ordered and unordered lists, the list semantics such as the role and level are included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   For description lists, the list semantics such as role (descriptionlist, term and description) and level are included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
### **Visual design**

*   Text meets the minimum contrast requirement of 4.5:1 against the background colour, or 3:1 for large-scale text (24 px or 18.5px and bold)
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
### **Adaptive UI**

*   The list can be viewed at smaller screen widths (320px) without the user having to scroll horizontally. If needed, the list items stack vertically to accommodate the smaller screen widths.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing