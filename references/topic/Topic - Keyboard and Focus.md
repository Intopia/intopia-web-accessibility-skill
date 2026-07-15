---
title: "Topic: Keyboard and Focus"
metadata:
  author: Intopia
  version: "1.0"
---
# Keyboard and Focus

Load this topic for any interactive or custom widget, and whenever focus moves programmatically: modals, menus, disclosures, tabs, SPA navigation, or any dynamic content that appears, updates, or is dismissed.

## Keyboard Navigation

- Tab order follows logical visual reading order (top to bottom, left to right).
- Use `tabindex="0"` to include custom elements in the tab order.
- Use `tabindex="-1"` only for programmatic focus management.
- Never use `tabindex` values greater than 0.
- Focus must never leave the visible viewport or be lost.

## Focus Indicators

- All interactive elements must have a visible focus indicator.
- Use `outline: 2px solid` with `outline-offset: 2px` for focus states. Do not rely on the default browser focus ring in environments that apply `outline: 0` or `outline: none`.
- Minimum 3:1 contrast ratio between the focus indicator and the adjacent background.
- Use `:focus-visible` to show focus rings for keyboard users without affecting mouse users.
- Never remove `outline` without an equally visible replacement.

## Focus Management on Dynamic Content

| Pattern           | Required behaviour                                           |
| :---------------- | :----------------------------------------------------------- |
| Modal opens       | Move focus to modal heading. Trap focus inside. Return focus to trigger on close. |
| Menu opens        | Move focus to first item. Return focus to menu button on close. |
| Toast / alert     | Use `role="status"` or `role="alert"` with `aria-live`. Do not move focus. |
| Accordion expands | Focus stays on the header trigger. Do not move it.           |
| SPA navigation    | Move focus to new page heading or `<main>`.                  |
