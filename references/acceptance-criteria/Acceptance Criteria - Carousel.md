---
title: "Acceptance Criteria: Carousel"
metadata:
  author: Intopia
  version: "1.0"
---
A carousel is a set of slides shown one at a time within a single container, where the user moves between slides using Previous and Next buttons and a set of slide-picker buttons (the "grouped" carousel pattern).

The Previous, Next and slide-picker controls are buttons. In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### **Semantic markup**

*   The carousel container has the region role in the accessibility tree.

    *   **Type:** Best practice

*   The carousel container has the role description via `aria-roledescription="slide"` in the accessibility tree.

    *   **Type:** Best practice

*   The carousel container has an accessible name in the accessibility tree.

    *   **Type:** Best practice

*   Each slide is contained in an element with `role="group"`.

    *   **Type:** Best practice

*   Each slide has the slide role description via `aria-roledescription="slide"` in the accessibility tree.

    *   **Type:** Best practice

*   Each slide has an accessible name in the accessibility tree.

    *   **Type:** Best practice

*   The slide's accessible name does not include the word "slide". A position string like "3 of 10" is acceptable when slides lack unique labels.

    *   **Type:** Best practice

*   When the slide changes, assistive technology announces the newly displayed slide.

    *   **Type:** Best practice

*   If there is visual pagination indicator that shows the updated position in the carousel, then assistive technology announces the new position.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.3 Status Message

*   If the slide-picker button is disabled, the disabled state via `aria-disabled` is in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The reading order of the slides in the accessibility tree matches the logical visual order.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.2 Meaningful Sequence

### **Keyboard**

*   All carousel controls (Previous, Next, and each slide-picker button) appear in the Tab order before the slide content.

    *   **Type:** Best practice

*   When a control is activated and the slide changes, focus remains on the activated control so the user can continue navigating.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.3 Focus Order

### **Visual design**

*   The slide-picker button for the current slide does not rely on colour alone to indicate the current state.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Color

*   Each control has a target size of at least 24 by 24 CSS pixels, or has sufficient spacing from adjacent targets. This is especially relevant to small slide-picker buttons.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.5.8 Target Size (Minimum)

### **Adaptive UI**

*   The carousel can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. Slides and controls reflow or stack as needed.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
