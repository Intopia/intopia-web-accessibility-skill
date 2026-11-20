---
title: "Acceptance Criteria: Link"
metadata:
  author: Intopia
  version: "1.0"
---
A link is an interactive element that takes users to another resource, location, page, or state.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging
- The link informs users where the link goes to. (WCAG 2.4.4)
- The link informs users when it is for the current page or step. (BP)

### Semantic markup
- The link has the link role in the accessibility tree. (WCAG 4.1.2)
- When the current state is communicated visually, then the state is included in the accessibility tree. (WCAG 4.1.2)
### Keyboard
- The link is focusable using the Tab key on the keyboard. (WCAG 2.1.1)
- The link is activated by pressing the Enter key on the keyboard. (WCAG 2.1.1)
### Visual design
- The link does not look like plain text. (BP)
- The link does not rely on color alone to indicate it is a link (e.g., it is underlined, bold, or uses an icon). (WCAG 1.4.1)

## Code examples

```html
<!-- Accessible name starts with the visible text -->
<a href="/contact" aria-label="Contact us, opens support page">Contact us</a>

<!-- Current page in navigation -->
<a href="/contact" aria-current="page">Contact us</a>
```
