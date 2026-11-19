---
title: "Acceptance Criteria: Tooltip"
metadata:
  author: Intopia
  version: "1.0"
---
A tooltip is a small pop-up that shows extra information. The tooltip is only shown when you hover over a trigger interactive control or focus on the trigger using your keyboard. The tooltip is supporting content: the interactive control has its own function, separate from showing the tooltip.

The trigger control's own acceptance criteria (from its control type, such as Button or Link, which already include the Interactive Control acceptance criteria) continue to apply in full. The following acceptance criteria apply in addition, specific to the tooltip content itself.

### Semantic markup

- The tooltip content's accessible name is included in the accessibility tree. (WCAG 4.1.2)
- The tooltip's content has the tooltip role in the accessibility tree. (WCAG 4.1.2)
- When the tooltip content is visible, it is in the accessibility tree. (WCAG 1.3.1)
- The tooltip content is programmatically associated with its trigger using aria-describedby. (WCAG 1.3.1)
### Keyboard

- The tooltip content is visible when the interactive control has focus. (WCAG 2.1.1)
- The tooltip content is visible when the interactive control is hovered over. (WCAG 1.4.13)
- The tooltip content is dismissible by pressing the Escape key or clicking outside of it. (WCAG 1.4.13)
### Visual design

- The tooltip content remains visible when the mouse cursor moves from the trigger to the tooltip content itself. (WCAG 1.4.13)
- The tooltip content remains visible until the trigger loses hover or focus, the user dismisses it, or the information it contains becomes invalid. It does not disappear automatically after a fixed time while the trigger still has hover or focus. (WCAG 1.4.13)
### Adaptive UI

- The tooltip content can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. (WCAG 1.4.10)
