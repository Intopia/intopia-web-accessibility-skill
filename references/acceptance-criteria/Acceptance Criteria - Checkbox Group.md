---
title: "Acceptance Criteria: Checkbox Group"
metadata:
  author: Intopia
  version: "2.0"
---
A checkbox group is a related set of checkboxes that allows users to select one, many, or no options from the group.

It extends the Checkbox pattern (`references/acceptance-criteria/Acceptance Criteria - Checkbox.md`). Apply Checkbox's criteria to every checkbox in the group, then apply the additional criteria below.

### **Labels and messaging**

*   The checkbox group has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The checkbox's group label provides a descriptive label for checkboxes in the group.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   Where the checkbox group has a constraint (for example, select at least one, or choose up to three), the constraint is stated in visible text near the group label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visual indicator to identify when the checkbox group is required.

    *   **Type:** Best Practice

*   The checkbox group's error message is close to the checkbox group.

    *   **Type:** Best Practice

### **Semantic markup**

*   The checkbox is part of a group. The group role is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The checkbox's group label is the accessible name for the checkbox group in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   When a visual indicator identifies that the checkbox group is required, the required state is included in the accessibility tree on the group element.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The checkbox group's error message is programmatically associated with the checkbox group and is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships
