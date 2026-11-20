---
title: "Acceptance Criteria: Checkbox"
metadata:
  author: Intopia
  version: "1.1"
---
A checkbox is a form control that lets users select or clear a single independent option.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging
- The checkbox has a visible label. (WCAG 3.3.2)
- The checkbox's label describes the purpose of the checkbox. (WCAG 2.4.6)
- The error message concisely and precisely describes the issue. (WCAG 3.3.1)
- The error message includes how to fix it where possible. (WCAG 3.3.3)
- The error message is close to the checkbox. (BP)
- There is a visual indicator to identify when the checkbox is required. (BP)
- There is a visual indicator to identify when the checkbox is disabled. (BP)

### Semantic markup
- The checkbox has the checkbox role in the accessibility tree. (WCAG 4.1.2)
- The checkbox's checked and not checked state is included in the accessibility tree. (WCAG 4.1.2)
- The error message is programmatically associated with the checkbox and is included in the accessibility tree. (WCAG 1.3.1)
- The checkbox's required state is included in the accessibility tree. (WCAG 1.3.1)
- The checkbox's disabled state is included in the accessibility tree. (WCAG 1.3.1)
### Keyboard
- The checkbox can be checked and unchecked using a keyboard. (WCAG 2.1.1)
### Visual design
- The error state does not use colour as the only method to indicate an error. (WCAG 1.4.1)
### Adaptive UI
- The checkbox can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use them. (WCAG 1.4.10)
