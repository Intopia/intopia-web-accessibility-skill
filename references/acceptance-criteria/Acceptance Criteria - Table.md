---
title: "Acceptance Criteria: Table"
metadata:
  author: Intopia
  version: "1.0"
---
A table is a static tabular structure used to present data in rows and columns. It is not an interactive widget itself, meaning its cells are not focusable or selectable. However, tables often contain interactive widgets within their cells. For interactive tabular data where cells themselves are interactive or selectable, the Grid pattern should be considered instead. **Authors are strongly encouraged to use native HTML table elements whenever possible** due to their inherent accessibility and broad support.

### Labels and messaging

*   The caption describes the overall topic of the table.
    
    *   **Type:** Best practice
        
*   The summary describes how the data is organised.
    
    *   **Type:** Best practice
        
*   The column headers describe the content of the columns.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   None of the table header cells are blank.
    
    *   **Type:** Best practice
        
### Semantic markup

*   The caption is correctly associated with the table in the accessibility tree, with the table being labelled by the caption element.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The summary is programmatically associated with the table.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The column headers are programmatically associated with the data cells they describe.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   For tables with irregular headers, the header cells are programmatically associated with the data cells they describe.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
*   The table is correctly marked up so that information is provided to assistive technology users in the correct reading order.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
### Visual design

*   The table uses styling to differentiate the header cells from the data cells.
    
    *   **Type:** Best practice
        
*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum)
        
### Adaptive UI

*   The table can be viewed at smaller screen widths (320px) without loss of content or functionality. Tables are allowed to scroll horizontally when needed. See 1.4.10 Reflow for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
        
*   Text can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing