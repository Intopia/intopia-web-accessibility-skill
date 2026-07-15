---
title: "Topic: Drag and Drop"
metadata:
  author: Intopia
  version: "1.0"
---
# Drag and Drop

Load this topic for any drag-and-drop interaction: reorderable lists, kanban boards, file sorting, or repositioning items.

Any drag-and-drop interaction (reorderable lists, kanban boards, file sorting, repositioning items) must be fully operable without a pointer drag gesture. Pointer dragging may remain as an enhancement, but it must never be the only way to perform the action.

## Keyboard operation

Provide a keyboard-operable mechanism using one of the following patterns. Either pattern must use native `<button>` elements, follow a logical tab order, and have visible focus indicators meeting 3:1 contrast.

- **Drag handle with keyboard controls:** Make the handle a focusable native `<button>`. On activation (Enter or Space) the item enters a "grabbed" state where arrow keys move it between valid positions, Enter or Space drops it, and Escape cancels and returns it to its original position.
- **Move menu / move controls:** Provide a `<button>` (e.g. "Move item") that opens a menu or exposes controls letting the user choose a new position directly (move up, move down, move to top, move to a named target). This is often simpler and more robust than a grabbed state, particularly when moving items between containers.

## Screen reader feedback

The interaction must expose its state and outcome to screen reader users:

- Give each draggable item and each drop target an accessible name describing what it is and where it is (e.g. "Task A, item 2 of 5, To Do column").
- Describe the available keys in help text associated with the handle via `aria-describedby` (e.g. "Press Enter to pick up, arrow keys to move, Escape to cancel").
- Announce every meaningful change through a polite live region (`role="status"` / `aria-live="polite"`): pick-up ("Grabbed Task A, position 2 of 5"), each move ("Task A, now position 3 of 5"), drop ("Dropped Task A at position 3 of 5"), and cancel ("Cancelled, Task A returned to position 2 of 5"). Do not use `aria-live="assertive"` for reorder status; assertive is reserved for critical, time-sensitive content.
- Do not move focus to make an announcement; use the live region and keep focus on the item or handle being moved.
- Do not use `aria-pressed` to convey the grabbed state; communicate it through the live region announcement and `aria-describedby` help text instead.

## WCAG considerations

- **2.5.7 Dragging Movements (AA):** Functionality that uses a dragging movement must also be operable with a single pointer without dragging (e.g. tap to select then tap to place, or up/down controls). The keyboard mechanism above does not by itself satisfy 2.5.7 — also provide a non-dragging pointer path.
- **2.1.1 Keyboard (A):** All functionality available via drag must be available from the keyboard, with no keyboard trap. Escape must always exit the grabbed state.
- **2.5.8 Target Size (AA):** Drag handles and move controls must meet the 24×24px minimum target size.

## Acceptance

- Item can be reordered or moved using the keyboard alone.
- Item can be reordered or moved using single-pointer taps without a drag gesture.
- Grab, move, drop, and cancel are each announced to screen reader users via a polite live region.
- Escape cancels an in-progress move and restores the original position.
- Handles and controls are native buttons with visible focus and adequate target size.
