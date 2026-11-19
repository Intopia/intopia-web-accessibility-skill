---
title: "Acceptance Criteria: Image"
metadata:
  author: Intopia
  version: "1.0"
---
An image is non-text visual content that needs an appropriate text alternative unless it is purely decorative.

### Semantic markup

- The image's role is included in the accessibility tree. (WCAG 1.1.1)
- The image's text alternative is included as the accessible name in the accessibility tree. (WCAG 1.1.1)
- **If the image is decorative:** The image is purely decorative. It is not included in the accessibility tree. (WCAG 1.1.1)
### Media alternatives

- The image has a text alternative that communicates the meaning or content that is displayed visually (WCAG 1.1.1)
### Visual design

- The image is not an image of text, unless the image is a logo, the presentation of text is essential to convey the information or the presentation can be visually customised to meet the user's needs. (WCAG 1.4.5)

## Code examples

```html
<img src="/team.jpg" alt="Five staff members standing outside the Cairns office">
<svg role="img" aria-label="Five staff members outside the office">...</svg>

<!-- Decorative: removed from the accessibility tree -->
<img src="/swirl.png" alt="">
<svg aria-hidden="true" focusable="false">...</svg>
```
