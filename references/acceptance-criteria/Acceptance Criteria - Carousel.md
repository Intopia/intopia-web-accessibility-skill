---
title: "Acceptance Criteria: Carousel"
metadata:
  author: Intopia
  version: "1.0"
---
A carousel is a set of slides shown one at a time within a single container, where the user moves between slides using Previous and Next buttons and a set of slide-picker buttons (the "grouped" carousel pattern).

The Previous, Next and slide-picker controls are buttons. In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### Semantic markup
- The carousel container has the region role in the accessibility tree. (BP)
- The carousel container has the carousel role description via `aria-roledescription="carousel"` in the accessibility tree. (BP)
- The carousel container has an accessible name in the accessibility tree. (BP)
- Each slide has the group role in the accessibility tree. (BP)
- Each slide has the slide role description via `aria-roledescription="slide"` in the accessibility tree. (BP)
- Each slide has an accessible name in the accessibility tree. (BP)
- The slide's accessible name does not include the word "slide". A position string like "3 of 10" is acceptable when slides lack unique labels. (BP)
- When the slide changes, assistive technology announces the newly displayed slide. (BP)
- If there is a visual pagination indicator that shows the updated position in the carousel, then assistive technology announces the new position. (WCAG 4.1.3)
- If the slide-picker button is disabled, the disabled state via `aria-disabled` is in the accessibility tree. (WCAG 4.1.2)
- The reading order of the slides in the accessibility tree matches the logical visual order. (WCAG 1.3.2)
### Keyboard
- All carousel controls (Previous, Next, and each slide-picker button) appear in the Tab order before the slide content. (BP)
- When a control is activated and the slide changes, focus remains on the activated control so the user can continue navigating. (WCAG 2.4.3)
### Visual design
- The slide-picker button for the current slide does not rely on colour alone to indicate the current state. (WCAG 1.4.1)
- Each control has a target size of at least 24 by 24 CSS pixels, or has sufficient spacing from adjacent targets. This is especially relevant to small slide-picker buttons. (WCAG 2.5.8)
### Adaptive UI
- The carousel can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. Slides and controls reflow or stack as needed. (WCAG 1.4.10)
