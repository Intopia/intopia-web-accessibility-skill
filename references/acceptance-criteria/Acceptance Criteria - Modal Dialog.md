---
title: "Acceptance Criteria: Modal Dialog"
metadata:
  author: Intopia
  version: "1.0"
---
A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert, meaning users cannot interact with content outside an active dialog window. Modal dialogs contain their tab sequence, and typically do not allow keyboard focus to move outside without closing the dialog.

### Labels and messaging
- The modal dialog has a clear, descriptive heading that identifies its purpose. (WCAG 2.4.6)
### Semantic markup
- The modal dialog container element has `role="dialog"` in the accessibility tree. (WCAG 4.1.2)
- The modal dialog has an accessible name in the accessibility tree. (WCAG 4.1.2)
- Content outside the active modal dialog is programmatically inert. (WCAG 1.3.1)

### Keyboard
- When the modal dialog opens, keyboard focus is moved to the modal. (WCAG 2.4.3)
- When the modal dialog opens, initial focus is sent to the modal heading. (BP)
- While the modal dialog is open, focus is trapped inside of the modal container. Focus does not move to elements in the background. (WCAG 2.4.3)
- The modal dialog can be closed with a keyboard, such as using a close or cancel button. (WCAG 2.1.1)
- Pressing the Escape key closes the modal dialog. (BP)
- When the modal dialog is closed, focus is returned a logical position, such as the button that opened it. (WCAG 2.4.3)
- All interactive elements within the modal dialog have a clear focus style when they receive focus using a keyboard. (WCAG 2.4.7)
- When an element within the modal dialog receives focus using a keyboard, it is not completely hidden by other content, such as a popup menu or tooltip. (WCAG 2.4.11)
### Visual design
- Content outside an active modal dialog is dimmed or blurred to indicate its inert state. (BP)
- Text within the modal dialog meets the minimum contrast ratio of 4.5:1 against its background, or 3:1 for large-scale text (24px or 18.5px and bold). (WCAG 1.4.3)
- Non-text elements (e.g., icons, borders of input fields) within the modal dialog have a contrast ratio of at least 3:1 against their background. (WCAG 1.4.11)
- If interactive elements within the modal dialog use custom focus styles, these styles have a contrast ratio of 3:1 against the background colour. (WCAG 1.4.11)
### Adaptive UI
- Text within the modal dialog can be increased up to 200% without being truncated, overlapping other text, or being cut off. (WCAG 1.4.4)
- The modal dialog can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. (WCAG 1.4.10)
- Text spacing within the modal dialog can be increased without text overlapping, truncating, or being cut off. (WCAG 1.4.12)
