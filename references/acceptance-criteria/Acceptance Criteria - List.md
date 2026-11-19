---
title: "Acceptance Criteria: List"
metadata:
  author: Intopia
  version: "1.0"
---
A list is a structured collection of related items presented as ordered, unordered, or description content.

### Semantic markup
- If the order of the list items is important, such as a list of instructions, then the related items are in an ordered list. (WCAG 1.3.1)
- If the order of the list items is not critical to understanding the content, then the related items are in an unordered list. (WCAG 1.3.1)
- If the list items contain terms and definitions, then the related items are in a description list. (WCAG 1.3.1)
- For ordered and unordered lists, the list semantics such as the role and level are included in the accessibility tree. (WCAG 1.3.1)
- For description lists, the list semantics such as role (descriptionlist, term and description) and level are included in the accessibility tree. (WCAG 1.3.1)
### Visual design
- Text meets the minimum contrast requirement of 4.5:1 against the background colour, or 3:1 for large-scale text (24 px or 18.5px and bold) (WCAG 1.4.3)
### Adaptive UI
- The list can be viewed at smaller screen widths (320px) without the user having to scroll horizontally. If needed, the list items stack vertically to accommodate the smaller screen widths. (WCAG 1.4.10)
- Text can be increased up to 200% without being truncated, overlapping other text, or being cut off. (WCAG 1.4.4)
- Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements. (WCAG 1.4.12)

## Code examples

```html
<!-- Order matters: ol. Order doesn't matter: ul. Terms and definitions: dl. -->
<ol><li>Prepare ingredients</li><li>Mix dry ingredients</li></ol>

<ul><li>Apples</li><li>Bananas</li></ul>

<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>
```
Note: ARIA `list` / `listitem` roles don't tell ordered from unordered; assistive technologies treat them as unordered.
