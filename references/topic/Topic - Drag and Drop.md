---
title: "Topic: Drag and Drop"
metadata:
  author: Intopia
  version: "1.1"
---
# Drag and Drop

Every drag action must also work without dragging, by keyboard (WCAG 2.1.1) and by single pointer taps (WCAG 2.5.7). Dragging can stay as an enhancement.

## Controls
Use native `<button>` elements, in a logical tab order, with visible 3:1 focus and at least 24×24 px (WCAG 2.5.8). Use one or both patterns:
- **Move controls** (simplest, and works for touch): buttons such as "Move Task A to Doing", "Move up", "Move down".
- **Grab handle:** a button that picks the item up on Enter or Space; arrow keys move it, Enter or Space drops it, Escape cancels and restores the original position. Describe the keys with `aria-describedby`. Don't use `aria-pressed` for the grabbed state.

## Feedback
- Name each item and each drop target by what and where it is ("Task A, item 2 of 5, To Do column").
- Announce pick-up, each move, drop and cancel in a polite `role="status"` region, including the destination and position ("Task A moved to Doing, position 2 of 3"). Never use assertive.
- Keep focus on the item or control being moved. Don't move focus to make an announcement.
