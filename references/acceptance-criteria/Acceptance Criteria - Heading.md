---
title: "Acceptance Criteria: Heading"
metadata:
  author: Intopia
  version: "1.0"
---
A heading is a structural label that introduces and organizes sections of content in a logical hierarchy.

### Labels and messaging

- The H1 describes the overall topic of the page. (WCAG 2.4.6)
- The H1 is the same or similar to the page title. (BP)

- The H1 is positioned at the start of the main content. (BP)

- There is only one H1 on the page. (BP)

- The section headings concisely describe the topic or purpose of the content that follows them. (WCAG 2.4.6)
### Semantic markup

- The heading role and level are included in the accessibility tree. (WCAG 1.3.1)
- The heading follows a logical hierarchy; for example, H3 is used for subheadings under H2. (WCAG 1.3.1)
- Heading levels do not skip; for example, the sequence should not jump from H2 directly to H4. (BP)

### Visual design

- The heading text meets the minimum contrast requirement of 4.5:1 against the background colour, or 3:1 for large-scale text (24 px or 18.5px and bold). (WCAG 1.4.3)
### Adaptive UI
- The heading can be increased in size up to 200% without truncating, overlapping with other text or being cut off. (WCAG 1.4.4)
- Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements. (WCAG 1.4.12)

## Code examples

```html
<!-- One h1, then levels in order with no skips (h2 to h4 is a fail) -->
<h1>Our Company Blog</h1>
<h2>Latest News</h2>
<h3>Product Launches</h3>
<h3>Company Events</h3>
```
