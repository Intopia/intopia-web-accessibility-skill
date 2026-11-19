---
title: "Acceptance Criteria: Checkbox Group"
metadata:
  author: Intopia
  version: "2.0"
---
A checkbox group is a related set of checkboxes that allows users to select one, many, or no options from the group.

It extends the Checkbox pattern (`references/acceptance-criteria/Acceptance Criteria - Checkbox.md`). Apply Checkbox's criteria to every checkbox in the group, then apply the additional criteria below.

### Labels and messaging
- The checkbox group has a visible label. (WCAG 3.3.2)
- The checkbox's group label provides a descriptive label for checkboxes in the group. (WCAG 2.4.6)
- Where the checkbox group has a constraint (for example, select at least one, or choose up to three), the constraint is stated in visible text near the group label. (WCAG 3.3.2)
- There is a visual indicator to identify when the checkbox group is required. (BP)
- The checkbox group's error message is close to the checkbox group. (BP)

### Semantic markup
- The checkbox is part of a group. The group role is included in the accessibility tree. (WCAG 1.3.1)
- The checkbox's group label is the accessible name for the checkbox group in the accessibility tree. (WCAG 4.1.2)
- When a visual indicator identifies that the checkbox group is required, the required state is included in the accessibility tree on the group element. (WCAG 1.3.1)
- The checkbox group's error message is programmatically associated with the checkbox group and is included in the accessibility tree. (WCAG 1.3.1)
