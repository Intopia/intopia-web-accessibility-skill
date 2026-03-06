---
title: "Acceptance Criteria: Page Language"
metadata:
  author: Intopia
  version: "1.0"
---
Page language defines the primary and any alternate human languages used in page content so assistive technologies can interpret text correctly.

### Semantic markup

*   The primary language of the page is correctly identified and set on the `<html>` element.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.1.1 Language of Page (A)
        
*   If part of the content is in a different language from the rest of the page, the element containing that content should use the `lang` attribute to indicate the correct language.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 3.1.2 Language of Parts (AA)